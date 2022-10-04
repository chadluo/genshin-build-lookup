import * as Bookmarks from "./bookmarks";
import * as Characters from "./characters";
import * as Enemies from "./enemies";
import * as Keyboard from "./keyboard";
import * as Materials from "./materials";
import "./style.css";
import * as Types from "./types";
import * as Weapons from "./weapons";

/*** version specific contents ***/

/* 3.0 */
const recent_new = [
  "Candace",
  "Cyno",
  "Nilou",
  "Staff of the Scarlet Sands",
  "Key of the Khaj-Nisut",
  "Wandering Evenstar",
  "Makhaira Aquamarine",
  "Missive Windspear",
  "Xiphos’ Moonlight",
];

const upcoming: string[] = [];

/*** version specific contents ***/

const selectors: HTMLElement = document.getElementById("selectors")!;
const output: HTMLElement = document.getElementById("output")!;
const lang_select: HTMLElement = document.getElementById("lang-select")!;

type TimezoneNames = "Asia" | "Europe" | "America";
const timezones: { [tz in TimezoneNames]: number } = { Asia: 8, Europe: 1, America: -5 };

const regions: { [id in Types.Region]: Types.I18nObject } = {
  Mondstadt: { en: ["Mondstadt"], "zh-CN": ["蒙德"] },
  Liyue: { en: ["Liyue"], "zh-CN": ["璃月"] },
  Inazuma: { en: ["Inazuma"], "zh-CN": ["稻妻"] },
  Sumeru: { en: ["Sumeru"], "zh-CN": ["须弥"] },
};

const i18n: { [id: string]: Types.I18nObject } = {
  supportedLanguageSelectors: { en: ["English"], "zh-CN": ["简体中文"] },
  siteTitle: { en: ["Yuanliao: Genshin Impact Build Lookup"], "zh-CN": ["原料：原神培养查询"] },
  delimiter: { en: [" | "], "zh-CN": ["｜"] },
  character: { en: ["Characters"], "zh-CN": ["角色"] },
  weapon: { en: ["Weapons"], "zh-CN": ["武器"] },
  enemies_domains: { en: ["Enemies & Domains"], "zh-CN": ["秘境讨伐"] },
  weekly_boss: { en: ["Weekly Bosses"], "zh-CN": ["周本"] },
  boss: { en: ["Bosses"], "zh-CN": ["首领"] },
  talent_domain: { en: ["Talent Domains"], "zh-CN": ["天赋本"] },
  weapon_domain: { en: ["Weapon Domains"], "zh-CN": ["武器本"] },
  today: { en: ["Today"], "zh-CN": ["今日"] },
  Asia: { en: ["Asia / TW, HK, MO / CN"], "zh-CN": ["亚服、港澳台服、国服"] },
  Europe: { en: ["Europe"], "zh-CN": ["欧服"] },
  America: { en: ["America"], "zh-CN": ["美服"] },
};

/**
 * Index same as {@link Date.getDay}; [0] declared but not used.
 */
const i18nWeekdays: Types.I18nObject[] = [
  { en: ["Sun"], "zh-CN": ["日"] },
  { en: ["Mon, Thu, Sun"], "zh-CN": ["一四日"] },
  { en: ["Tue, Fri, Sun"], "zh-CN": ["二五日"] },
  { en: ["Wed, Sat, Sun"], "zh-CN": ["三六日"] },
];

const lastQuery = { id: "", weekday: "" };

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => console.log("SW registered: ", registration))
      .catch((registrationError) => console.log("SW registration failed: ", registrationError));
  });
}

window.addEventListener("DOMContentLoaded", () => {
  lang_select.innerHTML = Object.entries(i18n.supportedLanguageSelectors)
    .map(([lang, name]) => `<option value="${lang}">${name}</option>`)
    .join("");

  const lang_candidate: Types.SupportedLanguages = (localStorage.getItem("lang") ??
    navigator.language) as Types.SupportedLanguages;
  const lang = i18n.supportedLanguageSelectors.hasOwnProperty(lang_candidate) ? lang_candidate : "en";
  setLanguage(lang);

  JSON.parse(localStorage.getItem("bookmarks") ?? "[]").forEach(
    ([type, id, weekday]: [string, string, number]) => (output.innerHTML += renderQTableContent(type, id, weekday))
  );
  document.querySelectorAll(".qtable").forEach((element) => element.classList.remove("highlighted"));

  Keyboard.initKeyboard();
});

