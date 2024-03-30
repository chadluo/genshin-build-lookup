import {
  type ItemType,
  TYPE_BOSS,
  TYPE_TALENT_DOMAIN,
  TYPE_WEAPON_DOMAIN,
  TYPE_WEEKLY_BOSS,
  renderLink,
  type Region,
  getWeekday,
  getTimezone,
  renderDomainLink,
} from "../base";
import { hasBookmarks } from "../bookmarks";
import { type I18nObject, formatName, DELIMITER } from "../i18n";
import * as Enemies from "../models/enemies";

export const VIEW_ALL = 6;

export const ui: Record<string, I18nObject> = {
  enemiesAndDomains: { en: "Enemies & Domains", "zh-CN": "秘境讨伐" },
  weeklyBoss: { en: "Weekly Bosses", "zh-CN": "周本" },
  boss: { en: "Bosses", "zh-CN": "首领" },
  talentDomain: { en: "Talent Domains", "zh-CN": "天赋本" },
  weaponDomain: { en: "Weapon Domains", "zh-CN": "武器本" },
  showAll: { en: "Show All", "zh-CN": "显示全部" },
};

const regions: Record<Region, I18nObject> = {
  Mondstadt: { en: "Mondstadt", "zh-CN": "蒙德" },
  Liyue: { en: "Liyue", "zh-CN": "璃月" },
  Inazuma: { en: "Inazuma", "zh-CN": "稻妻" },
  Sumeru: { en: "Sumeru", "zh-CN": "须弥" },
  Fontaine: { en: "Fontaine", "zh-CN": "枫丹" },
};

export class EnemiesTable extends HTMLElement {
  constructor() {
    super();
    const weeklyBosses: Map<Region, Enemies.Boss[]> = Map.groupBy(
      Enemies.bosses.filter((b) => b.type === TYPE_WEEKLY_BOSS),
      (b) => b.region,
    );
    const weeklyBossKeys = Array.from(weeklyBosses.keys());
    const bosses: Map<Region, Enemies.Boss[]> = Map.groupBy(
      Enemies.bosses.filter((b) => b.type === TYPE_BOSS),
      ({ region }) => region,
    );
    const bossKeys = Array.from(bosses.keys());
    const talentDomains = Enemies.domains.filter(
      (d) => d.type === TYPE_TALENT_DOMAIN,
    );
    const weaponDomains = Enemies.domains.filter(
      (d) => d.type === TYPE_WEAPON_DOMAIN,
    );

    this.innerHTML = `<details class="section" ${hasBookmarks() ? "" : "open"}>
    <summary>🌱 ${formatName(ui.enemiesAndDomains)}</summary>
    <table class="qtable">
    <tr>
      <th rowspan="${weeklyBossKeys.length}">${formatName(ui.weeklyBoss)}</th>
      ${this.formatBossesForRegion(
        regions[weeklyBossKeys[0]],
        weeklyBosses.get(weeklyBossKeys[0]),
      )}
    </tr>
    ${weeklyBossKeys
      .slice(1)
      .map(
        (k) =>
          `<tr>${this.formatBossesForRegion(
            regions[k],
            weeklyBosses.get(k),
          )}</tr>`,
      )
      .join("")}
    <tr><th rowspan="${bossKeys.length}">${formatName(ui.boss)}</th>
    ${this.formatBossesForRegion(regions[bossKeys[0]], bosses.get(bossKeys[0]))}
    </tr>
    ${bossKeys
      .slice(1)
      .map(
        (k) =>
          `<tr>${this.formatBossesForRegion(regions[k], bosses.get(k))}</tr>`,
      )
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
  formatBossesForRegion(region: I18nObject, bosses?: Enemies.Boss[]) {
    return `<td>${formatName(region)}</td><td>${bosses
      ?.map((boss) => renderLink(boss.id, TYPE_WEEKLY_BOSS, boss?.name))
      .join(formatName(DELIMITER))}</td>`;
  }

  formatDomain(id: string, type: ItemType) {
    const domainName = formatName(
      Enemies.domains.filter((d) => d.id === id)[0]?.name,
    );
    const currentWeekday = getWeekday(getTimezone());
    const plainWeekdays = [1, 2, 3]
      .map((i) => renderDomainLink(id, i, type, null, currentWeekday))
      .join(formatName(DELIMITER));
    return `<td>${domainName}</td><td>${plainWeekdays}${formatName(
      DELIMITER,
    )}<a data-id="${id}" data-weekday="${VIEW_ALL}" data-type="${type}">${formatName(
      ui.showAll,
    )}</a></td>`;
  }
}
