import { I18nObject } from "../i18n";

export type Material = { name: I18nObject } & (
  | {
      id:
        | Common
        | CharacterAscension
        | TalentBook
        | TalentMaterial
        | LocalSpecialities
        | WeaponAscension
        | Elite;
      // eslint-disable-next-line no-mixed-spaces-and-tabs
    }
  | { id: Forging; forging: true }
  | { id: Fishing; fishing: true }
  | { id: Gem; gem: true }
);

export type Common =
  | "Slime Condensate"
  | "Damaged Mask"
  | "Divining Scroll"
  | "Firm Arrowhead"
  | "Recruit’s Insignia"
  | "Treasure Hoarder Insignia"
  | "Whopperflower Nectar"
  | "Old Handguard"
  | "Spectral Husk"
  | "Fungal Spores"
  | "Faded Red Satin"
  | "Meshing Gear"
  | "Transoceanic Pearl";

export type Elite =
  | "Concealed Claw"
  | "Mist Grass Pollen"
  | "Dismal Prism"
  | "Heavy Horn"
  | "Dead Ley Line Branch"
  | "Chaos Device"
  | "Gloomy Statuette"
  | "Inactivated Fungal Nucleus"
  | "Fragile Bone Shard"
  | "Damaged Prism"
  | "Desiccated Shell"
  | "Chaos Gear"
  | "Hunter’s Sacrificial Knife"
  | "Chaos Storage"
  | "A Flower Yet to Bloom"
  | "Drop of Tainted Water"
  | "Rift Core"
  | "Old Operative’s Pocket Watch";

export type CharacterAscension =
  | "Brilliant Diamond"
  | "Agnidus Agate"
  | "Varunada Lazurite"
  | "Vajrada Amethyst"
  | "Vayuda Turquoise"
  | "Shivada Jade"
  | "Prithiva Topaz"
  | "Nagadus Emerald"
  | "Hurricane Seed"
  | "Lightning Prism"
  | "Basalt Pillar"
  | "Hoarfrost Core"
  | "Everflame Seed"
  | "Cleansing Heart"
  | "Juvenile Jade"
  | "Crystalline Bloom"
  | "Marionette Core"
  | "Perpetual Heart"
  | "Smoldering Pearl"
  | "Dew of Repudiation"
  | "Storm Beads"
  | "Riftborn Regalia"
  | "Dragonheir’s False Fin"
  | "Runic Fang"
  | "Thunderclap Fruitcore"
  | "Majestic Hooked Beak"
  | "Light Guiding Tetrahedron"
  | "Perpetual Caliber"
  | "Quelled Creeper"
  | "Pseudo-Stamens"
  | "Evergloom Ring"
  | "Emperor’s Resolution"
  | "Artificed Spare Clockwork Component — Coppelia"
  | "Artificed Spare Clockwork Component — Coppelius"
  | "Fontemer Unihorn"
  | "“Tourbillon Device”"
  | "Water That Failed To Transcend";

export type TalentBook =
  | "Freedom"
  | "Resistance"
  | "Ballad"
  | "Prosperity"
  | "Diligence"
  | "Gold"
  | "Transience"
  | "Elegance"
  | "Light"
  | "Admonition"
  | "Ingenuity"
  | "Praxis"
  | "Equity"
  | "Justice"
  | "Order";

export type TalentMaterial =
  | "Crown of Insight"
  | "Dvalin’s Plume"
  | "Dvalin’s Claw"
  | "Dvalin’s Sigh"
  | "Tail of Boreas"
  | "Ring of Boreas"
  | "Spirit Locket of Boreas"
  | "Tusk of Monoceros Caeli"
  | "Shard of a Foul Legacy"
  | "Shadow of the Warrior"
  | "Dragon Lord’s Crown"
  | "Bloodjade Branch"
  | "Gilded Scale"
  | "Molten Moment"
  | "Hellfire Butterfly"
  | "Ashen Heart"
  | "Mudra of the Malefic General"
  | "Tears of the Calamitous God"
  | "The Meaning of Aeons"
  | "Puppet Strings"
  | "Mirror of Mushin"
  | "Daka’s Bell"
  | "Worldspan Fern"
  | "Primordial Greenbloom"
  | "Everamber"
  | "Lightless Silk String"
  | "Lightless Eye of the Maelstrom"
  | "Lightless Mass";

export type LocalSpecialities =
  | "Calla Lily"
  | "Cecilia"
  | "Dandelion Seed"
  | "Philanemo Mushroom"
  | "Small Lamp Grass"
  | "Valberry"
  | "Windwheel Aster"
  | "Wolfhook"
  | "Cor Lapis"
  | "Glaze Lily"
  | "Jueyun Chili"
  | "Noctilucous Jade"
  | "Qingxin"
  | "Silk Flower"
  | "Starconch"
  | "Violetgrass"
  | "Amakumo Fruit"
  | "Crystal Marrow"
  | "Dendrobium"
  | "Fluorescent Fungus"
  | "Naku Weed"
  | "Onikabuto"
  | "Sakura Bloom"
  | "Sango Pearl"
  | "Sea Ganoderma"
  | "Rukkhashava Mushrooms"
  | "Kalpalata Lotus"
  | "Nilotpala Lotus"
  | "Scarab"
  | "Henna Berry"
  | "Padisarah"
  | "Sand Grease Pupa"
  | "Mourning Flower"
  | "Beryl Conch"
  | "Lumidouce Bell"
  | "Rainbow Rose"
  | "Romaritime Flower"
  | "Lumitoile"
  | "Subdetection Unit"
  | "Lakelight Lily"
  | "Spring of the First Dewdrop";

