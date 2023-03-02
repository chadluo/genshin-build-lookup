import {
  byDomain,
  findCharactersForMaterial,
  findDomain,
  findWeaponsForMaterial,
  formatId,
  ItemType,
  renderQTableRows,
  TYPE_BOSS,
  TYPE_CHARACTER,
  TYPE_ENEMY,
  TYPE_TALENT_DOMAIN,
  TYPE_WEAPON,
  TYPE_WEAPON_DOMAIN,
  TYPE_WEEKLY_BOSS,
  WishItem,
} from "./base";
import { bookmark, BOOKMARK_KEY, unbookmark, updateBookmark } from "./bookmarks";
import * as CharactersTable from "./components/characterstable";
import * as EnemiesTable from "./components/enemiestable";
import * as TodayTable from "./components/todaytable";
import * as WeaponsTable from "./components/weaponstable";
import { i18n, I18nObject, SupportedLanguages } from "./i18n";
import { Character, characters } from "./models/characters";
import { Boss, bosses, Domain, domains, enemies, Enemy } from "./models/enemies";
import * as Materials from "./models/materials";
import { Weapon, weapons } from "./models/weapons";

import "./CNAME";
import "./style.css";

const selectors: HTMLElement = document.getElementById("selectors")!;
const output: HTMLElement = document.getElementById("output-table")!;
const lang_select: HTMLElement = document.getElementById("lang-select")!;

window.addEventListener("DOMContentLoaded", () => {
  lang_select!.innerHTML = Object.entries(i18n.supportedLanguageSelectors)
    .map(([lang, name]) => `<option value="${lang}">${name}</option>`)
    .join("");

  const lang_candidate: SupportedLanguages = (localStorage.getItem("lang") ?? navigator.language) as SupportedLanguages;
  const lang = Object.hasOwn(i18n.supportedLanguageSelectors, lang_candidate) ? lang_candidate : "en";
  setLanguage(lang);

  JSON.parse(localStorage.getItem(BOOKMARK_KEY) ?? "[]").forEach(
    ([type, id, weekday]: [string, string, number]) =>
      (output!.innerHTML += renderQTableContent(type as ItemType, id, weekday))
  );
  document.querySelectorAll(".qtable").forEach((element) => element.classList.remove("highlighted"));
});

/* nav */

document.querySelector("nav .links")!.addEventListener("click", (event) => {
  const link = event.target as HTMLElement;
  if (!link || link.tagName !== "A") return;
  const target = document.getElementById(link.dataset.target ?? "")!;
  const details = target.querySelector("details.section") as HTMLDetailsElement;
  if (details) details.open = true;
  target.scrollIntoView();
});

/* language selector */

lang_select!.addEventListener("change", (event) =>
  setLanguage((event.target as HTMLSelectElement).value as SupportedLanguages)
);

function setLanguage(lang: SupportedLanguages) {
  document.documentElement.setAttribute("lang", lang);
  document.title = i18n.siteTitle[lang] as string;
  setSearchItems(lang);
  (lang_select as HTMLSelectElement).value = lang;
  localStorage.setItem("lang", lang);
}

function setSearchItems(lang: SupportedLanguages) {
  document.getElementById("searchItems")!.innerHTML = ([] as WishItem[])
    .concat(characters)
    .concat(weapons)
    .sort((w1, w2) => w1.id.localeCompare(w2.id))
    .map((w) => `<option value="${w.id}">${w.name[lang] as string}</option>`)
    .join("");
}

/* search result tables */

function findOrLoadQTable(event: Event) {
  const a = (event.composedPath() as HTMLElement[]).find((e) => e.tagName === "A");
  if (!a) return;
  const id = a.dataset.id;
  const weekday = parseInt(a.dataset.weekday || "0");
  const type = a.dataset.type;
  if (!id || !type) return;
  if (a.classList.contains("remove")) {
    a.closest("tbody")?.remove();
    unbookmark(type as ItemType, id, weekday);
  } else {
    findOrLoadQTable2(type as ItemType, id, weekday);
  }
}

function findOrLoadQTable2(type: ItemType, id: string, weekday: number) {
  document.querySelectorAll(".highlighted").forEach((element) => element.classList.remove("highlighted"));
  const existed = output!.querySelector(`tbody[name="${formatId(type, id, weekday)}"]`);
  if (!existed) {
    output!.innerHTML += renderQTableContent(type, id, weekday);
    const rows = output!.querySelectorAll("th");
    rows[rows.length - 1].scrollIntoView();
    if (weekday !== EnemiesTable.VIEW_ALL) {
      bookmark(type as ItemType, id, weekday);
    }
  } else {
    existed.classList.add("highlighted");
    existed.scrollIntoView();
  }
}

