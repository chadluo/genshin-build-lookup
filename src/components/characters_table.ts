import {
  TYPE_CHARACTER,
  formatName,
  formatTableCaption,
  groupBy,
  renderLink,
} from "../base";
import { hasBookmarks } from "../bookmarks";
import { ui } from "../i18n";
import { Character, characters } from "../models/characters";

export class CharactersTable extends HTMLElement {
  constructor() {
    super();
    const byRarity = groupBy((o) => o.rarity, characters);
    const rarities = Array.from(byRarity.keys()).sort().reverse();
    this.innerHTML = `<details class="section" ${hasBookmarks() ? "" : "open"}>
        <summary>${formatTableCaption(TYPE_CHARACTER)}</summary>
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
        .join(formatName(ui.delimiter))}</td></tr>`;
  }
}
