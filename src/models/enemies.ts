import type { I18nObject } from "../i18n";
import {
  type BaseItem,
  TYPE_TALENT_DOMAIN,
  TYPE_WEAPON_DOMAIN,
} from "../types";
import {
  borderlandBillets,
  type MaterialId,
  midlanderBillets,
  northlanderBillets,
  type TalentBook,
  type WeaponAscension,
} from "./materials";

export type Region =
  | "Mondstadt"
  | "Liyue"
  | "Inazuma"
  | "Sumeru"
  | "Fontaine"
  | "Natlan"
  | "Nod-Krai";

export type TalentDomain = BaseItem & {
  materialsByWeekday: ("All" | TalentBook)[];
};

function talentDomain(
  id: string,
  name: I18nObject,
  materialsByWeekday: ("All" | TalentBook)[],
): TalentDomain {
  return {
    id,
    name,
    itemType: TYPE_TALENT_DOMAIN,
    materialsByWeekday,
  };
}

export type WeaponDomain = BaseItem & {
  materialsByWeekday: ("All" | WeaponAscension)[];
};

function weaponDomain(
  id: string,
  name: I18nObject,
  materialsByWeekday: ("All" | WeaponAscension)[],
): WeaponDomain {
  return {
    id,
    name,
    itemType: TYPE_WEAPON_DOMAIN,
    materialsByWeekday,
  };
}

export const talentDomains: TalentDomain[] = [
  talentDomain("Forsaken Rift", { en: "Forsaken Rift", "zh-CN": "忘却之峡" }, [
    "All",
    "Freedom",
    "Resistance",
    "Ballad",
  ]),
  talentDomain(
    "Taishan Mansion",
    { en: "Taishan Mansion", "zh-CN": "太山府" },
    ["All", "Prosperity", "Diligence", "Gold"],
  ),
  talentDomain("Violet Court", { en: "Violet Court", "zh-CN": "菫色之庭" }, [
    "All",
    "Transience",
    "Elegance",
    "Light",
  ]),
  talentDomain(
    "Steeple of Ignorance",
    { en: "Steeple of Ignorance", "zh-CN": "昏识塔" },
    ["All", "Admonition", "Ingenuity", "Praxis"],
  ),
  talentDomain(
    "Pale Forgotten Glory",
    { en: "Pale Forgotten Glory", "zh-CN": "苍白的遗荣" },
    ["All", "Equity", "Justice", "Order"],
  ),
  talentDomain(
    "Blazing Ruins",
    { en: "Blazing Ruins", "zh-CN": "蕴火的幽墟" },
    ["All", "Contention", "Kindling", "Conflict"],
  ),
  talentDomain(
    "Lightless Capital",
    { en: "Lightless Capital", "zh-CN": "无光的深都" },
    ["All", "Moonlight", "Elysium", "Vagrancy"],
  ),
];

export const weaponDomains: WeaponDomain[] = [
  weaponDomain(
    "Cecilia Garden",
    { en: "Cecilia Garden", "zh-CN": "塞西莉亚苗圃" },
    [
      "All",
      "Tile of Decarabian’s Tower",
      "Boreal Wolf’s Milk Tooth",
      "Fetters of the Dandelion Gladiator",
    ],
  ),
  weaponDomain(
    "Hidden Palace of Lianshan Formula",
    { en: "Hidden Palace of Lianshan Formula", "zh-CN": "震雷连山密宫" },
    [
      "All",
      "Luminous Sands from Guyun",
      "Mist Veiled Lead Elixir",
      "Grain of Aerosiderite",
    ],
  ),
  weaponDomain(
    "Court of Flowing Sand",
    { en: "Court of Flowing Sand", "zh-CN": "砂流之庭" },
    [
      "All",
      "Coral Branch of a Distant Sea",
      "Narukami’s Wisdom",
      "Mask of the Wicked Lieutenant",
    ],
  ),
  weaponDomain(
    "Tower of Abject Pride",
    { en: "Tower of Abject Pride", "zh-CN": "有顶塔" },
    [
      "All",
      "Copper Talisman of the Forest Dew",
      "Oasis Garden’s Reminiscence",
      "Echo of Scorching Might",
    ],
  ),
  weaponDomain(
    "Echoes of the Deep Tides",
    { en: "Echoes of the Deep Tides", "zh-CN": "深潮的余响" },
    [
      "All",
      "Fragment of an Ancient Chord",
      "Dross of Pure Sacred Dewdrop",
      "Broken Goblet of the Pristine Sea",
    ],
  ),
  weaponDomain(
    "Ancient Watchtower",
    { en: "Ancient Watchtower", "zh-CN": "深谷瞭望所" },
    [
      "All",
      "Blazing Sacrificial Heart’s Terror",
      "Delirious Decadence of the Sacred Lord",
      "Night-Wind’s Mystic Consideration",
    ],
  ),
  weaponDomain(
    "Lost Mooncourt",
    { en: "Lost Mooncourt", "zh-CN": "失落的月庭" },
    [
      "All",
      "Artful Device Fragment",
      "Ember of Long Night Flint",
      "Sundered Glory of the Far-North Scions",
    ],
  ),
];

