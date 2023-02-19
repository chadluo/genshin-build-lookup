import { formatId, ItemType, TYPE_TALENT_DOMAIN, TYPE_WEAPON_DOMAIN } from "./base";

export function isBookmarked(type: ItemType, id: string, weekday: number) {
  return JSON.parse(localStorage.getItem("bookmarks") ?? "[]").some(
    ([t, i, w]: [string, string, number]) => t === type && i === id && w === (weekday ?? 0)
  );
}

export function updateBookmark(event: Event) {
  const input = event.target as HTMLInputElement;
  if (!input || input.tagName !== "INPUT") return;
  const type = input.dataset.type as ItemType;
  const id = input.dataset.id;
  if (!type || !id) return;
  const weekday = parseInt(input.dataset.weekday ?? "0");
  if (input.checked) {
    bookmark(type, id, weekday);
  } else {
    unbookmark(type, id, weekday);
  }
}

function bookmark(type: ItemType, id: string, weekday: number) {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks") ?? "[]");
  const index = bookmarks.findIndex(([t, i, w]: [string, string, number]) => t === type && i === id && w === weekday);
  if (index === -1) {
    document
      .querySelectorAll(
        type === TYPE_TALENT_DOMAIN || type === TYPE_WEAPON_DOMAIN
          ? `a[data-id="${id}"][data-weekday="${weekday}"]`
          : `a[data-id="${id}"]`
      )
      .forEach((e) => e.classList.add("bookmarked"));
    document
      .querySelectorAll(`tbody[name=${formatId(type, id, weekday)}] input`)
      .forEach((input) => ((<HTMLInputElement>input).checked = true));
    bookmarks.push([type, id, weekday]);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
}

function unbookmark(type: ItemType, id: string, weekday: number): void {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks") ?? "[]");
  const index = bookmarks.findIndex(([t, i, w]: [string, string, number]) => t === type && i === id && w === weekday);
  if (index !== -1) {
    document
      .querySelectorAll(
        type === TYPE_TALENT_DOMAIN || type === TYPE_WEAPON_DOMAIN
          ? `a[data-id="${id}"][data-weekday="${weekday}"]`
          : `a[data-id="${id}"]`
      )
      .forEach((e) => e.classList.remove("bookmarked"));
    document
      .querySelectorAll(`tbody[name=${formatId(type, id, weekday)}] input`)
      .forEach((input) => ((<HTMLInputElement>input).checked = false));
    bookmarks.splice(index, 1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
}

export function hasBookmarks(): boolean {
  return JSON.parse(localStorage.getItem("bookmarks") ?? "[]").length !== 0;
}