function hasBookmarks(): boolean {
  return JSON.parse(localStorage.getItem("bookmarks") ?? "[]").length !== 0;
}

/* nav */

document.querySelector("nav .links")!.addEventListener("click", (event) => {
  const link = event.target as HTMLElement;
  if (!link || link.tagName !== "A") return;
  const target = document.getElementById(link.dataset.target ?? "")!;
  let details = target.querySelector("details.section") as HTMLDetailsElement;
  if (details) details.open = true;
  target.scrollIntoView();
});

/* language selector */

lang_select!.addEventListener("change", (event) =>
  setLanguage((event.target as HTMLSelectElement).value as Types.SupportedLanguages)
);

function setLanguage(lang: Types.SupportedLanguages) {
  document.documentElement.setAttribute("lang", lang);
  document.title = i18n.siteTitle[lang].join("");
  setSearchItems(lang);
  (lang_select as HTMLSelectElement).value = lang;
  localStorage.setItem("lang", lang);
}

function setSearchItems(lang: Types.SupportedLanguages) {
  document.getElementById("searchItems")!.innerHTML = ([] as Types.WishObject[])
    .concat(Characters.characters)
    .concat(Weapons.weapons)
    .sort((w1, w2) => w1.id.localeCompare(w2.id))
    .map((w) => `<option value="${w.id}">${w.name[lang].join("")}</option>`)
    .join("");
}

/* content tables */

customElements.define(
  "characters-table",
  class extends HTMLElement {
    constructor() {
      super();
      const byRarity = groupWishObjects((o) => o.rarity, Characters.characters);
      const rarities = Array.from(byRarity.keys()).sort().reverse();
      this.innerHTML = `<details class="section" ${hasBookmarks() ? "" : "open"}>
      <summary>${formatTableCaption(Types.TYPE_CHARACTER)}</summary>
      <table class="ctable">${rarities.map((rarity) => this.showByRarity(rarity, byRarity)).join("")}</table>
      </details>`;
    }

    showByRarity(rarity: number, byRarity: Map<number, Characters.Character[]>) {
      const cs: Characters.Character[] = byRarity.get(rarity)!;
      return `<tr><th>${"⭐".repeat(rarity)}</th>
      <td>${cs.map((c) => renderLink(c.id, Types.TYPE_CHARACTER, c.name)).join(formatName(i18n.delimiter))}</td></tr>`;
    }
  }
);

function groupWishObjects<WO extends Types.WishObject, T>(f: (w: WO) => T, ws: WO[]): Map<T, WO[]> {
  return ws.reduce((m, w) => {
    const key = f(w);
    const arr = m.get(key) ?? [];
    arr.push(w);
    m.set(key, arr);
    return m;
  }, new Map<T, WO[]>());
}

customElements.define(
  "weapons-table",
  class extends HTMLElement {
    constructor() {
      super();
      const byRarity = groupWishObjects((w) => w.rarity, Weapons.weapons);
      const rarities = Array.from(byRarity.keys()).sort().reverse();
      this.innerHTML = `<details class="section" ${hasBookmarks() ? "" : "open"}>
      <summary>${formatTableCaption(Types.TYPE_WEAPON)}</summary><table class="ctable">
      ${rarities
        .map((rarity) => {
          const ws2: Map<Weapons.Category, Weapons.Weapon[]> = groupWishObjects(
            (w) => w.category,
            byRarity.get(rarity)!
          );
          const categories = Array.from(ws2.keys());
          return `<tr><th rowspan="${categories.length}">${"⭐".repeat(rarity)}</th>
      <td>${formatWeaponIcon(categories[0])}${ws2
            .get(categories[0])!
            .map((w) => renderLink(w.id, Types.TYPE_WEAPON, w.name))
            .join(formatName(i18n.delimiter))}</td></tr>
      ${categories
        .slice(1)
        .map(
          (category) =>
            `<tr><td>${formatWeaponIcon(category)}${ws2
              .get(category)!
              .map((c) => renderLink(c.id, Types.TYPE_WEAPON, c.name))
              .join(formatName(i18n.delimiter))}</td></tr>`
        )
        .join("")}`;
        })
        .join("")}</table></details>`;
    }
  }
);

