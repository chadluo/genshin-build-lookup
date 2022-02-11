import { Assets, Character, I18nObject, ItemType, SupportedLanguages, Weapon } from "./assets.js";

const TYPE_CHARACTER = "character";
const TYPE_WEAPON = "weapon";

const TYPE_WEEKLY_BOSS = "weekly_boss";
const TYPE_BOSS = "boss";
const TYPE_TALENT_DOMAIN = "talent_domain";
const TYPE_WEAPON_DOMAIN = "weapon_domain";

const selectors: HTMLElement = document.querySelector("div.selectors")!;
const output: HTMLElement = document.getElementById("output")!;
const lang_select: HTMLElement = document.getElementById("lang-select")!;

const lastQuery = { id: "", weekday: "" };

window.addEventListener("DOMContentLoaded", () => {
  lang_select.innerHTML = Object.entries(Assets.i18n.supportedLanguageSelectors)
    .map(([lang, name]) => `<option value="${lang}">${name}</option>`)
    .join("");

  const lang_candidate = localStorage.getItem("lang") || navigator.language;
  const lang = Assets.i18n.supportedLanguageSelectors.hasOwnProperty(lang_candidate) ? lang_candidate : "en";
  setLanguage(lang);

  const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
  selectors.innerHTML += renderCharactersTable(bookmarks.length !== 0);
  selectors.innerHTML += renderWeaponsTable(bookmarks.length !== 0);
  selectors.innerHTML += renderEnemiesTable(bookmarks.length !== 0);
  selectors.innerHTML += renderWeekdayDomainTables();

  bookmarks.forEach(([type, id, weekday]: [string, string, number]) => output!.append(createQTable(type, id, weekday)));
  document.querySelectorAll(".qtable").forEach((element) => element.classList.remove("highlighted"));
});

function renderWeekdayDomainTables() {
  const day = getCurrentWeekday();
  const weekdays = day === 0 ? [1, 2, 3] : [day];
  return `<details id="today" ${day === 0 ? "" : "open"}>
    <summary>${formatTableCaption("today")}</summary>
    <table class="qtable">${renderDomains(weekdays)}</table></details>`;
}

function renderDomains(weekdays: number[]): string {
  return Assets.domains
    .flatMap((domain) =>
      weekdays.map((weekday) =>
        renderQTableRows(domain.type, domain.id, findDomain(domain.id, weekday), byDomain(domain.id, weekday), weekday)
      )
    )
    .join("");
}

/* nav */

document.querySelector("nav .links")!.addEventListener("click", (event) => {
  const link = event.target as HTMLElement;
  if (!link || link.tagName !== "A") return;
  const target = document.getElementById(link.dataset.target || "") as HTMLDetailsElement;
  if (target && target.tagName === "DETAILS") {
    target.open = true;
  }
  target.scrollIntoView();
});

/* language selector */

lang_select!.addEventListener("change", (event) => setLanguage((event.target as HTMLSelectElement).value));

function setLanguage(lang: string) {
  document.documentElement.setAttribute("lang", lang);
  document.title = (document.querySelector(`h1 > span[lang=${lang}]`) as HTMLSpanElement).innerHTML;
  (lang_select as HTMLSelectElement).value = lang;
  localStorage.setItem("lang", lang);
}

/* content tables */

function renderCharactersTable(hasBookmarks: boolean): string {
  const byRarity = groupWishObjects((o) => o.rarity, Assets.characters);
  const rarities = Array.from(byRarity.keys()).sort().reverse();
  const tableContent = rarities
    .map((rarity) => {
      const cs: Assets.Character[] = byRarity.get(rarity)!;
      return `<tr><th>${"⭐".repeat(rarity)}</th>
      <td>${cs.map((c) => renderLink(c.id, TYPE_CHARACTER, c.name)).join(formatName(Assets.i18n.delimiter))}</td></tr>`;
    })
    .join("");
  return `<details id="${TYPE_CHARACTER}" ${hasBookmarks ? "" : "open"}>
    <summary>${formatTableCaption(TYPE_CHARACTER)}</summary>
    <table class="ctable">${tableContent}</table>
    </details>`;
}

