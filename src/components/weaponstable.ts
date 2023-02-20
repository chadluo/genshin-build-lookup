import { formatName, formatTableCaption, groupWishObjects, renderLink, TYPE_WEAPON } from "../base";
import { hasBookmarks } from "../bookmarks";
import { i18n } from "../i18n";
import { Category, Weapon, weapons } from "../models/weapons";

export function define() {
  customElements.define(
    "weapons-table",
    class extends HTMLElement {
      constructor() {
        super();
        const byRarity = groupWishObjects((w) => w.rarity, weapons);
        const rarities = Array.from(byRarity.keys()).sort().reverse();
        this.innerHTML = `<details class="section" ${hasBookmarks() ? "" : "open"}>
      <summary>${formatTableCaption(TYPE_WEAPON)}</summary><table class="ctable">
      ${rarities
        .map((rarity) => {
          const ws2: Map<Category, Weapon[]> = groupWishObjects((w) => w.category, byRarity.get(rarity)!);
          const categories = Array.from(ws2.keys());
          return `<tr><th rowspan="${categories.length}">${"⭐".repeat(rarity)}</th>
      <td>${this.formatWeaponIcon(categories[0])}${ws2
            .get(categories[0])!
            .map((w) => renderLink(w.id, TYPE_WEAPON, w.name))
            .join(formatName(i18n.delimiter))}</td></tr>
      ${categories
        .slice(1)
        .map(
          (category) =>
            `<tr><td>${this.formatWeaponIcon(category)}${ws2
              .get(category)!
              .map((c) => renderLink(c.id, TYPE_WEAPON, c.name))
              .join(formatName(i18n.delimiter))}</td></tr>`
        )
        .join("")}`;
        })
        .join("")}</table></details>`;
      }

      formatWeaponIcon(category: Category) {
        return `<span class="weapon-icon">${this.getWeaponIcon(category)}</span>`;
      }

      getWeaponIcon(category: Category) {
        // prettier-ignore
        switch (category) {
          case "Bow":      return "🏹";
          case "Catalyst": return "📖";
          case "Claymore": return "🐟";
          case "Polearm":  return "🌿";
          case "Sword":    return "🗡️";
          default:         return "";
        }
      }
    }
  );
}