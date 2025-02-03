import type { OfMaterial, TYPE_CHARACTER } from "../base";
import type {
  CharacterAscension,
  Common,
  Gem,
  LocalSpeciality,
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
    Common,
    LocalSpeciality
  ];
};

export type CharacterId =
  | "Albedo"
  | "Alhaitham"
  | "Aloy"
  | "Amber"
  | "Arataki Itto"
  | "Arlecchino"
  | "Baizhu"
  | "Barbara"
  | "Beidou"
  | "Bennett"
  | "Candace"
  | "Charlotte"
  | "Chasca"
  | "Chevreuse"
  | "Chiori"
  | "Chongyun"
  | "Citlali"
  | "Clorinde"
  | "Collei"
  | "Cyno"
  | "Dehya"
  | "Diluc"
  | "Diona"
  | "Dori"
  | "Emilie"
  | "Eula"
  | "Faruzan"
  | "Fischl"
  | "Freminet"
  | "Furina"
  | "Gaming"
  | "Ganyu"
  | "Gorou"
  | "Hu Tao"
  | "Jean"
  | "Kachina"
  | "Kaedehara Kazuha"
  | "Kaeya"
  | "Kamisato Ayaka"
  | "Kamisato Ayato"
  | "Kaveh"
  | "Keqing"
  | "Kinich"
  | "Kirara"
  | "Klee"
  | "Kujou Sara"
  | "Kuki Shinobu"
  | "Lan Yan"
  | "Layla"
  | "Lisa"
  | "Lynette"
  | "Lyney"
  | "Mavuika"
  | "Mika"
  | "Mona"
  | "Mualani"
  | "Nahida"
  | "Navia"
  | "Neuvillette"
  | "Nilou"
  | "Ningguang"
  | "Noelle"
  | "Ororon"
  | "Qiqi"
  | "Raiden Shogun"
  | "Razor"
  | "Rosaria"
  | "Sangonomiya Kokomi"
  | "Sayu"
  | "Sethos"
  | "Shenhe"
  | "Shikanoin Heizou"
  | "Sigewinne"
  | "Sucrose"
  | "Tartaglia"
  | "Thoma"
  | "Tighnari"
  | "Venti"
  | "Wanderer"
  | "Wriothesley"
  | "Xiangling"
  | "Xianyun"
  | "Xiao"
  | "Xilonen"
  | "Xingqiu"
  | "Xinyan"
  | "Yae Miko"
  | "Yanfei"
  | "Yaoyao"
  | "Yelan"
  | "Yoimiya"
  | "Yumemizuki Mizuki"
  | "Yun Jin"
  | "Zhongli";