export type WeaponAscension =
  | "Mask of the Wicked Lieutenant"
  | "Narukami’s Wisdom"
  | "Boreal Wolf’s Milk Tooth"
  | "Fetters of the Dandelion Gladiator"
  | "Luminous Sands from Guyun"
  | "Echo of Scorching Might"
  | "Coral Branch of a Distant Sea"
  | "Grain of Aerosiderite"
  | "Oasis Garden’s Reminiscence"
  | "Mist Veiled Lead Elixir"
  | "Tile of Decarabian’s Tower"
  | "Copper Talisman of the Forest Dew"
  | "Fragment of an Ancient Chord"
  | "Dross of Pure Sacred Dewdrop"
  | "Broken Goblet of the Pristine Sea";

export type Gem =
  | "Brilliant Diamond"
  | "Agnidus Agate"
  | "Varunada Lazurite"
  | "Vajrada Amethyst"
  | "Vayuda Turquoise"
  | "Shivada Jade"
  | "Prithiva Topaz"
  | "Nagadus Emerald";

export const northlanderBillets = [
  "Northlander Claymore Billet",
  "Northlander Polearm Billet",
  "Northlander Sword Billet",
  "Northlander Bow Billet",
  "Northlander Catalyst Billet",
] as const;

export const midlanderBillets = [
  "Midlander Claymore Billet",
  "Midlander Polearm Billet",
  "Midlander Sword Billet",
  "Midlander Bow Billet",
  "Midlander Catalyst Billet",
] as const;

export const forgingMaterials = [
  "Crystal Chunk",
  "White Iron Chunk",
  "Starsilver",
  "Vitalized Dragontooth",
  "Amethyst Lump",
  "Condessence Crystal",
] as const;

export type Forging = (
  | typeof northlanderBillets
  | typeof midlanderBillets
  | typeof forgingMaterials
)[number];

export const fishingMaterials = [
  "Raimei Angelfish",
  "Golden Koi",
  "Rusty Koi",
  "Pufferfish",
  "Bitter Pufferfish",
  "Peach of the Deep Waves",
  "Lazurite Axe Marlin",
  "Halcyon Jade Axe Marlin",
  "Maintenance Mek: Platinum Collection",
  "Rippling Heartfeather Bass",
  "Blazing Heartfeather Bass",
  "Streaming Axe Marlin",
] as const;

export type Fishing = (typeof fishingMaterials)[number];

const commons: readonly Material[] = [
  {
    id: "Slime Condensate",
    name: {
      en: ["Slime Condensate", "Slime Secretions", "Slime Concentrate"],
      "zh-CN": ["史莱姆凝液", "史莱姆清", "史莱姆原浆"],
    },
  },
  {
    id: "Damaged Mask",
    name: {
      en: ["Damaged Mask", "Stained Mask", "Ominous Mask"],
      "zh-CN": ["破损的面具", "污秽的面具", "不祥的面具"],
    },
  },
  {
    id: "Divining Scroll",
    name: {
      en: ["Divining Scroll", "Sealed Scroll", "Forbidden Curse Scroll"],
      "zh-CN": ["导能绘卷", "封魔绘卷", "禁咒绘卷"],
    },
  },
  {
    id: "Firm Arrowhead",
    name: {
      en: ["Firm Arrowhead", "Sharp Arrowhead", "Weathered Arrowhead"],
      "zh-CN": ["牢固的箭簇", "锐利的箭簇", "历战的箭簇"],
    },
  },
  {
    id: "Recruit’s Insignia",
    name: {
      en: [
        "Recruit’s Insignia",
        "Sergeant’s Insignia",
        "Lieutenant’s Insignia",
      ],
      "zh-CN": ["新兵的徽记", "士官的徽记", "尉官的徽记"],
    },
  },
  {
    id: "Treasure Hoarder Insignia",
    name: {
      en: [
        "Treasure Hoarder Insignia",
        "Silver Raven Insignia",
        "Golden Raven Insignia",
      ],
      "zh-CN": ["寻宝鸦印", "藏银鸦印", "攫金鸦印"],
    },
  },
  {
    id: "Whopperflower Nectar",
    name: {
      en: ["Whopperflower Nectar", "Shimmering Nectar", "Energy Nectar"],
      "zh-CN": ["骗骗花蜜", "微光花蜜", "原素花蜜"],
    },
  },
  {
    id: "Old Handguard",
    name: {
      en: ["Old Handguard", "Kageuchi Handguard", "Famed Handguard"],
      "zh-CN": ["破旧的刀镡", "影打刀镡", "名刀镡"],
    },
  },
  {
    id: "Spectral Husk",
    name: {
      en: ["Spectral Husk", "Spectral Heart", "Spectral Nucleus"],
      "zh-CN": ["浮游干核", "浮游幽核", "浮游晶化核"],
    },
  },
  {
    id: "Fungal Spores",
    name: {
      en: ["Fungal Spores", "Luminescent Pollen", "Crystalline Cyst Dust"],
      "zh-CN": ["蕈兽孢子", "荧光孢粉", "孢囊晶尘"],
    },
  },
  {
    id: "Faded Red Satin",
    name: {
      en: ["Faded Red Satin", "Trimmed Red Silk", "Rich Red Brocade"],
      "zh-CN": ["褪色红绸", "镶边红绸", "织金红绸"],
    },
  },
  {
    id: "Meshing Gear",
    name: {
      en: ["Meshing Gear", "Mechanical Spur Gear", "Artificed Dynamic Gear"],
      "zh-CN": ["啮合齿轮", "机关正齿轮", "奇械机芯齿轮"],
    },
  },
  {
    id: "Transoceanic Pearl",
    name: {
      en: ["Transoceanic Pearl", "Transoceanic Chunk", "Xenochromatic Crystal"],
      "zh-CN": ["异海凝珠", "异海之块", "异色结晶石"],
    },
  },
  //
  // Newline - common
  //
] as const;

