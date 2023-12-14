import {
  TYPE_WEAPON,
  formatName,
  formatTableCaption,
  groupBy,
  renderLink,
} from "../base";
import { hasBookmarks } from "../bookmarks";
import { ui } from "../i18n";
import { Category, Weapon, weapons } from "../models/weapons";

export class WeaponsTable extends HTMLElement {
  constructor() {
    super();
    const byRarity = groupBy((w) => w.rarity, weapons);
    const rarities = Array.from(byRarity.keys()).sort().reverse();
    this.innerHTML = `<details class="section" ${hasBookmarks() ? "" : "open"}>
      <summary>${formatTableCaption(TYPE_WEAPON)}</summary><table class="ctable">
      ${rarities
        .map((rarity) => {
          const ws2: Map<Category, Weapon[]> = groupBy(
            (w) => w.category,
            byRarity.get(rarity),
          );
          const categories = Array.from(ws2.keys());
          return `<tr><th rowspan="${categories.length}">${"⭐".repeat(rarity)}</th>
      <td>${this.formatWeaponIcon(categories[0])}${ws2
        .get(categories[0])
        ?.map((w) => renderLink(w.id, TYPE_WEAPON, w.name))
        .join(formatName(ui.delimiter))}</td></tr>
      ${categories
        .slice(1)
        .map(
          (category) =>
            `<tr><td>${this.formatWeaponIcon(category)}${ws2
              .get(category)
              ?.map((c) => renderLink(c.id, TYPE_WEAPON, c.name))
              .join(formatName(ui.delimiter))}</td></tr>`,
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