function groupWishObjects<WO extends Assets.WishObject, T>(f: (w: WO) => T, ws: WO[]): Map<T, WO[]> {
  return ws.reduce((m, w) => {
    const key = f(w);
    const arr = m.get(key) || [];
    arr.push(w);
    m.set(key, arr);
    return m;
  }, new Map<T, WO[]>());
}

function renderWeaponsTable(hasBookmarks: boolean) {
  const byRarity = groupWishObjects((w) => w.rarity, Assets.weapons);
  const rarities = Array.from(byRarity.keys()).sort().reverse();
  const tableContent = rarities
    .map((rarity) => {
      const ws2: Map<Assets.WeaponCategory, Assets.Weapon[]> = groupWishObjects(
        (w) => w.category,
        byRarity.get(rarity)!
      );
      const categories = Array.from(ws2.keys());
      return `<tr><th rowspan="${categories.length}">${"⭐".repeat(rarity)}</th>
      <td>${formatWeaponIcon(categories[0])}${ws2
        .get(categories[0])!
        .map((w) => renderLink(w.id, TYPE_WEAPON, w.name))
        .join(formatName(Assets.i18n.delimiter))}</td></tr>
      ${categories
        .slice(1)
        .map(
          (category) =>
            `<tr><td>${formatWeaponIcon(category)}${ws2
              .get(category)!
              .map((c) => renderLink(c.id, TYPE_WEAPON, c.name))
              .join(formatName(Assets.i18n.delimiter))}</td></tr>`
        )
        .join("")}`;
    })
    .join("");
  return `<details id="${TYPE_WEAPON}" ${hasBookmarks ? "" : "open"}>
    <summary>${formatTableCaption(TYPE_WEAPON)}</summary>
    <table class="ctable">${tableContent}</table>
    </details>`;
}

function formatTableCaption(type: string) {
  return `${getTableCaptionIcon(type)} ${formatName(Assets.i18n[type])}${
    type === "today" ? formatName(Assets.i18n.delimiter) + formatName(Assets.i18nWeekdays[getCurrentWeekday()]) : ""
  }`;
}