const elites: readonly Material[] = [
  {
    id: "Concealed Claw",
    name: {
      en: ["Concealed Claw", "Concealed Unguis", "Concealed Talon"],
      "zh-CN": ["隐兽指爪", "隐兽利爪", "隐兽鬼爪"],
    },
  },
  {
    id: "Dismal Prism",
    name: {
      en: ["Dismal Prism", "Crystal Prism", "Polarizing Prism"],
      "zh-CN": ["黯淡棱镜", "水晶棱镜", "偏光棱镜"],
    },
  },
  {
    id: "Heavy Horn",
    name: {
      en: ["Heavy Horn", "Black Bronze Horn", "Black Crystal Horn"],
      "zh-CN": ["沉重号角", "黑铜号角", "黑晶号角"],
    },
  },
  {
    id: "Dead Ley Line Branch",
    name: {
      en: ["Dead Ley Line Branch", "Dead Ley Line Leaves", "Ley Line Sprout"],
      "zh-CN": ["地脉的旧枝", "地脉的枯叶", "地脉的新芽"],
    },
  },
  {
    id: "Chaos Device",
    name: {
      en: ["Chaos Device", "Chaos Circuit", "Chaos Core"],
      "zh-CN": ["混沌装置", "混沌回路", "混沌炉心"],
    },
  },
  {
    id: "Gloomy Statuette",
    name: {
      en: ["Gloomy Statuette", "Dark Statuette", "Deathly Statuette"],
      "zh-CN": ["晦暗刻像", "夤夜刻像", "幽邃刻像"],
    },
  },
  {
    id: "Inactivated Fungal Nucleus",
    name: {
      en: [
        "Inactivated Fungal Nucleus",
        "Dormant Fungal Nucleus",
        "Robust Fungal Nucleus",
      ],
      "zh-CN": ["失活菌核", "休眠菌核", "茁壮菌核"],
    },
  },
  {
    id: "Fragile Bone Shard",
    name: {
      en: ["Fragile Bone Shard", "Sturdy Bone Shard", "Fossilized Bone Shard"],
      "zh-CN": ["脆弱的骨片", "结实的骨片", "石化的骨片"],
    },
  },
  {
    id: "Damaged Prism",
    name: {
      en: ["Damaged Prism", "Turbid Prism", "Radiant Prism"],
      "zh-CN": ["破缺棱晶", "混浊棱晶", "辉光棱晶"],
    },
  },
  {
    id: "Desiccated Shell",
    name: {
      en: ["Desiccated Shell", "Sturdy Shell", "Marked Shell"],
      "zh-CN": ["残毁的横脊", "密固的横脊", "锲纹的横脊"],
    },
  },
  {
    id: "A Flower Yet to Bloom",
    name: {
      en: [
        "A Flower Yet to Bloom",
        "Treasured Flower",
        "Wanderer’s Blooming Flower",
      ],
      "zh-CN": ["来自何处的待放之花", "何人所珍藏之花", "漫游者的盛放之花"],
    },
  },
  {
    id: "Chaos Gear",
    name: {
      en: ["Chaos Gear", "Chaos Axis", "Chaos Oculus"],
      "zh-CN": ["混沌机关", "混沌枢纽", "混沌真眼"],
    },
  },
  {
    id: "Hunter’s Sacrificial Knife",
    name: {
      en: [
        "Hunter’s Sacrificial Knife",
        "Agent’s Sacrificial Knife",
        "Inspector’s Sacrificial Knife",
      ],
      "zh-CN": ["猎兵祭刀", "特工祭刀", "督察长祭刀"],
    },
  },
  {
    id: "Chaos Storage",
    name: {
      en: ["Chaos Storage", "Chaos Module", "Chaos Bolt"],
      "zh-CN": ["混沌容器", "混沌模块", "混沌锚栓"],
    },
  },
  {
    id: "Drop of Tainted Water",
    name: {
      en: [
        "Drop of Tainted Water",
        "Scoop of Tainted Water",
        "Newborn Tainted Hydro Phantasm",
      ],
      "zh-CN": ["浊水的一滴", "浊水的一掬", "初生的浊水幻灵"],
    },
  },
  {
    id: "Rift Core",
    name: {
      en: ["Rift Core", "Foreign Synapse", "Alien Life Core"],
      "zh-CN": ["隙间之核", "外世突触", "异界生命核"],
    },
  },
  {
    id: "Old Operative’s Pocket Watch",
    name: {
      en: [
        "Old Operative’s Pocket Watch",
        "Operative’s Standard Pocket Watch",
        "Operative’s Constancy",
      ],
      "zh-CN": ["老旧的役人怀表", "役人的制式怀表", "役人的时时刻刻"],
    },
  },
  {
    id: "Mist Grass Pollen",
    name: {
      en: ["Mist Grass Pollen", "Mist Grass", "Mist Grass Wick"],
      "zh-CN": ["雾虚花粉", "雾虚草囊", "雾虚灯芯"],
    },
  },
  //
  // Newline - elites
  //
] as const;

