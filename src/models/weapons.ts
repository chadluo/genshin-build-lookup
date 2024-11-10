import type { OfMaterial, TYPE_WEAPON } from "../base";
import type {
  Common,
  Elite,
  Fishing,
  Forging,
  WeaponAscension,
} from "./materials";

export type Weapon = OfMaterial & {
  type: typeof TYPE_WEAPON;
  rarity: 3 | 4 | 5;
  category: Category;
  materials?:
    | [WeaponAscension, Elite, Common]
    | [WeaponAscension, Elite, Common, ...Forging[]]
    | [WeaponAscension, Elite, Common, ...Fishing[]];
};

export type Category = "Bow" | "Catalyst" | "Claymore" | "Polearm" | "Sword";

export type WeaponId =
  | "Polar Star"
  | "Thundering Pulse"
  | "Elegy for the End"
  | "Skyward Harp"
  | "Amos’ Bow"
  | "Aqua Simulacra"
  | "Hunter’s Path"
  | "The First Great Magic"
  | "Silvershower Heartstrings"
  | "Astral Vulture’s Crimson Plumage"
  //
  // NewId - bow 5
  //
  | "Lost Prayer to the Sacred Winds"
  | "Skyward Atlas"
  | "Everlasting Moonglow"
  | "Memory of Dust"
  | "Kagura’s Verity"
  | "A Thousand Floating Dreams"
  | "Tulaytulla’s Rememberance"
  | "Jadefall’s Splendor"
  | "Tome of the Eternal Flow"
  | "Cashflow Supervision"
  | "Crane’s Echoing Call"
  | "Surf’s Up"
  //
  // NewId - catalyst 5
  //
  | "Wolf’s Gravestone"
  | "Skyward Pride"
  | "The Unforged"
  | "Song of Broken Pines"
  | "Redhorn Stonethresher"
  | "Beacon of the Reed Sea"
  | "Verdict"
  | "Fang of the Mountain King"
  //
  // NewId - claymore 5
  //
  | "Engulfing Lightning"
  | "Skyward Spine"
  | "Primordial Jade Winged-Spear"
  | "Calamity Queller"
  | "Staff of Homa"
  | "Vortex Vanquisher"
  | "Staff of the Scarlet Sands"
  | "Crimson Moon’s Semblance"
  | "Lumidouce Elegy"
  //
  // NewId - polearm 5
  //
  | "Mistsplitter Reforged"
  | "Aquila Favonia"
  | "Summit Shaper"
  | "Skyward Blade"
  | "Freedom-Sworn"
  | "Primordial Jade Cutter"
  | "Haran Geppaku Futsu"
  | "Key of the Khaj-Nisut"
  | "Light of Foliar Incision"
  | "Splendor of Tranquil Waters"
  | "Uraku Mitsugiri"
  | "Absolution"
  | "Peak Patrol Song"
  //
  // NewId - sword 5
  //
  | "Alley Hunter"
  | "The Viridescent Hunt"
  | "The Stringless"
  | "Sacrificial Bow"
  | "Rust"
  | "Royal Bow"
  | "Predator"
  | "Prototype Crescent"
  | "Mouun’s Moon"
  | "Mitternachts Waltz"
  | "Hamayumi"
  | "Favonius Warbow"
  | "Compound Bow"
  | "Blackcliff Warbow"
  | "Windblume Ode"
  | "Fading Twilight"
  | "End of the Line"
  | "King’s Squire"
  | "Ibis Piercer"
  | "Scion of the Blazing Sun"
  | "Song of Stillness"
  | "Range Gauge"
  | "Cloudforged"
  | "Chain Breaker"
  | "Flower-Wreathed Feathers"
  //
  // NewId - bow 4
  //
  | "Wine and Song"
  | "The Widsith"
  | "Solar Pearl"
  | "Sacrificial Fragments"
  | "Royal Grimoire"
  | "Prototype Amber"
  | "Mappa Mare"
  | "Hakushin Ring"
  | "Frostbearer"
  | "Favonius Codex"
  | "Eye of Perception"
  | "Dodoco Tales"
  | "Blackcliff Agate"
  | "Oathsworn Eye"
  | "Fruit of Fulfillment"
  | "Wandering Evenstar"
  | "Sacrificial Jade"
  | "Flowing Purity"
  | "Ballad of the Boundless Blue"
  | "Ring of Yaxche"
  | "Ash-Graven Drinking Horn"
  | "Waveriding Whirl"
  //
  // NewId catalyst 4
  //
  | "Akuoumaru"
  | "Royal Greatsword"
  | "Whiteblind"
  | "The Bell"
  | "Snow-Tombed Starsilver"
  | "Favonius Greatsword"
  | "Katsuragikiri Nagamasa"
  | "Sacrificial Greatsword"
  | "Serpent Spine"
  | "Blackcliff Slasher"
  | "Rainslasher"
  | "Prototype Archaic"
  | "Luxurious Sea-Lord"
  | "Lithic Blade"
  | "Forest Regalia"
  | "Makhaira Aquamarine"
  | "Mailed Flower"
  | "Talking Stick"
  | "Tidal Shadow"
  | "Portable Power Saw"
  | "Ultimate Overlord’s Mega Magic Sword"
  | "Earth Shaker"
  | "Fruitful Hook"
  //
  // NewId - claymore 4
  //
  | "Prototype Starglitter"
  | "Lithic Spear"
  | "Kitain Cross Spear"
  | "“The Catch”"
  | "Favonius Lance"
  | "Dragonspine Spear"
  | "Dragon’s Bane"
  | "Deathmatch"
  | "Crescent Pike"
  | "Blackcliff Pole"
  | "Wavebreaker’s Fin"
  | "Royal Spear"
  | "Moonpiercer"
  | "Missive Windspear"
  | "Ballard of the Fjords"
  | "Rightful Reward"
  | "Prospector’s Drill"
  | "Dialogues of the Desert Sages"
  | "Footprint of the Rainbow"
  | "Mountain-Bracing Bolt"
  //
  // NewId - polearm 4
  //
  | "The Flute"
  | "The Black Sword"
  | "The Alley Flash"
  | "Sword of Descension"
  | "Sacrificial Sword"
  | "Royal Longsword"
  | "Prototype Rancour"
  | "Amenoma Kageuchi"
  | "Lion’s Roar"
  | "Iron Sting"
  | "Festering Desire"
  | "Favonius Sword"
  | "Cinnabar Spindle"
  | "Blackcliff Longsword"
  | "Kagotsurube Isshin"
  | "Sapwood Blade"
  | "Xiphos’ Moonlight"
  | "Toukabou Shigure"
  | "Fleuve Cendre Ferryman"
  | "Wolf-Fang"
  | "Finale of the Deep"
  | "The Dockhand’s Assistant"
  | "Sword of Narzissenkreuz"
  | "Flute of Ezpitzal"
  | "Sturdy Bone"
  | "Calamity of Eshu"
  //
  // NewId - sword 4
  //
  | "Raven Bow"
  | "Recurve Bow"
  | "Messenger"
  | "Sharpshooter’s Oath"
  | "Slingshot"
  | "Magic Guide"
  | "Otherworldly Story"
  | "Emerald Orb"
  | "Thrilling Tales of Dragon Slayers"
  | "Twin Nephrite"
  | "Skyrider Greatsword"
  | "Debate Club"
  | "Bloodtainted Greatsword"
  | "White Iron Greatsword"
  | "Ferrous Shadow"
  | "Halberd"
  | "Black Tassel"
  | "White Tassel"
  | "Harbinger of Dawn"
  | "Fillet Blade"
  | "Skyrider Sword"
  | "Dark Iron Sword"
  | "Cool Steel"
  | "Traveler’s Handy Sword";

