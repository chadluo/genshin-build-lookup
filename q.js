import { bosses, characters, domains, enemy_ids, i18n, materials, weapons } from "./assets.mjs";

const CHARACTERS = "characters";
const WEAPONS = "weapons";

const WEEKLY_BOSSES = "weekly_bosses";
const BOSSES = "bosses";
const TALENT_DOMAINS = "talent_domains";
const WEAPON_DOMAINS = "weapon_domains";

const selectors = document.querySelector("div.selectors");
const today = document.querySelector("div#today");
const output = document.querySelector("div.output");

let last_query_id;
let last_query_weekday;

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("lang-select").innerHTML = Object.entries(i18n.supported_languages)
    .map(([lang, name]) => `<option value="${lang}">${name}</option>`)
    .join("");

  const lang_candidate = localStorage.getItem("lang") || navigator.language;
  const lang = i18n.supported_languages.hasOwnProperty(lang_candidate) ? lang_candidate : "en";
  setLanguage(lang);

  selectors.innerHTML += renderItemsTable(characters, CHARACTERS);
  selectors.innerHTML += renderItemsTable(weapons, WEAPONS);
  selectors.innerHTML += renderEnemiesTable();
  today.innerHTML = renderWeekdayDomainTables();
});

function renderWeekdayDomainTables() {
  const weekday = new Date().getDay();
  return weekday === 0
    ? ""
    : `<table today-domains" class="qtable">${Object.keys(domains)
        .map((domain) => renderQTableRows(findDomain(domain, weekday), byDomain(domain, weekday)))
        .join("")}</table>`;
}

/* language selector */

document.getElementById("lang-select").addEventListener("change", (event) => {
  setLanguage(event.target.value);
});

function setLanguage(lang) {
  document.documentElement.setAttribute("lang", lang);
  document.title = document.querySelector(`h1 > span[lang=${lang}]`).innerHTML;
  document.getElementById("lang-select").value = lang;
  localStorage.setItem("lang", lang);
}

/* content tables */

function renderItemsTable(items, type) {
  const typeName = formatName(i18n[type]);
  return `<details id="${type}" open><summary>${typeName}</summary>
  <table class="ctable"><tr><th>${formatName(i18n.rarity)}</th><th>${typeName}</th></tr>
   ${Object.entries(groupBy("rarity", Object.entries(items)))
     .sort(([r1], [r2]) => r2 - r1)
     .map(([rarity, items]) => {
       const byCategory = Object.entries(groupBy("category", items));
       return `<tr><td rowspan="${byCategory.length}">${"⭐".repeat(rarity)}</td>
       <td>${type === WEAPONS ? formatWeaponIcon(byCategory[0][0]) : ""}${byCategory[0][1]
         .map(([id, obj]) => renderLink(id, type, obj.name))
         .join(formatName(i18n.delimiter))}</td></tr>
       ${byCategory
         .slice(1)
         .map(
           ([category, items]) =>
             `<tr><td>${type === WEAPONS ? formatWeaponIcon(category) : ""}${items
               .map(([id, obj]) => renderLink(id, type, obj.name))
               .join(formatName(i18n.delimiter))}</td></tr>`
         )
         .join("")}`;
     })
     .join("")}</table></details>`;
}

function formatWeaponIcon(category) {
  let icon;
  // prettier-ignore
  switch (category) {
    case "bow":      icon = "🏹"; break;
    case "catalyst": icon = "📕"; break;
    case "claymore": icon = "🐟"; break;
    case "polearm":  icon = "🌿"; break;
    case "sword":    icon = "🗡️"; break;
    default: return "";
  }
  return `<span class="weapon-icon">${icon}</span>`;
}

function renderEnemiesTable() {
  return `<details id="enemies" open><summary>${formatName(i18n.enemies_domains)}</summary>
  <table class="ctable"><tr><th>${formatName(i18n.type)}</th><th>${formatName(i18n.enemies_domains)}</th></tr>
    <tr><th>${formatName(i18n.weekly_bosses)}</th><td>${enemy_ids.weekly_bosses
    .map((d) => renderLink(d, WEEKLY_BOSSES, bosses[d].name))
    .join(formatName(i18n.delimiter))}</td></tr>
    <tr><th>${formatName(i18n.bosses)}</th><td>${enemy_ids.bosses
    .map((d) => renderLink(d, BOSSES, bosses[d].name))
    .join(formatName(i18n.delimiter))}</td></tr>
    <tr><th rowspan="${enemy_ids.talent_domains.length}">${formatName(i18n.talent_domains)}</th>
    ${formatDomain(enemy_ids.talent_domains[0], TALENT_DOMAINS)}</tr>
    ${enemy_ids.talent_domains
      .slice(1)
      .map((id) => `<tr>${formatDomain(id, TALENT_DOMAINS)}</tr>`)
      .join("")}
    <tr><th rowspan="${enemy_ids.weapon_domains.length}">${formatName(i18n.weapon_domains)}</th>
    ${formatDomain(enemy_ids.weapon_domains[0], WEAPON_DOMAINS)}</tr>
    ${enemy_ids.weapon_domains
      .slice(1)
      .map((id) => `<tr>${formatDomain(id, WEAPON_DOMAINS)}</tr>`)
      .join("")}`;
}

function renderLink(id, type, names) {
  return `<a data-id='${id}' data-type='${type}'>${formatName(names)}</a>`;
}

function renderDomainLink(id, weekday, type, names) {
  return `<a data-id='${id}' data-weekday='${weekday}' data-type='${type}'>${formatName(names)}</a>`;
}