const localSpecialities: readonly Material[] = [
  { id: "Calla Lily", name: { en: "Calla Lily", "zh-CN": "嘟嘟莲" } },
  { id: "Cecilia", name: { en: "Cecilia", "zh-CN": "塞西莉亚花" } },
  {
    id: "Dandelion Seed",
    name: { en: "Dandelion Seed", "zh-CN": "蒲公英籽" },
  },
  {
    id: "Philanemo Mushroom",
    name: { en: "Philanemo Mushroom", "zh-CN": "慕风蘑菇" },
  },
  {
    id: "Small Lamp Grass",
    name: { en: "Small Lamp Grass", "zh-CN": "小灯草" },
  },
  { id: "Valberry", name: { en: "Valberry", "zh-CN": "落落莓" } },
  {
    id: "Windwheel Aster",
    name: { en: "Windwheel Aster", "zh-CN": "风车菊" },
  },
  { id: "Wolfhook", name: { en: "Wolfhook", "zh-CN": "钩钩果" } },
  { id: "Cor Lapis", name: { en: "Cor Lapis", "zh-CN": "石珀" } },
  { id: "Glaze Lily", name: { en: "Glaze Lily", "zh-CN": "琉璃百合" } },
  {
    id: "Jueyun Chili",
    name: { en: "Jueyun Chili", "zh-CN": "绝云椒椒" },
  },
  {
    id: "Noctilucous Jade",
    name: { en: "Noctilucous Jade", "zh-CN": "夜泊石" },
  },
  { id: "Qingxin", name: { en: "Qingxin", "zh-CN": "清心" } },
  { id: "Silk Flower", name: { en: "Silk Flower", "zh-CN": "霓裳花" } },
  { id: "Starconch", name: { en: "Starconch", "zh-CN": "星螺" } },
  { id: "Violetgrass", name: { en: "Violetgrass", "zh-CN": "琉璃袋" } },
  {
    id: "Amakumo Fruit",
    name: { en: "Amakumo Fruit", "zh-CN": "天云草实" },
  },
  {
    id: "Crystal Marrow",
    name: { en: "Crystal Marrow", "zh-CN": "晶化骨髓" },
  },
  { id: "Dendrobium", name: { en: "Dendrobium", "zh-CN": "血斛" } },
  {
    id: "Fluorescent Fungus",
    name: { en: "Fluorescent Fungus", "zh-CN": "幽灯蕈" },
  },
  { id: "Naku Weed", name: { en: "Naku Weed", "zh-CN": "鸣草" } },
  { id: "Onikabuto", name: { en: "Onikabuto", "zh-CN": "鬼兜虫" } },
  {
    id: "Sakura Bloom",
    name: { en: "Sakura Bloom", "zh-CN": "绯樱绣球" },
  },
  { id: "Sango Pearl", name: { en: "Sango Pearl", "zh-CN": "珊瑚真珠" } },
  {
    id: "Sea Ganoderma",
    name: { en: "Sea Ganoderma", "zh-CN": "海灵芝" },
  },
  {
    id: "Nilotpala Lotus",
    name: { en: "Nilotpala Lotus", "zh-CN": "月莲" },
  },
  {
    id: "Rukkhashava Mushrooms",
    name: { en: "Rukkhashava Mushrooms", "zh-CN": "树王圣体菇" },
  },
  {
    id: "Kalpalata Lotus",
    name: { en: "Kalpalata Lotus", "zh-CN": "劫波莲" },
  },
  { id: "Scarab", name: { en: "Scarab", "zh-CN": "圣金虫" } },
  { id: "Henna Berry", name: { en: "Henna Berry", "zh-CN": "赤念果" } },
  { id: "Padisarah", name: { en: "Padisarah", "zh-CN": "帕蒂沙兰" } },
  {
    id: "Sand Grease Pupa",
    name: { en: "Sand Grease Pupa", "zh-CN": "沙脂蛹" },
  },
  {
    id: "Mourning Flower",
    name: { en: "Mourning Flower", "zh-CN": "悼灵花" },
  },
  { id: "Beryl Conch", name: { en: "Beryl Conch", "zh-CN": "苍晶螺" } },
  {
    id: "Lumidouce Bell",
    name: { en: "Lumidouce Bell", "zh-CN": "柔灯铃" },
  },
  {
    id: "Rainbow Rose",
    name: { en: "Rainbow Rose", "zh-CN": "虹彩蔷薇" },
  },
  {
    id: "Romaritime Flower",
    name: { en: "Romaritime Flower", "zh-CN": "海露花" },
  },
  { id: "Lumitoile", name: { en: "Lumitoile", "zh-CN": "幽光星星" } },
  {
    id: "Subdetection Unit",
    name: { en: "Subdetection Unit", "zh-CN": "子探测单元" },
  },
  {
    id: "Lakelight Lily",
    name: { en: "Lakelight Lily", "zh-CN": "湖光铃兰" },
  },
  {
    id: "Spring of the First Dewdrop",
    name: {
      en: "Spring of the First Dewdrop",
      "zh-CN": "初露之源",
    },
  },
  //
  // Newline - local specialities
  //
] as const;

const gems: Material[] = [
  {
    id: "Brilliant Diamond",
    gem: true,
    name: { en: "Brilliant Diamond", "zh-CN": "璀璨原钻" },
  },
  {
    id: "Agnidus Agate",
    gem: true,
    name: { en: "Agnidus Agate", "zh-CN": "燃愿玛瑙" },
  },
  {
    id: "Varunada Lazurite",
    gem: true,
    name: { en: "Varunada Lazurite", "zh-CN": "涤净青金" },
  },
  {
    id: "Vajrada Amethyst",
    gem: true,
    name: { en: "Vajrada Amethyst", "zh-CN": "最胜紫晶" },
  },
  {
    id: "Vayuda Turquoise",
    gem: true,
    name: { en: "Vayuda Turquoise", "zh-CN": "自在松石" },
  },
  {
    id: "Shivada Jade",
    gem: true,
    name: { en: "Shivada Jade", "zh-CN": "哀叙冰玉" },
  },
  {
    id: "Prithiva Topaz",
    gem: true,
    name: { en: "Prithiva Topaz", "zh-CN": "坚牢黄玉" },
  },
  {
    id: "Nagadus Emerald",
    gem: true,
    name: { en: "Nagadus Emerald", "zh-CN": "生长碧翡" },
  },
  //
  // Newline - gem
  //
];

