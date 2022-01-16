import { bosses, characters, domains, i18n, materials, weapons } from "./assets.mjs";

const LANG = "zh_CN";

export function byCharacter(character) {
  return characters[character].materials.reduce((p, m) => ((p[formatArray(materials[m].name[LANG])] = find(m)), p), {});
}

export function findCharacter(character) {
  return characters[character].name[LANG];
}

function find(m) {
  const ds = Object.values(domains)
    .filter((domain) => domain.materials_by_weekday.includes(m))
    .map((domain) => domain.name[LANG] + " " + findWeekday(domain.materials_by_weekday.indexOf(m)));

  if (ds.length) return ds;

  return Object.values(bosses)
    .filter((b) => b.materials.includes(m))
    .map((b) => b.name[LANG]);
}

function findWeekday(day) {
  // prettier-ignore
  switch (day) {
    case 1: case 4: return i18n.weekdays.mon_thu[LANG];
    case 2: case 5: return i18n.weekdays.tue_fri[LANG];
    case 3: case 6: return i18n.weekdays.wed_sat[LANG];
    default:        return "";
  }
}

///

function byWeapon(weapon) {
  const w = weapons[weapon];
  return w.materials.map((m) => materials[m].name["zh_CN"]);
}

// console.log(byWeapon("Skyward Harp"));

///

function byEnemy(enemy) {}

// console.log(byEnemy("Primo Geovishap"));

///

/**
 * object {
 *    material: [enemy]
 * }
 */
export function render(id, object) {
  const materials = Object.keys(object);
  return `<table>
    <tr>
      <td rowspan="${materials.length}">${id}</td>
      <td>${formatArray(materials[0])}</td>
      <td>${formatArray(object[materials[0]])}</td>
    </tr>
    ${materials
      .slice(1)
      .map((m) => `<tr><td>${formatArray(m)}</td><td>${formatArray(object[m])}</td></tr>`)
      .join("")}
  </table>`;
}

function formatArray(e) {
  return Array.isArray(e) ? e.join(i18n.delimiter[LANG]) : e;
}
