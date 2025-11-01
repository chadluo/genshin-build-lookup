import type { I18nObject } from "./i18n";

export const timezones = ["Asia", "Europe", "America"] as const;
export type Timezone = (typeof timezones)[number];
export const zoneOffsets: Record<Timezone, number> = {
  Asia: 8,
  Europe: 1,
  America: -5,
};

/**
 * Index same as {@link Date.getDay}; [0] declared but not used.
 */
export const weekdayNames: I18nObject[] = [
  { en: "Sun", "zh-CN": "日" },
  { en: "Mon, Thu, Sun", "zh-CN": "一四日" },
  { en: "Tue, Fri, Sun", "zh-CN": "二五日" },
  { en: "Wed, Sat, Sun", "zh-CN": "三六日" },
];

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
export function getWeekday(zone: Timezone): number {
  const now = new Date();
  const utcHour = now.getUTCHours();
  const utcDay = now.getUTCDay();
  const zoneH = utcHour + zoneOffsets[zone];
  // refresh at 4am
  const zoneDay =
    ((zoneH > 28 ? utcDay + 1 : zoneH < 4 ? utcDay - 1 : utcDay) + 7) % 7;
  return zoneDay > 3 ? zoneDay - 3 : zoneDay;
}

export function getTimezone() {
  return (localStorage.getItem("timezone") as Timezone) || guessTimezone();
}

export function guessTimezone(): Timezone {
  const offset = -new Date().getTimezoneOffset() / 60;
  return offset < -2 ? "America" : offset < 4.5 ? "Europe" : "Asia";
}
