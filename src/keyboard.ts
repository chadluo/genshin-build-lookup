declare module "keyboard";

const output: HTMLElement = document.getElementById("output")!;

let currentHighlight = 0;

export function initKeyboard() {
  currentHighlight = Number.parseInt(sessionStorage.getItem("currentHighlight") || "0");
  window.addEventListener("keydown", (event) => {
    if (
      ["INPUT", "SELECT", "TEXTAREA"].includes((event.target as HTMLElement)?.tagName) ||
      event.ctrlKey ||
      event.altKey ||
      event.metaKey
    ) {
      return;
    }
    const searchInput = document.querySelector(".search input") as HTMLInputElement;
    const keyboard = document.querySelector(".keyboard");
    switch (event.code) {
      case "Slash":
        if (event.shiftKey) {
          // `?`
          keyboard!.classList.add("highlighted");
          keyboard!.scrollIntoView();
        } else {
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
        (document.querySelector("input#show-gems") as HTMLInputElement)?.click();
        return;
      case "KeyB":
        (document.querySelector("input#show-billets") as HTMLInputElement)?.click();
        return;
      case "KeyA":
        (document.querySelector("input#show-alternatives") as HTMLInputElement)?.click();
        return;
    }
  });
}

function navItemsMaxIndex() {
  return document.querySelector("#today tbody")!.childElementCount + output.childElementCount - 1;
}

function selectNavItem() {
  const navitem = getNavItem();
  Array.from(document.querySelector("#today tbody")!.children).forEach((e) => e.classList.remove("selected"));
  Array.from(output.children).forEach((e) => e.classList.remove("selected"));
  navitem.classList.add("selected");
  navitem.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function getNavItem() {
  const todayTableBody = document.querySelector("#today tbody")!;
  if (currentHighlight < todayTableBody.childElementCount) {
    return todayTableBody.children[currentHighlight];
  } else {
    return output.children[currentHighlight - todayTableBody.childElementCount];
  }
}

function toggleHighlightForSelectedNavItem(event: KeyboardEvent) {
  const navItem = getNavItem();
  if (currentHighlight == 0 && !navItem.classList.contains("selected")) {
    return;
  }
  event.preventDefault();
  const input = getNavItem().querySelector("input[type=checkbox]") as HTMLInputElement;
  input.click();
}
