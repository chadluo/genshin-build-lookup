import { bosses, characters, domains, i18n, materials, weapons } from "./assets.mjs";

document.getElementById("lang-select").addEventListener("change", (event) => {
  document.documentElement.setAttribute("lang", event.target.value);
});
document.getElementById("byCharacter").addEventListener("click", () => {
  document.querySelector("div.output").innerHTML += render(document.getElementById("query").value);
});

function render(character) {
  return render2(findCharacter(character), byCharacter(character));
}

/**
 * object {
 *    material: [enemy]
 * }
 */
function render2(id, object) {
  const materials = Array.from(object.keys());
  return `<table>
    <tr>
      <th rowspan="${materials.length}">${formatName(id)}</th>
      <td>${formatName(materials[0])}</td>
      <td>${formatArray(object.get(materials[0]))}</td>
    </tr>
    ${materials
      .slice(1)
      .map((m) => `<tr><td>${formatName(m)}</td><td>${formatArray(object.get(m))}</td></tr>`)
      .join("")}
  </table>`;
}

function findCharacter(character) {
  return characters[character].name;
}

function byCharacter(character) {
  return characters[character].materials.reduce(
    (map, m) => (map.set(materials[m].name, findEnemyForMaterial(m)), map),
    new Map()
  );
}

function findEnemyForMaterial(m) {
  const ds = Object.values(domains)
    .filter((domain) => domain.materials_by_weekday.includes(m))
    .map((domain) =>
      Object.fromEntries(
        Object.entries(domain.name).map(([lang, value]) => [
          lang,
          value + " " + findWeekday(lang, domain.materials_by_weekday.indexOf(m)),
        ])
      )
    );

  if (ds.length) return ds;

  return Object.values(bosses)
    .filter((b) => b.materials.includes(m))
    .map((b) => b.name);
}

function findCharacterForMaterial(m) {
  return Object.values(characters)
    .filter((c) => c.materials.includes(m))
    .map((c) => c.name);
}

function findWeekday(lang, day) {
  // prettier-ignore
  switch (day) {
    case 1: case 4: return i18n.weekdays.mon_thu[lang];
    case 2: case 5: return i18n.weekdays.tue_fri[lang];
    case 3: case 6: return i18n.weekdays.wed_sat[lang];
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

function formatArray(e) {
  return Array.isArray(e) ? e.map(formatName).join("<br>") : formatName(e);
}

function formatName(name) {
  return Object.entries(name)
    .map(([lang, value]) => {
      return `<span class="i18n ${lang}">${Array.isArray(value) ? value.join(i18n.delimiter[lang]) : value}</span>`;
    })
    .join("");
}