function formatTableCaption(type: string) {
  return `${getTableCaptionIcon(type)} ${formatName(i18n[type])}`;
}

/**
 * Get current weekday of domain materials at given timezone, assuming no local DST.
 *
 * - Asia/HK, MO, TW/CN: UTC+8
 * - Europe: UTC+1
 * - America: UTC-5
 *
 * @see https://genshin.hoyoverse.com/en/news/detail/6638
 * @returns weekday at specific server timezone, range [0..3]
 */
function getWeekday(zone: TimezoneNames) {
  const now = new Date();
  const utcH = now.getUTCHours();
  const utcDay = now.getUTCDay();
  const zoneH = utcH + timezones[zone];
  // refresh at 4am
  const zoneDay = ((zoneH > 28 ? utcDay + 1 : zoneH < 4 ? utcDay - 1 : utcDay) + 7) % 7;
  return zoneDay > 3 ? zoneDay - 3 : zoneDay;
}

function guessTimezone(): TimezoneNames {
  const offset = -new Date().getTimezoneOffset() / 60;
  return offset < -2 ? "America" : offset < 4.5 ? "Europe" : "Asia";
}

function getTableCaptionIcon(type: string): string {
  // prettier-ignore
  switch (type) {
    case "character":       return "🦸";
    case "weapon":          return "🗡️";
    case "enemies_domains": return "🌱";
    case "today":           return "📅";
    default:                return "";
  }
}

function formatWeaponIcon(category: Weapons.Category) {
  return `<span class="weapon-icon">${getWeaponIcon(category)}</span>`;
}

function getWeaponIcon(category: Weapons.Category) {
  // prettier-ignore
  switch (category) {
    case "Bow":      return "🏹";
    case "Catalyst": return "📖";
    case "Claymore": return "🐟";
    case "Polearm":  return "🌿";
    case "Sword":    return "🗡️";
    default:         return "";
  }
}

