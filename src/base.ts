import { isBookmarked } from "./bookmarks";
import { i18n, I18nObject, weekdays } from "./i18n";
import * as Characters from "./models/characters";
import * as Enemies from "./models/enemies";
import * as Materials from "./models/materials";
import * as Weapons from "./models/weapons";
import * as Types from "./types";
import { recent_new, upcoming } from "./version";

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

export function renderLink(id: string, type: Types.ItemType, names: I18nObject) {
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

export function groupWishObjects<WO extends Types.WishObject, T>(f: (w: WO) => T, ws: WO[]): Map<T, WO[]> {
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
  type: Types.ItemType,
  id: string,
  name: I18nObject,
  object: Map<Materials.Material, (Types.WishObject | [Enemies.Domain, number] | Enemies.Boss | Enemies.Enemy)[]>,
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
  return Enemies.domains.find((d) => d.id === domainId)!.name;
}

export function byDomain(domainId: string, weekday: number): Map<Materials.Material, Types.WishObject[]> {
  const domain = Enemies.domains.filter((d) => d.id === domainId)[0]!;
  const material = domain.materials_by_weekday[weekday];
  const map = new Map();
  if (material) {
    map.set(
      Materials.materials.find((m) => m.id === material)!,
      domain.type === "weapon_domain" ? findWeaponsForMaterial(material) : findCharactersForMaterial(material)
    );
  }
  return map;
}

function renderQTableRow(
  materials: Materials.Material[],
  objects: (Types.WishObject | [Enemies.Domain, number] | Enemies.Boss | Enemies.Enemy)[]
) {
  return `<td>${materials.length === 0 ? "" : formatName(materials[0].name)}</td>
    <td>${materials.length === 0 ? "" : formatArray(objects)}</td>`;
}

function formatDomainName(name: I18nObject, weekday: number) {
  return `${formatName(name)}<span class="domainWeekday"> / ${formatName(weekdays[weekday])}</span>`;
}

function formatMaterialType(m: Materials.Material) {
  return Materials.billets.includes(m.id) || Materials.forgingMaterials.includes(m.id) ? "class='billet'" : "";
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

function formatArray(es: (Types.WishObject | [Enemies.Domain, number] | Enemies.Boss | Enemies.Enemy)[]): string {
  const links = es.map((e) => {
    const [obj, weekday] = Array.isArray(e) ? [e[0], e[1]] : [e, 0];
    switch (obj.type) {
      case Types.TYPE_TALENT_DOMAIN:
      case Types.TYPE_WEAPON_DOMAIN:
        return renderDomainLink(obj.id, weekday, obj.type, obj.name);
      default:
        return renderLink(obj.id, obj.type, obj.name);
    }
  });
  return links.join(formatName(i18n.delimiter));
}

export function findWeaponsForMaterial(m: string): Weapons.Weapon[] {
  return Weapons.weapons.filter((w) => w.materials?.includes(m));
}

export function findCharactersForMaterial(m: string): Characters.Character[] {
  return Characters.characters.filter((c) => c.materials !== undefined && c.materials.includes(m));
}

function renderDomainLink(id: string, weekday: number, type: Types.ItemType, names: I18nObject) {
  const classes = [];
  if (isBookmarked(type, id, weekday)) {
    classes.push("bookmarked");
  }
  return `<a data-id='${id}' data-weekday='${weekday}' data-type='${type}' class='${classes.join(" ")}'
  >${formatName(names)} ${formatName(weekdays[weekday])}</a>`;
}
