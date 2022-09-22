declare module "enemies";

import * as Materials from "./materials";
import * as Types from "./types";

export interface Domain {
  id: string;
  name: Types.I18nObject;
  type: Types.ItemType; // only talent_type and weapon_type
  materials_by_weekday: string[];
}

export interface Boss {
  id: string;
  region: Types.Region;
  type: Types.ItemType;
  name: Types.I18nObject;
  materials: string[];
}

export interface Enemy {
  id: string;
  type: Types.ItemType;
  name: Types.I18nObject;
  materials: string[];
}

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
    name: { en: ["Hidden Palace of Lianshan Formula"], "zh-CN": ["震雷连山密宫"] },
    type: "weapon_domain",
    materials_by_weekday: ["All", "Luminous Sands from Guyun", "Mist Veiled Lead Elixir", "Grain of Aerosiderite"],
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
];

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
    name: { en: ["Perpetual Mechanical Array"], "zh-CN": ["恒常机关阵列"] },
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

  // weekly bosses
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
      ...Materials.billets,
    ],
    type: "weekly_boss",
    name: { en: ["Confront Stormterror / Dvalin"], "zh-CN": ["深入风龙废墟 / 风魔龙・特瓦林"] },
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
      ...Materials.billets,
    ],
    type: "weekly_boss",
    name: { en: ["Wolf of the North Challenge / Andrius"], "zh-CN": ["北风的王狼 / 安德留斯"] },
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
      ...Materials.billets,
    ],
    type: "weekly_boss",
    name: { en: ["Enter the Golden House / Childe"], "zh-CN": ["进入「黄金屋」 / 公子"] },
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
      ...Materials.billets,
    ],
    type: "weekly_boss",
    name: { en: ["Beneath the Dragon-Queller / Azhdaha"], "zh-CN": ["「伏龙树」之底 / 若陀龙王"] },
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
      ...Materials.billets,
    ],
    type: "weekly_boss",
    name: { en: ["Narukami Island: Tenshukaku / La Signora"], "zh-CN": ["鸣神岛・天守 / 女士"] },
  },
  {
    id: "End of the Oneiric Euthymia",
    region: "Inazuma",
    materials: [
      "Mudra of the Malefic General",
      "Tears of the Calamitous God",
      "The Meaning of Aeons",
      "Vajrada Amethyst",
      ...Materials.billets,
    ],
    type: "weekly_boss",
    name: {
      en: ["End of the Oneiric Euthymia / Magatsu Mitake Narukami no Mikoto"],
      "zh-CN": ["梦想乐土之殁 / 祸津御建鸣神命"],
    },
  },
];

export const enemies: Enemy[] = [
  // normal
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
  { id: "Hilichurl", type: "enemy", name: { en: ["Hilichurl"], "zh-CN": ["丘丘人"] }, materials: ["Damaged Mask"] },
  {
    id: "Samachurl",
    type: "enemy",
    name: { en: ["Samachurl"], "zh-CN": ["丘丘萨满"] },
    materials: ["Damaged Mask", "Divining Scroll"],
  },
  { id: "Slime", type: "enemy", name: { en: ["Slime"], "zh-CN": ["史莱姆"] }, materials: ["Slime Condensate"] },
  {
    id: "Treasure Hoarder",
    type: "enemy",
    name: { en: ["Treasure Hoarder"], "zh-CN": ["盗宝团"] },
    materials: ["Treasure Hoarder Insignia"],
  },
  { id: "Nobushi", type: "enemy", name: { en: ["Nobushi"], "zh-CN": ["野伏众"] }, materials: ["Old Handguard"] },
  { id: "Specter", type: "enemy", name: { en: ["Specter"], "zh-CN": ["飘浮灵"] }, materials: ["Spectral Husk"] },
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

  // elites
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
  { id: "Ruin Guard", type: "enemy", name: { en: ["Ruin Guard"], "zh-CN": ["遗迹守卫"] }, materials: ["Chaos Device"] },
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
    name: { en: ["Fatui: Snezhnayan Maiden"], "zh-CN": ["愚人众・冬国仕女"] },
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
];
