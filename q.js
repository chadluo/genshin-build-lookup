import { bosses, characters, domains, enemy_ids, i18n, materials, weapons } from "./assets.mjs";

const TYPE_CHARACTER = "character";
const TYPE_WEAPON = "weapon";

const TYPE_WEEKLY_BOSS = "weekly_boss";
const TYPE_BOSS = "boss";
const TYPE_TALENT_DOMAIN = "talent_domain";
const TYPE_WEAPON_DOMAIN = "weapon_domain";

const selectors = document.querySelector("div.selectors");
const today = document.getElementById("today");
const output = document.getElementById("output");

let last_query_id;
let last_query_weekday;

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("lang-select").innerHTML = Object.entries(i18n.supported_languages)
    .map(([lang, name]) => `<option value="${lang}">${name}</option>`)
    .join("");

  const lang_candidate = localStorage.getItem("lang") || navigator.language;
  const lang = i18n.supported_languages.hasOwnProperty(lang_candidate) ? lang_candidate : "en";
  setLanguage(lang);

  const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");

  selectors.innerHTML += renderItemsTable(characters, TYPE_CHARACTER, bookmarks.length !== 0);
  selectors.innerHTML += renderItemsTable(weapons, TYPE_WEAPON, bookmarks.length !== 0);
  selectors.innerHTML += renderEnemiesTable(bookmarks.length !== 0);
  today.innerHTML = renderWeekdayDomainTables();

  bookmarks.forEach(([type, id, weekday]) => output.append(createQTable(type, id, weekday)));
  document.querySelectorAll(".qtable").forEach((element) => element.classList.remove("highlighted"));
});

function renderWeekdayDomainTables() {
  const day = new Date().getDay();
  const weekday = day > 3 ? day - 3 : day;
  return weekday === 0
    ? ""
    : `<table class="qtable">${Object.entries(domains)
        .map(([id, domain]) =>
          renderQTableRows(domain.type, id, findDomain(id, weekday), byDomain(id, weekday), weekday)
        )
        .join("")}</table>`;
}

/* nav */

document.querySelector("nav .links").addEventListener("click", (event) => {
  const link = event.target;
  if (link.tagName !== "A") return;
  const target = document.getElementById(link.dataset.target);
  if (target.tagName === "DETAILS") {
    target.open = true;
  }
  target.scrollIntoView();
});

/* language selector */

document.getElementById("lang-select").addEventListener("change", (event) => setLanguage(event.target.value));

function setLanguage(lang) {
  document.documentElement.setAttribute("lang", lang);
  document.title = document.querySelector(`h1 > span[lang=${lang}]`).innerHTML;
  document.getElementById("lang-select").value = lang;
  localStorage.setItem("lang", lang);
}

/* content tables */

