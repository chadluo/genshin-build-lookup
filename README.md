## Example

| Character | Material | Enemy                  |
| --------- | -------- | ---------------------- |
| 香菱      | 常燃火种 | 炎爆树                 |
|           | 勤劳     | 太山府 深炎之底 二五日 |

| Weapon | Material | Enemy                    |
| ------ | -------- | ------------------------ |
| 渔获   | 今昔剧画 | 砂流之庭 流沙之葬 三六日 |
|        | 混沌     | 遗迹机兵                 |

## Structures

### character

```json
{
  "id": "1",
  "name": {
    "zh-CN": "香菱"
  },
  "ascension": [1, 2, 3],
  "talent": [4, 5, 6]
}
```

### material

```json
{
  "id": 2,
  "name": {
    "zh-CN": "常燃火种"
  },
  "enemy": [3]
}
```

### enemy

```json
{
  "id": 3,
  "name": {
    "zh-CN": "炎爆树"
  },
  "material": [2]
}
```

## Algorithm

For character/weapon, find materials & then enemy

For enemy, find materials & then character/weapon

## Notes

For item ids in `assets.mjs`, single quotes (`'`) and (`"`) must be escaped as HTML entities.

Multiple languages support:

1. add names in `assets.mjs` tagged with corresponding BCP47 code
2. add option in `//*[@id="lang-select"]`
