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

export const weapons: Weapon[] = [
  weapon(
    "Polar Star",
    5,
    "Bow",
    { en: ["Polar Star"], "zh-CN": ["冬极白星"] },
    ["Mask of the Wicked Lieutenant", "Concealed Claw", "Spectral Husk"]
  ),
  weapon(
    "Thundering Pulse",
    5,
    "Bow",
    { en: ["Thundering Pulse"], "zh-CN": ["飞雷之弦振"] },
    ["Narukami’s Wisdom", "Dismal Prism", "Firm Arrowhead"]
  ),
  weapon(
    "Elegy for the End",
    5,
    "Bow",
    { en: ["Elegy for the End"], "zh-CN": ["终末嗟叹之诗"] },
    ["Boreal Wolf’s Milk Tooth", "Heavy Horn", "Recruit’s Insignia"]
  ),
  weapon(
    "Skyward Harp",
    5,
    "Bow",
    { en: ["Skyward Harp"], "zh-CN": ["天空之翼"] },
    ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Firm Arrowhead"]
  ),
  weapon(
    "Amos’ Bow",
    5,
    "Bow",
    { en: ["Amos’ Bow"], "zh-CN": ["阿莫斯之弓"] },
    ["Fetters of the Dandelion Gladiator", "Chaos Device", "Slime Condensate"]
  ),
  weapon(
    "Aqua Simulacra",
    5,
    "Bow",
    { en: ["Aqua Simulacra"], "zh-CN": ["若水"] },
    ["Luminous Sands from Guyun", "Gloomy Statuette", "Spectral Husk"]
  ),
  weapon(
    "Hunter’s Path",
    5,
    "Bow",
    { en: ["Hunter’s Path"], "zh-CN": ["猎人之径"] },
    ["Echo of Scorching Might", "Inactivated Fungal Nucleus", "Faded Red Satin"]
  ),
  weapon(
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
  weapon(
    "Silvershower Heartstrings",
    5,
    "Bow",
    { en: "Silvershower Heartstrings", "zh-CN": "白雨心弦" },
    ["Dross of Pure Sacred Dewdrop", "Feathery Fin", "Transoceanic Pearl"]
  ),
  weapon(
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
  weapon(
    "Lost Prayer to the Sacred Winds",
    5,
    "Catalyst",
    { en: ["Lost Prayer to the Sacred Winds"], "zh-CN": ["四风原典"] },
    ["Fetters of the Dandelion Gladiator", "Chaos Device", "Slime Condensate"]
  ),
  weapon(
    "Skyward Atlas",
    5,
    "Catalyst",
    { en: ["Skyward Atlas"], "zh-CN": ["天空之卷"] },
    ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Firm Arrowhead"]
  ),
  weapon(
    "Everlasting Moonglow",
    5,
    "Catalyst",
    { en: ["Everlasting Moonglow"], "zh-CN": ["不灭月华"] },
    ["Coral Branch of a Distant Sea", "Dismal Prism", "Spectral Husk"]
  ),
  weapon(
    "Memory of Dust",
    5,
    "Catalyst",
    { en: ["Memory of Dust"], "zh-CN": ["尘世之锁"] },
    ["Grain of Aerosiderite", "Fragile Bone Shard", "Damaged Mask"]
  ),
  weapon(
    "Kagura’s Verity",
    5,
    "Catalyst",
    { en: ["Kagura’s Verity"], "zh-CN": ["神乐之真意"] },
    ["Mask of the Wicked Lieutenant", "Concealed Claw", "Spectral Husk"]
  ),
  weapon(
    "A Thousand Floating Dreams",
    5,
    "Catalyst",
    { en: ["A Thousand Floating Dreams"], "zh-CN": ["千夜浮梦"] },
    ["Oasis Garden’s Reminiscence", "Damaged Prism", "Fungal Spores"]
  ),
  weapon(
    "Tulaytulla’s Rememberance",
    5,
    "Catalyst",
    { en: "Tulaytulla’s Rememberance", "zh-CN": "图莱杜拉的回忆" },
    ["Echo of Scorching Might", "Inactivated Fungal Nucleus", "Fungal Spores"]
  ),
  weapon(
    "Jadefall’s Splendor",
    5,
    "Catalyst",
    { en: "Jadefall’s Splendor", "zh-CN": "碧落之珑" },
    ["Luminous Sands from Guyun", "A Flower Yet to Bloom", "Fungal Spores"]
  ),
  weapon(
    "Tome of the Eternal Flow",
    5,
    "Catalyst",
    { en: "Tome of the Eternal Flow", "zh-CN": "万世流涌大典" },
    ["Dross of Pure Sacred Dewdrop", "Rift Core", "Meshing Gear"]
  ),
  weapon(
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
  weapon(
    "Crane’s Echoing Call",
    5,
    "Catalyst",
    { en: "Crane’s Echoing Call", "zh-CN": "鹤鸣余音" },
    ["Mist Veiled Lead Elixir", "Feathery Fin", "Divining Scroll"]
  ),
  weapon("Surf’s Up", 5, "Catalyst", { en: "Surf’s Up", "zh-CN": "冲浪时光" }, [
    "Blazing Sacrificial Heart’s Terror",
    "Shard of a Shattered Will",
    "Juvenile Fang",
  ]),
  weapon(
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
  weapon(
    "Sunny Morning Sleep-In",
    5,
    "Catalyst",
    { en: "Sunny Morning Sleep-In", "zh-CN": "寝正月初晴" },
    ["Narukami’s Wisdom", "Ignited Stone", "Spectral Husk"]
  ),
  weapon(
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
  weapon(
    "Nightweaver’s Looking Glass",
    5,
    "Catalyst",
    { en: "Nightweaver’s Looking Glass", "zh-CN": "纺夜天镜" },
    ["Artful Device Fragment", "Frostnight’s Glimmer", "Broken Drive Shaft"]
  ),
  //
  // Newline - catalyst 5
  //
  weapon(
    "Wolf’s Gravestone",
    5,
    "Claymore",
    { en: ["Wolf’s Gravestone"], "zh-CN": ["狼的末路"] },
    ["Fetters of the Dandelion Gladiator", "Chaos Device", "Divining Scroll"]
  ),
  weapon(
    "Skyward Pride",
    5,
    "Claymore",
    { en: ["Skyward Pride"], "zh-CN": ["天空之傲"] },
    ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Slime Condensate"]
  ),
  weapon(
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
  weapon(
    "Song of Broken Pines",
    5,
    "Claymore",
    { en: ["Song of Broken Pines"], "zh-CN": ["松籁响起之时"] },
    ["Tile of Decarabian’s Tower", "Heavy Horn", "Damaged Mask"]
  ),
  weapon(
    "Redhorn Stonethresher",
    5,
    "Claymore",
    { en: ["Redhorn Stonethresher"], "zh-CN": ["赤角石溃杵"] },
    ["Narukami’s Wisdom", "Concealed Claw", "Old Handguard"]
  ),
  weapon(
    "Beacon of the Reed Sea",
    5,
    "Claymore",
    { en: "Beacon of the Reed Sea", "zh-CN": "苇海信标" },
    ["Echo of Scorching Might", "Desiccated Shell", "Faded Red Satin"]
  ),
  weapon("Verdict", 5, "Claymore", { en: "Verdict", "zh-CN": "裁断" }, [
    "Fragment of an Ancient Chord",
    "Rift Core",
    "Meshing Gear",
  ]),
  weapon(
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
  weapon(
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
  weapon(
    "Engulfing Lightning",
    5,
    "Polearm",
    { en: ["Engulfing Lightning"], "zh-CN": ["薙草之稻光"] },
    ["Mask of the Wicked Lieutenant", "Chaos Gear", "Old Handguard"]
  ),
  weapon(
    "Skyward Spine",
    5,
    "Polearm",
    { en: ["Skyward Spine"], "zh-CN": ["天空之脊"] },
    ["Fetters of the Dandelion Gladiator", "Chaos Device", "Divining Scroll"]
  ),
  weapon(
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
  weapon(
    "Calamity Queller",
    5,
    "Polearm",
    { en: ["Calamity Queller"], "zh-CN": ["息灾"] },
    ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Whopperflower Nectar"]
  ),
  weapon(
    "Staff of Homa",
    5,
    "Polearm",
    { en: ["Staff of Homa"], "zh-CN": ["护摩之杖"] },
    ["Grain of Aerosiderite", "Dead Ley Line Branch", "Slime Condensate"]
  ),
  weapon(
    "Vortex Vanquisher",
    5,
    "Polearm",
    { en: ["Vortex Vanquisher"], "zh-CN": ["贯虹之槊"] },
    ["Grain of Aerosiderite", "Fragile Bone Shard", "Treasure Hoarder Insignia"]
  ),
  weapon(
    "Staff of the Scarlet Sands",
    5,
    "Polearm",
    { en: ["Staff of the Scarlet Sands"], "zh-CN": ["赤沙之杖"] },
    ["Oasis Garden’s Reminiscence", "Chaos Storage", "Fungal Spores"]
  ),
  weapon(
    "Crimson Moon’s Semblance",
    5,
    "Polearm",
    { en: "Crimson Moon’s Semblance", "zh-CN": "赤月之形" },
    ["Broken Goblet of the Pristine Sea", "Ruined Hilt", "Meshing Gear"]
  ),
  weapon(
    "Lumidouce Elegy",
    5,
    "Polearm",
    { en: "Lumidouce Elegy", "zh-CN": "柔灯挽歌" },
    ["Broken Goblet of the Pristine Sea", "Ruined Hilt", "Whopperflower Nectar"]
  ),
  weapon(
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
  weapon(
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
  weapon(
    "Bloodsoaked Ruins",
    5,
    "Polearm",
    {
      en: "Bloodsoaked Ruins",
      "zh-CN": "血染荒城",
    },
    [
      "Ember of Long Night Flint",
      "Mistshroud Manifestation",
      "Tattered Warrant",
    ]
  ),
  //
  // Newline - polearm 5
  //
  weapon(
    "Mistsplitter Reforged",
    5,
    "Sword",
    { en: ["Mistsplitter Reforged"], "zh-CN": ["雾切之回光"] },
    ["Coral Branch of a Distant Sea", "Chaos Gear", "Old Handguard"]
  ),
  weapon(
    "Aquila Favonia",
    5,
    "Sword",
    { en: ["Aquila Favonia"], "zh-CN": ["风鹰剑"] },
    ["Tile of Decarabian’s Tower", "Heavy Horn", "Firm Arrowhead"]
  ),
  weapon(
    "Summit Shaper",
    5,
    "Sword",
    { en: ["Summit Shaper"], "zh-CN": ["斫峰之刃"] },
    ["Luminous Sands from Guyun", "Hunter’s Sacrificial Knife", "Damaged Mask"]
  ),
  weapon(
    "Skyward Blade",
    5,
    "Sword",
    { en: ["Skyward Blade"], "zh-CN": ["天空之刃"] },
    ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Slime Condensate"]
  ),
  weapon(
    "Freedom-Sworn",
    5,
    "Sword",
    { en: ["Freedom-Sworn"], "zh-CN": ["苍古自由之誓"] },
    ["Fetters of the Dandelion Gladiator", "Chaos Device", "Divining Scroll"]
  ),
  weapon(
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
  weapon(
    "Haran Geppaku Futsu",
    5,
    "Sword",
    { en: ["Haran Geppaku Futsu"], "zh-CN": ["波乱月白经津"] },
    ["Narukami’s Wisdom", "Gloomy Statuette", "Old Handguard"]
  ),
  weapon(
    "Key of the Khaj-Nisut",
    5,
    "Sword",
    { en: ["Key of the Khaj-Nisut"], "zh-CN": ["圣显之钥"] },
    ["Copper Talisman of the Forest Dew", "Damaged Prism", "Faded Red Satin"]
  ),
  weapon(
    "Light of Foliar Incision",
    5,
    "Sword",
    { en: "Light of Foliar Incision", "zh-CN": "裁叶萃光" },
    ["Copper Talisman of the Forest Dew", "Desiccated Shell", "Faded Red Satin"]
  ),
  weapon(
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
  weapon(
    "Uraku Mitsugiri",
    5,
    "Sword",
    { en: "Uraku Mitsugiri", "zh-CN": "有乐御簾切" },
    ["Coral Branch of a Distant Sea", "Chaos Gear", "Old Handguard"]
  ),
  weapon("Absolution", 5, "Sword", { en: "Absolution", "zh-CN": "赦罪" }, [
    "Fragment of an Ancient Chord",
    "Old Operative’s Pocket Watch",
    "Meshing Gear",
  ]),
  weapon(
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
  weapon("Azurelight", 5, "Sword", { en: "Azurelight", "zh-CN": "苍耀" }, [
    "Night-Wind’s Mystic Consideration",
    "Refractive Bud",
    "Sentry’s Wooden Whistle",
  ]),
  //
  // Newline - sword 5
  //
  weapon(
    "Alley Hunter",
    4,
    "Bow",
    { en: ["Alley Hunter"], "zh-CN": ["暗巷猎手"] },
    ["Fetters of the Dandelion Gladiator", "Chaos Device", "Slime Condensate"]
  ),
  weapon(
    "The Viridescent Hunt",
    4,
    "Bow",
    { en: ["The Viridescent Hunt"], "zh-CN": ["苍翠猎弓"] },
    ["Tile of Decarabian’s Tower", "Heavy Horn", "Firm Arrowhead"]
  ),
  weapon(
    "The Stringless",
    4,
    "Bow",
    { en: ["The Stringless"], "zh-CN": ["绝弦"] },
    ["Tile of Decarabian’s Tower", "Heavy Horn", "Firm Arrowhead"]
  ),
  weapon(
    "Sacrificial Bow",
    4,
    "Bow",
    { en: ["Sacrificial Bow"], "zh-CN": ["祭礼弓"] },
    ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Slime Condensate"]
  ),
  weapon("Rust", 4, "Bow", { en: ["Rust"], "zh-CN": ["弓藏"] }, [
    "Luminous Sands from Guyun",
    "Hunter’s Sacrificial Knife",
    "Damaged Mask",
  ]),
  weapon("Royal Bow", 4, "Bow", { en: ["Royal Bow"], "zh-CN": ["宗室长弓"] }, [
    "Fetters of the Dandelion Gladiator",
    "Chaos Device",
    "Divining Scroll",
  ]),
  weapon("Predator", 4, "Bow", { en: ["Predator"], "zh-CN": ["掠食者"] }, [
    "Narukami’s Wisdom",
    "Dismal Prism",
    "Firm Arrowhead",
  ]),
  weapon(
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
  weapon(
    "Mouun’s Moon",
    4,
    "Bow",
    { en: ["Mouun’s Moon"], "zh-CN": ["曚云之月"] },
    ["Narukami’s Wisdom", "Dismal Prism", "Spectral Husk"]
  ),
  weapon(
    "Mitternachts Waltz",
    4,
    "Bow",
    { en: ["Mitternachts Waltz"], "zh-CN": ["幽夜华尔兹"] },
    ["Tile of Decarabian’s Tower", "Heavy Horn", "Treasure Hoarder Insignia"]
  ),
  weapon("Hamayumi", 4, "Bow", { en: ["Hamayumi"], "zh-CN": ["破魔之弓"] }, [
    "Narukami’s Wisdom",
    "Dismal Prism",
    "Firm Arrowhead",
    "Northlander Bow Billet",
    "Amethyst Lump",
    "White Iron Chunk",
  ]),
  weapon(
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
  weapon(
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
  weapon(
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
  weapon(
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
  weapon(
    "Fading Twilight",
    4,
    "Bow",
    { en: ["Fading Twilight"], "zh-CN": ["落霞"] },
    ["Grain of Aerosiderite", "Hunter’s Sacrificial Knife", "Divining Scroll"]
  ),
  weapon(
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
  weapon(
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
  weapon(
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
  weapon(
    "Scion of the Blazing Sun",
    4,
    "Bow",
    { en: "Scion of the Blazing Sun", "zh-CN": "烈阳之嗣" },
    ["Echo of Scorching Might", "A Flower Yet to Bloom", "Fungal Spores"]
  ),
  weapon(
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
  weapon("Range Gauge", 4, "Bow", { en: "Range Gauge", "zh-CN": "测距规" }, [
    "Fragment of an Ancient Chord",
    "Drop of Tainted Water",
    "Transoceanic Pearl",
  ]),
  weapon("Cloudforged", 4, "Bow", { en: "Cloudforged", "zh-CN": "筑云" }, [
    "Grain of Aerosiderite",
    "Ruined Hilt",
    "Recruit’s Insignia",
  ]),
  weapon("Chain Breaker", 4, "Bow", { en: "Chain Breaker", "zh-CN": "碎链" }, [
    "Night-Wind’s Mystic Consideration",
    "Feathery Fin",
    "Juvenile Fang",
    "Borderland Bow Billet",
    "Condessence Crystal",
    "White Iron Chunk",
  ]),
  weapon(
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
  weapon(
    "Sequence of Solitude",
    4,
    "Bow",
    { en: "Sequence of Solitude", "zh-CN": "冷寂迸音" },
    ["Fragment of an Ancient Chord", "Cold-Cracked Shellshard", "Meshing Gear"]
  ),
  weapon("Snare Hook", 4, "Bow", { en: "Snare Hook", "zh-CN": "罗网勾针" }, [
    "Ember of Long Night Flint",
    "Mistshroud Manifestation",
    "Firm Arrowhead",
  ]),
  //
  // Newline - bow 4
  //
  weapon(
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
  weapon(
    "The Widsith",
    4,
    "Catalyst",
    { en: ["The Widsith"], "zh-CN": ["流浪乐章"] },
    ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Damaged Mask"]
  ),
  weapon(
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
  weapon(
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
  weapon(
    "Royal Grimoire",
    4,
    "Catalyst",
    { en: ["Royal Grimoire"], "zh-CN": ["宗室秘法录"] },
    ["Tile of Decarabian’s Tower", "Heavy Horn", "Recruit’s Insignia"]
  ),
  weapon(
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
  weapon(
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
  weapon(
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
  weapon(
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
  weapon(
    "Favonius Codex",
    4,
    "Catalyst",
    { en: ["Favonius Codex"], "zh-CN": ["西风秘典"] },
    ["Tile of Decarabian’s Tower", "Heavy Horn", "Divining Scroll"]
  ),
  weapon(
    "Eye of Perception",
    4,
    "Catalyst",
    { en: ["Eye of Perception"], "zh-CN": ["昭心"] },
    ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Damaged Mask"]
  ),
  weapon(
    "Dodoco Tales",
    4,
    "Catalyst",
    { en: ["Dodoco Tales"], "zh-CN": ["嘟嘟可故事集"] },
    ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Damaged Mask"]
  ),
  weapon(
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
  weapon(
    "Oathsworn Eye",
    4,
    "Catalyst",
    { en: ["Oathsworn Eye"], "zh-CN": ["证誓之明瞳"] },
    ["Coral Branch of a Distant Sea", "Concealed Claw", "Spectral Husk"]
  ),
  weapon(
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
  weapon(
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
  weapon(
    "Sacrificial Jade",
    4,
    "Catalyst",
    { en: "Sacrificial Jade", "zh-CN": "遗祀玉珑" },
    ["Luminous Sands from Guyun", "Mist Grass Pollen", "Divining Scroll"]
  ),
  weapon(
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
  weapon(
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
  weapon(
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
  weapon(
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
  weapon(
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
  weapon(
    "Etherlight Spindlelute",
    4,
    "Catalyst",
    { en: "Etherlight Spindlelute", "zh-CN": "天光的纺琴" },
    [
      "Sundered Glory of the Far-North Scions",
      "Lightless Bone",
      "Tattered Warrant",
    ]
  ),
  weapon(
    "Blackmarrow Lantern",
    4,
    "Catalyst",
    { en: "Blackmarrow Lantern", "zh-CN": "乌髓孑灯" },
    [
      "Artful Device Fragment",
      "Frostnight’s Glimmer",
      "Tattered Warrant",
      "Borderland Catalyst Billet",
      "Rainbowdrop Crystal",
      "White Iron Chunk",
    ]
  ),
  //
  // Newline catalyst 4
  //
  weapon(
    "Akuoumaru",
    4,
    "Claymore",
    { en: ["Akuoumaru"], "zh-CN": ["恶王丸"] },
    ["Coral Branch of a Distant Sea", "Concealed Claw", "Old Handguard"]
  ),
  weapon(
    "Royal Greatsword",
    4,
    "Claymore",
    { en: ["Royal Greatsword"], "zh-CN": ["宗室大剑"] },
    ["Fetters of the Dandelion Gladiator", "Chaos Device", "Slime Condensate"]
  ),
  weapon(
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
  weapon("The Bell", 4, "Claymore", { en: ["The Bell"], "zh-CN": ["钟剑"] }, [
    "Tile of Decarabian’s Tower",
    "Heavy Horn",
    "Whopperflower Nectar",
  ]),
  weapon(
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
  weapon(
    "Favonius Greatsword",
    4,
    "Claymore",
    { en: ["Favonius Greatsword"], "zh-CN": ["西风大剑"] },
    ["Fetters of the Dandelion Gladiator", "Chaos Device", "Recruit’s Insignia"]
  ),
  weapon(
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
  weapon(
    "Sacrificial Greatsword",
    4,
    "Claymore",
    { en: ["Sacrificial Greatsword"], "zh-CN": ["祭礼大剑"] },
    ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Firm Arrowhead"]
  ),
  weapon(
    "Serpent Spine",
    4,
    "Claymore",
    { en: ["Serpent Spine"], "zh-CN": ["螭骨剑"] },
    ["Grain of Aerosiderite", "Fragile Bone Shard", "Whopperflower Nectar"]
  ),
  weapon(
    "Blackcliff Slasher",
    4,
    "Claymore",
    { en: ["Blackcliff Slasher"], "zh-CN": ["黑岩斩刀"] },
    ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Recruit’s Insignia"]
  ),
  weapon(
    "Rainslasher",
    4,
    "Claymore",
    { en: ["Rainslasher"], "zh-CN": ["雨裁"] },
    ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Divining Scroll"]
  ),
  weapon(
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
  weapon(
    "Luxurious Sea-Lord",
    4,
    "Claymore",
    { en: ["Luxurious Sea-Lord"], "zh-CN": ["衔珠海皇"] },
    ["Grain of Aerosiderite", "Fragile Bone Shard", "Slime Condensate"]
  ),
  weapon(
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
  weapon(
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
  weapon(
    "Makhaira Aquamarine",
    4,
    "Claymore",
    { en: ["Makhaira Aquamarine"], "zh-CN": ["玛海菈的水色"] },
    ["Echo of Scorching Might", "Chaos Storage", "Treasure Hoarder Insignia"]
  ),
  weapon(
    "Mailed Flower",
    4,
    "Claymore",
    { en: "Mailed Flower", "zh-CN": "饰铁之花" },
    ["Fetters of the Dandelion Gladiator", "Desiccated Shell", "Spectral Husk"]
  ),
  weapon(
    "Talking Stick",
    4,
    "Claymore",
    { en: "Talking Stick", "zh-CN": "聊聊棒" },
    ["Oasis Garden’s Reminiscence", "Desiccated Shell", "Slime Condensate"]
  ),
  weapon(
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
  weapon(
    "Portable Power Saw",
    4,
    "Claymore",
    { en: "Portable Power Saw", "zh-CN": "便携动力锯" },
    ["Broken Goblet of the Pristine Sea", "Rift Core", "Meshing Gear"]
  ),
  weapon(
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
  weapon(
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
  weapon(
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
  weapon(
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
  weapon(
    "Master Key",
    4,
    "Claymore",
    { en: "Master Key", "zh-CN": "万能钥匙" },
    [
      "Sundered Glory of the Far-North Scions",
      "Lightless Bone",
      "Broken Drive Shaft",
      "Borderland Claymore Billet",
      "Rainbowdrop Crystal",
      "White Iron Chunk",
    ]
  ),
  //
  // Newline - claymore 4
  //
  weapon(
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
  weapon(
    "Lithic Spear",
    4,
    "Polearm",
    { en: ["Lithic Spear"], "zh-CN": ["千岩长枪"] },
    ["Grain of Aerosiderite", "Fragile Bone Shard", "Firm Arrowhead"]
  ),
  weapon(
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
  weapon(
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
  weapon(
    "Favonius Lance",
    4,
    "Polearm",
    { en: ["Favonius Lance"], "zh-CN": ["西风长枪"] },
    ["Fetters of the Dandelion Gladiator", "Chaos Device", "Slime Condensate"]
  ),
  weapon(
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
  weapon(
    "Dragon’s Bane",
    4,
    "Polearm",
    { en: ["Dragon’s Bane"], "zh-CN": ["匣里灭辰"] },
    ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Divining Scroll"]
  ),
  weapon(
    "Deathmatch",
    4,
    "Polearm",
    { en: ["Deathmatch"], "zh-CN": ["决斗之枪"] },
    ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Whopperflower Nectar"]
  ),
  weapon(
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
  weapon(
    "Blackcliff Pole",
    4,
    "Polearm",
    { en: ["Blackcliff Pole"], "zh-CN": ["黑岩刺枪"] },
    ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Recruit’s Insignia"]
  ),
  weapon(
    "Wavebreaker’s Fin",
    4,
    "Polearm",
    { en: ["Wavebreaker’s Fin"], "zh-CN": ["断浪长鳍"] },
    ["Mask of the Wicked Lieutenant", "Concealed Claw", "Old Handguard"]
  ),
  weapon(
    "Royal Spear",
    4,
    "Polearm",
    { en: ["Royal Spear"], "zh-CN": ["宗室猎枪"] },
    ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Recruit’s Insignia"]
  ),
  weapon(
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
  weapon(
    "Missive Windspear",
    4,
    "Polearm",
    { en: ["Missive Windspear"], "zh-CN": ["风信之锋"] },
    ["Boreal Wolf’s Milk Tooth", "Gloomy Statuette", "Slime Condensate"]
  ),
  weapon(
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
  weapon(
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
  weapon(
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
  weapon(
    "Dialogues of the Desert Sages",
    4,
    "Polearm",
    { en: "Dialogues of the Desert Sages", "zh-CN": "沙中伟贤的对答" },
    ["Copper Talisman of the Forest Dew", "Feathery Fin", "Spectral Husk"]
  ),
  weapon(
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
  weapon(
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
  weapon(
    "Tamayuratei no Ohanashi",
    4,
    "Polearm",
    { en: "Tamayuratei no Ohanashi", "zh-CN": "且住亭御咄" },
    ["Mask of the Wicked Lieutenant", "Refractive Bud", "Old Handguard"]
  ),
  weapon(
    "Prospector’s Shovel",
    4,
    "Polearm",
    { en: "Prospector’s Shovel", "zh-CN": "掘金之锹" },
    [
      "Ember of Long Night Flint",
      "Mistshroud Manifestation",
      "Broken Drive Shaft",
      "Borderland Polearm Billet",
      "Rainbowdrop Crystal",
      "White Iron Chunk",
    ]
  ),
  //
  // Newline - polearm 4
  //
  weapon("The Flute", 4, "Sword", { en: ["The Flute"], "zh-CN": ["笛剑"] }, [
    "Boreal Wolf’s Milk Tooth",
    "Dead Ley Line Branch",
    "Slime Condensate",
  ]),
  weapon(
    "The Black Sword",
    4,
    "Sword",
    { en: ["The Black Sword"], "zh-CN": ["黑剑"] },
    ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Slime Condensate"]
  ),
  weapon(
    "The Alley Flash",
    4,
    "Sword",
    { en: ["The Alley Flash"], "zh-CN": ["暗巷闪光"] },
    ["Tile of Decarabian’s Tower", "Heavy Horn", "Divining Scroll"]
  ),
  weapon(
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
  weapon(
    "Sacrificial Sword",
    4,
    "Sword",
    { en: ["Sacrificial Sword"], "zh-CN": ["祭礼剑"] },
    ["Fetters of the Dandelion Gladiator", "Chaos Device", "Divining Scroll"]
  ),
  weapon(
    "Royal Longsword",
    4,
    "Sword",
    { en: ["Royal Longsword"], "zh-CN": ["宗室长剑"] },
    ["Tile of Decarabian’s Tower", "Heavy Horn", "Damaged Mask"]
  ),
  weapon(
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
  weapon(
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
  weapon(
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
  weapon(
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
  weapon(
    "Festering Desire",
    4,
    "Sword",
    { en: ["Festering Desire"], "zh-CN": ["腐殖之剑"] },
    ["Fetters of the Dandelion Gladiator", "Heavy Horn", "Recruit’s Insignia"]
  ),
  weapon(
    "Favonius Sword",
    4,
    "Sword",
    { en: ["Favonius Sword"], "zh-CN": ["西风剑"] },
    ["Tile of Decarabian’s Tower", "Heavy Horn", "Firm Arrowhead"]
  ),
  weapon(
    "Cinnabar Spindle",
    4,
    "Sword",
    { en: ["Cinnabar Spindle"], "zh-CN": ["辰砂之纺锤"] },
    ["Tile of Decarabian’s Tower", "Chaos Device", "Damaged Mask"]
  ),
  weapon(
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
  weapon(
    "Kagotsurube Isshin",
    4,
    "Sword",
    { en: ["Kagotsurube Isshin"], "zh-CN": ["笼钓瓶一心"] },
    ["Mask of the Wicked Lieutenant", "Gloomy Statuette", "Spectral Husk"]
  ),
  weapon(
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
  weapon(
    "Xiphos’ Moonlight",
    4,
    "Sword",
    { en: ["Xiphos’ Moonlight"], "zh-CN": ["西福斯的月光"] },
    ["Copper Talisman of the Forest Dew", "Damaged Prism", "Faded Red Satin"]
  ),
  weapon(
    "Toukabou Shigure",
    4,
    "Sword",
    { en: "Toukabou Shigure", "zh-CN": "东花坊时雨" },
    ["Narukami’s Wisdom", "Damaged Prism", "Old Handguard"]
  ),
  weapon(
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
  weapon("Wolf-Fang", 4, "Sword", { en: "Wolf-Fang", "zh-CN": "狼牙" }, [
    "Tile of Decarabian’s Tower",
    "Chaos Device",
    "Damaged Mask",
  ]),
  weapon(
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
  weapon(
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
  weapon(
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
  weapon(
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
  weapon("Sturdy Bone", 4, "Sword", { en: "Sturdy Bone", "zh-CN": "弥坚骨" }, [
    "Blazing Sacrificial Heart’s Terror",
    "Shard of a Shattered Will",
    "Sentry’s Wooden Whistle",
  ]),
  weapon(
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
  weapon(
    "Serenity’s Call",
    4,
    "Sword",
    { en: "Serenity’s Call", "zh-CN": "谧音吹哨" },
    [
      "Artful Device Fragment",
      "Frostnight’s Glimmer",
      "Tattered Warrant",
      "Borderland Sword Billet",
      "Rainbowdrop Crystal",
      "White Iron Chunk",
    ]
  ),
  weapon(
    "Moonweaver’s Dawn",
    4,
    "Sword",
    { en: "Moonweaver’s Dawn", "zh-CN": "织月者的曙色" },
    [
      "Sundered Glory of the Far-North Scions",
      "Lightless Bone",
      "Broken Drive Shaft",
    ]
  ),
  //
  // Newline - sword 4
  //
  weapon("Raven Bow", 3, "Bow", { en: ["Raven Bow"], "zh-CN": ["鸦羽弓"] }, [
    "Tile of Decarabian’s Tower",
    "Heavy Horn",
    "Firm Arrowhead",
  ]),
  weapon(
    "Recurve Bow",
    3,
    "Bow",
    { en: ["Recurve Bow"], "zh-CN": ["反曲弓"] },
    ["Fetters of the Dandelion Gladiator", "Chaos Device", "Divining Scroll"]
  ),
  weapon("Messenger", 3, "Bow", { en: ["Messenger"], "zh-CN": ["信使"] }, [
    "Mist Veiled Lead Elixir",
    "Mist Grass Pollen",
    "Treasure Hoarder Insignia",
  ]),
  weapon(
    "Sharpshooter’s Oath",
    3,
    "Bow",
    { en: ["Sharpshooter’s Oath"], "zh-CN": ["神射手之誓"] },
    ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Slime Condensate"]
  ),
  weapon("Slingshot", 3, "Bow", { en: ["Slingshot"], "zh-CN": ["弹弓"] }, [
    "Luminous Sands from Guyun",
    "Hunter’s Sacrificial Knife",
    "Damaged Mask",
  ]),
  weapon(
    "Magic Guide",
    3,
    "Catalyst",
    { en: ["Magic Guide"], "zh-CN": ["魔导绪论"] },
    ["Tile of Decarabian’s Tower", "Heavy Horn", "Slime Condensate"]
  ),
  weapon(
    "Otherworldly Story",
    3,
    "Catalyst",
    { en: ["Otherworldly Story"], "zh-CN": ["异世界行记"] },
    ["Fetters of the Dandelion Gladiator", "Chaos Device", "Damaged Mask"]
  ),
  weapon(
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
  weapon(
    "Thrilling Tales of Dragon Slayers",
    3,
    "Catalyst",
    { en: ["Thrilling Tales of Dragon Slayers"], "zh-CN": ["讨龙英杰谭"] },
    ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Divining Scroll"]
  ),
  weapon(
    "Twin Nephrite",
    3,
    "Catalyst",
    { en: ["Twin Nephrite"], "zh-CN": ["甲级宝珏"] },
    ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Recruit’s Insignia"]
  ),
  weapon(
    "Skyrider Greatsword",
    3,
    "Claymore",
    { en: ["Skyrider Greatsword"], "zh-CN": ["飞天大御剑"] },
    ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Damaged Mask"]
  ),
  weapon(
    "Debate Club",
    3,
    "Claymore",
    { en: ["Debate Club"], "zh-CN": ["以理服人"] },
    ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Damaged Mask"]
  ),
  weapon(
    "Bloodtainted Greatsword",
    3,
    "Claymore",
    { en: ["Bloodtainted Greatsword"], "zh-CN": ["沐浴龙血的剑"] },
    ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Firm Arrowhead"]
  ),
  weapon(
    "White Iron Greatsword",
    3,
    "Claymore",
    { en: ["White Iron Greatsword"], "zh-CN": ["白铁大剑"] },
    ["Fetters of the Dandelion Gladiator", "Chaos Device", "Slime Condensate"]
  ),
  weapon(
    "Ferrous Shadow",
    3,
    "Claymore",
    { en: ["Ferrous Shadow"], "zh-CN": ["铁影阔剑"] },
    ["Tile of Decarabian’s Tower", "Heavy Horn", "Whopperflower Nectar"]
  ),
  weapon("Halberd", 3, "Polearm", { en: ["Halberd"], "zh-CN": ["钺矛"] }, [
    "Mist Veiled Lead Elixir",
    "Mist Grass Pollen",
    "Whopperflower Nectar",
  ]),
  weapon(
    "Black Tassel",
    3,
    "Polearm",
    { en: ["Black Tassel"], "zh-CN": ["黑缨枪"] },
    ["Grain of Aerosiderite", "Fragile Bone Shard", "Firm Arrowhead"]
  ),
  weapon(
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
  weapon(
    "Harbinger of Dawn",
    3,
    "Sword",
    { en: ["Harbinger of Dawn"], "zh-CN": ["黎明神剑"] },
    ["Boreal Wolf’s Milk Tooth", "Dead Ley Line Branch", "Slime Condensate"]
  ),
  weapon(
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
  weapon(
    "Skyrider Sword",
    3,
    "Sword",
    { en: ["Skyrider Sword"], "zh-CN": ["飞天御剑"] },
    ["Grain of Aerosiderite", "Fragile Bone Shard", "Recruit’s Insignia"]
  ),
  weapon(
    "Dark Iron Sword",
    3,
    "Sword",
    { en: ["Dark Iron Sword"], "zh-CN": ["暗铁剑"] },
    ["Luminous Sands from Guyun", "Hunter’s Sacrificial Knife", "Damaged Mask"]
  ),
  weapon("Cool Steel", 3, "Sword", { en: ["Cool Steel"], "zh-CN": ["冷刃"] }, [
    "Tile of Decarabian’s Tower",
    "Heavy Horn",
    "Firm Arrowhead",
  ]),
  weapon(
    "Traveler’s Handy Sword",
    3,
    "Sword",
    { en: ["Traveler’s Handy Sword"], "zh-CN": ["旅行剑"] },
    ["Fetters of the Dandelion Gladiator", "Chaos Device", "Divining Scroll"]
  ),
];
