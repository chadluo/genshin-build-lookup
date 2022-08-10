declare module "bookmarks";

import * as Types from "./types";

export function isBookmarked(type: Types.ItemType, id: string, weekday: number) {
  return JSON.parse(localStorage.getItem("bookmarks") ?? "[]").some(
    ([t, i, w]: [string, string, number]) => t === type && i === id && w === (weekday ?? 0)
  );
}

export function updateBookmark(event: Event) {
  const input = event.target as HTMLInputElement;
  if (!input || input.tagName !== "INPUT") return;
  const type = input.dataset.type as Types.ItemType;
  const id = input.dataset.id;
  if (!type || !id) return;
  const weekday = parseInt(input.dataset.weekday ?? "0");
  if (input.checked) {
    bookmark(type, id, weekday);
  } else {
    unbookmark(type, id, weekday);
  }
}

function bookmark(type: Types.ItemType, id: string, weekday: number) {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks") ?? "[]");
  const index = bookmarks.findIndex(([t, i, w]: [string, string, number]) => t === type && i === id && w === weekday);
  if (index === -1) {
    document
      .querySelectorAll(
        type === Types.TYPE_TALENT_DOMAIN || type === Types.TYPE_WEAPON_DOMAIN
          ? `a[data-id="${id}"][data-weekday="${weekday}"]`
          : `a[data-id="${id}"]`
      )
      .forEach((e) => e.classList.add("bookmarked"));
    bookmarks.push([type, id, weekday]);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
}

function unbookmark(type: Types.ItemType, id: string, weekday: number): void {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks") ?? "[]");
  const index = bookmarks.findIndex(([t, i, w]: [string, string, number]) => t === type && i === id && w === weekday);
  if (index !== -1) {
    document
      .querySelectorAll(
        type === Types.TYPE_TALENT_DOMAIN || type === Types.TYPE_WEAPON_DOMAIN
          ? `a[data-id="${id}"][data-weekday="${weekday}"]`
          : `a[data-id="${id}"]`
      )
      .forEach((e) => e.classList.remove("bookmarked"));
    bookmarks.splice(index, 1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
}
