var _a, _b, _c;
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
let currentHighlight = 0;
window.addEventListener("DOMContentLoaded", () => {
    var _a, _b;
    lang_select.innerHTML = Object.entries(Assets.i18n.supportedLanguageSelectors)
        .map(([lang, name]) => `<option value="${lang}">${name}</option>`)
        .join("");
    const lang_candidate = ((_a = localStorage.getItem("lang")) !== null && _a !== void 0 ? _a : navigator.language);
    const lang = Assets.i18n.supportedLanguageSelectors.hasOwnProperty(lang_candidate) ? lang_candidate : "en";
    setLanguage(lang);
    const serverTimezone = localStorage.getItem("timezone") || guessTimezone();
    const bookmarks = JSON.parse((_b = localStorage.getItem("bookmarks")) !== null && _b !== void 0 ? _b : "[]");
    selectors.innerHTML += renderCharactersTable(bookmarks.length !== 0);
    selectors.innerHTML += renderWeaponsTable(bookmarks.length !== 0);
    selectors.innerHTML += renderEnemiesTable(bookmarks.length !== 0);
    selectors.innerHTML += renderWeekdayDomainTables(serverTimezone, false);
    bookmarks.forEach(([type, id, weekday]) => output.append(createQTable(type, id, weekday)));
    document.querySelectorAll(".qtable").forEach((element) => element.classList.remove("highlighted"));
    currentHighlight = Number.parseInt(sessionStorage.getItem("currentHighlight") || "0");
});
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
    document.title = Assets.i18n.siteTitle[lang].join("");
    setSearchItems(lang);
    lang_select.value = lang;
    localStorage.setItem("lang", lang);
}
function setSearchItems(lang) {
    document.getElementById("searchItems").innerHTML = []
        .concat(Assets.characters)
        .concat(Assets.weapons)
        .sort((w1, w2) => w1.id.localeCompare(w2.id))
        .map((w) => `<option value="${w.id}">${w.name[lang].join("")}</option>`)
        .join("");
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
    return `${getTableCaptionIcon(type)} ${formatName(Assets.i18n[type])}`;
}
/**
 * Get current weekday of domain materials at given timezone, assuming no local DST.
 *
 * - Asia/HK, MO, TW/CN: UTC+8
 * - Europe: UTC+1
 * - America: UTC-5
 *
 * @see https://genshin.hoyoverse.com/en/news/detail/6638
 * @returns weekday at specific server timezone, range [0..3]
 */
