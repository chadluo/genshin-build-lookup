import { isBookmarked } from "./bookmarks";
import { VIEW_ALL } from "./components/enemies_table";
import {
  DELIMITER,
  EMPTY,
  type I18nObject,
  formatName,
  weekdays,
} from "./i18n";
import { type CharacterId, characters } from "./models/characters";
import { type Domain, bosses, domains, enemies } from "./models/enemies";
import { type Material, materials } from "./models/materials";
import { weapons } from "./models/weapons";
import { findRecents } from "./version";

export type Region =
  | "Mondstadt"
  | "Liyue"
  | "Inazuma"
  | "Sumeru"
  | "Fontaine"
  | "Natlan";

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
export const timezones: Record<Timezone, number> = {
  Asia: 8,
  Europe: 1,
  America: -5,
};

export function renderQTableContent(
  type: ItemType,
  id: string,
  weekday: number
): string {
  switch (type) {
    case TYPE_CHARACTER: {
      const character = characters[id as CharacterId];
      return character == null
        ? ""
        : renderQTableRows(
            type,
            id,
            character.name,
            byMaterials(character.materials),
            weekday,
            true
          );
    }
    case TYPE_WEAPON: {
      const weapon = weapons.find((w) => w.id === id);
      return weapon == null
        ? ""
        : renderQTableRows(
            type,
            id,
            weapon.name,
            byMaterials(weapon.materials),
            weekday,
            true
          );
    }
    case TYPE_WEEKLY_BOSS:
    case TYPE_BOSS:
    case TYPE_ENEMY:
      return renderQTableRows(
        type,
        id,
        findName([...bosses, ...enemies], id),
        byEnemy(id),
        weekday,
        true
      );
    case TYPE_TALENT_DOMAIN:
    case TYPE_WEAPON_DOMAIN:
      if (weekday === VIEW_ALL) {
        return [1, 2, 3]
          .map((weekday) =>
            renderQTableRows(
              type,
              id,
              findName(domains, id),
              byDomain(id, weekday),
              weekday,
              true
            )
          )
          .join("");
      }
      return renderQTableRows(
        type,
        id,
        findName(domains, id),
        byDomain(id, weekday),
        weekday,
        true
      );
    default:
      return "";
  }
}

export function findName(objects: OfMaterial[], id: string): I18nObject {
  return objects.find((o) => o.id === id)?.name ?? EMPTY;
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
  const ms = Array.from(object.keys());
  const separator =
    "<span class='mobile'> / </span><span class='desktop'><br></span>";
  const currentWeekday = getWeekday(getTimezone());
  return `<tbody name="${formatId(type, id, weekday)}"><tr>
      <th ${ms.length === 0 ? "colspan='3'" : `rowspan="${ms.length}"`}>
        ${(type === TYPE_TALENT_DOMAIN || type === TYPE_WEAPON_DOMAIN
          ? formatDomainName(name, weekday)
          : formatName(name)
        ).replaceAll(" / ", separator)}
        ${
          remove
            ? `<a class="remove" data-type="${type}" data-id="${id}" data-weekday="${weekday}">🧹</a>`
            : ""
        }
      </th>${(() => {
        const target = object.get(ms[0]);
        return target == null
          ? ""
          : renderQTableRow(ms, target, currentWeekday);
      })()}
    </tr>
    ${
      ms.length === 0
        ? ""
        : ms
            .slice(1)
            .map((m) => {
              const target = object.get(m);
              return `<tr ${formatMaterialType(m)}>${
                target == null
                  ? ""
                  : renderQTableRow([m], target, currentWeekday)
              }</tr>`;
            })
            .join("")
    }</tbody>`;
}

function byMaterials(
  ms: string[] | undefined
): Map<Material, [Domain, number][] | OfMaterial[]> {
  const map = new Map<Material, [Domain, number][] | OfMaterial[]>();
  return ms === undefined
    ? map
    : ms.reduce((map, m: string) => {
        const material = materials.filter((material) => material.id === m)[0];
        if (!material) {
          console.error("Material not found", m);
          return map;
        }
        map.set(material, findEnemiesForMaterial(m));
        return map;
      }, map);
}

