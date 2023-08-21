import { OfMaterial, TYPE_CHARACTER } from "../base";
import {
  CharacterAscension,
  Gem,
  General,
  LocalSpecialities,
  TalentBook,
  TalentMaterial,
} from "./materials";

export type Character = OfMaterial & {
  type: typeof TYPE_CHARACTER;
  rarity: 4 | 5;
  materials?: [
    CharacterAscension,
    Gem,
    TalentMaterial,
    TalentBook,
    General,
    LocalSpecialities
  ];
};

export const characters: Character[] = [
  {
    id: "Albedo",
    type: "character",
    rarity: 5,
    name: { en: ["Albedo"], "zh-CN": ["阿贝多"] },
    materials: [
      "Basalt Pillar",
      "Prithiva Topaz",
      "Tusk of Monoceros Caeli",
      "Ballad",
      "Divining Scroll",
      "Cecilia",
    ],
  },
  {
    id: "Alhaitham",
    type: "character",
    rarity: 5,
    name: { en: "Alhaitham", "zh-CN": "艾尔海森" },
    materials: [
      "Pseudo-Stamens",
      "Nagadus Emerald",
      "Mirror of Mushin",
      "Ingenuity",
      "Faded Red Satin",
      "Sand Grease Pupa",
    ],
  },
  {
    id: "Aloy",
    type: "character",
    rarity: 5,
    name: { en: ["Aloy"], "zh-CN": ["埃洛伊"] },
    materials: [
      "Crystalline Bloom",
      "Shivada Jade",
      "Molten Moment",
      "Freedom",
      "Spectral Husk",
      "Crystal Marrow",
    ],
  },
  {
    id: "Amber",
    type: "character",
    rarity: 4,
    name: { en: ["Amber"], "zh-CN": ["安柏"] },
    materials: [
      "Everflame Seed",
      "Agnidus Agate",
      "Dvalin’s Sigh",
      "Freedom",
      "Firm Arrowhead",
      "Small Lamp Grass",
    ],
  },
  {
    id: "Arataki Itto",
    type: "character",
    rarity: 5,
    name: { en: ["Arataki Itto"], "zh-CN": ["荒泷一斗"] },
    materials: [
      "Riftborn Regalia",
      "Prithiva Topaz",
      "Ashen Heart",
      "Elegance",
      "Slime Condensate",
      "Onikabuto",
    ],
  },
  {
    id: "Baizhu",
    type: "character",
    rarity: 5,
    name: { en: "Baizhu", "zh-CN": "白术" },
    materials: [
      "Evergloom Ring",
      "Nagadus Emerald",
      "Worldspan Fern",
      "Gold",
      "Fungal Spores",
      "Violetgrass",
    ],
  },
  {
    id: "Barbara",
    type: "character",
    rarity: 4,
    name: { en: ["Barbara"], "zh-CN": ["芭芭拉"] },
    materials: [
      "Cleansing Heart",
      "Varunada Lazurite",
      "Ring of Boreas",
      "Freedom",
      "Divining Scroll",
      "Philanemo Mushroom",
    ],
  },
  {
    id: "Beidou",
    type: "character",
    rarity: 4,
    name: { en: ["Beidou"], "zh-CN": ["北斗"] },
    materials: [
      "Lightning Prism",
      "Vajrada Amethyst",
      "Dvalin’s Sigh",
      "Gold",
      "Treasure Hoarder Insignia",
      "Noctilucous Jade",
    ],
  },
  {
    id: "Bennett",
    type: "character",
    rarity: 4,
    name: { en: ["Bennett"], "zh-CN": ["班尼特"] },
    materials: [
      "Everflame Seed",
      "Agnidus Agate",
      "Dvalin’s Plume",
      "Resistance",
      "Treasure Hoarder Insignia",
      "Windwheel Aster",
    ],
  },
  {
    id: "Candace",
    type: "character",
    rarity: 4,
    name: { en: ["Candace"], "zh-CN": ["坎蒂丝"] },
    materials: [
      "Light Guiding Tetrahedron",
      "Varunada Lazurite",
      "Tears of the Calamitous God",
      "Admonition",
      "Faded Red Satin",
      "Henna Berry",
    ],
  },
  {
    id: "Chongyun",
    type: "character",
    rarity: 4,
    name: { en: ["Chongyun"], "zh-CN": ["重云"] },
    materials: [
      "Hoarfrost Core",
      "Shivada Jade",
      "Dvalin’s Sigh",
      "Diligence",
      "Damaged Mask",
      "Cor Lapis",
    ],
  },
  {
    id: "Collei",
    type: "character",
    rarity: 4,
    name: { en: ["Collei"], "zh-CN": ["柯莱"] },
    materials: [
      "Majestic Hooked Beak",
      "Nagadus Emerald",
      "Tears of the Calamitous God",
      "Praxis",
      "Firm Arrowhead",
      "Rukkhashava Mushrooms",
    ],
  },
  {
    id: "Cyno",
    type: "character",
    rarity: 5,
    name: { en: ["Cyno"], "zh-CN": ["塞诺"] },
    materials: [
      "Thunderclap Fruitcore",
      "Vajrada Amethyst",
      "Mudra of the Malefic General",
      "Admonition",
      "Divining Scroll",
      "Scarab",
    ],
  },
  {
    id: "Dehya",
    type: "character",
    rarity: 5,
    name: { en: "Dehya", "zh-CN": "迪希雅" },
    materials: [
      "Light Guiding Tetrahedron",
      "Agnidus Agate",
      "Puppet Strings",
      "Praxis",
      "Faded Red Satin",
      "Sand Grease Pupa",
    ],
  },
  {
    id: "Diluc",
    type: "character",
    rarity: 5,
    name: { en: ["Diluc"], "zh-CN": ["迪卢克"] },
    materials: [
      "Everflame Seed",
      "Agnidus Agate",
      "Dvalin’s Plume",
      "Resistance",
      "Recruit’s Insignia",
      "Small Lamp Grass",
    ],
  },
  {
    id: "Diona",
    type: "character",
    rarity: 4,
    name: { en: ["Diona"], "zh-CN": ["迪奥娜"] },
    materials: [
      "Hoarfrost Core",
      "Shivada Jade",
      "Shard of a Foul Legacy",
      "Freedom",
      "Firm Arrowhead",
      "Calla Lily",
    ],
  },
  {
    id: "Dori",
    type: "character",
    rarity: 4,
    name: { en: ["Dori"], "zh-CN": ["多莉"] },
    materials: [
      "Thunderclap Fruitcore",
      "Vajrada Amethyst",
      "Bloodjade Branch",
      "Ingenuity",
      "Faded Red Satin",
      "Kalpalata Lotus",
    ],
  },
  {
    id: "Eula",
    type: "character",
    rarity: 5,
    name: { en: ["Eula"], "zh-CN": ["优菈"] },
    materials: [
      "Crystalline Bloom",
      "Shivada Jade",
      "Dragon Lord’s Crown",
      "Resistance",
      "Damaged Mask",
      "Dandelion Seed",
    ],
  },
  {
    id: "Faruzan",
    type: "character",
    rarity: 4,
    name: { en: "Faruzan", "zh-CN": "珐露珊" },
    materials: [
      "Light Guiding Tetrahedron",
      "Vayuda Turquoise",
      "Puppet Strings",
      "Admonition",
      "Faded Red Satin",
      "Henna Berry",
    ],
  },
  {
    id: "Fischl",
    type: "character",
    rarity: 4,
    name: { en: ["Fischl"], "zh-CN": ["菲谢尔"] },
    materials: [
      "Lightning Prism",
      "Vajrada Amethyst",
      "Spirit Locket of Boreas",
      "Ballad",
      "Firm Arrowhead",
      "Small Lamp Grass",
    ],
  },
  {
    id: "Freminet",
    type: "character",
    rarity: 4,
    name: { en: "Freminet", "zh-CN": "菲米尼" },
  },
  {
    id: "Ganyu",
    type: "character",
    rarity: 5,
    name: { en: ["Ganyu"], "zh-CN": ["甘雨"] },
    materials: [
      "Hoarfrost Core",
      "Shivada Jade",
      "Shadow of the Warrior",
      "Diligence",
      "Whopperflower Nectar",
      "Qingxin",
    ],
  },
  {
    id: "Gorou",
    type: "character",
    rarity: 4,
    name: { en: ["Gorou"], "zh-CN": ["五郎"] },
    materials: [
      "Perpetual Heart",
      "Prithiva Topaz",
      "Molten Moment",
      "Light",
      "Spectral Husk",
      "Sango Pearl",
    ],
  },
  {
    id: "Hu Tao",
    type: "character",
    rarity: 5,
    name: { en: ["Hu Tao"], "zh-CN": ["胡桃"] },
    materials: [
      "Juvenile Jade",
      "Agnidus Agate",
      "Shard of a Foul Legacy",
      "Diligence",
      "Whopperflower Nectar",
      "Silk Flower",
    ],
  },
  {
    id: "Jean",
    type: "character",
    rarity: 5,
    name: { en: ["Jean"], "zh-CN": ["琴"] },
    materials: [
      "Hurricane Seed",
      "Vayuda Turquoise",
      "Dvalin’s Plume",
      "Resistance",
      "Damaged Mask",
      "Dandelion Seed",
    ],
  },
  {
    id: "Kaedehara Kazuha",
    type: "character",
    rarity: 5,
    name: { en: ["Kaedehara Kazuha"], "zh-CN": ["枫原万叶"] },
    materials: [
      "Marionette Core",
      "Vayuda Turquoise",
      "Gilded Scale",
      "Diligence",
      "Treasure Hoarder Insignia",
      "Sea Ganoderma",
    ],
  },
  {
    id: "Kaeya",
    type: "character",
    rarity: 4,
    name: { en: ["Kaeya"], "zh-CN": ["凯亚"] },
    materials: [
      "Hoarfrost Core",
      "Shivada Jade",
      "Spirit Locket of Boreas",
      "Ballad",
      "Treasure Hoarder Insignia",
      "Calla Lily",
    ],
  },
  {
    id: "Kamisato Ayaka",
    type: "character",
    rarity: 5,
    name: { en: ["Kamisato Ayaka"], "zh-CN": ["神里绫华"] },
    materials: [
      "Perpetual Heart",
      "Shivada Jade",
      "Bloodjade Branch",
      "Elegance",
      "Old Handguard",
      "Sakura Bloom",
    ],
  },
  {
    id: "Kamisato Ayato",
    type: "character",
    rarity: 5,
    name: { en: ["Kamisato Ayato"], "zh-CN": ["神里绫人"] },
    materials: [
      "Dew of Repudiation",
      "Varunada Lazurite",
      "Mudra of the Malefic General",
      "Elegance",
      "Old Handguard",
      "Sakura Bloom",
    ],
  },
  {
    id: "Kaveh",
    type: "character",
    rarity: 4,
    name: { en: "Kaveh", "zh-CN": "卡维" },
    materials: [
      "Quelled Creeper",
      "Nagadus Emerald",
      "Primordial Greenbloom",
      "Ingenuity",
      "Fungal Spores",
      "Mourning Flower",
    ],
  },
  {
    id: "Keqing",
    type: "character",
    rarity: 5,
    name: { en: ["Keqing"], "zh-CN": ["刻晴"] },
    materials: [
      "Lightning Prism",
      "Vajrada Amethyst",
      "Ring of Boreas",
      "Prosperity",
      "Whopperflower Nectar",
      "Cor Lapis",
    ],
  },
  {
    id: "Kirara",
    type: "character",
    rarity: 4,
    name: { en: ["Kirara"], "zh-CN": ["绮良良"] },
    materials: [
      "Evergloom Ring",
      "Nagadus Emerald",
      "Everamber",
      "Transience",
      "Spectral Husk",
      "Amakumo Fruit",
    ],
  },
  {
    id: "Klee",
    type: "character",
    rarity: 5,
    name: { en: ["Klee"], "zh-CN": ["可莉"] },
    materials: [
      "Everflame Seed",
      "Agnidus Agate",
      "Ring of Boreas",
      "Freedom",
      "Divining Scroll",
      "Philanemo Mushroom",
    ],
  },
  {
    id: "Kujou Sara",
    type: "character",
    rarity: 4,
    name: { en: ["Kujou Sara"], "zh-CN": ["九条裟罗"] },
    materials: [
      "Storm Beads",
      "Vajrada Amethyst",
      "Ashen Heart",
      "Elegance",
      "Damaged Mask",
      "Dendrobium",
    ],
  },
  {
    id: "Kuki Shinobu",
    type: "character",
    rarity: 4,
    name: { en: ["Kuki Shinobu"], "zh-CN": ["久岐忍"] },
    materials: [
      "Runic Fang",
      "Vajrada Amethyst",
      "Tears of the Calamitous God",
      "Elegance",
      "Spectral Husk",
      "Naku Weed",
    ],
  },
  {
    id: "Layla",
    type: "character",
    rarity: 4,
    name: { en: ["Layla"], "zh-CN": ["莱依拉"] },
    materials: [
      "Perpetual Caliber",
      "Shivada Jade",
      "Mirror of Mushin",
      "Ingenuity",
      "Divining Scroll",
      "Nilotpala Lotus",
    ],
  },
  {
    id: "Lisa",
    type: "character",
    rarity: 4,
    name: { en: ["Lisa"], "zh-CN": ["丽莎"] },
    materials: [
      "Lightning Prism",
      "Vajrada Amethyst",
      "Dvalin’s Claw",
      "Ballad",
      "Slime Condensate",
      "Valberry",
    ],
  },
  {
    id: "Lynette",
    type: "character",
    rarity: 4,
    name: { en: "Lynette", "zh-CN": "琳妮特" },
    materials: [
      "Artificed Spare Clockwork Component — Coppelia",
      "Vayuda Turquoise",
      "Everamber",
      "Order",
      "Meshing Gear",
      "Lumidouce Bell",
    ],
  },
  {
    id: "Lyney",
    type: "character",
    rarity: 5,
    name: { en: "Lyney", "zh-CN": "林尼" },
    materials: [
      "Emperor’s Resolution",
      "Agnidus Agate",
      "Primordial Greenbloom",
      "Equity",
      "Recruit’s Insignia",
      "Rainbow Rose",
    ],
  },
  {
    id: "Mika",
    type: "character",
    rarity: 4,
    name: { en: "Mika", "zh-CN": "米卡" },
    materials: [
      "Pseudo-Stamens",
      "Shivada Jade",
      "Mirror of Mushin",
      "Ballad",
      "Recruit’s Insignia",
      "Wolfhook",
    ],
  },
  {
    id: "Mona",
    type: "character",
    rarity: 5,
    name: { en: ["Mona"], "zh-CN": ["莫娜"] },
    materials: [
      "Cleansing Heart",
      "Varunada Lazurite",
      "Ring of Boreas",
      "Resistance",
      "Whopperflower Nectar",
      "Philanemo Mushroom",
    ],
  },
  {
    id: "Nahida",
    type: "character",
    rarity: 5,
    name: { en: ["Nahida"], "zh-CN": ["纳西妲"] },
    materials: [
      "Quelled Creeper",
      "Nagadus Emerald",
      "Puppet Strings",
      "Ingenuity",
      "Fungal Spores",
      "Kalpalata Lotus",
    ],
  },
  {
    id: "Nilou",
    type: "character",
    rarity: 5,
    name: { en: ["Nilou"], "zh-CN": ["妮露"] },
    materials: [
      "Perpetual Caliber",
      "Varunada Lazurite",
      "Tears of the Calamitous God",
      "Praxis",
      "Fungal Spores",
      "Padisarah",
    ],
  },
  {
    id: "Ningguang",
    type: "character",
    rarity: 4,
    name: { en: ["Ningguang"], "zh-CN": ["凝光"] },
    materials: [
      "Basalt Pillar",
      "Prithiva Topaz",
      "Spirit Locket of Boreas",
      "Prosperity",
      "Recruit’s Insignia",
      "Glaze Lily",
    ],
  },
  {
    id: "Noelle",
    type: "character",
    rarity: 4,
    name: { en: ["Noelle"], "zh-CN": ["诺艾尔"] },
    materials: [
      "Basalt Pillar",
      "Prithiva Topaz",
      "Dvalin’s Claw",
      "Resistance",
      "Damaged Mask",
      "Valberry",
    ],
  },
  {
    id: "Qiqi",
    type: "character",
    rarity: 5,
    name: { en: ["Qiqi"], "zh-CN": ["七七"] },
    materials: [
      "Hoarfrost Core",
      "Shivada Jade",
      "Tail of Boreas",
      "Prosperity",
      "Divining Scroll",
      "Violetgrass",
    ],
  },
  {
    id: "Raiden Shogun",
    type: "character",
    rarity: 5,
    name: { en: ["Raiden Shogun"], "zh-CN": ["雷电将军"] },
    materials: [
      "Storm Beads",
      "Vajrada Amethyst",
      "Molten Moment",
      "Light",
      "Old Handguard",
      "Amakumo Fruit",
    ],
  },
  {
    id: "Razor",
    type: "character",
    rarity: 4,
    name: { en: ["Razor"], "zh-CN": ["雷泽"] },
    materials: [
      "Lightning Prism",
      "Vajrada Amethyst",
      "Dvalin’s Claw",
      "Resistance",
      "Damaged Mask",
      "Wolfhook",
    ],
  },
  {
    id: "Rosaria",
    type: "character",
    rarity: 4,
    name: { en: ["Rosaria"], "zh-CN": ["罗莎莉亚"] },
    materials: [
      "Hoarfrost Core",
      "Shivada Jade",
      "Shadow of the Warrior",
      "Ballad",
      "Recruit’s Insignia",
      "Valberry",
    ],
  },
  {
    id: "Sangonomiya Kokomi",
    type: "character",
    rarity: 5,
    name: { en: ["Sangonomiya Kokomi"], "zh-CN": ["珊瑚宫心海"] },
    materials: [
      "Dew of Repudiation",
      "Varunada Lazurite",
      "Hellfire Butterfly",
      "Transience",
      "Spectral Husk",
      "Sango Pearl",
    ],
  },
  {
    id: "Sayu",
    type: "character",
    rarity: 4,
    name: { en: ["Sayu"], "zh-CN": ["早柚"] },
    materials: [
      "Marionette Core",
      "Vayuda Turquoise",
      "Gilded Scale",
      "Light",
      "Whopperflower Nectar",
      "Crystal Marrow",
    ],
  },
  {
    id: "Shenhe",
    type: "character",
    rarity: 5,
    name: { en: ["Shenhe"], "zh-CN": ["申鹤"] },
    materials: [
      "Dragonheir’s False Fin",
      "Shivada Jade",
      "Hellfire Butterfly",
      "Prosperity",
      "Whopperflower Nectar",
      "Qingxin",
    ],
  },
  {
    id: "Shikanoin Heizou",
    type: "character",
    rarity: 4,
    name: { en: ["Shikanoin Heizou"], "zh-CN": ["鹿野院平藏"] },
    materials: [
      "Runic Fang",
      "Vayuda Turquoise",
      "The Meaning of Aeons",
      "Transience",
      "Treasure Hoarder Insignia",
      "Onikabuto",
    ],
  },
  {
    id: "Sucrose",
    type: "character",
    rarity: 4,
    name: { en: ["Sucrose"], "zh-CN": ["砂糖"] },
    materials: [
      "Hurricane Seed",
      "Vayuda Turquoise",
      "Spirit Locket of Boreas",
      "Freedom",
      "Whopperflower Nectar",
      "Windwheel Aster",
    ],
  },
  {
    id: "Tartaglia",
    type: "character",
    rarity: 5,
    name: { en: ["Tartaglia"], "zh-CN": ["达达利亚"] },
    materials: [
      "Cleansing Heart",
      "Varunada Lazurite",
      "Shard of a Foul Legacy",
      "Freedom",
      "Recruit’s Insignia",
      "Starconch",
    ],
  },
  {
    id: "Thoma",
    type: "character",
    rarity: 4,
    name: { en: ["Thoma"], "zh-CN": ["托马"] },
    materials: [
      "Smoldering Pearl",
      "Agnidus Agate",
      "Hellfire Butterfly",
      "Transience",
      "Treasure Hoarder Insignia",
      "Fluorescent Fungus",
    ],
  },
  {
    id: "Tighnari",
    type: "character",
    rarity: 5,
    name: { en: ["Tighnari"], "zh-CN": ["提纳里"] },
    materials: [
      "Majestic Hooked Beak",
      "Nagadus Emerald",
      "The Meaning of Aeons",
      "Admonition",
      "Fungal Spores",
      "Nilotpala Lotus",
    ],
  },
  {
    id: "Venti",
    type: "character",
    rarity: 5,
    name: { en: ["Venti"], "zh-CN": ["温迪"] },
    materials: [
      "Hurricane Seed",
      "Vayuda Turquoise",
      "Tail of Boreas",
      "Ballad",
      "Slime Condensate",
      "Cecilia",
    ],
  },
  {
    id: "Wanderer",
    type: "character",
    rarity: 5,
    name: { en: "Wanderer", "zh-CN": "流浪者" },
    materials: [
      "Perpetual Caliber",
      "Vayuda Turquoise",
      "Daka’s Bell",
      "Praxis",
      "Old Handguard",
      "Rukkhashava Mushrooms",
    ],
  },
  {
    id: "Xiangling",
    type: "character",
    rarity: 4,
    name: { en: ["Xiangling"], "zh-CN": ["香菱"] },
    materials: [
      "Everflame Seed",
      "Agnidus Agate",
      "Dvalin’s Claw",
      "Diligence",
      "Slime Condensate",
      "Jueyun Chili",
    ],
  },
  {
    id: "Xiao",
    type: "character",
    rarity: 5,
    name: { en: ["Xiao"], "zh-CN": ["魈"] },
    materials: [
      "Juvenile Jade",
      "Vayuda Turquoise",
      "Shadow of the Warrior",
      "Prosperity",
      "Slime Condensate",
      "Qingxin",
    ],
  },
  {
    id: "Xingqiu",
    type: "character",
    rarity: 4,
    name: { en: ["Xingqiu"], "zh-CN": ["行秋"] },
    materials: [
      "Cleansing Heart",
      "Varunada Lazurite",
      "Tail of Boreas",
      "Gold",
      "Damaged Mask",
      "Silk Flower",
    ],
  },
  {
    id: "Xinyan",
    type: "character",
    rarity: 4,
    name: { en: ["Xinyan"], "zh-CN": ["辛焱"] },
    materials: [
      "Everflame Seed",
      "Agnidus Agate",
      "Tusk of Monoceros Caeli",
      "Gold",
      "Treasure Hoarder Insignia",
      "Violetgrass",
    ],
  },
  {
    id: "Yae Miko",
    type: "character",
    rarity: 5,
    name: { en: ["Yae Miko"], "zh-CN": ["八重神子"] },
    materials: [
      "Dragonheir’s False Fin",
      "Vajrada Amethyst",
      "The Meaning of Aeons",
      "Light",
      "Old Handguard",
      "Sea Ganoderma",
    ],
  },
  {
    id: "Yanfei",
    type: "character",
    rarity: 4,
    name: { en: ["Yanfei"], "zh-CN": ["烟绯"] },
    materials: [
      "Juvenile Jade",
      "Agnidus Agate",
      "Bloodjade Branch",
      "Gold",
      "Treasure Hoarder Insignia",
      "Noctilucous Jade",
    ],
  },
  {
    id: "Yaoyao",
    type: "character",
    rarity: 4,
    name: { en: "Yaoyao", "zh-CN": "瑶瑶" },
    materials: [
      "Quelled Creeper",
      "Nagadus Emerald",
      "Daka’s Bell",
      "Diligence",
      "Slime Condensate",
      "Jueyun Chili",
    ],
  },
  {
    id: "Yelan",
    type: "character",
    rarity: 5,
    name: { en: ["Yelan"], "zh-CN": ["夜兰"] },
    materials: [
      "Runic Fang",
      "Varunada Lazurite",
      "Gilded Scale",
      "Prosperity",
      "Recruit’s Insignia",
      "Starconch",
    ],
  },
  {
    id: "Yoimiya",
    type: "character",
    rarity: 5,
    name: { en: ["Yoimiya"], "zh-CN": ["宵宫"] },
    materials: [
      "Smoldering Pearl",
      "Agnidus Agate",
      "Dragon Lord’s Crown",
      "Transience",
      "Divining Scroll",
      "Naku Weed",
    ],
  },
  {
    id: "Yun Jin",
    type: "character",
    rarity: 4,
    name: { en: ["Yun Jin"], "zh-CN": ["云堇"] },
    materials: [
      "Riftborn Regalia",
      "Prithiva Topaz",
      "Ashen Heart",
      "Diligence",
      "Damaged Mask",
      "Glaze Lily",
    ],
  },
  {
    id: "Zhongli",
    type: "character",
    rarity: 5,
    name: { en: ["Zhongli"], "zh-CN": ["钟离"] },
    materials: [
      "Basalt Pillar",
      "Prithiva Topaz",
      "Tusk of Monoceros Caeli",
      "Gold",
      "Slime Condensate",
      "Cor Lapis",
    ],
  },
];