customElements.define(
  "enemies-table",
  class extends HTMLElement {
    constructor() {
      super();
      const weeklyBosses: Map<Types.Region, Enemies.Boss[]> = this.groupBosses(
        (b) => b.region,
        Enemies.bosses.filter((b) => b.type === "weekly_boss")
      );
      const weeklyBossKeys = Array.from(weeklyBosses.keys());
      const bosses: Map<Types.Region, Enemies.Boss[]> = this.groupBosses(
        (b) => b.region,
        Enemies.bosses.filter((b) => b.type === "boss")
      );
      const bossKeys = Array.from(bosses.keys());
      const talentDomains = Enemies.domains.filter((d) => d.type === "talent_domain");
      const weaponDomains = Enemies.domains.filter((d) => d.type === "weapon_domain");
      this.innerHTML = `<details class="section" ${hasBookmarks() ? "" : "open"}>
    <summary>${formatTableCaption("enemies_domains")}</summary>
    <table class="ctable">
    <tr>
      <th rowspan="${weeklyBossKeys.length}">${formatName(i18n.weekly_boss)}</th>
      ${this.formatBossesForRegion(regions[weeklyBossKeys[0]], weeklyBosses.get(weeklyBossKeys[0])!)}
      </tr>
      ${weeklyBossKeys
        .slice(1)
        .map((k) => `<tr>${this.formatBossesForRegion(regions[k], weeklyBosses.get(k)!)}</tr>`)
        .join("")}
      <tr><th rowspan="${bossKeys.length}">${formatName(i18n.boss)}</th>
      ${this.formatBossesForRegion(regions[bossKeys[0]], bosses.get(bossKeys[0])!)}
      </tr>
      ${bossKeys
        .slice(1)
        .map((k) => `<tr>${this.formatBossesForRegion(regions[k], bosses.get(k)!)}</tr>`)
        .join("")}
      <tr><th rowspan="${talentDomains.length}">${formatName(i18n.talent_domain)}</th>
        ${this.formatDomain(talentDomains[0].id, Types.TYPE_TALENT_DOMAIN)}</tr>
      ${talentDomains
        .slice(1)
        .map((d) => `<tr>${this.formatDomain(d.id, Types.TYPE_TALENT_DOMAIN)}</tr>`)
        .join("")}
      <tr><th rowspan="${weaponDomains.length}">${formatName(i18n.weapon_domain)}</th>
      ${this.formatDomain(weaponDomains[0].id, Types.TYPE_WEAPON_DOMAIN)}</tr>
      ${weaponDomains
        .slice(1)
        .map((d) => `<tr>${this.formatDomain(d.id, Types.TYPE_WEAPON_DOMAIN)}</tr>`)
        .join("")}</table></details>`;
    }

    groupBosses<T>(f: (b: Enemies.Boss) => T, bs: Enemies.Boss[]): Map<T, Enemies.Boss[]> {
      return bs.reduce((m, b) => {
        const key = f(b);
        const arr = m.get(key) ?? [];
        arr.push(b);
        m.set(key, arr);
        return m;
      }, new Map<T, Enemies.Boss[]>());
    }

    /**
     * Return structure: td*2
     */
    formatBossesForRegion(region: Types.I18nObject, bosses: Enemies.Boss[]) {
      return `<td>${formatName(region)}</td><td>${bosses
        .map((boss) => renderLink(boss.id, Types.TYPE_WEEKLY_BOSS, boss!.name))
        .join(formatName(i18n.delimiter))}</td>`;
    }

    formatDomain(id: string, type: Types.ItemType) {
      return `<td>${formatName(Enemies.domains.filter((d) => d.id === id)[0]!.name)}</td><td>${[1, 2, 3]
        .map((i) => {
          return `<a data-id='${id}' data-weekday='${i}' data-type='${type}' ${
            Bookmarks.isBookmarked(type, id, i) ? "class='bookmarked'" : ""
          }>${formatName(i18nWeekdays[i]!)}</a>`;
        })
        .join(formatName(i18n.delimiter))}</td>`;
    }
  }
);

function renderLink(id: string, type: Types.ItemType, names: Types.I18nObject) {
  const classes = [];
  if (Bookmarks.isBookmarked(type, id, 0)) {
    classes.push("bookmarked");
  }
  if (recent_new.includes(id)) {
    classes.push("recent-new");
  }
  if (upcoming.includes(id)) {
    classes.push("upcoming");
  }
  return `<a data-id='${id}' data-type='${type}' class="${classes.join(" ")}">${formatName(names)}</a>`;
}

customElements.define(
  "today-table",
  class extends HTMLElement {
    constructor() {
      super();
      const day = getWeekday(this.getTimezone());
      const weekdays = day === 0 ? [1, 2, 3] : [day];
      this.innerHTML = `<details class="section" ${day === 0 ? "" : "open"}>
        <summary>${formatTableCaption("today")}</summary>
        <div class="timezone-selector">${(["Asia", "Europe", "America"] as TimezoneNames[])
          .map(
            (zone) =>
              `<label><input type="radio" name="timezone" value="${zone}" ${
                zone === this.getTimezone() ? "checked" : ""
              }>${this.formatZoneOption(zone)}</label>`
          )
          .join("")}</div>
        <table class="qtable">${this.renderDomains(weekdays)}</table></details>`;
      this.addEventListener("change", this.refreshDomains);
    }

    getTimezone() {
      return (localStorage.getItem("timezone") as TimezoneNames) || guessTimezone();
    }

    formatZoneOption(zone: TimezoneNames) {
      return formatName(i18n[zone]) + formatName(i18n.delimiter) + formatName(i18nWeekdays[getWeekday(zone)]);
    }

    refreshDomains(event: Event) {
      const target = event.target as HTMLInputElement;
      if (target.name === "timezone") {
        const timezone = target.value as TimezoneNames;
        const day = getWeekday(timezone);
        const weekdays = day === 0 ? [1, 2, 3] : [day];
        this.querySelector("table.qtable")!.innerHTML = this.renderDomains(weekdays);
        localStorage.setItem("timezone", timezone);
      }
    }

    renderDomains(weekdays: number[]): string {
      return Enemies.domains
        .flatMap((domain) =>
          weekdays.map((weekday) =>
            renderQTableRows(
              domain.type,
              domain.id,
              findDomain(domain.id, weekday),
              byDomain(domain.id, weekday),
              weekday
            )
          )
        )
        .join("");
    }
  }
);