function findEnemiesForMaterial(m: string): [Domain, number][] | OfMaterial[] {
  const dsm: [Domain, number][] = domains.map((d) => [
    d,
    d.materials_by_weekday.indexOf(m),
  ]);
  const ds = dsm.filter(([, weekday]) => weekday !== -1);
  if (ds.length) return ds;
  const bs = bosses.filter((b) => b.materials?.includes(m));
  if (bs.length) return bs;
  return enemies.filter((e) => e.materials?.includes(m));
}

function byEnemy(enemy: string): Map<Material, OfMaterial[]> {
  const ms = [...bosses, ...enemies].find((b) => b.id === enemy)?.materials;
  return ms === undefined
    ? new Map()
    : ms.reduce((map, material: string) => {
        const m = materials.find((m) => m.id === material);
        if (m == null) {
          return map;
        }
        map.set(m, [
          ...(map.get(m) ?? []),
          ...filterForMaterial(
            [...Object.values(characters), ...weapons],
            material
          ),
        ]);
        return map;
      }, new Map<Material, OfMaterial[]>());
}

export function byDomain(
  domainId: string,
  weekday: number
): Map<Material, OfMaterial[]> {
  const domain = domains.find((d) => d.id === domainId);
  const material = domain?.materials_by_weekday[weekday];
  const m = materials.find((m) => m.id === material);
  const map = new Map();
  if (material != null && m != null) {
    map.set(
      m,
      filterForMaterial(
        domain?.type === TYPE_WEAPON_DOMAIN
          ? weapons
          : Object.values(characters),
        material
      )
    );
  }
  return map;
}

function filterForMaterial(objects: OfMaterial[], m: string): OfMaterial[] {
  return objects.filter((o) => o.materials?.includes(m));
}

const { current, upcoming } = findRecents();
export function renderLink(id: string, type: ItemType, names: I18nObject) {
  const classes = [];
  if (isBookmarked(type, id, 0)) {
    classes.push("bookmarked");
  }
  if (current.includes(id)) {
    classes.push("recent-new");
  }
  if (upcoming.includes(id)) {
    classes.push("upcoming");
  }
  return `<a data-id='${id}' data-type='${type}' class="${classes.join(
    " "
  )}">${formatName(names)}</a>`;
}

function renderQTableRow(
  materials: Material[],
  objects: (OfMaterial | [Domain, number])[],
  currentWeekday: number
) {
  return `<td>${
    materials.length === 0 ? "" : formatName(materials[0].name)
  }</td>
    <td>${
      materials.length === 0 ? "" : formatArray(objects, currentWeekday)
    }</td>`;
}

function formatDomainName(name: I18nObject, weekday: number) {
  return `${formatName(name)}<span class="domainWeekday"> / ${formatName(
    weekdays[weekday]
  )}</span>`;
}

function formatMaterialType(m: Material) {
  return "forging" in m ? "class='billet'" : "gem" in m ? "class='gem'" : "";
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

function formatArray(
  es: (OfMaterial | [Domain, number])[],
  currentWeekday: number
): string {
  const links = es.map((e) => {
    const [obj, weekday] = Array.isArray(e) ? [e[0], e[1]] : [e, 0];
    switch (obj.type) {
      case TYPE_TALENT_DOMAIN:
      case TYPE_WEAPON_DOMAIN:
        return renderDomainLink(
          obj.id,
          weekday,
          obj.type,
          obj.name,
          currentWeekday
        );
      default:
        return renderLink(obj.id, obj.type, obj.name);
    }
  });
  return links.join(formatName(DELIMITER));
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
  return `<a data-id='${id}' data-weekday='${weekday}' data-type='${type}' class='${classes.join(
    " "
  )}'
  >${names === null ? "" : formatName(names)} ${formatName(
    weekdays[weekday]
  )}</a>`;
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
  const zoneDay =
    ((zoneH > 28 ? utcDay + 1 : zoneH < 4 ? utcDay - 1 : utcDay) + 7) % 7;
  return zoneDay > 3 ? zoneDay - 3 : zoneDay;
}

export function getTimezone() {
  return (localStorage.getItem("timezone") as Timezone) || guessTimezone();
}

export function guessTimezone(): Timezone {
  const offset = -new Date().getTimezoneOffset() / 60;
  return offset < -2 ? "America" : offset < 4.5 ? "Europe" : "Asia";
}
