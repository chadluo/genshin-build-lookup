import type { OfMaterial, Region } from "../base";
import {
  borderlandBillets,
  MaterialId,
  midlanderBillets,
  northlanderBillets,
} from "./materials";

export type Domain = OfMaterial & {
  materials_by_weekday: ("All" | MaterialId)[];
};

export const domains: Domain[] = [
  {
    id: "Forsaken Rift",
    name: { en: ["Forsaken Rift"], "zh-CN": ["忘却之峡"] },
    type: "talent_domain",
    materials_by_weekday: ["All", "Freedom", "Resistance", "Ballad"],
  },
  {
    id: "Taishan Mansion",
    name: { en: ["Taishan Mansion"], "zh-CN": ["太山府"] },
    type: "talent_domain",
    materials_by_weekday: ["All", "Prosperity", "Diligence", "Gold"],
  },
  {
    id: "Violet Court",
    name: { en: ["Violet Court"], "zh-CN": ["菫色之庭"] },
    type: "talent_domain",
    materials_by_weekday: ["All", "Transience", "Elegance", "Light"],
  },
  {
    id: "Steeple of Ignorance",
    name: { en: ["Steeple of Ignorance"], "zh-CN": ["昏识塔"] },
    type: "talent_domain",
    materials_by_weekday: ["All", "Admonition", "Ingenuity", "Praxis"],
  },
  {
    id: "Pale Forgotten Glory",
    name: { en: "Pale Forgotten Glory", "zh-CN": "苍白的遗荣" },
    type: "talent_domain",
    materials_by_weekday: ["All", "Equity", "Justice", "Order"],
  },
  {
    id: "Blazing Ruins",
    name: { en: "Blazing Ruins", "zh-CN": "蕴火的幽墟" },
    type: "talent_domain",
    materials_by_weekday: ["All", "Contention", "Kindling", "Conflict"],
  },
  {
    id: "Cecilia Garden",
    name: { en: ["Cecilia Garden"], "zh-CN": ["塞西莉亚苗圃"] },
    type: "weapon_domain",
    materials_by_weekday: [
      "All",
      "Tile of Decarabian’s Tower",
      "Boreal Wolf’s Milk Tooth",
      "Fetters of the Dandelion Gladiator",
    ],
  },
  {
    id: "Hidden Palace of Lianshan Formula",
    name: {
      en: ["Hidden Palace of Lianshan Formula"],
      "zh-CN": ["震雷连山密宫"],
    },
    type: "weapon_domain",
    materials_by_weekday: [
      "All",
      "Luminous Sands from Guyun",
      "Mist Veiled Lead Elixir",
      "Grain of Aerosiderite",
    ],
  },
  {
    id: "Court of Flowing Sand",
    name: { en: ["Court of Flowing Sand"], "zh-CN": ["砂流之庭"] },
    type: "weapon_domain",
    materials_by_weekday: [
      "All",
      "Coral Branch of a Distant Sea",
      "Narukami’s Wisdom",
      "Mask of the Wicked Lieutenant",
    ],
  },
  {
    id: "Tower of Abject Pride",
    name: { en: ["Tower of Abject Pride"], "zh-CN": ["有顶塔"] },
    type: "weapon_domain",
    materials_by_weekday: [
      "All",
      "Copper Talisman of the Forest Dew",
      "Oasis Garden’s Reminiscence",
      "Echo of Scorching Might",
    ],
  },
  {
    id: "Echoes of the Deep Tides",
    name: { en: "Echoes of the Deep Tides", "zh-CN": "深潮的余响" },
    type: "weapon_domain",
    materials_by_weekday: [
      "All",
      "Fragment of an Ancient Chord",
      "Dross of Pure Sacred Dewdrop",
      "Broken Goblet of the Pristine Sea",
    ],
  },
  {
    id: "Ancient Watchtower",
    name: { en: "Ancient Watchtower", "zh-CN": "深谷瞭望所" },
    type: "weapon_domain",
    materials_by_weekday: [
      "All",
      "Blazing Sacrificial Heart’s Terror",
      "Delirious Decadence of the Sacred Lord",
      "Night-Wind’s Mystic Consideration",
    ],
  },
];