const characterAscensions: readonly Material[] = [
  {
    id: "Hurricane Seed",
    name: { en: "Hurricane Seed", "zh-CN": "飓风之种" },
  },
  {
    id: "Lightning Prism",
    name: { en: "Lightning Prism", "zh-CN": "雷光棱镜" },
  },
  {
    id: "Basalt Pillar",
    name: { en: "Basalt Pillar", "zh-CN": "玄岩之塔" },
  },
  {
    id: "Hoarfrost Core",
    name: { en: "Hoarfrost Core", "zh-CN": "极寒之核" },
  },
  {
    id: "Everflame Seed",
    name: { en: "Everflame Seed", "zh-CN": "常燃火种" },
  },
  {
    id: "Cleansing Heart",
    name: { en: "Cleansing Heart", "zh-CN": "净水之心" },
  },
  {
    id: "Juvenile Jade",
    name: { en: "Juvenile Jade", "zh-CN": "未熟之玉" },
  },
  {
    id: "Crystalline Bloom",
    name: { en: "Crystalline Bloom", "zh-CN": "晶凝之华" },
  },
  {
    id: "Marionette Core",
    name: { en: "Marionette Core", "zh-CN": "魔偶机心" },
  },
  {
    id: "Perpetual Heart",
    name: { en: "Perpetual Heart", "zh-CN": "恒常机关之心" },
  },
  {
    id: "Smoldering Pearl",
    name: { en: "Smoldering Pearl", "zh-CN": "阴燃之珠" },
  },
  {
    id: "Dew of Repudiation",
    name: { en: "Dew of Repudiation", "zh-CN": "排异之露" },
  },
  { id: "Storm Beads", name: { en: "Storm Beads", "zh-CN": "雷霆数珠" } },
  {
    id: "Riftborn Regalia",
    name: { en: "Riftborn Regalia", "zh-CN": "兽境王器" },
  },
  {
    id: "Dragonheir’s False Fin",
    name: { en: "Dragonheir’s False Fin", "zh-CN": "龙嗣伪鳍" },
  },
  { id: "Runic Fang", name: { en: "Runic Fang", "zh-CN": "符纹之齿" } },
  {
    id: "Majestic Hooked Beak",
    name: { en: "Majestic Hooked Beak", "zh-CN": "蕈王钩喙" },
  },
  {
    id: "Thunderclap Fruitcore",
    name: { en: "Thunderclap Fruitcore", "zh-CN": "藏雷野实" },
  },
  {
    id: "Light Guiding Tetrahedron",
    name: { en: "Light Guiding Tetrahedron", "zh-CN": "导光四面体" },
  },
  {
    id: "Perpetual Caliber",
    name: { en: "Perpetual Caliber", "zh-CN": "永续机芯" },
  },
  {
    id: "Quelled Creeper",
    name: { en: "Quelled Creeper", "zh-CN": "灭诤草蔓" },
  },
  {
    id: "Pseudo-Stamens",
    name: { en: "Pseudo-Stamens", "zh-CN": "苍砾蕊羽" },
  },
  {
    id: "Evergloom Ring",
    name: { en: "Evergloom Ring", "zh-CN": "常暗圆环" },
  },
  {
    id: "Emperor’s Resolution",
    name: { en: "Emperor’s Resolution", "zh-CN": "帝皇的决断" },
  },
  {
    id: "Artificed Spare Clockwork Component — Coppelia",
    name: {
      en: "Artificed Spare Clockwork Component — Coppelia",
      "zh-CN": "奇械发条备件・歌裴莉娅",
    },
  },
  {
    id: "Artificed Spare Clockwork Component — Coppelius",
    name: {
      en: "Artificed Spare Clockwork Component — Coppelius",
      "zh-CN": "奇械发条备件・科培琉司",
    },
  },
  {
    id: "Fontemer Unihorn",
    name: { en: "Fontemer Unihorn", "zh-CN": "原海麟角" },
  },
  {
    id: "“Tourbillon Device”",
    name: { en: "“Tourbillon Device”", "zh-CN": "「图比昂装置」" },
  },
  {
    id: "Water That Failed To Transcend",
    name: {
      en: "Water That Failed To Transcend",
      "zh-CN": "未能达成超越之水",
    },
  },
  //
  // Newline - character ascension
  //
] as const;

const talentBooks: readonly Material[] = [
  { id: "Freedom", name: { en: "Freedom", "zh-CN": "自由" } },
  { id: "Resistance", name: { en: "Resistance", "zh-CN": "抗争" } },
  { id: "Ballad", name: { en: "Ballad", "zh-CN": "诗文" } },
  { id: "Prosperity", name: { en: "Prosperity", "zh-CN": "繁荣" } },
  { id: "Diligence", name: { en: "Diligence", "zh-CN": "勤劳" } },
  { id: "Gold", name: { en: "Gold", "zh-CN": "黄金" } },
  { id: "Transience", name: { en: "Transience", "zh-CN": "浮世" } },
  { id: "Elegance", name: { en: "Elegance", "zh-CN": "风雅" } },
  { id: "Light", name: { en: "Light", "zh-CN": "天光" } },
  { id: "Admonition", name: { en: "Admonition", "zh-CN": "诤言" } },
  { id: "Ingenuity", name: { en: "Ingenuity", "zh-CN": "巧思" } },
  { id: "Praxis", name: { en: "Praxis", "zh-CN": "笃行" } },
  { id: "Equity", name: { en: "Equity", "zh-CN": "公平" } },
  { id: "Justice", name: { en: "Justice", "zh-CN": "正义" } },
  { id: "Order", name: { en: "Order", "zh-CN": "秩序" } },
  // Newline - talent book
] as const;

