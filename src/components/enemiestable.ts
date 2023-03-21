import {
  formatName,
  formatTableCaption,
  getTimezone,
  getWeekday,
  groupBy,
  ItemType,
  Region,
  renderDomainLink,
  renderLink,
  TYPE_BOSS,
  TYPE_TALENT_DOMAIN,
  TYPE_WEAPON_DOMAIN,
  TYPE_WEEKLY_BOSS,
} from "../base";
import { hasBookmarks } from "../bookmarks";
import { I18nObject, regions, ui } from "../i18n";
import * as Enemies from "../models/enemies";

export const VIEW_ALL = 6;

export class EnemiesTable extends HTMLElement {
  constructor() {
    super();
    const weeklyBosses: Map<Region, Enemies.Boss[]> = groupBy(
      (b) => b.region,
      Enemies.bosses.filter((b) => b.type === TYPE_WEEKLY_BOSS)
    );
    const weeklyBossKeys = Array.from(weeklyBosses.keys());
    const bosses: Map<Region, Enemies.Boss[]> = groupBy(
      (b) => b.region,
      Enemies.bosses.filter((b) => b.type === TYPE_BOSS)
    );
    const bossKeys = Array.from(bosses.keys());
    const talentDomains = Enemies.domains.filter((d) => d.type === TYPE_TALENT_DOMAIN);
    const weaponDomains = Enemies.domains.filter((d) => d.type === TYPE_WEAPON_DOMAIN);

    this.innerHTML = `<details class="section" ${hasBookmarks() ? "" : "open"}>
    <summary>${formatTableCaption("enemiesAndDomains")}</summary>
    <table class="qtable">
    <tr>
      <th rowspan="${weeklyBossKeys.length}">${formatName(ui.weeklyBoss)}</th>
      ${this.formatBossesForRegion(regions[weeklyBossKeys[0]], weeklyBosses.get(weeklyBossKeys[0])!)}
    </tr>
    ${weeklyBossKeys
      .slice(1)
      .map((k) => `<tr>${this.formatBossesForRegion(regions[k], weeklyBosses.get(k)!)}</tr>`)
      .join("")}
    <tr><th rowspan="${bossKeys.length}">${formatName(ui.boss)}</th>
    ${this.formatBossesForRegion(regions[bossKeys[0]], bosses.get(bossKeys[0])!)}
    </tr>
    ${bossKeys
      .slice(1)
      .map((k) => `<tr>${this.formatBossesForRegion(regions[k], bosses.get(k)!)}</tr>`)
      .join("")}
    <tr><th rowspan="${talentDomains.length}">${formatName(ui.talentDomain)}</th>
      ${this.formatDomain(talentDomains[0].id, TYPE_TALENT_DOMAIN)}</tr>
    ${talentDomains
      .slice(1)
      .map((d) => `<tr>${this.formatDomain(d.id, TYPE_TALENT_DOMAIN)}</tr>`)
      .join("")}
    <tr><th rowspan="${weaponDomains.length}">${formatName(ui.weaponDomain)}</th>
    ${this.formatDomain(weaponDomains[0].id, TYPE_WEAPON_DOMAIN)}</tr>
    ${weaponDomains
      .slice(1)
      .map((d) => `<tr>${this.formatDomain(d.id, TYPE_WEAPON_DOMAIN)}</tr>`)
      .join("")}</table></details>`;
  }

  /**
   * Return structure: td*2
   */
  formatBossesForRegion(region: I18nObject, bosses: Enemies.Boss[]) {
    return `<td>${formatName(region)}</td><td>${bosses
      .map((boss) => renderLink(boss.id, TYPE_WEEKLY_BOSS, boss!.name))
      .join(formatName(ui.delimiter))}</td>`;
  }

  formatDomain(id: string, type: ItemType) {
    const domainName = formatName(Enemies.domains.filter((d) => d.id === id)[0]!.name);
    const currentWeekday = getWeekday(getTimezone());
    const plainWeekdays = [1, 2, 3]
      .map((i) => renderDomainLink(id, i, type, null, currentWeekday))
      .join(formatName(ui.delimiter));
    return `<td>${domainName}</td><td>${plainWeekdays}${formatName(
      ui.delimiter
    )}<a data-id="${id}" data-weekday="${VIEW_ALL}" data-type="${type}">${formatName(ui.showAll)}</a></td>`;
  }
}
