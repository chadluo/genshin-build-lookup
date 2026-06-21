import { renderDomainLink, renderLink } from "../base.ts";
import { hasBookmarks } from "../bookmarks.ts";
import { DELIMITER, formatName, type I18nObject } from "../i18n.ts";
import {
  type Boss,
  bosses,
  type Region,
  talentDomains,
  weaponDomains
} from "../models/enemies.ts";
import {
  type ItemType,
  TYPE_BOSS,
  TYPE_TALENT_DOMAIN,
  TYPE_WEAPON_DOMAIN,
  TYPE_WEEKLY_BOSS
} from "../types.ts";
import { getTimezone, getWeekday } from "../weekdays.ts";

export const VIEW_ALL = 6;

const ui: Record<string, I18nObject> = {
  enemiesAndDomains: { en: "Enemies & Domains", "zh-CN": "秘境讨伐" },
  weeklyBoss: { en: "Weekly Bosses", "zh-CN": "周本" },
  boss: { en: "Bosses", "zh-CN": "首领" },
  talentDomain: { en: "Talent Domains", "zh-CN": "天赋本" },
  weaponDomain: { en: "Weapon Domains", "zh-CN": "武器本" },
  showAll: { en: "Show All", "zh-CN": "显示全部" }
};

const regions: Record<Region, I18nObject> = {
  Mondstadt: { en: "Mondstadt", "zh-CN": "蒙德" },
  Liyue: { en: "Liyue", "zh-CN": "璃月" },
  Inazuma: { en: "Inazuma", "zh-CN": "稻妻" },
  Sumeru: { en: "Sumeru", "zh-CN": "须弥" },
  Fontaine: { en: "Fontaine", "zh-CN": "枫丹" },
  Natlan: { en: "Natlan", "zh-CN": "纳塔" },
  "Nod-Krai": { en: "Nod-Krai", "zh-CN": "挪德卡莱" }
};

export class EnemiesTable extends HTMLElement {
  connectedCallback() {
    const weeklyBosses: Map<Region, Boss[]> = Map.groupBy(
      bosses.filter((b) => b.itemType === TYPE_WEEKLY_BOSS),
      (b) => b.region
    );
    const weeklyBossKeys = Array.from(weeklyBosses.keys());
    const groupedBosses: Map<Region, Boss[]> = Map.groupBy(
      bosses.filter((b) => b.itemType === TYPE_BOSS),
      ({ region }) => region
    );
    const bossKeys = Array.from(groupedBosses.keys());

    this.innerHTML = `<details class="section" ${hasBookmarks() ? "" : "open"}>
    <summary>🌱 ${formatName(ui.enemiesAndDomains)}</summary>
    <table class="qtable">
    <tr>
      <th rowspan="${weeklyBossKeys.length}">${formatName(ui.weeklyBoss)}</th>
      ${this.formatBossesForRegion(
      regions[weeklyBossKeys[0]],
      weeklyBosses.get(weeklyBossKeys[0])
    )}
    </tr>
    ${weeklyBossKeys
        .slice(1)
        .map(
          (k) =>
            `<tr>${this.formatBossesForRegion(
              regions[k],
              weeklyBosses.get(k)
            )}</tr>`
        )
        .join("")}
    <tr><th rowspan="${bossKeys.length}">${formatName(ui.boss)}</th>
    ${this.formatBossesForRegion(regions[bossKeys[0]], groupedBosses.get(bossKeys[0]))}
    </tr>
    ${bossKeys
        .slice(1)
        .map(
          (k) =>
            `<tr>${this.formatBossesForRegion(regions[k], groupedBosses.get(k))}</tr>`
        )
        .join("")}
    <tr><th rowspan="${talentDomains.length}">${formatName(
          ui.talentDomain
        )}</th>
      ${this.formatDomain(talentDomains[0].id, TYPE_TALENT_DOMAIN)}</tr>
    ${talentDomains
        .slice(1)
        .map((d) => `<tr>${this.formatDomain(d.id, TYPE_TALENT_DOMAIN)}</tr>`)
        .join("")}
    <tr><th rowspan="${weaponDomains.length}">${formatName(
          ui.weaponDomain
        )}</th>
    ${this.formatDomain(weaponDomains[0].id, TYPE_WEAPON_DOMAIN)}</tr>
    ${weaponDomains
        .slice(1)
        .map((d) => `<tr>${this.formatDomain(d.id, TYPE_WEAPON_DOMAIN)}</tr>`)
        .join("")}</table></details>`;
  }

  /**
   * Return structure: td*2
   */
  formatBossesForRegion(region: I18nObject, bosses?: Boss[]) {
    return `<td>${formatName(region)}</td><td>${bosses
      ?.map((boss) => renderLink(boss.id, TYPE_WEEKLY_BOSS, boss?.name))
      .join(formatName(DELIMITER))}</td>`;
  }

  formatDomain(id: string, itemType: ItemType) {
    const name = [...talentDomains, ...weaponDomains].filter(
      (d) => d.id === id
    )[0]?.name;
    const currentWeekday = getWeekday(getTimezone());
    const plainWeekdays = [1, 2, 3]
      .map((i) =>
        renderDomainLink({ id, itemType, name: name }, i, currentWeekday)
      )
      .join(formatName(DELIMITER));
    return `<td>${formatName(name)}</td><td>${plainWeekdays}${formatName(
      DELIMITER
    )}<a data-id="${id}" data-weekday="${VIEW_ALL}" data-type="${itemType}">${formatName(
      ui.showAll
    )}</a></td>`;
  }
}
