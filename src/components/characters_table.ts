import { TYPE_CHARACTER, renderLink } from "../base";
import { hasBookmarks } from "../bookmarks";
import { DELIMITER, I18nObject, formatName } from "../i18n";
import { Character, characters } from "../models/characters";

const title: I18nObject = { en: "Characters", "zh-CN": "角色" };

export class CharactersTable extends HTMLElement {
  constructor() {
    super();
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
        ?.map((c) => renderLink(c.id, TYPE_CHARACTER, c.name))
        .join(formatName(DELIMITER))}</td></tr>`;
  }
}