export const weapons: Record<WeaponId, Weapon> = {
  "Polar Star": {
    id: "Polar Star",
    type: "weapon",
    rarity: 5,
    category: "Bow",
    name: { en: ["Polar Star"], "zh-CN": ["冬极白星"] },
    materials: [
      "Mask of the Wicked Lieutenant",
      "Concealed Claw",
      "Spectral Husk",
    ],
  },
  "Thundering Pulse": {
    id: "Thundering Pulse",
    type: "weapon",
    rarity: 5,
    category: "Bow",
    name: { en: ["Thundering Pulse"], "zh-CN": ["飞雷之弦振"] },
    materials: ["Narukami’s Wisdom", "Dismal Prism", "Firm Arrowhead"],
  },
  "Elegy for the End": {
    id: "Elegy for the End",
    type: "weapon",
    rarity: 5,
    category: "Bow",
    name: { en: ["Elegy for the End"], "zh-CN": ["终末嗟叹之诗"] },
    materials: ["Boreal Wolf’s Milk Tooth", "Heavy Horn", "Recruit’s Insignia"],
  },
  "Skyward Harp": {
    id: "Skyward Harp",
    type: "weapon",
    rarity: 5,
    category: "Bow",
    name: { en: ["Skyward Harp"], "zh-CN": ["天空之翼"] },
    materials: [
      "Boreal Wolf’s Milk Tooth",
      "Dead Ley Line Branch",
      "Firm Arrowhead",
    ],
  },
  "Amos’ Bow": {
    id: "Amos’ Bow",
    type: "weapon",
    rarity: 5,
    category: "Bow",
    name: { en: ["Amos’ Bow"], "zh-CN": ["阿莫斯之弓"] },
    materials: [
      "Fetters of the Dandelion Gladiator",
      "Chaos Device",
      "Slime Condensate",
    ],
  },
  "Aqua Simulacra": {
    id: "Aqua Simulacra",
    type: "weapon",
    rarity: 5,
    category: "Bow",
    name: { en: ["Aqua Simulacra"], "zh-CN": ["若水"] },
    materials: [
      "Luminous Sands from Guyun",
      "Gloomy Statuette",
      "Spectral Husk",
    ],
  },
  "Hunter’s Path": {
    id: "Hunter’s Path",
    type: "weapon",
    rarity: 5,
    category: "Bow",
    name: { en: ["Hunter’s Path"], "zh-CN": ["猎人之径"] },
    materials: [
      "Echo of Scorching Might",
      "Inactivated Fungal Nucleus",
      "Faded Red Satin",
    ],
  },
  "The First Great Magic": {
    id: "The First Great Magic",
    type: "weapon",
    rarity: 5,
    category: "Bow",
    name: { en: "The First Great Magic", "zh-CN": "最初的大魔术" },
    materials: [
      "Fragment of an Ancient Chord",
      "Drop of Tainted Water",
      "Transoceanic Pearl",
    ],
  },
  "Silvershower Heartstrings": {
    id: "Silvershower Heartstrings",
    type: "weapon",
    rarity: 5,
    category: "Bow",
    name: { en: "Silvershower Heartstrings", "zh-CN": "白雨心弦" },
    materials: [
      "Dross of Pure Sacred Dewdrop",
      "Feathery Fin",
      "Transoceanic Pearl",
    ],
  },
  "Astral Vulture’s Crimson Plumage": {
    id: "Astral Vulture’s Crimson Plumage",
    type: "weapon",
    rarity: 5,
    category: "Bow",
    name: { en: "Astral Vulture’s Crimson Plumage", "zh-CN": "星鹫赤羽" },
  },
  //
  // Newline - bow 5
  //
  "Lost Prayer to the Sacred Winds": {
    id: "Lost Prayer to the Sacred Winds",
    type: "weapon",
    rarity: 5,
    category: "Catalyst",
    name: {
      en: ["Lost Prayer to the Sacred Winds"],
      "zh-CN": ["四风原典"],
    },
    materials: [
      "Fetters of the Dandelion Gladiator",
      "Chaos Device",
      "Slime Condensate",
    ],
  },
  "Skyward Atlas": {
    id: "Skyward Atlas",
    type: "weapon",
    rarity: 5,
    category: "Catalyst",
    name: { en: ["Skyward Atlas"], "zh-CN": ["天空之卷"] },
    materials: [
      "Boreal Wolf’s Milk Tooth",
      "Dead Ley Line Branch",
      "Firm Arrowhead",
    ],
  },
  "Everlasting Moonglow": {
    id: "Everlasting Moonglow",
    type: "weapon",
    rarity: 5,
    category: "Catalyst",
    name: { en: ["Everlasting Moonglow"], "zh-CN": ["不灭月华"] },
    materials: [
      "Coral Branch of a Distant Sea",
      "Dismal Prism",
      "Spectral Husk",
    ],
  },
  "Memory of Dust": {
    id: "Memory of Dust",
    type: "weapon",
    rarity: 5,
    category: "Catalyst",
    name: { en: ["Memory of Dust"], "zh-CN": ["尘世之锁"] },
    materials: ["Grain of Aerosiderite", "Fragile Bone Shard", "Damaged Mask"],
  },
  "Kagura’s Verity": {
    id: "Kagura’s Verity",
    type: "weapon",
    rarity: 5,
    category: "Catalyst",
    name: { en: ["Kagura’s Verity"], "zh-CN": ["神乐之真意"] },
    materials: [
      "Mask of the Wicked Lieutenant",
      "Concealed Claw",
      "Spectral Husk",
    ],
  },
  "A Thousand Floating Dreams": {
    id: "A Thousand Floating Dreams",
    type: "weapon",
    rarity: 5,
    category: "Catalyst",
    name: {
      en: ["A Thousand Floating Dreams"],
      "zh-CN": ["千夜浮梦"],
    },
    materials: [
      "Oasis Garden’s Reminiscence",
      "Damaged Prism",
      "Fungal Spores",
    ],
  },
  "Tulaytulla’s Rememberance": {
    id: "Tulaytulla’s Rememberance",
    type: "weapon",
    rarity: 5,
    category: "Catalyst",
    name: { en: "Tulaytulla’s Rememberance", "zh-CN": "图莱杜拉的回忆" },
    materials: [
      "Echo of Scorching Might",
      "Inactivated Fungal Nucleus",
      "Fungal Spores",
    ],
  },
  "Jadefall’s Splendor": {
    id: "Jadefall’s Splendor",
    type: "weapon",
    rarity: 5,
    category: "Catalyst",
    name: { en: "Jadefall’s Splendor", "zh-CN": "碧落之珑" },
    materials: [
      "Luminous Sands from Guyun",
      "A Flower Yet to Bloom",
      "Fungal Spores",
    ],
  },
  "Tome of the Eternal Flow": {
    id: "Tome of the Eternal Flow",
    type: "weapon",
    rarity: 5,
    category: "Catalyst",
    name: { en: "Tome of the Eternal Flow", "zh-CN": "万世流涌大典" },
    materials: ["Dross of Pure Sacred Dewdrop", "Rift Core", "Meshing Gear"],
  },
  "Cashflow Supervision": {
    id: "Cashflow Supervision",
    type: "weapon",
    rarity: 5,
    category: "Catalyst",
    name: { en: "Cashflow Supervision", "zh-CN": "金流监督" },
    materials: [
      "Broken Goblet of the Pristine Sea",
      "Old Operative’s Pocket Watch",
      "Transoceanic Pearl",
    ],
  },
  "Crane’s Echoing Call": {
    id: "Crane’s Echoing Call",
    type: "weapon",
    rarity: 5,
    category: "Catalyst",
    name: { en: "Crane’s Echoing Call", "zh-CN": "鹤鸣余音" },
    materials: ["Mist Veiled Lead Elixir", "Feathery Fin", "Divining Scroll"],
  },
  "Surf’s Up": {
    id: "Surf’s Up",
    type: "weapon",
    rarity: 5,
    category: "Catalyst",
    name: { en: "Surf’s Up", "zh-CN": "冲浪时光" },
    materials: [
      "Blazing Sacrificial Heart’s Terror",
      "Shard of a Shattered Will",
      "Juvenile Fang",
    ],
  },
  //
  // Newline - catalyst 5
  //
  "Wolf’s Gravestone": {
    id: "Wolf’s Gravestone",
    type: "weapon",
    rarity: 5,
    category: "Claymore",
    name: { en: ["Wolf’s Gravestone"], "zh-CN": ["狼的末路"] },
    materials: [
      "Fetters of the Dandelion Gladiator",
      "Chaos Device",
      "Divining Scroll",
    ],
  },
  "Skyward Pride": {
    id: "Skyward Pride",
    type: "weapon",
    rarity: 5,
    category: "Claymore",
    name: { en: ["Skyward Pride"], "zh-CN": ["天空之傲"] },
    materials: [
      "Boreal Wolf’s Milk Tooth",
      "Dead Ley Line Branch",
      "Slime Condensate",
    ],
  },
  "The Unforged": {
    id: "The Unforged",
    type: "weapon",
    rarity: 5,
    category: "Claymore",
    name: { en: ["The Unforged"], "zh-CN": ["无工之剑"] },
    materials: [
      "Mist Veiled Lead Elixir",
      "Mist Grass Pollen",
      "Treasure Hoarder Insignia",
    ],
  },
  "Song of Broken Pines": {
    id: "Song of Broken Pines",
    type: "weapon",
    rarity: 5,
    category: "Claymore",
    name: { en: ["Song of Broken Pines"], "zh-CN": ["松籁响起之时"] },
    materials: ["Tile of Decarabian’s Tower", "Heavy Horn", "Damaged Mask"],
  },
  "Redhorn Stonethresher": {
    id: "Redhorn Stonethresher",
    type: "weapon",
    rarity: 5,
    category: "Claymore",
    name: { en: ["Redhorn Stonethresher"], "zh-CN": ["赤角石溃杵"] },
    materials: ["Narukami’s Wisdom", "Concealed Claw", "Old Handguard"],
  },
  "Beacon of the Reed Sea": {
    id: "Beacon of the Reed Sea",
    type: "weapon",
    rarity: 5,
    category: "Claymore",
    name: { en: "Beacon of the Reed Sea", "zh-CN": "苇海信标" },
    materials: [
      "Echo of Scorching Might",
      "Desiccated Shell",
      "Faded Red Satin",
    ],
  },
  Verdict: {
    id: "Verdict",
    type: "weapon",
    rarity: 5,
    category: "Claymore",
    name: { en: "Verdict", "zh-CN": "裁断" },
    materials: ["Fragment of an Ancient Chord", "Rift Core", "Meshing Gear"],
  },
  "Fang of the Mountain King": {
    id: "Fang of the Mountain King",
    type: "weapon",
    rarity: 5,
    category: "Claymore",
    name: { en: "Fang of the Mountain King", "zh-CN": "山王长牙" },
    materials: [
      "Delirious Decadence of the Sacred Lord",
      "Ignited Stone",
      "Sentry’s Wooden Whistle",
    ],
  },
  //
  // Newline - claymore 5
  //
  "Engulfing Lightning": {
    id: "Engulfing Lightning",
    type: "weapon",
    rarity: 5,
    category: "Polearm",
    name: { en: ["Engulfing Lightning"], "zh-CN": ["薙草之稻光"] },
    materials: ["Mask of the Wicked Lieutenant", "Chaos Gear", "Old Handguard"],
  },
  "Skyward Spine": {
    id: "Skyward Spine",
    type: "weapon",
    rarity: 5,
    category: "Polearm",
    name: { en: ["Skyward Spine"], "zh-CN": ["天空之脊"] },
    materials: [
      "Fetters of the Dandelion Gladiator",
      "Chaos Device",
      "Divining Scroll",
    ],
  },
  "Primordial Jade Winged-Spear": {
    id: "Primordial Jade Winged-Spear",
    type: "weapon",
    rarity: 5,
    category: "Polearm",
    name: { en: ["Primordial Jade Winged-Spear"], "zh-CN": ["和璞鸢"] },
    materials: [
      "Luminous Sands from Guyun",
      "Hunter’s Sacrificial Knife",
      "Recruit’s Insignia",
    ],
  },
  "Calamity Queller": {
    id: "Calamity Queller",
    type: "weapon",
    rarity: 5,
    category: "Polearm",
    name: { en: ["Calamity Queller"], "zh-CN": ["息灾"] },
    materials: [
      "Mist Veiled Lead Elixir",
      "Mist Grass Pollen",
      "Whopperflower Nectar",
    ],
  },
  "Staff of Homa": {
    id: "Staff of Homa",
    type: "weapon",
    rarity: 5,
    category: "Polearm",
    name: { en: ["Staff of Homa"], "zh-CN": ["护摩之杖"] },
    materials: [
      "Grain of Aerosiderite",
      "Dead Ley Line Branch",
      "Slime Condensate",
    ],
  },
  "Vortex Vanquisher": {
    id: "Vortex Vanquisher",
    type: "weapon",
    rarity: 5,
    category: "Polearm",
    name: { en: ["Vortex Vanquisher"], "zh-CN": ["贯虹之槊"] },
    materials: [
      "Grain of Aerosiderite",
      "Fragile Bone Shard",
      "Treasure Hoarder Insignia",
    ],
  },
  "Staff of the Scarlet Sands": {
    id: "Staff of the Scarlet Sands",
    type: "weapon",
    rarity: 5,
    category: "Polearm",
    name: { en: ["Staff of the Scarlet Sands"], "zh-CN": ["赤沙之杖"] },
    materials: [
      "Oasis Garden’s Reminiscence",
      "Chaos Storage",
      "Fungal Spores",
    ],
  },
  "Crimson Moon’s Semblance": {
    id: "Crimson Moon’s Semblance",
    type: "weapon",
    rarity: 5,
    category: "Polearm",
    name: { en: "Crimson Moon’s Semblance", "zh-CN": "赤月之形" },
    materials: [
      "Broken Goblet of the Pristine Sea",
      "Ruined Hilt",
      "Meshing Gear",
    ],
  },
  "Lumidouce Elegy": {
    id: "Lumidouce Elegy",
    type: "weapon",
    rarity: 5,
    category: "Polearm",
    name: { en: "Lumidouce Elegy", "zh-CN": "柔灯挽歌" },
    materials: [
      "Broken Goblet of the Pristine Sea",
      "Ruined Hilt",
      "Whopperflower Nectar",
    ],
  },
  //
  // Newline - polearm 5
  //
  "Mistsplitter Reforged": {
    id: "Mistsplitter Reforged",
    type: "weapon",
    rarity: 5,
    category: "Sword",
    name: { en: ["Mistsplitter Reforged"], "zh-CN": ["雾切之回光"] },
    materials: ["Coral Branch of a Distant Sea", "Chaos Gear", "Old Handguard"],
  },
  "Aquila Favonia": {
    id: "Aquila Favonia",
    type: "weapon",
    rarity: 5,
    category: "Sword",
    name: { en: ["Aquila Favonia"], "zh-CN": ["风鹰剑"] },
    materials: ["Tile of Decarabian’s Tower", "Heavy Horn", "Firm Arrowhead"],
  },
  "Summit Shaper": {
    id: "Summit Shaper",
    type: "weapon",
    rarity: 5,
    category: "Sword",
    name: { en: ["Summit Shaper"], "zh-CN": ["斫峰之刃"] },
    materials: [
      "Luminous Sands from Guyun",
      "Hunter’s Sacrificial Knife",
      "Damaged Mask",
    ],
  },
  "Skyward Blade": {
    id: "Skyward Blade",
    type: "weapon",
    rarity: 5,
    category: "Sword",
    name: { en: ["Skyward Blade"], "zh-CN": ["天空之刃"] },
    materials: [
      "Boreal Wolf’s Milk Tooth",
      "Dead Ley Line Branch",
      "Slime Condensate",
    ],
  },
  "Freedom-Sworn": {
    id: "Freedom-Sworn",
    type: "weapon",
    rarity: 5,
    category: "Sword",
    name: { en: ["Freedom-Sworn"], "zh-CN": ["苍古自由之誓"] },
    materials: [
      "Fetters of the Dandelion Gladiator",
      "Chaos Device",
      "Divining Scroll",
    ],
  },
  "Primordial Jade Cutter": {
    id: "Primordial Jade Cutter",
    type: "weapon",
    rarity: 5,
    category: "Sword",
    name: { en: ["Primordial Jade Cutter"], "zh-CN": ["磐岩结绿"] },
    materials: [
      "Mist Veiled Lead Elixir",
      "Mist Grass Pollen",
      "Treasure Hoarder Insignia",
    ],
  },
  "Haran Geppaku Futsu": {
    id: "Haran Geppaku Futsu",
    type: "weapon",
    rarity: 5,
    category: "Sword",
    name: { en: ["Haran Geppaku Futsu"], "zh-CN": ["波乱月白经津"] },
    materials: ["Narukami’s Wisdom", "Gloomy Statuette", "Old Handguard"],
  },
  "Key of the Khaj-Nisut": {
    id: "Key of the Khaj-Nisut",
    type: "weapon",
    rarity: 5,
    category: "Sword",
    name: { en: ["Key of the Khaj-Nisut"], "zh-CN": ["圣显之钥"] },
    materials: [
      "Copper Talisman of the Forest Dew",
      "Damaged Prism",
      "Faded Red Satin",
    ],
  },
  "Light of Foliar Incision": {
    id: "Light of Foliar Incision",
    type: "weapon",
    rarity: 5,
    category: "Sword",
    name: { en: "Light of Foliar Incision", "zh-CN": "裁叶萃光" },
    materials: [
      "Copper Talisman of the Forest Dew",
      "Desiccated Shell",
      "Faded Red Satin",
    ],
  },
  "Splendor of Tranquil Waters": {
    id: "Splendor of Tranquil Waters",
    type: "weapon",
    rarity: 5,
    category: "Sword",
    name: { en: "Splendor of Tranquil Waters", "zh-CN": "静水流涌之辉" },
    materials: [
      "Dross of Pure Sacred Dewdrop",
      "Drop of Tainted Water",
      "Transoceanic Pearl",
    ],
  },
  "Uraku Mitsugiri": {
    id: "Uraku Mitsugiri",
    type: "weapon",
    rarity: 5,
    category: "Sword",
    name: { en: "Uraku Mitsugiri", "zh-CN": "有乐御簾切" },
    materials: ["Coral Branch of a Distant Sea", "Chaos Gear", "Old Handguard"],
  },
  Absolution: {
    id: "Absolution",
    type: "weapon",
    rarity: 5,
    category: "Sword",
    name: { en: "Absolution", "zh-CN": "赦罪" },
    materials: [
      "Fragment of an Ancient Chord",
      "Old Operative’s Pocket Watch",
      "Meshing Gear",
    ],
  },
  "Peak Patrol Song": {
    id: "Peak Patrol Song",
    type: "weapon",
    rarity: 5,
    category: "Sword",
    name: { en: "Peak Patrol Song", "zh-CN": "岩峰巡歌" },
    materials: [
      "Night-Wind’s Mystic Consideration",
      "Axis of the Secret Source",
      "Juvenile Fang",
    ],
  },
  //
  // Newline - sword 5
  //
  "Alley Hunter": {
    id: "Alley Hunter",
    type: "weapon",
    rarity: 4,
    category: "Bow",
    name: { en: ["Alley Hunter"], "zh-CN": ["暗巷猎手"] },
    materials: [
      "Fetters of the Dandelion Gladiator",
      "Chaos Device",
      "Slime Condensate",
    ],
  },
  "The Viridescent Hunt": {
    id: "The Viridescent Hunt",
    type: "weapon",
    rarity: 4,
    category: "Bow",
    name: { en: ["The Viridescent Hunt"], "zh-CN": ["苍翠猎弓"] },
    materials: ["Tile of Decarabian’s Tower", "Heavy Horn", "Firm Arrowhead"],
  },
  "The Stringless": {
    id: "The Stringless",
    type: "weapon",
    rarity: 4,
    category: "Bow",
    name: { en: ["The Stringless"], "zh-CN": ["绝弦"] },
    materials: ["Tile of Decarabian’s Tower", "Heavy Horn", "Firm Arrowhead"],
  },
  "Sacrificial Bow": {
    id: "Sacrificial Bow",
    type: "weapon",
    rarity: 4,
    category: "Bow",
    name: { en: ["Sacrificial Bow"], "zh-CN": ["祭礼弓"] },
    materials: [
      "Boreal Wolf’s Milk Tooth",
      "Dead Ley Line Branch",
      "Slime Condensate",
    ],
  },
  Rust: {
    id: "Rust",
    type: "weapon",
    rarity: 4,
    category: "Bow",
    name: { en: ["Rust"], "zh-CN": ["弓藏"] },
    materials: [
      "Luminous Sands from Guyun",
      "Hunter’s Sacrificial Knife",
      "Damaged Mask",
    ],
  },
  "Royal Bow": {
    id: "Royal Bow",
    type: "weapon",
    rarity: 4,
    category: "Bow",
    name: { en: ["Royal Bow"], "zh-CN": ["宗室长弓"] },
    materials: [
      "Fetters of the Dandelion Gladiator",
      "Chaos Device",
      "Divining Scroll",
    ],
  },
  Predator: {
    id: "Predator",
    type: "weapon",
    rarity: 4,
    category: "Bow",
    name: { en: ["Predator"], "zh-CN": ["掠食者"] },
    materials: ["Narukami’s Wisdom", "Dismal Prism", "Firm Arrowhead"],
  },
  "Prototype Crescent": {
    id: "Prototype Crescent",
    type: "weapon",
    rarity: 4,
    category: "Bow",
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
  "Mouun’s Moon": {
    id: "Mouun’s Moon",
    type: "weapon",
    rarity: 4,
    category: "Bow",
    name: { en: ["Mouun’s Moon"], "zh-CN": ["曚云之月"] },
    materials: ["Narukami’s Wisdom", "Dismal Prism", "Spectral Husk"],
  },
  "Mitternachts Waltz": {
    id: "Mitternachts Waltz",
    type: "weapon",
    rarity: 4,
    category: "Bow",
    name: { en: ["Mitternachts Waltz"], "zh-CN": ["幽夜华尔兹"] },
    materials: [
      "Tile of Decarabian’s Tower",
      "Heavy Horn",
      "Treasure Hoarder Insignia",
    ],
  },
  Hamayumi: {
    id: "Hamayumi",
    type: "weapon",
    rarity: 4,
    category: "Bow",
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
  "Favonius Warbow": {
    id: "Favonius Warbow",
    type: "weapon",
    rarity: 4,
    category: "Bow",
    name: { en: ["Favonius Warbow"], "zh-CN": ["西风猎弓"] },
    materials: [
      "Fetters of the Dandelion Gladiator",
      "Chaos Device",
      "Whopperflower Nectar",
    ],
  },
  "Compound Bow": {
    id: "Compound Bow",
    type: "weapon",
    rarity: 4,
    category: "Bow",
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
  "Blackcliff Warbow": {
    id: "Blackcliff Warbow",
    type: "weapon",
    rarity: 4,
    category: "Bow",
    name: { en: ["Blackcliff Warbow"], "zh-CN": ["黑岩战弓"] },
    materials: [
      "Luminous Sands from Guyun",
      "Hunter’s Sacrificial Knife",
      "Whopperflower Nectar",
    ],
  },
  "Windblume Ode": {
    id: "Windblume Ode",
    type: "weapon",
    rarity: 4,
    category: "Bow",
    name: { en: ["Windblume Ode"], "zh-CN": ["风花之颂"] },
    materials: [
      "Fetters of the Dandelion Gladiator",
      "Dead Ley Line Branch",
      "Whopperflower Nectar",
    ],
  },
  "Fading Twilight": {
    id: "Fading Twilight",
    type: "weapon",
    rarity: 4,
    category: "Bow",
    name: { en: ["Fading Twilight"], "zh-CN": ["落霞"] },
    materials: [
      "Grain of Aerosiderite",
      "Hunter’s Sacrificial Knife",
      "Divining Scroll",
    ],
  },
  "End of the Line": {
    id: "End of the Line",
    type: "weapon",
    rarity: 4,
    category: "Bow",
    name: { en: ["End of the Line"], "zh-CN": ["竭泽"] },
    materials: [
      "Echo of Scorching Might",
      "Inactivated Fungal Nucleus",
      "Fungal Spores",
      "Peach of the Deep Waves",
      "Lazurite Axe Marlin",
      "Halcyon Jade Axe Marlin",
    ],
  },
  "King’s Squire": {
    id: "King’s Squire",
    type: "weapon",
    rarity: 4,
    category: "Bow",
    name: { en: ["King’s Squire"], "zh-CN": ["王下近侍"] },
    materials: [
      "Echo of Scorching Might",
      "Inactivated Fungal Nucleus",
      "Firm Arrowhead",
      "Midlander Bow Billet",
      "Crystal Chunk",
      "White Iron Chunk",
    ],
  },
  "Ibis Piercer": {
    id: "Ibis Piercer",
    type: "weapon",
    rarity: 4,
    category: "Bow",
    name: { en: ["Ibis Piercer"], "zh-CN": ["鹮穿之喙"] },
    materials: [
      "Copper Talisman of the Forest Dew",
      "A Flower Yet to Bloom",
      "Faded Red Satin",
    ],
  },
  "Scion of the Blazing Sun": {
    id: "Scion of the Blazing Sun",
    type: "weapon",
    rarity: 4,
    category: "Bow",
    name: { en: "Scion of the Blazing Sun", "zh-CN": "烈阳之嗣" },
    materials: [
      "Echo of Scorching Might",
      "A Flower Yet to Bloom",
      "Fungal Spores",
    ],
  },
  "Song of Stillness": {
    id: "Song of Stillness",
    type: "weapon",
    rarity: 4,
    category: "Bow",
    name: { en: "Song of Stillness", "zh-CN": "静谧之曲" },
    materials: [
      "Fragment of an Ancient Chord",
      "Drop of Tainted Water",
      "Firm Arrowhead",
      "Midlander Bow Billet",
      "Condessence Crystal",
      "White Iron Chunk",
    ],
  },
  "Range Gauge": {
    id: "Range Gauge",
    type: "weapon",
    rarity: 4,
    category: "Bow",
    name: { en: "Range Gauge", "zh-CN": "测距规" },
    materials: [
      "Fragment of an Ancient Chord",
      "Drop of Tainted Water",
      "Transoceanic Pearl",
    ],
  },
  Cloudforged: {
    id: "Cloudforged",
    type: "weapon",
    rarity: 4,
    category: "Bow",
    name: { en: "Cloudforged", "zh-CN": "筑云" },
    materials: ["Grain of Aerosiderite", "Ruined Hilt", "Recruit’s Insignia"],
  },
  "Chain Breaker": {
    id: "Chain Breaker",
    type: "weapon",
    rarity: 4,
    category: "Bow",
    name: { en: "Chain Breaker", "zh-CN": "碎链" },
    materials: [
      "Night-Wind’s Mystic Consideration",
      "Feathery Fin",
      "Juvenile Fang",
      "Borderland Bow Billet",
      "Condessence Crystal",
      "White Iron Chunk",
    ],
  },
  "Flower-Wreathed Feathers": {
    id: "Flower-Wreathed Feathers",
    type: "weapon",
    rarity: 4,
    category: "Bow",
    name: { en: "Flower-Wreathed Feathers", "zh-CN": "缀花之翎" },
  },
  //
  // Newline - bow 4
  //
  "Wine and Song": {
    id: "Wine and Song",
    type: "weapon",
    rarity: 4,
    category: "Catalyst",
    name: { en: ["Wine and Song"], "zh-CN": ["暗巷的酒与诗"] },
    materials: [
      "Boreal Wolf’s Milk Tooth",
      "Dead Ley Line Branch",
      "Treasure Hoarder Insignia",
    ],
  },
  "The Widsith": {
    id: "The Widsith",
    type: "weapon",
    rarity: 4,
    category: "Catalyst",
    name: { en: ["The Widsith"], "zh-CN": ["流浪乐章"] },
    materials: [
      "Boreal Wolf’s Milk Tooth",
      "Dead Ley Line Branch",
      "Damaged Mask",
    ],
  },
  "Solar Pearl": {
    id: "Solar Pearl",
    type: "weapon",
    rarity: 4,
    category: "Catalyst",
    name: { en: ["Solar Pearl"], "zh-CN": ["匣里日月"] },
    materials: [
      "Luminous Sands from Guyun",
      "Hunter’s Sacrificial Knife",
      "Whopperflower Nectar",
    ],
  },
  "Sacrificial Fragments": {
    id: "Sacrificial Fragments",
    type: "weapon",
    rarity: 4,
    category: "Catalyst",
    name: { en: ["Sacrificial Fragments"], "zh-CN": ["祭礼残章"] },
    materials: [
      "Fetters of the Dandelion Gladiator",
      "Chaos Device",
      "Treasure Hoarder Insignia",
    ],
  },
  "Royal Grimoire": {
    id: "Royal Grimoire",
    type: "weapon",
    rarity: 4,
    category: "Catalyst",
    name: { en: ["Royal Grimoire"], "zh-CN": ["宗室秘法录"] },
    materials: [
      "Tile of Decarabian’s Tower",
      "Heavy Horn",
      "Recruit’s Insignia",
    ],
  },
  "Prototype Amber": {
    id: "Prototype Amber",
    type: "weapon",
    rarity: 4,
    category: "Catalyst",
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
  "Mappa Mare": {
    id: "Mappa Mare",
    type: "weapon",
    rarity: 4,
    category: "Catalyst",
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
  "Hakushin Ring": {
    id: "Hakushin Ring",
    type: "weapon",
    rarity: 4,
    category: "Catalyst",
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
  Frostbearer: {
    id: "Frostbearer",
    type: "weapon",
    rarity: 4,
    category: "Catalyst",
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
  "Favonius Codex": {
    id: "Favonius Codex",
    type: "weapon",
    rarity: 4,
    category: "Catalyst",
    name: { en: ["Favonius Codex"], "zh-CN": ["西风秘典"] },
    materials: ["Tile of Decarabian’s Tower", "Heavy Horn", "Divining Scroll"],
  },
  "Eye of Perception": {
    id: "Eye of Perception",
    type: "weapon",
    rarity: 4,
    category: "Catalyst",
    name: { en: ["Eye of Perception"], "zh-CN": ["昭心"] },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Damaged Mask"],
  },
  "Dodoco Tales": {
    id: "Dodoco Tales",
    type: "weapon",
    rarity: 4,
    category: "Catalyst",
    name: { en: ["Dodoco Tales"], "zh-CN": ["嘟嘟可故事集"] },
    materials: [
      "Boreal Wolf’s Milk Tooth",
      "Dead Ley Line Branch",
      "Damaged Mask",
    ],
  },
  "Blackcliff Agate": {
    id: "Blackcliff Agate",
    type: "weapon",
    rarity: 4,
    category: "Catalyst",
    name: { en: ["Blackcliff Agate"], "zh-CN": ["黑岩绯玉"] },
    materials: [
      "Luminous Sands from Guyun",
      "Hunter’s Sacrificial Knife",
      "Divining Scroll",
    ],
  },
  "Oathsworn Eye": {
    id: "Oathsworn Eye",
    type: "weapon",
    rarity: 4,
    category: "Catalyst",
    name: { en: ["Oathsworn Eye"], "zh-CN": ["证誓之明瞳"] },
    materials: [
      "Coral Branch of a Distant Sea",
      "Concealed Claw",
      "Spectral Husk",
    ],
  },
  "Fruit of Fulfillment": {
    id: "Fruit of Fulfillment",
    type: "weapon",
    rarity: 4,
    category: "Catalyst",
    name: { en: ["Fruit of Fulfillment"], "zh-CN": ["盈满之实"] },
    materials: [
      "Oasis Garden’s Reminiscence",
      "Gloomy Statuette",
      "Fungal Spores",
      "Midlander Catalyst Billet",
      "Crystal Chunk",
      "White Iron Chunk",
    ],
  },
  "Wandering Evenstar": {
    id: "Wandering Evenstar",
    type: "weapon",
    rarity: 4,
    category: "Catalyst",
    name: { en: ["Wandering Evenstar"], "zh-CN": ["流浪的晚星"] },
    materials: [
      "Oasis Garden’s Reminiscence",
      "Inactivated Fungal Nucleus",
      "Fungal Spores",
    ],
  },
  "Sacrificial Jade": {
    id: "Sacrificial Jade",
    type: "weapon",
    rarity: 4,
    category: "Catalyst",
    name: { en: "Sacrificial Jade", "zh-CN": "遗祀玉珑" },
    materials: [
      "Luminous Sands from Guyun",
      "Mist Grass Pollen",
      "Divining Scroll",
    ],
  },
  "Flowing Purity": {
    id: "Flowing Purity",
    type: "weapon",
    rarity: 4,
    category: "Catalyst",
    name: { en: "Flowing Purity", "zh-CN": "纯水流华" },
    materials: [
      "Dross of Pure Sacred Dewdrop",
      "Rift Core",
      "Transoceanic Pearl",
      "Midlander Catalyst Billet",
      "Condessence Crystal",
      "White Iron Chunk",
    ],
  },
  "Ballad of the Boundless Blue": {
    id: "Ballad of the Boundless Blue",
    type: "weapon",
    rarity: 4,
    category: "Catalyst",
    name: { en: "Ballad of the Boundless Blue", "zh-CN": "无垠蔚蓝之歌" },
    materials: [
      "Boreal Wolf’s Milk Tooth",
      "Fragile Bone Shard",
      "Treasure Hoarder Insignia",
    ],
  },
  "Ring of Yaxche": {
    id: "Ring of Yaxche",
    type: "weapon",
    rarity: 4,
    category: "Catalyst",
    name: { en: "Ring of Yaxche", "zh-CN": "木棉之环" },
    materials: [
      "Delirious Decadence of the Sacred Lord",
      "Shard of a Shattered Will",
      "Damaged Mask",
      "Borderland Catalyst Billet",
      "Condessence Crystal",
      "White Iron Chunk",
    ],
  },
  "Ash-Graven Drinking Horn": {
    id: "Ash-Graven Drinking Horn",
    type: "weapon",
    rarity: 4,
    category: "Catalyst",
    name: { en: "Ash-Graven Drinking Horn", "zh-CN": "苍纹角杯" },
    materials: [
      "Night-Wind’s Mystic Consideration",
      "Axis of the Secret Source",
      "Juvenile Fang",
    ],
  },
  "Waveriding Whirl": {
    id: "Waveriding Whirl",
    type: "weapon",
    rarity: 4,
    category: "Catalyst",
    name: { en: "Waveriding Whirl", "zh-CN": "乘浪的回旋" },
  },
  //
  // Newline catalyst 4
  //
  Akuoumaru: {
    id: "Akuoumaru",
    type: "weapon",
    rarity: 4,
    category: "Claymore",
    name: { en: ["Akuoumaru"], "zh-CN": ["恶王丸"] },
    materials: [
      "Coral Branch of a Distant Sea",
      "Concealed Claw",
      "Old Handguard",
    ],
  },
  "Royal Greatsword": {
    id: "Royal Greatsword",
    type: "weapon",
    rarity: 4,
    category: "Claymore",
    name: { en: ["Royal Greatsword"], "zh-CN": ["宗室大剑"] },
    materials: [
      "Fetters of the Dandelion Gladiator",
      "Chaos Device",
      "Slime Condensate",
    ],
  },
  Whiteblind: {
    id: "Whiteblind",
    type: "weapon",
    rarity: 4,
    category: "Claymore",
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
  "The Bell": {
    id: "The Bell",
    type: "weapon",
    rarity: 4,
    category: "Claymore",
    name: { en: ["The Bell"], "zh-CN": ["钟剑"] },
    materials: [
      "Tile of Decarabian’s Tower",
      "Heavy Horn",
      "Whopperflower Nectar",
    ],
  },
  "Snow-Tombed Starsilver": {
    id: "Snow-Tombed Starsilver",
    type: "weapon",
    rarity: 4,
    category: "Claymore",
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
  "Favonius Greatsword": {
    id: "Favonius Greatsword",
    type: "weapon",
    rarity: 4,
    category: "Claymore",
    name: { en: ["Favonius Greatsword"], "zh-CN": ["西风大剑"] },
    materials: [
      "Fetters of the Dandelion Gladiator",
      "Chaos Device",
      "Recruit’s Insignia",
    ],
  },
  "Katsuragikiri Nagamasa": {
    id: "Katsuragikiri Nagamasa",
    type: "weapon",
    rarity: 4,
    category: "Claymore",
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
  "Sacrificial Greatsword": {
    id: "Sacrificial Greatsword",
    type: "weapon",
    rarity: 4,
    category: "Claymore",
    name: { en: ["Sacrificial Greatsword"], "zh-CN": ["祭礼大剑"] },
    materials: [
      "Boreal Wolf’s Milk Tooth",
      "Dead Ley Line Branch",
      "Firm Arrowhead",
    ],
  },
  "Serpent Spine": {
    id: "Serpent Spine",
    type: "weapon",
    rarity: 4,
    category: "Claymore",
    name: { en: ["Serpent Spine"], "zh-CN": ["螭骨剑"] },
    materials: [
      "Grain of Aerosiderite",
      "Fragile Bone Shard",
      "Whopperflower Nectar",
    ],
  },
  "Blackcliff Slasher": {
    id: "Blackcliff Slasher",
    type: "weapon",
    rarity: 4,
    category: "Claymore",
    name: { en: ["Blackcliff Slasher"], "zh-CN": ["黑岩斩刀"] },
    materials: [
      "Mist Veiled Lead Elixir",
      "Mist Grass Pollen",
      "Recruit’s Insignia",
    ],
  },
  Rainslasher: {
    id: "Rainslasher",
    type: "weapon",
    rarity: 4,
    category: "Claymore",
    name: { en: ["Rainslasher"], "zh-CN": ["雨裁"] },
    materials: [
      "Mist Veiled Lead Elixir",
      "Mist Grass Pollen",
      "Divining Scroll",
    ],
  },
  "Prototype Archaic": {
    id: "Prototype Archaic",
    type: "weapon",
    rarity: 4,
    category: "Claymore",
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
  "Luxurious Sea-Lord": {
    id: "Luxurious Sea-Lord",
    type: "weapon",
    rarity: 4,
    category: "Claymore",
    name: { en: ["Luxurious Sea-Lord"], "zh-CN": ["衔珠海皇"] },
    materials: [
      "Grain of Aerosiderite",
      "Fragile Bone Shard",
      "Slime Condensate",
    ],
  },
  "Lithic Blade": {
    id: "Lithic Blade",
    type: "weapon",
    rarity: 4,
    category: "Claymore",
    name: { en: ["Lithic Blade"], "zh-CN": ["千岩古剑"] },
    materials: [
      "Luminous Sands from Guyun",
      "Hunter’s Sacrificial Knife",
      "Firm Arrowhead",
    ],
  },
  "Forest Regalia": {
    id: "Forest Regalia",
    type: "weapon",
    rarity: 4,
    category: "Claymore",
    name: { en: ["Forest Regalia"], "zh-CN": ["森林王器"] },
    materials: [
      "Copper Talisman of the Forest Dew",
      "Chaos Storage",
      "Faded Red Satin",
      "Midlander Claymore Billet",
      "Crystal Chunk",
      "White Iron Chunk",
    ],
  },
  "Makhaira Aquamarine": {
    id: "Makhaira Aquamarine",
    type: "weapon",
    rarity: 4,
    category: "Claymore",
    name: { en: ["Makhaira Aquamarine"], "zh-CN": ["玛海菈的水色"] },
    materials: [
      "Echo of Scorching Might",
      "Chaos Storage",
      "Treasure Hoarder Insignia",
    ],
  },
  "Mailed Flower": {
    id: "Mailed Flower",
    type: "weapon",
    rarity: 4,
    category: "Claymore",
    name: { en: "Mailed Flower", "zh-CN": "饰铁之花" },
    materials: [
      "Fetters of the Dandelion Gladiator",
      "Desiccated Shell",
      "Spectral Husk",
    ],
  },
  "Talking Stick": {
    id: "Talking Stick",
    type: "weapon",
    rarity: 4,
    category: "Claymore",
    name: { en: "Talking Stick", "zh-CN": "聊聊棒" },
    materials: [
      "Oasis Garden’s Reminiscence",
      "Desiccated Shell",
      "Slime Condensate",
    ],
  },
  "Tidal Shadow": {
    id: "Tidal Shadow",
    type: "weapon",
    rarity: 4,
    category: "Claymore",
    name: { en: "Tidal Shadow", "zh-CN": "浪影阔剑" },
    materials: [
      "Broken Goblet of the Pristine Sea",
      "Rift Core",
      "Meshing Gear",
      "Midlander Claymore Billet",
      "Condessence Crystal",
      "White Iron Chunk",
    ],
  },
  "Portable Power Saw": {
    id: "Portable Power Saw",
    type: "weapon",
    rarity: 4,
    category: "Claymore",
    name: { en: "Portable Power Saw", "zh-CN": "便携动力锯" },
    materials: [
      "Broken Goblet of the Pristine Sea",
      "Rift Core",
      "Meshing Gear",
    ],
  },
  "Ultimate Overlord’s Mega Magic Sword": {
    id: "Ultimate Overlord’s Mega Magic Sword",
    type: "weapon",
    rarity: 4,
    category: "Claymore",
    name: {
      en: "Ultimate Overlord’s Mega Magic Sword",
      "zh-CN": "「究极霸王超级魔剑」",
    },
    materials: [
      "Broken Goblet of the Pristine Sea",
      "Old Operative’s Pocket Watch",
      "Meshing Gear",
    ],
  },
  "Earth Shaker": {
    id: "Earth Shaker",
    type: "weapon",
    rarity: 4,
    category: "Claymore",
    name: { en: "Earth Shaker", "zh-CN": "撼地者" },
    materials: [
      "Blazing Sacrificial Heart’s Terror",
      "Ignited Stone",
      "Sentry’s Wooden Whistle",
      "Borderland Claymore Billet",
      "Condessence Crystal",
      "White Iron Chunk",
    ],
  },
  "Fruitful Hook": {
    id: "Fruitful Hook",
    type: "weapon",
    rarity: 4,
    category: "Claymore",
    name: { en: "Fruitful Hook", "zh-CN": "硕果钩" },
    materials: [
      "Night-Wind’s Mystic Consideration",
      "Axis of the Secret Source",
      "Juvenile Fang",
    ],
  },
  //
  // Newline - claymore 4
  //
  "Prototype Starglitter": {
    id: "Prototype Starglitter",
    type: "weapon",
    rarity: 4,
    category: "Polearm",
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
  "Lithic Spear": {
    id: "Lithic Spear",
    type: "weapon",
    rarity: 4,
    category: "Polearm",
    name: { en: ["Lithic Spear"], "zh-CN": ["千岩长枪"] },
    materials: [
      "Grain of Aerosiderite",
      "Fragile Bone Shard",
      "Firm Arrowhead",
    ],
  },
  "Kitain Cross Spear": {
    id: "Kitain Cross Spear",
    type: "weapon",
    rarity: 4,
    category: "Polearm",
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
  "“The Catch”": {
    id: "“The Catch”",
    type: "weapon",
    rarity: 4,
    category: "Polearm",
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
  "Favonius Lance": {
    id: "Favonius Lance",
    type: "weapon",
    rarity: 4,
    category: "Polearm",
    name: { en: ["Favonius Lance"], "zh-CN": ["西风长枪"] },
    materials: [
      "Fetters of the Dandelion Gladiator",
      "Chaos Device",
      "Slime Condensate",
    ],
  },
  "Dragonspine Spear": {
    id: "Dragonspine Spear",
    type: "weapon",
    rarity: 4,
    category: "Polearm",
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
  "Dragon’s Bane": {
    id: "Dragon’s Bane",
    type: "weapon",
    rarity: 4,
    category: "Polearm",
    name: { en: ["Dragon’s Bane"], "zh-CN": ["匣里灭辰"] },
    materials: [
      "Mist Veiled Lead Elixir",
      "Mist Grass Pollen",
      "Divining Scroll",
    ],
  },
  Deathmatch: {
    id: "Deathmatch",
    type: "weapon",
    rarity: 4,
    category: "Polearm",
    name: { en: ["Deathmatch"], "zh-CN": ["决斗之枪"] },
    materials: [
      "Boreal Wolf’s Milk Tooth",
      "Dead Ley Line Branch",
      "Whopperflower Nectar",
    ],
  },
  "Crescent Pike": {
    id: "Crescent Pike",
    type: "weapon",
    rarity: 4,
    category: "Polearm",
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
  "Blackcliff Pole": {
    id: "Blackcliff Pole",
    type: "weapon",
    rarity: 4,
    category: "Polearm",
    name: { en: ["Blackcliff Pole"], "zh-CN": ["黑岩刺枪"] },
    materials: [
      "Mist Veiled Lead Elixir",
      "Mist Grass Pollen",
      "Recruit’s Insignia",
    ],
  },
  "Wavebreaker’s Fin": {
    id: "Wavebreaker’s Fin",
    type: "weapon",
    rarity: 4,
    category: "Polearm",
    name: { en: ["Wavebreaker’s Fin"], "zh-CN": ["断浪长鳍"] },
    materials: [
      "Mask of the Wicked Lieutenant",
      "Concealed Claw",
      "Old Handguard",
    ],
  },
  "Royal Spear": {
    id: "Royal Spear",
    type: "weapon",
    rarity: 4,
    category: "Polearm",
    name: { en: ["Royal Spear"], "zh-CN": ["宗室猎枪"] },
    materials: [
      "Mist Veiled Lead Elixir",
      "Mist Grass Pollen",
      "Recruit’s Insignia",
    ],
  },
  Moonpiercer: {
    id: "Moonpiercer",
    type: "weapon",
    rarity: 4,
    category: "Polearm",
    name: { en: ["Moonpiercer"], "zh-CN": ["贯月矢"] },
    materials: [
      "Oasis Garden’s Reminiscence",
      "Chaos Storage",
      "Recruit’s Insignia",
      "Midlander Polearm Billet",
      "Crystal Chunk",
      "White Iron Chunk",
    ],
  },
  "Missive Windspear": {
    id: "Missive Windspear",
    type: "weapon",
    rarity: 4,
    category: "Polearm",
    name: { en: ["Missive Windspear"], "zh-CN": ["风信之锋"] },
    materials: [
      "Boreal Wolf’s Milk Tooth",
      "Gloomy Statuette",
      "Slime Condensate",
    ],
  },
  "Ballard of the Fjords": {
    id: "Ballard of the Fjords",
    type: "weapon",
    rarity: 4,
    category: "Polearm",
    name: { en: "Ballard of the Fjords", "zh-CN": "峡湾长歌" },
    materials: [
      "Broken Goblet of the Pristine Sea",
      "A Flower Yet to Bloom",
      "Whopperflower Nectar",
    ],
  },
  "Rightful Reward": {
    id: "Rightful Reward",
    type: "weapon",
    rarity: 4,
    category: "Polearm",
    name: { en: "Rightful Reward", "zh-CN": "公义的酬报" },
    materials: [
      "Broken Goblet of the Pristine Sea",
      "Rift Core",
      "Meshing Gear",
      "Midlander Polearm Billet",
      "Condessence Crystal",
      "White Iron Chunk",
    ],
  },
  "Prospector’s Drill": {
    id: "Prospector’s Drill",
    type: "weapon",
    rarity: 4,
    category: "Polearm",
    name: { en: "Prospector’s Drill", "zh-CN": "勘探钻机" },
    materials: [
      "Fragment of an Ancient Chord",
      "Old Operative’s Pocket Watch",
      "Meshing Gear",
    ],
  },
  "Dialogues of the Desert Sages": {
    id: "Dialogues of the Desert Sages",
    type: "weapon",
    rarity: 4,
    category: "Polearm",
    name: { en: "Dialogues of the Desert Sages", "zh-CN": "沙中伟贤的对答" },
    materials: [
      "Copper Talisman of the Forest Dew",
      "Feathery Fin",
      "Spectral Husk",
    ],
  },
  "Footprint of the Rainbow": {
    id: "Footprint of the Rainbow",
    type: "weapon",
    rarity: 4,
    category: "Polearm",
    name: { en: "Footprint of the Rainbow", "zh-CN": "虹的行迹" },
    materials: [
      "Delirious Decadence of the Sacred Lord",
      "Axis of the Secret Source",
      "Sentry’s Wooden Whistle",
      "Borderland Polearm Billet",
      "Condessence Crystal",
      "White Iron Chunk",
    ],
  },
  "Mountain-Bracing Bolt": {
    id: "Mountain-Bracing Bolt",
    type: "weapon",
    rarity: 4,
    category: "Polearm",
    name: { en: "Mountain-Bracing Bolt", "zh-CN": "镇山之钉" },
    materials: [
      "Delirious Decadence of the Sacred Lord",
      "Ignited Stone",
      "Whopperflower Nectar",
    ],
  },
  //
  // Newline - polearm 4
  //
  "The Flute": {
    id: "The Flute",
    type: "weapon",
    rarity: 4,
    category: "Sword",
    name: { en: ["The Flute"], "zh-CN": ["笛剑"] },
    materials: [
      "Boreal Wolf’s Milk Tooth",
      "Dead Ley Line Branch",
      "Slime Condensate",
    ],
  },
  "The Black Sword": {
    id: "The Black Sword",
    type: "weapon",
    rarity: 4,
    category: "Sword",
    name: { en: ["The Black Sword"], "zh-CN": ["黑剑"] },
    materials: [
      "Boreal Wolf’s Milk Tooth",
      "Dead Ley Line Branch",
      "Slime Condensate",
    ],
  },
  "The Alley Flash": {
    id: "The Alley Flash",
    type: "weapon",
    rarity: 4,
    category: "Sword",
    name: { en: ["The Alley Flash"], "zh-CN": ["暗巷闪光"] },
    materials: ["Tile of Decarabian’s Tower", "Heavy Horn", "Divining Scroll"],
  },
  "Sword of Descension": {
    id: "Sword of Descension",
    type: "weapon",
    rarity: 4,
    category: "Sword",
    name: { en: ["Sword of Descension"], "zh-CN": ["降临之剑"] },
    materials: [
      "Boreal Wolf’s Milk Tooth",
      "Dead Ley Line Branch",
      "Treasure Hoarder Insignia",
    ],
  },
  "Sacrificial Sword": {
    id: "Sacrificial Sword",
    type: "weapon",
    rarity: 4,
    category: "Sword",
    name: { en: ["Sacrificial Sword"], "zh-CN": ["祭礼剑"] },
    materials: [
      "Fetters of the Dandelion Gladiator",
      "Chaos Device",
      "Divining Scroll",
    ],
  },
  "Royal Longsword": {
    id: "Royal Longsword",
    type: "weapon",
    rarity: 4,
    category: "Sword",
    name: { en: ["Royal Longsword"], "zh-CN": ["宗室长剑"] },
    materials: ["Tile of Decarabian’s Tower", "Heavy Horn", "Damaged Mask"],
  },
  "Prototype Rancour": {
    id: "Prototype Rancour",
    type: "weapon",
    rarity: 4,
    category: "Sword",
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
  "Amenoma Kageuchi": {
    id: "Amenoma Kageuchi",
    type: "weapon",
    rarity: 4,
    category: "Sword",
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
  "Lion’s Roar": {
    id: "Lion’s Roar",
    type: "weapon",
    rarity: 4,
    category: "Sword",
    name: { en: ["Lion’s Roar"], "zh-CN": ["匣里龙吟"] },
    materials: [
      "Luminous Sands from Guyun",
      "Hunter’s Sacrificial Knife",
      "Treasure Hoarder Insignia",
    ],
  },
  "Iron Sting": {
    id: "Iron Sting",
    type: "weapon",
    rarity: 4,
    category: "Sword",
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
  "Festering Desire": {
    id: "Festering Desire",
    type: "weapon",
    rarity: 4,
    category: "Sword",
    name: { en: ["Festering Desire"], "zh-CN": ["腐殖之剑"] },
    materials: [
      "Fetters of the Dandelion Gladiator",
      "Heavy Horn",
      "Recruit’s Insignia",
    ],
  },
  "Favonius Sword": {
    id: "Favonius Sword",
    type: "weapon",
    rarity: 4,
    category: "Sword",
    name: { en: ["Favonius Sword"], "zh-CN": ["西风剑"] },
    materials: ["Tile of Decarabian’s Tower", "Heavy Horn", "Firm Arrowhead"],
  },
  "Cinnabar Spindle": {
    id: "Cinnabar Spindle",
    type: "weapon",
    rarity: 4,
    category: "Sword",
    name: { en: ["Cinnabar Spindle"], "zh-CN": ["辰砂之纺锤"] },
    materials: ["Tile of Decarabian’s Tower", "Chaos Device", "Damaged Mask"],
  },
  "Blackcliff Longsword": {
    id: "Blackcliff Longsword",
    type: "weapon",
    rarity: 4,
    category: "Sword",
    name: { en: ["Blackcliff Longsword"], "zh-CN": ["黑岩长剑"] },
    materials: [
      "Luminous Sands from Guyun",
      "Hunter’s Sacrificial Knife",
      "Firm Arrowhead",
    ],
  },
  "Kagotsurube Isshin": {
    id: "Kagotsurube Isshin",
    type: "weapon",
    rarity: 4,
    category: "Sword",
    name: { en: ["Kagotsurube Isshin"], "zh-CN": ["笼钓瓶一心"] },
    materials: [
      "Mask of the Wicked Lieutenant",
      "Gloomy Statuette",
      "Spectral Husk",
    ],
  },
  "Sapwood Blade": {
    id: "Sapwood Blade",
    type: "weapon",
    rarity: 4,
    category: "Sword",
    name: { en: ["Sapwood Blade"], "zh-CN": ["原木刀"] },
    materials: [
      "Copper Talisman of the Forest Dew",
      "Chaos Storage",
      "Faded Red Satin",
      "Midlander Sword Billet",
      "Crystal Chunk",
      "White Iron Chunk",
    ],
  },
  "Xiphos’ Moonlight": {
    id: "Xiphos’ Moonlight",
    type: "weapon",
    rarity: 4,
    category: "Sword",
    name: { en: ["Xiphos’ Moonlight"], "zh-CN": ["西福斯的月光"] },
    materials: [
      "Copper Talisman of the Forest Dew",
      "Damaged Prism",
      "Faded Red Satin",
    ],
  },
  "Toukabou Shigure": {
    id: "Toukabou Shigure",
    type: "weapon",
    rarity: 4,
    category: "Sword",
    name: { en: "Toukabou Shigure", "zh-CN": "东花坊时雨" },
    materials: ["Narukami’s Wisdom", "Damaged Prism", "Old Handguard"],
  },
  "Fleuve Cendre Ferryman": {
    id: "Fleuve Cendre Ferryman",
    type: "weapon",
    rarity: 4,
    category: "Sword",
    name: { en: "Fleuve Cendre Ferryman", "zh-CN": "灰河渡手" },
    materials: [
      "Fragment of an Ancient Chord",
      "Drop of Tainted Water",
      "Transoceanic Pearl",
      "Maintenance Mek: Platinum Collection",
      "Rippling Heartfeather Bass",
      "Blazing Heartfeather Bass",
      "Streaming Axe Marlin",
    ],
  },
  "Wolf-Fang": {
    id: "Wolf-Fang",
    type: "weapon",
    rarity: 4,
    category: "Sword",
    name: { en: "Wolf-Fang", "zh-CN": "狼牙" },
    materials: ["Tile of Decarabian’s Tower", "Chaos Device", "Damaged Mask"],
  },
  "Finale of the Deep": {
    id: "Finale of the Deep",
    type: "weapon",
    rarity: 4,
    category: "Sword",
    name: { en: "Finale of the Deep", "zh-CN": "海渊终曲" },
    materials: [
      "Dross of Pure Sacred Dewdrop",
      "Drop of Tainted Water",
      "Old Handguard",
      "Midlander Sword Billet",
      "Condessence Crystal",
      "White Iron Chunk",
    ],
  },
  "The Dockhand’s Assistant": {
    id: "The Dockhand’s Assistant",
    type: "weapon",
    rarity: 4,
    category: "Sword",
    name: { en: "The Dockhand’s Assistant", "zh-CN": "船坞长剑" },
    materials: [
      "Dross of Pure Sacred Dewdrop",
      "Old Operative’s Pocket Watch",
      "Transoceanic Pearl",
    ],
  },
  "Sword of Narzissenkreuz": {
    id: "Sword of Narzissenkreuz",
    type: "weapon",
    rarity: 4,
    category: "Sword",
    name: { en: "Sword of Narzissenkreuz", "zh-CN": "水仙十字之剑" },
    materials: [
      "Fragment of an Ancient Chord",
      "Old Operative’s Pocket Watch",
      "Transoceanic Pearl",
    ],
  },
  "Flute of Ezpitzal": {
    id: "Flute of Ezpitzal",
    type: "weapon",
    rarity: 4,
    category: "Sword",
    name: { en: "Flute of Ezpitzal", "zh-CN": "息燧之笛" },
    materials: [
      "Blazing Sacrificial Heart’s Terror",
      "Ruined Hilt",
      "Juvenile Fang",
      "Borderland Sword Billet",
      "Condessence Crystal",
      "White Iron Chunk",
    ],
  },
  "Sturdy Bone": {
    id: "Sturdy Bone",
    type: "weapon",
    rarity: 4,
    category: "Sword",
    name: { en: "Sturdy Bone", "zh-CN": "弥坚骨" },
    materials: [
      "Blazing Sacrificial Heart’s Terror",
      "Shard of a Shattered Will",
      "Sentry’s Wooden Whistle",
    ],
  },
  "Calamity of Eshu": {
    id: "Calamity of Eshu",
    type: "weapon",
    rarity: 4,
    category: "Sword",
    name: { en: "Calamity of Eshu", "zh-CN": "厄水之祸" },
  },
  //
  // Newline - sword 4
  //
  "Raven Bow": {
    id: "Raven Bow",
    type: "weapon",
    rarity: 3,
    category: "Bow",
    name: { en: ["Raven Bow"], "zh-CN": ["鸦羽弓"] },
    materials: ["Tile of Decarabian’s Tower", "Heavy Horn", "Firm Arrowhead"],
  },
  "Recurve Bow": {
    id: "Recurve Bow",
    type: "weapon",
    rarity: 3,
    category: "Bow",
    name: { en: ["Recurve Bow"], "zh-CN": ["反曲弓"] },
    materials: [
      "Fetters of the Dandelion Gladiator",
      "Chaos Device",
      "Divining Scroll",
    ],
  },
  Messenger: {
    id: "Messenger",
    type: "weapon",
    rarity: 3,
    category: "Bow",
    name: { en: ["Messenger"], "zh-CN": ["信使"] },
    materials: [
      "Mist Veiled Lead Elixir",
      "Mist Grass Pollen",
      "Treasure Hoarder Insignia",
    ],
  },
  "Sharpshooter’s Oath": {
    id: "Sharpshooter’s Oath",
    type: "weapon",
    rarity: 3,
    category: "Bow",
    name: { en: ["Sharpshooter’s Oath"], "zh-CN": ["神射手之誓"] },
    materials: [
      "Boreal Wolf’s Milk Tooth",
      "Dead Ley Line Branch",
      "Slime Condensate",
    ],
  },
  Slingshot: {
    id: "Slingshot",
    type: "weapon",
    rarity: 3,
    category: "Bow",
    name: { en: ["Slingshot"], "zh-CN": ["弹弓"] },
    materials: [
      "Luminous Sands from Guyun",
      "Hunter’s Sacrificial Knife",
      "Damaged Mask",
    ],
  },
  "Magic Guide": {
    id: "Magic Guide",
    type: "weapon",
    rarity: 3,
    category: "Catalyst",
    name: { en: ["Magic Guide"], "zh-CN": ["魔导绪论"] },
    materials: ["Tile of Decarabian’s Tower", "Heavy Horn", "Slime Condensate"],
  },
  "Otherworldly Story": {
    id: "Otherworldly Story",
    type: "weapon",
    rarity: 3,
    category: "Catalyst",
    name: { en: ["Otherworldly Story"], "zh-CN": ["异世界行记"] },
    materials: [
      "Fetters of the Dandelion Gladiator",
      "Chaos Device",
      "Damaged Mask",
    ],
  },
  "Emerald Orb": {
    id: "Emerald Orb",
    type: "weapon",
    rarity: 3,
    category: "Catalyst",
    name: { en: ["Emerald Orb"], "zh-CN": ["翡玉法球"] },
    materials: [
      "Luminous Sands from Guyun",
      "Hunter’s Sacrificial Knife",
      "Treasure Hoarder Insignia",
    ],
  },
  "Thrilling Tales of Dragon Slayers": {
    id: "Thrilling Tales of Dragon Slayers",
    type: "weapon",
    rarity: 3,
    category: "Catalyst",
    name: {
      en: ["Thrilling Tales of Dragon Slayers"],
      "zh-CN": ["讨龙英杰谭"],
    },
    materials: [
      "Boreal Wolf’s Milk Tooth",
      "Dead Ley Line Branch",
      "Divining Scroll",
    ],
  },
  "Twin Nephrite": {
    id: "Twin Nephrite",
    type: "weapon",
    rarity: 3,
    category: "Catalyst",
    name: { en: ["Twin Nephrite"], "zh-CN": ["甲级宝珏"] },
    materials: [
      "Mist Veiled Lead Elixir",
      "Mist Grass Pollen",
      "Recruit’s Insignia",
    ],
  },
  "Skyrider Greatsword": {
    id: "Skyrider Greatsword",
    type: "weapon",
    rarity: 3,
    category: "Claymore",
    name: { en: ["Skyrider Greatsword"], "zh-CN": ["飞天大御剑"] },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Damaged Mask"],
  },
  "Debate Club": {
    id: "Debate Club",
    type: "weapon",
    rarity: 3,
    category: "Claymore",
    name: { en: ["Debate Club"], "zh-CN": ["以理服人"] },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Damaged Mask"],
  },
  "Bloodtainted Greatsword": {
    id: "Bloodtainted Greatsword",
    type: "weapon",
    rarity: 3,
    category: "Claymore",
    name: { en: ["Bloodtainted Greatsword"], "zh-CN": ["沐浴龙血的剑"] },
    materials: [
      "Boreal Wolf’s Milk Tooth",
      "Dead Ley Line Branch",
      "Firm Arrowhead",
    ],
  },
  "White Iron Greatsword": {
    id: "White Iron Greatsword",
    type: "weapon",
    rarity: 3,
    category: "Claymore",
    name: { en: ["White Iron Greatsword"], "zh-CN": ["白铁大剑"] },
    materials: [
      "Fetters of the Dandelion Gladiator",
      "Chaos Device",
      "Slime Condensate",
    ],
  },
  "Ferrous Shadow": {
    id: "Ferrous Shadow",
    type: "weapon",
    rarity: 3,
    category: "Claymore",
    name: { en: ["Ferrous Shadow"], "zh-CN": ["铁影阔剑"] },
    materials: [
      "Tile of Decarabian’s Tower",
      "Heavy Horn",
      "Whopperflower Nectar",
    ],
  },
  Halberd: {
    id: "Halberd",
    type: "weapon",
    rarity: 3,
    category: "Polearm",
    name: { en: ["Halberd"], "zh-CN": ["钺矛"] },
    materials: [
      "Mist Veiled Lead Elixir",
      "Mist Grass Pollen",
      "Whopperflower Nectar",
    ],
  },
  "Black Tassel": {
    id: "Black Tassel",
    type: "weapon",
    rarity: 3,
    category: "Polearm",
    name: { en: ["Black Tassel"], "zh-CN": ["黑缨枪"] },
    materials: [
      "Grain of Aerosiderite",
      "Fragile Bone Shard",
      "Firm Arrowhead",
    ],
  },
  "White Tassel": {
    id: "White Tassel",
    type: "weapon",
    rarity: 3,
    category: "Polearm",
    name: { en: ["White Tassel"], "zh-CN": ["白缨枪"] },
    materials: [
      "Luminous Sands from Guyun",
      "Hunter’s Sacrificial Knife",
      "Recruit’s Insignia",
    ],
  },
  "Harbinger of Dawn": {
    id: "Harbinger of Dawn",
    type: "weapon",
    rarity: 3,
    category: "Sword",
    name: { en: ["Harbinger of Dawn"], "zh-CN": ["黎明神剑"] },
    materials: [
      "Boreal Wolf’s Milk Tooth",
      "Dead Ley Line Branch",
      "Slime Condensate",
    ],
  },
  "Fillet Blade": {
    id: "Fillet Blade",
    type: "weapon",
    rarity: 3,
    category: "Sword",
    name: { en: ["Fillet Blade"], "zh-CN": ["吃虎鱼刀"] },
    materials: [
      "Mist Veiled Lead Elixir",
      "Mist Grass Pollen",
      "Treasure Hoarder Insignia",
    ],
  },
  "Skyrider Sword": {
    id: "Skyrider Sword",
    type: "weapon",
    rarity: 3,
    category: "Sword",
    name: { en: ["Skyrider Sword"], "zh-CN": ["飞天御剑"] },
    materials: [
      "Grain of Aerosiderite",
      "Fragile Bone Shard",
      "Recruit’s Insignia",
    ],
  },
  "Dark Iron Sword": {
    id: "Dark Iron Sword",
    type: "weapon",
    rarity: 3,
    category: "Sword",
    name: { en: ["Dark Iron Sword"], "zh-CN": ["暗铁剑"] },
    materials: [
      "Luminous Sands from Guyun",
      "Hunter’s Sacrificial Knife",
      "Damaged Mask",
    ],
  },
  "Cool Steel": {
    id: "Cool Steel",
    type: "weapon",
    rarity: 3,
    category: "Sword",
    name: { en: ["Cool Steel"], "zh-CN": ["冷刃"] },
    materials: ["Tile of Decarabian’s Tower", "Heavy Horn", "Firm Arrowhead"],
  },
  "Traveler’s Handy Sword": {
    id: "Traveler’s Handy Sword",
    type: "weapon",
    rarity: 3,
    category: "Sword",
    name: { en: ["Traveler’s Handy Sword"], "zh-CN": ["旅行剑"] },
    materials: [
      "Fetters of the Dandelion Gladiator",
      "Chaos Device",
      "Divining Scroll",
    ],
  },
};