selectors?.addEventListener("click", findOrLoadQTable);
output!.addEventListener("click", findOrLoadQTable);

document.querySelector("input[list='searchItems']")?.addEventListener("input", (event) => {
  // chromium/firefox populate from options
  if (!(event instanceof InputEvent) || event.inputType === "insertReplacementText") {
    const id = (event.target as HTMLInputElement).value;
    findOrLoadQTable2(characters.some((c) => c.id === id) ? TYPE_CHARACTER : TYPE_WEAPON, id, 0);
  }
});

function renderQTableContent(type: ItemType, id: string, weekday: number): string {
  switch (type) {
    case TYPE_CHARACTER:
      return renderQTableRows(type, id, findCharacter(id), byCharacter(id), weekday, true);
    case TYPE_WEAPON:
      return renderQTableRows(type, id, findWeapon(id), byWeapon(id), weekday, true);
    case TYPE_WEEKLY_BOSS:
    case TYPE_BOSS:
    case TYPE_ENEMY:
      return renderQTableRows(type, id, findEnemy(id), byEnemy(id), weekday, true);
    case TYPE_TALENT_DOMAIN:
    case TYPE_WEAPON_DOMAIN:
      if (weekday === EnemiesTable.VIEW_ALL) {
        return [1, 2, 3]
          .map((weekday) => renderQTableRows(type, id, findDomain(id), byDomain(id, weekday), weekday, true))
          .join("");
      } else {
        return renderQTableRows(type, id, findDomain(id), byDomain(id, weekday), weekday, true);
      }
    default:
      return "";
  }
}

function findCharacter(character: string): I18nObject {
  return characters.find((c) => c.id === character)!.name;
}

function byCharacter(character: string): Map<Materials.Material, [Domain, number][] | Boss[] | Enemy[]> {
  const map = new Map<Materials.Material, [Domain, number][] | Boss[] | Enemy[]>();
  const materials = characters.find((c) => c.id === character)!.materials;
  return materials === undefined
    ? map
    : materials.reduce(
        (map, m: string) => (
          map.set(Materials.materials.filter((material) => material.id === m)[0]!, findEnemiesForMaterial(m)), map
        ),
        map
      );
}

function findWeapon(weapon: string): I18nObject {
  return weapons.find((w) => w.id === weapon)!.name;
}

function byWeapon(weapon: string): Map<Materials.Material, [Domain, number][] | Boss[] | Enemy[]> {
  const map = new Map<Materials.Material, [Domain, number][] | Boss[] | Enemy[]>();
  const materials = weapons.find((w) => w.id === weapon)!.materials;
  return materials === undefined
    ? map
    : materials.reduce(
        (map, m: string) => (
          map.set(Materials.materials.filter((material) => material.id === m)[0]!, findEnemiesForMaterial(m)), map
        ),
        map
      );
}

function findEnemiesForMaterial(m: string): [Domain, number][] | Boss[] | Enemy[] {
  const dsm: [Domain, number][] = domains.map((d) => [d, d.materials_by_weekday.indexOf(m)]);
  const ds = dsm.filter(([, weekday]) => weekday !== -1);
  if (ds.length) return ds;
  const bs = bosses.filter((b) => b.materials.includes(m));
  if (bs.length) return bs;
  return enemies.filter((e) => e.materials.includes(m));
}

function findEnemy(enemy: string): I18nObject {
  return [...bosses, ...enemies].find((b) => b.id === enemy)!.name;
}

function byEnemy(enemy: string): Map<Materials.Material, (Character | Weapon)[]> {
  return [...bosses, ...enemies]
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
      new Map<Materials.Material, (Character | Weapon)[]>()
    );
}

document.getElementById("clear")?.addEventListener("click", () => {
  output.innerHTML = "";
});

selectors?.addEventListener("change", updateBookmark);
output.addEventListener("change", updateBookmark);

CharactersTable.define();
WeaponsTable.define();
EnemiesTable.define();
TodayTable.define();

window.addEventListener("keydown", (event) => {
  if (
    ["INPUT", "SELECT", "TEXTAREA"].includes((event.target as HTMLElement)?.tagName) ||
    event.ctrlKey ||
    event.altKey ||
    event.metaKey
  ) {
    return;
  }
  const searchInput = document.querySelector(".search input") as HTMLInputElement;
  switch (event.code) {
    case "Slash":
      event.preventDefault();
      searchInput.focus();
      return;
    case "Escape":
      searchInput.blur();
      return;
    case "KeyG":
      (document.querySelector("input#show-gems") as HTMLInputElement)?.click();
      return;
    case "KeyB":
      (document.querySelector("input#show-billets") as HTMLInputElement)?.click();
      return;
    case "KeyA":
      (document.querySelector("input#show-alternatives") as HTMLInputElement)?.click();
      return;
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
