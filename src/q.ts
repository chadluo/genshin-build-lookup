import { formatId, renderQTableContent } from "./base";
import {
  BOOKMARK_KEY,
  bookmark,
  unbookmark,
  updateBookmark,
} from "./bookmarks";
import "./CNAME";
import { CharactersTable } from "./components/characters_table";
import { EnemiesTable, VIEW_ALL } from "./components/enemies_table";
import { TodayTable } from "./components/today_table";
import { WeaponsTable } from "./components/weapons_table";
import type { SupportedLanguages } from "./i18n";
import { siteTitle, supportedLanguageSelectors } from "./i18n";
import { characters } from "./models/characters";
import { weapons } from "./models/weapons";
import "./style.css";
import { type ItemType, TYPE_CHARACTER, TYPE_WEAPON } from "./types";

const selectors = document.getElementById("selectors");
const output = document.getElementById("output-table");
const langSelect = document.getElementById("lang-select");

customElements.define("characters-table", CharactersTable);
customElements.define("weapons-table", WeaponsTable);
customElements.define("enemies-table", EnemiesTable);
customElements.define("today-table", TodayTable);

window.addEventListener("DOMContentLoaded", () => {
  if (langSelect != null) {
    langSelect.innerHTML = Object.entries(supportedLanguageSelectors)
      .map(([lang, name]) => `<option value="${lang}">${name}</option>`)
      .join("");
  }

  const langCandidate: SupportedLanguages = (localStorage.getItem("lang") ??
    navigator.language) as SupportedLanguages;
  const lang = Object.hasOwn(supportedLanguageSelectors, langCandidate)
    ? langCandidate
    : "en";
  setLanguage(lang);

  if (output != null)
    for (const record of JSON.parse(
      localStorage.getItem(BOOKMARK_KEY) ?? "[]",
    )) {
      const [itemType, id, weekday]: [ItemType, string, number] = record;
      output.innerHTML += renderQTableContent(itemType, id, weekday);
    }

  for (const element of Array.from(document.querySelectorAll(".qtable"))) {
    (element as HTMLElement).classList.remove("highlighted");
  }

  const option = document.getElementById(
    localStorage.getItem("theme") ??
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "theme-dark"
      : "theme-light"),
  ) as HTMLInputElement;
  option.checked = true;
  document.documentElement.style.setProperty("--theme", option.value);
});

/* nav */

document.querySelector("nav .links")?.addEventListener("click", (event) => {
  const link = event.target as HTMLElement;
  if (!link || link.tagName !== "A") return;
  const target = document.getElementById(link.dataset.target ?? "");
  const details = target?.querySelector(
    "details.section",
  ) as HTMLDetailsElement;
  if (details) details.open = true;
  target?.scrollIntoView();
});

/* language selector */

langSelect?.addEventListener("change", (event) =>
  setLanguage((event.target as HTMLSelectElement).value as SupportedLanguages),
);

function setLanguage(lang: SupportedLanguages) {
  document.documentElement.setAttribute("lang", lang);
  document.title = siteTitle[lang] as string;
  setSearchItems(lang);
  (langSelect as HTMLSelectElement).value = lang;
  localStorage.setItem("lang", lang);
}

function setSearchItems(lang: SupportedLanguages) {
  const searchItems = document.getElementById("searchItems");
  if (searchItems != null) {
    searchItems.innerHTML = [...characters, ...weapons]
      .sort((w1, w2) => w1.id.localeCompare(w2.id))
      .map((w) => `<option value="${w.id}">${w.name[lang] as string}</option>`)
      .join("");
  }
}

/* search result tables */

function findOrLoadQTable(event: Event) {
  const a = (event.composedPath() as HTMLElement[]).find(
    (e) => e.tagName === "A",
  );
  if (!a) return;
  const { id, weekday, type } = a.dataset;
  if (!id || !type) return;
  const weekdayN = Number.parseInt(weekday || "0", 10);
  if (a.classList.contains("remove")) {
    a.closest("tbody")?.remove();
    unbookmark(type as ItemType, id, weekdayN);
  } else {
    findOrLoadQTable2(type as ItemType, id, weekdayN);
  }
}

