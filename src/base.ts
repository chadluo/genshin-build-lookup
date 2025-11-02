import { isBookmarked } from "./bookmarks";
import { VIEW_ALL } from "./components/enemies_table";
import { DELIMITER, EMPTY, formatName, type I18nObject } from "./i18n";
import { type Character, characters } from "./models/characters";
import {
  type Boss,
  bosses,
  enemies,
  type Enemy,
  type TalentDomain,
  talentDomains,
  type WeaponDomain,
  weaponDomains,
} from "./models/enemies";
import {
  type Material,
  type MaterialId,
  materials,
  type TalentBook,
  type WeaponAscension,
} from "./models/materials";
import { type Weapon, weapons } from "./models/weapons";
import {
  type BaseItem,
  type ItemType,
  TYPE_BOSS,
  TYPE_CHARACTER,
  TYPE_ENEMY,
  TYPE_TALENT_DOMAIN,
  TYPE_WEAPON,
  TYPE_WEAPON_DOMAIN,
  TYPE_WEEKLY_BOSS,
} from "./types";
import { findRecents } from "./version";
import { getTimezone, getWeekday, weekdayNames } from "./weekdays";

export function renderQTableContent(
  itemType: ItemType,
  id: string,
  weekday: number,
): string {
  switch (itemType) {
    case TYPE_CHARACTER: {
      const character = characters.find((c) => c.id === id);
      return character == null
        ? ""
        : renderQTableRows(
            { itemType, id, name: character.name },
            byMaterials(character.materials),
            weekday,
            true,
          );
    }
    case TYPE_WEAPON: {
      const weapon = weapons.find((w) => w.id === id);
      return weapon == null
        ? ""
        : renderQTableRows(
            { itemType, id, name: weapon.name },
            byMaterials(weapon.materials),
            weekday,
            true,
          );
    }
    case TYPE_WEEKLY_BOSS:
    case TYPE_BOSS:
    case TYPE_ENEMY:
      return renderQTableRows(
        { itemType, id, name: findName([...bosses, ...enemies], id) },
        byEnemy(id),
        weekday,
        true,
      );
    case TYPE_TALENT_DOMAIN:
    case TYPE_WEAPON_DOMAIN:
      if (weekday === VIEW_ALL) {
        return [1, 2, 3]
          .map((weekday) =>
            renderQTableRows(
              {
                itemType,
                id,
                name: findName([...talentDomains, ...weaponDomains], id),
              },
              byDomain(id, weekday),
              weekday,
              true,
            ),
          )
          .join("");
      } else {
        return renderQTableRows(
          {
            itemType,
            id,
            name: findName([...talentDomains, ...weaponDomains], id),
          },
          byDomain(id, weekday),
          weekday,
          true,
        );
      }
    default:
      return "";
  }
}

export function findName(objects: BaseItem[], id: string): I18nObject {
  return objects.find((o) => o.id === id)?.name ?? EMPTY;
}