export type Boss = BaseItem & {
  region: Region;
  materials: MaterialId[];
};

export const bosses: Boss[] = [
  //#region normal boss
  {
    id: "Electro Hypostasis",
    region: "Mondstadt",
    materials: ["Lightning Prism", "Vajrada Amethyst"],
    itemType: "boss",
    name: { en: ["Electro Hypostasis"], "zh-CN": ["无相之雷"] },
  },
  {
    id: "Anemo Hypostasis",
    region: "Mondstadt",
    materials: ["Hurricane Seed", "Vayuda Turquoise"],
    itemType: "boss",
    name: { en: ["Anemo Hypostasis"], "zh-CN": ["无相之风"] },
  },
  {
    id: "Cryo Regisvine",
    region: "Mondstadt",
    materials: ["Hoarfrost Core", "Shivada Jade"],
    itemType: "boss",
    name: { en: ["Cryo Regisvine"], "zh-CN": ["急冻树"] },
  },
  {
    id: "Geo Hypostasis",
    region: "Liyue",
    materials: ["Basalt Pillar", "Prithiva Topaz"],
    itemType: "boss",
    name: { en: ["Geo Hypostasis"], "zh-CN": ["无相之岩"] },
  },
  {
    id: "Rhodeia of Loch",
    region: "Liyue",
    materials: ["Cleansing Heart", "Varunada Lazurite"],
    itemType: "boss",
    name: { en: ["Rhodeia of Loch"], "zh-CN": ["纯水精灵"] },
  },
  {
    id: "Pyro Regisvine",
    region: "Liyue",
    materials: ["Everflame Seed", "Agnidus Agate"],
    itemType: "boss",
    name: { en: ["Pyro Regisvine"], "zh-CN": ["爆炎树"] },
  },
  {
    id: "Primo Geovishap",
    region: "Liyue",
    materials: [
      "Juvenile Jade",
      "Prithiva Topaz",
      "Shivada Jade",
      "Agnidus Agate",
      "Varunada Lazurite",
      "Vajrada Amethyst",
    ],
    itemType: "boss",
    name: { en: ["Primo Geovishap"], "zh-CN": ["古岩龙蜥"] },
  },
  {
    id: "Cryo Hypostasis",
    region: "Mondstadt",
    materials: ["Crystalline Bloom", "Shivada Jade"],
    itemType: "boss",
    name: { en: ["Cryo Hypostasis"], "zh-CN": ["无相之冰"] },
  },
  {
    id: "Maguu Kenki",
    region: "Inazuma",
    materials: ["Marionette Core", "Vayuda Turquoise", "Shivada Jade"],
    itemType: "boss",
    name: { en: ["Maguu Kenki"], "zh-CN": ["魔偶剑鬼"] },
  },
  {
    id: "Pyro Hypostasis",
    region: "Inazuma",
    materials: ["Smoldering Pearl", "Agnidus Agate"],
    itemType: "boss",
    name: { en: ["Pyro Hypostasis"], "zh-CN": ["无相之火"] },
  },
  {
    id: "Perpetual Mechanical Array",
    region: "Inazuma",
    materials: ["Perpetual Heart", "Prithiva Topaz", "Shivada Jade"],
    itemType: "boss",
    name: { en: "Perpetual Mechanical Array", "zh-CN": "恒常机关阵列" },
  },
  {
    id: "Hydro Hypostasis",
    region: "Inazuma",
    materials: ["Dew of Repudiation", "Varunada Lazurite"],
    itemType: "boss",
    name: { en: ["Hydro Hypostasis"], "zh-CN": ["无相之水"] },
  },
  {
    id: "Thunder Manifestation",
    region: "Inazuma",
    materials: ["Storm Beads", "Vajrada Amethyst"],
    itemType: "boss",
    name: { en: ["Thunder Manifestation"], "zh-CN": ["雷音权现"] },
  },
  {
    id: "Golden Wolflord",
    region: "Inazuma",
    materials: ["Riftborn Regalia", "Prithiva Topaz"],
    itemType: "boss",
    name: { en: ["Golden Wolflord"], "zh-CN": ["黄金王兽"] },
  },
  {
    id: "Bathysmal Vishap Herd",
    region: "Inazuma",
    materials: ["Dragonheir’s False Fin", "Shivada Jade", "Vajrada Amethyst"],
    itemType: "boss",
    name: { en: ["Bathysmal Vishap Herd"], "zh-CN": ["深海龙蜥之群"] },
  },
  {
    id: "Ruin Serpent",
    region: "Liyue",
    materials: ["Runic Fang", "Prithiva Topaz"],
    itemType: "boss",
    name: { en: ["Ruin Serpent"], "zh-CN": ["遗迹巨蛇"] },
  },
  {
    id: "Electro Regisvine",
    region: "Sumeru",
    materials: ["Thunderclap Fruitcore", "Vajrada Amethyst"],
    itemType: "boss",
    name: { en: ["Electro Regisvine"], "zh-CN": ["掣电树"] },
  },
  {
    id: "Jadeplume Terrorshroom",
    region: "Sumeru",
    materials: ["Majestic Hooked Beak", "Nagadus Emerald"],
    itemType: "boss",
    name: { en: ["Jadeplume Terrorshroom"], "zh-CN": ["翠翎恐蕈"] },
  },
  {
    id: "Algorithm of Semi-Intransient Matrix of Overseer Network",
    region: "Sumeru",
    materials: [
      "Light Guiding Tetrahedron",
      "Agnidus Agate",
      "Vayuda Turquoise",
    ],
    itemType: "boss",
    name: {
      en: ["Algorithm of Semi-Intransient Matrix of Overseer Network"],
      "zh-CN": ["半永恒统辖矩阵"],
    },
  },
  {
    id: "Aeonblight Drake",
    region: "Sumeru",
    materials: ["Perpetual Caliber", "Shivada Jade", "Varunada Lazurite"],
    itemType: "boss",
    name: { en: ["Aeonblight Drake"], "zh-CN": ["兆载永劫龙兽"] },
  },
  {
    id: "Dendro Hypostasis",
    region: "Sumeru",
    materials: ["Quelled Creeper", "Nagadus Emerald"],
    itemType: "boss",
    name: { en: ["Dendro Hypostasis"], "zh-CN": ["无相之草"] },
  },
  {
    id: "Setekh Wenut",
    region: "Sumeru",
    materials: ["Pseudo-Stamens", "Vayuda Turquoise"],
    itemType: "boss",
    name: { en: "Setekh Wenut", "zh-CN": "风蚀沙虫" },
  },
  {
    id: "Iniquitous Baptist",
    region: "Sumeru",
    materials: [
      "Evergloom Ring",
      "Vajrada Amethyst",
      "Shivada Jade",
      "Agnidus Agate",
      "Varunada Lazurite",
    ],
    itemType: "boss",
    name: { en: "Iniquitous Baptist", "zh-CN": "深罪浸礼者" },
  },
  {
    id: "Emperor of Fire and Iron",
    region: "Fontaine",
    materials: ["Emperor’s Resolution", "Agnidus Agate"],
    itemType: "boss",
    name: { en: "Emperor of Fire and Iron", "zh-CN": "铁甲熔火帝皇" },
  },
  {
    id: "“Dirge of Coppelia”",
    region: "Fontaine",
    materials: [
      "Artificed Spare Clockwork Component — Coppelia",
      "Vayuda Turquoise",
    ],
    itemType: "boss",
    name: { en: "“Dirge of Coppelia”", "zh-CN": "「歌裴莉娅的葬送」" },
  },
  {
    id: "“Nemesis of Coppelius”",
    region: "Fontaine",
    materials: [
      "Artificed Spare Clockwork Component — Coppelius",
      "Shivada Jade",
    ],
    itemType: "boss",
    name: { en: "“Nemesis of Coppelius”", "zh-CN": "「科培琉司的劫罚」" },
  },
  {
    id: "Millennial Pearl Seahorse",
    region: "Fontaine",
    itemType: "boss",
    name: { en: "Millennial Pearl Seahorse", "zh-CN": "千年珍珠骏麟" },
    materials: ["Fontemer Unihorn", "Vajrada Amethyst"],
  },
  {
    id: "Experimental Field Generator",
    region: "Fontaine",
    itemType: "boss",
    name: {
      en: "Experimental Field Generator",
      "zh-CN": "实验性场力发生装置",
    },
    materials: ["“Tourbillon Device”", "Prithiva Topaz"],
  },
  {
    id: "Hydro Tulpa",
    region: "Fontaine",
    itemType: "boss",
    name: { en: "Hydro Tulpa", "zh-CN": "水形幻人" },
    materials: ["Water That Failed To Transcend", "Varunada Lazurite"],
  },
  {
    id: "Solitary Suanni",
    region: "Liyue",
    itemType: "boss",
    name: { en: "Solitary Suanni", "zh-CN": "隐山猊兽" },
    materials: ["Cloudseam Scale", "Varunada Lazurite", "Vayuda Turquoise"],
  },
  {
    id: "“Statue of Marble and Brass”",
    region: "Fontaine",
    itemType: "boss",
    name: {
      en: "“Statue of Marble and Brass”",
      "zh-CN": "「白石与黄铜的造像」",
    },
    materials: [
      "Fragment of a Golden Melody",
      "Agnidus Agate",
      "Prithiva Topaz",
    ],
  },
  {
    id: "Holawaqa Ngoubou",
    region: "Natlan",
    itemType: "boss",
    name: { en: "Holawaqa Ngoubou", "zh-CN": "霍拉瓦伽・恩古布" },
    materials: ["Mark of the Binding Blessing", "Agnidus Agate"],
  },
  {
    id: "Kongamato",
    region: "Natlan",
    itemType: "boss",
    name: { en: "Kongamato", "zh-CN": "康加玛托" },
    materials: ["Overripe Flamegranate", "Nagadus Emerald"],
  },
  {
    id: "Secret Source Automaton: Configuration Device",
    region: "Natlan",
    itemType: "boss",
    name: {
      en: "Secret Source Automaton: Configuration Device",
      "zh-CN": "秘源机兵・构型械",
    },
    materials: ["Gold-Inscribed Secret Source Core", "Vajrada Amethyst"],
  },
  {
    id: "Tenebrous Papilla",
    region: "Natlan",
    itemType: "boss",
    name: { en: "Tenebrous Papilla", "zh-CN": "深邃摹结株" },
    materials: ["Ensnaring Gaze", "Agnidus Agate", "Vajrada Amethyst"],
  },
  {
    id: "Wayward Hermetic Spiritspeaker",
    region: "Natlan",
    itemType: "boss",
    name: { en: "Wayward Hermetic Spiritspeaker", "zh-CN": "灵觉隐修的迷者" },
    materials: ["Talisman of the Enigmatic Land", "Shivada Jade"],
  },
  {
    id: "Lava Dragon Statue",
    region: "Natlan",
    itemType: "boss",
    name: { en: "Lava Dragon Statue", "zh-CN": "熔岩辉龙像" },
    materials: ["Sparkless Statue Core", "Agnidus Agate"],
  },
  {
    id: "Secret Source Automaton: Overseer Device",
    region: "Natlan",
    itemType: "boss",
    name: {
      en: "Secret Source Automaton: Overseer Device",
      "zh-CN": "秘源机兵・统御械",
    },
    materials: ["Secret Source Airflow Accumulator", "Varunada Lazurite"],
  },
  {
    id: "Knuckle Duckle",
    region: "Nod-Krai",
    itemType: "boss",
    name: {
      en: "Knuckle Duckle",
      "zh-CN": "重拳出击鸭",
    },
    materials: ["Precision Kuuvahki Stamping Die", "Vajrada Amethyst"],
  },
  {
    id: "Radiant Moonfly",
    region: "Nod-Krai",
    itemType: "boss",
    name: { en: "Radiant Moonfly", "zh-CN": "蕴光月幻蝶" },
    materials: [
      "Lightbearing Scale-Feather",
      "Nagadus Emerald",
      "Agnidus Agate",
    ],
  },
  {
    id: "Frostnight Herra",
    region: "Nod-Krai",
    itemType: "boss",
    name: { en: "Frostnight Herra", "zh-CN": "霜夜巡天灵主" },
    materials: ["Radiant Antler", "Varunada Lazurite", "Shivada Jade"],
  },
  {
    id: "Super-Heavy Landrover: Mechanized Fortress",
    region: "Nod-Krai",
    itemType: "boss",
    name: {
      en: "Super-Heavy Landrover: Mechanized Fortress",
      "zh-CN": "超重型陆巡舰・机动战垒",
    },
    materials: [
      "Cyclic Military Kuuvahki Core",
      "Agnidus Agate",
      "Shivada Jade",
    ],
  },
  //#endregion normal boss

  //#region weekly boss
  {
    id: "Confront Stormterror",
    region: "Mondstadt",
    materials: [
      "Dvalin’s Plume",
      "Dvalin’s Claw",
      "Dvalin’s Sigh",
      "Vayuda Turquoise",
      "Vajrada Amethyst",
      "Varunada Lazurite",
      ...northlanderBillets,
    ],
    itemType: "weekly_boss",
    name: {
      en: ["Confront Stormterror / Dvalin"],
      "zh-CN": ["深入风龙废墟 / 风魔龙・特瓦林"],
    },
  },
  {
    id: "Wolf of the North Challenge",
    region: "Mondstadt",
    materials: [
      "Tail of Boreas",
      "Ring of Boreas",
      "Spirit Locket of Boreas",
      "Shivada Jade",
      "Agnidus Agate",
      "Prithiva Topaz",
      ...northlanderBillets,
    ],
    itemType: "weekly_boss",
    name: {
      en: ["Wolf of the North Challenge / Andrius"],
      "zh-CN": ["北风的王狼 / 安德留斯"],
    },
  },
  {
    id: "Enter the Golden House",
    region: "Liyue",
    materials: [
      "Tusk of Monoceros Caeli",
      "Shard of a Foul Legacy",
      "Shadow of the Warrior",
      "Varunada Lazurite",
      "Vajrada Amethyst",
      "Shivada Jade",
      ...northlanderBillets,
    ],
    itemType: "weekly_boss",
    name: {
      en: ["Enter the Golden House / Childe"],
      "zh-CN": ["进入「黄金屋」 / 公子"],
    },
  },
  {
    id: "Beneath the Dragon-Queller",
    region: "Liyue",
    materials: [
      "Dragon Lord’s Crown",
      "Bloodjade Branch",
      "Gilded Scale",
      "Agnidus Agate",
      "Shivada Jade",
      "Prithiva Topaz",
      "Varunada Lazurite",
      "Vajrada Amethyst",
      ...northlanderBillets,
    ],
    itemType: "weekly_boss",
    name: {
      en: ["Beneath the Dragon-Queller / Azhdaha"],
      "zh-CN": ["「伏龙树」之底 / 若陀龙王"],
    },
  },
  {
    id: "Narukami Island: Tenshukaku",
    region: "Inazuma",
    materials: [
      "Molten Moment",
      "Hellfire Butterfly",
      "Ashen Heart",
      "Shivada Jade",
      "Agnidus Agate",
      ...northlanderBillets,
    ],
    itemType: "weekly_boss",
    name: {
      en: ["Narukami Island: Tenshukaku / La Signora"],
      "zh-CN": ["鸣神岛・天守 / 女士"],
    },
  },
  {
    id: "End of the Oneiric Euthymia",
    region: "Inazuma",
    materials: [
      "Mudra of the Malefic General",
      "Tears of the Calamitous God",
      "The Meaning of Aeons",
      "Vajrada Amethyst",
      ...northlanderBillets,
    ],
    itemType: "weekly_boss",
    name: {
      en: ["End of the Oneiric Euthymia / Magatsu Mitake Narukami no Mikoto"],
      "zh-CN": ["梦想乐土之殁 / 祸津御建鸣神命"],
    },
  },
  {
    id: "Joururi Workshop",
    region: "Sumeru",
    materials: [
      "Puppet Strings",
      "Mirror of Mushin",
      "Daka’s Bell",
      "Vajrada Amethyst",
      "Vayuda Turquoise",
      "Varunada Lazurite",
      ...midlanderBillets,
    ],
    itemType: "weekly_boss",
    name: {
      en: [
        "Joururi Workshop / Everlasting Lord of Arcane Wisdom Shouki no Kami, the Prodigal",
      ],
      "zh-CN": ["净琉璃工坊 / 七叶寂照秘密主 「正机之神」"],
    },
  },
  {
    id: "The Realm of Beginnings",
    region: "Sumeru",
    materials: [
      "Worldspan Fern",
      "Primordial Greenbloom",
      "Everamber",
      "Nagadus Emerald",
      ...midlanderBillets,
    ],
    itemType: "weekly_boss",
    name: {
      en: "The Realm of Beginnings / Guardian of Apep’s Oasis",
      "zh-CN": "肇始之乡 / 阿佩普的绿洲守望者",
    },
  },
  {
    id: "Shadow of Another World",
    region: "Fontaine",
    materials: [
      "Lightless Silk String",
      "Lightless Eye of the Maelstrom",
      "Lightless Mass",
      "Varunada Lazurite",
      ...midlanderBillets,
    ],
    itemType: "weekly_boss",
    name: {
      en: "Shadow of Another World / All-Devouring Narwhal",
      "zh-CN": "异界余影 / 吞星之鲸",
    },
  },
  {
    id: "Cinder of Two Worlds’ Flames",
    region: "Fontaine",
    materials: [
      "Fading Candle",
      "Silken Feather",
      "Denial and Judgment",
      "Agnidus Agate",
      ...midlanderBillets,
    ],
    itemType: "weekly_boss",
    name: {
      en: "Cinder of Two Worlds’ Flames / The Knave",
      "zh-CN": "两界之火的遗烬 / 「仆人」",
    },
  },
  {
    id: "Lord of Eroded Primal Fire",
    region: "Natlan",
    itemType: "weekly_boss",
    name: { en: "Lord of Eroded Primal Fire", "zh-CN": "蚀灭的源焰之主" },
    materials: [
      "Eroded Horn",
      "Eroded Sunfire",
      "Eroded Scale-Feather",
      "Agnidus Agate",
      ...borderlandBillets,
    ],
  },
  {
    id: "The Game Before the Gate",
    region: "Mondstadt",
    itemType: "weekly_boss",
    name: {
      en: "The Game Before the Gate",
      "zh-CN": "门扉前的弈局",
    },
    materials: [
      "Ascended Sample: Knight",
      "Ascended Sample: Rook",
      "Ascended Sample: Queen",
      "Agnidus Agate",
      "Varunada Lazurite",
      "Vajrada Amethyst",
      ...northlanderBillets,
    ],
  },
  {
    id: "Heretic of the False Moon",
    region: "Nod-Krai",
    itemType: "weekly_boss",
    name: {
      en: "Heretic of the False Moon",
      "zh-CN": "赝月的异端者",
    },
    materials: [
      "Mask of the Virtuous Doctor",
      "Madman’s Restraint",
      "Elixir of the Heretic",
      "Shivada Jade",
      "Varunada Lazurite",
      "Vajrada Amethyst",
      ...borderlandBillets,
    ],
  },
  //#endregion weekly boss
];

