import {
  byDomain,
  findDomain,
  formatName,
  formatTableCaption,
  getTimezone,
  getWeekday,
  renderQTableRows,
  Timezone,
} from "../base";
import { ui, weekdays } from "../i18n";
import { domains } from "../models/enemies";

export class TodayTable extends HTMLElement {
  constructor() {
    super();
    const day = getWeekday(getTimezone());
    const weekdays = day === 0 ? [1, 2, 3] : [day];
    this.innerHTML = `<details class="section" ${day === 0 ? "" : "open"}>
      <summary>${formatTableCaption("today")}</summary>
      <div class="timezone-selector">${(["Asia", "Europe", "America"] as Timezone[])
        .map(
          (zone) =>
            `<label><input type="radio" name="timezone" value="${zone}" ${
              zone === getTimezone() ? "checked" : ""
            }>${this.formatZoneOption(zone)}</label>`
        )
        .join("")}</div>
      <table class="qtable">${this.renderDomains(weekdays)}</table></details>`;
    this.addEventListener("change", this.refreshDomains);
  }

  formatZoneOption(zone: Timezone) {
    return `${this.getTimezoneIcon(zone)} ${formatName(ui[zone])}${formatName(ui.delimiter)}${formatName(
      weekdays[getWeekday(zone)]
    )}`;
  }

  refreshDomains(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.name === "timezone") {
      const timezone = target.value as Timezone;
      const day = getWeekday(timezone);
      const weekdays = day === 0 ? [1, 2, 3] : [day];
      this.querySelector("table.qtable")!.innerHTML = this.renderDomains(weekdays);
      localStorage.setItem("timezone", timezone);
    }
  }

  renderDomains(weekdays: number[]): string {
    return domains
      .flatMap((domain) =>
        weekdays.map((weekday) =>
          renderQTableRows(domain.type, domain.id, findDomain(domain.id), byDomain(domain.id, weekday), weekday, false)
        )
      )
      .join("");
  }

  getTimezoneIcon(zone: Timezone) {
    // prettier-ignore
    switch (zone) {
      case "Asia":    return "🌏";
      case "Europe":  return "🌍";
      case "America": return "🌎";
      default:        return undefined;
    }
  }
}
