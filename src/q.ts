import * as Characters from "./characters";
import * as Enemies from "./enemies";
import * as Keyboard from "./keyboard";
import * as Materials from "./materials";
import "./style.css";
import * as Types from "./types";
import * as Weapons from "./weapons";

const TYPE_CHARACTER = "character";
const TYPE_WEAPON = "weapon";

const TYPE_WEEKLY_BOSS = "weekly_boss";
const TYPE_BOSS = "boss";
const TYPE_TALENT_DOMAIN = "talent_domain";
const TYPE_WEAPON_DOMAIN = "weapon_domain";

const selectors: HTMLElement = document.getElementById("selectors")!;
const output: HTMLElement = document.getElementById("output")!;
const lang_select: HTMLElement = document.getElementById("lang-select")!;

type TimezoneNames = "Asia" | "Europe" | "America";
const timezones: { [tz in TimezoneNames]: number } = { Asia: 8, Europe: 1, America: -5 };

const regions: { [id in Types.Region]: Types.I18nObject } = {
  Mondstadt: { en: ["Mondstadt"], "zh-CN": ["蒙德"] },
  Liyue: { en: ["Liyue"], "zh-CN": ["璃月"] },
  Inazuma: { en: ["Inazuma"], "zh-CN": ["稻妻"] },
};