export function renderQTableRows(
  { itemType, id, name }: BaseItem,
  object: Map<
    Material,
    (
      | Character
      | Weapon
      | [TalentDomain, number]
      | [WeaponDomain, number]
      | Boss
      | Enemy
    )[]
  >,
  weekday: number,
  allowRemove: boolean,
) {
  const ms = Array.from(object.keys());
  const separator =
    "<span class='mobile'> / </span><span class='desktop'><br></span>";
  const currentWeekday = getWeekday(getTimezone());
  return `<tbody name="${formatId(itemType, id, weekday)}"><tr>
      <th ${ms.length === 0 ? "colspan='3'" : `rowspan="${ms.length}"`}>
        ${(
          itemType === TYPE_TALENT_DOMAIN || itemType === TYPE_WEAPON_DOMAIN
            ? formatDomainName(name, weekday)
            : formatName(name)
        ).replaceAll(" / ", separator)}
        ${
          allowRemove
            ? `<a class="remove" data-type="${itemType}" data-id="${id}" data-weekday="${weekday}">🧹</a>`
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

type EnemyByMaterialMap = Map<
  Material,
  ([TalentDomain, number] | [WeaponDomain, number] | Boss | Enemy)[]
>;

function byMaterials(ms: MaterialId[] | undefined): EnemyByMaterialMap {
  const map = new Map<
    Material,
    ([TalentDomain, number] | [WeaponDomain, number] | Boss | Enemy)[]
  >();
  return ms == null
    ? map
    : ms.reduce((map, m: MaterialId) => {
        const material = materials[m];
        if (!material) {
          console.error("Material not found", m);
          return map;
        }
        map.set(material, findEnemiesForMaterial(m));
        return map;
      }, map);
}

function _enemiesByMaterials(
  _ms: MaterialId[],
): Map<
  Material,
  [TalentDomain, number][] | [WeaponDomain, number][] | Boss[] | Enemy[]
> {
  const map = new Map();

  return map;
}

function findEnemiesForMaterial(
  m: MaterialId,
): ([TalentDomain, number] | [WeaponDomain, number] | Boss | Enemy)[] {
  const tds1: [TalentDomain, number][] = talentDomains.map((d) => [
    d,
    d.materialsByWeekday.indexOf(m as TalentBook),
  ]);
  const tds = tds1.filter(([, weekday]) => weekday !== -1);
  if (tds.length) return tds;

  const wds1: [WeaponDomain, number][] = weaponDomains.map((d) => [
    d,
    d.materialsByWeekday.indexOf(m as WeaponAscension),
  ]);
  const wds = wds1.filter(([, weekday]) => weekday !== -1);
  if (wds.length) return wds;

  const bs = bosses.filter((b) => b.materials?.includes(m));
  if (bs.length) return bs;
  return enemies.filter((e) => e.materials?.includes(m));
}

function byEnemy(enemy: string): Map<Material, (Character | Weapon)[]> {
  const ms = [...bosses, ...enemies].find((b) => b.id === enemy)?.materials;
  const result = new Map<Material, (Character | Weapon)[]>();
  return ms == null
    ? result
    : ms.reduce((map, material) => {
        const m = materials[material];
        if (m == null) {
          return map;
        }
        map.set(m, [
          ...(map.get(m) ?? []),
          ...filterForMaterial([...characters, ...weapons], material),
        ]);
        return map;
      }, result);
}

export function byDomain(
  domainId: string,
  weekday: number,
): Map<Material, (Character | Weapon)[]> {
  const domain = [...talentDomains, ...weaponDomains].find(
    (d) => d.id === domainId,
  );
  const material: TalentBook | WeaponAscension | "All" | undefined =
    domain?.materialsByWeekday[weekday];
  const m = material != null && material !== "All" ? materials[material] : null;
  const map = new Map();
  if (material != null && m != null) {
    map.set(
      m,
      filterForMaterial(
        domain?.itemType === TYPE_WEAPON_DOMAIN ? weapons : characters,
        material,
      ),
    );
  }
  return map;
}

function filterForMaterial(
  objects: (Character | Weapon)[],
  m: MaterialId | "All",
): (Character | Weapon)[] {
  return m === "All"
    ? []
    : objects.filter((o) => (o.materials as string[])?.includes(m));
}

const { current, upcoming } = findRecents();
export function renderLink(id: string, itemType: ItemType, names: I18nObject) {
  const classes = [];
  if (isBookmarked(itemType, id, 0)) {
    classes.push("bookmarked");
  }
  if (current.includes(id)) {
    classes.push("recent-new");
  }
  if (upcoming.includes(id)) {
    classes.push("upcoming");
  }
  return `<a data-id='${id}' data-type='${itemType}' class="${classes.join(
    " ",
  )}">${formatName(names)}</a>`;
}

function renderQTableRow(
  materials: Material[],
  objects: (
    | Character
    | Weapon
    | [TalentDomain, number]
    | [WeaponDomain, number]
    | Boss
    | Enemy
  )[],
  currentWeekday: number,
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
    weekdayNames[weekday],
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
  es: (
    | Character
    | Weapon
    | [TalentDomain, number]
    | [WeaponDomain, number]
    | Boss
    | Enemy
  )[],
  currentWeekday: number,
): string {
  const links = es.map((e) => {
    const [obj, weekday] = Array.isArray(e) ? [e[0], e[1]] : [e, 0];
    switch (obj.itemType) {
      case TYPE_TALENT_DOMAIN:
      case TYPE_WEAPON_DOMAIN:
        return renderDomainLink(obj, weekday, currentWeekday);
      default:
        if (obj.itemType == null) {
          console.trace("Missing itemType", obj);
        }
        return renderLink(obj.id, obj.itemType, obj.name);
    }
  });
  return links.join(formatName(DELIMITER));
}

export function renderDomainLink(
  { id, itemType, name }: BaseItem,
  weekday: number,
  currentWeekday: number,
) {
  const classes = [];
  if (isBookmarked(itemType, id, weekday)) {
    classes.push("bookmarked");
  }
  if (weekday === currentWeekday) {
    classes.push("current");
  }
  return `<a data-id='${id}' data-weekday='${weekday}' data-type='${itemType}' class='${classes.join(
    " ",
  )}'
  >${formatName(name)} ${formatName(weekdayNames[weekday])}</a>`;
}
