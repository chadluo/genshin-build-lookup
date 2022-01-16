import { bosses, characters, domains, materials, weapons } from "./assets.mjs";

const LANG = "zh_CN";

function byCharacter(character) {
  return characters[character].materials.reduce((p, m) => ((p[materials[m].name[LANG]] = find(m)), p), {});
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
  if (LANG === "zh_CN") {
    switch (day) {
      case 1: case 4: return "一四日";
      case 2: case 5: return "二五日";
      case 3: case 6: return "三六日";
      default:        return "";
    }
  } else {
    // default "en"
    switch (day) {
      case 1: case 4: return "Mon, Thu, Sun";
      case 2: case 5: return "Tue, Fri, Sun";
      case 3: case 6: return "Wed, Sat, Sun";
      default:        return "";
    }
  }
}

console.log(byCharacter("Amber"));

///

function byWeapon(weapon) {
  const w = weapons[weapon];
  return w.materials.map((m) => materials[m].name["zh_CN"]);
}

console.log(byWeapon("Skyward Harp"));

///

function byEnemy(enemy) {}

console.log(byEnemy("Primo Geovishap"));
