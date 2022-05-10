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
