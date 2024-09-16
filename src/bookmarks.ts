import { type ItemType, TYPE_TALENT_DOMAIN, TYPE_WEAPON_DOMAIN } from "./base";

type Bookmark = [ItemType, string, number];

export const BOOKMARK_KEY = "bookmarks";

const bookmarks: Bookmark[] = JSON.parse(
  localStorage.getItem(BOOKMARK_KEY) ?? "[]"
) as Bookmark[];

export function isBookmarked(type: ItemType, id: string, weekday: number) {
  return bookmarks.some((bookmark) => eq(bookmark, [type, id, weekday ?? 0]));
}

function eq(item1: Bookmark, item2: Bookmark) {
  return (
    item1[0] === item2[0] && item1[1] === item2[1] && item1[2] === item2[2]
  );
}

export function updateBookmark(event: Event) {
  const input = event.target as HTMLInputElement;
  if (!input || input.tagName !== "INPUT") return;
  const type = input.dataset.type as ItemType;
  const id = input.dataset.id;
  if (!type || !id) return;
  const weekday = Number.parseInt(input.dataset.weekday ?? "0");
  if (input.checked) {
    bookmark(type, id, weekday);
  } else {
    unbookmark(type, id, weekday);
  }
}

export function bookmark(type: ItemType, id: string, weekday: number) {
  const index = bookmarks.findIndex((bookmark) =>
    eq(bookmark, [type, id, weekday])
  );
  if (index === -1) {
    for (const e of Array.from(
      document.querySelectorAll(
        type === TYPE_TALENT_DOMAIN || type === TYPE_WEAPON_DOMAIN
          ? `a[data-id="${id}"][data-weekday="${weekday}"]`
          : `a[data-id="${id}"]`
      )
    )) {
      e.classList.add("bookmarked");
    }
    bookmarks.push([type, id, weekday]);
    localStorage.setItem(BOOKMARK_KEY, JSON.stringify(bookmarks));
  }
  return bookmarks;
}

export function unbookmark(type: ItemType, id: string, weekday: number) {
  const index = bookmarks.findIndex((bookmark) =>
    eq(bookmark, [type, id, weekday])
  );
  if (index !== -1) {
    for (const e of Array.from(
      document.querySelectorAll(
        type === TYPE_TALENT_DOMAIN || type === TYPE_WEAPON_DOMAIN
          ? `a[data-id="${id}"][data-weekday="${weekday}"]`
          : `a[data-id="${id}"]`
      )
    )) {
      e.classList.remove("bookmarked");
    }
    bookmarks.splice(index, 1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
  return bookmarks;
}

export function hasBookmarks(): boolean {
  return bookmarks.length !== 0;
}
