import { bosses, characters, domains, i18n, materials, weapons } from "./assets.mjs";

const CHARACTERS = "characters";
const WEAPONS = "weapons";

const selectors = document.querySelector("div.selectors");
selectors.innerHTML += renderItemsTable(characters, CHARACTERS);
selectors.innerHTML += renderItemsTable(weapons, WEAPONS);

const output = document.querySelector("div.output");
const query = document.getElementById("query");

function renderItemsTable(items, title) {
  const byRarity = Object.entries(items).reduce((acc, [id, obj]) => {
    let key = obj["rarity"];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push([id, obj]);
    return acc;
  }, {});

  const titleName = formatName(i18n[title]);

  return `<details open><summary>${titleName}</summary>
  <table class="ctable" data-type="${title}"><tr><th>${formatName(i18n.rarity)}</th><th>${titleName}</th></tr>
   ${Object.keys(byRarity)
     .sort()
     .reverse()
     .map(
       (rarity) =>
         `<tr><td>${rarity}</td><td>${byRarity[rarity]
           .map(([id, obj]) => createLink(id, obj))
           .join(formatName(i18n.delimiter))}</td></tr>`
     )
     .join("")}</table></details>`;
}

function createLink(id, item) {
  return `<a data-id='${id}'>${formatName(item.name)}</a>`;
}

selectors.addEventListener("click", (event) => {
  const path = event.composedPath();
  const table = path.find((e) => e.tagName === "TABLE");
  const a = path.find((e) => e.tagName === "A");
  switch (table.dataset.type) {
    case CHARACTERS:
      output.innerHTML += renderCharacter(a.dataset.id);
      break;
    case WEAPONS:
      output.innerHTML += renderWeapon(a.dataset.id);
      break;
  }
});

document.getElementById("lang-select").addEventListener("change", (event) => {
  document.documentElement.setAttribute("lang", event.target.value);
});
document.getElementById("byCharacter").addEventListener("click", () => {
  output.innerHTML += renderCharacter(query.value);
});
document.getElementById("byWeapon").addEventListener("click", () => {
  output.innerHTML += renderWeapon(query.value);
});
document.getElementById("byBoss").addEventListener("click", () => {
  output.innerHTML += renderBoss(query.value);
});
document.getElementById("byDomain").addEventListener("click", () => {
  output.innerHTML += renderDomain(query.value);
});
document.getElementById("clear").addEventListener("click", () => {
  output.innerHTML = "";
});

function renderCharacter(character) {
  return render2(findCharacter(character), byCharacter(character));
}

function renderWeapon(weapon) {
  return render2(findWeapon(weapon), byWeapon(weapon));
}

function renderBoss(boss) {
  return render2(findBoss(boss), byBoss(boss));
}

function renderDomain(domain) {
  const inputs = domain.split(",");
  const domainName = inputs[0].trim();
  const weekday = parseInt(inputs[1].trim(), 10);
  return render2(findDomain(domainName, weekday), byDomain(domainName, weekday));
}

function findCharacter(character) {
  return characters[character].name;
}

function byCharacter(character) {
  return characters[character].materials.reduce(
    (map, m) => (map.set(materials[m].name, findEnemiesForMaterial(m)), map),
    new Map()
  );
}

function findWeapon(weapon) {
  return weapons[weapon].name;
}

function byWeapon(weapon) {
  return weapons[weapon].materials.reduce(
    (map, m) => (map.set(materials[m].name, findEnemiesForMaterial(m)), map),
    new Map()
  );
}

function findEnemiesForMaterial(m) {
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

function findWeekday(lang, day) {
  // prettier-ignore
  switch (day) {
    case 1: case 4: return i18n.weekdays.mon_thu[lang];
    case 2: case 5: return i18n.weekdays.tue_fri[lang];
    case 3: case 6: return i18n.weekdays.wed_sat[lang];
    default:        return "";
  }
}

function findBoss(boss) {
  return bosses[boss].name;
}

function byBoss(boss) {
  const ms = bosses[boss].materials;
  const cs = ms.reduce(
    (map, m) => (
      map.set(materials[m].name, (map.get(materials[m].name) || []).concat(findCharactersForMaterial(m))), map
    ),
    new Map()
  );
  return cs;
}

function findDomain(domain, weekday) {
  const d = domains[domain];
  return Object.fromEntries(
    Object.entries(d.name).map(([lang, value]) => [lang, value + " " + findWeekday(lang, weekday)])
  );
}

function byDomain(domain, weekday) {
  const d = domains[domain];
  const m = d.materials_by_weekday[weekday > 3 ? weekday - 3 : weekday];
  return new Map([
    [materials[m].name, { weapon: findWeaponsForMaterial, talent: findCharactersForMaterial }[d.type](m)],
  ]);
}

function findCharactersForMaterial(m) {
  return Object.values(characters)
    .filter((c) => c.materials.includes(m))
    .map((c) => c.name);
}

function findWeaponsForMaterial(m) {
  return Object.values(weapons)
    .filter((w) => w.materials.includes(m))
    .map((w) => w.name);
}

/**
 * object {
 *    material: [enemy]
 * }
 */
function render2(id, object) {
  const materials = Array.from(object.keys());
  return `<table class="qtable">
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

function formatArray(e) {
  return Array.isArray(e) ? e.map(formatName).join("<br>") : formatName(e);
}

function formatName(name) {
  return Object.entries(name)
    .map(([lang, value]) => {
      return `<span class="i18n ${lang}">${Array.isArray(value) ? value.join("<br>") : value}</span>`;
    })
    .join("");
}
