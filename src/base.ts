import { isBookmarked } from "./bookmarks";
import { i18n, I18nObject, weekdays } from "./i18n";
import { Character, characters } from "./models/characters";
import { Boss, Domain, domains, Enemy } from "./models/enemies";
import { billets, forgingMaterials, Material, materials } from "./models/materials";
import { Weapon, weapons } from "./models/weapons";
import { recent_new, upcoming } from "./version";

export type Region = "Mondstadt" | "Liyue" | "Inazuma" | "Sumeru";

export const TYPE_CHARACTER = "character";
export const TYPE_WEAPON = "weapon";
export const TYPE_WEEKLY_BOSS = "weekly_boss";
export const TYPE_BOSS = "boss";
export const TYPE_ENEMY = "enemy";
export const TYPE_TALENT_DOMAIN = "talent_domain";
export const TYPE_WEAPON_DOMAIN = "weapon_domain";

export type ItemType =
  | typeof TYPE_CHARACTER
  | typeof TYPE_WEAPON
  | typeof TYPE_WEEKLY_BOSS
  | typeof TYPE_BOSS
  | typeof TYPE_ENEMY
  | typeof TYPE_TALENT_DOMAIN
  | typeof TYPE_WEAPON_DOMAIN;

export type WishItemType = typeof TYPE_CHARACTER | typeof TYPE_WEAPON;

export interface WishItem {
  id: string;
  type: WishItemType;
  rarity: number;
  name: I18nObject;
  materials?: string[];
}

export function formatTableCaption(type: string) {
  return `${getTableCaptionIcon(type)} ${formatName(i18n[type])}`;
}

function getTableCaptionIcon(type: string): string {
  // prettier-ignore
  switch (type) {
    case "character":       return "🦸";
    case "weapon":          return "🗡️";
    case "enemies_domains": return "🌱";
    case "today":           return "📅";
    default:                return "";
  }
}

export function formatName(name: I18nObject): string {
  return Object.entries(name)
    .map(([lang, value]) => `<span class="i18n" lang="${lang}">${formatValue(value)}</span>`)
    .join("");
}

export function renderLink(id: string, type: ItemType, names: I18nObject) {
  const classes = [];
  if (isBookmarked(type, id, 0)) {
    classes.push("bookmarked");
  }
  if (recent_new.includes(id)) {
    classes.push("recent-new");
  }
  if (upcoming.includes(id)) {
    classes.push("upcoming");
  }
  return `<a data-id='${id}' data-type='${type}' class="${classes.join(" ")}">${formatName(names)}</a>`;
}

export function formatValue(names: string | string[]) {
  const showAlternatives = (document.querySelector("input#show-alternatives") as HTMLInputElement).checked;
  return typeof names === "string"
    ? names
    : names.length === 1
    ? names[0]
    : `<details class="alternative" ${showAlternatives ? "open" : ""}><summary>${names[0]}</summary>${names
        .slice(1)
        .join("<br>")}</details>`;
}

export function groupWishObjects<WO extends WishItem, T>(f: (w: WO) => T, ws: WO[]): Map<T, WO[]> {
  return ws.reduce((m, w) => {
    const key = f(w);
    const arr = m.get(key) ?? [];
    arr.push(w);
    m.set(key, arr);
    return m;
  }, new Map<T, WO[]>());
}

/**
 * Sample structure:
 *
 * | Character/Weapon | Material | Bosses             |
 * | Boss             | Material | Characters/Weapons |
 */
export function renderQTableRows(
  type: ItemType,
  id: string,
  name: I18nObject,
  object: Map<Material, (WishItem | [Domain, number] | Boss | Enemy)[]>,
  weekday: number
) {
  const materials = Array.from(object.keys());
  const separator = "<span class='mobile'> / </span><span class='desktop'><br></span>";
  return `<tbody name="${formatId(type, id, weekday)}"><tr>
      <th ${materials.length === 0 ? "" : `rowspan="${materials.length}"`}>
        <label><input type="checkbox" data-type="${type}" data-id="${id}"
        ${weekday ? `data-weekday="${weekday}"` : ""}
        ${isBookmarked(type, id, weekday) ? "checked" : ""}>
        <div> ${(type === "talent_domain" || type === "weapon_domain"
          ? formatDomainName(name, weekday)
          : formatName(name)
        ).replaceAll(" / ", separator)}
        </div></label>
      </th>
      ${renderQTableRow(materials, object.get(materials[0])!)}
    </tr>
    ${
      materials.length === 0
        ? ""
        : materials
            .slice(1)
            .map((m) => `<tr ${formatMaterialType(m)}>${renderQTableRow([m], object.get(m)!)}</tr>`)
            .join("")
    }</tbody>`;
}

export function findDomain(domainId: string): I18nObject {
  return domains.find((d) => d.id === domainId)!.name;
}

export function byDomain(domainId: string, weekday: number): Map<Material, WishItem[]> {
  const domain = domains.filter((d) => d.id === domainId)[0]!;
  const material = domain.materials_by_weekday[weekday];
  const map = new Map();
  if (material) {
    map.set(
      materials.find((m) => m.id === material)!,
      domain.type === "weapon_domain" ? findWeaponsForMaterial(material) : findCharactersForMaterial(material)
    );
  }
  return map;
}

function renderQTableRow(materials: Material[], objects: (WishItem | [Domain, number] | Boss | Enemy)[]) {
  return `<td>${materials.length === 0 ? "" : formatName(materials[0].name)}</td>
    <td>${materials.length === 0 ? "" : formatArray(objects)}</td>`;
}

function formatDomainName(name: I18nObject, weekday: number) {
  return `${formatName(name)}<span class="domainWeekday"> / ${formatName(weekdays[weekday])}</span>`;
}

function formatMaterialType(m: Material) {
  return billets.includes(m.id) || forgingMaterials.includes(m.id) ? "class='billet'" : "";
}

/**
 * Type, Id, Weekday
 */
export function formatId(...parts: any[]) {
  return parts
    .filter((p) => p)
    .map((p) => p.toString())
    .join("-")
    .replaceAll(" ", "-")
    .replaceAll(/[’“”]/g, "");
}

function formatArray(es: (WishItem | [Domain, number] | Boss | Enemy)[]): string {
  const links = es.map((e) => {
    const [obj, weekday] = Array.isArray(e) ? [e[0], e[1]] : [e, 0];
    switch (obj.type) {
      case TYPE_TALENT_DOMAIN:
      case TYPE_WEAPON_DOMAIN:
        return renderDomainLink(obj.id, weekday, obj.type, obj.name);
      default:
        return renderLink(obj.id, obj.type, obj.name);
    }
  });
  return links.join(formatName(i18n.delimiter));
}

export function findWeaponsForMaterial(m: string): Weapon[] {
  return weapons.filter((w) => w.materials?.includes(m));
}

export function findCharactersForMaterial(m: string): Character[] {
  return characters.filter((c) => c.materials !== undefined && c.materials.includes(m));
}

function renderDomainLink(id: string, weekday: number, type: ItemType, names: I18nObject) {
  const classes = [];
  if (isBookmarked(type, id, weekday)) {
    classes.push("bookmarked");
  }
  return `<a data-id='${id}' data-weekday='${weekday}' data-type='${type}' class='${classes.join(" ")}'
  >${formatName(names)} ${formatName(weekdays[weekday])}</a>`;
}
