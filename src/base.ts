import { isBookmarked } from "./bookmarks";
import { I18nObject, ui, weekdays } from "./i18n";
import { Character, characters } from "./models/characters";
import { Domain, domains } from "./models/enemies";
import {
  forgingMaterials,
  Gem,
  gems,
  Material,
  materials,
  midlanderBillets,
  northlanderBillets,
} from "./models/materials";
import { Weapon, weapons } from "./models/weapons";
import { recentNew, upcoming } from "./version";

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

export type OfMaterial = {
  id: string;
  type: ItemType;
  name: I18nObject;
  materials?: string[];
};

export type Timezone = "Asia" | "Europe" | "America";
export const timezones: Record<Timezone, number> = { Asia: 8, Europe: 1, America: -5 };

export function formatTableCaption(type: string) {
  return `${getTableCaptionIcon(type)} ${formatName(ui[type])}`;
}

function getTableCaptionIcon(type: string): string {
  // prettier-ignore
  switch (type) {
    case "character":         return "🦸";
    case "weapon":            return "🗡️";
    case "enemiesAndDomains": return "🌱";
    case "today":             return "📅";
    default:                  return "";
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
  if (recentNew.includes(id)) {
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

export function groupBy<W, T>(f: (w: W) => T, ws: W[]): Map<T, W[]> {
  return ws.reduce((m, w) => {
    const key = f(w);
    const arr = m.get(key) ?? [];
    arr.push(w);
    m.set(key, arr);
    return m;
  }, new Map<T, W[]>());
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
  object: Map<Material, (OfMaterial | [Domain, number])[]>,
  weekday: number,
  remove: boolean
) {
  const materials = Array.from(object.keys());
  const separator = "<span class='mobile'> / </span><span class='desktop'><br></span>";
  const currentWeekday = getWeekday(getTimezone());
  return `<tbody name="${formatId(type, id, weekday)}"><tr>
      <th ${materials.length === 0 ? "" : `rowspan="${materials.length}"`}>
        ${(type === TYPE_TALENT_DOMAIN || type === TYPE_WEAPON_DOMAIN
          ? formatDomainName(name, weekday)
          : formatName(name)
        ).replaceAll(" / ", separator)}
        ${remove ? `<a class="remove" data-type="${type}" data-id="${id}" data-weekday="${weekday}">🧹</a>` : ""}
      </th>${renderQTableRow(materials, object.get(materials[0])!, currentWeekday)}
    </tr>
    ${
      materials.length === 0
        ? ""
        : materials
            .slice(1)
            .map((m) => `<tr ${formatMaterialType(m)}>${renderQTableRow([m], object.get(m)!, currentWeekday)}</tr>`)
            .join("")
    }</tbody>`;
}

export function findDomain(domainId: string): I18nObject {
  return domains.find((d) => d.id === domainId)!.name;
}

export function byDomain(domainId: string, weekday: number): Map<Material, OfMaterial[]> {
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

function renderQTableRow(materials: Material[], objects: (OfMaterial | [Domain, number])[], currentWeekday: number) {
  return `<td>${materials.length === 0 ? "" : formatName(materials[0].name)}</td>
    <td>${materials.length === 0 ? "" : formatArray(objects, currentWeekday)}</td>`;
}

function formatDomainName(name: I18nObject, weekday: number) {
  return `${formatName(name)}<span class="domainWeekday"> / ${formatName(weekdays[weekday])}</span>`;
}

function formatMaterialType(m: Material) {
  return northlanderBillets.includes(m.id) || midlanderBillets.includes(m.id) || forgingMaterials.includes(m.id)
    ? "class='billet'"
    : gems.includes(m.id as Gem)
    ? "class='gem'"
    : "";
}

/**
 * Type, Id, Weekday
 */
export function formatId(...parts: (string | number)[]) {
  return parts
    .filter((p) => p)
    .map((p) => p.toString())
    .join("-")
    .replaceAll(" ", "-")
    .replaceAll(/[’“”]/g, "");
}

function formatArray(es: (OfMaterial | [Domain, number])[], currentWeekday: number): string {
  const links = es.map((e) => {
    const [obj, weekday] = Array.isArray(e) ? [e[0], e[1]] : [e, 0];
    switch (obj.type) {
      case TYPE_TALENT_DOMAIN:
      case TYPE_WEAPON_DOMAIN:
        return renderDomainLink(obj.id, weekday, obj.type, obj.name, currentWeekday);
      default:
        return renderLink(obj.id, obj.type, obj.name);
    }
  });
  return links.join(formatName(ui.delimiter));
}

export function findWeaponsForMaterial(m: string): Weapon[] {
  return weapons.filter((w) => w.materials?.includes(m));
}

export function findCharactersForMaterial(m: string): Character[] {
  return characters.filter((c) => c.materials !== undefined && c.materials.includes(m));
}

export function renderDomainLink(
  id: string,
  weekday: number,
  type: ItemType,
  names: I18nObject | null,
  currentWeekday: number
) {
  const classes = [];
  if (isBookmarked(type, id, weekday)) {
    classes.push("bookmarked");
  }
  if (weekday === currentWeekday) {
    classes.push("current");
  }
  return `<a data-id='${id}' data-weekday='${weekday}' data-type='${type}' class='${classes.join(" ")}'
  >${names === null ? "" : formatName(names)} ${formatName(weekdays[weekday])}</a>`;
}

/**
 * Get current weekday of domain materials at given timezone, assuming no local DST.
 *
 * - Asia/HK, MO, TW/CN: UTC+8
 * - Europe: UTC+1
 * - America: UTC-5
 *
 * @see https://genshin.hoyoverse.com/en/news/detail/6638
 * @returns weekday at specific server timezone, range [0..3]
 */
export function getWeekday(zone: Timezone) {
  const now = new Date();
  const utcHour = now.getUTCHours();
  const utcDay = now.getUTCDay();
  const zoneH = utcHour + timezones[zone];
  // refresh at 4am
  const zoneDay = ((zoneH > 28 ? utcDay + 1 : zoneH < 4 ? utcDay - 1 : utcDay) + 7) % 7;
  return zoneDay > 3 ? zoneDay - 3 : zoneDay;
}

export function getTimezone() {
  return (localStorage.getItem("timezone") as Timezone) || guessTimezone();
}

export function guessTimezone(): Timezone {
  const offset = -new Date().getTimezoneOffset() / 60;
  return offset < -2 ? "America" : offset < 4.5 ? "Europe" : "Asia";
}