const talentMaterials: readonly Material[] = [
  {
    id: "Crown of Insight",
    name: { en: "Crown of Insight", "zh-CN": "智识之冕" },
  },
  {
    id: "Dvalin’s Plume",
    name: { en: "Dvalin’s Plume", "zh-CN": "东风之翎" },
  },
  {
    id: "Dvalin’s Claw",
    name: { en: "Dvalin’s Claw", "zh-CN": "东风之爪" },
  },
  {
    id: "Dvalin’s Sigh",
    name: { en: "Dvalin’s Sigh", "zh-CN": "东风的吐息" },
  },
  {
    id: "Tail of Boreas",
    name: { en: "Tail of Boreas", "zh-CN": "北风之尾" },
  },
  {
    id: "Ring of Boreas",
    name: { en: "Ring of Boreas", "zh-CN": "北风之环" },
  },
  {
    id: "Spirit Locket of Boreas",
    name: { en: "Spirit Locket of Boreas", "zh-CN": "北风的魂匣" },
  },
  {
    id: "Tusk of Monoceros Caeli",
    name: { en: "Tusk of Monoceros Caeli", "zh-CN": "吞天之鲸・只角" },
  },
  {
    id: "Shard of a Foul Legacy",
    name: { en: "Shard of a Foul Legacy", "zh-CN": "魔王之刃・残片" },
  },
  {
    id: "Shadow of the Warrior",
    name: { en: "Shadow of the Warrior", "zh-CN": "武炼之魂・孤影" },
  },
  {
    id: "Dragon Lord’s Crown",
    name: { en: "Dragon Lord’s Crown", "zh-CN": "龙王之冕" },
  },
  {
    id: "Bloodjade Branch",
    name: { en: "Bloodjade Branch", "zh-CN": "血玉之枝" },
  },
  {
    id: "Gilded Scale",
    name: { en: "Gilded Scale", "zh-CN": "鎏金之鳞" },
  },
  {
    id: "Molten Moment",
    name: { en: "Molten Moment", "zh-CN": "熔毁之刻" },
  },
  {
    id: "Hellfire Butterfly",
    name: { en: "Hellfire Butterfly", "zh-CN": "狱火之蝶" },
  },
  { id: "Ashen Heart", name: { en: "Ashen Heart", "zh-CN": "灰烬之心" } },
  {
    id: "Mudra of the Malefic General",
    name: { en: "Mudra of the Malefic General", "zh-CN": "凶将之手眼" },
  },
  {
    id: "Tears of the Calamitous God",
    name: { en: "Tears of the Calamitous God", "zh-CN": "祸神之禊泪" },
  },
  {
    id: "The Meaning of Aeons",
    name: { en: "The Meaning of Aeons", "zh-CN": "万劫之真意" },
  },
  {
    id: "Puppet Strings",
    name: { en: "Puppet Strings", "zh-CN": "傀儡的悬丝" },
  },
  {
    id: "Mirror of Mushin",
    name: { en: "Mirror of Mushin", "zh-CN": "无心的渊镜" },
  },
  {
    id: "Daka’s Bell",
    name: { en: "Daka’s Bell", "zh-CN": "空行的虚铃" },
  },
  {
    id: "Worldspan Fern",
    name: { en: "Worldspan Fern", "zh-CN": "生长天地之蕨草" },
  },
  {
    id: "Primordial Greenbloom",
    name: { en: "Primordial Greenbloom", "zh-CN": "原初绿洲之初绽" },
  },
  {
    id: "Everamber",
    name: { en: "Everamber", "zh-CN": "亘古树海之一瞬" },
  },
  {
    id: "Lightless Silk String",
    name: { en: "Lightless Silk String", "zh-CN": "无光丝线" },
  },
  {
    id: "Lightless Eye of the Maelstrom",
    name: { en: "Lightless Eye of the Maelstrom", "zh-CN": "无光涡眼" },
  },
  {
    id: "Lightless Mass",
    name: { en: "Lightless Mass", "zh-CN": "无光质块" },
  },
  //
  // Newline - talent material
  //
] as const;

