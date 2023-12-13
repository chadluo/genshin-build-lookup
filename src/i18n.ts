import { Region } from "./base";

export type SupportedLanguages = "en" | "zh-CN";
export type I18nObject = Readonly<
  Record<SupportedLanguages, Readonly<string | string[]>>
>;

export const EMPTY: I18nObject = { en: "", "zh-CN": "" };

export const ui: Record<string, I18nObject> = {
  supportedLanguageSelectors: { en: "English", "zh-CN": "简体中文" },
  siteTitle: {
    en: "Yuanliao: Genshin Impact Build Lookup",
    "zh-CN": "原料：原神培养查询",
  },
  delimiter: { en: " | ", "zh-CN": "｜" },
  character: { en: "Characters", "zh-CN": "角色" },
  weapon: { en: "Weapons", "zh-CN": "武器" },
  enemiesAndDomains: { en: "Enemies & Domains", "zh-CN": "秘境讨伐" },
  weeklyBoss: { en: "Weekly Bosses", "zh-CN": "周本" },
  boss: { en: "Bosses", "zh-CN": "首领" },
  talentDomain: { en: "Talent Domains", "zh-CN": "天赋本" },
  weaponDomain: { en: "Weapon Domains", "zh-CN": "武器本" },
  today: { en: "Today", "zh-CN": "今日" },
  Asia: { en: "Asia / TW, HK, MO / CN", "zh-CN": "亚服、港澳台服、国服" },
  Europe: { en: "Europe", "zh-CN": "欧服" },
  America: { en: "America", "zh-CN": "美服" },
  showAll: { en: "Show All", "zh-CN": "显示全部" },
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

export const regions: Record<Region, I18nObject> = {
  Mondstadt: { en: "Mondstadt", "zh-CN": "蒙德" },
  Liyue: { en: "Liyue", "zh-CN": "璃月" },
  Inazuma: { en: "Inazuma", "zh-CN": "稻妻" },
  Sumeru: { en: "Sumeru", "zh-CN": "须弥" },
  Fontaine: { en: "Fontaine", "zh-CN": "枫丹" },
};
