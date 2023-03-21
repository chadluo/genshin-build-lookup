import { formatId, ItemType, OfMaterial, renderQTableContent, TYPE_CHARACTER, TYPE_WEAPON } from "./base";
import { bookmark, BOOKMARK_KEY, unbookmark, updateBookmark } from "./bookmarks";
import { CharactersTable } from "./components/characterstable";
import { EnemiesTable, VIEW_ALL } from "./components/enemiestable";
import { TodayTable } from "./components/todaytable";
import { WeaponsTable } from "./components/weaponstable";
import { SupportedLanguages, ui } from "./i18n";
import { characters } from "./models/characters";
import { weapons } from "./models/weapons";

import "./CNAME";
import "./style.css";

const selectors: HTMLElement = document.getElementById("selectors")!;
const output: HTMLElement = document.getElementById("output-table")!;
const langSelect: HTMLElement = document.getElementById("lang-select")!;

customElements.define("characters-table", CharactersTable);
customElements.define("weapons-table", WeaponsTable);
customElements.define("enemies-table", EnemiesTable);
customElements.define("today-table", TodayTable);

window.addEventListener("DOMContentLoaded", () => {
  langSelect!.innerHTML = Object.entries(ui.supportedLanguageSelectors)
    .map(([lang, name]) => `<option value="${lang}">${name}</option>`)
    .join("");

  const langCandidate: SupportedLanguages = (localStorage.getItem("lang") ?? navigator.language) as SupportedLanguages;
  const lang = Object.hasOwn(ui.supportedLanguageSelectors, langCandidate) ? langCandidate : "en";
  setLanguage(lang);

  JSON.parse(localStorage.getItem(BOOKMARK_KEY) ?? "[]").forEach(
    ([type, id, weekday]: [ItemType, string, number]) => (output!.innerHTML += renderQTableContent(type, id, weekday))
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

langSelect!.addEventListener("change", (event) =>
  setLanguage((event.target as HTMLSelectElement).value as SupportedLanguages)
);

function setLanguage(lang: SupportedLanguages) {
  document.documentElement.setAttribute("lang", lang);
  document.title = ui.siteTitle[lang] as string;
  setSearchItems(lang);
  (langSelect as HTMLSelectElement).value = lang;
  localStorage.setItem("lang", lang);
}

function setSearchItems(lang: SupportedLanguages) {
  document.getElementById("searchItems")!.innerHTML = ([] as OfMaterial[])
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
    if (weekday !== VIEW_ALL) {
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

document.getElementById("clear")?.addEventListener("click", () => {
  output.innerHTML = "";
});

selectors?.addEventListener("change", updateBookmark);
output.addEventListener("change", updateBookmark);

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
    case "KeyF":
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