/* search result tables */

function findOrLoadQTable(event: Event) {
  const a = (event.composedPath() as HTMLElement[]).find((e) => e.tagName === "A");
  if (!a) return;
  const id = a.dataset.id ?? "";
  const weekday = a.dataset.weekday ?? "";
  if (id === lastQuery.id && weekday === lastQuery.weekday) return;
  const type = a.dataset.type;
  if (!type) return;
  findOrLoadQTable2(type, id, weekday);
}

function findOrLoadQTable2(type: string, id: string, weekday: string) {
  document.querySelectorAll(".qtable").forEach((element) => element.classList.remove("highlighted"));
  const existed = output.querySelector(`tr[name="${formatId(type, id, weekday)}"]`);
  if (!existed) {
    output.innerHTML += renderQTableContent(type, id, parseInt(weekday));
    const rows = output.querySelectorAll("th");
    rows[rows.length - 1].scrollIntoView();
  } else {
    existed.classList.add("highlighted");
    existed.scrollIntoView();
  }
  lastQuery.id = id;
  lastQuery.weekday = weekday;
}

selectors.addEventListener("click", findOrLoadQTable);
output.addEventListener("click", findOrLoadQTable);

document.querySelector("input[list='searchItems']")?.addEventListener("input", (event) => {
  // chromium/firefox populate from options
  if (!(event instanceof InputEvent) || event.inputType === "insertReplacementText") {
    const id = (event.target as HTMLInputElement).value;
    findOrLoadQTable2(
      Characters.characters.some((c) => c.id === id) ? Types.TYPE_CHARACTER : Types.TYPE_WEAPON,
      id,
      ""
    );
  }
});

function renderQTableContent(type: string, id: string, weekday: number): string {
  switch (type) {
    case Types.TYPE_CHARACTER:
      return renderQTableRows(type, id, findCharacter(id), byCharacter(id), weekday);
    case Types.TYPE_WEAPON:
      return renderQTableRows(type, id, findWeapon(id), byWeapon(id), weekday);
    case Types.TYPE_WEEKLY_BOSS:
    case Types.TYPE_BOSS:
    case Types.TYPE_ENEMY:
      return renderQTableRows(type, id, findEnemy(id), byEnemy(id), weekday);
    case Types.TYPE_TALENT_DOMAIN:
    case Types.TYPE_WEAPON_DOMAIN:
      return renderQTableRows(type, id, findDomain(id, weekday), byDomain(id, weekday), weekday);
    default:
      return "";
  }
}

function findCharacter(character: string): Types.I18nObject {
  return Characters.characters.find((c) => c.id === character)!.name;
}

function byCharacter(
  character: string
): Map<Materials.Material, [Enemies.Domain, number][] | Enemies.Boss[] | Enemies.Enemy[]> {
  const map = new Map<Materials.Material, [Enemies.Domain, number][] | Enemies.Boss[] | Enemies.Enemy[]>();
  const materials = Characters.characters.find((c) => c.id === character)!.materials;
  return materials === ""
    ? map
    : materials.reduce(
        (map, m: string) => (
          map.set(Materials.materials.filter((material) => material.id === m)[0]!, findEnemiesForMaterial(m)), map
        ),
        map
      );
}

