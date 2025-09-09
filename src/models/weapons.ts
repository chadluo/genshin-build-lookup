import type { OfMaterial, TYPE_WEAPON } from "../base";
import { I18nObject } from "../i18n";
import type {
  Common,
  Elite,
  Fishing,
  Forging,
  WeaponAscension,
} from "./materials";

export type Category = "Bow" | "Catalyst" | "Claymore" | "Polearm" | "Sword";

export type Weapon = OfMaterial & {
  type: typeof TYPE_WEAPON;
  rarity: 3 | 4 | 5;
  category: Category;
  materials?:
    | [WeaponAscension, Elite, Common]
    | [WeaponAscension, Elite, Common, ...Forging[]]
    | [WeaponAscension, Elite, Common, ...Fishing[]];
};

function weapon(
  id: string,
  rarity: Weapon["rarity"],
  category: Category,
  name: I18nObject,
  materials?: Weapon["materials"]
): Weapon {
  return { id, name, rarity, category, materials, type: "weapon" };
}

const _weapons = {
  "Polar Star": weapon(
    "Polar Star",
    5,
    "Bow",
    { en: ["Polar Star"], "zh-CN": ["冬极白星"] },
    ["Mask of the Wicked Lieutenant", "Concealed Claw", "Spectral Husk"]
  ),
  "Thundering Pulse": weapon(
    "Thundering Pulse",
    5,
    "Bow",
    { en: ["Thundering Pulse"], "zh-CN": ["飞雷之弦振"] },
    ["Narukami’s Wisdom", "Dismal Prism", "Firm Arrowhead"]
  ),
  "Elegy for the End": weapon(
    "Elegy for the End",
    5,
    "Bow",
    { en: ["Elegy for the End"], "zh-CN": ["终末嗟叹之诗"] },
    ["Boreal Wolf’s Milk Tooth", "Heavy Horn", "Recruit’s Insignia"]
  ),
  "Skyward Harp": weapon(
    "Skyward Harp",
    5,
    "Bow",
    { en: ["Skyward Harp"], "zh-CN": ["天空之翼"] },
    ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Firm Arrowhead"]
  ),
  "Amos’ Bow": weapon(
    "Amos’ Bow",
    5,
    "Bow",
    { en: ["Amos’ Bow"], "zh-CN": ["阿莫斯之弓"] },
    ["Fetters of the Dandelion Gladiator", "Chaos Device", "Slime Condensate"]
  ),
  "Aqua Simulacra": weapon(
    "Aqua Simulacra",
    5,
    "Bow",
    { en: ["Aqua Simulacra"], "zh-CN": ["若水"] },
    ["Luminous Sands from Guyun", "Gloomy Statuette", "Spectral Husk"]
  ),
  "Hunter’s Path": weapon(
    "Hunter’s Path",
    5,
    "Bow",
    { en: ["Hunter’s Path"], "zh-CN": ["猎人之径"] },
    ["Echo of Scorching Might", "Inactivated Fungal Nucleus", "Faded Red Satin"]
  ),
  "The First Great Magic": weapon(
    "The First Great Magic",
    5,
    "Bow",
    { en: "The First Great Magic", "zh-CN": "最初的大魔术" },
    [
      "Fragment of an Ancient Chord",
      "Drop of Tainted Water",
      "Transoceanic Pearl",
    ]
  ),
  "Silvershower Heartstrings": weapon(
    "Silvershower Heartstrings",
    5,
    "Bow",
    { en: "Silvershower Heartstrings", "zh-CN": "白雨心弦" },
    ["Dross of Pure Sacred Dewdrop", "Feathery Fin", "Transoceanic Pearl"]
  ),
  "Astral Vulture’s Crimson Plumage": weapon(
    "Astral Vulture’s Crimson Plumage",
    5,
    "Bow",
    { en: "Astral Vulture’s Crimson Plumage", "zh-CN": "星鹫赤羽" },
    [
      "Night-Wind’s Mystic Consideration",
      "Refractive Bud",
      "Sentry’s Wooden Whistle",
    ]
  ),
  //
  // Newline - bow 5
  //
  "Lost Prayer to the Sacred Winds": weapon(
    "Lost Prayer to the Sacred Winds",
    5,
    "Catalyst",
    { en: ["Lost Prayer to the Sacred Winds"], "zh-CN": ["四风原典"] },
    ["Fetters of the Dandelion Gladiator", "Chaos Device", "Slime Condensate"]
  ),
  "Skyward Atlas": weapon(
    "Skyward Atlas",
    5,
    "Catalyst",
    { en: ["Skyward Atlas"], "zh-CN": ["天空之卷"] },
    ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Firm Arrowhead"]
  ),
  "Everlasting Moonglow": weapon(
    "Everlasting Moonglow",
    5,
    "Catalyst",
    { en: ["Everlasting Moonglow"], "zh-CN": ["不灭月华"] },
    ["Coral Branch of a Distant Sea", "Dismal Prism", "Spectral Husk"]
  ),
  "Memory of Dust": weapon(
    "Memory of Dust",
    5,
    "Catalyst",
    { en: ["Memory of Dust"], "zh-CN": ["尘世之锁"] },
    ["Grain of Aerosiderite", "Fragile Bone Shard", "Damaged Mask"]
  ),
  "Kagura’s Verity": weapon(
    "Kagura’s Verity",
    5,
    "Catalyst",
    { en: ["Kagura’s Verity"], "zh-CN": ["神乐之真意"] },
    ["Mask of the Wicked Lieutenant", "Concealed Claw", "Spectral Husk"]
  ),
  "A Thousand Floating Dreams": weapon(
    "A Thousand Floating Dreams",
    5,
    "Catalyst",
    { en: ["A Thousand Floating Dreams"], "zh-CN": ["千夜浮梦"] },
    ["Oasis Garden’s Reminiscence", "Damaged Prism", "Fungal Spores"]
  ),
  "Tulaytulla’s Rememberance": weapon(
    "Tulaytulla’s Rememberance",
    5,
    "Catalyst",
    { en: "Tulaytulla’s Rememberance", "zh-CN": "图莱杜拉的回忆" },
    ["Echo of Scorching Might", "Inactivated Fungal Nucleus", "Fungal Spores"]
  ),
  "Jadefall’s Splendor": weapon(
    "Jadefall’s Splendor",
    5,
    "Catalyst",
    { en: "Jadefall’s Splendor", "zh-CN": "碧落之珑" },
    ["Luminous Sands from Guyun", "A Flower Yet to Bloom", "Fungal Spores"]
  ),
  "Tome of the Eternal Flow": weapon(
    "Tome of the Eternal Flow",
    5,
    "Catalyst",
    { en: "Tome of the Eternal Flow", "zh-CN": "万世流涌大典" },
    ["Dross of Pure Sacred Dewdrop", "Rift Core", "Meshing Gear"]
  ),
  "Cashflow Supervision": weapon(
    "Cashflow Supervision",
    5,
    "Catalyst",
    { en: "Cashflow Supervision", "zh-CN": "金流监督" },
    [
      "Broken Goblet of the Pristine Sea",
      "Old Operative’s Pocket Watch",
      "Transoceanic Pearl",
    ]
  ),
  "Crane’s Echoing Call": weapon(
    "Crane’s Echoing Call",
    5,
    "Catalyst",
    { en: "Crane’s Echoing Call", "zh-CN": "鹤鸣余音" },
    ["Mist Veiled Lead Elixir", "Feathery Fin", "Divining Scroll"]
  ),
  "Surf’s Up": weapon(
    "Surf’s Up",
    5,
    "Catalyst",
    { en: "Surf’s Up", "zh-CN": "冲浪时光" },
    [
      "Blazing Sacrificial Heart’s Terror",
      "Shard of a Shattered Will",
      "Juvenile Fang",
    ]
  ),
  "Starcaller’s Watch": weapon(
    "Starcaller’s Watch",
    5,
    "Catalyst",
    { en: "Starcaller’s Watch", "zh-CN": "祭星者之望" },
    [
      "Delirious Decadence of the Sacred Lord",
      "Shard of a Shattered Will",
      "Sentry’s Wooden Whistle",
    ]
  ),
  "Sunny Morning Sleep-In": weapon(
    "Sunny Morning Sleep-In",
    5,
    "Catalyst",
    { en: "Sunny Morning Sleep-In", "zh-CN": "寝正月初晴" },
    ["Narukami’s Wisdom", "Ignited Stone", "Spectral Husk"]
  ),
  "Vivid Notions": weapon(
    "Vivid Notions",
    5,
    "Catalyst",
    { en: "Vivid Notions", "zh-CN": "溢彩心念" },
    [
      "Delirious Decadence of the Sacred Lord",
      "Cold-Cracked Shellshard",
      "Juvenile Fang",
    ]
  ),
  "Nightweaver’s Looking Glass": weapon(
    "Nightweaver’s Looking Glass",
    5,
    "Catalyst",
    { en: "Nightweaver’s Looking Glass", "zh-CN": "纺夜天镜" }
  ),
  //
  // Newline - catalyst 5
  //
  "Wolf’s Gravestone": weapon(
    "Wolf’s Gravestone",
    5,
    "Claymore",
    { en: ["Wolf’s Gravestone"], "zh-CN": ["狼的末路"] },
    ["Fetters of the Dandelion Gladiator", "Chaos Device", "Divining Scroll"]
  ),
  "Skyward Pride": weapon(
    "Skyward Pride",
    5,
    "Claymore",
    { en: ["Skyward Pride"], "zh-CN": ["天空之傲"] },
    ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Slime Condensate"]
  ),
  "The Unforged": weapon(
    "The Unforged",
    5,
    "Claymore",
    { en: ["The Unforged"], "zh-CN": ["无工之剑"] },
    [
      "Mist Veiled Lead Elixir",
      "Mist Grass Pollen",
      "Treasure Hoarder Insignia",
    ]
  ),
  "Song of Broken Pines": weapon(
    "Song of Broken Pines",
    5,
    "Claymore",
    { en: ["Song of Broken Pines"], "zh-CN": ["松籁响起之时"] },
    ["Tile of Decarabian’s Tower", "Heavy Horn", "Damaged Mask"]
  ),
  "Redhorn Stonethresher": weapon(
    "Redhorn Stonethresher",
    5,
    "Claymore",
    { en: ["Redhorn Stonethresher"], "zh-CN": ["赤角石溃杵"] },
    ["Narukami’s Wisdom", "Concealed Claw", "Old Handguard"]
  ),
  "Beacon of the Reed Sea": weapon(
    "Beacon of the Reed Sea",
    5,
    "Claymore",
    { en: "Beacon of the Reed Sea", "zh-CN": "苇海信标" },
    ["Echo of Scorching Might", "Desiccated Shell", "Faded Red Satin"]
  ),
  Verdict: weapon(
    "Verdict",
    5,
    "Claymore",
    { en: "Verdict", "zh-CN": "裁断" },
    ["Fragment of an Ancient Chord", "Rift Core", "Meshing Gear"]
  ),
  "Fang of the Mountain King": weapon(
    "Fang of the Mountain King",
    5,
    "Claymore",
    { en: "Fang of the Mountain King", "zh-CN": "山王长牙" },
    [
      "Delirious Decadence of the Sacred Lord",
      "Ignited Stone",
      "Sentry’s Wooden Whistle",
    ]
  ),
  "A Thousand Blazing Suns": weapon(
    "A Thousand Blazing Suns",
    5,
    "Claymore",
    { en: "A Thousand Blazing Suns", "zh-CN": "焚曜千阳" },
    [
      "Blazing Sacrificial Heart’s Terror",
      "Axis of the Secret Source",
      "Juvenile Fang",
    ]
  ),
  //
  // Newline - claymore 5
  //
  "Engulfing Lightning": weapon(
    "Engulfing Lightning",
    5,
    "Polearm",
    { en: ["Engulfing Lightning"], "zh-CN": ["薙草之稻光"] },
    ["Mask of the Wicked Lieutenant", "Chaos Gear", "Old Handguard"]
  ),
  "Skyward Spine": weapon(
    "Skyward Spine",
    5,
    "Polearm",
    { en: ["Skyward Spine"], "zh-CN": ["天空之脊"] },
    ["Fetters of the Dandelion Gladiator", "Chaos Device", "Divining Scroll"]
  ),
  "Primordial Jade Winged-Spear": weapon(
    "Primordial Jade Winged-Spear",
    5,
    "Polearm",
    { en: ["Primordial Jade Winged-Spear"], "zh-CN": ["和璞鸢"] },
    [
      "Luminous Sands from Guyun",
      "Hunter’s Sacrificial Knife",
      "Recruit’s Insignia",
    ]
  ),
  "Calamity Queller": weapon(
    "Calamity Queller",
    5,
    "Polearm",
    { en: ["Calamity Queller"], "zh-CN": ["息灾"] },
    ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Whopperflower Nectar"]
  ),
  "Staff of Homa": weapon(
    "Staff of Homa",
    5,
    "Polearm",
    { en: ["Staff of Homa"], "zh-CN": ["护摩之杖"] },
    ["Grain of Aerosiderite", "Dead Ley Line Branch", "Slime Condensate"]
  ),
  "Vortex Vanquisher": weapon(
    "Vortex Vanquisher",
    5,
    "Polearm",
    { en: ["Vortex Vanquisher"], "zh-CN": ["贯虹之槊"] },
    ["Grain of Aerosiderite", "Fragile Bone Shard", "Treasure Hoarder Insignia"]
  ),
  "Staff of the Scarlet Sands": weapon(
    "Staff of the Scarlet Sands",
    5,
    "Polearm",
    { en: ["Staff of the Scarlet Sands"], "zh-CN": ["赤沙之杖"] },
    ["Oasis Garden’s Reminiscence", "Chaos Storage", "Fungal Spores"]
  ),
  "Crimson Moon’s Semblance": weapon(
    "Crimson Moon’s Semblance",
    5,
    "Polearm",
    { en: "Crimson Moon’s Semblance", "zh-CN": "赤月之形" },
    ["Broken Goblet of the Pristine Sea", "Ruined Hilt", "Meshing Gear"]
  ),
  "Lumidouce Elegy": weapon(
    "Lumidouce Elegy",
    5,
    "Polearm",
    { en: "Lumidouce Elegy", "zh-CN": "柔灯挽歌" },
    ["Broken Goblet of the Pristine Sea", "Ruined Hilt", "Whopperflower Nectar"]
  ),
  "Symphonist of Scents": weapon(
    "Symphonist of Scents",
    5,
    "Polearm",
    { en: "Symphonist of Scents", "zh-CN": "香韵奏者" },
    [
      "Dross of Pure Sacred Dewdrop",
      "Drop of Tainted Water",
      "Transoceanic Pearl",
    ]
  ),
  "Fractured Halo": weapon(
    "Fractured Halo",
    5,
    "Polearm",
    { en: "Fractured Halo", "zh-CN": "支离轮光" },
    [
      "Blazing Sacrificial Heart’s Terror",
      "Cold-Cracked Shellshard",
      "Juvenile Fang",
    ]
  ),
  "Bloodsoaked Ruins": weapon("Bloodsoaked Ruins", 5, "Polearm", {
    en: "Bloodsoaked Ruins",
    "zh-CN": "血染荒城",
  }),
  //
  // Newline - polearm 5
  //
  "Mistsplitter Reforged": weapon(
    "Mistsplitter Reforged",
    5,
    "Sword",
    { en: ["Mistsplitter Reforged"], "zh-CN": ["雾切之回光"] },
    ["Coral Branch of a Distant Sea", "Chaos Gear", "Old Handguard"]
  ),
  "Aquila Favonia": weapon(
    "Aquila Favonia",
    5,
    "Sword",
    { en: ["Aquila Favonia"], "zh-CN": ["风鹰剑"] },
    ["Tile of Decarabian’s Tower", "Heavy Horn", "Firm Arrowhead"]
  ),
  "Summit Shaper": weapon(
    "Summit Shaper",
    5,
    "Sword",
    { en: ["Summit Shaper"], "zh-CN": ["斫峰之刃"] },
    ["Luminous Sands from Guyun", "Hunter’s Sacrificial Knife", "Damaged Mask"]
  ),
  "Skyward Blade": weapon(
    "Skyward Blade",
    5,
    "Sword",
    { en: ["Skyward Blade"], "zh-CN": ["天空之刃"] },
    ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Slime Condensate"]
  ),
  "Freedom-Sworn": weapon(
    "Freedom-Sworn",
    5,
    "Sword",
    { en: ["Freedom-Sworn"], "zh-CN": ["苍古自由之誓"] },
    ["Fetters of the Dandelion Gladiator", "Chaos Device", "Divining Scroll"]
  ),
  "Primordial Jade Cutter": weapon(
    "Primordial Jade Cutter",
    5,
    "Sword",
    { en: ["Primordial Jade Cutter"], "zh-CN": ["磐岩结绿"] },
    [
      "Mist Veiled Lead Elixir",
      "Mist Grass Pollen",
      "Treasure Hoarder Insignia",
    ]
  ),
  "Haran Geppaku Futsu": weapon(
    "Haran Geppaku Futsu",
    5,
    "Sword",
    { en: ["Haran Geppaku Futsu"], "zh-CN": ["波乱月白经津"] },
    ["Narukami’s Wisdom", "Gloomy Statuette", "Old Handguard"]
  ),
  "Key of the Khaj-Nisut": weapon(
    "Key of the Khaj-Nisut",
    5,
    "Sword",
    { en: ["Key of the Khaj-Nisut"], "zh-CN": ["圣显之钥"] },
    ["Copper Talisman of the Forest Dew", "Damaged Prism", "Faded Red Satin"]
  ),
  "Light of Foliar Incision": weapon(
    "Light of Foliar Incision",
    5,
    "Sword",
    { en: "Light of Foliar Incision", "zh-CN": "裁叶萃光" },
    ["Copper Talisman of the Forest Dew", "Desiccated Shell", "Faded Red Satin"]
  ),
  "Splendor of Tranquil Waters": weapon(
    "Splendor of Tranquil Waters",
    5,
    "Sword",
    { en: "Splendor of Tranquil Waters", "zh-CN": "静水流涌之辉" },
    [
      "Dross of Pure Sacred Dewdrop",
      "Drop of Tainted Water",
      "Transoceanic Pearl",
    ]
  ),
  "Uraku Mitsugiri": weapon(
    "Uraku Mitsugiri",
    5,
    "Sword",
    { en: "Uraku Mitsugiri", "zh-CN": "有乐御簾切" },
    ["Coral Branch of a Distant Sea", "Chaos Gear", "Old Handguard"]
  ),
  Absolution: weapon(
    "Absolution",
    5,
    "Sword",
    { en: "Absolution", "zh-CN": "赦罪" },
    [
      "Fragment of an Ancient Chord",
      "Old Operative’s Pocket Watch",
      "Meshing Gear",
    ]
  ),
  "Peak Patrol Song": weapon(
    "Peak Patrol Song",
    5,
    "Sword",
    { en: "Peak Patrol Song", "zh-CN": "岩峰巡歌" },
    [
      "Night-Wind’s Mystic Consideration",
      "Axis of the Secret Source",
      "Juvenile Fang",
    ]
  ),
  Azurelight: weapon(
    "Azurelight",
    5,
    "Sword",
    { en: "Azurelight", "zh-CN": "苍耀" },
    [
      "Night-Wind’s Mystic Consideration",
      "Refractive Bud",
      "Sentry’s Wooden Whistle",
    ]
  ),
  //
  // Newline - sword 5
  //
  "Alley Hunter": weapon(
    "Alley Hunter",
    4,
    "Bow",
    { en: ["Alley Hunter"], "zh-CN": ["暗巷猎手"] },
    ["Fetters of the Dandelion Gladiator", "Chaos Device", "Slime Condensate"]
  ),
  "The Viridescent Hunt": weapon(
    "The Viridescent Hunt",
    4,
    "Bow",
    { en: ["The Viridescent Hunt"], "zh-CN": ["苍翠猎弓"] },
    ["Tile of Decarabian’s Tower", "Heavy Horn", "Firm Arrowhead"]
  ),
  "The Stringless": weapon(
    "The Stringless",
    4,
    "Bow",
    { en: ["The Stringless"], "zh-CN": ["绝弦"] },
    ["Tile of Decarabian’s Tower", "Heavy Horn", "Firm Arrowhead"]
  ),
  "Sacrificial Bow": weapon(
    "Sacrificial Bow",
    4,
    "Bow",
    { en: ["Sacrificial Bow"], "zh-CN": ["祭礼弓"] },
    ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Slime Condensate"]
  ),
  Rust: weapon("Rust", 4, "Bow", { en: ["Rust"], "zh-CN": ["弓藏"] }, [
    "Luminous Sands from Guyun",
    "Hunter’s Sacrificial Knife",
    "Damaged Mask",
  ]),
  "Royal Bow": weapon(
    "Royal Bow",
    4,
    "Bow",
    { en: ["Royal Bow"], "zh-CN": ["宗室长弓"] },
    ["Fetters of the Dandelion Gladiator", "Chaos Device", "Divining Scroll"]
  ),
  Predator: weapon(
    "Predator",
    4,
    "Bow",
    { en: ["Predator"], "zh-CN": ["掠食者"] },
    ["Narukami’s Wisdom", "Dismal Prism", "Firm Arrowhead"]
  ),
  "Prototype Crescent": weapon(
    "Prototype Crescent",
    4,
    "Bow",
    { en: ["Prototype Crescent"], "zh-CN": ["试作澹月"] },
    [
      "Mist Veiled Lead Elixir",
      "Mist Grass Pollen",
      "Treasure Hoarder Insignia",
      "Northlander Bow Billet",
      "Crystal Chunk",
      "White Iron Chunk",
    ]
  ),
  "Mouun’s Moon": weapon(
    "Mouun’s Moon",
    4,
    "Bow",
    { en: ["Mouun’s Moon"], "zh-CN": ["曚云之月"] },
    ["Narukami’s Wisdom", "Dismal Prism", "Spectral Husk"]
  ),
  "Mitternachts Waltz": weapon(
    "Mitternachts Waltz",
    4,
    "Bow",
    { en: ["Mitternachts Waltz"], "zh-CN": ["幽夜华尔兹"] },
    ["Tile of Decarabian’s Tower", "Heavy Horn", "Treasure Hoarder Insignia"]
  ),
  Hamayumi: weapon(
    "Hamayumi",
    4,
    "Bow",
    { en: ["Hamayumi"], "zh-CN": ["破魔之弓"] },
    [
      "Narukami’s Wisdom",
      "Dismal Prism",
      "Firm Arrowhead",
      "Northlander Bow Billet",
      "Amethyst Lump",
      "White Iron Chunk",
    ]
  ),
  "Favonius Warbow": weapon(
    "Favonius Warbow",
    4,
    "Bow",
    { en: ["Favonius Warbow"], "zh-CN": ["西风猎弓"] },
    [
      "Fetters of the Dandelion Gladiator",
      "Chaos Device",
      "Whopperflower Nectar",
    ]
  ),
  "Compound Bow": weapon(
    "Compound Bow",
    4,
    "Bow",
    { en: ["Compound Bow"], "zh-CN": ["钢轮弓"] },
    [
      "Grain of Aerosiderite",
      "Fragile Bone Shard",
      "Recruit’s Insignia",
      "Northlander Bow Billet",
      "Crystal Chunk",
      "White Iron Chunk",
    ]
  ),
  "Blackcliff Warbow": weapon(
    "Blackcliff Warbow",
    4,
    "Bow",
    { en: ["Blackcliff Warbow"], "zh-CN": ["黑岩战弓"] },
    [
      "Luminous Sands from Guyun",
      "Hunter’s Sacrificial Knife",
      "Whopperflower Nectar",
    ]
  ),
  "Windblume Ode": weapon(
    "Windblume Ode",
    4,
    "Bow",
    { en: ["Windblume Ode"], "zh-CN": ["风花之颂"] },
    [
      "Fetters of the Dandelion Gladiator",
      "Dead Ley Line Branch",
      "Whopperflower Nectar",
    ]
  ),
  "Fading Twilight": weapon(
    "Fading Twilight",
    4,
    "Bow",
    { en: ["Fading Twilight"], "zh-CN": ["落霞"] },
    ["Grain of Aerosiderite", "Hunter’s Sacrificial Knife", "Divining Scroll"]
  ),
  "End of the Line": weapon(
    "End of the Line",
    4,
    "Bow",
    { en: ["End of the Line"], "zh-CN": ["竭泽"] },
    [
      "Echo of Scorching Might",
      "Inactivated Fungal Nucleus",
      "Fungal Spores",
      "Peach of the Deep Waves",
      "Lazurite Axe Marlin",
      "Halcyon Jade Axe Marlin",
    ]
  ),
  "King’s Squire": weapon(
    "King’s Squire",
    4,
    "Bow",
    { en: ["King’s Squire"], "zh-CN": ["王下近侍"] },
    [
      "Echo of Scorching Might",
      "Inactivated Fungal Nucleus",
      "Firm Arrowhead",
      "Midlander Bow Billet",
      "Crystal Chunk",
      "White Iron Chunk",
    ]
  ),
  "Ibis Piercer": weapon(
    "Ibis Piercer",
    4,
    "Bow",
    { en: ["Ibis Piercer"], "zh-CN": ["鹮穿之喙"] },
    [
      "Copper Talisman of the Forest Dew",
      "A Flower Yet to Bloom",
      "Faded Red Satin",
    ]
  ),
  "Scion of the Blazing Sun": weapon(
    "Scion of the Blazing Sun",
    4,
    "Bow",
    { en: "Scion of the Blazing Sun", "zh-CN": "烈阳之嗣" },
    ["Echo of Scorching Might", "A Flower Yet to Bloom", "Fungal Spores"]
  ),
  "Song of Stillness": weapon(
    "Song of Stillness",
    4,
    "Bow",
    { en: "Song of Stillness", "zh-CN": "静谧之曲" },
    [
      "Fragment of an Ancient Chord",
      "Drop of Tainted Water",
      "Firm Arrowhead",
      "Midlander Bow Billet",
      "Condessence Crystal",
      "White Iron Chunk",
    ]
  ),
  "Range Gauge": weapon(
    "Range Gauge",
    4,
    "Bow",
    { en: "Range Gauge", "zh-CN": "测距规" },
    [
      "Fragment of an Ancient Chord",
      "Drop of Tainted Water",
      "Transoceanic Pearl",
    ]
  ),
  Cloudforged: weapon(
    "Cloudforged",
    4,
    "Bow",
    { en: "Cloudforged", "zh-CN": "筑云" },
    ["Grain of Aerosiderite", "Ruined Hilt", "Recruit’s Insignia"]
  ),
  "Chain Breaker": weapon(
    "Chain Breaker",
    4,
    "Bow",
    { en: "Chain Breaker", "zh-CN": "碎链" },
    [
      "Night-Wind’s Mystic Consideration",
      "Feathery Fin",
      "Juvenile Fang",
      "Borderland Bow Billet",
      "Condessence Crystal",
      "White Iron Chunk",
    ]
  ),
  "Flower-Wreathed Feathers": weapon(
    "Flower-Wreathed Feathers",
    4,
    "Bow",
    { en: "Flower-Wreathed Feathers", "zh-CN": "缀花之翎" },
    [
      "Night-Wind’s Mystic Consideration",
      "Ignited Stone",
      "Sentry’s Wooden Whistle",
    ]
  ),
  "Sequence of Solitude": weapon(
    "Sequence of Solitude",
    4,
    "Bow",
    { en: "Sequence of Solitude", "zh-CN": "冷寂迸音" },
    ["Fragment of an Ancient Chord", "Cold-Cracked Shellshard", "Meshing Gear"]
  ),
  "Snare Hook": weapon("Snare Hook", 4, "Bow", {
    en: "Snare Hook",
    "zh-CN": "罗网勾针",
  }),
  //
  // Newline - bow 4
  //
  "Wine and Song": weapon(
    "Wine and Song",
    4,
    "Catalyst",
    { en: ["Wine and Song"], "zh-CN": ["暗巷的酒与诗"] },
    [
      "Boreal Wolf’s Milk Tooth",
      "Dead Ley Line Branch",
      "Treasure Hoarder Insignia",
    ]
  ),
  "The Widsith": weapon(
    "The Widsith",
    4,
    "Catalyst",
    { en: ["The Widsith"], "zh-CN": ["流浪乐章"] },
    ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Damaged Mask"]
  ),
  "Solar Pearl": weapon(
    "Solar Pearl",
    4,
    "Catalyst",
    { en: ["Solar Pearl"], "zh-CN": ["匣里日月"] },
    [
      "Luminous Sands from Guyun",
      "Hunter’s Sacrificial Knife",
      "Whopperflower Nectar",
    ]
  ),
  "Sacrificial Fragments": weapon(
    "Sacrificial Fragments",
    4,
    "Catalyst",
    { en: ["Sacrificial Fragments"], "zh-CN": ["祭礼残章"] },
    [
      "Fetters of the Dandelion Gladiator",
      "Chaos Device",
      "Treasure Hoarder Insignia",
    ]
  ),
  "Royal Grimoire": weapon(
    "Royal Grimoire",
    4,
    "Catalyst",
    { en: ["Royal Grimoire"], "zh-CN": ["宗室秘法录"] },
    ["Tile of Decarabian’s Tower", "Heavy Horn", "Recruit’s Insignia"]
  ),
  "Prototype Amber": weapon(
    "Prototype Amber",
    4,
    "Catalyst",
    { en: ["Prototype Amber"], "zh-CN": ["试作金珀"] },
    [
      "Mist Veiled Lead Elixir",
      "Mist Grass Pollen",
      "Firm Arrowhead",
      "Northlander Catalyst Billet",
      "Crystal Chunk",
      "White Iron Chunk",
    ]
  ),
  "Mappa Mare": weapon(
    "Mappa Mare",
    4,
    "Catalyst",
    { en: ["Mappa Mare"], "zh-CN": ["万国诸海图谱"] },
    [
      "Grain of Aerosiderite",
      "Fragile Bone Shard",
      "Slime Condensate",
      "Northlander Catalyst Billet",
      "Crystal Chunk",
      "White Iron Chunk",
    ]
  ),
  "Hakushin Ring": weapon(
    "Hakushin Ring",
    4,
    "Catalyst",
    { en: ["Hakushin Ring"], "zh-CN": ["白辰之环"] },
    [
      "Coral Branch of a Distant Sea",
      "Dismal Prism",
      "Divining Scroll",
      "Northlander Catalyst Billet",
      "Amethyst Lump",
      "White Iron Chunk",
    ]
  ),
  Frostbearer: weapon(
    "Frostbearer",
    4,
    "Catalyst",
    { en: ["Frostbearer"], "zh-CN": ["忍冬之果"] },
    [
      "Fetters of the Dandelion Gladiator",
      "Chaos Device",
      "Whopperflower Nectar",
      "Northlander Catalyst Billet",
      "Crystal Chunk",
      "Starsilver",
    ]
  ),
  "Favonius Codex": weapon(
    "Favonius Codex",
    4,
    "Catalyst",
    { en: ["Favonius Codex"], "zh-CN": ["西风秘典"] },
    ["Tile of Decarabian’s Tower", "Heavy Horn", "Divining Scroll"]
  ),
  "Eye of Perception": weapon(
    "Eye of Perception",
    4,
    "Catalyst",
    { en: ["Eye of Perception"], "zh-CN": ["昭心"] },
    ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Damaged Mask"]
  ),
  "Dodoco Tales": weapon(
    "Dodoco Tales",
    4,
    "Catalyst",
    { en: ["Dodoco Tales"], "zh-CN": ["嘟嘟可故事集"] },
    ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Damaged Mask"]
  ),
  "Blackcliff Agate": weapon(
    "Blackcliff Agate",
    4,
    "Catalyst",
    { en: ["Blackcliff Agate"], "zh-CN": ["黑岩绯玉"] },
    [
      "Luminous Sands from Guyun",
      "Hunter’s Sacrificial Knife",
      "Divining Scroll",
    ]
  ),
  "Oathsworn Eye": weapon(
    "Oathsworn Eye",
    4,
    "Catalyst",
    { en: ["Oathsworn Eye"], "zh-CN": ["证誓之明瞳"] },
    ["Coral Branch of a Distant Sea", "Concealed Claw", "Spectral Husk"]
  ),
  "Fruit of Fulfillment": weapon(
    "Fruit of Fulfillment",
    4,
    "Catalyst",
    { en: ["Fruit of Fulfillment"], "zh-CN": ["盈满之实"] },
    [
      "Oasis Garden’s Reminiscence",
      "Gloomy Statuette",
      "Fungal Spores",
      "Midlander Catalyst Billet",
      "Crystal Chunk",
      "White Iron Chunk",
    ]
  ),
  "Wandering Evenstar": weapon(
    "Wandering Evenstar",
    4,
    "Catalyst",
    { en: ["Wandering Evenstar"], "zh-CN": ["流浪的晚星"] },
    [
      "Oasis Garden’s Reminiscence",
      "Inactivated Fungal Nucleus",
      "Fungal Spores",
    ]
  ),
  "Sacrificial Jade": weapon(
    "Sacrificial Jade",
    4,
    "Catalyst",
    { en: "Sacrificial Jade", "zh-CN": "遗祀玉珑" },
    ["Luminous Sands from Guyun", "Mist Grass Pollen", "Divining Scroll"]
  ),
  "Flowing Purity": weapon(
    "Flowing Purity",
    4,
    "Catalyst",
    { en: "Flowing Purity", "zh-CN": "纯水流华" },
    [
      "Dross of Pure Sacred Dewdrop",
      "Rift Core",
      "Transoceanic Pearl",
      "Midlander Catalyst Billet",
      "Condessence Crystal",
      "White Iron Chunk",
    ]
  ),
  "Ballad of the Boundless Blue": weapon(
    "Ballad of the Boundless Blue",
    4,
    "Catalyst",
    { en: "Ballad of the Boundless Blue", "zh-CN": "无垠蔚蓝之歌" },
    [
      "Boreal Wolf’s Milk Tooth",
      "Fragile Bone Shard",
      "Treasure Hoarder Insignia",
    ]
  ),
  "Ring of Yaxche": weapon(
    "Ring of Yaxche",
    4,
    "Catalyst",
    { en: "Ring of Yaxche", "zh-CN": "木棉之环" },
    [
      "Delirious Decadence of the Sacred Lord",
      "Shard of a Shattered Will",
      "Damaged Mask",
      "Borderland Catalyst Billet",
      "Condessence Crystal",
      "White Iron Chunk",
    ]
  ),
  "Ash-Graven Drinking Horn": weapon(
    "Ash-Graven Drinking Horn",
    4,
    "Catalyst",
    { en: "Ash-Graven Drinking Horn", "zh-CN": "苍纹角杯" },
    [
      "Night-Wind’s Mystic Consideration",
      "Axis of the Secret Source",
      "Juvenile Fang",
    ]
  ),
  "Waveriding Whirl": weapon(
    "Waveriding Whirl",
    4,
    "Catalyst",
    { en: "Waveriding Whirl", "zh-CN": "乘浪的回旋" },
    [
      "Blazing Sacrificial Heart’s Terror",
      "Shard of a Shattered Will",
      "Juvenile Fang",
    ]
  ),
  "Etherlight Spindlelute": weapon("Etherlight Spindlelute", 4, "Catalyst", {
    en: "Etherlight Spindlelute",
    "zh-CN": "天光的纺琴",
  }),
  "Blackmarrow Lantern": weapon("Blackmarrow Lantern", 4, "Catalyst", {
    en: "Blackmarrow Lantern",
    "zh-CN": "乌髓孑灯",
  }),
  //
  // Newline catalyst 4
  //
  Akuoumaru: weapon(
    "Akuoumaru",
    4,
    "Claymore",
    { en: ["Akuoumaru"], "zh-CN": ["恶王丸"] },
    ["Coral Branch of a Distant Sea", "Concealed Claw", "Old Handguard"]
  ),
  "Royal Greatsword": weapon(
    "Royal Greatsword",
    4,
    "Claymore",
    { en: ["Royal Greatsword"], "zh-CN": ["宗室大剑"] },
    ["Fetters of the Dandelion Gladiator", "Chaos Device", "Slime Condensate"]
  ),
  Whiteblind: weapon(
    "Whiteblind",
    4,
    "Claymore",
    { en: ["Whiteblind"], "zh-CN": ["白影剑"] },
    [
      "Luminous Sands from Guyun",
      "Hunter’s Sacrificial Knife",
      "Treasure Hoarder Insignia",
      "Northlander Claymore Billet",
      "Crystal Chunk",
      "White Iron Chunk",
    ]
  ),
  "The Bell": weapon(
    "The Bell",
    4,
    "Claymore",
    { en: ["The Bell"], "zh-CN": ["钟剑"] },
    ["Tile of Decarabian’s Tower", "Heavy Horn", "Whopperflower Nectar"]
  ),
  "Snow-Tombed Starsilver": weapon(
    "Snow-Tombed Starsilver",
    4,
    "Claymore",
    { en: ["Snow-Tombed Starsilver"], "zh-CN": ["雪葬的星银"] },
    [
      "Tile of Decarabian’s Tower",
      "Heavy Horn",
      "Slime Condensate",
      "Northlander Claymore Billet",
      "Crystal Chunk",
      "Starsilver",
    ]
  ),
  "Favonius Greatsword": weapon(
    "Favonius Greatsword",
    4,
    "Claymore",
    { en: ["Favonius Greatsword"], "zh-CN": ["西风大剑"] },
    ["Fetters of the Dandelion Gladiator", "Chaos Device", "Recruit’s Insignia"]
  ),
  "Katsuragikiri Nagamasa": weapon(
    "Katsuragikiri Nagamasa",
    4,
    "Claymore",
    { en: ["Katsuragikiri Nagamasa"], "zh-CN": ["桂木斩长正"] },
    [
      "Narukami’s Wisdom",
      "Chaos Gear",
      "Old Handguard",
      "Northlander Claymore Billet",
      "Amethyst Lump",
      "White Iron Chunk",
    ]
  ),
  "Sacrificial Greatsword": weapon(
    "Sacrificial Greatsword",
    4,
    "Claymore",
    { en: ["Sacrificial Greatsword"], "zh-CN": ["祭礼大剑"] },
    ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Firm Arrowhead"]
  ),
  "Serpent Spine": weapon(
    "Serpent Spine",
    4,
    "Claymore",
    { en: ["Serpent Spine"], "zh-CN": ["螭骨剑"] },
    ["Grain of Aerosiderite", "Fragile Bone Shard", "Whopperflower Nectar"]
  ),
  "Blackcliff Slasher": weapon(
    "Blackcliff Slasher",
    4,
    "Claymore",
    { en: ["Blackcliff Slasher"], "zh-CN": ["黑岩斩刀"] },
    ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Recruit’s Insignia"]
  ),
  Rainslasher: weapon(
    "Rainslasher",
    4,
    "Claymore",
    { en: ["Rainslasher"], "zh-CN": ["雨裁"] },
    ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Divining Scroll"]
  ),
  "Prototype Archaic": weapon(
    "Prototype Archaic",
    4,
    "Claymore",
    { en: ["Prototype Archaic"], "zh-CN": ["试作古华"] },
    [
      "Grain of Aerosiderite",
      "Fragile Bone Shard",
      "Damaged Mask",
      "Northlander Claymore Billet",
      "Crystal Chunk",
      "White Iron Chunk",
    ]
  ),
  "Luxurious Sea-Lord": weapon(
    "Luxurious Sea-Lord",
    4,
    "Claymore",
    { en: ["Luxurious Sea-Lord"], "zh-CN": ["衔珠海皇"] },
    ["Grain of Aerosiderite", "Fragile Bone Shard", "Slime Condensate"]
  ),
  "Lithic Blade": weapon(
    "Lithic Blade",
    4,
    "Claymore",
    { en: ["Lithic Blade"], "zh-CN": ["千岩古剑"] },
    [
      "Luminous Sands from Guyun",
      "Hunter’s Sacrificial Knife",
      "Firm Arrowhead",
    ]
  ),
  "Forest Regalia": weapon(
    "Forest Regalia",
    4,
    "Claymore",
    { en: ["Forest Regalia"], "zh-CN": ["森林王器"] },
    [
      "Copper Talisman of the Forest Dew",
      "Chaos Storage",
      "Faded Red Satin",
      "Midlander Claymore Billet",
      "Crystal Chunk",
      "White Iron Chunk",
    ]
  ),
  "Makhaira Aquamarine": weapon(
    "Makhaira Aquamarine",
    4,
    "Claymore",
    { en: ["Makhaira Aquamarine"], "zh-CN": ["玛海菈的水色"] },
    ["Echo of Scorching Might", "Chaos Storage", "Treasure Hoarder Insignia"]
  ),
  "Mailed Flower": weapon(
    "Mailed Flower",
    4,
    "Claymore",
    { en: "Mailed Flower", "zh-CN": "饰铁之花" },
    ["Fetters of the Dandelion Gladiator", "Desiccated Shell", "Spectral Husk"]
  ),
  "Talking Stick": weapon(
    "Talking Stick",
    4,
    "Claymore",
    { en: "Talking Stick", "zh-CN": "聊聊棒" },
    ["Oasis Garden’s Reminiscence", "Desiccated Shell", "Slime Condensate"]
  ),
  "Tidal Shadow": weapon(
    "Tidal Shadow",
    4,
    "Claymore",
    { en: "Tidal Shadow", "zh-CN": "浪影阔剑" },
    [
      "Broken Goblet of the Pristine Sea",
      "Rift Core",
      "Meshing Gear",
      "Midlander Claymore Billet",
      "Condessence Crystal",
      "White Iron Chunk",
    ]
  ),
  "Portable Power Saw": weapon(
    "Portable Power Saw",
    4,
    "Claymore",
    { en: "Portable Power Saw", "zh-CN": "便携动力锯" },
    ["Broken Goblet of the Pristine Sea", "Rift Core", "Meshing Gear"]
  ),
  "Ultimate Overlord’s Mega Magic Sword": weapon(
    "Ultimate Overlord’s Mega Magic Sword",
    4,
    "Claymore",
    {
      en: "Ultimate Overlord’s Mega Magic Sword",
      "zh-CN": "「究极霸王超级魔剑」",
    },
    [
      "Broken Goblet of the Pristine Sea",
      "Old Operative’s Pocket Watch",
      "Meshing Gear",
    ]
  ),
  "Earth Shaker": weapon(
    "Earth Shaker",
    4,
    "Claymore",
    { en: "Earth Shaker", "zh-CN": "撼地者" },
    [
      "Blazing Sacrificial Heart’s Terror",
      "Ignited Stone",
      "Sentry’s Wooden Whistle",
      "Borderland Claymore Billet",
      "Condessence Crystal",
      "White Iron Chunk",
    ]
  ),
  "Fruitful Hook": weapon(
    "Fruitful Hook",
    4,
    "Claymore",
    { en: "Fruitful Hook", "zh-CN": "硕果钩" },
    [
      "Night-Wind’s Mystic Consideration",
      "Axis of the Secret Source",
      "Juvenile Fang",
    ]
  ),
  "Flame-Forged Insight": weapon(
    "Flame-Forged Insight",
    4,
    "Claymore",
    { en: "Flame-Forged Insight", "zh-CN": "拾慧铸熔" },
    [
      "Delirious Decadence of the Sacred Lord",
      "Cold-Cracked Shellshard",
      "Transoceanic Pearl",
    ]
  ),
  "Master Key": weapon("Master Key", 4, "Claymore", {
    en: "Master Key",
    "zh-CN": "万能钥匙",
  }),
  //
  // Newline - claymore 4
  //
  "Prototype Starglitter": weapon(
    "Prototype Starglitter",
    4,
    "Polearm",
    { en: ["Prototype Starglitter"], "zh-CN": ["试作星镰"] },
    [
      "Grain of Aerosiderite",
      "Fragile Bone Shard",
      "Damaged Mask",
      "Northlander Polearm Billet",
      "Crystal Chunk",
      "White Iron Chunk",
    ]
  ),
  "Lithic Spear": weapon(
    "Lithic Spear",
    4,
    "Polearm",
    { en: ["Lithic Spear"], "zh-CN": ["千岩长枪"] },
    ["Grain of Aerosiderite", "Fragile Bone Shard", "Firm Arrowhead"]
  ),
  "Kitain Cross Spear": weapon(
    "Kitain Cross Spear",
    4,
    "Polearm",
    { en: ["Kitain Cross Spear"], "zh-CN": ["喜多院十文字"] },
    [
      "Mask of the Wicked Lieutenant",
      "Chaos Gear",
      "Treasure Hoarder Insignia",
      "Northlander Polearm Billet",
      "Amethyst Lump",
      "White Iron Chunk",
    ]
  ),
  "“The Catch”": weapon(
    "“The Catch”",
    4,
    "Polearm",
    { en: ["“The Catch”"], "zh-CN": ["「渔获」"] },
    [
      "Mask of the Wicked Lieutenant",
      "Chaos Gear",
      "Spectral Husk",
      "Raimei Angelfish",
      "Golden Koi",
      "Rusty Koi",
      "Pufferfish",
      "Bitter Pufferfish",
    ]
  ),
  "Favonius Lance": weapon(
    "Favonius Lance",
    4,
    "Polearm",
    { en: ["Favonius Lance"], "zh-CN": ["西风长枪"] },
    ["Fetters of the Dandelion Gladiator", "Chaos Device", "Slime Condensate"]
  ),
  "Dragonspine Spear": weapon(
    "Dragonspine Spear",
    4,
    "Polearm",
    { en: ["Dragonspine Spear"], "zh-CN": ["龙脊长枪"] },
    [
      "Boreal Wolf’s Milk Tooth",
      "Mist Grass Pollen",
      "Recruit’s Insignia",
      "Northlander Polearm Billet",
      "Starsilver",
      "Vitalized Dragontooth",
    ]
  ),
  "Dragon’s Bane": weapon(
    "Dragon’s Bane",
    4,
    "Polearm",
    { en: ["Dragon’s Bane"], "zh-CN": ["匣里灭辰"] },
    ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Divining Scroll"]
  ),
  Deathmatch: weapon(
    "Deathmatch",
    4,
    "Polearm",
    { en: ["Deathmatch"], "zh-CN": ["决斗之枪"] },
    ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Whopperflower Nectar"]
  ),
  "Crescent Pike": weapon(
    "Crescent Pike",
    4,
    "Polearm",
    { en: ["Crescent Pike"], "zh-CN": ["流月针"] },
    [
      "Luminous Sands from Guyun",
      "Hunter’s Sacrificial Knife",
      "Treasure Hoarder Insignia",
      "Northlander Polearm Billet",
      "Crystal Chunk",
      "White Iron Chunk",
    ]
  ),
  "Blackcliff Pole": weapon(
    "Blackcliff Pole",
    4,
    "Polearm",
    { en: ["Blackcliff Pole"], "zh-CN": ["黑岩刺枪"] },
    ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Recruit’s Insignia"]
  ),
  "Wavebreaker’s Fin": weapon(
    "Wavebreaker’s Fin",
    4,
    "Polearm",
    { en: ["Wavebreaker’s Fin"], "zh-CN": ["断浪长鳍"] },
    ["Mask of the Wicked Lieutenant", "Concealed Claw", "Old Handguard"]
  ),
  "Royal Spear": weapon(
    "Royal Spear",
    4,
    "Polearm",
    { en: ["Royal Spear"], "zh-CN": ["宗室猎枪"] },
    ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Recruit’s Insignia"]
  ),
  Moonpiercer: weapon(
    "Moonpiercer",
    4,
    "Polearm",
    { en: ["Moonpiercer"], "zh-CN": ["贯月矢"] },
    [
      "Oasis Garden’s Reminiscence",
      "Chaos Storage",
      "Recruit’s Insignia",
      "Midlander Polearm Billet",
      "Crystal Chunk",
      "White Iron Chunk",
    ]
  ),
  "Missive Windspear": weapon(
    "Missive Windspear",
    4,
    "Polearm",
    { en: ["Missive Windspear"], "zh-CN": ["风信之锋"] },
    ["Boreal Wolf’s Milk Tooth", "Gloomy Statuette", "Slime Condensate"]
  ),
  "Ballard of the Fjords": weapon(
    "Ballard of the Fjords",
    4,
    "Polearm",
    { en: "Ballard of the Fjords", "zh-CN": "峡湾长歌" },
    [
      "Broken Goblet of the Pristine Sea",
      "A Flower Yet to Bloom",
      "Whopperflower Nectar",
    ]
  ),
  "Rightful Reward": weapon(
    "Rightful Reward",
    4,
    "Polearm",
    { en: "Rightful Reward", "zh-CN": "公义的酬报" },
    [
      "Broken Goblet of the Pristine Sea",
      "Rift Core",
      "Meshing Gear",
      "Midlander Polearm Billet",
      "Condessence Crystal",
      "White Iron Chunk",
    ]
  ),
  "Prospector’s Drill": weapon(
    "Prospector’s Drill",
    4,
    "Polearm",
    { en: "Prospector’s Drill", "zh-CN": "勘探钻机" },
    [
      "Fragment of an Ancient Chord",
      "Old Operative’s Pocket Watch",
      "Meshing Gear",
    ]
  ),
  "Dialogues of the Desert Sages": weapon(
    "Dialogues of the Desert Sages",
    4,
    "Polearm",
    { en: "Dialogues of the Desert Sages", "zh-CN": "沙中伟贤的对答" },
    ["Copper Talisman of the Forest Dew", "Feathery Fin", "Spectral Husk"]
  ),
  "Footprint of the Rainbow": weapon(
    "Footprint of the Rainbow",
    4,
    "Polearm",
    { en: "Footprint of the Rainbow", "zh-CN": "虹的行迹" },
    [
      "Delirious Decadence of the Sacred Lord",
      "Axis of the Secret Source",
      "Sentry’s Wooden Whistle",
      "Borderland Polearm Billet",
      "Condessence Crystal",
      "White Iron Chunk",
    ]
  ),
  "Mountain-Bracing Bolt": weapon(
    "Mountain-Bracing Bolt",
    4,
    "Polearm",
    { en: "Mountain-Bracing Bolt", "zh-CN": "镇山之钉" },
    [
      "Delirious Decadence of the Sacred Lord",
      "Ignited Stone",
      "Whopperflower Nectar",
    ]
  ),
  "Tamayuratei no Ohanashi": weapon(
    "Tamayuratei no Ohanashi",
    4,
    "Polearm",
    { en: "Tamayuratei no Ohanashi", "zh-CN": "且住亭御咄" },
    ["Mask of the Wicked Lieutenant", "Refractive Bud", "Old Handguard"]
  ),
  "Prospector’s Shovel": weapon("Prospector’s Shovel", 4, "Polearm", {
    en: "Prospector’s Shovel",
    "zh-CN": "掘金之锹",
  }),
  //
  // Newline - polearm 4
  //
  "The Flute": weapon(
    "The Flute",
    4,
    "Sword",
    { en: ["The Flute"], "zh-CN": ["笛剑"] },
    ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Slime Condensate"]
  ),
  "The Black Sword": weapon(
    "The Black Sword",
    4,
    "Sword",
    { en: ["The Black Sword"], "zh-CN": ["黑剑"] },
    ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Slime Condensate"]
  ),
  "The Alley Flash": weapon(
    "The Alley Flash",
    4,
    "Sword",
    { en: ["The Alley Flash"], "zh-CN": ["暗巷闪光"] },
    ["Tile of Decarabian’s Tower", "Heavy Horn", "Divining Scroll"]
  ),
  "Sword of Descension": weapon(
    "Sword of Descension",
    4,
    "Sword",
    { en: ["Sword of Descension"], "zh-CN": ["降临之剑"] },
    [
      "Boreal Wolf’s Milk Tooth",
      "Dead Ley Line Branch",
      "Treasure Hoarder Insignia",
    ]
  ),
  "Sacrificial Sword": weapon(
    "Sacrificial Sword",
    4,
    "Sword",
    { en: ["Sacrificial Sword"], "zh-CN": ["祭礼剑"] },
    ["Fetters of the Dandelion Gladiator", "Chaos Device", "Divining Scroll"]
  ),
  "Royal Longsword": weapon(
    "Royal Longsword",
    4,
    "Sword",
    { en: ["Royal Longsword"], "zh-CN": ["宗室长剑"] },
    ["Tile of Decarabian’s Tower", "Heavy Horn", "Damaged Mask"]
  ),
  "Prototype Rancour": weapon(
    "Prototype Rancour",
    4,
    "Sword",
    { en: ["Prototype Rancour"], "zh-CN": ["试作斩岩"] },
    [
      "Mist Veiled Lead Elixir",
      "Mist Grass Pollen",
      "Recruit’s Insignia",
      "Northlander Sword Billet",
      "Crystal Chunk",
      "White Iron Chunk",
    ]
  ),
  "Amenoma Kageuchi": weapon(
    "Amenoma Kageuchi",
    4,
    "Sword",
    { en: ["Amenoma Kageuchi"], "zh-CN": ["天目影打刀"] },
    [
      "Coral Branch of a Distant Sea",
      "Chaos Gear",
      "Old Handguard",
      "Northlander Sword Billet",
      "Amethyst Lump",
      "White Iron Chunk",
    ]
  ),
  "Lion’s Roar": weapon(
    "Lion’s Roar",
    4,
    "Sword",
    { en: ["Lion’s Roar"], "zh-CN": ["匣里龙吟"] },
    [
      "Luminous Sands from Guyun",
      "Hunter’s Sacrificial Knife",
      "Treasure Hoarder Insignia",
    ]
  ),
  "Iron Sting": weapon(
    "Iron Sting",
    4,
    "Sword",
    { en: ["Iron Sting"], "zh-CN": ["铁蜂刺"] },
    [
      "Grain of Aerosiderite",
      "Fragile Bone Shard",
      "Whopperflower Nectar",
      "Northlander Sword Billet",
      "Crystal Chunk",
      "White Iron Chunk",
    ]
  ),
  "Festering Desire": weapon(
    "Festering Desire",
    4,
    "Sword",
    { en: ["Festering Desire"], "zh-CN": ["腐殖之剑"] },
    ["Fetters of the Dandelion Gladiator", "Heavy Horn", "Recruit’s Insignia"]
  ),
  "Favonius Sword": weapon(
    "Favonius Sword",
    4,
    "Sword",
    { en: ["Favonius Sword"], "zh-CN": ["西风剑"] },
    ["Tile of Decarabian’s Tower", "Heavy Horn", "Firm Arrowhead"]
  ),
  "Cinnabar Spindle": weapon(
    "Cinnabar Spindle",
    4,
    "Sword",
    { en: ["Cinnabar Spindle"], "zh-CN": ["辰砂之纺锤"] },
    ["Tile of Decarabian’s Tower", "Chaos Device", "Damaged Mask"]
  ),
  "Blackcliff Longsword": weapon(
    "Blackcliff Longsword",
    4,
    "Sword",
    { en: ["Blackcliff Longsword"], "zh-CN": ["黑岩长剑"] },
    [
      "Luminous Sands from Guyun",
      "Hunter’s Sacrificial Knife",
      "Firm Arrowhead",
    ]
  ),
  "Kagotsurube Isshin": weapon(
    "Kagotsurube Isshin",
    4,
    "Sword",
    { en: ["Kagotsurube Isshin"], "zh-CN": ["笼钓瓶一心"] },
    ["Mask of the Wicked Lieutenant", "Gloomy Statuette", "Spectral Husk"]
  ),
  "Sapwood Blade": weapon(
    "Sapwood Blade",
    4,
    "Sword",
    { en: ["Sapwood Blade"], "zh-CN": ["原木刀"] },
    [
      "Copper Talisman of the Forest Dew",
      "Chaos Storage",
      "Faded Red Satin",
      "Midlander Sword Billet",
      "Crystal Chunk",
      "White Iron Chunk",
    ]
  ),
  "Xiphos’ Moonlight": weapon(
    "Xiphos’ Moonlight",
    4,
    "Sword",
    { en: ["Xiphos’ Moonlight"], "zh-CN": ["西福斯的月光"] },
    ["Copper Talisman of the Forest Dew", "Damaged Prism", "Faded Red Satin"]
  ),
  "Toukabou Shigure": weapon(
    "Toukabou Shigure",
    4,
    "Sword",
    { en: "Toukabou Shigure", "zh-CN": "东花坊时雨" },
    ["Narukami’s Wisdom", "Damaged Prism", "Old Handguard"]
  ),
  "Fleuve Cendre Ferryman": weapon(
    "Fleuve Cendre Ferryman",
    4,
    "Sword",
    { en: "Fleuve Cendre Ferryman", "zh-CN": "灰河渡手" },
    [
      "Fragment of an Ancient Chord",
      "Drop of Tainted Water",
      "Transoceanic Pearl",
      "Maintenance Mek: Platinum Collection",
      "Rippling Heartfeather Bass",
      "Blazing Heartfeather Bass",
      "Streaming Axe Marlin",
    ]
  ),
  "Wolf-Fang": weapon(
    "Wolf-Fang",
    4,
    "Sword",
    { en: "Wolf-Fang", "zh-CN": "狼牙" },
    ["Tile of Decarabian’s Tower", "Chaos Device", "Damaged Mask"]
  ),
  "Finale of the Deep": weapon(
    "Finale of the Deep",
    4,
    "Sword",
    { en: "Finale of the Deep", "zh-CN": "海渊终曲" },
    [
      "Dross of Pure Sacred Dewdrop",
      "Drop of Tainted Water",
      "Old Handguard",
      "Midlander Sword Billet",
      "Condessence Crystal",
      "White Iron Chunk",
    ]
  ),
  "The Dockhand’s Assistant": weapon(
    "The Dockhand’s Assistant",
    4,
    "Sword",
    { en: "The Dockhand’s Assistant", "zh-CN": "船坞长剑" },
    [
      "Dross of Pure Sacred Dewdrop",
      "Old Operative’s Pocket Watch",
      "Transoceanic Pearl",
    ]
  ),
  "Sword of Narzissenkreuz": weapon(
    "Sword of Narzissenkreuz",
    4,
    "Sword",
    { en: "Sword of Narzissenkreuz", "zh-CN": "水仙十字之剑" },
    [
      "Fragment of an Ancient Chord",
      "Old Operative’s Pocket Watch",
      "Transoceanic Pearl",
    ]
  ),
  "Flute of Ezpitzal": weapon(
    "Flute of Ezpitzal",
    4,
    "Sword",
    { en: "Flute of Ezpitzal", "zh-CN": "息燧之笛" },
    [
      "Blazing Sacrificial Heart’s Terror",
      "Ruined Hilt",
      "Juvenile Fang",
      "Borderland Sword Billet",
      "Condessence Crystal",
      "White Iron Chunk",
    ]
  ),
  "Sturdy Bone": weapon(
    "Sturdy Bone",
    4,
    "Sword",
    { en: "Sturdy Bone", "zh-CN": "弥坚骨" },
    [
      "Blazing Sacrificial Heart’s Terror",
      "Shard of a Shattered Will",
      "Sentry’s Wooden Whistle",
    ]
  ),
  "Calamity of Eshu": weapon(
    "Calamity of Eshu",
    4,
    "Sword",
    { en: "Calamity of Eshu", "zh-CN": "厄水之祸" },
    [
      "Delirious Decadence of the Sacred Lord",
      "Refractive Bud",
      "Sentry’s Wooden Whistle",
    ]
  ),
  "Serenit’s Call": weapon("Serenit’s Call", 4, "Sword", {
    en: "Serenit’s Call",
    "zh-CN": "谧音吹哨",
  }),
  //
  // Newline - sword 4
  //
  "Raven Bow": weapon(
    "Raven Bow",
    3,
    "Bow",
    { en: ["Raven Bow"], "zh-CN": ["鸦羽弓"] },
    ["Tile of Decarabian’s Tower", "Heavy Horn", "Firm Arrowhead"]
  ),
  "Recurve Bow": weapon(
    "Recurve Bow",
    3,
    "Bow",
    { en: ["Recurve Bow"], "zh-CN": ["反曲弓"] },
    ["Fetters of the Dandelion Gladiator", "Chaos Device", "Divining Scroll"]
  ),
  Messenger: weapon(
    "Messenger",
    3,
    "Bow",
    { en: ["Messenger"], "zh-CN": ["信使"] },
    [
      "Mist Veiled Lead Elixir",
      "Mist Grass Pollen",
      "Treasure Hoarder Insignia",
    ]
  ),
  "Sharpshooter’s Oath": weapon(
    "Sharpshooter’s Oath",
    3,
    "Bow",
    { en: ["Sharpshooter’s Oath"], "zh-CN": ["神射手之誓"] },
    ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Slime Condensate"]
  ),
  Slingshot: weapon(
    "Slingshot",
    3,
    "Bow",
    { en: ["Slingshot"], "zh-CN": ["弹弓"] },
    ["Luminous Sands from Guyun", "Hunter’s Sacrificial Knife", "Damaged Mask"]
  ),
  "Magic Guide": weapon(
    "Magic Guide",
    3,
    "Catalyst",
    { en: ["Magic Guide"], "zh-CN": ["魔导绪论"] },
    ["Tile of Decarabian’s Tower", "Heavy Horn", "Slime Condensate"]
  ),
  "Otherworldly Story": weapon(
    "Otherworldly Story",
    3,
    "Catalyst",
    { en: ["Otherworldly Story"], "zh-CN": ["异世界行记"] },
    ["Fetters of the Dandelion Gladiator", "Chaos Device", "Damaged Mask"]
  ),
  "Emerald Orb": weapon(
    "Emerald Orb",
    3,
    "Catalyst",
    { en: ["Emerald Orb"], "zh-CN": ["翡玉法球"] },
    [
      "Luminous Sands from Guyun",
      "Hunter’s Sacrificial Knife",
      "Treasure Hoarder Insignia",
    ]
  ),
  "Thrilling Tales of Dragon Slayers": weapon(
    "Thrilling Tales of Dragon Slayers",
    3,
    "Catalyst",
    { en: ["Thrilling Tales of Dragon Slayers"], "zh-CN": ["讨龙英杰谭"] },
    ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Divining Scroll"]
  ),
  "Twin Nephrite": weapon(
    "Twin Nephrite",
    3,
    "Catalyst",
    { en: ["Twin Nephrite"], "zh-CN": ["甲级宝珏"] },
    ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Recruit’s Insignia"]
  ),
  "Skyrider Greatsword": weapon(
    "Skyrider Greatsword",
    3,
    "Claymore",
    { en: ["Skyrider Greatsword"], "zh-CN": ["飞天大御剑"] },
    ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Damaged Mask"]
  ),
  "Debate Club": weapon(
    "Debate Club",
    3,
    "Claymore",
    { en: ["Debate Club"], "zh-CN": ["以理服人"] },
    ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Damaged Mask"]
  ),
  "Bloodtainted Greatsword": weapon(
    "Bloodtainted Greatsword",
    3,
    "Claymore",
    { en: ["Bloodtainted Greatsword"], "zh-CN": ["沐浴龙血的剑"] },
    ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Firm Arrowhead"]
  ),
  "White Iron Greatsword": weapon(
    "White Iron Greatsword",
    3,
    "Claymore",
    { en: ["White Iron Greatsword"], "zh-CN": ["白铁大剑"] },
    ["Fetters of the Dandelion Gladiator", "Chaos Device", "Slime Condensate"]
  ),
  "Ferrous Shadow": weapon(
    "Ferrous Shadow",
    3,
    "Claymore",
    { en: ["Ferrous Shadow"], "zh-CN": ["铁影阔剑"] },
    ["Tile of Decarabian’s Tower", "Heavy Horn", "Whopperflower Nectar"]
  ),
  Halberd: weapon(
    "Halberd",
    3,
    "Polearm",
    { en: ["Halberd"], "zh-CN": ["钺矛"] },
    ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Whopperflower Nectar"]
  ),
  "Black Tassel": weapon(
    "Black Tassel",
    3,
    "Polearm",
    { en: ["Black Tassel"], "zh-CN": ["黑缨枪"] },
    ["Grain of Aerosiderite", "Fragile Bone Shard", "Firm Arrowhead"]
  ),
  "White Tassel": weapon(
    "White Tassel",
    3,
    "Polearm",
    { en: ["White Tassel"], "zh-CN": ["白缨枪"] },
    [
      "Luminous Sands from Guyun",
      "Hunter’s Sacrificial Knife",
      "Recruit’s Insignia",
    ]
  ),
  "Harbinger of Dawn": weapon(
    "Harbinger of Dawn",
    3,
    "Sword",
    { en: ["Harbinger of Dawn"], "zh-CN": ["黎明神剑"] },
    ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Slime Condensate"]
  ),
  "Fillet Blade": weapon(
    "Fillet Blade",
    3,
    "Sword",
    { en: ["Fillet Blade"], "zh-CN": ["吃虎鱼刀"] },
    [
      "Mist Veiled Lead Elixir",
      "Mist Grass Pollen",
      "Treasure Hoarder Insignia",
    ]
  ),
  "Skyrider Sword": weapon(
    "Skyrider Sword",
    3,
    "Sword",
    { en: ["Skyrider Sword"], "zh-CN": ["飞天御剑"] },
    ["Grain of Aerosiderite", "Fragile Bone Shard", "Recruit’s Insignia"]
  ),
  "Dark Iron Sword": weapon(
    "Dark Iron Sword",
    3,
    "Sword",
    { en: ["Dark Iron Sword"], "zh-CN": ["暗铁剑"] },
    ["Luminous Sands from Guyun", "Hunter’s Sacrificial Knife", "Damaged Mask"]
  ),
  "Cool Steel": weapon(
    "Cool Steel",
    3,
    "Sword",
    { en: ["Cool Steel"], "zh-CN": ["冷刃"] },
    ["Tile of Decarabian’s Tower", "Heavy Horn", "Firm Arrowhead"]
  ),
  "Traveler’s Handy Sword": weapon(
    "Traveler’s Handy Sword",
    3,
    "Sword",
    { en: ["Traveler’s Handy Sword"], "zh-CN": ["旅行剑"] },
    ["Fetters of the Dandelion Gladiator", "Chaos Device", "Divining Scroll"]
  ),
} as const;

export type WeaponId = keyof typeof _weapons;

export const weapons: Record<WeaponId, Weapon> = _weapons;
