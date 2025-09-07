export type SupportedLanguages = "en" | "zh-CN";
export type I18nObject = Readonly<
  Record<SupportedLanguages, Readonly<string | string[]>>
>;

export const EMPTY: I18nObject = { en: "", "zh-CN": "" };

export const DELIMITER: I18nObject = { en: " | ", "zh-CN": "｜" };

export const supportedLanguageSelectors: I18nObject = {
  en: "English",
  "zh-CN": "简体中文",
};

export const siteTitle: I18nObject = {
  en: "Yuanliao: Genshin Impact Build Lookup",
  "zh-CN": "原料：原神培养查询",
};

/**
 * Index same as {@link Date.getDay}; [0] declared but not used.
 */
export const weekdays: I18nObject[] = [
  { en: "Sun", "zh-CN": "日" },
  { en: "Mon, Thu, Sun", "zh-CN": "一四日" },
  { en: "Tue, Fri, Sun", "zh-CN": "二五日" },
  { en: "Wed, Sat, Sun", "zh-CN": "三六日" },
];

export function formatName(name: I18nObject): string {
  return Object.entries(name)
    .map(
      ([lang, value]) =>
        `<span class="i18n" lang="${lang}">${formatValue(value)}</span>`
    )
    .join("");
}

function formatValue(names: Readonly<string | string[]>) {
  const showAlternatives = (
    document.querySelector("input#show-alternatives") as HTMLInputElement
  ).checked;
  return typeof names === "string"
    ? names
    : names.length === 1
    ? names[0]
    : `<details class="alternative" ${
        showAlternatives ? "open" : ""
      }><summary>${names[0]}</summary>${names.slice(1).join("<br>")}</details>`;
}