function formatDomain(id, type) {
  return `<td>${formatName(domains[id].name)} / ${["mon_thu", "tue_fri", "wed_sat"]
    .map((weekday, i) => {
      return `<a data-id='${id}' data-weekday='${i + 1}' data-type='${type}'>${formatName(i18n.weekdays[weekday])}</a>`;
    })
    .join(formatName(i18n.delimiter))}</td>`;
}

/* search result tables */

function loadQTable(event) {
  const a = event.composedPath().find((e) => e.tagName === "A");
  if (!a) return;
  const id = a.dataset.id;
  const weekday = a.dataset.weekday || "-1";
  if (id === last_query_id && weekday === last_query_weekday) return;
  document.querySelectorAll(".qtable").forEach((element) => element.classList.remove("highlighted"));
  switch (a.dataset.type) {
    case CHARACTERS:
      output.innerHTML += renderCharacter(id);
      break;
    case WEAPONS:
      output.innerHTML += renderWeapon(id);
      break;
    case WEEKLY_BOSSES:
    case BOSSES:
      output.innerHTML += renderBoss(id);
      break;
    case TALENT_DOMAINS:
    case WEAPON_DOMAINS:
      output.innerHTML += renderDomain(id, parseInt(weekday));
      break;
  }
  window.scrollTo({ left: 0, top: document.body.offsetHeight, behavior: "smooth" });
  last_query_id = id;
  last_query_weekday = weekday;
}

selectors.addEventListener("click", loadQTable);
today.addEventListener("click", loadQTable);
output.addEventListener("click", loadQTable);

function renderCharacter(character) {
  return renderFullQTable(findCharacter(character), byCharacter(character));
}

function renderWeapon(weapon) {
  return renderFullQTable(findWeapon(weapon), byWeapon(weapon));
}

function renderBoss(boss) {
  return renderFullQTable(findBoss(boss), byBoss(boss));
}

function renderDomain(domainName, weekday) {
  return renderFullQTable(findDomain(domainName, weekday), byDomain(domainName, weekday));
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
  const ds = Object.entries(domains)
    .filter(([, domain]) => domain.materials_by_weekday.includes(m))
    .map(([id, domain]) => {
      const day = domain.materials_by_weekday.indexOf(m);
      return [
        id,
        {
          name: Object.fromEntries(
            Object.entries(domain.name).map(([lang, value]) => [lang, formatWeekday(value, lang, day)])
          ),
          type: domain.type,
          weekday: day,
        },
      ];
    });
  if (ds.length) return ds;
  return Object.entries(bosses).filter(([id, b]) => b.materials.includes(m));
}

function formatWeekday(name, lang, weekday) {
  return `${name} / ${findWeekday(lang, weekday)}`;
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
  // no weapons use boss materials
  return bosses[boss].materials.reduce(
    (map, m) => (
      map.set(materials[m].name, (map.get(materials[m].name) || []).concat(findCharactersForMaterial(m))), map
    ),
    new Map()
  );
}

function findDomain(domain, weekday) {
  const d = domains[domain];
  return Object.fromEntries(Object.entries(d.name).map(([lang, value]) => [lang, formatWeekday(value, lang, weekday)]));
}

function byDomain(domain, weekday) {
  const d = domains[domain];
  const m = d.materials_by_weekday[weekday > 3 ? weekday - 3 : weekday];
  return new Map([
    [materials[m].name, d.type === WEAPON_DOMAINS ? findWeaponsForMaterial(m) : findCharactersForMaterial(m)],
  ]);
}

function findCharactersForMaterial(m) {
  return Object.entries(characters)
    .filter(([id, c]) => c.materials.includes(m))
    .map(([id, c]) => {
      c.type = CHARACTERS;
      return [id, c];
    });
}

function findWeaponsForMaterial(m) {
  return Object.entries(weapons)
    .filter(([id, w]) => w.materials.includes(m))
    .map(([id, c]) => {
      c.type = WEAPONS;
      return [id, c];
    });
}

function renderFullQTable(id, object) {
  return `<table class="qtable highlighted">${renderQTableRows(id, object)}</table>`;
}

function renderQTableRows(id, object) {
  const materials = Array.from(object.keys());
  return `<tr>
      <th rowspan="${materials.length}">${formatName(id).replaceAll(" / ", "<br>")}</th>
      <td>${formatName(materials[0])}</td>
      <td>${formatArray(object.get(materials[0]))}</td>
    </tr>
    ${materials
      .slice(1)
      .map((m) => `<tr><td>${formatName(m)}</td><td>${formatArray(object.get(m))}</td></tr>`)
      .join("")}`;
}

function formatArray(e) {
  return e
    .map(([id, obj]) =>
      obj.type === WEAPON_DOMAINS || obj.type === TALENT_DOMAINS
        ? renderDomainLink(id, obj.weekday, obj.type, obj.name)
        : renderLink(id, obj.type, obj.name)
    )
    .join(formatName(i18n.delimiter));
}

function formatName(name) {
  return Object.entries(name)
    .map(([lang, value]) => {
      return `<span class="i18n" lang="${lang}">${Array.isArray(value) ? value.join("<br>") : value}</span>`;
    })
    .join("");
}

/* helpers */

document.getElementById("clear").addEventListener("click", () => {
  output.innerHTML = "";
});

function groupBy(field, arr) {
  return arr.reduce((obj, [id, item]) => {
    if (!obj[item[field]]) {
      obj[item[field]] = [];
    }
    obj[item[field]].push([id, item]);
    return obj;
  }, {});
}
