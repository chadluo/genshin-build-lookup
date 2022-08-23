declare module "weapons";

import * as Types from "./types";

export interface Weapon extends Types.WishObject {
  category: WeaponCategory;
}

export enum WeaponCategory {
  BOW,
  CATALYST,
  CLAYMORE,
  POLEARM,
  SWORD,
}

export const weapons: Weapon[] = [
  {
    id: "Polar Star",
    type: "weapon",
    rarity: 5,
    category: WeaponCategory.BOW,
    name: { en: ["Polar Star"], "zh-CN": ["冬极白星"] },
    materials: ["Mask of the Wicked Lieutenant", "Concealed Claw", "Spectral Husk"],
  },
  {
    id: "Thundering Pulse",
    type: "weapon",
    rarity: 5,
    category: WeaponCategory.BOW,
    name: { en: ["Thundering Pulse"], "zh-CN": ["飞雷之弦振"] },
    materials: ["Narukami’s Wisdom", "Dismal Prism", "Firm Arrowhead"],
  },
  {
    id: "Elegy for the End",
    type: "weapon",
    rarity: 5,
    category: WeaponCategory.BOW,
    name: { en: ["Elegy for the End"], "zh-CN": ["终末嗟叹之诗"] },
    materials: ["Boreal Wolf’s Milk Tooth", "Heavy Horn", "Recruit’s Insignia"],
  },
  {
    id: "Skyward Harp",
    type: "weapon",
    rarity: 5,
    category: WeaponCategory.BOW,
    name: { en: ["Skyward Harp"], "zh-CN": ["天空之翼"] },
    materials: ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Firm Arrowhead"],
  },
  {
    id: "Amos’ Bow",
    type: "weapon",
    rarity: 5,
    category: WeaponCategory.BOW,
    name: { en: ["Amos’ Bow"], "zh-CN": ["阿莫斯之弓"] },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Slime Condensate"],
  },
  {
    id: "Aqua Simulacra",
    type: "weapon",
    rarity: 5,
    category: WeaponCategory.BOW,
    name: { en: ["Aqua Simulacra"], "zh-CN": ["若水"] },
    materials: ["Luminous Sands from Guyun", "Gloomy Statuette", "Spectral Husk"],
  },
  {
    id: "Hunter’s Path",
    type: "weapon",
    rarity: 5,
    category: WeaponCategory.BOW,
    name: { en: ["Hunter’s Path"], "zh-CN": ["猎人之径"] },
    materials: ["Echo of Scorching Might", "Inactivated Fungal Nucleus", "Faded Red Satin"],
  },
  {
    id: "Lost Prayer to the Sacred Winds",
    type: "weapon",
    rarity: 5,
    category: WeaponCategory.CATALYST,
    name: { en: ["Lost Prayer to the Sacred Winds"], "zh-CN": ["四风原典"] },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Slime Condensate"],
  },
  {
    id: "Skyward Atlas",
    type: "weapon",
    rarity: 5,
    category: WeaponCategory.CATALYST,
    name: { en: ["Skyward Atlas"], "zh-CN": ["天空之卷"] },
    materials: ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Firm Arrowhead"],
  },
  {
    id: "Everlasting Moonglow",
    type: "weapon",
    rarity: 5,
    category: WeaponCategory.CATALYST,
    name: { en: ["Everlasting Moonglow"], "zh-CN": ["不灭月华"] },
    materials: ["Coral Branch of a Distant Sea", "Dismal Prism", "Spectral Husk"],
  },
  {
    id: "Memory of Dust",
    type: "weapon",
    rarity: 5,
    category: WeaponCategory.CATALYST,
    name: { en: ["Memory of Dust"], "zh-CN": ["尘世之锁"] },
    materials: ["Grain of Aerosiderite", "Fragile Bone Shard", "Damaged Mask"],
  },
  {
    id: "Kagura’s Verity",
    type: "weapon",
    rarity: 5,
    category: WeaponCategory.CATALYST,
    name: { en: ["Kagura’s Verity"], "zh-CN": ["神乐之真意"] },
    materials: ["Mask of the Wicked Lieutenant", "Concealed Claw", "Spectral Husk"],
  },
  {
    id: "Wolf’s Gravestone",
    type: "weapon",
    rarity: 5,
    category: WeaponCategory.CLAYMORE,
    name: { en: ["Wolf’s Gravestone"], "zh-CN": ["狼的末路"] },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Divining Scroll"],
  },
  {
    id: "Skyward Pride",
    type: "weapon",
    rarity: 5,
    category: WeaponCategory.CLAYMORE,
    name: { en: ["Skyward Pride"], "zh-CN": ["天空之傲"] },
    materials: ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Slime Condensate"],
  },
  {
    id: "The Unforged",
    type: "weapon",
    rarity: 5,
    category: WeaponCategory.CLAYMORE,
    name: { en: ["The Unforged"], "zh-CN": ["无工之剑"] },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Treasure Hoarder Insignia"],
  },
  {
    id: "Song of Broken Pines",
    type: "weapon",
    rarity: 5,
    category: WeaponCategory.CLAYMORE,
    name: { en: ["Song of Broken Pines"], "zh-CN": ["松籁响起之时"] },
    materials: ["Tile of Decarabian’s Tower", "Heavy Horn", "Damaged Mask"],
  },
  {
    id: "Redhorn Stonethresher",
    type: "weapon",
    rarity: 5,
    category: WeaponCategory.CLAYMORE,
    name: { en: ["Redhorn Stonethresher"], "zh-CN": ["赤角石溃杵"] },
    materials: ["Narukami’s Wisdom", "Concealed Claw", "Old Handguard"],
  },
  {
    id: "Engulfing Lightning",
    type: "weapon",
    rarity: 5,
    category: WeaponCategory.POLEARM,
    name: { en: ["Engulfing Lightning"], "zh-CN": ["薙草之稻光"] },
    materials: ["Mask of the Wicked Lieutenant", "Chaos Gear", "Old Handguard"],
  },
  {
    id: "Skyward Spine",
    type: "weapon",
    rarity: 5,
    category: WeaponCategory.POLEARM,
    name: { en: ["Skyward Spine"], "zh-CN": ["天空之脊"] },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Divining Scroll"],
  },
  {
    id: "Primordial Jade Winged-Spear",
    type: "weapon",
    rarity: 5,
    category: WeaponCategory.POLEARM,
    name: { en: ["Primordial Jade Winged-Spear"], "zh-CN": ["和璞鸢"] },
    materials: ["Luminous Sands from Guyun", "Hunter’s Sacrificial Knife", "Recruit’s Insignia"],
  },
  {
    id: "Calamity Queller",
    type: "weapon",
    rarity: 5,
    category: WeaponCategory.POLEARM,
    name: { en: ["Calamity Queller"], "zh-CN": ["息灾"] },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Whopperflower Nectar"],
  },
  {
    id: "Staff of Homa",
    type: "weapon",
    rarity: 5,
    category: WeaponCategory.POLEARM,
    name: { en: ["Staff of Homa"], "zh-CN": ["护摩之杖"] },
    materials: ["Grain of Aerosiderite", "Dead Ley Line Branch", "Slime Condensate"],
  },
  {
    id: "Vortex Vanquisher",
    type: "weapon",
    rarity: 5,
    category: WeaponCategory.POLEARM,
    name: { en: ["Vortex Vanquisher"], "zh-CN": ["贯虹之槊"] },
    materials: ["Grain of Aerosiderite", "Fragile Bone Shard", "Treasure Hoarder Insignia"],
  },
  {
    id: "Mistsplitter Reforged",
    type: "weapon",
    rarity: 5,
    category: WeaponCategory.SWORD,
    name: { en: ["Mistsplitter Reforged"], "zh-CN": ["雾切之回光"] },
    materials: ["Coral Branch of a Distant Sea", "Chaos Gear", "Old Handguard"],
  },
  {
    id: "Aquila Favonia",
    type: "weapon",
    rarity: 5,
    category: WeaponCategory.SWORD,
    name: { en: ["Aquila Favonia"], "zh-CN": ["风鹰剑"] },
    materials: ["Tile of Decarabian’s Tower", "Heavy Horn", "Firm Arrowhead"],
  },
  {
    id: "Summit Shaper",
    type: "weapon",
    rarity: 5,
    category: WeaponCategory.SWORD,
    name: { en: ["Summit Shaper"], "zh-CN": ["斫峰之刃"] },
    materials: ["Luminous Sands from Guyun", "Hunter’s Sacrificial Knife", "Damaged Mask"],
  },
  {
    id: "Skyward Blade",
    type: "weapon",
    rarity: 5,
    category: WeaponCategory.SWORD,
    name: { en: ["Skyward Blade"], "zh-CN": ["天空之刃"] },
    materials: ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Slime Condensate"],
  },
  {
    id: "Freedom-Sworn",
    type: "weapon",
    rarity: 5,
    category: WeaponCategory.SWORD,
    name: { en: ["Freedom-Sworn"], "zh-CN": ["苍古自由之誓"] },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Divining Scroll"],
  },
  {
    id: "Primordial Jade Cutter",
    type: "weapon",
    rarity: 5,
    category: WeaponCategory.SWORD,
    name: { en: ["Primordial Jade Cutter"], "zh-CN": ["磐岩结绿"] },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Treasure Hoarder Insignia"],
  },
  {
    id: "Haran Geppaku Futsu",
    type: "weapon",
    rarity: 5,
    category: WeaponCategory.SWORD,
    name: { en: ["Haran Geppaku Futsu"], "zh-CN": ["波乱月白经津"] },
    materials: ["Narukami’s Wisdom", "Gloomy Statuette", "Old Handguard"],
  },
  {
    id: "Alley Hunter",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.BOW,
    name: { en: ["Alley Hunter"], "zh-CN": ["暗巷猎手"] },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Slime Condensate"],
  },
  {
    id: "The Viridescent Hunt",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.BOW,
    name: { en: ["The Viridescent Hunt"], "zh-CN": ["苍翠猎弓"] },
    materials: ["Tile of Decarabian’s Tower", "Heavy Horn", "Firm Arrowhead"],
  },
  {
    id: "The Stringless",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.BOW,
    name: { en: ["The Stringless"], "zh-CN": ["绝弦"] },
    materials: ["Tile of Decarabian’s Tower", "Heavy Horn", "Firm Arrowhead"],
  },
  {
    id: "Sacrificial Bow",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.BOW,
    name: { en: ["Sacrificial Bow"], "zh-CN": ["祭礼弓"] },
    materials: ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Slime Condensate"],
  },
  {
    id: "Rust",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.BOW,
    name: { en: ["Rust"], "zh-CN": ["弓藏"] },
    materials: ["Luminous Sands from Guyun", "Hunter’s Sacrificial Knife", "Damaged Mask"],
  },
  {
    id: "Royal Bow",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.BOW,
    name: { en: ["Royal Bow"], "zh-CN": ["宗室长弓"] },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Divining Scroll"],
  },
  {
    id: "Predator",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.BOW,
    name: { en: ["Predator"], "zh-CN": ["掠食者"] },
    materials: ["Narukami’s Wisdom", "Dismal Prism", "Firm Arrowhead"],
  },
  {
    id: "Prototype Crescent",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.BOW,
    name: { en: ["Prototype Crescent"], "zh-CN": ["试作澹月"] },
    materials: [
      "Mist Veiled Lead Elixir",
      "Mist Grass Pollen",
      "Treasure Hoarder Insignia",
      "Northlander Bow Billet",
      "Crystal Chunk",
      "White Iron Chunk",
    ],
  },
  {
    id: "Mouun’s Moon",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.BOW,
    name: { en: ["Mouun’s Moon"], "zh-CN": ["曚云之月"] },
    materials: ["Narukami’s Wisdom", "Dismal Prism", "Spectral Husk"],
  },
  {
    id: "Mitternachts Waltz",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.BOW,
    name: { en: ["Mitternachts Waltz"], "zh-CN": ["幽夜华尔兹"] },
    materials: ["Tile of Decarabian’s Tower", "Heavy Horn", "Treasure Hoarder Insignia"],
  },
  {
    id: "Hamayumi",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.BOW,
    name: { en: ["Hamayumi"], "zh-CN": ["破魔之弓"] },
    materials: [
      "Narukami’s Wisdom",
      "Dismal Prism",
      "Firm Arrowhead",
      "Northlander Bow Billet",
      "Amethyst Lump",
      "White Iron Chunk",
    ],
  },
  {
    id: "Favonius Warbow",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.BOW,
    name: { en: ["Favonius Warbow"], "zh-CN": ["西风猎弓"] },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Whopperflower Nectar"],
  },
  {
    id: "Compound Bow",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.BOW,
    name: { en: ["Compound Bow"], "zh-CN": ["钢轮弓"] },
    materials: [
      "Grain of Aerosiderite",
      "Fragile Bone Shard",
      "Recruit’s Insignia",
      "Northlander Bow Billet",
      "Crystal Chunk",
      "White Iron Chunk",
    ],
  },
  {
    id: "Blackcliff Warbow",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.BOW,
    name: { en: ["Blackcliff Warbow"], "zh-CN": ["黑岩战弓"] },
    materials: ["Luminous Sands from Guyun", "Hunter’s Sacrificial Knife", "Whopperflower Nectar"],
  },
  {
    id: "Windblume Ode",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.BOW,
    name: { en: ["Windblume Ode"], "zh-CN": ["风花之颂"] },
    materials: ["Fetters of the Dandelion Gladiator", "Dead Ley Line Branch", "Whopperflower Nectar"],
  },
  {
    id: "Fading Twilight",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.BOW,
    name: { en: ["Fading Twilight"], "zh-CN": ["落霞"] },
    materials: ["Grain of Aerosiderite", "Hunter’s Sacrificial Knife", "Divining Scroll"],
  },
  {
    id: "End of the Line",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.BOW,
    name: { en: ["End of the Line"], "zh-CN": ["竭泽"] },
    materials: ["Echo of Scorching Might", "Inactivated Fungal Nucleus", "Fungal Spores"],
  },
  {
    id: "King’s Squire",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.BOW,
    name: { en: ["King’s Squire"], "zh-CN": ["王下近侍"] },
    materials: ["Echo of Scorching Might", "Inactivated Fungal Nucleus", "Firm Arrowhead"],
  },
  {
    id: "Wine and Song",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.CATALYST,
    name: { en: ["Wine and Song"], "zh-CN": ["暗巷的酒与诗"] },
    materials: ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Treasure Hoarder Insignia"],
  },
  {
    id: "The Widsith",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.CATALYST,
    name: { en: ["The Widsith"], "zh-CN": ["流浪乐章"] },
    materials: ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Damaged Mask"],
  },
  {
    id: "Solar Pearl",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.CATALYST,
    name: { en: ["Solar Pearl"], "zh-CN": ["匣里日月"] },
    materials: ["Luminous Sands from Guyun", "Hunter’s Sacrificial Knife", "Whopperflower Nectar"],
  },
  {
    id: "Sacrificial Fragments",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.CATALYST,
    name: { en: ["Sacrificial Fragments"], "zh-CN": ["祭礼残章"] },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Treasure Hoarder Insignia"],
  },
  {
    id: "Royal Grimoire",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.CATALYST,
    name: { en: ["Royal Grimoire"], "zh-CN": ["宗室秘法录"] },
    materials: ["Tile of Decarabian’s Tower", "Heavy Horn", "Recruit’s Insignia"],
  },
  {
    id: "Prototype Amber",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.CATALYST,
    name: { en: ["Prototype Amber"], "zh-CN": ["试作金珀"] },
    materials: [
      "Mist Veiled Lead Elixir",
      "Mist Grass Pollen",
      "Firm Arrowhead",
      "Northlander Catalyst Billet",
      "Crystal Chunk",
      "White Iron Chunk",
    ],
  },
  {
    id: "Mappa Mare",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.CATALYST,
    name: { en: ["Mappa Mare"], "zh-CN": ["万国诸海图谱"] },
    materials: [
      "Grain of Aerosiderite",
      "Fragile Bone Shard",
      "Slime Condensate",
      "Northlander Catalyst Billet",
      "Crystal Chunk",
      "White Iron Chunk",
    ],
  },
  {
    id: "Hakushin Ring",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.CATALYST,
    name: { en: ["Hakushin Ring"], "zh-CN": ["白辰之环"] },
    materials: [
      "Coral Branch of a Distant Sea",
      "Dismal Prism",
      "Divining Scroll",
      "Northlander Catalyst Billet",
      "Amethyst Lump",
      "White Iron Chunk",
    ],
  },
  {
    id: "Frostbearer",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.CATALYST,
    name: { en: ["Frostbearer"], "zh-CN": ["忍冬之果"] },
    materials: [
      "Fetters of the Dandelion Gladiator",
      "Chaos Device",
      "Whopperflower Nectar",
      "Northlander Catalyst Billet",
      "Crystal Chunk",
      "Starsilver",
    ],
  },
  {
    id: "Favonius Codex",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.CATALYST,
    name: { en: ["Favonius Codex"], "zh-CN": ["西风秘典"] },
    materials: ["Tile of Decarabian’s Tower", "Heavy Horn", "Divining Scroll"],
  },
  {
    id: "Eye of Perception",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.CATALYST,
    name: { en: ["Eye of Perception"], "zh-CN": ["昭心"] },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Damaged Mask"],
  },
  {
    id: "Dodoco Tales",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.CATALYST,
    name: { en: ["Dodoco Tales"], "zh-CN": ["嘟嘟可故事集"] },
    materials: ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Damaged Mask"],
  },
  {
    id: "Blackcliff Agate",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.CATALYST,
    name: { en: ["Blackcliff Agate"], "zh-CN": ["黑岩绯玉"] },
    materials: ["Luminous Sands from Guyun", "Hunter’s Sacrificial Knife", "Divining Scroll"],
  },
  {
    id: "Oathsworn Eye",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.CATALYST,
    name: { en: ["Oathsworn Eye"], "zh-CN": ["证誓之明瞳"] },
    materials: ["Coral Branch of a Distant Sea", "Concealed Claw", "Spectral Husk"],
  },
  {
    id: "Fruit of Fulfillment",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.CATALYST,
    name: { en: ["Fruit of Fulfillment"], "zh-CN": ["盈满之实"] },
    materials: ["Oasis Garden’s Reminiscence", "Gloomy Statuette", "Fungal Spores"],
  },
  {
    id: "Akuoumaru",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.CLAYMORE,
    name: { en: ["Akuoumaru"], "zh-CN": ["恶王丸"] },
    materials: ["Coral Branch of a Distant Sea", "Concealed Claw", "Old Handguard"],
  },
  {
    id: "Royal Greatsword",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.CLAYMORE,
    name: { en: ["Royal Greatsword"], "zh-CN": ["宗室大剑"] },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Slime Condensate"],
  },
  {
    id: "Whiteblind",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.CLAYMORE,
    name: { en: ["Whiteblind"], "zh-CN": ["白影剑"] },
    materials: [
      "Luminous Sands from Guyun",
      "Hunter’s Sacrificial Knife",
      "Treasure Hoarder Insignia",
      "Northlander Claymore Billet",
      "Crystal Chunk",
      "White Iron Chunk",
    ],
  },
  {
    id: "The Bell",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.CLAYMORE,
    name: { en: ["The Bell"], "zh-CN": ["钟剑"] },
    materials: ["Tile of Decarabian’s Tower", "Heavy Horn", "Whopperflower Nectar"],
  },
  {
    id: "Snow-Tombed Starsilver",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.CLAYMORE,
    name: { en: ["Snow-Tombed Starsilver"], "zh-CN": ["雪葬的星银"] },
    materials: [
      "Tile of Decarabian’s Tower",
      "Heavy Horn",
      "Slime Condensate",
      "Northlander Claymore Billet",
      "Crystal Chunk",
      "Starsilver",
    ],
  },
  {
    id: "Favonius Greatsword",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.CLAYMORE,
    name: { en: ["Favonius Greatsword"], "zh-CN": ["西风大剑"] },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Recruit’s Insignia"],
  },
  {
    id: "Katsuragikiri Nagamasa",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.CLAYMORE,
    name: { en: ["Katsuragikiri Nagamasa"], "zh-CN": ["桂木斩长正"] },
    materials: [
      "Narukami’s Wisdom",
      "Chaos Gear",
      "Old Handguard",
      "Northlander Claymore Billet",
      "Amethyst Lump",
      "White Iron Chunk",
    ],
  },
  {
    id: "Sacrificial Greatsword",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.CLAYMORE,
    name: { en: ["Sacrificial Greatsword"], "zh-CN": ["祭礼大剑"] },
    materials: ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Firm Arrowhead"],
  },
  {
    id: "Serpent Spine",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.CLAYMORE,
    name: { en: ["Serpent Spine"], "zh-CN": ["螭骨剑"] },
    materials: ["Grain of Aerosiderite", "Fragile Bone Shard", "Whopperflower Nectar"],
  },
  {
    id: "Blackcliff Slasher",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.CLAYMORE,
    name: { en: ["Blackcliff Slasher"], "zh-CN": ["黑岩斩刀"] },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Recruit’s Insignia"],
  },
  {
    id: "Rainslasher",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.CLAYMORE,
    name: { en: ["Rainslasher"], "zh-CN": ["雨裁"] },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Divining Scroll"],
  },
  {
    id: "Prototype Archaic",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.CLAYMORE,
    name: { en: ["Prototype Archaic"], "zh-CN": ["试作古华"] },
    materials: [
      "Grain of Aerosiderite",
      "Fragile Bone Shard",
      "Damaged Mask",
      "Northlander Claymore Billet",
      "Crystal Chunk",
      "White Iron Chunk",
    ],
  },
  {
    id: "Luxurious Sea-Lord",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.CLAYMORE,
    name: { en: ["Luxurious Sea-Lord"], "zh-CN": ["衔珠海皇"] },
    materials: ["Grain of Aerosiderite", "Fragile Bone Shard", "Slime Condensate"],
  },
  {
    id: "Lithic Blade",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.CLAYMORE,
    name: { en: ["Lithic Blade"], "zh-CN": ["千岩古剑"] },
    materials: ["Luminous Sands from Guyun", "Hunter’s Sacrificial Knife", "Firm Arrowhead"],
  },
  {
    id: "Forest Regalia",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.CLAYMORE,
    name: { en: ["Forest Regalia"], "zh-CN": ["森林王器"] },
    materials: ["Copper Talisman of the Forest Dew", "Chaos Storage", "Faded Red Satin"],
  },
  {
    id: "Prototype Starglitter",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.POLEARM,
    name: { en: ["Prototype Starglitter"], "zh-CN": ["试作星镰"] },
    materials: [
      "Grain of Aerosiderite",
      "Fragile Bone Shard",
      "Damaged Mask",
      "Northlander Polearm Billet",
      "Crystal Chunk",
      "White Iron Chunk",
    ],
  },
  {
    id: "Lithic Spear",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.POLEARM,
    name: { en: ["Lithic Spear"], "zh-CN": ["千岩长枪"] },
    materials: ["Grain of Aerosiderite", "Fragile Bone Shard", "Firm Arrowhead"],
  },
  {
    id: "Kitain Cross Spear",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.POLEARM,
    name: { en: ["Kitain Cross Spear"], "zh-CN": ["喜多院十文字"] },
    materials: [
      "Mask of the Wicked Lieutenant",
      "Chaos Gear",
      "Treasure Hoarder Insignia",
      "Northlander Polearm Billet",
      "Amethyst Lump",
      "White Iron Chunk",
    ],
  },
  {
    id: "“The Catch”",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.POLEARM,
    name: { en: ["“The Catch”"], "zh-CN": ["「渔获」"] },
    materials: [
      "Mask of the Wicked Lieutenant",
      "Chaos Gear",
      "Spectral Husk",
      "Raimei Angelfish",
      "Golden Koi",
      "Rusty Koi",
      "Pufferfish",
      "Bitter Pufferfish",
    ],
  },
  {
    id: "Favonius Lance",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.POLEARM,
    name: { en: ["Favonius Lance"], "zh-CN": ["西风长枪"] },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Slime Condensate"],
  },
  {
    id: "Dragonspine Spear",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.POLEARM,
    name: { en: ["Dragonspine Spear"], "zh-CN": ["龙脊长枪"] },
    materials: [
      "Boreal Wolf’s Milk Tooth",
      "Mist Grass Pollen",
      "Recruit’s Insignia",
      "Northlander Polearm Billet",
      "Starsilver",
      "Vitalized Dragontooth",
    ],
  },
  {
    id: "Dragon’s Bane",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.POLEARM,
    name: { en: ["Dragon’s Bane"], "zh-CN": ["匣里灭辰"] },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Divining Scroll"],
  },
  {
    id: "Deathmatch",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.POLEARM,
    name: { en: ["Deathmatch"], "zh-CN": ["决斗之枪"] },
    materials: ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Whopperflower Nectar"],
  },
  {
    id: "Crescent Pike",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.POLEARM,
    name: { en: ["Crescent Pike"], "zh-CN": ["流月针"] },
    materials: [
      "Luminous Sands from Guyun",
      "Hunter’s Sacrificial Knife",
      "Treasure Hoarder Insignia",
      "Northlander Polearm Billet",
      "Crystal Chunk",
      "White Iron Chunk",
    ],
  },
  {
    id: "Blackcliff Pole",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.POLEARM,
    name: { en: ["Blackcliff Pole"], "zh-CN": ["黑岩刺枪"] },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Recruit’s Insignia"],
  },
  {
    id: "Wavebreaker’s Fin",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.POLEARM,
    name: { en: ["Wavebreaker’s Fin"], "zh-CN": ["断浪长鳍"] },
    materials: ["Mask of the Wicked Lieutenant", "Concealed Claw", "Old Handguard"],
  },
  {
    id: "Royal Spear",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.POLEARM,
    name: { en: ["Royal Spear"], "zh-CN": ["宗室猎枪"] },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Recruit’s Insignia"],
  },
  {
    id: "Moonpiercer",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.POLEARM,
    name: { en: ["Moonpiercer"], "zh-CN": ["贯月矢"] },
    materials: ["Oasis Garden’s Reminiscence", "Chaos Storage", "Recruit’s Insignia"],
  },
  {
    id: "The Flute",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.SWORD,
    name: { en: ["The Flute"], "zh-CN": ["笛剑"] },
    materials: ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Slime Condensate"],
  },
  {
    id: "The Black Sword",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.SWORD,
    name: { en: ["The Black Sword"], "zh-CN": ["黑剑"] },
    materials: ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Slime Condensate"],
  },
  {
    id: "The Alley Flash",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.SWORD,
    name: { en: ["The Alley Flash"], "zh-CN": ["暗巷闪光"] },
    materials: ["Tile of Decarabian’s Tower", "Heavy Horn", "Divining Scroll"],
  },
  {
    id: "Sword of Descension",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.SWORD,
    name: { en: ["Sword of Descension"], "zh-CN": ["降临之剑"] },
    materials: ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Treasure Hoarder Insignia"],
  },
  {
    id: "Sacrificial Sword",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.SWORD,
    name: { en: ["Sacrificial Sword"], "zh-CN": ["祭礼剑"] },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Divining Scroll"],
  },
  {
    id: "Royal Longsword",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.SWORD,
    name: { en: ["Royal Longsword"], "zh-CN": ["宗室长剑"] },
    materials: ["Tile of Decarabian’s Tower", "Heavy Horn", "Damaged Mask"],
  },
  {
    id: "Prototype Rancour",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.SWORD,
    name: { en: ["Prototype Rancour"], "zh-CN": ["试作斩岩"] },
    materials: [
      "Mist Veiled Lead Elixir",
      "Mist Grass Pollen",
      "Recruit’s Insignia",
      "Northlander Sword Billet",
      "Crystal Chunk",
      "White Iron Chunk",
    ],
  },
  {
    id: "Amenoma Kageuchi",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.SWORD,
    name: { en: ["Amenoma Kageuchi"], "zh-CN": ["天目影打刀"] },
    materials: [
      "Coral Branch of a Distant Sea",
      "Chaos Gear",
      "Old Handguard",
      "Northlander Sword Billet",
      "Amethyst Lump",
      "White Iron Chunk",
    ],
  },
  {
    id: "Lion’s Roar",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.SWORD,
    name: { en: ["Lion’s Roar"], "zh-CN": ["匣里龙吟"] },
    materials: ["Luminous Sands from Guyun", "Hunter’s Sacrificial Knife", "Treasure Hoarder Insignia"],
  },
  {
    id: "Iron Sting",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.SWORD,
    name: { en: ["Iron Sting"], "zh-CN": ["铁蜂刺"] },
    materials: [
      "Grain of Aerosiderite",
      "Fragile Bone Shard",
      "Whopperflower Nectar",
      "Northlander Sword Billet",
      "Crystal Chunk",
      "White Iron Chunk",
    ],
  },
  {
    id: "Festering Desire",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.SWORD,
    name: { en: ["Festering Desire"], "zh-CN": ["腐殖之剑"] },
    materials: ["Fetters of the Dandelion Gladiator", "Heavy Horn", "Recruit’s Insignia"],
  },
  {
    id: "Favonius Sword",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.SWORD,
    name: { en: ["Favonius Sword"], "zh-CN": ["西风剑"] },
    materials: ["Tile of Decarabian’s Tower", "Heavy Horn", "Firm Arrowhead"],
  },
  {
    id: "Cinnabar Spindle",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.SWORD,
    name: { en: ["Cinnabar Spindle"], "zh-CN": ["辰砂之纺锤"] },
    materials: ["Tile of Decarabian’s Tower", "Chaos Device", "Damaged Mask"],
  },
  {
    id: "Blackcliff Longsword",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.SWORD,
    name: { en: ["Blackcliff Longsword"], "zh-CN": ["黑岩长剑"] },
    materials: ["Luminous Sands from Guyun", "Hunter’s Sacrificial Knife", "Firm Arrowhead"],
  },
  {
    id: "Kagotsurube Isshin",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.SWORD,
    name: { en: ["Kagotsurube Isshin"], "zh-CN": ["笼钓瓶一心"] },
    materials: ["Mask of the Wicked Lieutenant", "Gloomy Statuette", "Spectral Husk"],
  },
  {
    id: "Sapwood Blade",
    type: "weapon",
    rarity: 4,
    category: WeaponCategory.SWORD,
    name: { en: ["Sapwood Blade"], "zh-CN": ["原木刀"] },
    materials: ["Copper Talisman of the Forest Dew", "Chaos Storage", "Faded Red Satin"],
  },
  {
    id: "Raven Bow",
    type: "weapon",
    rarity: 3,
    category: WeaponCategory.BOW,
    name: { en: ["Raven Bow"], "zh-CN": ["鸦羽弓"] },
    materials: ["Tile of Decarabian’s Tower", "Heavy Horn", "Firm Arrowhead"],
  },
  {
    id: "Recurve Bow",
    type: "weapon",
    rarity: 3,
    category: WeaponCategory.BOW,
    name: { en: ["Recurve Bow"], "zh-CN": ["反曲弓"] },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Divining Scroll"],
  },
  {
    id: "Messenger",
    type: "weapon",
    rarity: 3,
    category: WeaponCategory.BOW,
    name: { en: ["Messenger"], "zh-CN": ["信使"] },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Treasure Hoarder Insignia"],
  },
  {
    id: "Sharpshooter’s Oath",
    type: "weapon",
    rarity: 3,
    category: WeaponCategory.BOW,
    name: { en: ["Sharpshooter’s Oath"], "zh-CN": ["神射手之誓"] },
    materials: ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Slime Condensate"],
  },
  {
    id: "Slingshot",
    type: "weapon",
    rarity: 3,
    category: WeaponCategory.BOW,
    name: { en: ["Slingshot"], "zh-CN": ["弹弓"] },
    materials: ["Luminous Sands from Guyun", "Hunter’s Sacrificial Knife", "Damaged Mask"],
  },
  {
    id: "Magic Guide",
    type: "weapon",
    rarity: 3,
    category: WeaponCategory.CATALYST,
    name: { en: ["Magic Guide"], "zh-CN": ["魔导绪论"] },
    materials: ["Tile of Decarabian’s Tower", "Heavy Horn", "Slime Condensate"],
  },
  {
    id: "Otherworldly Story",
    type: "weapon",
    rarity: 3,
    category: WeaponCategory.CATALYST,
    name: { en: ["Otherworldly Story"], "zh-CN": ["异世界行记"] },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Damaged Mask"],
  },
  {
    id: "Emerald Orb",
    type: "weapon",
    rarity: 3,
    category: WeaponCategory.CATALYST,
    name: { en: ["Emerald Orb"], "zh-CN": ["翡玉法球"] },
    materials: ["Luminous Sands from Guyun", "Hunter’s Sacrificial Knife", "Treasure Hoarder Insignia"],
  },
  {
    id: "Thrilling Tales of Dragon Slayers",
    type: "weapon",
    rarity: 3,
    category: WeaponCategory.CATALYST,
    name: { en: ["Thrilling Tales of Dragon Slayers"], "zh-CN": ["讨龙英杰谭"] },
    materials: ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Divining Scroll"],
  },
  {
    id: "Twin Nephrite",
    type: "weapon",
    rarity: 3,
    category: WeaponCategory.CATALYST,
    name: { en: ["Twin Nephrite"], "zh-CN": ["甲级宝珏"] },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Recruit’s Insignia"],
  },
  {
    id: "Skyrider Greatsword",
    type: "weapon",
    rarity: 3,
    category: WeaponCategory.CLAYMORE,
    name: { en: ["Skyrider Greatsword"], "zh-CN": ["飞天大御剑"] },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Damaged Mask"],
  },
  {
    id: "Debate Club",
    type: "weapon",
    rarity: 3,
    category: WeaponCategory.CLAYMORE,
    name: { en: ["Debate Club"], "zh-CN": ["以理服人"] },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Damaged Mask"],
  },
  {
    id: "Bloodtainted Greatsword",
    type: "weapon",
    rarity: 3,
    category: WeaponCategory.CLAYMORE,
    name: { en: ["Bloodtainted Greatsword"], "zh-CN": ["沐浴龙血的剑"] },
    materials: ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Firm Arrowhead"],
  },
  {
    id: "White Iron Greatsword",
    type: "weapon",
    rarity: 3,
    category: WeaponCategory.CLAYMORE,
    name: { en: ["White Iron Greatsword"], "zh-CN": ["白铁大剑"] },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Slime Condensate"],
  },
  {
    id: "Ferrous Shadow",
    type: "weapon",
    rarity: 3,
    category: WeaponCategory.CLAYMORE,
    name: { en: ["Ferrous Shadow"], "zh-CN": ["铁影阔剑"] },
    materials: ["Tile of Decarabian’s Tower", "Heavy Horn", "Whopperflower Nectar"],
  },
  {
    id: "Halberd",
    type: "weapon",
    rarity: 3,
    category: WeaponCategory.POLEARM,
    name: { en: ["Halberd"], "zh-CN": ["钺矛"] },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Whopperflower Nectar"],
  },
  {
    id: "Black Tassel",
    type: "weapon",
    rarity: 3,
    category: WeaponCategory.POLEARM,
    name: { en: ["Black Tassel"], "zh-CN": ["黑缨枪"] },
    materials: ["Grain of Aerosiderite", "Fragile Bone Shard", "Firm Arrowhead"],
  },
  {
    id: "White Tassel",
    type: "weapon",
    rarity: 3,
    category: WeaponCategory.POLEARM,
    name: { en: ["White Tassel"], "zh-CN": ["白缨枪"] },
    materials: ["Luminous Sands from Guyun", "Hunter’s Sacrificial Knife", "Recruit’s Insignia"],
  },
  {
    id: "Harbinger of Dawn",
    type: "weapon",
    rarity: 3,
    category: WeaponCategory.SWORD,
    name: { en: ["Harbinger of Dawn"], "zh-CN": ["黎明神剑"] },
    materials: ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Slime Condensate"],
  },
  {
    id: "Fillet Blade",
    type: "weapon",
    rarity: 3,
    category: WeaponCategory.SWORD,
    name: { en: ["Fillet Blade"], "zh-CN": ["吃虎鱼刀"] },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Treasure Hoarder Insignia"],
  },
  {
    id: "Skyrider Sword",
    type: "weapon",
    rarity: 3,
    category: WeaponCategory.SWORD,
    name: { en: ["Skyrider Sword"], "zh-CN": ["飞天御剑"] },
    materials: ["Grain of Aerosiderite", "Fragile Bone Shard", "Recruit’s Insignia"],
  },
  {
    id: "Dark Iron Sword",
    type: "weapon",
    rarity: 3,
    category: WeaponCategory.SWORD,
    name: { en: ["Dark Iron Sword"], "zh-CN": ["暗铁剑"] },
    materials: ["Luminous Sands from Guyun", "Hunter’s Sacrificial Knife", "Damaged Mask"],
  },
  {
    id: "Cool Steel",
    type: "weapon",
    rarity: 3,
    category: WeaponCategory.SWORD,
    name: { en: ["Cool Steel"], "zh-CN": ["冷刃"] },
    materials: ["Tile of Decarabian’s Tower", "Heavy Horn", "Firm Arrowhead"],
  },
  {
    id: "Traveler’s Handy Sword",
    type: "weapon",
    rarity: 3,
    category: WeaponCategory.SWORD,
    name: { en: ["Traveler’s Handy Sword"], "zh-CN": ["旅行剑"] },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Divining Scroll"],
  },
];