const weaponAscensions: readonly Material[] = [
  {
    id: "Tile of Decarabian’s Tower",
    name: {
      en: [
        "Tile of Decarabian’s Tower",
        "Debris of Decarabian’s City",
        "Fragment of Decarabian’s Epic",
        "Scattered Piece of Decarabian’s Dream",
      ],
      "zh-CN": [
        "高塔孤王的破瓦",
        "高塔孤王的残垣",
        "高塔孤王的断片",
        "高塔孤王的碎梦",
      ],
    },
  },
  {
    id: "Boreal Wolf’s Milk Tooth",
    name: {
      en: [
        "Boreal Wolf’s Milk Tooth",
        "Boreal Wolf’s Cracked Tooth",
        "Boreal Wolf’s Broken Fang",
        "Boreal Wolf’s Nostalgia",
      ],
      "zh-CN": [
        "凛风奔狼的始龀",
        "凛风奔狼的裂齿",
        "凛风奔狼的断牙",
        "凛风奔狼的怀乡",
      ],
    },
  },
  {
    id: "Fetters of the Dandelion Gladiator",
    name: {
      en: [
        "Fetters of the Dandelion Gladiator",
        "Chains of the Dandelion Gladiator",
        "Shackles of the Dandelion Gladiator",
        "Dream of the Dandelion Gladiator",
      ],
      "zh-CN": [
        "狮牙斗士的枷锁",
        "狮牙斗士的铁链",
        "狮牙斗士的镣铐",
        "狮牙斗士的理想",
      ],
    },
  },
  {
    id: "Luminous Sands from Guyun",
    name: {
      en: [
        "Luminous Sands from Guyun",
        "Lustrous Stone from Guyun",
        "Relic from Guyun",
        "Divine Body from Guyun",
      ],
      "zh-CN": [
        "孤云寒林的光砂",
        "孤云寒林的辉岩",
        "孤云寒林的圣骸",
        "孤云寒林的神体",
      ],
    },
  },
  {
    id: "Mist Veiled Lead Elixir",
    name: {
      en: [
        "Mist Veiled Lead Elixir",
        "Mist Veiled Mercury Elixir",
        "Mist Veiled Gold Elixir",
        "Mist Veiled Primo Elixir",
      ],
      "zh-CN": [
        "雾海云间的铅丹",
        "雾海云间的汞丹",
        "雾海云间的金丹",
        "雾海云间的转还",
      ],
    },
  },
  {
    id: "Grain of Aerosiderite",
    name: {
      en: [
        "Grain of Aerosiderite",
        "Piece of Aerosiderite",
        "Bit of Aerosiderite",
        "Chunk of Aerosiderite",
      ],
      "zh-CN": [
        "漆黑陨铁的一粒",
        "漆黑陨铁的一片",
        "漆黑陨铁的一角",
        "漆黑陨铁的一块",
      ],
    },
  },
  {
    id: "Coral Branch of a Distant Sea",
    name: {
      en: [
        "Coral Branch of a Distant Sea",
        "Jeweled Branch of a Distant Sea",
        "Jade Branch of a Distant Sea",
        "Golden Branch of a Distant Sea",
      ],
      "zh-CN": [
        "远海夷地的瑚枝",
        "远海夷地的玉枝",
        "远海夷地的琼枝",
        "远海夷地的金枝",
      ],
    },
  },
  {
    id: "Narukami’s Wisdom",
    name: {
      en: [
        "Narukami’s Wisdom",
        "Narukami’s Joy",
        "Narukami’s Affection",
        "Narukami’s Valor",
      ],
      "zh-CN": [
        "鸣神御灵的明惠",
        "鸣神御灵的欢喜",
        "鸣神御灵的亲爱",
        "鸣神御灵的勇武",
      ],
    },
  },
  {
    id: "Mask of the Wicked Lieutenant",
    name: {
      en: [
        "Mask of the Wicked Lieutenant",
        "Mask of the Tiger’s Bite",
        "Mask of the One-Horned",
        "Mask of the Kijin",
      ],
      "zh-CN": [
        "今昔剧画之恶尉",
        "今昔剧画之虎啮",
        "今昔剧画之一角",
        "今昔剧画之鬼人",
      ],
    },
  },
  {
    id: "Copper Talisman of the Forest Dew",
    name: {
      en: [
        "Copper Talisman of the Forest Dew",
        "Iron Talisman of the Forest Dew",
        "Silver Talisman of the Forest Dew",
        "Golden Talisman of the Forest Dew",
      ],
      "zh-CN": [
        "谧林涓露的铜符",
        "谧林涓露的铁符",
        "谧林涓露的银符",
        "谧林涓露的金符",
      ],
    },
  },
  {
    id: "Oasis Garden’s Reminiscence",
    name: {
      en: [
        "Oasis Garden’s Reminiscence",
        "Oasis Garden’s Kindness",
        "Oasis Garden’s Mourning",
        "Oasis Garden’s Truth",
      ],
      "zh-CN": [
        "绿洲花园的追忆",
        "绿洲花园的恩惠",
        "绿洲花园的哀思",
        "绿洲花园的真谛",
      ],
    },
  },
  {
    id: "Echo of Scorching Might",
    name: {
      en: [
        "Echo of Scorching Might",
        "Remnant Glow of Scorching Might",
        "Dream of Scorching Might",
        "Olden Days of Scorching Might",
      ],
      "zh-CN": [
        "烈日威权的残响",
        "烈日威权的余光",
        "烈日威权的梦想",
        "烈日威权的旧日",
      ],
    },
  },
  {
    id: "Fragment of an Ancient Chord",
    name: {
      en: [
        "Fragment of an Ancient Chord",
        "Chapter of an Ancient Chord",
        "Movement of an Ancient Chord",
        "Echo of an Ancient Chord",
      ],
      "zh-CN": [
        "悠古弦音的残章",
        "悠古弦音的断章",
        "悠古弦音的乐章",
        "悠古弦音的回响",
      ],
    },
  },
  {
    id: "Dross of Pure Sacred Dewdrop",
    name: {
      en: [
        "Dross of Pure Sacred Dewdrop",
        "Sublimation of Pure Sacred Dewdrop",
        "Spring of Pure Sacred Dewdrop",
        "Essence of Pure Sacred Dewdrop",
      ],
      "zh-CN": [
        "纯圣露滴的滤渣",
        "纯圣露滴的凝华",
        "纯圣露滴的醴泉",
        "纯圣露滴的真粹",
      ],
    },
  },
  {
    id: "Broken Goblet of the Pristine Sea",
    name: {
      en: [
        "Broken Goblet of the Pristine Sea",
        "Wine Goblet of the Pristine Sea",
        "Silver Goblet of the Pristine Sea",
        "Golden Goblet of the Pristine Sea",
      ],
      "zh-CN": [
        "无垢之海的苦盏",
        "无垢之海的酒盏",
        "无垢之海的银杯",
        "无垢之海的金杯",
      ],
    },
  },
  //
  // Newline - weapons
  //
] as const;