function getWeekday(zone) {
    const now = new Date();
    const utcH = now.getUTCHours();
    const utcDay = now.getUTCDay();
    const zoneH = utcH + Assets.timezones[zone];
    // refresh at 4am
    const zoneDay = ((zoneH > 28 ? utcDay + 1 : zoneH < 4 ? utcDay - 1 : utcDay) + 7) % 7;
    return zoneDay > 3 ? zoneDay - 3 : zoneDay;
}
function guessTimezone() {
    const offset = -new Date().getTimezoneOffset() / 60;
    return offset < -2 ? "America" : offset < 4.5 ? "Europe" : "Asia";
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
    const talentDomains = Assets.domains.filter((d) => d.type === "talent_domain");
    const weaponDomains = Assets.domains.filter((d) => d.type === "weapon_domain");
    return `<details id="enemies" ${hasBookmarks ? "" : "open"}>
  <summary>${formatTableCaption("enemies_domains")}</summary>
  <table class="ctable"><tr><th>${formatName(Assets.i18n.weekly_boss)}</th><td>${Assets.bosses
        .filter((b) => b.type === "weekly_boss")
        .map((boss) => renderLink(boss.id, TYPE_WEEKLY_BOSS, boss.name))
        .join(formatName(Assets.i18n.delimiter))}</td></tr>
    <tr><th>${formatName(Assets.i18n.boss)}</th><td>${Assets.bosses
        .filter((b) => b.type === "boss")
        .map((boss) => renderLink(boss.id, TYPE_BOSS, boss.name))
        .join(formatName(Assets.i18n.delimiter))}</td></tr>
    <tr><th rowspan="${talentDomains.length}">${formatName(Assets.i18n.talent_domain)}</th>
      ${formatDomain(talentDomains[0].id, TYPE_TALENT_DOMAIN)}</tr>
    ${talentDomains
        .slice(1)
        .map((d) => `<tr>${formatDomain(d.id, TYPE_TALENT_DOMAIN)}</tr>`)
        .join("")}
    <tr><th rowspan="${weaponDomains.length}">${formatName(Assets.i18n.weapon_domain)}</th>
    ${formatDomain(weaponDomains[0].id, TYPE_WEAPON_DOMAIN)}</tr>
    ${weaponDomains
        .slice(1)
        .map((d) => `<tr>${formatDomain(d.id, TYPE_WEAPON_DOMAIN)}</tr>`)
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
function renderWeekdayDomainTables(timezone, manual) {
    const day = getWeekday(timezone);
    const weekdays = day === 0 ? [1, 2, 3] : [day];
    return `<details id="today" ${day === 0 && !manual ? "" : "open"}>
    <summary>${formatTableCaption("today")}</summary>
     ${renderServerTimezoneSelector(timezone)}
    <table class="qtable">${renderDomains(weekdays)}</table></details>`;
}
function renderServerTimezoneSelector(timezone) {
    return `<div class="timezone-selector">${["Asia", "Europe", "America"]
        .map((zone) => `<label>
        <input type="radio" name="timezone" value="${zone}" ${zone === timezone ? "checked" : ""}>
        ${formatName(Assets.i18n[zone])}
      </label>`)
        .join("")}</div>`;
}
function renderDomains(weekdays) {
    return Assets.domains
        .flatMap((domain) => weekdays.map((weekday) => renderQTableRows(domain.type, domain.id, findDomain(domain.id, weekday), byDomain(domain.id, weekday), weekday)))
        .join("");
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
    findOrLoadQTable2(type, id, weekday);
}
function findOrLoadQTable2(type, id, weekday) {
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
function selectFromSearch(event) {
    // chromium/firefox populate from options
    if (!(event instanceof InputEvent) || event.inputType === "insertReplacementText") {
        const id = event.target.value;
        findOrLoadQTable2(Assets.characters.some((c) => c.id === id) ? TYPE_CHARACTER : TYPE_WEAPON, id, "");
    }
}
document.querySelectorAll("input[list='searchItems']").forEach((i) => i.addEventListener("input", selectFromSearch));
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
        .materials.reduce((map, m) => (map.set(Assets.materials.filter((material) => material.id === m)[0], findEnemiesForMaterial(m)), map), new Map());
}
function findWeapon(weapon) {
    return Assets.weapons.find((w) => w.id === weapon).name;
}
function byWeapon(weapon) {
    return Assets.weapons
        .find((w) => w.id === weapon)
        .materials.reduce((map, m) => (map.set(Assets.materials.filter((material) => material.id === m)[0], findEnemiesForMaterial(m)), map), new Map());
}
function findEnemiesForMaterial(m) {
    const dsm = Assets.domains.map((d) => [d, d.materials_by_weekday.indexOf(m)]);
    const ds = dsm.filter(([, weekday]) => weekday !== -1);
    if (ds.length)
        return ds;
    return Assets.bosses.filter((b) => b.materials.includes(m));
}
function findBoss(boss) {
    return Assets.bosses.find((b) => b.id === boss).name;
}
function byBoss(boss) {
    return Assets.bosses
        .find((b) => b.id === boss)
        .materials.reduce((map, material) => {
        var _a;
        return (map.set(Assets.materials.find((m) => m.id === material), ((_a = map.get(Assets.materials.find((m) => m.id === material))) !== null && _a !== void 0 ? _a : [])
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
            Assets.materials.find((m) => m.id === material),
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
        ${weekday ? `data-weekday="${weekday}"` : ""} ${isBookmarked(type, id, weekday) ? "checked" : ""}><div>
        ${(type === "talent_domain" || type === "weapon_domain"
        ? formatDomainName(name, weekday)
        : formatName(name)).replaceAll(" / ", separator)}</div></label>
      </th>
      <td>${formatName(materials[0].name)}</td>
      <td>${formatArray(object.get(materials[0]))}</td>
    </tr>
    ${materials
        .slice(1)
        .map((m) => `<tr ${formatMaterialType(m)}><td>${formatName(m.name)}</td><td>${formatArray(object.get(m))}</td></tr>`)
        .join("")}`;
}
function formatDomainName(name, weekday) {
    return formatName(name) + " / " + formatName(Assets.i18nWeekdays[weekday]);
}
function formatMaterialType(m) {
    return Assets.gems.includes(m.id) ? "class='gem'" : Assets.billets.includes(m.id) ? "class='billet'" : "";
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
    lastQuery.id = "";
    lastQuery.weekday = "";
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
function selectTimezone(timezone) {
    document.getElementById("today").outerHTML = renderWeekdayDomainTables(timezone, true);
    localStorage.setItem("timezone", timezone);
}
selectors.addEventListener("change", (event) => {
    const target = event.target;
    if (target.name === "timezone") {
        selectTimezone(target.value);
    }
});
(_b = document.querySelector("input#show-gems")) === null || _b === void 0 ? void 0 : _b.addEventListener("change", (event) => {
    var _a;
    output.classList.toggle("show-gems", (_a = event.target) === null || _a === void 0 ? void 0 : _a.checked);
    document.body.classList.remove("smooth");
    window.scrollTo(0, document.body.scrollHeight);
    document.body.classList.add("smooth");
});
(_c = document.querySelector("input#show-billets")) === null || _c === void 0 ? void 0 : _c.addEventListener("change", (event) => {
    var _a;
    output.classList.toggle("show-billets", (_a = event.target) === null || _a === void 0 ? void 0 : _a.checked);
    document.body.classList.remove("smooth");
    window.scrollTo(0, document.body.scrollHeight);
    document.body.classList.add("smooth");
});
/* keyboard */
window.addEventListener("keydown", (event) => {
    var _a, _b;
    const searchInput = document.querySelector(".search input");
    const keyboard = document.querySelector(".keyboard");
    switch (event.code) {
        case "Slash":
            if (event.shiftKey) {
                // `?`
                keyboard.classList.add("highlighted");
                keyboard.scrollIntoView();
            }
            else {
                event.preventDefault();
                searchInput.focus();
            }
            return;
        case "Escape":
            searchInput.blur();
            return;
        case "KeyJ":
            currentHighlight = Math.min(currentHighlight + 1, navItemsMaxIndex());
            selectNavItem();
            return;
        case "KeyK":
            currentHighlight = Math.max(currentHighlight - 1, 0);
            selectNavItem();
            return;
        case "Space":
            toggleHighlightForSelectedNavItem(event);
            return;
        case "KeyG":
            (_a = document.querySelector("input#show-gems")) === null || _a === void 0 ? void 0 : _a.click();
            console.log(document.getElementById("show-gems"));
            return;
        case "KeyB":
            (_b = document.querySelector("input#show-billets")) === null || _b === void 0 ? void 0 : _b.click();
            console.log(document.getElementById("show-billets"));
            return;
    }
});
function navItemsMaxIndex() {
    return document.querySelector("#today tbody").childElementCount + output.childElementCount - 1;
}
function selectNavItem() {
    const navitem = getNavItem();
    Array.from(document.querySelector("#today tbody").children).forEach((e) => e.classList.remove("selected"));
    Array.from(output.children).forEach((e) => e.classList.remove("selected"));
    navitem.classList.add("selected");
    navitem.scrollIntoView({ behavior: "smooth", block: "nearest" });
}
function getNavItem() {
    const todayTableBody = document.querySelector("#today tbody");
    if (currentHighlight < todayTableBody.childElementCount) {
        return todayTableBody.children[currentHighlight];
    }
    else {
        return output.children[currentHighlight - todayTableBody.childElementCount];
    }
}
function toggleHighlightForSelectedNavItem(event) {
    const navItem = getNavItem();
    if (currentHighlight == 0 && !navItem.classList.contains("selected")) {
        return;
    }
    event.preventDefault();
    const input = getNavItem().querySelector("input[type=checkbox]");
    input.click();
}
