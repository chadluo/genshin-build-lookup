var _a;
import { Assets } from "./assets.js";
const TYPE_CHARACTER = "character";
const TYPE_WEAPON = "weapon";
const TYPE_WEEKLY_BOSS = "weekly_boss";
const TYPE_BOSS = "boss";
const TYPE_TALENT_DOMAIN = "talent_domain";
const TYPE_WEAPON_DOMAIN = "weapon_domain";
const selectors = document.querySelector("div.selectors");
const output = document.getElementById("output");
const lang_select = document.getElementById("lang-select");
const lastQuery = { id: "", weekday: "" };
window.addEventListener("DOMContentLoaded", () => {
    var _a, _b;
    lang_select.innerHTML = Object.entries(Assets.i18n.supportedLanguageSelectors)
        .map(([lang, name]) => `<option value="${lang}">${name}</option>`)
        .join("");
    const lang_candidate = (_a = localStorage.getItem("lang")) !== null && _a !== void 0 ? _a : navigator.language;
    const lang = Assets.i18n.supportedLanguageSelectors.hasOwnProperty(lang_candidate) ? lang_candidate : "en";
    setLanguage(lang);
    const bookmarks = JSON.parse((_b = localStorage.getItem("bookmarks")) !== null && _b !== void 0 ? _b : "[]");
    selectors.innerHTML += renderCharactersTable(bookmarks.length !== 0);
    selectors.innerHTML += renderWeaponsTable(bookmarks.length !== 0);
    selectors.innerHTML += renderEnemiesTable(bookmarks.length !== 0);
    selectors.innerHTML += renderWeekdayDomainTables();
    bookmarks.forEach(([type, id, weekday]) => output.append(createQTable(type, id, weekday)));
    document.querySelectorAll(".qtable").forEach((element) => element.classList.remove("highlighted"));
});
function renderWeekdayDomainTables() {
    const day = getCurrentWeekday();
    const weekdays = day === 0 ? [1, 2, 3] : [day];
    return `<details id="today" ${day === 0 ? "" : "open"}>
    <summary>${formatTableCaption("today")}</summary>
    <table class="qtable">${renderDomains(weekdays)}</table></details>`;
}
function renderDomains(weekdays) {
    return Assets.domains
        .flatMap((domain) => weekdays.map((weekday) => renderQTableRows(domain.type, domain.id, findDomain(domain.id, weekday), byDomain(domain.id, weekday), weekday)))
        .join("");
}
/* nav */
document.querySelector("nav .links").addEventListener("click", (event) => {
    var _a;
    const link = event.target;
    if (!link || link.tagName !== "A")
        return;
    const target = document.getElementById((_a = link.dataset.target) !== null && _a !== void 0 ? _a : "");
    if (target && target.tagName === "DETAILS") {
        target.open = true;
    }
    target.scrollIntoView();
});
/* language selector */
lang_select.addEventListener("change", (event) => setLanguage(event.target.value));
function setLanguage(lang) {
    document.documentElement.setAttribute("lang", lang);
    document.title = document.querySelector(`h1 > span[lang=${lang}]`).innerHTML;
    lang_select.value = lang;
    localStorage.setItem("lang", lang);
}
/* content tables */
function renderCharactersTable(hasBookmarks) {
    const byRarity = groupWishObjects((o) => o.rarity, Assets.characters);
    const rarities = Array.from(byRarity.keys()).sort().reverse();
    const tableContent = rarities
        .map((rarity) => {
        const cs = byRarity.get(rarity);
        return `<tr><th>${"⭐".repeat(rarity)}</th>
      <td>${cs.map((c) => renderLink(c.id, TYPE_CHARACTER, c.name)).join(formatName(Assets.i18n.delimiter))}</td></tr>`;
    })
        .join("");
    return `<details id="${TYPE_CHARACTER}" ${hasBookmarks ? "" : "open"}>
    <summary>${formatTableCaption(TYPE_CHARACTER)}</summary>
    <table class="ctable">${tableContent}</table>
    </details>`;
}
function groupWishObjects(f, ws) {
    return ws.reduce((m, w) => {
        var _a;
        const key = f(w);
        const arr = (_a = m.get(key)) !== null && _a !== void 0 ? _a : [];
        arr.push(w);
        m.set(key, arr);
        return m;
    }, new Map());
}
function renderWeaponsTable(hasBookmarks) {
    const byRarity = groupWishObjects((w) => w.rarity, Assets.weapons);
    const rarities = Array.from(byRarity.keys()).sort().reverse();
    const tableContent = rarities
        .map((rarity) => {
        const ws2 = groupWishObjects((w) => w.category, byRarity.get(rarity));
        const categories = Array.from(ws2.keys());
        return `<tr><th rowspan="${categories.length}">${"⭐".repeat(rarity)}</th>
      <td>${formatWeaponIcon(categories[0])}${ws2
            .get(categories[0])
            .map((w) => renderLink(w.id, TYPE_WEAPON, w.name))
            .join(formatName(Assets.i18n.delimiter))}</td></tr>
      ${categories
            .slice(1)
            .map((category) => `<tr><td>${formatWeaponIcon(category)}${ws2
            .get(category)
            .map((c) => renderLink(c.id, TYPE_WEAPON, c.name))
            .join(formatName(Assets.i18n.delimiter))}</td></tr>`)
            .join("")}`;
    })
        .join("");
    return `<details id="${TYPE_WEAPON}" ${hasBookmarks ? "" : "open"}>
    <summary>${formatTableCaption(TYPE_WEAPON)}</summary>
    <table class="ctable">${tableContent}</table>
    </details>`;
}
function formatTableCaption(type) {
    return `${getTableCaptionIcon(type)} ${formatName(Assets.i18n[type])}${type === "today" ? formatName(Assets.i18n.delimiter) + formatName(Assets.i18nWeekdays[getCurrentWeekday()]) : ""}`;
}
function getCurrentWeekday() {
    const day = new Date().getDay();
    return day > 3 ? day - 3 : day;
}
function getTableCaptionIcon(type) {
    // prettier-ignore
    switch (type) {
        case "character": return "🦸";
        case "weapon": return "🗡️";
        case "enemies_domains": return "🌱";
        case "today": return "📅";
        default: return "";
    }
}
function formatWeaponIcon(category) {
    return `<span class="weapon-icon">${getWeaponIcon(category)}</span>`;
}
function getWeaponIcon(category) {
    // prettier-ignore
    switch (category) {
        case Assets.WeaponCategory.BOW: return "🏹";
        case Assets.WeaponCategory.CATALYST: return "📖";
        case Assets.WeaponCategory.CLAYMORE: return "🐟";
        case Assets.WeaponCategory.POLEARM: return "🌿";
        case Assets.WeaponCategory.SWORD: return "🗡️";
        default: return "";
    }
}
function renderEnemiesTable(hasBookmarks) {
    return `<details id="enemies" ${hasBookmarks ? "" : "open"}>
  <summary>${formatTableCaption("enemies_domains")}</summary>
  <table class="ctable"><tr><th>${formatName(Assets.i18n.weekly_boss)}</th><td>${Assets.enemy_ids
        .get("weekly_bosses")
        .map((boss) => renderLink(boss, TYPE_WEEKLY_BOSS, Assets.bosses.find((b) => b.id === boss).name))
        .join(formatName(Assets.i18n.delimiter))}</td></tr>
    <tr><th>${formatName(Assets.i18n.boss)}</th><td>${Assets.enemy_ids
        .get("bosses")
        .map((boss) => renderLink(boss, TYPE_BOSS, Assets.bosses.find((b) => b.id === boss).name))
        .join(formatName(Assets.i18n.delimiter))}</td></tr>
    <tr><th rowspan="${Assets.enemy_ids.get("talent_domains").length}">${formatName(Assets.i18n.talent_domain)}</th>
      ${formatDomain(Assets.enemy_ids.get("talent_domains")[0], TYPE_TALENT_DOMAIN)}</tr>
    ${Assets.enemy_ids
        .get("talent_domains")
        .slice(1)
        .map((id) => `<tr>${formatDomain(id, TYPE_TALENT_DOMAIN)}</tr>`)
        .join("")}
    <tr><th rowspan="${Assets.enemy_ids.get("weapon_domains").length}">${formatName(Assets.i18n.weapon_domain)}</th>
    ${formatDomain(Assets.enemy_ids.get("weapon_domains")[0], TYPE_WEAPON_DOMAIN)}</tr>
    ${Assets.enemy_ids
        .get("weapon_domains")
        .slice(1)
        .map((id) => `<tr>${formatDomain(id, TYPE_WEAPON_DOMAIN)}</tr>`)
        .join("")}`;
}
function renderLink(id, type, names) {
    return `<a data-id='${id}' data-type='${type}' ${isBookmarked(type, id, 0) ? "class='bookmarked'" : ""}
  >${formatName(names)}</a>`;
}
function renderDomainLink(id, weekday, type, names) {
    return `<a data-id='${id}' data-weekday='${weekday}' data-type='${type}' ${isBookmarked(type, id, weekday) ? "class='bookmarked'" : ""}>${formatName(names)} ${formatName(Assets.i18nWeekdays[weekday])}</a>`;
}
function formatDomain(id, type) {
    return `<td>${formatName(Assets.domains.filter((d) => d.id === id)[0].name)} / ${[1, 2, 3]
        .map((i) => {
        return `<a data-id='${id}' data-weekday='${i}' data-type='${type}' ${isBookmarked(type, id, i) ? "class='bookmarked'" : ""}>${formatName(Assets.i18nWeekdays[i])}</a>`;
    })
        .join(formatName(Assets.i18n.delimiter))}</td>`;
}
/* search result tables */
function findOrLoadQTable(event) {
    var _a, _b;
    const a = event.composedPath().find((e) => e.tagName === "A");
    if (!a)
        return;
    const id = (_a = a.dataset.id) !== null && _a !== void 0 ? _a : "";
    const weekday = (_b = a.dataset.weekday) !== null && _b !== void 0 ? _b : "";
    if (id === lastQuery.id && weekday === lastQuery.weekday)
        return;
    const type = a.dataset.type;
    if (!type)
        return;
    document.querySelectorAll(".qtable").forEach((element) => element.classList.remove("highlighted"));
    const existed = document.querySelector(`table[name="${formatId(type, id, weekday)}"]`);
    if (!existed) {
        const qtable = createQTable(type, id, parseInt(weekday));
        output.appendChild(qtable);
        qtable.scrollIntoView();
    }
    else {
        existed.classList.add("highlighted");
        existed.scrollIntoView();
    }
    lastQuery.id = id;
    lastQuery.weekday = weekday;
}
selectors.addEventListener("click", findOrLoadQTable);
output.addEventListener("click", findOrLoadQTable);
function createQTable(type, id, weekday) {
    const tableWrapper = document.createElement("div");
    tableWrapper.classList.add("qtableWrapper");
    tableWrapper.innerHTML = renderQTableContent(type, id, weekday);
    return tableWrapper;
}
function renderQTableContent(type, id, weekday) {
    switch (type) {
        case TYPE_CHARACTER:
            return renderFullQTable(type, id, findCharacter(id), byCharacter(id), weekday);
        case TYPE_WEAPON:
            return renderFullQTable(type, id, findWeapon(id), byWeapon(id), weekday);
        case TYPE_WEEKLY_BOSS:
        case TYPE_BOSS:
            return renderFullQTable(type, id, findBoss(id), byBoss(id), weekday);
        case TYPE_TALENT_DOMAIN:
        case TYPE_WEAPON_DOMAIN:
            return renderFullQTable(type, id, findDomain(id, weekday), byDomain(id, weekday), weekday);
        default:
            return "";
    }
}
function findCharacter(character) {
    return Assets.characters.find((c) => c.id === character).name;
}
function byCharacter(character) {
    return Assets.characters
        .find((c) => c.id === character)
        .materials.reduce((map, m) => (map.set(Assets.materials.filter((material) => material.id === m)[0].name, findEnemiesForMaterial(m)), map), new Map());
}
function findWeapon(weapon) {
    return Assets.weapons.find((w) => w.id === weapon).name;
}
function byWeapon(weapon) {
    return Assets.weapons
        .find((w) => w.id === weapon)
        .materials.reduce((map, m) => (map.set(Assets.materials.filter((material) => material.id === m)[0].name, findEnemiesForMaterial(m)), map), new Map());
}
function findEnemiesForMaterial(m) {
    const dsm = Assets.domains.map((d) => [d, d.materials_by_weekday.indexOf(m)]);
    const ds = dsm.filter(([, weekday]) => weekday !== -1);
    if (ds.length)
        return ds;
    return Assets.bosses.filter((b) => b.materials.includes(m));
}
function formatWeekday(name, lang, weekday) {
    return `${name} / ${findWeekday(lang, weekday)}`;
}
function findWeekday(lang, day) {
    return Assets.i18nWeekdays[day][lang];
}
function findBoss(boss) {
    return Assets.bosses.find((b) => b.id === boss).name;
}
function byBoss(boss) {
    return Assets.bosses
        .find((b) => b.id === boss)
        .materials.reduce((map, material) => {
        var _a;
        return (map.set(Assets.materials.find((m) => m.id === material).name, ((_a = map.get(Assets.materials.find((m) => m.id === material).name)) !== null && _a !== void 0 ? _a : [])
            .concat(findCharactersForMaterial(material))
            .concat(findWeaponsForMaterial(material))),
            map);
    }, new Map());
}
function findDomain(domainId, _weekday) {
    return Assets.domains.find((d) => d.id === domainId).name;
}
function byDomain(domainId, weekday) {
    const domain = Assets.domains.filter((d) => d.id === domainId)[0];
    const material = domain.materials_by_weekday[weekday];
    return new Map([
        [
            Assets.materials.find((m) => m.id === material).name,
            domain.type === "weapon_domain" ? findWeaponsForMaterial(material) : findCharactersForMaterial(material),
        ],
    ]);
}
function findCharactersForMaterial(m) {
    return Assets.characters.filter((c) => c.materials.includes(m));
}
function findWeaponsForMaterial(m) {
    return Assets.weapons.filter((w) => w.materials.includes(m));
}
function renderFullQTable(type, id, name, object, weekday) {
    return `<table name="${formatId(type, id, weekday)}" class="qtable highlighted"
  >${renderQTableRows(type, id, name, object, weekday)}</table>`;
}
/**
 * Sample structure:
 *
 * | Character/Weapon | Material | Bosses             |
 * | Boss             | Material | Characters/Weapons |
 */