const forging: readonly Material[] = [
  {
    id: "Northlander Claymore Billet",
    forging: true,
    name: {
      en: "Northlander Claymore Billet",
      "zh-CN": "北陆双手剑原胚",
    },
  },
  {
    id: "Northlander Polearm Billet",
    forging: true,
    name: {
      en: "Northlander Polearm Billet",
      "zh-CN": "北陆长柄武器原胚",
    },
  },
  {
    id: "Northlander Sword Billet",
    forging: true,
    name: { en: "Northlander Sword Billet", "zh-CN": "北陆单手剑原胚" },
  },
  {
    id: "Northlander Bow Billet",
    forging: true,
    name: { en: "Northlander Bow Billet", "zh-CN": "北陆弓原胚" },
  },
  {
    id: "Northlander Catalyst Billet",
    forging: true,
    name: { en: "Northlander Catalyst Billet", "zh-CN": "北陆法器原胚" },
  },
  {
    id: "Midlander Claymore Billet",
    forging: true,
    name: { en: "Midlander Claymore Billet", "zh-CN": "央陆双手剑原胚" },
  },
  {
    id: "Midlander Polearm Billet",
    forging: true,
    name: { en: "Midlander Polearm Billet", "zh-CN": "央陆长柄武器原胚" },
  },
  {
    id: "Midlander Sword Billet",
    forging: true,
    name: { en: "Midlander Sword Billet", "zh-CN": "央陆单手剑原胚" },
  },
  {
    id: "Midlander Bow Billet",
    forging: true,
    name: { en: "Midlander Bow Billet", "zh-CN": "央陆弓原胚" },
  },
  {
    id: "Midlander Catalyst Billet",
    forging: true,
    name: { en: "Midlander Catalyst Billet", "zh-CN": "央陆法器原胚" },
  },
  {
    id: "Crystal Chunk",
    forging: true,
    name: { en: "Crystal Chunk", "zh-CN": "水晶块" },
  },
  {
    id: "White Iron Chunk",
    forging: true,
    name: { en: "White Iron Chunk", "zh-CN": "白铁块" },
  },
  {
    id: "Starsilver",
    forging: true,
    name: { en: "Starsilver", "zh-CN": "星银矿石" },
  },
  {
    id: "Vitalized Dragontooth",
    forging: true,
    name: { en: "Vitalized Dragontooth", "zh-CN": "汲取了生命力的龙牙" },
  },
  {
    id: "Amethyst Lump",
    forging: true,
    name: { en: "Amethyst Lump", "zh-CN": "紫晶块" },
  },
  {
    id: "Condessence Crystal",
    forging: true,
    name: { en: "Condessence Crystal", "zh-CN": "萃凝晶" },
  },
  //
  // Newline - forging
  //
] as const;

const fishing: readonly Material[] = [
  {
    id: "Raimei Angelfish",
    fishing: true,
    name: { en: "Raimei Angelfish", "zh-CN": "雷鸣仙" },
  },
  {
    id: "Golden Koi",
    fishing: true,
    name: { en: "Golden Koi", "zh-CN": "金赤假龙" },
  },
  {
    id: "Rusty Koi",
    fishing: true,
    name: { en: "Rusty Koi", "zh-CN": "锖假龙" },
  },
  {
    id: "Pufferfish",
    fishing: true,
    name: { en: "Pufferfish", "zh-CN": "炮鲀" },
  },
  {
    id: "Bitter Pufferfish",
    fishing: true,
    name: { en: "Bitter Pufferfish", "zh-CN": "苦炮鲀" },
  },
  {
    id: "Peach of the Deep Waves",
    fishing: true,
    name: { en: "Peach of the Deep Waves", "zh-CN": "沉波蜜桃" },
  },
  {
    id: "Lazurite Axe Marlin",
    fishing: true,
    name: { en: "Lazurite Axe Marlin", "zh-CN": "青金斧枪鱼" },
  },
  {
    id: "Halcyon Jade Axe Marlin",
    fishing: true,
    name: { en: "Halcyon Jade Axe Marlin", "zh-CN": "翡玉斧枪鱼" },
  },
  {
    id: "Maintenance Mek: Platinum Collection",
    fishing: true,
    name: {
      en: "Maintenance Mek: Platinum Collection",
      "zh-CN": "维护机关・白金典藏型",
    },
  },
  {
    id: "Rippling Heartfeather Bass",
    fishing: true,
    name: { en: "Rippling Heartfeather Bass", "zh-CN": "波波心羽鲈" },
  },
  {
    id: "Blazing Heartfeather Bass",
    fishing: true,
    name: { en: "Blazing Heartfeather Bass", "zh-CN": "烘烘心羽鲈" },
  },
  {
    id: "Streaming Axe Marlin",
    fishing: true,
    name: { en: "Streaming Axe Marlin", "zh-CN": "海涛斧枪鱼" },
  },
  //
  // Newline - fishing
  //
] as const;

export const materials: readonly Material[] = [
  ...commons,
  ...elites,
  ...localSpecialities,
  ...gems,
  ...characterAscensions,
  ...talentBooks,
  ...talentMaterials,
  ...weaponAscensions,
  ...forging,
  ...fishing,
] as const;
