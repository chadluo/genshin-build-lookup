import { bosses, characters, domains, i18n, materials, weapons } from "./assets.mjs";

const LANG = "zh_CN";

export function byCharacter(character) {
  return characters[character].materials.reduce(
    (p, m) => ((p[formatMaterial(materials[m].name[LANG])] = find(m)), p),
    {}
  );
}

function formatMaterial(m) {
  if (!Array.isArray(m)) {
    return m;
  }
  return m.join(i18n.delimiter[LANG]);
}

function find(m) {
  console.log(m);

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

console.log(byWeapon("Skyward Harp"));

///

function byEnemy(enemy) {}

console.log(byEnemy("Primo Geovishap"));
