import {
  formatName,
  formatTableCaption,
  ItemType,
  Region,
  renderLink,
  TYPE_TALENT_DOMAIN,
  TYPE_WEAPON_DOMAIN,
  TYPE_WEEKLY_BOSS,
} from "../base";
import { hasBookmarks, isBookmarked } from "../bookmarks";
import { i18n, I18nObject, regions, weekdays } from "../i18n";
import * as Enemies from "../models/enemies";

export const VIEW_ALL = 6;

export function define() {
  customElements.define(
    "enemies-table",
    class extends HTMLElement {
      constructor() {
        super();
        const weeklyBosses: Map<Region, Enemies.Boss[]> = this.groupBosses(
          (b) => b.region,
          Enemies.bosses.filter((b) => b.type === "weekly_boss")
        );
        const weeklyBossKeys = Array.from(weeklyBosses.keys());
        const bosses: Map<Region, Enemies.Boss[]> = this.groupBosses(
          (b) => b.region,
          Enemies.bosses.filter((b) => b.type === "boss")
        );
        const bossKeys = Array.from(bosses.keys());
        const talentDomains = Enemies.domains.filter((d) => d.type === "talent_domain");
        const weaponDomains = Enemies.domains.filter((d) => d.type === "weapon_domain");
        this.innerHTML = `<details class="section" ${hasBookmarks() ? "" : "open"}>
    <summary>${formatTableCaption("enemies_domains")}</summary>
    <table class="ctable">
    <tr>
      <th rowspan="${weeklyBossKeys.length}">${formatName(i18n.weekly_boss)}</th>
      ${this.formatBossesForRegion(regions[weeklyBossKeys[0]], weeklyBosses.get(weeklyBossKeys[0])!)}
      </tr>
      ${weeklyBossKeys
        .slice(1)
        .map((k) => `<tr>${this.formatBossesForRegion(regions[k], weeklyBosses.get(k)!)}</tr>`)
        .join("")}
      <tr><th rowspan="${bossKeys.length}">${formatName(i18n.boss)}</th>
      ${this.formatBossesForRegion(regions[bossKeys[0]], bosses.get(bossKeys[0])!)}
      </tr>
      ${bossKeys
        .slice(1)
        .map((k) => `<tr>${this.formatBossesForRegion(regions[k], bosses.get(k)!)}</tr>`)
        .join("")}
      <tr><th rowspan="${talentDomains.length}">${formatName(i18n.talent_domain)}</th>
        ${this.formatDomain(talentDomains[0].id, TYPE_TALENT_DOMAIN)}</tr>
      ${talentDomains
        .slice(1)
        .map((d) => `<tr>${this.formatDomain(d.id, TYPE_TALENT_DOMAIN)}</tr>`)
        .join("")}
      <tr><th rowspan="${weaponDomains.length}">${formatName(i18n.weapon_domain)}</th>
      ${this.formatDomain(weaponDomains[0].id, TYPE_WEAPON_DOMAIN)}</tr>
      ${weaponDomains
        .slice(1)
        .map((d) => `<tr>${this.formatDomain(d.id, TYPE_WEAPON_DOMAIN)}</tr>`)
        .join("")}</table></details>`;
      }

      groupBosses<T>(f: (b: Enemies.Boss) => T, bs: Enemies.Boss[]): Map<T, Enemies.Boss[]> {
        return bs.reduce((m, b) => {
          const key = f(b);
          const arr = m.get(key) ?? [];
          arr.push(b);
          m.set(key, arr);
          return m;
        }, new Map<T, Enemies.Boss[]>());
      }

      /**
       * Return structure: td*2
       */
      formatBossesForRegion(region: I18nObject, bosses: Enemies.Boss[]) {
        return `<td>${formatName(region)}</td><td>${bosses
          .map((boss) => renderLink(boss.id, TYPE_WEEKLY_BOSS, boss!.name))
          .join(formatName(i18n.delimiter))}</td>`;
      }

      formatDomain(id: string, type: ItemType) {
        return `<td>${formatName(Enemies.domains.filter((d) => d.id === id)[0]!.name)}</td><td>${[1, 2, 3]
          .map((i) => {
            return `<a data-id='${id}' data-weekday='${i}' data-type='${type}' ${
              isBookmarked(type, id, i) ? "class='bookmarked'" : ""
            }>${formatName(weekdays[i]!)}</a>`;
          })
          .join(formatName(i18n.delimiter))}${formatName(
          i18n.delimiter
        )}<a data-id="${id}" data-weekday="${VIEW_ALL}" data-type="${type}">${formatName(i18n.showAll)}</a></td>`;
      }
    }
  );
}