export const characters: Record<CharacterId, Character> = {
  Albedo: {
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
  Alhaitham: {
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
  Aloy: {
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
  Amber: {
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
  "Arataki Itto": {
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
  Arlecchino: {
    id: "Arlecchino",
    type: "character",
    rarity: 5,
    name: { en: "Arlecchino", "zh-CN": "阿蕾奇诺" },
    materials: [
      "Fragment of a Golden Melody",
      "Agnidus Agate",
      "Fading Candle",
      "Order",
      "Recruit’s Insignia",
      "Rainbow Rose",
    ],
  },
  Baizhu: {
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
  Barbara: {
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
  Beidou: {
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
  Bennett: {
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
  Candace: {
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
  Charlotte: {
    id: "Charlotte",
    type: "character",
    rarity: 4,
    name: { en: "Charlotte", "zh-CN": "夏洛蒂" },
    materials: [
      "“Tourbillon Device”",
      "Shivada Jade",
      "Lightless Silk String",
      "Justice",
      "Meshing Gear",
      "Beryl Conch",
    ],
  },
  Chasca: {
    id: "Chasca",
    type: "character",
    rarity: 5,
    name: { en: "Chasca", "zh-CN": "恰斯卡" },
    materials: [
      "Ensnaring Gaze",
      "Vayuda Turquoise",
      "Silken Feather",
      "Conflict",
      "Juvenile Fang",
      "Withering Purpurbloom",
    ],
  },
  Chevreuse: {
    id: "Chevreuse",
    type: "character",
    rarity: 4,
    name: { en: "Chevreuse", "zh-CN": "夏沃蕾" },
    materials: [
      "Fontemer Unihorn",
      "Agnidus Agate",
      "Lightless Eye of the Maelstrom",
      "Order",
      "Meshing Gear",
      "Lumidouce Bell",
    ],
  },
  Chiori: {
    id: "Chiori",
    type: "character",
    rarity: 5,
    name: { en: "Chiori", "zh-CN": "千织" },
    materials: [
      "Artificed Spare Clockwork Component — Coppelia",
      "Prithiva Topaz",
      "Lightless Silk String",
      "Light",
      "Spectral Husk",
      "Dendrobium",
    ],
  },
  Chongyun: {
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
  Citlali: {
    id: "Citlali",
    type: "character",
    rarity: 5,
    name: { en: "Citlali", "zh-CN": "茜特菈莉" },
    materials: [
      "Talisman of the Enigmatic Land",
      "Shivada Jade",
      "Denial and Judgment",
      "Kindling",
      "Juvenile Fang",
      "Quenepa Berry",
    ],
  },
  Clorinde: {
    id: "Clorinde",
    type: "character",
    rarity: 5,
    name: { en: "Clorinde", "zh-CN": "克洛琳德" },
    materials: [
      "Fontemer Unihorn",
      "Vajrada Amethyst",
      "Everamber",
      "Justice",
      "Transoceanic Pearl",
      "Lumitoile",
    ],
  },
  Collei: {
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
  Cyno: {
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
  Dehya: {
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
  Diluc: {
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
  Diona: {
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
  Dori: {
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
  Emilie: {
    id: "Emilie",
    type: "character",
    rarity: 5,
    name: { en: "Emilie", "zh-CN": "艾梅莉埃" },
    materials: [
      "Fragment of a Golden Melody",
      "Nagadus Emerald",
      "Silken Feather",
      "Order",
      "Meshing Gear",
      "Lakelight Lily",
    ],
  },
  Eula: {
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
  Faruzan: {
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
  Fischl: {
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
  Freminet: {
    id: "Freminet",
    type: "character",
    rarity: 4,
    name: { en: "Freminet", "zh-CN": "菲米尼" },
    materials: [
      "Artificed Spare Clockwork Component — Coppelius",
      "Shivada Jade",
      "Worldspan Fern",
      "Justice",
      "Transoceanic Pearl",
      "Romaritime Flower",
    ],
  },
  Furina: {
    id: "Furina",
    type: "character",
    rarity: 5,
    name: { en: "Furina", "zh-CN": "芙宁娜" },
    materials: [
      "Water That Failed To Transcend",
      "Varunada Lazurite",
      "Lightless Mass",
      "Justice",
      "Whopperflower Nectar",
      "Lakelight Lily",
    ],
  },
  Gaming: {
    id: "Gaming",
    type: "character",
    rarity: 4,
    name: { en: "Gaming", "zh-CN": "嘉明" },
    materials: [
      "Emperor’s Resolution",
      "Agnidus Agate",
      "Lightless Mass",
      "Prosperity",
      "Slime Condensate",
      "Starconch",
    ],
  },
  Ganyu: {
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
  Gorou: {
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
  "Hu Tao": {
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
  Jean: {
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
  Kachina: {
    id: "Kachina",
    type: "character",
    rarity: 4,
    name: { en: "Kachina", "zh-CN": "卡齐娜" },
    materials: [
      "Overripe Flamegranate",
      "Prithiva Topaz",
      "Fading Candle",
      "Conflict",
      "Sentry’s Wooden Whistle",
      "Quenepa Berry",
    ],
  },
  "Kaedehara Kazuha": {
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
  Kaeya: {
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
  "Kamisato Ayaka": {
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
  "Kamisato Ayato": {
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
  Kaveh: {
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
  Keqing: {
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
  Kinich: {
    id: "Kinich",
    type: "character",
    rarity: 5,
    name: { en: "Kinich", "zh-CN": "基尼奇" },
    materials: [
      "Overripe Flamegranate",
      "Nagadus Emerald",
      "Denial and Judgment",
      "Kindling",
      "Juvenile Fang",
      "Saurian Claw Succulent",
    ],
  },
  Kirara: {
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
  Klee: {
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
  "Kujou Sara": {
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
  "Kuki Shinobu": {
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
  "Lan Yan": {
    id: "Lan Yan",
    type: "character",
    rarity: 4,
    name: { en: "Lan Yan", "zh-CN": "蓝砚" },
    materials: [
      "Gold-Inscribed Secret Source Core",
      "Vayuda Turquoise",
      "Eroded Sunfire",
      "Diligence",
      "Whopperflower Nectar",
      "Clearwater Jade",
    ],
  },
  Layla: {
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
  Lisa: {
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
  Lynette: {
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
  Lyney: {
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
  Mavuika: {
    id: "Mavuika",
    type: "character",
    rarity: 5,
    name: { en: "Mavuika", "zh-CN": "玛薇卡" },
    materials: [
      "Gold-Inscribed Secret Source Core",
      "Agnidus Agate",
      "Eroded Horn",
      "Contention",
      "Sentry’s Wooden Whistle",
      "Withering Purpurbloom",
    ],
  },
  Mika: {
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
  Mona: {
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
  Mualani: {
    id: "Mualani",
    type: "character",
    rarity: 5,
    name: { en: "Mualani", "zh-CN": "玛拉妮" },
    materials: [
      "Mark of the Binding Blessing",
      "Varunada Lazurite",
      "Lightless Mass",
      "Contention",
      "Sentry’s Wooden Whistle",
      "Sprayfeather Gill",
    ],
  },
  Nahida: {
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
  Navia: {
    id: "Navia",
    type: "character",
    rarity: 5,
    name: { en: "Navia", "zh-CN": "娜维娅" },
    materials: [
      "Artificed Spare Clockwork Component — Coppelius",
      "Prithiva Topaz",
      "Lightless Silk String",
      "Equity",
      "Transoceanic Pearl",
      "Spring of the First Dewdrop",
    ],
  },
  Neuvillette: {
    id: "Neuvillette",
    type: "character",
    rarity: 5,
    name: { en: "Neuvillette", "zh-CN": "那维莱特" },
    materials: [
      "Fontemer Unihorn",
      "Varunada Lazurite",
      "Everamber",
      "Equity",
      "Transoceanic Pearl",
      "Lumitoile",
    ],
  },
  Nilou: {
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
  Ningguang: {
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
  Noelle: {
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
  Ororon: {
    id: "Ororon",
    type: "character",
    rarity: 4,
    name: { en: "Ororon", "zh-CN": "欧洛伦" },
    materials: [
      "Mark of the Binding Blessing",
      "Vajrada Amethyst",
      "Lightless Silk String",
      "Kindling",
      "Juvenile Fang",
      "Glowing Hornshroom",
    ],
  },
  Qiqi: {
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
  "Raiden Shogun": {
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
  Razor: {
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
  Rosaria: {
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
  "Sangonomiya Kokomi": {
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
  Sayu: {
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
  Sethos: {
    id: "Sethos",
    type: "character",
    rarity: 4,
    name: { en: "Sethos", "zh-CN": "赛索斯" },
    materials: [
      "Cloudseam Scale",
      "Vajrada Amethyst",
      "Daka’s Bell",
      "Praxis",
      "Faded Red Satin",
      "Trishiraite",
    ],
  },
  Shenhe: {
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
  "Shikanoin Heizou": {
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
  Sigewinne: {
    id: "Sigewinne",
    type: "character",
    rarity: 5,
    name: { en: "Sigewinne", "zh-CN": "希格雯" },
    materials: [
      "Water That Failed To Transcend",
      "Varunada Lazurite",
      "Lightless Eye of the Maelstrom",
      "Equity",
      "Transoceanic Pearl",
      "Romaritime Flower",
    ],
  },
  Sucrose: {
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
  Tartaglia: {
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
  Thoma: {
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
  Tighnari: {
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
  Venti: {
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
  Wanderer: {
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
  Wriothesley: {
    id: "Wriothesley",
    type: "character",
    rarity: 5,
    name: { en: "Wriothesley", "zh-CN": "莱欧斯利" },
    materials: [
      "“Tourbillon Device”",
      "Shivada Jade",
      "Primordial Greenbloom",
      "Order",
      "Meshing Gear",
      "Subdetection Unit",
    ],
  },
  Xiangling: {
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
  Xianyun: {
    id: "Xianyun",
    type: "character",
    rarity: 5,
    name: { en: "Xianyun", "zh-CN": "闲云" },
    materials: [
      "Cloudseam Scale",
      "Vayuda Turquoise",
      "Lightless Eye of the Maelstrom",
      "Gold",
      "Divining Scroll",
      "Clearwater Jade",
    ],
  },
  Xiao: {
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
  Xilonen: {
    id: "Xilonen",
    type: "character",
    rarity: 5,
    name: { en: "Xilonen", "zh-CN": "希诺宁" },
    materials: [
      "Gold-Inscribed Secret Source Core",
      "Prithiva Topaz",
      "Mirror of Mushin",
      "Kindling",
      "Sentry’s Wooden Whistle",
      "Brilliant Chrysanthemum",
    ],
  },
  Xingqiu: {
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
  Xinyan: {
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
  "Yae Miko": {
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
  Yanfei: {
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
  Yaoyao: {
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
  Yelan: {
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
  Yoimiya: {
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
  "Yumemizuki Mizuki": {
    id: "Yumemizuki Mizuki",
    type: "character",
    rarity: 5,
    name: { en: "Yumemizuki Mizuki", "zh-CN": "梦见月瑞希" },
  },
  "Yun Jin": {
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
  Zhongli: {
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
};
