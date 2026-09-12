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
- Never guess names, and never trust the wiki page title as the in-game English name — it can differ. Every wiki page has an "Other Languages" table; pull both `en` (the "English" row) and `zh-CN` (the "Chinese (Simplified)" row) from there.
- Multi-tier materials (commons/elites: 3 tiers, weapon ascension mats: 4 tiers) need each tier's own page checked for its own official CN name — the tiers are not simple variations of each other.

## Verify before calling it done

- `npx tsc --noEmit -p .`
- `npm run build`
- `npx playwright test --project=chromium`
