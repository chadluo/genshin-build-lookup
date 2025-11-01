import { renderLink } from "../base";
import { hasBookmarks } from "../bookmarks";
import { DELIMITER, formatName, type I18nObject } from "../i18n";
import { type Category, type Weapon, weapons } from "../models/weapons";

const title: I18nObject = { en: "Weapons", "zh-CN": "武器" };
export class WeaponsTable extends HTMLElement {
  connectedCallback() {
    const byRarity = Map.groupBy(weapons, ({ rarity }) => rarity);
    const rarities = Array.from(byRarity.keys()).sort().reverse();
    this.innerHTML = `<details class="section" ${hasBookmarks() ? "" : "open"}>
      <summary>🗡️ ${formatName(title)}</summary><table class="ctable">
      ${rarities
        .map((rarity) => {
          const ws2: Map<Category, Weapon[]> = Map.groupBy(
            byRarity.get(rarity) || [],
            ({ category }) => category,
          );
          const categories = Array.from(ws2.keys());
          return `<tr><th rowspan="${categories.length}">${"⭐".repeat(
            rarity,
          )}</th>
      <td>${this.formatWeaponIcon(categories[0])}${ws2
        .get(categories[0])
        ?.map((w) => renderLink(w.id, w.itemType, w.name))
        .join(formatName(DELIMITER))}</td></tr>
      ${categories
        .slice(1)
        .map(
          (category) =>
            `<tr><td>${this.formatWeaponIcon(category)}${ws2
              .get(category)
              ?.map((w) => renderLink(w.id, w.itemType, w.name))
              .join(formatName(DELIMITER))}</td></tr>`,
        )
        .join("")}`;
        })
        .join("")}</table></details>`;
  }

  formatWeaponIcon(category: Category) {
    return `<span class="weapon-icon">${this.getWeaponIcon(category)}</span>`;
  }

  getWeaponIcon(category: Category) {
    switch (category) {
      case "Bow":
        return "🏹";
      case "Catalyst":
        return "📖";
      case "Claymore":
        return "🐟";
      case "Polearm":
        return "🌿";
      case "Sword":
        return "🗡️";
      default:
        return "";
    }
  }
}