export type Boss = OfMaterial & {
  region: Region;
};

export const bosses: Boss[] = [
  {
    id: "Electro Hypostasis",
    region: "Mondstadt",
    materials: ["Lightning Prism", "Vajrada Amethyst"],
    type: "boss",
    name: { en: ["Electro Hypostasis"], "zh-CN": ["无相之雷"] },
  },
  {
    id: "Anemo Hypostasis",
    region: "Mondstadt",
    materials: ["Hurricane Seed", "Vayuda Turquoise"],
    type: "boss",
    name: { en: ["Anemo Hypostasis"], "zh-CN": ["无相之风"] },
  },
  {
    id: "Cryo Regisvine",
    region: "Mondstadt",
    materials: ["Hoarfrost Core", "Shivada Jade"],
    type: "boss",
    name: { en: ["Cryo Regisvine"], "zh-CN": ["急冻树"] },
  },
  {
    id: "Geo Hypostasis",
    region: "Liyue",
    materials: ["Basalt Pillar", "Prithiva Topaz"],
    type: "boss",
    name: { en: ["Geo Hypostasis"], "zh-CN": ["无相之岩"] },
  },
  {
    id: "Rhodeia of Loch",
    region: "Liyue",
    materials: ["Cleansing Heart", "Varunada Lazurite"],
    type: "boss",
    name: { en: ["Rhodeia of Loch"], "zh-CN": ["纯水精灵"] },
  },
  {
    id: "Pyro Regisvine",
    region: "Liyue",
    materials: ["Everflame Seed", "Agnidus Agate"],
    type: "boss",
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
    type: "boss",
    name: { en: ["Primo Geovishap"], "zh-CN": ["古岩龙蜥"] },
  },
  {
    id: "Cryo Hypostasis",
    region: "Mondstadt",
    materials: ["Crystalline Bloom", "Shivada Jade"],
    type: "boss",
    name: { en: ["Cryo Hypostasis"], "zh-CN": ["无相之冰"] },
  },
  {
    id: "Maguu Kenki",
    region: "Inazuma",
    materials: ["Marionette Core", "Vayuda Turquoise", "Shivada Jade"],
    type: "boss",
    name: { en: ["Maguu Kenki"], "zh-CN": ["魔偶剑鬼"] },
  },
  {
    id: "Pyro Hypostasis",
    region: "Inazuma",
    materials: ["Smoldering Pearl", "Agnidus Agate"],
    type: "boss",
    name: { en: ["Pyro Hypostasis"], "zh-CN": ["无相之火"] },
  },
  {
    id: "Perpetual Mechanical Array",
    region: "Inazuma",
    materials: ["Perpetual Heart", "Prithiva Topaz", "Shivada Jade"],
    type: "boss",
    name: {
      en: ["Perpetual Mechanical Array"],
      "zh-CN": ["恒常机关阵列"],
    },
  },
  {
    id: "Hydro Hypostasis",
    region: "Inazuma",
    materials: ["Dew of Repudiation", "Varunada Lazurite"],
    type: "boss",
    name: { en: ["Hydro Hypostasis"], "zh-CN": ["无相之水"] },
  },
  {
    id: "Thunder Manifestation",
    region: "Inazuma",
    materials: ["Storm Beads", "Vajrada Amethyst"],
    type: "boss",
    name: { en: ["Thunder Manifestation"], "zh-CN": ["雷音权现"] },
  },
  {
    id: "Golden Wolflord",
    region: "Inazuma",
    materials: ["Riftborn Regalia", "Prithiva Topaz"],
    type: "boss",
    name: { en: ["Golden Wolflord"], "zh-CN": ["黄金王兽"] },
  },
  {
    id: "Bathysmal Vishap Herd",
    region: "Inazuma",
    materials: ["Dragonheir’s False Fin", "Shivada Jade", "Vajrada Amethyst"],
    type: "boss",
    name: { en: ["Bathysmal Vishap Herd"], "zh-CN": ["深海龙蜥之群"] },
  },
  {
    id: "Ruin Serpent",
    region: "Liyue",
    materials: ["Runic Fang", "Prithiva Topaz"],
    type: "boss",
    name: { en: ["Ruin Serpent"], "zh-CN": ["遗迹巨蛇"] },
  },
  {
    id: "Electro Regisvine",
    region: "Sumeru",
    materials: ["Thunderclap Fruitcore", "Vajrada Amethyst"],
    type: "boss",
    name: { en: ["Electro Regisvine"], "zh-CN": ["掣电树"] },
  },
  {
    id: "Jadeplume Terrorshroom",
    region: "Sumeru",
    materials: ["Majestic Hooked Beak", "Nagadus Emerald"],
    type: "boss",
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
    type: "boss",
    name: {
      en: ["Algorithm of Semi-Intransient Matrix of Overseer Network"],
      "zh-CN": ["半永恒统辖矩阵"],
    },
  },
  {
    id: "Aeonblight Drake",
    region: "Sumeru",
    materials: ["Perpetual Caliber", "Shivada Jade", "Varunada Lazurite"],
    type: "boss",
    name: { en: ["Aeonblight Drake"], "zh-CN": ["兆载永劫龙兽"] },
  },
  {
    id: "Dendro Hypostasis",
    region: "Sumeru",
    materials: ["Quelled Creeper", "Nagadus Emerald"],
    type: "boss",
    name: { en: ["Dendro Hypostasis"], "zh-CN": ["无相之草"] },
  },
  {
    id: "Setekh Wenut",
    region: "Sumeru",
    materials: ["Pseudo-Stamens", "Vayuda Turquoise"],
    type: "boss",
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
    type: "boss",
    name: { en: "Iniquitous Baptist", "zh-CN": "深罪浸礼者" },
  },
  {
    id: "Emperor of Fire and Iron",
    region: "Fontaine",
    materials: ["Emperor’s Resolution", "Agnidus Agate"],
    type: "boss",
    name: { en: "Emperor of Fire and Iron", "zh-CN": "铁甲熔火帝皇" },
  },
  {
    id: "“Dirge of Coppelia”",
    region: "Fontaine",
    materials: [
      "Artificed Spare Clockwork Component — Coppelia",
      "Vayuda Turquoise",
    ],
    type: "boss",
    name: { en: "“Dirge of Coppelia”", "zh-CN": "「歌裴莉娅的葬送」" },
  },
  {
    id: "“Nemesis of Coppelius”",
    region: "Fontaine",
    materials: [
      "Artificed Spare Clockwork Component — Coppelius",
      "Shivada Jade",
    ],
    type: "boss",
    name: { en: "“Nemesis of Coppelius”", "zh-CN": "「科培琉司的劫罚」" },
  },
  {
    id: "Millennial Pearl Seahorse",
    region: "Fontaine",
    type: "boss",
    name: { en: "Millennial Pearl Seahorse", "zh-CN": "千年珍珠骏麟" },
    materials: ["Fontemer Unihorn", "Vajrada Amethyst"],
  },
  {
    id: "Experimental Field Generator",
    region: "Fontaine",
    type: "boss",
    name: {
      en: "Experimental Field Generator",
      "zh-CN": "实验性场力发生装置",
    },
    materials: ["“Tourbillon Device”", "Prithiva Topaz"],
  },
  {
    id: "Hydro Tulpa",
    region: "Fontaine",
    type: "boss",
    name: { en: "Hydro Tulpa", "zh-CN": "水形幻人" },
    materials: ["Water That Failed To Transcend", "Varunada Lazurite"],
  },
  {
    id: "Solitary Suanni",
    region: "Liyue",
    type: "boss",
    name: { en: "Solitary Suanni", "zh-CN": "隐山猊兽" },
    materials: ["Cloudseam Scale", "Varunada Lazurite", "Vayuda Turquoise"],
  },
  {
    id: "“Statue of Marble and Brass”",
    region: "Fontaine",
    type: "boss",
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
    type: "boss",
    name: { en: "Holawaqa Ngoubou", "zh-CN": "霍拉瓦伽・恩古布" },
    materials: ["Mark of the Binding Blessing", "Agnidus Agate"],
  },
  {
    id: "Kongamato",
    region: "Natlan",
    type: "boss",
    name: { en: "Kongamato", "zh-CN": "康加玛托" },
    materials: ["Overripe Flamegranate", "Nagadus Emerald"],
  },
  {
    id: "Secret Source Automaton: Configuration Device",
    region: "Natlan",
    type: "boss",
    name: {
      en: "Secret Source Automaton: Configuration Device",
      "zh-CN": "秘源机兵・构型械",
    },
    materials: ["Gold-Inscribed Secret Source Core", "Vajrada Amethyst"],
  },
  {
    id: "Tenebrous Papilla",
    region: "Natlan",
    type: "boss",
    name: { en: "Tenebrous Papilla", "zh-CN": "深邃摹结株" },
    materials: ["Ensnaring Gaze", "Agnidus Agate", "Vajrada Amethyst"],
  },
  {
    id: "Wayward Hermetic Spiritspeaker",
    region: "Natlan",
    type: "boss",
    name: { en: "Wayward Hermetic Spiritspeaker", "zh-CN": "灵觉隐修的迷者" },
    materials: ["Talisman of the Enigmatic Land", "Shivada Jade"],
  },
  {
    id: "Lava Dragon Statue",
    region: "Natlan",
    type: "boss",
    name: { en: "Lava Dragon Statue", "zh-CN": "熔岩辉龙像" },
    materials: ["Sparkless Statue Core", "Agnidus Agate"],
  },
  {
    id: "Secret Source Automaton: Overseer Device",
    region: "Natlan",
    type: "boss",
    name: {
      en: "Secret Source Automaton: Overseer Device",
      "zh-CN": "秘源机兵・统御械",
    },
    materials: ["Secret Source Airflow Accumulator", "Varunada Lazurite"],
  },
  //
  // Newline - normal boss
  //

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
    type: "weekly_boss",
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
    type: "weekly_boss",
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
    type: "weekly_boss",
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
    type: "weekly_boss",
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
    type: "weekly_boss",
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
    type: "weekly_boss",
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
    type: "weekly_boss",
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
    type: "weekly_boss",
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
    type: "weekly_boss",
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
    type: "weekly_boss",
    name: {
      en: "Cinder of Two Worlds’ Flames / The Knave",
      "zh-CN": "两界之火的遗烬 / 「仆人」",
    },
  },
  {
    id: "Lord of Eroded Primal Fire",
    region: "Natlan",
    type: "weekly_boss",
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
    type: "weekly_boss",
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
  //
  // Newline - weekly boss
  //
];

