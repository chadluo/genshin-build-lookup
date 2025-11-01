import { byDomain, renderQTableRows } from "../base";
import { DELIMITER, formatName, type I18nObject } from "../i18n";
import { talentDomains, weaponDomains } from "../models/enemies";
import {
  getTimezone,
  getWeekday,
  type Timezone,
  timezones,
  weekdayNames,
} from "../weekdays";

const title: I18nObject = { en: "Today", "zh-CN": "今日" };

const ui: Record<Timezone, I18nObject> = {
  Asia: { en: "Asia / TW, HK, MO / CN", "zh-CN": "亚服、港澳台服、国服" },
  Europe: { en: "Europe", "zh-CN": "欧服" },
  America: { en: "America", "zh-CN": "美服" },
};

export class TodayTable extends HTMLElement {
  connectedCallback() {
    const day = getWeekday(getTimezone());
    const weekdays = day === 0 ? [1, 2, 3] : [day];
    this.innerHTML = `<details class="section" ${day === 0 ? "" : "open"}>
      <summary>📅 ${formatName(title)}</summary>
      <div class="timezone-selector">${timezones
        .map(
          (zone) =>
            `<label><input type="radio" name="timezone" value="${zone}" ${zone === getTimezone() ? "checked" : ""}>${this.formatZoneOption(zone)}</label>`,
        )
        .join("")}</div>
      <table class="qtable">${this.renderDomains(weekdays)}</table></details>`;
    this.addEventListener("change", this.refreshDomains);
  }

  formatZoneOption(zone: Timezone) {
    return `${this.getTimezoneIcon(zone)} ${formatName(ui[zone])}${formatName(DELIMITER)}${formatName(weekdayNames[getWeekday(zone)])}`;
  }

  refreshDomains(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.name === "timezone") {
      const timezone = target.value as Timezone;
      const day = getWeekday(timezone);
      const weekdays = day === 0 ? [1, 2, 3] : [day];
      const table = this.querySelector("table.qtable");
      if (table !== null) {
        table.innerHTML = this.renderDomains(weekdays);
      }
      localStorage.setItem("timezone", timezone);
    }
  }

  renderDomains(weekdays: number[]): string {
    return [...talentDomains, ...weaponDomains]
      .flatMap((d) =>
        weekdays.map((weekday) =>
          renderQTableRows(d, byDomain(d.id, weekday), weekday, false),
        ),
      )
      .join("");
  }

  getTimezoneIcon(zone: Timezone) {
    // prettier-ignore
    switch (zone) {
      case "Asia":
        return "🌏";
      case "Europe":
        return "🌍";
      case "America":
        return "🌎";
      default:
        return undefined;
    }
  }
}