function renderQTableRows(type, id, name, object, weekday) {
    const materials = Array.from(object.keys());
    const separator = "<span class='mobile'> / </span><span class='desktop'><br></span>";
    return `<tr>
      <th rowspan="${materials.length}">
        <label><input type="checkbox" data-type="${type}" data-id="${id}"
        ${weekday ? `data-weekday="${weekday}"` : ""} ${isBookmarked(type, id, weekday) ? "checked" : ""}>
        ${formatName(name).replaceAll(" / ", separator)}</label>
      </th>
      <td>${formatName(materials[0])}</td>
      <td>${formatArray(object.get(materials[0]))}</td>
    </tr>
    ${materials
        .slice(1)
        .map((m) => `<tr><td>${formatName(m)}</td><td>${formatArray(object.get(m))}</td></tr>`)
        .join("")}`;
}
/**
 * Type, Id, Weekday
 */
function formatId(...parts) {
    return parts
        .filter((p) => p)
        .map((p) => p.toString())
        .join("-")
        .replaceAll(" ", "-")
        .replaceAll(/[’“”]/g, "");
}
function formatArray(es) {
    return es
        .map((e) => {
        const [obj, weekday] = Array.isArray(e) ? [e[0], e[1]] : [e, 0];
        switch (obj.type) {
            case TYPE_TALENT_DOMAIN:
            case TYPE_WEAPON_DOMAIN:
                return renderDomainLink(obj.id, weekday, obj.type, obj.name);
            default:
                return renderLink(obj.id, obj.type, obj.name);
        }
    })
        .join(formatName(Assets.i18n.delimiter));
}
function formatName(name) {
    return Object.entries(name)
        .map(([lang, value]) => {
        return `<span class="i18n" lang="${lang}">${Array.isArray(value) ? value.join("<br>") : value}</span>`;
    })
        .join("");
}
(_a = document.getElementById("clear")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    const output = document.getElementById("output");
    if (output)
        output.innerHTML = "";
});
function updateBookmark(event) {
    var _a;
    const input = event.target;
    if (!input || input.tagName !== "INPUT")
        return;
    const type = input.dataset.type;
    const id = input.dataset.id;
    if (!type || !id)
        return;
    const weekday = parseInt((_a = input.dataset.weekday) !== null && _a !== void 0 ? _a : "0");
    if (input.checked) {
        bookmark(type, id, weekday);
    }
    else {
        unbookmark(type, id, weekday);
    }
}
selectors.addEventListener("change", updateBookmark);
output.addEventListener("change", updateBookmark);
function isBookmarked(type, id, weekday) {
    var _a;
    return JSON.parse((_a = localStorage.getItem("bookmarks")) !== null && _a !== void 0 ? _a : "[]").some(([t, i, w]) => t === type && i === id && w === (weekday !== null && weekday !== void 0 ? weekday : 0));
}
function bookmark(type, id, weekday) {
    var _a;
    const bookmarks = JSON.parse((_a = localStorage.getItem("bookmarks")) !== null && _a !== void 0 ? _a : "[]");
    const index = bookmarks.findIndex(([t, i, w]) => t === type && i === id && w === weekday);
    if (index === -1) {
        document
            .querySelectorAll(type === TYPE_TALENT_DOMAIN || type === TYPE_WEAPON_DOMAIN
            ? `a[data-id="${id}"][data-weekday="${weekday}"]`
            : `a[data-id="${id}"]`)
            .forEach((e) => e.classList.add("bookmarked"));
        bookmarks.push([type, id, weekday]);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
}
function unbookmark(type, id, weekday) {
    var _a;
    const bookmarks = JSON.parse((_a = localStorage.getItem("bookmarks")) !== null && _a !== void 0 ? _a : "[]");
    const index = bookmarks.findIndex(([t, i, w]) => t === type && i === id && w === weekday);
    if (index !== -1) {
        document
            .querySelectorAll(type === TYPE_TALENT_DOMAIN || type === TYPE_WEAPON_DOMAIN
            ? `a[data-id="${id}"][data-weekday="${weekday}"]`
            : `a[data-id="${id}"]`)
            .forEach((e) => e.classList.remove("bookmarked"));
        bookmarks.splice(index, 1);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
}