function renderItemsTable(items, type, hasBookmarks) {
  const typeName = formatName(i18n[type]);
  return `<details id="${type}" ${hasBookmarks ? "" : "open"}><summary>${typeName}</summary>
  <table class="ctable"><tr><th>${formatName(i18n.rarity)}</th><th>${typeName}</th></tr>
   ${Object.entries(groupBy("rarity", Object.entries(items)))
     .sort(([r1], [r2]) => r2 - r1)
     .map(([rarity, items]) => {
       const byCategory = Object.entries(groupBy("category", items));
       return `<tr><td rowspan="${byCategory.length}">${"⭐".repeat(rarity)}</td>
       <td>${type === TYPE_WEAPON ? formatWeaponIcon(byCategory[0][0]) : ""}${byCategory[0][1]
         .map(([id, obj]) => renderLink(id, type, obj.name))
         .join(formatName(i18n.delimiter))}</td></tr>
       ${byCategory
         .slice(1)
         .map(
           ([category, items]) =>
             `<tr><td>${type === TYPE_WEAPON ? formatWeaponIcon(category) : ""}${items
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

function renderEnemiesTable(hasBookmarks) {
  return `<details id="enemies" ${hasBookmarks ? "" : "open"}><summary>${formatName(i18n.enemies_domains)}</summary>
  <table class="ctable"><tr><th>${formatName(i18n.type)}</th><th>${formatName(i18n.enemies_domains)}</th></tr>
    <tr><th>${formatName(i18n.weekly_boss)}</th><td>${enemy_ids.weekly_bosses
    .map((d) => renderLink(d, TYPE_WEEKLY_BOSS, bosses[d].name))
    .join(formatName(i18n.delimiter))}</td></tr>
    <tr><th>${formatName(i18n.boss)}</th><td>${enemy_ids.bosses
    .map((d) => renderLink(d, TYPE_BOSS, bosses[d].name))
    .join(formatName(i18n.delimiter))}</td></tr>
    <tr><th rowspan="${enemy_ids.talent_domains.length}">${formatName(i18n.talent_domain)}</th>
    ${formatDomain(enemy_ids.talent_domains[0], TYPE_TALENT_DOMAIN)}</tr>
    ${enemy_ids.talent_domains
      .slice(1)
      .map((id) => `<tr>${formatDomain(id, TYPE_TALENT_DOMAIN)}</tr>`)
      .join("")}
    <tr><th rowspan="${enemy_ids.weapon_domains.length}">${formatName(i18n.weapon_domain)}</th>
    ${formatDomain(enemy_ids.weapon_domains[0], TYPE_WEAPON_DOMAIN)}</tr>
    ${enemy_ids.weapon_domains
      .slice(1)
      .map((id) => `<tr>${formatDomain(id, TYPE_WEAPON_DOMAIN)}</tr>`)
      .join("")}`;
}

function renderLink(id, type, names) {
  return `<a data-id='${id}' data-type='${type}' ${isBookmarked(type, id, 0) ? "class='bookmarked'" : ""}
  >${formatName(names)}</a>`;
}

function renderDomainLink(id, weekday, type, names) {
  return `<a data-id='${id}' data-weekday='${weekday}' data-type='${type}' ${
    isBookmarked(type, id, weekday) ? "class='bookmarked'" : ""
  }>${formatName(names)}</a>`;
}

function formatDomain(id, type) {
  return `<td>${formatName(domains[id].name)} / ${["mon_thu", "tue_fri", "wed_sat"]
    .map((weekday, i) => {
      return `<a data-id='${id}' data-weekday='${i + 1}' data-type='${type}' ${
        isBookmarked(type, id, i + 1) ? "class='bookmarked'" : ""
      }>${formatName(i18n.weekdays[weekday])}</a>`;
    })
    .join(formatName(i18n.delimiter))}</td>`;
}

/* search result tables */

function findOrLoadQTable(event) {
  const a = event.composedPath().find((e) => e.tagName === "A");
  if (!a) return;
  const id = a.dataset.id;
  const weekday = a.dataset.weekday;
  if (id === last_query_id && weekday === last_query_weekday) return;
  const type = a.dataset.type;
  document.querySelectorAll(".qtable").forEach((element) => element.classList.remove("highlighted"));
  const existed = document.querySelector(`table[name="${formatId(type, id, weekday)}"]`);
  if (!existed) {
    const qtable = createQTable(type, id, parseInt(weekday));
    output.appendChild(qtable);
    qtable.scrollIntoView();
    last_query_id = id;
    last_query_weekday = weekday;
  } else {
    existed.classList.add("highlighted");
    existed.scrollIntoView();
  }
}

selectors.addEventListener("click", findOrLoadQTable);
today.addEventListener("click", findOrLoadQTable);
output.addEventListener("click", findOrLoadQTable);

function createQTable(type, id, weekday) {
  let renderedTableContent;
  switch (type) {
    case TYPE_CHARACTER:
      renderedTableContent = renderFullQTable(TYPE_CHARACTER, id, findCharacter(id), byCharacter(id));
      break;
    case TYPE_WEAPON:
      renderedTableContent = renderFullQTable(TYPE_WEAPON, id, findWeapon(id), byWeapon(id));
      break;
    case TYPE_WEEKLY_BOSS:
    case TYPE_BOSS:
      renderedTableContent = renderFullQTable(type, id, findBoss(id), byBoss(id));
      break;
    case TYPE_TALENT_DOMAIN:
    case TYPE_WEAPON_DOMAIN:
      renderedTableContent = renderFullQTable(type, id, findDomain(id, weekday), byDomain(id, weekday), weekday);
      break;
  }

  const tableWrapper = document.createElement("div");
  tableWrapper.classList.add("qtableWrapper");
  tableWrapper.innerHTML = renderedTableContent;
  return tableWrapper;
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
    [materials[m].name, d.type === TYPE_WEAPON_DOMAIN ? findWeaponsForMaterial(m) : findCharactersForMaterial(m)],
  ]);
}

function findCharactersForMaterial(m) {
  return Object.entries(characters)
    .filter(([id, c]) => c.materials.includes(m))
    .map(([id, c]) => {
      c.type = TYPE_CHARACTER;
      return [id, c];
    });
}

function findWeaponsForMaterial(m) {
  return Object.entries(weapons)
    .filter(([, w]) => w.materials.includes(m))
    .map(([id, c]) => {
      c.type = TYPE_WEAPON;
      return [id, c];
    });
}

function renderFullQTable(type, id, name, object, weekday) {
  return `<table name="${formatId(type, id, weekday)}" class="qtable highlighted"
  >${renderQTableRows(type, id, name, object, weekday)}</table>`;
}

function renderQTableRows(type, id, name, object, weekday) {
  const materials = Array.from(object.keys());
  return `<tr>
      <th rowspan="${materials.length}"><input type="checkbox" id="${formatId(type, id, weekday)}"
      data-type="${type}" data-id="${id}" ${weekday ? `data-weekday="${weekday}"` : ""}
      ${isBookmarked(type, id, weekday) ? "checked" : ""}><label
       for="${formatId(type, id, weekday)}">${formatName(name).replaceAll(" / ", "<br>")}</label>
      </td>
      <td>${formatName(materials[0])}</td>
      <td>${formatArray(object.get(materials[0]))}</td>
    </tr>
    ${materials
      .slice(1)
      .map((m) => `<tr><td>${formatName(m)}</td><td>${formatArray(object.get(m))}</td></tr>`)
      .join("")}`;
}

function formatId(...parts) {
  return parts
    .filter((p) => p)
    .join("-")
    .replaceAll(" ", "-")
    .replaceAll("’", "");
}

function formatArray(e) {
  return e
    .map(([id, obj]) =>
      obj.type === TYPE_WEAPON_DOMAIN || obj.type === TYPE_TALENT_DOMAIN
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

/* bookmarks */

function updateBookmark(event) {
  const input = event.target;
  if (input.tagName !== "INPUT") return;
  const type = input.dataset.type;
  const id = input.dataset.id;
  const weekday = parseInt(input.dataset.weekday || "0");
  if (input.checked) {
    bookmark(type, id, weekday);
  } else {
    unbookmark(type, id, weekday);
  }
}

today.addEventListener("change", updateBookmark);
output.addEventListener("change", updateBookmark);

function isBookmarked(type, id, weekday) {
  return (JSON.parse(localStorage.getItem("bookmarks")) || []).some(
    ([t, i, w]) => t === type && i === id && w === (weekday || 0)
  );
}

function bookmark(type, id, weekday) {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  const index = bookmarks.findIndex(([t, i, w]) => t === type && i === id && w === weekday);
  if (index === -1) {
    document
      .querySelectorAll(
        type === TYPE_TALENT_DOMAIN || type === TYPE_WEAPON_DOMAIN
          ? `a[data-id="${id}"][data-weekday="${weekday}"]`
          : `a[data-id="${id}"]`
      )
      .forEach((e) => e.classList.add("bookmarked"));
    bookmarks.push([type, id, weekday]);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
}

function unbookmark(type, id, weekday) {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  const index = bookmarks.findIndex(([t, i, w]) => t === type && i === id && w === weekday);
  if (index !== -1) {
    document
      .querySelectorAll(
        type === TYPE_TALENT_DOMAIN || type === TYPE_WEAPON_DOMAIN
          ? `a[data-id="${id}"][data-weekday="${weekday}"]`
          : `a[data-id="${id}"]`
      )
      .forEach((e) => e.classList.remove("bookmarked"));
    bookmarks.splice(index, 1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
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
