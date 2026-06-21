import { renderLink } from "../base.ts";
import { hasBookmarks } from "../bookmarks.ts";
import { DELIMITER, formatName, type I18nObject } from "../i18n.ts";
import { type Character, characters } from "../models/characters.ts";

const title: I18nObject = { en: "Characters", "zh-CN": "角色" };

export class CharactersTable extends HTMLElement {
  connectedCallback() {
    const byRarity = Map.groupBy(characters, ({ rarity }) => rarity);
    const rarities = Array.from(byRarity.keys()).sort().reverse();
    this.innerHTML = `<details class="section" ${hasBookmarks() ? "" : "open"}>
        <summary>🦸 ${formatName(title)}</summary>
        <table class="ctable">${rarities
        .map((rarity) => this.showByRarity(rarity, byRarity))
        .join("")}</table>
        </details>`;
  }

  showByRarity(rarity: number, byRarity: Map<number, Character[]>) {
    return `<tr><th>${"⭐".repeat(rarity)}</th>
      <td>${byRarity
        .get(rarity)
        ?.map((c) => renderLink(c.id, c.itemType, c.name))
        .join(formatName(DELIMITER))}</td></tr>`;
  }
}