export type Enemy = BaseItem & {
  materials: MaterialId[];
};

export const enemies: Enemy[] = [
  //#region normal enemy
  {
    id: "Fatui Skirmisher",
    itemType: "enemy",
    name: { en: ["Fatui Skirmisher"], "zh-CN": ["愚人众・先遣队"] },
    materials: ["Recruit’s Insignia"],
  },
  {
    id: "Whopperflower",
    itemType: "enemy",
    name: { en: ["Whopperflower"], "zh-CN": ["骗骗花"] },
    materials: ["Whopperflower Nectar"],
  },
  {
    id: "Hilichurl Shooter",
    itemType: "enemy",
    name: { en: ["Hilichurl Shooter"], "zh-CN": ["丘丘射手"] },
    materials: ["Damaged Mask", "Firm Arrowhead"],
  },
  {
    id: "Hilichurl",
    itemType: "enemy",
    name: { en: ["Hilichurl"], "zh-CN": ["丘丘人"] },
    materials: ["Damaged Mask"],
  },
  {
    id: "Samachurl",
    itemType: "enemy",
    name: { en: ["Samachurl"], "zh-CN": ["丘丘萨满"] },
    materials: ["Damaged Mask", "Divining Scroll"],
  },
  {
    id: "Slime",
    itemType: "enemy",
    name: { en: ["Slime"], "zh-CN": ["史莱姆"] },
    materials: ["Slime Condensate"],
  },
  {
    id: "Treasure Hoarder",
    itemType: "enemy",
    name: { en: ["Treasure Hoarder"], "zh-CN": ["盗宝团"] },
    materials: ["Treasure Hoarder Insignia"],
  },
  {
    id: "Nobushi",
    itemType: "enemy",
    name: { en: ["Nobushi"], "zh-CN": ["野伏众"] },
    materials: ["Old Handguard"],
  },
  {
    id: "Specter",
    itemType: "enemy",
    name: { en: ["Specter"], "zh-CN": ["飘浮灵"] },
    materials: ["Spectral Husk"],
  },
  {
    id: "The Eremites",
    itemType: "enemy",
    name: { en: ["The Eremites"], "zh-CN": ["镀金旅团"] },
    materials: ["Faded Red Satin"],
  },
  {
    id: "Fungus",
    itemType: "enemy",
    name: { en: ["Fungus"], "zh-CN": ["蕈兽"] },
    materials: ["Fungal Spores", "Inactivated Fungal Nucleus"],
  },
  {
    id: "Clockwork Meka",
    itemType: "enemy",
    name: { en: "Clockwork Meka", "zh-CN": "发条机关" },
    materials: ["Meshing Gear"],
  },
  {
    id: "Fontemer Aberrant",
    itemType: "enemy",
    name: { en: "Fontemer Aberrant", "zh-CN": "原海异种" },
    materials: ["Transoceanic Pearl"],
  },
  {
    id: "Natlan Saurians",
    itemType: "enemy",
    name: { en: "Natlan Saurians", "zh-CN": "纳塔龙众" },
    materials: ["Juvenile Fang"],
  },
  {
    id: "Sauroform Tribal Warriors",
    itemType: "enemy",
    name: { en: "Sauroform Tribal Warriors", "zh-CN": "部族龙形武士" },
    materials: ["Sentry’s Wooden Whistle"],
  },
  {
    id: "Fatui Oprichniki",
    itemType: "enemy",
    name: { en: "Fatui Oprichniki", "zh-CN": "愚人众特辖队" },
    materials: ["Tattered Warrant"],
  },
  {
    id: "Landcruisers",
    itemType: "enemy",
    name: { en: "Landcruisers", "zh-CN": "巡陆艇" },
    materials: ["Broken Drive Shaft"],
  },
  //#endregion normal enemy

  //#region elite enemy
  {
    id: "Fatui Cicin Mage",
    itemType: "enemy",
    name: { en: ["Fatui Cicin Mage"], "zh-CN": ["愚人众・萤术士"] },
    materials: ["Recruit’s Insignia", "Mist Grass Pollen"],
  },
  {
    id: "Abyss Mage",
    itemType: "enemy",
    name: { en: ["Abyss Mage"], "zh-CN": ["深渊法师"] },
    materials: ["Dead Ley Line Branch"],
  },
  {
    id: "Abyss Herald",
    itemType: "enemy",
    name: { en: ["Abyss Herald"], "zh-CN": ["深渊使徒"] },
    materials: ["Dead Ley Line Branch", "Gloomy Statuette"],
  },
  {
    id: "Abyss Lector",
    itemType: "enemy",
    name: { en: ["Abyss Lector"], "zh-CN": ["深渊咏者"] },
    materials: ["Dead Ley Line Branch", "Gloomy Statuette"],
  },
  {
    id: "Ruin Guard",
    itemType: "enemy",
    name: { en: ["Ruin Guard"], "zh-CN": ["遗迹守卫"] },
    materials: ["Chaos Device"],
  },
  {
    id: "Mitachurl",
    itemType: "enemy",
    name: { en: ["Mitachurl"], "zh-CN": ["丘丘暴徒"] },
    materials: ["Damaged Mask", "Heavy Horn"],
  },
  {
    id: "Fatui Agent",
    itemType: "enemy",
    name: { en: ["Fatui Agent"], "zh-CN": ["愚人众・债务处理人"] },
    materials: ["Recruit’s Insignia", "Hunter’s Sacrificial Knife"],
  },
  {
    id: "Ruin Hunter",
    itemType: "enemy",
    name: { en: ["Ruin Hunter"], "zh-CN": ["遗迹猎者"] },
    materials: ["Chaos Device"],
  },
  {
    id: "Geovishap Hatchling",
    itemType: "enemy",
    name: { en: ["Geovishap Hatchling"], "zh-CN": ["幼岩龙蜥"] },
    materials: ["Fragile Bone Shard"],
  },
  {
    id: "Hilichurl Chieftain",
    itemType: "enemy",
    name: { en: ["Hilichurl Chieftain"], "zh-CN": ["丘丘王"] },
    materials: ["Damaged Mask", "Heavy Horn"],
  },
  {
    id: "Geovishap",
    itemType: "enemy",
    name: { en: ["Geovishap"], "zh-CN": ["岩龙蜥"] },
    materials: ["Fragile Bone Shard"],
  },
  {
    id: "Fatui: Snezhnayan Maiden",
    itemType: "enemy",
    name: {
      en: ["Fatui: Snezhnayan Maiden"],
      "zh-CN": ["愚人众・冬国仕女"],
    },
    materials: ["Dismal Prism"],
  },
  {
    id: "Ruin Sentinels",
    itemType: "enemy",
    name: { en: ["Ruin Sentinels"], "zh-CN": ["遗迹机兵"] },
    materials: ["Chaos Gear"],
  },
  {
    id: "Wolves of the Rift",
    itemType: "enemy",
    name: { en: ["Wolves of the Rift"], "zh-CN": ["兽境之狼"] },
    materials: ["Concealed Claw"],
  },
  {
    id: "Bathysmal Vishap",
    itemType: "enemy",
    name: { en: ["Bathysmal Vishap"], "zh-CN": ["深海龙蜥"] },
    materials: ["Fragile Bone Shard"],
  },
  {
    id: "The Black Serpents",
    itemType: "enemy",
    name: { en: ["The Black Serpents"], "zh-CN": ["黑蛇众"] },
    materials: ["Gloomy Statuette"],
  },
  {
    id: "Ruin Drake",
    itemType: "enemy",
    name: { en: ["Ruin Drake"], "zh-CN": ["遗迹龙兽"] },
    materials: ["Chaos Storage"],
  },
  {
    id: "Ruin Grader",
    itemType: "enemy",
    name: { en: ["Ruin Grader"], "zh-CN": ["遗迹重机"] },
    materials: ["Chaos Device"],
  },
  {
    id: "Primal Construct",
    itemType: "enemy",
    name: { en: ["Primal Construct"], "zh-CN": ["元能构装体"] },
    materials: ["Damaged Prism"],
  },
  {
    id: "Consecrated Beast",
    itemType: "enemy",
    name: { en: "Consecrated Beast", "zh-CN": "圣骸兽" },
    materials: ["Desiccated Shell"],
  },
  {
    id: "Hilichurl Rogue",
    itemType: "enemy",
    name: { en: "Hilichurl Rogue", "zh-CN": ["丘丘游侠"] },
    materials: ["A Flower Yet to Bloom"],
  },
  {
    id: "Tainted Hydro Phantasm",
    itemType: "enemy",
    name: { en: "Tainted Hydro Phantasm", "zh-CN": "浊水幻灵" },
    materials: ["Drop of Tainted Water"],
  },
  {
    id: "Breacher Primus",
    itemType: "enemy",
    name: { en: "Breacher Primus", "zh-CN": "隙境原体" },
    materials: ["Rift Core"],
  },
  {
    id: "Fatui Operative",
    itemType: "enemy",
    name: { en: "Fatui Operative", "zh-CN": "愚人众・役人" },
    materials: ["Old Operative’s Pocket Watch"],
  },
  {
    id: "Xuanwen Beast",
    itemType: "enemy",
    name: { en: "Xuanwen Beast", "zh-CN": "玄文兽" },
    materials: ["Feathery Fin"],
  },
  {
    id: "Praetorian Golem",
    itemType: "enemy",
    name: { en: "Praetorian Golem", "zh-CN": "魔像禁卫" },
    materials: ["Ruined Hilt"],
  },
  {
    id: "Wayob Manifestations",
    itemType: "enemy",
    name: { en: "Wayob Manifestations", "zh-CN": "大灵显化身" },
    materials: ["Shard of a Shattered Will"],
  },
  {
    id: "Avatars of Lava",
    itemType: "enemy",
    name: { en: "Avatars of Lava", "zh-CN": "熔岩游像" },
    materials: ["Ignited Stone"],
  },
  {
    id: "Secret Source Automation: Hunter-Seeker",
    itemType: "enemy",
    name: {
      en: "Secret Source Automation: Hunter-Seeker",
      "zh-CN": "秘源机兵・巡捕械",
    },
    materials: ["Axis of the Secret Source"],
  },
  {
    id: "Tenebrous Mimiflora",
    itemType: "enemy",
    name: { en: "Tenebrous Mimiflora", "zh-CN": "深邃拟覆叶" },
    materials: ["Refractive Bud"],
  },
  {
    id: "Furnace Shell Mountain Weasel",
    itemType: "enemy",
    name: { en: "Furnace Shell Mountain Weasel", "zh-CN": "炉壳山鼬" },
    materials: ["Cold-Cracked Shellshard"],
  },
  {
    id: "Frostnight Scion",
    itemType: "enemy",
    name: { en: "Frostnight Scion", "zh-CN": "霜夜灵嗣" },
    materials: ["Frostnight’s Glimmer"],
  },
  {
    id: "Wasteland Wild Hunt",
    itemType: "enemy",
    name: { en: "Wasteland Wild Hunt", "zh-CN": "荒野狂猎" },
    materials: ["Mistshroud Manifestation"],
  },
  {
    id: "Radiant Beast",
    itemType: "enemy",
    name: { en: "Radiant Beast", "zh-CN": "蕴光异兽" },
    materials: ["Lightless Bone"],
  },
  {
    id: "Fisher of Hidden Depths",
    itemType: "enemy",
    name: { en: "Fisher of Hidden Depths", "zh-CN": "深黯钓客" },
    materials: ["Fractured Eye of the Deep Shadow"],
  },
  //#endregion elite enemy
];
