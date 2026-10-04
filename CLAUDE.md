# CLAUDE.md

Genshin Impact build-material lookup site. Data lives in `src/models/*.ts`; everything else renders it.

## Data model

- `characters.ts` / `weapons.ts` define items; `materials.ts` defines every material; `enemies.ts` defines bosses, enemies, and talent/weapon domains that **drop** those materials by id.
- Character `materials` tuple order: `[CharacterAscension, Gem, TalentMaterial, TalentBook, Common, LocalSpeciality]`.
- Weapon `materials` tuple order: `[WeaponAscension, Elite, Common, ...Forging[]]` — the trailing `Forging` items (billet + 2 ores) only apply to craftable weapons.
- Every `I18nObject` requires **both** `en` and `zh-CN` — no English-only placeholders.
- A material is only useful if something in `enemies.ts` (a boss, enemy, or domain) actually drops it. Adding a material without a source is a bug (it won't show in the lookup table).

## Adding new version content

- Source of truth is `genshin-impact.fandom.com`. `WebFetch` 402s on that host — use `curl` with a browser `User-Agent` instead (add a few seconds delay between requests; it rate-limits/403s otherwise).
- Cloudflare now challenges `/wiki/...` and `?action=raw` even with a browser `User-Agent`. The MediaWiki API still works: `curl -s -A "<browser UA>" "https://genshin-impact.fandom.com/api.php?action=parse&page=<Title_With_Underscores>&prop=wikitext&format=json"` (use `prop=text` for rendered HTML; `prop=text|wikitext` for both).
  - Wikitext holds the `{{Other Languages |en=… |zhs=…}}` block. `zhs` is `zh-CN`. Use the `en` value there as the English name.
  - Ascension materials are not in a character or weapon's wikitext (they come from templates). Parse the rendered HTML instead: in `prop=text`, take the `title="…"` of each `<a href="/wiki/…" title="…"><img` after the first `Ascension Cost`. The order is Mora, then the gem, then the local speciality or boss material, then the common (characters); weapon order is the 4-tier ascension item, elite, common. Talent books, weekly-boss items, and the Crown of Insight follow.
  - A wiki title may use a straight `'` where `materials.ts` uses `’`. Match against the file with `’`. A page title with an apostrophe needs a straight `'` in the URL.
  - A boss page's infobox (`|drops =`, `{{World Boss Rewards |gem= |exclusive=}}`) shows what it drops.
- Never guess names, and never trust the wiki page title as the in-game English name — it can differ. Every wiki page has an "Other Languages" table; pull both `en` (the "English" row) and `zh-CN` (the "Chinese (Simplified)" row) from there.
- Multi-tier materials (commons/elites: 3 tiers, weapon ascension mats: 4 tiers) need each tier's own page checked for its own official CN name — the tiers are not simple variations of each other.
- Upcoming characters/weapons are often still stubs on Fandom (no `zh-CN` name published yet, no ascension materials revealed — the wiki bans posting leaked/datamined material data before release). When that's the case, don't guess or wait: add the item now with what's known and leave the rest for later. `zh-CN` can be `""` when no official name exists yet (overrides the "both `en` and `zh-CN`" rule above for this case only). The `materials` tuple on both `Character` and `Weapon` is optional — omit it entirely rather than fabricating one; come back and fill in `materials` plus the matching `enemies.ts` drop source once the version ships.
- `npm run check:blank-names` lists every `"zh-CN": ""` placeholder left in `characters.ts`/`weapons.ts` — run it before committing so a stale placeholder doesn't get forgotten once the official name is published.

## Verify before calling it done

- `npx tsc --noEmit -p .`
- `npm run build`
- `npx playwright test --project=chromium`
- `npm run check:blank-names` (informational — warns, does not fail the build)
