# Genshin Impact build materials lookup

## Targets

**Main:**

- For a character/weapon, what talent/ascention materials do I need, and what resin bosses provides them
- For a resin boss, what materials does it drop and what characters/weapons can use them
- What talent/weapon materials can I get today and what characters/weapons can use them

**Not main:**

- Bookmark characters/weaons/bosses for quick ref
- Multi language support

## Example

| Character | Material       | Enemy                          |
| --------- | -------------- | ------------------------------ |
| Xiangling | Everflame Seed | Pyro Regisvine                 |
|           | Diligence      | Taishan Mansion: Tue, Fri, Sun |
|           | Dvalin’s Claw  | Dvalin                         |

| Weapon      | Material          | Enemy                                |
| ----------- | ----------------- | ------------------------------------ |
| “The Catch” | Mask of the Kijin | Court of Flowing Sand: Wed, Sat, Sun |
|             | Chaos Oculus      | Ruin Sentinels                       |

## Notes

### Ambiguous materials

Material categories of different level and no name ambiguity are collapsed like talent books and ascension gemstones. If
a category contains ambiguous names, everything is listed. Examples:

- Chaos Gear/Axis/Oculus v.s. Chaos Device/Circuit/Core
- Inazuma weapon ascension material masks (Mask of the Wicked Lieutenant etc.) and Hilichurls masks (Damaged Mask etc.)

May change in future if it can be made clear enough.

### Quotes

To avoid clash with JS/JSON string quotes and complicated escapes and conversions, single quotes (`'`) and double quotes
(`"`) must be converted to 'smart quotes' in item ids and names:

| Unicode | Name                        | Character | Notes              |
| ------- | --------------------------- | --------- | ------------------ |
| U+2018  | LEFT SINGLE QUOTATION MARK  | `‘`       |                    |
| U+2019  | RIGHT SINGLE QUOTATION MARK | `’`       | Also as Apostrophe |
| U+201C  | LEFT DOUBLE QUOTATION MARK  | `“`       |                    |
| U+201D  | RIGHT DOUBLE QUOTATION MARK | `”`       |                    |

### Languages

To add a new language, in `assets.mjs`:

- Add names for existing items, tagged with corresponding BCP47 code
- Add language code and name to `i18n.supported_languages`
