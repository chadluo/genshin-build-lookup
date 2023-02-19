import { formatName, formatTableCaption, groupWishObjects, renderLink } from "../base";
import { hasBookmarks } from "../bookmarks";
import * as I18n from "../i18n";
import * as Characters from "../models/characters";
import * as Types from "../types";

export function define() {
  customElements.define(
    "characters-table",
    class extends HTMLElement {
      constructor() {
        super();
        const byRarity = groupWishObjects((o) => o.rarity, Characters.characters);
        const rarities = Array.from(byRarity.keys()).sort().reverse();
        this.innerHTML = `<details class="section" ${hasBookmarks() ? "" : "open"}>
      <summary>${formatTableCaption(Types.TYPE_CHARACTER)}</summary>
      <table class="ctable">${rarities.map((rarity) => this.showByRarity(rarity, byRarity)).join("")}</table>
      </details>`;
      }

      showByRarity(rarity: number, byRarity: Map<number, Characters.Character[]>) {
        const cs: Characters.Character[] = byRarity.get(rarity)!;
        return `<tr><th>${"⭐".repeat(rarity)}</th>
      <td>${cs
        .map((c) => renderLink(c.id, Types.TYPE_CHARACTER, c.name))
        .join(formatName(I18n.i18n.delimiter))}</td></tr>`;
      }
    }
  );
}
