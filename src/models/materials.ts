import type { I18nObject } from "../i18n";

export type Material = { name: I18nObject } & (
  | {
      id:
        | Common
        | CharacterAscension
        | TalentBook
        | TalentMaterial
        | LocalSpeciality
        | WeaponAscension
        | Elite;
    }
  | { id: Forging; forging: true }
  | { id: Fishing; fishing: true }
  | { id: Gem; gem: true }
);

export type MaterialId =
  | Gem
  | Common
  | CharacterAscension
  | TalentBook
  | TalentMaterial
  | LocalSpeciality
  | WeaponAscension
  | Elite
  | Forging
  | Fishing;

const commons = {
  "Slime Condensate": {
    id: "Slime Condensate",
    name: {
      en: ["Slime Condensate", "Slime Secretions", "Slime Concentrate"],
      "zh-CN": ["史莱姆凝液", "史莱姆清", "史莱姆原浆"],
    },
  },
  "Damaged Mask": {
    id: "Damaged Mask",
    name: {
      en: ["Damaged Mask", "Stained Mask", "Ominous Mask"],
      "zh-CN": ["破损的面具", "污秽的面具", "不祥的面具"],
    },
  },
  "Divining Scroll": {
    id: "Divining Scroll",
    name: {
      en: ["Divining Scroll", "Sealed Scroll", "Forbidden Curse Scroll"],
      "zh-CN": ["导能绘卷", "封魔绘卷", "禁咒绘卷"],
    },
  },
  "Firm Arrowhead": {
    id: "Firm Arrowhead",
    name: {
      en: ["Firm Arrowhead", "Sharp Arrowhead", "Weathered Arrowhead"],
      "zh-CN": ["牢固的箭簇", "锐利的箭簇", "历战的箭簇"],
    },
  },
  "Recruit’s Insignia": {
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
  "Treasure Hoarder Insignia": {
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
  "Whopperflower Nectar": {
    id: "Whopperflower Nectar",
    name: {
      en: ["Whopperflower Nectar", "Shimmering Nectar", "Energy Nectar"],
      "zh-CN": ["骗骗花蜜", "微光花蜜", "原素花蜜"],
    },
  },
  "Old Handguard": {
    id: "Old Handguard",
    name: {
      en: ["Old Handguard", "Kageuchi Handguard", "Famed Handguard"],
      "zh-CN": ["破旧的刀镡", "影打刀镡", "名刀镡"],
    },
  },
  "Spectral Husk": {
    id: "Spectral Husk",
    name: {
      en: ["Spectral Husk", "Spectral Heart", "Spectral Nucleus"],
      "zh-CN": ["浮游干核", "浮游幽核", "浮游晶化核"],
    },
  },
  "Fungal Spores": {
    id: "Fungal Spores",
    name: {
      en: ["Fungal Spores", "Luminescent Pollen", "Crystalline Cyst Dust"],
      "zh-CN": ["蕈兽孢子", "荧光孢粉", "孢囊晶尘"],
    },
  },
  "Faded Red Satin": {
    id: "Faded Red Satin",
    name: {
      en: ["Faded Red Satin", "Trimmed Red Silk", "Rich Red Brocade"],
      "zh-CN": ["褪色红绸", "镶边红绸", "织金红绸"],
    },
  },
  "Meshing Gear": {
    id: "Meshing Gear",
    name: {
      en: ["Meshing Gear", "Mechanical Spur Gear", "Artificed Dynamic Gear"],
      "zh-CN": ["啮合齿轮", "机关正齿轮", "奇械机芯齿轮"],
    },
  },
  "Transoceanic Pearl": {
    id: "Transoceanic Pearl",
    name: {
      en: ["Transoceanic Pearl", "Transoceanic Chunk", "Xenochromatic Crystal"],
      "zh-CN": ["异海凝珠", "异海之块", "异色结晶石"],
    },
  },
  "Juvenile Fang": {
    id: "Juvenile Fang",
    name: {
      en: ["Juvenile Fang", "Seasoned Fang", "Tyrant’s Fang"],
      "zh-CN": ["稚嫩的尖齿", "老练的坚齿", "横行霸者的利齿"],
    },
  },
  "Sentry’s Wooden Whistle": {
    id: "Sentry’s Wooden Whistle",
    name: {
      en: [
        "Sentry’s Wooden Whistle",
        "Warrior’s Metal Whistle",
        "Saurian-Crowned Warrior’s Golden Whistle",
      ],
      "zh-CN": ["卫从的木哨", "战士的铁哨", "龙冠武士的金哨"],
    },
  },
  //
  // Newline - common
  //
} as const;

export type Common = keyof typeof commons;

const elites = {
  "Concealed Claw": {
    id: "Concealed Claw",
    name: {
      en: ["Concealed Claw", "Concealed Unguis", "Concealed Talon"],
      "zh-CN": ["隐兽指爪", "隐兽利爪", "隐兽鬼爪"],
    },
  },
  "Dismal Prism": {
    id: "Dismal Prism",
    name: {
      en: ["Dismal Prism", "Crystal Prism", "Polarizing Prism"],
      "zh-CN": ["黯淡棱镜", "水晶棱镜", "偏光棱镜"],
    },
  },
  "Heavy Horn": {
    id: "Heavy Horn",
    name: {
      en: ["Heavy Horn", "Black Bronze Horn", "Black Crystal Horn"],
      "zh-CN": ["沉重号角", "黑铜号角", "黑晶号角"],
    },
  },
  "Dead Ley Line Branch": {
    id: "Dead Ley Line Branch",
    name: {
      en: ["Dead Ley Line Branch", "Dead Ley Line Leaves", "Ley Line Sprout"],
      "zh-CN": ["地脉的旧枝", "地脉的枯叶", "地脉的新芽"],
    },
  },
  "Chaos Device": {
    id: "Chaos Device",
    name: {
      en: ["Chaos Device", "Chaos Circuit", "Chaos Core"],
      "zh-CN": ["混沌装置", "混沌回路", "混沌炉心"],
    },
  },
  "Gloomy Statuette": {
    id: "Gloomy Statuette",
    name: {
      en: ["Gloomy Statuette", "Dark Statuette", "Deathly Statuette"],
      "zh-CN": ["晦暗刻像", "夤夜刻像", "幽邃刻像"],
    },
  },
  "Inactivated Fungal Nucleus": {
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
  "Fragile Bone Shard": {
    id: "Fragile Bone Shard",
    name: {
      en: ["Fragile Bone Shard", "Sturdy Bone Shard", "Fossilized Bone Shard"],
      "zh-CN": ["脆弱的骨片", "结实的骨片", "石化的骨片"],
    },
  },
  "Damaged Prism": {
    id: "Damaged Prism",
    name: {
      en: ["Damaged Prism", "Turbid Prism", "Radiant Prism"],
      "zh-CN": ["破缺棱晶", "混浊棱晶", "辉光棱晶"],
    },
  },
  "Desiccated Shell": {
    id: "Desiccated Shell",
    name: {
      en: ["Desiccated Shell", "Sturdy Shell", "Marked Shell"],
      "zh-CN": ["残毁的横脊", "密固的横脊", "锲纹的横脊"],
    },
  },
  "A Flower Yet to Bloom": {
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
  "Chaos Gear": {
    id: "Chaos Gear",
    name: {
      en: ["Chaos Gear", "Chaos Axis", "Chaos Oculus"],
      "zh-CN": ["混沌机关", "混沌枢纽", "混沌真眼"],
    },
  },
  "Hunter’s Sacrificial Knife": {
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
  "Chaos Storage": {
    id: "Chaos Storage",
    name: {
      en: ["Chaos Storage", "Chaos Module", "Chaos Bolt"],
      "zh-CN": ["混沌容器", "混沌模块", "混沌锚栓"],
    },
  },
  "Drop of Tainted Water": {
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
  "Rift Core": {
    id: "Rift Core",
    name: {
      en: ["Rift Core", "Foreign Synapse", "Alien Life Core"],
      "zh-CN": ["隙间之核", "外世突触", "异界生命核"],
    },
  },
  "Old Operative’s Pocket Watch": {
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
  "Mist Grass Pollen": {
    id: "Mist Grass Pollen",
    name: {
      en: ["Mist Grass Pollen", "Mist Grass", "Mist Grass Wick"],
      "zh-CN": ["雾虚花粉", "雾虚草囊", "雾虚灯芯"],
    },
  },
  "Feathery Fin": {
    id: "Feathery Fin",
    name: {
      en: ["Feathery Fin", "Lunar Fin", "Chasmlight Fin"],
      "zh-CN": ["羽状鳍翅", "月色鳍翅", "渊光鳍翅"],
    },
  },
  "Ruined Hilt": {
    id: "Ruined Hilt",
    name: {
      en: ["Ruined Hilt", "Splintered Hilt", "Still-Smoldering Hilt"],
      "zh-CN": ["残毁的剑柄", "裂断的剑柄", "未熄的剑柄"],
    },
  },
  "Shard of a Shattered Will": {
    id: "Shard of a Shattered Will",
    name: {
      en: [
        "Shard of a Shattered Will",
        "Locus of a Clear Will",
        "Sigil of a Striding Will",
      ],
      "zh-CN": ["意志破碎的残片", "意志明晰的寄偶", "意志巡游的符像"],
    },
  },
  "Ignited Stone": {
    id: "Ignited Stone",
    name: {
      en: ["Ignited Stone", "Ignited Seed of Life", "Ignited Seeing Eye"],
      "zh-CN": ["聚燃的石块", "聚燃的命种", "聚燃的游像眼"],
    },
  },
  "Axis of the Secret Source": {
    id: "Axis of the Secret Source",
    name: {
      en: [
        "Axis of the Secret Source",
        "Sheath of the Secret Source",
        "Heart of the Secret Source",
      ],
      "zh-CN": ["秘源轴", "秘源机鞘", "秘源真芯"],
    },
  },
  "Refractive Bud": {
    id: "Refractive Bud",
    name: {
      en: ["Refractive Bud", "Bewildering Broadleaf", "Illusory Leafcoil"],
      "zh-CN": ["折光的胚芽", "惑光的阔叶", "迷光的蜷叶之心"],
    },
  },
  "Cold-Cracked Shellshard": {
    id: "Cold-Cracked Shellshard",
    name: {
      en: ["Cold-Cracked Shellshard", "Warm Back-Shell", "Blazing Prismshell"],
      "zh-CN": ["冷裂壳块", "蕴热的背壳", "明燃的棱状壳"],
    },
  },
  //
  // Newline - elites
  //
} as const;

export type Elite = keyof typeof elites;

const localSpecialities = {
  "Calla Lily": {
    id: "Calla Lily",
    name: { en: "Calla Lily", "zh-CN": "嘟嘟莲" },
  },
  Cecilia: { id: "Cecilia", name: { en: "Cecilia", "zh-CN": "塞西莉亚花" } },
  "Dandelion Seed": {
    id: "Dandelion Seed",
    name: { en: "Dandelion Seed", "zh-CN": "蒲公英籽" },
  },
  "Philanemo Mushroom": {
    id: "Philanemo Mushroom",
    name: { en: "Philanemo Mushroom", "zh-CN": "慕风蘑菇" },
  },
  "Small Lamp Grass": {
    id: "Small Lamp Grass",
    name: { en: "Small Lamp Grass", "zh-CN": "小灯草" },
  },
  Valberry: { id: "Valberry", name: { en: "Valberry", "zh-CN": "落落莓" } },
  "Windwheel Aster": {
    id: "Windwheel Aster",
    name: { en: "Windwheel Aster", "zh-CN": "风车菊" },
  },
  Wolfhook: { id: "Wolfhook", name: { en: "Wolfhook", "zh-CN": "钩钩果" } },
  "Cor Lapis": { id: "Cor Lapis", name: { en: "Cor Lapis", "zh-CN": "石珀" } },
  "Glaze Lily": {
    id: "Glaze Lily",
    name: { en: "Glaze Lily", "zh-CN": "琉璃百合" },
  },
  "Jueyun Chili": {
    id: "Jueyun Chili",
    name: { en: "Jueyun Chili", "zh-CN": "绝云椒椒" },
  },
  "Noctilucous Jade": {
    id: "Noctilucous Jade",
    name: { en: "Noctilucous Jade", "zh-CN": "夜泊石" },
  },
  Qingxin: { id: "Qingxin", name: { en: "Qingxin", "zh-CN": "清心" } },
  "Silk Flower": {
    id: "Silk Flower",
    name: { en: "Silk Flower", "zh-CN": "霓裳花" },
  },
  Starconch: { id: "Starconch", name: { en: "Starconch", "zh-CN": "星螺" } },
  Violetgrass: {
    id: "Violetgrass",
    name: { en: "Violetgrass", "zh-CN": "琉璃袋" },
  },
  "Amakumo Fruit": {
    id: "Amakumo Fruit",
    name: { en: "Amakumo Fruit", "zh-CN": "天云草实" },
  },
  "Crystal Marrow": {
    id: "Crystal Marrow",
    name: { en: "Crystal Marrow", "zh-CN": "晶化骨髓" },
  },
  Dendrobium: { id: "Dendrobium", name: { en: "Dendrobium", "zh-CN": "血斛" } },
  "Fluorescent Fungus": {
    id: "Fluorescent Fungus",
    name: { en: "Fluorescent Fungus", "zh-CN": "幽灯蕈" },
  },
  "Naku Weed": { id: "Naku Weed", name: { en: "Naku Weed", "zh-CN": "鸣草" } },
  Onikabuto: { id: "Onikabuto", name: { en: "Onikabuto", "zh-CN": "鬼兜虫" } },
  "Sakura Bloom": {
    id: "Sakura Bloom",
    name: { en: "Sakura Bloom", "zh-CN": "绯樱绣球" },
  },
  "Sango Pearl": {
    id: "Sango Pearl",
    name: { en: "Sango Pearl", "zh-CN": "珊瑚真珠" },
  },
  "Sea Ganoderma": {
    id: "Sea Ganoderma",
    name: { en: "Sea Ganoderma", "zh-CN": "海灵芝" },
  },
  "Nilotpala Lotus": {
    id: "Nilotpala Lotus",
    name: { en: "Nilotpala Lotus", "zh-CN": "月莲" },
  },
  "Rukkhashava Mushrooms": {
    id: "Rukkhashava Mushrooms",
    name: { en: "Rukkhashava Mushrooms", "zh-CN": "树王圣体菇" },
  },
  "Kalpalata Lotus": {
    id: "Kalpalata Lotus",
    name: { en: "Kalpalata Lotus", "zh-CN": "劫波莲" },
  },
  Scarab: { id: "Scarab", name: { en: "Scarab", "zh-CN": "圣金虫" } },
  "Henna Berry": {
    id: "Henna Berry",
    name: { en: "Henna Berry", "zh-CN": "赤念果" },
  },
  Padisarah: {
    id: "Padisarah",
    name: { en: "Padisarah", "zh-CN": "帕蒂沙兰" },
  },
  "Sand Grease Pupa": {
    id: "Sand Grease Pupa",
    name: { en: "Sand Grease Pupa", "zh-CN": "沙脂蛹" },
  },
  "Mourning Flower": {
    id: "Mourning Flower",
    name: { en: "Mourning Flower", "zh-CN": "悼灵花" },
  },
  "Beryl Conch": {
    id: "Beryl Conch",
    name: { en: "Beryl Conch", "zh-CN": "苍晶螺" },
  },
  "Lumidouce Bell": {
    id: "Lumidouce Bell",
    name: { en: "Lumidouce Bell", "zh-CN": "柔灯铃" },
  },
  "Rainbow Rose": {
    id: "Rainbow Rose",
    name: { en: "Rainbow Rose", "zh-CN": "虹彩蔷薇" },
  },
  "Romaritime Flower": {
    id: "Romaritime Flower",
    name: { en: "Romaritime Flower", "zh-CN": "海露花" },
  },
  Lumitoile: {
    id: "Lumitoile",
    name: { en: "Lumitoile", "zh-CN": "幽光星星" },
  },
  "Subdetection Unit": {
    id: "Subdetection Unit",
    name: { en: "Subdetection Unit", "zh-CN": "子探测单元" },
  },
  "Lakelight Lily": {
    id: "Lakelight Lily",
    name: { en: "Lakelight Lily", "zh-CN": "湖光铃兰" },
  },
  "Spring of the First Dewdrop": {
    id: "Spring of the First Dewdrop",
    name: {
      en: "Spring of the First Dewdrop",
      "zh-CN": "初露之源",
    },
  },
  "Clearwater Jade": {
    id: "Clearwater Jade",
    name: { en: "Clearwater Jade", "zh-CN": "清水玉" },
  },
  Trishiraite: {
    id: "Trishiraite",
    name: { en: "Trishiraite", "zh-CN": "万相石" },
  },
  "Quenepa Berry": {
    id: "Quenepa Berry",
    name: { en: "Quenepa Berry", "zh-CN": "青蜜莓" },
  },
  "Sprayfeather Gill": {
    id: "Sprayfeather Gill",
    name: { en: "Sprayfeather Gill", "zh-CN": "浪沫羽鳃" },
  },
  "Saurian Claw Succulent": {
    id: "Saurian Claw Succulent",
    name: { en: "Saurian Claw Succulent", "zh-CN": "肉龙掌" },
  },
  "Brilliant Chrysanthemum": {
    id: "Brilliant Chrysanthemum",
    name: { en: "Brilliant Chrysanthemum", "zh-CN": "灼灼彩菊" },
  },
  "Withering Purpurbloom": {
    id: "Withering Purpurbloom",
    name: { en: "Withering Purpurbloom", "zh-CN": "枯叶紫英" },
  },
  "Glowing Hornshroom": {
    id: "Glowing Hornshroom",
    name: { en: "Glowing Hornshroom", "zh-CN": "微光角菌" },
  },
  "Skysplit Gembloom": {
    id: "Skysplit Gembloom",
    name: { en: "Skysplit Gembloom", "zh-CN": "云岩裂叶" },
  },
  Dracolite: {
    id: "Dracolite",
    name: { en: "Dracolite", "zh-CN": "琉鳞石" },
  },
  //
  // Newline - local specialities
  //
} as const;

export type LocalSpeciality = keyof typeof localSpecialities;

const gems = {
  "Brilliant Diamond": {
    id: "Brilliant Diamond",
    gem: true,
    name: { en: "Brilliant Diamond", "zh-CN": "璀璨原钻" },
  },
  "Agnidus Agate": {
    id: "Agnidus Agate",
    gem: true,
    name: { en: "Agnidus Agate", "zh-CN": "燃愿玛瑙" },
  },
  "Varunada Lazurite": {
    id: "Varunada Lazurite",
    gem: true,
    name: { en: "Varunada Lazurite", "zh-CN": "涤净青金" },
  },
  "Vajrada Amethyst": {
    id: "Vajrada Amethyst",
    gem: true,
    name: { en: "Vajrada Amethyst", "zh-CN": "最胜紫晶" },
  },
  "Vayuda Turquoise": {
    id: "Vayuda Turquoise",
    gem: true,
    name: { en: "Vayuda Turquoise", "zh-CN": "自在松石" },
  },
  "Shivada Jade": {
    id: "Shivada Jade",
    gem: true,
    name: { en: "Shivada Jade", "zh-CN": "哀叙冰玉" },
  },
  "Prithiva Topaz": {
    id: "Prithiva Topaz",
    gem: true,
    name: { en: "Prithiva Topaz", "zh-CN": "坚牢黄玉" },
  },
  "Nagadus Emerald": {
    id: "Nagadus Emerald",
    gem: true,
    name: { en: "Nagadus Emerald", "zh-CN": "生长碧翡" },
  },
} as const;

export type Gem = keyof typeof gems;

const characterAscensions = {
  "Hurricane Seed": {
    id: "Hurricane Seed",
    name: { en: "Hurricane Seed", "zh-CN": "飓风之种" },
  },
  "Lightning Prism": {
    id: "Lightning Prism",
    name: { en: "Lightning Prism", "zh-CN": "雷光棱镜" },
  },
  "Basalt Pillar": {
    id: "Basalt Pillar",
    name: { en: "Basalt Pillar", "zh-CN": "玄岩之塔" },
  },
  "Hoarfrost Core": {
    id: "Hoarfrost Core",
    name: { en: "Hoarfrost Core", "zh-CN": "极寒之核" },
  },
  "Everflame Seed": {
    id: "Everflame Seed",
    name: { en: "Everflame Seed", "zh-CN": "常燃火种" },
  },
  "Cleansing Heart": {
    id: "Cleansing Heart",
    name: { en: "Cleansing Heart", "zh-CN": "净水之心" },
  },
  "Juvenile Jade": {
    id: "Juvenile Jade",
    name: { en: "Juvenile Jade", "zh-CN": "未熟之玉" },
  },
  "Crystalline Bloom": {
    id: "Crystalline Bloom",
    name: { en: "Crystalline Bloom", "zh-CN": "晶凝之华" },
  },
  "Marionette Core": {
    id: "Marionette Core",
    name: { en: "Marionette Core", "zh-CN": "魔偶机心" },
  },
  "Perpetual Heart": {
    id: "Perpetual Heart",
    name: { en: "Perpetual Heart", "zh-CN": "恒常机关之心" },
  },
  "Smoldering Pearl": {
    id: "Smoldering Pearl",
    name: { en: "Smoldering Pearl", "zh-CN": "阴燃之珠" },
  },
  "Dew of Repudiation": {
    id: "Dew of Repudiation",
    name: { en: "Dew of Repudiation", "zh-CN": "排异之露" },
  },
  "Storm Beads": {
    id: "Storm Beads",
    name: { en: "Storm Beads", "zh-CN": "雷霆数珠" },
  },
  "Riftborn Regalia": {
    id: "Riftborn Regalia",
    name: { en: "Riftborn Regalia", "zh-CN": "兽境王器" },
  },
  "Dragonheir’s False Fin": {
    id: "Dragonheir’s False Fin",
    name: { en: "Dragonheir’s False Fin", "zh-CN": "龙嗣伪鳍" },
  },
  "Runic Fang": {
    id: "Runic Fang",
    name: { en: "Runic Fang", "zh-CN": "符纹之齿" },
  },
  "Majestic Hooked Beak": {
    id: "Majestic Hooked Beak",
    name: { en: "Majestic Hooked Beak", "zh-CN": "蕈王钩喙" },
  },
  "Thunderclap Fruitcore": {
    id: "Thunderclap Fruitcore",
    name: { en: "Thunderclap Fruitcore", "zh-CN": "藏雷野实" },
  },
  "Light Guiding Tetrahedron": {
    id: "Light Guiding Tetrahedron",
    name: { en: "Light Guiding Tetrahedron", "zh-CN": "导光四面体" },
  },
  "Perpetual Caliber": {
    id: "Perpetual Caliber",
    name: { en: "Perpetual Caliber", "zh-CN": "永续机芯" },
  },
  "Quelled Creeper": {
    id: "Quelled Creeper",
    name: { en: "Quelled Creeper", "zh-CN": "灭诤草蔓" },
  },
  "Pseudo-Stamens": {
    id: "Pseudo-Stamens",
    name: { en: "Pseudo-Stamens", "zh-CN": "苍砾蕊羽" },
  },
  "Evergloom Ring": {
    id: "Evergloom Ring",
    name: { en: "Evergloom Ring", "zh-CN": "常暗圆环" },
  },
  "Emperor’s Resolution": {
    id: "Emperor’s Resolution",
    name: { en: "Emperor’s Resolution", "zh-CN": "帝皇的决断" },
  },
  "Artificed Spare Clockwork Component — Coppelia": {
    id: "Artificed Spare Clockwork Component — Coppelia",
    name: {
      en: "Artificed Spare Clockwork Component — Coppelia",
      "zh-CN": "奇械发条备件・歌裴莉娅",
    },
  },
  "Artificed Spare Clockwork Component — Coppelius": {
    id: "Artificed Spare Clockwork Component — Coppelius",
    name: {
      en: "Artificed Spare Clockwork Component — Coppelius",
      "zh-CN": "奇械发条备件・科培琉司",
    },
  },
  "Fontemer Unihorn": {
    id: "Fontemer Unihorn",
    name: { en: "Fontemer Unihorn", "zh-CN": "原海麟角" },
  },
  "“Tourbillon Device”": {
    id: "“Tourbillon Device”",
    name: { en: "“Tourbillon Device”", "zh-CN": "「图比昂装置」" },
  },
  "Water That Failed To Transcend": {
    id: "Water That Failed To Transcend",
    name: {
      en: "Water That Failed To Transcend",
      "zh-CN": "未能达成超越之水",
    },
  },
  "Cloudseam Scale": {
    id: "Cloudseam Scale",
    name: { en: "Cloudseam Scale", "zh-CN": "凝云鳞甲" },
  },
  "Fragment of a Golden Melody": {
    id: "Fragment of a Golden Melody",
    name: {
      en: "Fragment of a Golden Melody",
      "zh-CN": "金色旋律的断章",
    },
  },
  "Mark of the Binding Blessing": {
    id: "Mark of the Binding Blessing",
    name: {
      en: "Mark of the Binding Blessing",
      "zh-CN": "受祝所缚之印",
    },
  },
  "Overripe Flamegranate": {
    id: "Overripe Flamegranate",
    name: { en: "Overripe Flamegranate", "zh-CN": "过熟的火榴果" },
  },
  "Gold-Inscribed Secret Source Core": {
    id: "Gold-Inscribed Secret Source Core",
    name: {
      en: "Gold-Inscribed Secret Source Core",
      "zh-CN": "秘刻金纹的源核",
    },
  },
  "Ensnaring Gaze": {
    id: "Ensnaring Gaze",
    name: { en: "Ensnaring Gaze", "zh-CN": "深邃纠缠的凝视" },
  },
  "Talisman of the Enigmatic Land": {
    id: "Talisman of the Enigmatic Land",
    name: { en: "Talisman of the Enigmatic Land", "zh-CN": "谜土的护符" },
  },
  "Sparkless Statue Core": {
    id: "Sparkless Statue Core",
    name: { en: "Sparkless Statue Core", "zh-CN": "龙像的无智核" },
  },
  "Secret Source Airflow Accumulator": {
    id: "Secret Source Airflow Accumulator",
    name: {
      en: "Secret Source Airflow Accumulator",
      "zh-CN": "秘源积气喉",
    },
  },
  //
  // Newline - character ascension
  //
} as const;

export type CharacterAscension = keyof typeof characterAscensions;

const talentBooks = {
  Freedom: { id: "Freedom", name: { en: "Freedom", "zh-CN": "自由" } },
  Resistance: { id: "Resistance", name: { en: "Resistance", "zh-CN": "抗争" } },
  Ballad: { id: "Ballad", name: { en: "Ballad", "zh-CN": "诗文" } },
  Prosperity: { id: "Prosperity", name: { en: "Prosperity", "zh-CN": "繁荣" } },
  Diligence: { id: "Diligence", name: { en: "Diligence", "zh-CN": "勤劳" } },
  Gold: { id: "Gold", name: { en: "Gold", "zh-CN": "黄金" } },
  Transience: { id: "Transience", name: { en: "Transience", "zh-CN": "浮世" } },
  Elegance: { id: "Elegance", name: { en: "Elegance", "zh-CN": "风雅" } },
  Light: { id: "Light", name: { en: "Light", "zh-CN": "天光" } },
  Admonition: { id: "Admonition", name: { en: "Admonition", "zh-CN": "诤言" } },
  Ingenuity: { id: "Ingenuity", name: { en: "Ingenuity", "zh-CN": "巧思" } },
  Praxis: { id: "Praxis", name: { en: "Praxis", "zh-CN": "笃行" } },
  Equity: { id: "Equity", name: { en: "Equity", "zh-CN": "公平" } },
  Justice: { id: "Justice", name: { en: "Justice", "zh-CN": "正义" } },
  Order: { id: "Order", name: { en: "Order", "zh-CN": "秩序" } },
  Contention: { id: "Contention", name: { en: "Contention", "zh-CN": "角逐" } },
  Kindling: { id: "Kindling", name: { en: "Kindling", "zh-CN": "焚燔" } },
  Conflict: { id: "Conflict", name: { en: "Conflict", "zh-CN": "纷争" } },
  // Newline - talent book
} as const;

export type TalentBook = keyof typeof talentBooks;

const talentMaterials = {
  "Crown of Insight": {
    id: "Crown of Insight",
    name: { en: "Crown of Insight", "zh-CN": "智识之冕" },
  },
  "Dvalin’s Plume": {
    id: "Dvalin’s Plume",
    name: { en: "Dvalin’s Plume", "zh-CN": "东风之翎" },
  },
  "Dvalin’s Claw": {
    id: "Dvalin’s Claw",
    name: { en: "Dvalin’s Claw", "zh-CN": "东风之爪" },
  },
  "Dvalin’s Sigh": {
    id: "Dvalin’s Sigh",
    name: { en: "Dvalin’s Sigh", "zh-CN": "东风的吐息" },
  },
  "Tail of Boreas": {
    id: "Tail of Boreas",
    name: { en: "Tail of Boreas", "zh-CN": "北风之尾" },
  },
  "Ring of Boreas": {
    id: "Ring of Boreas",
    name: { en: "Ring of Boreas", "zh-CN": "北风之环" },
  },
  "Spirit Locket of Boreas": {
    id: "Spirit Locket of Boreas",
    name: { en: "Spirit Locket of Boreas", "zh-CN": "北风的魂匣" },
  },
  "Tusk of Monoceros Caeli": {
    id: "Tusk of Monoceros Caeli",
    name: { en: "Tusk of Monoceros Caeli", "zh-CN": "吞天之鲸・只角" },
  },
  "Shard of a Foul Legacy": {
    id: "Shard of a Foul Legacy",
    name: { en: "Shard of a Foul Legacy", "zh-CN": "魔王之刃・残片" },
  },
  "Shadow of the Warrior": {
    id: "Shadow of the Warrior",
    name: { en: "Shadow of the Warrior", "zh-CN": "武炼之魂・孤影" },
  },
  "Dragon Lord’s Crown": {
    id: "Dragon Lord’s Crown",
    name: { en: "Dragon Lord’s Crown", "zh-CN": "龙王之冕" },
  },
  "Bloodjade Branch": {
    id: "Bloodjade Branch",
    name: { en: "Bloodjade Branch", "zh-CN": "血玉之枝" },
  },
  "Gilded Scale": {
    id: "Gilded Scale",
    name: { en: "Gilded Scale", "zh-CN": "鎏金之鳞" },
  },
  "Molten Moment": {
    id: "Molten Moment",
    name: { en: "Molten Moment", "zh-CN": "熔毁之刻" },
  },
  "Hellfire Butterfly": {
    id: "Hellfire Butterfly",
    name: { en: "Hellfire Butterfly", "zh-CN": "狱火之蝶" },
  },
  "Ashen Heart": {
    id: "Ashen Heart",
    name: { en: "Ashen Heart", "zh-CN": "灰烬之心" },
  },
  "Mudra of the Malefic General": {
    id: "Mudra of the Malefic General",
    name: { en: "Mudra of the Malefic General", "zh-CN": "凶将之手眼" },
  },
  "Tears of the Calamitous God": {
    id: "Tears of the Calamitous God",
    name: { en: "Tears of the Calamitous God", "zh-CN": "祸神之禊泪" },
  },
  "The Meaning of Aeons": {
    id: "The Meaning of Aeons",
    name: { en: "The Meaning of Aeons", "zh-CN": "万劫之真意" },
  },
  "Puppet Strings": {
    id: "Puppet Strings",
    name: { en: "Puppet Strings", "zh-CN": "傀儡的悬丝" },
  },
  "Mirror of Mushin": {
    id: "Mirror of Mushin",
    name: { en: "Mirror of Mushin", "zh-CN": "无心的渊镜" },
  },
  "Daka’s Bell": {
    id: "Daka’s Bell",
    name: { en: "Daka’s Bell", "zh-CN": "空行的虚铃" },
  },
  "Worldspan Fern": {
    id: "Worldspan Fern",
    name: { en: "Worldspan Fern", "zh-CN": "生长天地之蕨草" },
  },
  "Primordial Greenbloom": {
    id: "Primordial Greenbloom",
    name: { en: "Primordial Greenbloom", "zh-CN": "原初绿洲之初绽" },
  },
  Everamber: {
    id: "Everamber",
    name: { en: "Everamber", "zh-CN": "亘古树海之一瞬" },
  },
  "Lightless Silk String": {
    id: "Lightless Silk String",
    name: { en: "Lightless Silk String", "zh-CN": "无光丝线" },
  },
  "Lightless Eye of the Maelstrom": {
    id: "Lightless Eye of the Maelstrom",
    name: { en: "Lightless Eye of the Maelstrom", "zh-CN": "无光涡眼" },
  },
  "Lightless Mass": {
    id: "Lightless Mass",
    name: { en: "Lightless Mass", "zh-CN": "无光质块" },
  },
  "Fading Candle": {
    id: "Fading Candle",
    name: { en: "Fading Candle", "zh-CN": "残火灯烛" },
  },
  "Silken Feather": {
    id: "Silken Feather",
    name: { en: "Silken Feather", "zh-CN": "丝织之羽" },
  },
  "Denial and Judgment": {
    id: "Denial and Judgment",
    name: { en: "Denial and Judgment", "zh-CN": "否定裁断" },
  },
  "Eroded Horn": {
    id: "Eroded Horn",
    name: { en: "Eroded Horn", "zh-CN": "蚀灭的灵犀" },
  },
  "Eroded Sunfire": {
    id: "Eroded Sunfire",
    name: { en: "Eroded Sunfire", "zh-CN": "蚀灭的阳焰" },
  },
  "Eroded Scale-Feather": {
    id: "Eroded Scale-Feather",
    name: { en: "Eroded Scale-Feather", "zh-CN": "蚀灭的鳞羽" },
  },
  "Ascended Sample: Knight": {
    id: "Ascended Sample: Knight",
    name: { en: "Ascended Sample: Knight", "zh-CN": "升扬样本・骑士" },
  },
  "Ascended Sample: Rook": {
    id: "Ascended Sample: Rook",
    name: { en: "Ascended Sample: Rook", "zh-CN": "升扬样本・战车" },
  },
  "Ascended Sample: Queen": {
    id: "Ascended Sample: Queen",
    name: { en: "Ascended Sample: Queen", "zh-CN": "升扬样本・王族" },
  },
  //
  // Newline - talent material
  //
} as const;

export type TalentMaterial = keyof typeof talentMaterials;

const weaponAscensions = {
  "Tile of Decarabian’s Tower": {
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
  "Boreal Wolf’s Milk Tooth": {
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
  "Fetters of the Dandelion Gladiator": {
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
  "Luminous Sands from Guyun": {
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
  "Mist Veiled Lead Elixir": {
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
  "Grain of Aerosiderite": {
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
  "Coral Branch of a Distant Sea": {
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
  "Narukami’s Wisdom": {
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
  "Mask of the Wicked Lieutenant": {
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
  "Copper Talisman of the Forest Dew": {
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
  "Oasis Garden’s Reminiscence": {
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
  "Echo of Scorching Might": {
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
  "Fragment of an Ancient Chord": {
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
  "Dross of Pure Sacred Dewdrop": {
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
  "Broken Goblet of the Pristine Sea": {
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
  "Blazing Sacrificial Heart’s Terror": {
    id: "Blazing Sacrificial Heart’s Terror",
    name: {
      en: [
        "Blazing Sacrificial Heart’s Terror",
        "Blazing Sacrificial Heart’s Hesitance",
        "Blazing Sacrificial Heart’s Resolve",
        "Blazing Sacrificial Heart’s Splendor",
      ],
      "zh-CN": [
        "贡祭炽心的惶恐",
        "贡祭炽心的踌躇",
        "贡祭炽心的决绝",
        "贡祭炽心的荣膺",
      ],
    },
  },
  "Delirious Decadence of the Sacred Lord": {
    id: "Delirious Decadence of the Sacred Lord",
    name: {
      en: [
        "Delirious Decadence of the Sacred Lord",
        "Delirious Desolation of the Sacred Lord",
        "Delirious Demeanor of the Sacred Lord",
        "Delirious Divinity of the Sacred Lord",
      ],
      "zh-CN": [
        "谵妄圣主的朽败",
        "谵妄圣主的余哀",
        "谵妄圣主的容光",
        "谵妄圣主的神面",
      ],
    },
  },
  "Night-Wind’s Mystic Consideration": {
    id: "Night-Wind’s Mystic Consideration",
    name: {
      en: [
        "Night-Wind’s Mystic Consideration",
        "Night-Wind’s Mystic Premonition",
        "Night-Wind’s Mystic Augury",
        "Night-Wind’s Mystic Revelation",
      ],
      "zh-CN": [
        "神合秘烟的思绪",
        "神合秘烟的预感",
        "神合秘烟的征兆",
        "神合秘烟的启示",
      ],
    },
  },
  //
  // Newline - weapons
  //
} as const;

export type WeaponAscension = keyof typeof weaponAscensions;

//#region Forging

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

export const borderlandBillets = [
  "Borderland Claymore Billet",
  "Borderland Polearm Billet",
  "Borderland Sword Billet",
  "Borderland Bow Billet",
  "Borderland Catalyst Billet",
] as const;

const ores = [
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
  | typeof borderlandBillets
  | typeof ores
)[number];

function forging(id: Forging, name: I18nObject): Material {
  return { id, forging: true, name };
}

const forgingMaterials: Record<Forging, Material> = {
  "Northlander Claymore Billet": forging("Northlander Claymore Billet", {
    en: "Northlander Claymore Billet",
    "zh-CN": "北陆双手剑原胚",
  }),
  "Northlander Polearm Billet": forging("Northlander Polearm Billet", {
    en: "Northlander Polearm Billet",
    "zh-CN": "北陆长柄武器原胚",
  }),
  "Northlander Sword Billet": forging("Northlander Sword Billet", {
    en: "Northlander Sword Billet",
    "zh-CN": "北陆单手剑原胚",
  }),
  "Northlander Bow Billet": forging("Northlander Bow Billet", {
    en: "Northlander Bow Billet",
    "zh-CN": "北陆弓原胚",
  }),
  "Northlander Catalyst Billet": forging("Northlander Catalyst Billet", {
    en: "Northlander Catalyst Billet",
    "zh-CN": "北陆法器原胚",
  }),
  "Midlander Claymore Billet": forging("Midlander Claymore Billet", {
    en: "Midlander Claymore Billet",
    "zh-CN": "央陆双手剑原胚",
  }),
  "Midlander Polearm Billet": forging("Midlander Polearm Billet", {
    en: "Midlander Polearm Billet",
    "zh-CN": "央陆长柄武器原胚",
  }),
  "Midlander Sword Billet": forging("Midlander Sword Billet", {
    en: "Midlander Sword Billet",
    "zh-CN": "央陆单手剑原胚",
  }),
  "Midlander Bow Billet": forging("Midlander Bow Billet", {
    en: "Midlander Bow Billet",
    "zh-CN": "央陆弓原胚",
  }),
  "Midlander Catalyst Billet": forging("Midlander Catalyst Billet", {
    en: "Midlander Catalyst Billet",
    "zh-CN": "央陆法器原胚",
  }),
  "Borderland Claymore Billet": forging("Borderland Claymore Billet", {
    en: "Borderland Claymore Billet",
    "zh-CN": "垠土双手剑原胚",
  }),
  "Borderland Polearm Billet": forging("Borderland Polearm Billet", {
    en: "Borderland Polearm Billet",
    "zh-CN": "垠土长柄武器原胚",
  }),
  "Borderland Sword Billet": forging("Borderland Sword Billet", {
    en: "Borderland Sword Billet",
    "zh-CN": "垠土单手剑原胚",
  }),
  "Borderland Bow Billet": forging("Borderland Bow Billet", {
    en: "Borderland Bow Billet",
    "zh-CN": "垠土弓原胚",
  }),
  "Borderland Catalyst Billet": forging("Borderland Catalyst Billet", {
    en: "Borderland Catalyst Billet",
    "zh-CN": "垠土法器原胚",
  }),
  "Crystal Chunk": forging("Crystal Chunk", {
    en: "Crystal Chunk",
    "zh-CN": "水晶块",
  }),
  "White Iron Chunk": forging("White Iron Chunk", {
    en: "White Iron Chunk",
    "zh-CN": "白铁块",
  }),
  Starsilver: forging("Starsilver", { en: "Starsilver", "zh-CN": "星银矿石" }),
  "Vitalized Dragontooth": forging("Vitalized Dragontooth", {
    en: "Vitalized Dragontooth",
    "zh-CN": "汲取了生命力的龙牙",
  }),
  "Amethyst Lump": forging("Amethyst Lump", {
    en: "Amethyst Lump",
    "zh-CN": "紫晶块",
  }),
  "Condessence Crystal": forging("Condessence Crystal", {
    en: "Condessence Crystal",
    "zh-CN": "萃凝晶",
  }),
  //
  // Newline - forging
  //
} as const;

//#endregion Forging

//#region Fishing

export const fish = [
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

export type Fishing = (typeof fish)[number];

function fishing(id: Fishing, name: I18nObject): Material {
  return { id, fishing: true, name };
}

const fishingMaterials: Record<Fishing, Material> = {
  "Raimei Angelfish": fishing("Raimei Angelfish", {
    en: "Raimei Angelfish",
    "zh-CN": "雷鸣仙",
  }),
  "Golden Koi": fishing("Golden Koi", {
    en: "Golden Koi",
    "zh-CN": "金赤假龙",
  }),
  "Rusty Koi": fishing("Rusty Koi", { en: "Rusty Koi", "zh-CN": "锖假龙" }),
  Pufferfish: fishing("Pufferfish", { en: "Pufferfish", "zh-CN": "炮鲀" }),
  "Bitter Pufferfish": fishing("Bitter Pufferfish", {
    en: "Bitter Pufferfish",
    "zh-CN": "苦炮鲀",
  }),
  "Peach of the Deep Waves": fishing("Peach of the Deep Waves", {
    en: "Peach of the Deep Waves",
    "zh-CN": "沉波蜜桃",
  }),
  "Lazurite Axe Marlin": fishing("Lazurite Axe Marlin", {
    en: "Lazurite Axe Marlin",
    "zh-CN": "青金斧枪鱼",
  }),
  "Halcyon Jade Axe Marlin": fishing("Halcyon Jade Axe Marlin", {
    en: "Halcyon Jade Axe Marlin",
    "zh-CN": "翡玉斧枪鱼",
  }),
  "Maintenance Mek: Platinum Collection": fishing(
    "Maintenance Mek: Platinum Collection",
    {
      en: "Maintenance Mek: Platinum Collection",
      "zh-CN": "维护机关・白金典藏型",
    }
  ),
  "Rippling Heartfeather Bass": fishing("Rippling Heartfeather Bass", {
    en: "Rippling Heartfeather Bass",
    "zh-CN": "波波心羽鲈",
  }),
  "Blazing Heartfeather Bass": fishing("Blazing Heartfeather Bass", {
    en: "Blazing Heartfeather Bass",
    "zh-CN": "烘烘心羽鲈",
  }),
  "Streaming Axe Marlin": fishing("Streaming Axe Marlin", {
    en: "Streaming Axe Marlin",
    "zh-CN": "海涛斧枪鱼",
  }),
  //
  // Newline - fishing
  //
} as const;

//#endregion Fishing

export const materials: readonly Material[] = [
  ...Object.values(commons),
  ...Object.values(elites),
  ...Object.values(localSpecialities),
  ...Object.values(gems),
  ...Object.values(characterAscensions),
  ...Object.values(talentBooks),
  ...Object.values(talentMaterials),
  ...Object.values(weaponAscensions),
  ...Object.values(forgingMaterials),
  ...Object.values(fishingMaterials),
] as const;

export const materials2: Record<Material["id"], Material> = {
  ...commons,
  ...elites,
  ...localSpecialities,
  ...gems,
  ...characterAscensions,
  ...talentBooks,
  ...talentMaterials,
  ...weaponAscensions,
  ...forgingMaterials,
  ...fishingMaterials,
};