function getCurrentWeekday(): number {
  const day = new Date().getDay();
  return day > 3 ? day - 3 : day;
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

function formatWeaponIcon(category: Assets.WeaponCategory) {
  return `<span class="weapon-icon">${getWeaponIcon(category)}</span>`;
}

function getWeaponIcon(category: Assets.WeaponCategory) {
  // prettier-ignore
  switch (category) {
    case Assets.WeaponCategory.BOW:      return "🏹";
    case Assets.WeaponCategory.CATALYST: return "📖";
    case Assets.WeaponCategory.CLAYMORE: return "🐟";
    case Assets.WeaponCategory.POLEARM:  return "🌿";
    case Assets.WeaponCategory.SWORD:    return "🗡️";
    default:                             return "";
  }
}

function renderEnemiesTable(hasBookmarks: boolean) {
  return `<details id="enemies" ${hasBookmarks ? "" : "open"}>
  <summary>${formatTableCaption("enemies_domains")}</summary>
  <table class="ctable"><tr><th>${formatName(Assets.i18n.weekly_boss)}</th><td>${Assets.enemy_ids
    .get("weekly_bosses")!
    .map((boss) => renderLink(boss, TYPE_WEEKLY_BOSS, Assets.bosses.find((b) => b.id === boss)!.name))
    .join(formatName(Assets.i18n.delimiter))}</td></tr>
    <tr><th>${formatName(Assets.i18n.boss)}</th><td>${Assets.enemy_ids
    .get("bosses")!
    .map((boss) => renderLink(boss, TYPE_BOSS, Assets.bosses.find((b) => b.id === boss)!.name))
    .join(formatName(Assets.i18n.delimiter))}</td></tr>
    <tr><th rowspan="${Assets.enemy_ids.get("talent_domains")!.length}">${formatName(Assets.i18n.talent_domain)}</th>
      ${formatDomain(Assets.enemy_ids.get("talent_domains")![0], TYPE_TALENT_DOMAIN)}</tr>
    ${Assets.enemy_ids
      .get("talent_domains")!
      .slice(1)
      .map((id) => `<tr>${formatDomain(id, TYPE_TALENT_DOMAIN)}</tr>`)
      .join("")}
    <tr><th rowspan="${Assets.enemy_ids.get("weapon_domains")!.length}">${formatName(Assets.i18n.weapon_domain)}</th>
    ${formatDomain(Assets.enemy_ids.get("weapon_domains")![0], TYPE_WEAPON_DOMAIN)}</tr>
    ${Assets.enemy_ids
      .get("weapon_domains")!
      .slice(1)
      .map((id) => `<tr>${formatDomain(id, TYPE_WEAPON_DOMAIN)}</tr>`)
      .join("")}`;
}

function renderLink(id: string, type: ItemType, names: any) {
  return `<a data-id='${id}' data-type='${type}' ${isBookmarked(type, id, 0) ? "class='bookmarked'" : ""}
  >${formatName(names)}</a>`;
}

function renderDomainLink(id: string, weekday: number, type: ItemType, names: Assets.I18nObject) {
  return `<a data-id='${id}' data-weekday='${weekday}' data-type='${type}' ${
    isBookmarked(type, id, weekday) ? "class='bookmarked'" : ""
  }>${formatName(names)} ${formatName(Assets.i18nWeekdays[weekday])}</a>`;
}

function formatDomain(id: string, type: ItemType) {
  return `<td>${formatName(Assets.domains.filter((d) => d.id === id)[0]!.name)} / ${[1, 2, 3]
    .map((i) => {
      return `<a data-id='${id}' data-weekday='${i}' data-type='${type}' ${
        isBookmarked(type, id, i) ? "class='bookmarked'" : ""
      }>${formatName(Assets.i18nWeekdays[i]!)}</a>`;
    })
    .join(formatName(Assets.i18n.delimiter))}</td>`;
}

/* search result tables */

function findOrLoadQTable(event: Event) {
  const a = (event.composedPath() as HTMLElement[]).find((e) => e.tagName === "A");
  if (!a) return;
  const id = a.dataset.id || "";
  const weekday = a.dataset.weekday || "";
  if (id === lastQuery.id && weekday === lastQuery.weekday) return;
  const type = a.dataset.type;
  if (!type) return;
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

function findCharacter(character: string): Assets.I18nObject {
  return Assets.characters.find((c) => c.id === character)!.name;
}

function byCharacter(character: string): Map<I18nObject, [Assets.Domain, number][] | Assets.Boss[]> {
  return Assets.characters
    .find((c) => c.id === character)!
    .materials.reduce(
      (map, m: string) => (
        map.set(Assets.materials.filter((material) => material.id === m)[0]!.name, findEnemiesForMaterial(m)), map
      ),
      new Map<I18nObject, [Assets.Domain, number][] | Assets.Boss[]>()
    );
}

function findWeapon(weapon: string): I18nObject {
  return Assets.weapons.find((w) => w.id === weapon)!.name;
}

function byWeapon(weapon: string): Map<I18nObject, [Assets.Domain, number][] | Assets.Boss[]> {
  return Assets.weapons
    .find((w) => w.id === weapon)!
    .materials.reduce(
      (map, m: string) => (
        map.set(Assets.materials.filter((material) => material.id === m)[0]!.name, findEnemiesForMaterial(m)), map
      ),
      new Map<I18nObject, [Assets.Domain, number][] | Assets.Boss[]>()
    );
}

function findEnemiesForMaterial(m: string): [Assets.Domain, number][] | Assets.Boss[] {
  const dsm: [Assets.Domain, number][] = Assets.domains.map((d) => [d, d.materials_by_weekday.indexOf(m)]);
  const ds = dsm.filter(([, weekday]) => weekday !== -1);
  if (ds.length) return ds;
  return Assets.bosses.filter((b) => b.materials.includes(m));
}

function formatWeekday(name: unknown, lang: SupportedLanguages, weekday: number) {
  return `${name} / ${findWeekday(lang, weekday)}`;
}

function findWeekday(lang: SupportedLanguages, day: number): string | string[] {
  return Assets.i18nWeekdays[day][lang];
}

function findBoss(boss: string): I18nObject {
  return Assets.bosses.find((b) => b.id === boss)!.name;
}

function byBoss(boss: string): Map<I18nObject, Character[] | Weapon[]> {
  return Assets.bosses
    .find((b) => b.id === boss)!
    .materials.reduce(
      (map, material: string) => (
        map.set(
          Assets.materials.find((m) => m.id === material)!.name,
          (map.get(Assets.materials.find((m) => m.id === material)!.name) || [])
            .concat(findCharactersForMaterial(material))
            .concat(findWeaponsForMaterial(material))
        ),
        map
      ),
      new Map<I18nObject, Character[] | Weapon[]>()
    );
}

function findDomain(domainId: string, _weekday: number): I18nObject {
  return Assets.domains.find((d) => d.id === domainId)!.name;
}

function byDomain(domainId: string, weekday: number): Map<Assets.I18nObject, Assets.WishObject[]> {
  const domain = Assets.domains.filter((d) => d.id === domainId)[0]!;
  const material = domain.materials_by_weekday[weekday];
  return new Map([
    [
      Assets.materials.find((m) => m.id === material)!.name,
      domain.type === "weapon_domain" ? findWeaponsForMaterial(material) : findCharactersForMaterial(material),
    ],
  ]);
}

function findCharactersForMaterial(m: string): Assets.Character[] {
  return Assets.characters.filter((c) => c.materials.includes(m));
}

function findWeaponsForMaterial(m: string): Assets.Weapon[] {
  return Assets.weapons.filter((w) => w.materials.includes(m));
}

function renderFullQTable(
  type: ItemType,
  id: string,
  name: I18nObject,
  object: Map<I18nObject, Assets.WishObject[] | [Assets.Domain, number][] | Assets.Boss[]>,
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
  type: Assets.ItemType,
  id: string,
  name: I18nObject,
  object: Map<I18nObject, Assets.WishObject[] | [Assets.Domain, number][] | Assets.Boss[]>,
  weekday: number
) {
  const materials = Array.from(object.keys());
  const separator = "<span class='mobile'> / </span><span class='desktop'><br></span>";
  return `<tr>
      <th rowspan="${materials.length}">
        <label><input type="checkbox" data-type="${type}" data-id="${id}"
        ${weekday ? `data-weekday="${weekday}"` : ""} ${isBookmarked(type, id, weekday) ? "checked" : ""}>
        ${formatName(name).replaceAll(" / ", separator)}</label>
      </th>
      <td>${formatName(materials[0])}</td>
      <td>${formatArray(object.get(materials[0])!)}</td>
    </tr>
    ${materials
      .slice(1)
      .map((m) => `<tr><td>${formatName(m)}</td><td>${formatArray(object.get(m)!)}</td></tr>`)
      .join("")}`;
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
    .replaceAll("’", "");
}

function formatArray(es: Assets.WishObject[] | [Assets.Domain, number][] | Assets.Boss[]) {
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
    .join(formatName(Assets.i18n.delimiter));
}

function formatName(name: I18nObject): string {
  return Object.entries(name)
    .map(([lang, value]) => {
      return `<span class="i18n" lang="${lang}">${Array.isArray(value) ? value.join("<br>") : value}</span>`;
    })
    .join("");
}

function updateBookmark(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input === null || input.tagName !== "INPUT") return;
  const type = input.dataset.type as ItemType;
  const id = input.dataset.id;
  if (!type || !id) return;
  const weekday = parseInt(input.dataset.weekday || "0");
  if (input.checked) {
    bookmark(type, id, weekday);
  } else {
    unbookmark(type, id, weekday);
  }
}

selectors.addEventListener("change", updateBookmark);
output.addEventListener("change", updateBookmark);

function isBookmarked(type: ItemType, id: string, weekday: number) {
  return JSON.parse(localStorage.getItem("bookmarks") || "[]").some(
    ([t, i, w]: [string, string, number]) => t === type && i === id && w === (weekday || 0)
  );
}

function bookmark(type: ItemType, id: string, weekday: number) {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
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

function unbookmark(type: ItemType, id: string, weekday: number): void {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
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