export type Enemy = OfMaterial;

export const enemies: Enemy[] = [
  {
    id: "Fatui Skirmisher",
    type: "enemy",
    name: { en: ["Fatui Skirmisher"], "zh-CN": ["愚人众・先遣队"] },
    materials: ["Recruit’s Insignia"],
  },
  {
    id: "Whopperflower",
    type: "enemy",
    name: { en: ["Whopperflower"], "zh-CN": ["骗骗花"] },
    materials: ["Whopperflower Nectar"],
  },
  {
    id: "Hilichurl Shooter",
    type: "enemy",
    name: { en: ["Hilichurl Shooter"], "zh-CN": ["丘丘射手"] },
    materials: ["Damaged Mask", "Firm Arrowhead"],
  },
  {
    id: "Hilichurl",
    type: "enemy",
    name: { en: ["Hilichurl"], "zh-CN": ["丘丘人"] },
    materials: ["Damaged Mask"],
  },
  {
    id: "Samachurl",
    type: "enemy",
    name: { en: ["Samachurl"], "zh-CN": ["丘丘萨满"] },
    materials: ["Damaged Mask", "Divining Scroll"],
  },
  {
    id: "Slime",
    type: "enemy",
    name: { en: ["Slime"], "zh-CN": ["史莱姆"] },
    materials: ["Slime Condensate"],
  },
  {
    id: "Treasure Hoarder",
    type: "enemy",
    name: { en: ["Treasure Hoarder"], "zh-CN": ["盗宝团"] },
    materials: ["Treasure Hoarder Insignia"],
  },
  {
    id: "Nobushi",
    type: "enemy",
    name: { en: ["Nobushi"], "zh-CN": ["野伏众"] },
    materials: ["Old Handguard"],
  },
  {
    id: "Specter",
    type: "enemy",
    name: { en: ["Specter"], "zh-CN": ["飘浮灵"] },
    materials: ["Spectral Husk"],
  },
  {
    id: "The Eremites",
    type: "enemy",
    name: { en: ["The Eremites"], "zh-CN": ["镀金旅团"] },
    materials: ["Faded Red Satin"],
  },
  {
    id: "Fungus",
    type: "enemy",
    name: { en: ["Fungus"], "zh-CN": ["蕈兽"] },
    materials: ["Fungal Spores", "Inactivated Fungal Nucleus"],
  },
  {
    id: "Clockwork Meka",
    type: "enemy",
    name: { en: "Clockwork Meka", "zh-CN": "发条机关" },
    materials: ["Meshing Gear"],
  },
  {
    id: "Fontemer Aberrant",
    type: "enemy",
    name: { en: "Fontemer Aberrant", "zh-CN": "原海异种" },
    materials: ["Transoceanic Pearl"],
  },
  {
    id: "Natlan Saurians",
    type: "enemy",
    name: { en: "Natlan Saurians", "zh-CN": "纳塔龙众" },
    materials: ["Juvenile Fang"],
  },
  {
    id: "Sauroform Tribal Warriors",
    type: "enemy",
    name: { en: "Sauroform Tribal Warriors", "zh-CN": "部族龙形武士" },
    materials: ["Sentry’s Wooden Whistle"],
  },
  //
  // Newline - normal enemy
  //

  {
    id: "Fatui Cicin Mage",
    type: "enemy",
    name: { en: ["Fatui Cicin Mage"], "zh-CN": ["愚人众・萤术士"] },
    materials: ["Recruit’s Insignia", "Mist Grass Pollen"],
  },
  {
    id: "Abyss Mage",
    type: "enemy",
    name: { en: ["Abyss Mage"], "zh-CN": ["深渊法师"] },
    materials: ["Dead Ley Line Branch"],
  },
  {
    id: "Abyss Herald",
    type: "enemy",
    name: { en: ["Abyss Herald"], "zh-CN": ["深渊使徒"] },
    materials: ["Dead Ley Line Branch", "Gloomy Statuette"],
  },
  {
    id: "Abyss Lector",
    type: "enemy",
    name: { en: ["Abyss Lector"], "zh-CN": ["深渊咏者"] },
    materials: ["Dead Ley Line Branch", "Gloomy Statuette"],
  },
  {
    id: "Ruin Guard",
    type: "enemy",
    name: { en: ["Ruin Guard"], "zh-CN": ["遗迹守卫"] },
    materials: ["Chaos Device"],
  },
  {
    id: "Mitachurl",
    type: "enemy",
    name: { en: ["Mitachurl"], "zh-CN": ["丘丘暴徒"] },
    materials: ["Damaged Mask", "Heavy Horn"],
  },
  {
    id: "Fatui Agent",
    type: "enemy",
    name: { en: ["Fatui Agent"], "zh-CN": ["愚人众・债务处理人"] },
    materials: ["Recruit’s Insignia", "Hunter’s Sacrificial Knife"],
  },
  {
    id: "Ruin Hunter",
    type: "enemy",
    name: { en: ["Ruin Hunter"], "zh-CN": ["遗迹猎者"] },
    materials: ["Chaos Device"],
  },
  {
    id: "Geovishap Hatchling",
    type: "enemy",
    name: { en: ["Geovishap Hatchling"], "zh-CN": ["幼岩龙蜥"] },
    materials: ["Fragile Bone Shard"],
  },
  {
    id: "Hilichurl Chieftain",
    type: "enemy",
    name: { en: ["Hilichurl Chieftain"], "zh-CN": ["丘丘王"] },
    materials: ["Damaged Mask", "Heavy Horn"],
  },
  {
    id: "Geovishap",
    type: "enemy",
    name: { en: ["Geovishap"], "zh-CN": ["岩龙蜥"] },
    materials: ["Fragile Bone Shard"],
  },
  {
    id: "Fatui: Snezhnayan Maiden",
    type: "enemy",
    name: {
      en: ["Fatui: Snezhnayan Maiden"],
      "zh-CN": ["愚人众・冬国仕女"],
    },
    materials: ["Dismal Prism"],
  },
  {
    id: "Ruin Sentinels",
    type: "enemy",
    name: { en: ["Ruin Sentinels"], "zh-CN": ["遗迹机兵"] },
    materials: ["Chaos Gear"],
  },
  {
    id: "Wolves of the Rift",
    type: "enemy",
    name: { en: ["Wolves of the Rift"], "zh-CN": ["兽境之狼"] },
    materials: ["Concealed Claw"],
  },
  {
    id: "Bathysmal Vishap",
    type: "enemy",
    name: { en: ["Bathysmal Vishap"], "zh-CN": ["深海龙蜥"] },
    materials: ["Fragile Bone Shard"],
  },
  {
    id: "The Black Serpents",
    type: "enemy",
    name: { en: ["The Black Serpents"], "zh-CN": ["黑蛇众"] },
    materials: ["Gloomy Statuette"],
  },
  {
    id: "Ruin Drake",
    type: "enemy",
    name: { en: ["Ruin Drake"], "zh-CN": ["遗迹龙兽"] },
    materials: ["Chaos Storage"],
  },
  {
    id: "Ruin Grader",
    type: "enemy",
    name: { en: ["Ruin Grader"], "zh-CN": ["遗迹重机"] },
    materials: ["Chaos Device"],
  },
  {
    id: "Primal Construct",
    type: "enemy",
    name: { en: ["Primal Construct"], "zh-CN": ["元能构装体"] },
    materials: ["Damaged Prism"],
  },
  {
    id: "Consecrated Beast",
    type: "enemy",
    name: { en: "Consecrated Beast", "zh-CN": "圣骸兽" },
    materials: ["Desiccated Shell"],
  },
  {
    id: "Hilichurl Rogue",
    type: "enemy",
    name: { en: "Hilichurl Rogue", "zh-CN": ["丘丘游侠"] },
    materials: ["A Flower Yet to Bloom"],
  },
  {
    id: "Tainted Hydro Phantasm",
    type: "enemy",
    name: { en: "Tainted Hydro Phantasm", "zh-CN": "浊水幻灵" },
    materials: ["Drop of Tainted Water"],
  },
  {
    id: "Breacher Primus",
    type: "enemy",
    name: { en: "Breacher Primus", "zh-CN": "隙境原体" },
    materials: ["Rift Core"],
  },
  {
    id: "Fatui Operative",
    type: "enemy",
    name: { en: "Fatui Operative", "zh-CN": "愚人众・役人" },
    materials: ["Old Operative’s Pocket Watch"],
  },
  {
    id: "Xuanwen Beast",
    type: "enemy",
    name: { en: "Xuanwen Beast", "zh-CN": "玄文兽" },
    materials: ["Feathery Fin"],
  },
  {
    id: "Praetorian Golem",
    type: "enemy",
    name: { en: "Praetorian Golem", "zh-CN": "魔像禁卫" },
    materials: ["Ruined Hilt"],
  },
  {
    id: "Wayob Manifestations",
    type: "enemy",
    name: { en: "Wayob Manifestations", "zh-CN": "大灵显化身" },
    materials: ["Shard of a Shattered Will"],
  },
  {
    id: "Avatars of Lava",
    type: "enemy",
    name: { en: "Avatars of Lava", "zh-CN": "熔岩游像" },
    materials: ["Ignited Stone"],
  },
  {
    id: "Secret Source Automation: Hunter-Seeker",
    type: "enemy",
    name: {
      en: "Secret Source Automation: Hunter-Seeker",
      "zh-CN": "秘源机兵・巡捕械",
    },
    materials: ["Axis of the Secret Source"],
  },
  {
    id: "Tenebrous Mimiflora",
    type: "enemy",
    name: { en: "Tenebrous Mimiflora", "zh-CN": "深邃拟覆叶" },
    materials: ["Refractive Bud"],
  },
  {
    id: "Furnace Shell Mountain Weasel",
    type: "enemy",
    name: { en: "Furnace Shell Mountain Weasel", "zh-CN": "炉壳山鼬" },
    materials: ["Cold-Cracked Shellshard"],
  },
  //
  // Newline - elite enemy
  //
];
