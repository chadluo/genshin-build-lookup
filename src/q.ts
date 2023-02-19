import {
  byDomain,
  findCharactersForMaterial,
  findDomain,
  findWeaponsForMaterial,
  formatId,
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
import { updateBookmark } from "./bookmarks";
import * as CharactersTable from "./components/characterstable";
import * as EnemiesTable from "./components/enemiestable";
import * as TodayTable from "./components/todaytable";
import * as WeaponsTable from "./components/weaponstable";
import { i18n, I18nObject, SupportedLanguages } from "./i18n";
import { initKeyboard } from "./keyboard";
import { Character, characters } from "./models/characters";
import { Boss, bosses, Domain, domains, enemies, Enemy } from "./models/enemies";
import * as Materials from "./models/materials";
import { Weapon, weapons } from "./models/weapons";

import "./CNAME";
import "./style.css";

const selectors: HTMLElement = document.getElementById("selectors")!;
const output: HTMLElement = document.getElementById("output-table")!;
const lang_select: HTMLElement = document.getElementById("lang-select")!;

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
  lang_select!.innerHTML = Object.entries(i18n.supportedLanguageSelectors)
    .map(([lang, name]) => `<option value="${lang}">${name}</option>`)
    .join("");

  const lang_candidate: SupportedLanguages = (localStorage.getItem("lang") ?? navigator.language) as SupportedLanguages;
  const lang = Object.hasOwn(i18n.supportedLanguageSelectors, lang_candidate) ? lang_candidate : "en";
  setLanguage(lang);

  JSON.parse(localStorage.getItem("bookmarks") ?? "[]").forEach(
    ([type, id, weekday]: [string, string, number]) => (output!.innerHTML += renderQTableContent(type, id, weekday))
  );
  document.querySelectorAll(".qtable").forEach((element) => element.classList.remove("highlighted"));

  initKeyboard();
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
  const id = a.dataset.id ?? "";
  const weekday = a.dataset.weekday ?? "";
  if (id === lastQuery.id && weekday === lastQuery.weekday) return;
  const type = a.dataset.type;
  if (!type) return;
  findOrLoadQTable2(type, id, weekday);
}

function findOrLoadQTable2(type: string, id: string, weekday: string) {
  document.querySelectorAll(".highlighted").forEach((element) => element.classList.remove("highlighted"));
  const existed = output!.querySelector(`tbody[name="${formatId(type, id, weekday)}"]`);
  if (!existed) {
    output!.innerHTML += renderQTableContent(type, id, parseInt(weekday));
    const rows = output!.querySelectorAll("th");
    rows[rows.length - 1].scrollIntoView();
  } else {
    existed.classList.add("highlighted");
    existed.scrollIntoView();
  }
  lastQuery.id = id;
  lastQuery.weekday = weekday;
}

selectors?.addEventListener("click", findOrLoadQTable);
output!.addEventListener("click", findOrLoadQTable);

document.querySelector("input[list='searchItems']")?.addEventListener("input", (event) => {
  // chromium/firefox populate from options
  if (!(event instanceof InputEvent) || event.inputType === "insertReplacementText") {
    const id = (event.target as HTMLInputElement).value;
    findOrLoadQTable2(characters.some((c) => c.id === id) ? TYPE_CHARACTER : TYPE_WEAPON, id, "");
  }
});

function renderQTableContent(type: string, id: string, weekday: number): string {
  switch (type) {
    case TYPE_CHARACTER:
      return renderQTableRows(type, id, findCharacter(id), byCharacter(id), weekday);
    case TYPE_WEAPON:
      return renderQTableRows(type, id, findWeapon(id), byWeapon(id), weekday);
    case TYPE_WEEKLY_BOSS:
    case TYPE_BOSS:
    case TYPE_ENEMY:
      return renderQTableRows(type, id, findEnemy(id), byEnemy(id), weekday);
    case TYPE_TALENT_DOMAIN:
    case TYPE_WEAPON_DOMAIN:
      if (weekday === 0) {
        return [1, 2, 3]
          .map((weekday) => renderQTableRows(type, id, findDomain(id), byDomain(id, weekday), weekday))
          .join("");
      } else {
        return renderQTableRows(type, id, findDomain(id), byDomain(id, weekday), weekday);
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
  lastQuery.id = "";
  lastQuery.weekday = "";
});

selectors?.addEventListener("change", updateBookmark);
output.addEventListener("change", updateBookmark);

CharactersTable.define();
WeaponsTable.define();
EnemiesTable.define();
TodayTable.define();
