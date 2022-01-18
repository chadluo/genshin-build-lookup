import { bosses, characters, domains, i18n, materials, weapons } from "./assets.mjs";

const CHARACTERS = "characters";
const WEAPONS = "weapons";

const WEEKLY_BOSSES = "w";
const BOSSES = "b";
const TALENT_DOMAINS = "td";
const WEAPON_DOMAINS = "wd";

const selectors = document.querySelector("div.selectors");
selectors.innerHTML += renderItemsTable(characters, CHARACTERS);
selectors.innerHTML += renderItemsTable(weapons, WEAPONS);
selectors.innerHTML += renderEnemiesTable();

const output = document.querySelector("div.output");
const query = document.getElementById("query");

function renderItemsTable(items, type) {
  const byRarity = groupBy("rarity", Object.entries(items));
  const typeName = formatName(i18n[type]);
  return `<details open><summary>${typeName}</summary>
  <table class="ctable"><tr><th>${formatName(i18n.rarity)}</th><th>${typeName}</th></tr>
   ${Object.keys(byRarity)
     .sort()
     .reverse()
     .map(
       (rarity) =>
         `<tr><td>${"🟊".repeat(rarity)}</td><td>${Object.values(groupBy("category", byRarity[rarity]))
           .map(
             (arr) => "<p>" + arr.map(([id, obj]) => createLink(id, type, obj.name)).join(formatName(i18n.delimiter))
           )
           .join("")}</td></tr>`
     )
     .join("")}</table></details>`;
}

function renderEnemiesTable() {
  const weekly_boss_ids = [
    "Confront Stormterror",
    "Enter the Golden House",
    "Narukami Island: Tenshukaku",
    "Beneath the Dragon-Queller",
    "Wolf of the North Challenge",
  ];
  const boss_ids = [
    "Electro Hypostasis",
    "Anemo Hypostasis",
    "Cryo Regisvine",
    "Geo Hypostasis",
    "Rhodeia of Loch",
    "Pyro Regisvine",
    "Primo Geovishap",
    "Cryo Hypostasis",
    "Maguu Kenki",
    "Pyro Hypostasis",
    "Perpetual Mechanical Array",
    "Hydro Hypostasis",
    "Thunder Manifestation",
    "Golden Wolflord",
    "Bathysmal Vishap Herd",
  ];
  const talent_domains = ["Forsaken Rift", "Taishan Mansion", "Violet Court"];
  const weapon_domains = ["Cecilia Garden", "Hidden Palace of Lianshan Formula", "Court of Flowing Sand"];

  return `<details open><summary>${formatName(i18n.enemies_domains)}</summary>
  <table class="ctable"><tr><th>${formatName(i18n.type)}</th><th>${formatName(i18n.enemies_domains)}</th></tr>
    <tr><th>${formatName(i18n.weekly_bosses)}</th><td>${weekly_boss_ids
    .map((d) => createLink(d, WEEKLY_BOSSES, bosses[d].name))
    .join(formatName(i18n.delimiter))}</td></tr>
    <tr><th>${formatName(i18n.bosses)}</th><td>${boss_ids
    .map((d) => createLink(d, BOSSES, bosses[d].name))
    .join(formatName(i18n.delimiter))}</td></tr>
    <tr><th>${formatName(i18n.talent_domains)}</th><td>${formatDomains(talent_domains, TALENT_DOMAINS)}</td></tr>
    <tr><th>${formatName(i18n.weapon_domains)}</th><td>${formatDomains(weapon_domains, WEAPON_DOMAINS)}</td></tr>
  </table></details>`;
}

function createLink(id, type, names) {
  return `<a data-id='${id}' data-type='${type}'>${formatName(names)}</a>`;
}

function formatDomains(ids, type) {
  return ids
    .map(
      (d) =>
        `<p>${formatName(domains[d].name)} / ${["mon_thu", "tue_fri", "wed_sat"]
          .map(
            (weekday, i) =>
              `<a data-id='${d}' data-weekday='${i + 1}' data-type='${type}'>${formatName(i18n.weekdays[weekday])}</a>`
          )
          .join(formatName(i18n.delimiter))}`
    )
    .join("");
}

selectors.addEventListener("click", (event) => {
  const a = event.composedPath().find((e) => e.tagName === "A");
  if (!a) return;
  switch (a.dataset.type) {
    case CHARACTERS:
      output.innerHTML += renderCharacter(a.dataset.id);
      break;
    case WEAPONS:
      output.innerHTML += renderWeapon(a.dataset.id);
      break;
    case WEEKLY_BOSSES:
    case BOSSES:
      output.innerHTML += renderBoss(a.dataset.id);
      break;
    case TALENT_DOMAINS:
    case WEAPON_DOMAINS:
      output.innerHTML += renderDomain(a.dataset.id, a.dataset.weekday);
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
  output.innerHTML += renderDomain2(query.value);
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

function renderDomain2(domain) {
  const inputs = domain.split(",");
  const domainName = inputs[0].trim();
  const weekday = parseInt(inputs[1].trim(), 10);
  return renderDomain(domainName, weekday);
}

function renderDomain(domainName, weekday) {
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
  return weapons[escapeQuotes(weapon)].name;
}

function escapeQuotes(str) {
  return str.replaceAll("'", "&apos;").replaceAll('"', "&quot;");
}

function byWeapon(weapon) {
  return weapons[escapeQuotes(weapon)].materials.reduce(
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
          value + " / " + findWeekday(lang, domain.materials_by_weekday.indexOf(m)),
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
      <th rowspan="${materials.length}">${formatName(id).replaceAll(" / ", "<br>")}</th>
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
  return Array.isArray(e) ? e.map(formatName).join(formatName(i18n.delimiter)) : formatName(e);
}

function formatName(name) {
  return Object.entries(name)
    .map(([lang, value]) => {
      return `<span class="i18n ${lang}">${Array.isArray(value) ? value.join("<br>") : value}</span>`;
    })
    .join("");
}

function groupBy(field, arr) {
  return arr.reduce((obj, [id, item]) => {
    if (!obj[item[field]]) {
      obj[item[field]] = [];
    }
    obj[item[field]].push([id, item]);
    return obj;
  }, {});
}
