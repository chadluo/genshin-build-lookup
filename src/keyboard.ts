const output: HTMLElement = document.getElementById("output")!;

export function initKeyboard() {
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
    switch (event.code) {
      case "Slash":
        event.preventDefault();
        searchInput.focus();
        return;
      case "Escape":
        searchInput.blur();
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

document.querySelector("input#show-gems")?.addEventListener("change", (event) => {
  const gemDetails = document.querySelectorAll(".gem details");
  if ((event.target as HTMLInputElement)?.checked) {
    gemDetails.forEach((e) => e.setAttribute("open", ""));
  } else {
    gemDetails.forEach((e) => e.removeAttribute("open"));
  }
  document.body.classList.remove("smooth");
  window.scrollTo(0, document.body.scrollHeight);
  document.body.classList.add("smooth");
});

document.querySelector("input#show-billets")?.addEventListener("change", (event) => {
  output.classList.toggle("show-billets", (event.target as HTMLInputElement)?.checked);
  document.body.classList.remove("smooth");
  window.scrollTo(0, document.body.scrollHeight);
  document.body.classList.add("smooth");
});

document.querySelector("input#show-alternatives")?.addEventListener("change", (event) => {
  const alternativeDetails = document.querySelectorAll("details.alternative");
  if ((event.target as HTMLInputElement)?.checked) {
    alternativeDetails.forEach((e) => e.setAttribute("open", ""));
  } else {
    alternativeDetails.forEach((e) => e.removeAttribute("open"));
  }
  document.body.classList.remove("smooth");
  window.scrollTo(0, document.body.scrollHeight);
  document.body.classList.add("smooth");
});
