import { byDomain, findDomain, formatName, formatTableCaption, renderQTableRows } from "../base";
import { i18n, weekdays } from "../i18n";
import { domains } from "../models/enemies";

type TimezoneNames = "Asia" | "Europe" | "America";
const timezones: { [tz in TimezoneNames]: number } = { Asia: 8, Europe: 1, America: -5 };

export function define() {
  customElements.define(
    "today-table",
    class extends HTMLElement {
      constructor() {
        super();
        const day = this.getWeekday(this.getTimezone());
        const weekdays = day === 0 ? [1, 2, 3] : [day];
        this.innerHTML = `<details class="section" ${day === 0 ? "" : "open"}>
        <summary>${formatTableCaption("today")}</summary>
        <div class="timezone-selector">${(["Asia", "Europe", "America"] as TimezoneNames[])
          .map(
            (zone) =>
              `<label><input type="radio" name="timezone" value="${zone}" ${
                zone === this.getTimezone() ? "checked" : ""
              }>${this.formatZoneOption(zone)}</label>`
          )
          .join("")}</div>
        <table class="qtable">${this.renderDomains(weekdays)}</table></details>`;
        this.addEventListener("change", this.refreshDomains);
      }

      getTimezone() {
        return (localStorage.getItem("timezone") as TimezoneNames) || this.guessTimezone();
      }

      formatZoneOption(zone: TimezoneNames) {
        return formatName(i18n[zone]) + formatName(i18n.delimiter) + formatName(weekdays[this.getWeekday(zone)]);
      }

      refreshDomains(event: Event) {
        const target = event.target as HTMLInputElement;
        if (target.name === "timezone") {
          const timezone = target.value as TimezoneNames;
          const day = this.getWeekday(timezone);
          const weekdays = day === 0 ? [1, 2, 3] : [day];
          this.querySelector("table.qtable")!.innerHTML = this.renderDomains(weekdays);
          localStorage.setItem("timezone", timezone);
        }
      }

      renderDomains(weekdays: number[]): string {
        return domains
          .flatMap((domain) =>
            weekdays.map((weekday) =>
              renderQTableRows(domain.type, domain.id, findDomain(domain.id), byDomain(domain.id, weekday), weekday)
            )
          )
          .join("");
      }

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
      getWeekday(zone: TimezoneNames) {
        const now = new Date();
        const utcH = now.getUTCHours();
        const utcDay = now.getUTCDay();
        const zoneH = utcH + timezones[zone];
        // refresh at 4am
        const zoneDay = ((zoneH > 28 ? utcDay + 1 : zoneH < 4 ? utcDay - 1 : utcDay) + 7) % 7;
        return zoneDay > 3 ? zoneDay - 3 : zoneDay;
      }

      guessTimezone(): TimezoneNames {
        const offset = -new Date().getTimezoneOffset() / 60;
        return offset < -2 ? "America" : offset < 4.5 ? "Europe" : "Asia";
      }
    }
  );
}