function findWeapon(weapon: string): Types.I18nObject {
  return Weapons.weapons.find((w) => w.id === weapon)!.name;
}

function byWeapon(
  weapon: string
): Map<Materials.Material, [Enemies.Domain, number][] | Enemies.Boss[] | Enemies.Enemy[]> {
  const map = new Map<Materials.Material, [Enemies.Domain, number][] | Enemies.Boss[] | Enemies.Enemy[]>();
  const materials = Weapons.weapons.find((w) => w.id === weapon)!.materials;
  return materials === ""
    ? map
    : materials.reduce(
        (map, m: string) => (
          map.set(Materials.materials.filter((material) => material.id === m)[0]!, findEnemiesForMaterial(m)), map
        ),
        map
      );
}

function findEnemiesForMaterial(m: string): [Enemies.Domain, number][] | Enemies.Boss[] | Enemies.Enemy[] {
  const dsm: [Enemies.Domain, number][] = Enemies.domains.map((d) => [d, d.materials_by_weekday.indexOf(m)]);
  const ds = dsm.filter(([, weekday]) => weekday !== -1);
  if (ds.length) return ds;
  const bs = Enemies.bosses.filter((b) => b.materials.includes(m));
  if (bs.length) return bs;
  return Enemies.enemies.filter((e) => e.materials.includes(m));
}

function findEnemy(enemy: string): Types.I18nObject {
  return [...Enemies.bosses, ...Enemies.enemies].find((b) => b.id === enemy)!.name;
}

function byEnemy(enemy: string): Map<Materials.Material, (Characters.Character | Weapons.Weapon)[]> {
  return [...Enemies.bosses, ...Enemies.enemies]
    .find((b) => b.id === enemy)!
    .materials.reduce(
      (map, material: string) => (
        map.set(Materials.materials.find((m) => m.id === material)!, [
          ...(map.get(Materials.materials.find((m) => m.id === material)!) ?? []),
          ...findCharactersForMaterial(material),
          ...findWeaponsForMaterial(material),
        ]),
        map
      ),
      new Map<Materials.Material, (Characters.Character | Weapons.Weapon)[]>()
    );
}

function findDomain(domainId: string, _weekday: number): Types.I18nObject {
  return Enemies.domains.find((d) => d.id === domainId)!.name;
}

function byDomain(domainId: string, weekday: number): Map<Materials.Material, Types.WishObject[]> {
  const domain = Enemies.domains.filter((d) => d.id === domainId)[0]!;
  const material = domain.materials_by_weekday[weekday];
  const map = new Map();
  if (material) {
    map.set(
      Materials.materials.find((m) => m.id === material)!,
      domain.type === "weapon_domain" ? findWeaponsForMaterial(material) : findCharactersForMaterial(material)
    );
  }
  return map;
}

function findCharactersForMaterial(m: string): Characters.Character[] {
  return Characters.characters.filter((c) => c.materials !== "" && c.materials.includes(m));
}

function findWeaponsForMaterial(m: string): Weapons.Weapon[] {
  return Weapons.weapons.filter((w) => w.materials.includes(m));
}

/**
 * Sample structure:
 *
 * | Character/Weapon | Material | Bosses             |
 * | Boss             | Material | Characters/Weapons |
 */
