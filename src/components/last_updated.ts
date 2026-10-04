const DAY_MS = 86_400_000;
// Unauthenticated GitHub API allows 60 req/h per IP, so cache the date for an hour.
const CACHE_KEY = "last-updated";
const CACHE_MS = 3_600_000;

function startOfDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
}

async function loadUpdated(): Promise<string> {
  const cached = JSON.parse(localStorage.getItem(CACHE_KEY) ?? "null");
  if (cached && Date.now() - cached.fetched < CACHE_MS) return cached.date;
  const response = await fetch(
    "https://api.github.com/repos/chadluo/genshin-build-lookup/commits?per_page=1",
  );
  if (!response.ok) throw new Error(`GitHub API ${response.status}`);
  const date = (await response.json())[0].commit.committer.date;
  localStorage.setItem(CACHE_KEY, JSON.stringify({ date, fetched: Date.now() }));
  return date;
}

export class LastUpdated extends HTMLElement {
  private updated?: Date;
  // the language selector changes <html lang>; re-render to follow it
  private observer = new MutationObserver(() => this.render());

  connectedCallback() {
    this.hidden = true;
    this.observer.observe(document.documentElement, { attributeFilter: ["lang"] });
    loadUpdated()
      .then((date) => {
        this.updated = new Date(date);
        this.render();
      })
      .catch((error) => console.warn("last updated unavailable:", error));
  }

  disconnectedCallback() {
    this.observer.disconnect();
  }

  private render() {
    if (!this.updated) return;
    // empty lang (before setLanguage runs) would make Intl throw
    const lang = document.documentElement.lang || undefined;
    const days = Math.round((startOfDay(this.updated) - startOfDay(new Date())) / DAY_MS);
    const text =
      days > -7
        ? new Intl.RelativeTimeFormat(lang, { numeric: "auto" }).format(days, "day")
        : new Intl.DateTimeFormat(lang, { dateStyle: "medium" }).format(this.updated);
    this.textContent = `· ${text}`;
    this.hidden = false;
  }
}