function findOrLoadQTable2(itemType: ItemType, id: string, weekday: number) {
  for (const element of Array.from(document.querySelectorAll(".highlighted"))) {
    (element as HTMLElement).classList.remove("highlighted");
  }
  if (output == null) {
    return;
  }
  const existed = output.querySelector(
    `tbody[name="${formatId(itemType, id, weekday)}"]`,
  );
  if (!existed) {
    output.innerHTML += renderQTableContent(itemType, id, weekday);
    const rows = output.querySelectorAll("th");
    rows[rows.length - 1].scrollIntoView();
    if (weekday !== VIEW_ALL) {
      bookmark(itemType as ItemType, id, weekday);
    }
  } else {
    existed.classList.add("highlighted");
    existed.scrollIntoView();
  }
}

selectors?.addEventListener("click", findOrLoadQTable);
output?.addEventListener("click", findOrLoadQTable);

document
  .querySelector("input[list='searchItems']")
  ?.addEventListener("input", (event) => {
    // chromium/firefox populate from options
    if (
      !(event instanceof InputEvent) ||
      event.inputType === "insertReplacementText"
    ) {
      const id = (event.target as HTMLInputElement).value;
      findOrLoadQTable2(
        characters.some((c) => c.id === id) ? TYPE_CHARACTER : TYPE_WEAPON,
        id,
        0,
      );
    }
  });

document.getElementById("clear")?.addEventListener("click", () => {
  if (output != null) {
    output.innerHTML = "";
  }
});

selectors?.addEventListener("change", updateBookmark);
output?.addEventListener("change", updateBookmark);

window.addEventListener("keydown", (event) => {
  if (
    ["INPUT", "SELECT", "TEXTAREA"].includes(
      (event.target as HTMLElement)?.tagName,
    ) ||
    event.ctrlKey ||
    event.altKey ||
    event.metaKey
  ) {
    return;
  }
  const searchInput = document.querySelector(
    ".search input",
  ) as HTMLInputElement;
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
      (
        document.querySelector("input#show-forging-fishing") as HTMLInputElement
      )?.click();
      return;
    case "KeyA":
      (
        document.querySelector("input#show-alternatives") as HTMLInputElement
      )?.click();
      return;
  }
});

document
  .querySelector("input#show-gems")
  ?.addEventListener("change", (event) => {
    output?.classList.toggle(
      "show-gems",
      (event.target as HTMLInputElement)?.checked,
    );
    document.body.classList.remove("smooth");
    window.scrollTo(0, document.body.scrollHeight);
    document.body.classList.add("smooth");
  });

document
  .querySelector("input#show-forging-fishing")
  ?.addEventListener("change", (event) => {
    output?.classList.toggle(
      "show-forging-fishing",
      (event.target as HTMLInputElement)?.checked,
    );
    document.body.classList.remove("smooth");
    window.scrollTo(0, document.body.scrollHeight);
    document.body.classList.add("smooth");
  });

document
  .querySelector("input#show-alternatives")
  ?.addEventListener("change", (event) => {
    const alternativeDetails: HTMLElement[] = Array.from(
      document.querySelectorAll("details.alternative"),
    );
    if ((event.target as HTMLInputElement)?.checked) {
      for (const e of alternativeDetails) {
        e.setAttribute("open", "");
      }
    } else {
      for (const e of alternativeDetails) {
        e.removeAttribute("open");
      }
    }
    document.body.classList.remove("smooth");
    window.scrollTo(0, document.body.scrollHeight);
    document.body.classList.add("smooth");
  });

/* theme */

document
  .querySelector(".theme-selector")
  ?.addEventListener("input", (event) => {
    const option = event.target as HTMLInputElement;
    document.documentElement.style.setProperty("--theme", option.value);
    localStorage.setItem("theme", option.id);
  });