function renderQTableRows(
  type: Types.ItemType,
  id: string,
  name: Types.I18nObject,
  object: Map<Materials.Material, (Types.WishObject | [Enemies.Domain, number] | Enemies.Boss | Enemies.Enemy)[]>,
  weekday: number
) {
  const materials = Array.from(object.keys());
  const separator = "<span class='mobile'> / </span><span class='desktop'><br></span>";
  return `<tr name="${formatId(type, id, weekday)}">
      <th ${materials.length === 0 ? "" : `rowspan="${materials.length}"`}>
        <label><input type="checkbox" data-type="${type}" data-id="${id}"
        ${weekday ? `data-weekday="${weekday}"` : ""}
        ${Bookmarks.isBookmarked(type, id, weekday) ? "checked" : ""}>
        <div> ${(type === "talent_domain" || type === "weapon_domain"
          ? formatDomainName(name, weekday)
          : formatName(name)
        ).replaceAll(" / ", separator)}
        </div></label>
      </th>
      ${renderQTableRow(materials, object.get(materials[0])!)}
    </tr>
    ${
      materials.length === 0
        ? ""
        : materials
            .slice(1)
            .map((m) => `<tr ${formatMaterialType(m)}>${renderQTableRow([m], object.get(m)!)}</tr>`)
            .join("")
    }`;
}

function renderQTableRow(
  materials: Materials.Material[],
  objects: (Types.WishObject | [Enemies.Domain, number] | Enemies.Boss | Enemies.Enemy)[]
) {
  return `<td>${materials.length === 0 ? "" : formatName(materials[0].name)}</td>
    <td>${materials.length === 0 ? "" : formatArray(Materials.gems.includes(materials[0].id as any), objects)}</td>`;
}

function formatDomainName(name: Types.I18nObject, weekday: number) {
  return `${formatName(name)}<span class="domainWeekday"> / ${formatName(i18nWeekdays[weekday])}</span>`;
}

function formatMaterialType(m: Materials.Material) {
  return Materials.gems.includes(m.id as any)
    ? "class='gem'"
    : Materials.billets.includes(m.id) || Materials.forgingMaterials.includes(m.id)
    ? "class='billet'"
    : "";
}

/**
 * Type, Id, Weekday
 */
function formatId(...parts: any[]) {
  return parts
    .filter((p) => p)
    .map((p) => p.toString())
    .join("-")
    .replaceAll(" ", "-")
    .replaceAll(/[’“”]/g, "");
}

function formatArray(
  collapsible: boolean,
  es: (Types.WishObject | [Enemies.Domain, number] | Enemies.Boss | Enemies.Enemy)[]
) {
  const links = es.map((e) => {
    const [obj, weekday] = Array.isArray(e) ? [e[0], e[1]] : [e, 0];
    switch (obj.type) {
      case Types.TYPE_TALENT_DOMAIN:
      case Types.TYPE_WEAPON_DOMAIN:
        return renderDomainLink(obj.id, weekday, obj.type, obj.name);
      default:
        return renderLink(obj.id, obj.type, obj.name);
    }
  });
  return collapsible
    ? `<details ${(document.getElementById("show-gems") as HTMLInputElement)?.checked ? "open" : ""}><summary>${
        links[0]
      }</summary>${links.slice(1).join("<br>")}</details>`
    : links.join(formatName(i18n.delimiter));
}

function renderDomainLink(id: string, weekday: number, type: Types.ItemType, names: Types.I18nObject) {
  const classes = [];
  if (Bookmarks.isBookmarked(type, id, weekday)) {
    classes.push("bookmarked");
  }
  return `<a data-id='${id}' data-weekday='${weekday}' data-type='${type}' class='${classes.join(" ")}'
  >${formatName(names)} ${formatName(i18nWeekdays[weekday])}</a>`;
}

function formatName(name: Types.I18nObject): string {
  return Object.entries(name)
    .map(([lang, value]) => `<span class="i18n" lang="${lang}">${formatMulti(value)}</span>`)
    .join("");
}

function formatMulti(names: string[]) {
  const showAlternatives = (document.querySelector("input#show-alternatives") as HTMLInputElement).checked;
  return names.length === 1
    ? names[0]
    : `<details class="alternative" ${showAlternatives ? "open" : ""}><summary>${names[0]}</summary>${names
        .slice(1)
        .join("<br>")}</details>`;
}

document.getElementById("clear")?.addEventListener("click", () => {
  output.innerHTML = "";
  lastQuery.id = "";
  lastQuery.weekday = "";
});

selectors.addEventListener("change", Bookmarks.updateBookmark);
output.addEventListener("change", Bookmarks.updateBookmark);