const i18n: { [id: string]: Types.I18nObject } = {
  supportedLanguageSelectors: { en: ["English"], "zh-CN": ["简体中文"] },
  siteTitle: { en: ["Yuanliao: Genshin Impact Build Lookup"], "zh-CN": ["原料：原神培养查询"] },
  delimiter: { en: [" · "], "zh-CN": ["・"] },
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
export const i18nWeekdays: Types.I18nObject[] = [
  { en: ["Sun"], "zh-CN": ["日"] },
  { en: ["Mon, Thu, Sun"], "zh-CN": ["一四日"] },
  { en: ["Tue, Fri, Sun"], "zh-CN": ["二五日"] },
  { en: ["Wed, Sat, Sun"], "zh-CN": ["三六日"] },
];

const lastQuery = { id: "", weekday: "" };

window.addEventListener("DOMContentLoaded", () => {
  lang_select.innerHTML = Object.entries(i18n.supportedLanguageSelectors)
    .map(([lang, name]) => `<option value="${lang}">${name}</option>`)
    .join("");

  const lang_candidate: Types.SupportedLanguages = (localStorage.getItem("lang") ??
    navigator.language) as Types.SupportedLanguages;
  const lang = i18n.supportedLanguageSelectors.hasOwnProperty(lang_candidate) ? lang_candidate : "en";
  setLanguage(lang);

  const serverTimezone: TimezoneNames = (localStorage.getItem("timezone") as TimezoneNames) || guessTimezone();

  const bookmarks = JSON.parse(localStorage.getItem("bookmarks") ?? "[]");
  selectors.innerHTML += `<characters-table ${bookmarks.length === 0 ? "" : "hasBookmarks"}></characters-table>`;
  selectors.innerHTML += `<weapons-table ${bookmarks.length === 0 ? "" : "hasBookmarks"}></weapons-table>`;
  selectors.innerHTML += renderEnemiesTable(bookmarks.length !== 0);
  selectors.innerHTML += renderWeekdayDomainTables(serverTimezone, false);

  bookmarks.forEach(([type, id, weekday]: [string, string, number]) => output!.append(createQTable(type, id, weekday)));
  document.querySelectorAll(".qtable").forEach((element) => element.classList.remove("highlighted"));

  Keyboard.initKeyboard();
});

/* nav */

document.querySelector("nav .links")!.addEventListener("click", (event) => {
  const link = event.target as HTMLElement;
  if (!link || link.tagName !== "A") return;
  const target = document.getElementById(link.dataset.target ?? "") as HTMLDetailsElement;
  if (target && target.tagName === "DETAILS") {
    target.open = true;
  }
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
      this.innerHTML = `<details id="${TYPE_CHARACTER}" class="section" ${this.hasBookmarks() ? "" : "open"}>
      <summary>${formatTableCaption(TYPE_CHARACTER)}</summary>
      <table class="ctable">${rarities
        .map((rarity) => {
          const cs: Types.Character[] = byRarity.get(rarity)!;
          return `<tr><th>${"⭐".repeat(rarity)}</th>
      <td>${cs.map((c) => renderLink(c.id, TYPE_CHARACTER, c.name)).join(formatName(i18n.delimiter))}</td></tr>`;
        })
        .join("")}</table></details>`;
    }
    hasBookmarks(): boolean {
      return this.hasAttribute("hasBookmarks");
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
      this.innerHTML = `<details id="${TYPE_WEAPON}" class="section" ${this.hasBookmarks() ? "" : "open"}>
      <summary>${formatTableCaption(TYPE_WEAPON)}</summary><table class="ctable">
      ${rarities
        .map((rarity) => {
          const ws2: Map<Types.WeaponCategory, Types.Weapon[]> = groupWishObjects(
            (w) => w.category,
            byRarity.get(rarity)!
          );
          const categories = Array.from(ws2.keys());
          return `<tr><th rowspan="${categories.length}">${"⭐".repeat(rarity)}</th>
      <td>${formatWeaponIcon(categories[0])}${ws2
            .get(categories[0])!
            .map((w) => renderLink(w.id, TYPE_WEAPON, w.name))
            .join(formatName(i18n.delimiter))}</td></tr>
      ${categories
        .slice(1)
        .map(
          (category) =>
            `<tr><td>${formatWeaponIcon(category)}${ws2
              .get(category)!
              .map((c) => renderLink(c.id, TYPE_WEAPON, c.name))
              .join(formatName(i18n.delimiter))}</td></tr>`
        )
        .join("")}`;
        })
        .join("")}</table></details>`;
    }
    hasBookmarks(): boolean {
      return this.hasAttribute("hasBookmarks");
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

function formatWeaponIcon(category: Types.WeaponCategory) {
  return `<span class="weapon-icon">${getWeaponIcon(category)}</span>`;
}

function getWeaponIcon(category: Types.WeaponCategory) {
  // prettier-ignore
  switch (category) {
    case Types.WeaponCategory.BOW:      return "🏹";
    case Types.WeaponCategory.CATALYST: return "📖";
    case Types.WeaponCategory.CLAYMORE: return "🐟";
    case Types.WeaponCategory.POLEARM:  return "🌿";
    case Types.WeaponCategory.SWORD:    return "🗡️";
    default:                             return "";
  }
}

function renderEnemiesTable(hasBookmarks: boolean) {
  return `<details id="enemies" class="section" ${hasBookmarks ? "" : "open"}>
  <summary>${formatTableCaption("enemies_domains")}</summary>
  <table class="ctable" is="enemies-table"></table>`;
}

customElements.define(
  "enemies-table",
  class extends HTMLTableElement {
    constructor() {
      super();
      const weeklyBosses: Map<Types.Region, Enemies.Boss[]> = groupBosses(
        (b) => b.region,
        Enemies.bosses.filter((b) => b.type === "weekly_boss")
      );
      const weeklyBossKeys = Array.from(weeklyBosses.keys());
      const bosses: Map<Types.Region, Enemies.Boss[]> = groupBosses(
        (b) => b.region,
        Enemies.bosses.filter((b) => b.type === "boss")
      );
      const bossKeys = Array.from(bosses.keys());
      const talentDomains = Enemies.domains.filter((d) => d.type === "talent_domain");
      const weaponDomains = Enemies.domains.filter((d) => d.type === "weapon_domain");
      this.innerHTML = `<tr>
      <th rowspan="${weeklyBossKeys.length}">${formatName(i18n.weekly_boss)}</th>
      ${formatBossesForRegion(regions[weeklyBossKeys[0]], weeklyBosses.get(weeklyBossKeys[0])!)}
      </tr>
      ${weeklyBossKeys
        .slice(1)
        .map((k) => `<tr>${formatBossesForRegion(regions[k], weeklyBosses.get(k)!)}</tr>`)
        .join("")}
      <tr><th rowspan="${bossKeys.length}">${formatName(i18n.boss)}</th>
      ${formatBossesForRegion(regions[bossKeys[0]], bosses.get(bossKeys[0])!)}
      </tr>
      ${bossKeys
        .slice(1)
        .map((k) => `<tr>${formatBossesForRegion(regions[k], bosses.get(k)!)}</tr>`)
        .join("")}
      <tr><th rowspan="${talentDomains.length}">${formatName(i18n.talent_domain)}</th>
        ${formatDomain(talentDomains[0].id, TYPE_TALENT_DOMAIN)}</tr>
      ${talentDomains
        .slice(1)
        .map((d) => `<tr>${formatDomain(d.id, TYPE_TALENT_DOMAIN)}</tr>`)
        .join("")}
      <tr><th rowspan="${weaponDomains.length}">${formatName(i18n.weapon_domain)}</th>
      ${formatDomain(weaponDomains[0].id, TYPE_WEAPON_DOMAIN)}</tr>
      ${weaponDomains
        .slice(1)
        .map((d) => `<tr>${formatDomain(d.id, TYPE_WEAPON_DOMAIN)}</tr>`)
        .join("")}`;
    }
  },
  { extends: "table" }
);

function groupBosses<T>(f: (b: Enemies.Boss) => T, bs: Enemies.Boss[]): Map<T, Enemies.Boss[]> {
  return bs.reduce((m, b) => {
    const key = f(b);
    const arr = m.get(key) ?? [];
    arr.push(b);
    m.set(key, arr);
    return m;
  }, new Map<T, Enemies.Boss[]>());
}

function renderLink(id: string, type: Types.ItemType, names: any) {
  return `<a data-id='${id}' data-type='${type}' ${isBookmarked(type, id, 0) ? "class='bookmarked'" : ""}
  >${formatName(names)}</a>`;
}

function renderDomainLink(id: string, weekday: number, type: Types.ItemType, names: Types.I18nObject) {
  return `<a data-id='${id}' data-weekday='${weekday}' data-type='${type}' ${
    isBookmarked(type, id, weekday) ? "class='bookmarked'" : ""
  }>${formatName(names)} ${formatName(i18nWeekdays[weekday])}</a>`;
}

/**
 * Return structure: td*2
 */
function formatBossesForRegion(region: Types.I18nObject, bosses: Enemies.Boss[]) {
  return `<td>${formatName(region)}</td><td>${bosses
    .map((boss) => renderLink(boss.id, TYPE_WEEKLY_BOSS, boss!.name))
    .join(formatName(i18n.delimiter))}</td>`;
}

function formatDomain(id: string, type: Types.ItemType) {
  return `<td>${formatName(Enemies.domains.filter((d) => d.id === id)[0]!.name)}</td><td>${[1, 2, 3]
    .map((i) => {
      return `<a data-id='${id}' data-weekday='${i}' data-type='${type}' ${
        isBookmarked(type, id, i) ? "class='bookmarked'" : ""
      }>${formatName(i18nWeekdays[i]!)}</a>`;
    })
    .join(formatName(i18n.delimiter))}</td>`;
}

function renderWeekdayDomainTables(timezone: TimezoneNames, manual: boolean) {
  const day = getWeekday(timezone);
  const weekdays = day === 0 ? [1, 2, 3] : [day];
  return `<details id="today" class="section" ${day === 0 && !manual ? "" : "open"}>
    <summary>${formatTableCaption("today")}</summary>
     ${renderServerTimezoneSelector(timezone)}
    <table class="qtable">${renderDomains(weekdays)}</table></details>`;
}

function renderServerTimezoneSelector(timezone: TimezoneNames) {
  return `<div class="timezone-selector">${(["Asia", "Europe", "America"] as TimezoneNames[])
    .map(
      (zone) => `<label>
        <input type="radio" name="timezone" value="${zone}" ${zone === timezone ? "checked" : ""}>
        ${formatName(i18n[zone])}
      </label>`
    )
    .join("")}</div>`;
}

function renderDomains(weekdays: number[]): string {
  return Enemies.domains
    .flatMap((domain) =>
      weekdays.map((weekday) =>
        renderQTableRows(domain.type, domain.id, findDomain(domain.id, weekday), byDomain(domain.id, weekday), weekday)
      )
    )
    .join("");
}

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
  const existed = document.querySelector(`table[name="${formatId(type, id, weekday)}"]`);
  if (!existed) {
    const qtable = createQTable(type, id, parseInt(weekday));
    output!.appendChild(qtable);
    qtable.scrollIntoView();
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
    findOrLoadQTable2(Characters.characters.some((c) => c.id === id) ? TYPE_CHARACTER : TYPE_WEAPON, id, "");
  }
});

function createQTable(type: string, id: string, weekday: number): HTMLDivElement {
  const tableWrapper = document.createElement("div");
  tableWrapper.classList.add("qtableWrapper");
  tableWrapper.innerHTML = renderQTableContent(type, id, weekday);
  return tableWrapper;
}

function renderQTableContent(type: string, id: string, weekday: number): string {
  switch (type) {
    case TYPE_CHARACTER:
      return renderFullQTable(type, id, findCharacter(id), byCharacter(id), weekday);
    case TYPE_WEAPON:
      return renderFullQTable(type, id, findWeapon(id), byWeapon(id), weekday);
    case TYPE_WEEKLY_BOSS:
    case TYPE_BOSS:
      return renderFullQTable(type, id, findBoss(id), byBoss(id), weekday);
    case TYPE_TALENT_DOMAIN:
    case TYPE_WEAPON_DOMAIN:
      return renderFullQTable(type, id, findDomain(id, weekday), byDomain(id, weekday), weekday);
    default:
      return "";
  }
}

function findCharacter(character: string): Types.I18nObject {
  return Characters.characters.find((c) => c.id === character)!.name;
}

function byCharacter(character: string): Map<Materials.Material, [Enemies.Domain, number][] | Enemies.Boss[]> {
  return Characters.characters
    .find((c) => c.id === character)!
    .materials.reduce(
      (map, m: string) => (
        map.set(Materials.materials.filter((material) => material.id === m)[0]!, findEnemiesForMaterial(m)), map
      ),
      new Map<Materials.Material, [Enemies.Domain, number][] | Enemies.Boss[]>()
    );
}

function findWeapon(weapon: string): Types.I18nObject {
  return Weapons.weapons.find((w) => w.id === weapon)!.name;
}

function byWeapon(weapon: string): Map<Materials.Material, [Enemies.Domain, number][] | Enemies.Boss[]> {
  return Weapons.weapons
    .find((w) => w.id === weapon)!
    .materials.reduce(
      (map, m: string) => (
        map.set(Materials.materials.filter((material) => material.id === m)[0]!, findEnemiesForMaterial(m)), map
      ),
      new Map<Materials.Material, [Enemies.Domain, number][] | Enemies.Boss[]>()
    );
}

function findEnemiesForMaterial(m: string): [Enemies.Domain, number][] | Enemies.Boss[] {
  const dsm: [Enemies.Domain, number][] = Enemies.domains.map((d) => [d, d.materials_by_weekday.indexOf(m)]);
  const ds = dsm.filter(([, weekday]) => weekday !== -1);
  if (ds.length) return ds;
  return Enemies.bosses.filter((b) => b.materials.includes(m));
}

function findBoss(boss: string): Types.I18nObject {
  return Enemies.bosses.find((b) => b.id === boss)!.name;
}

function byBoss(boss: string): Map<Materials.Material, Types.Character[] | Types.Weapon[]> {
  return Enemies.bosses
    .find((b) => b.id === boss)!
    .materials.reduce(
      (map, material: string) => (
        map.set(
          Materials.materials.find((m) => m.id === material)!,
          (map.get(Materials.materials.find((m) => m.id === material)!) ?? [])
            .concat(findCharactersForMaterial(material))
            .concat(findWeaponsForMaterial(material))
        ),
        map
      ),
      new Map<Materials.Material, Types.Character[] | Types.Weapon[]>()
    );
}

function findDomain(domainId: string, _weekday: number): Types.I18nObject {
  return Enemies.domains.find((d) => d.id === domainId)!.name;
}

function byDomain(domainId: string, weekday: number): Map<Materials.Material, Types.WishObject[]> {
  const domain = Enemies.domains.filter((d) => d.id === domainId)[0]!;
  const material = domain.materials_by_weekday[weekday];
  return new Map([
    [
      Materials.materials.find((m) => m.id === material)!,
      domain.type === "weapon_domain" ? findWeaponsForMaterial(material) : findCharactersForMaterial(material),
    ],
  ]);
}

function findCharactersForMaterial(m: string): Types.Character[] {
  return Characters.characters.filter((c) => c.materials.includes(m));
}

function findWeaponsForMaterial(m: string): Types.Weapon[] {
  return Weapons.weapons.filter((w) => w.materials.includes(m));
}

function renderFullQTable(
  type: Types.ItemType,
  id: string,
  name: Types.I18nObject,
  object: Map<Materials.Material, Types.WishObject[] | [Enemies.Domain, number][] | Enemies.Boss[]>,
  weekday: number
): string {
  return `<table name="${formatId(type, id, weekday)}" class="qtable highlighted"
  >${renderQTableRows(type, id, name, object, weekday)}</table>`;
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
  object: Map<Materials.Material, Types.WishObject[] | [Enemies.Domain, number][] | Enemies.Boss[]>,
  weekday: number
) {
  const materials = Array.from(object.keys());
  const separator = "<span class='mobile'> / </span><span class='desktop'><br></span>";
  return `<tr>
      <th rowspan="${materials.length}">
        <label><input type="checkbox" data-type="${type}" data-id="${id}"
        ${weekday ? `data-weekday="${weekday}"` : ""} ${isBookmarked(type, id, weekday) ? "checked" : ""}><div>
        ${(type === "talent_domain" || type === "weapon_domain"
          ? formatDomainName(name, weekday)
          : formatName(name)
        ).replaceAll(" / ", separator)}</div></label>
      </th>
      <td>${formatName(materials[0].name)}</td>
      <td>${formatArray(object.get(materials[0])!)}</td>
    </tr>
    ${materials
      .slice(1)
      .map(
        (m) => `<tr ${formatMaterialType(m)}><td>${formatName(m.name)}</td><td>${formatArray(object.get(m)!)}</td></tr>`
      )
      .join("")}`;
}

function formatDomainName(name: Types.I18nObject, weekday: number) {
  return formatName(name) + " / " + formatName(i18nWeekdays[weekday]);
}

function formatMaterialType(m: Materials.Material) {
  return Materials.gems.includes(m.id)
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

function formatArray(es: Types.WishObject[] | [Enemies.Domain, number][] | Enemies.Boss[]) {
  return es
    .map((e) => {
      const [obj, weekday] = Array.isArray(e) ? [e[0], e[1]] : [e, 0];
      switch (obj.type) {
        case TYPE_TALENT_DOMAIN:
        case TYPE_WEAPON_DOMAIN:
          return renderDomainLink(obj.id, weekday, obj.type, obj.name);
        default:
          return renderLink(obj.id, obj.type, obj.name);
      }
    })
    .join(formatName(i18n.delimiter));
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
  const output = document.getElementById("output");
  if (output) output.innerHTML = "";
  lastQuery.id = "";
  lastQuery.weekday = "";
});

function updateBookmark(event: Event) {
  const input = event.target as HTMLInputElement;
  if (!input || input.tagName !== "INPUT") return;
  const type = input.dataset.type as Types.ItemType;
  const id = input.dataset.id;
  if (!type || !id) return;
  const weekday = parseInt(input.dataset.weekday ?? "0");
  if (input.checked) {
    bookmark(type, id, weekday);
  } else {
    unbookmark(type, id, weekday);
  }
}

selectors.addEventListener("change", updateBookmark);
output.addEventListener("change", updateBookmark);

function isBookmarked(type: Types.ItemType, id: string, weekday: number) {
  return JSON.parse(localStorage.getItem("bookmarks") ?? "[]").some(
    ([t, i, w]: [string, string, number]) => t === type && i === id && w === (weekday ?? 0)
  );
}

function bookmark(type: Types.ItemType, id: string, weekday: number) {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks") ?? "[]");
  const index = bookmarks.findIndex(([t, i, w]: [string, string, number]) => t === type && i === id && w === weekday);
  if (index === -1) {
    document
      .querySelectorAll(
        type === TYPE_TALENT_DOMAIN || type === TYPE_WEAPON_DOMAIN
          ? `a[data-id="${id}"][data-weekday="${weekday}"]`
          : `a[data-id="${id}"]`
      )
      .forEach((e) => e.classList.add("bookmarked"));
    bookmarks.push([type, id, weekday]);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
}

function unbookmark(type: Types.ItemType, id: string, weekday: number): void {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks") ?? "[]");
  const index = bookmarks.findIndex(([t, i, w]: [string, string, number]) => t === type && i === id && w === weekday);
  if (index !== -1) {
    document
      .querySelectorAll(
        type === TYPE_TALENT_DOMAIN || type === TYPE_WEAPON_DOMAIN
          ? `a[data-id="${id}"][data-weekday="${weekday}"]`
          : `a[data-id="${id}"]`
      )
      .forEach((e) => e.classList.remove("bookmarked"));
    bookmarks.splice(index, 1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
}

function selectTimezone(timezone: TimezoneNames) {
  document.getElementById("today")!.outerHTML = renderWeekdayDomainTables(timezone, true);
  localStorage.setItem("timezone", timezone);
}

selectors.addEventListener("change", (event) => {
  const target = event.target as HTMLInputElement;
  if (target.name === "timezone") {
    selectTimezone(target.value as TimezoneNames);
  }
});

document.querySelector("input#show-gems")?.addEventListener("change", (event) => {
  output.classList.toggle("show-gems", (event.target as HTMLInputElement)?.checked);
  document.body.classList.remove("smooth");
  window.scrollTo(0, document.body.scrollHeight);
  document.body.classList.add("smooth");
});

document.querySelector("input#show-billets")?.addEventListener("change", (event) => {
  output.classList.toggle("show-billets", (event.target as HTMLInputElement)?.checked);
  document.body.classList.remove("smooth");
  window.scrollTo(0, document.body.scrollHeight);
  document.body.classList.add("smooth");
});

document.querySelector("input#show-alternatives")?.addEventListener("change", (event) => {
  const alternativeDetails = document.querySelectorAll("details.alternative");
  if ((event.target as HTMLInputElement)?.checked) {
    alternativeDetails.forEach((e) => e.setAttribute("open", ""));
  } else {
    alternativeDetails.forEach((e) => e.removeAttribute("open"));
  }
  document.body.classList.remove("smooth");
  window.scrollTo(0, document.body.scrollHeight);
  document.body.classList.add("smooth");
});
