import type { OfMaterial, TYPE_CHARACTER } from "../base";
import { I18nObject } from "../i18n";
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

function character(
  id: string,
  rarity: 4 | 5,
  name: I18nObject,
  materials?: Character["materials"]
): Character {
  return {
    type: "character",
    id,
    name,
    rarity,
    materials,
  };
}

export type CharacterId =
  | "Aino"
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
  | "Dahlia"
  | "Dehya"
  | "Diluc"
  | "Diona"
  | "Dori"
  | "Emilie"
  | "Escoffier"
  | "Eula"
  | "Faruzan"
  | "Fischl"
  | "Flins"
  | "Freminet"
  | "Furina"
  | "Gaming"
  | "Ganyu"
  | "Gorou"
  | "Hu Tao"
  | "Iansan"
  | "Ifa"
  | "Ineffa"
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
  | "Lauma"
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
  | "Skirk"
  | "Sucrose"
  | "Tartaglia"
  | "Thoma"
  | "Tighnari"
  | "Varesa"
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
  Aino: character("Aino", 4, { en: "Aino", "zh-CN": "爱诺" }),
  Albedo: character("Albedo", 5, { en: "Albedo", "zh-CN": "阿贝多" }, [
    "Basalt Pillar",
    "Prithiva Topaz",
    "Tusk of Monoceros Caeli",
    "Ballad",
    "Divining Scroll",
    "Cecilia",
  ]),
  Alhaitham: character(
    "Alhaitham",
    5,
    { en: "Alhaitham", "zh-CN": "艾尔海森" },
    [
      "Pseudo-Stamens",
      "Nagadus Emerald",
      "Mirror of Mushin",
      "Ingenuity",
      "Faded Red Satin",
      "Sand Grease Pupa",
    ]
  ),
  Aloy: character("Aloy", 5, { en: "Aloy", "zh-CN": "埃洛伊" }, [
    "Crystalline Bloom",
    "Shivada Jade",
    "Molten Moment",
    "Freedom",
    "Spectral Husk",
    "Crystal Marrow",
  ]),
  Amber: character("Amber", 4, { en: "Amber", "zh-CN": "安柏" }, [
    "Everflame Seed",
    "Agnidus Agate",
    "Dvalin’s Sigh",
    "Freedom",
    "Firm Arrowhead",
    "Small Lamp Grass",
  ]),
  "Arataki Itto": character(
    "Arataki Itto",
    5,
    { en: "Arataki Itto", "zh-CN": "荒泷一斗" },
    [
      "Riftborn Regalia",
      "Prithiva Topaz",
      "Ashen Heart",
      "Elegance",
      "Slime Condensate",
      "Onikabuto",
    ]
  ),
  Arlecchino: character(
    "Arlecchino",
    5,
    { en: "Arlecchino", "zh-CN": "阿蕾奇诺" },
    [
      "Fragment of a Golden Melody",
      "Agnidus Agate",
      "Fading Candle",
      "Order",
      "Recruit’s Insignia",
      "Rainbow Rose",
    ]
  ),
  Baizhu: character("Baizhu", 5, { en: "Baizhu", "zh-CN": "白术" }, [
    "Evergloom Ring",
    "Nagadus Emerald",
    "Worldspan Fern",
    "Gold",
    "Fungal Spores",
    "Violetgrass",
  ]),
  Barbara: character("Barbara", 4, { en: "Barbara", "zh-CN": "芭芭拉" }, [
    "Cleansing Heart",
    "Varunada Lazurite",
    "Ring of Boreas",
    "Freedom",
    "Divining Scroll",
    "Philanemo Mushroom",
  ]),
  Beidou: character("Beidou", 4, { en: "Beidou", "zh-CN": "北斗" }, [
    "Lightning Prism",
    "Vajrada Amethyst",
    "Dvalin’s Sigh",
    "Gold",
    "Treasure Hoarder Insignia",
    "Noctilucous Jade",
  ]),
  Bennett: character("Bennett", 4, { en: "Bennett", "zh-CN": "班尼特" }, [
    "Everflame Seed",
    "Agnidus Agate",
    "Dvalin’s Plume",
    "Resistance",
    "Treasure Hoarder Insignia",
    "Windwheel Aster",
  ]),
  Candace: character("Candace", 4, { en: "Candace", "zh-CN": "坎蒂丝" }, [
    "Light Guiding Tetrahedron",
    "Varunada Lazurite",
    "Tears of the Calamitous God",
    "Admonition",
    "Faded Red Satin",
    "Henna Berry",
  ]),
  Charlotte: character("Charlotte", 4, { en: "Charlotte", "zh-CN": "夏洛蒂" }, [
    "“Tourbillon Device”",
    "Shivada Jade",
    "Lightless Silk String",
    "Justice",
    "Meshing Gear",
    "Beryl Conch",
  ]),
  Chasca: character("Chasca", 5, { en: "Chasca", "zh-CN": "恰斯卡" }, [
    "Ensnaring Gaze",
    "Vayuda Turquoise",
    "Silken Feather",
    "Conflict",
    "Juvenile Fang",
    "Withering Purpurbloom",
  ]),
  Chevreuse: character("Chevreuse", 4, { en: "Chevreuse", "zh-CN": "夏沃蕾" }, [
    "Fontemer Unihorn",
    "Agnidus Agate",
    "Lightless Eye of the Maelstrom",
    "Order",
    "Meshing Gear",
    "Lumidouce Bell",
  ]),
  Chiori: character("Chiori", 5, { en: "Chiori", "zh-CN": "千织" }, [
    "Artificed Spare Clockwork Component — Coppelia",
    "Prithiva Topaz",
    "Lightless Silk String",
    "Light",
    "Spectral Husk",
    "Dendrobium",
  ]),
  Chongyun: character("Chongyun", 4, { en: "Chongyun", "zh-CN": "重云" }, [
    "Hoarfrost Core",
    "Shivada Jade",
    "Dvalin’s Sigh",
    "Diligence",
    "Damaged Mask",
    "Cor Lapis",
  ]),
  Citlali: character("Citlali", 5, { en: "Citlali", "zh-CN": "茜特菈莉" }, [
    "Talisman of the Enigmatic Land",
    "Shivada Jade",
    "Denial and Judgment",
    "Kindling",
    "Juvenile Fang",
    "Quenepa Berry",
  ]),
  Clorinde: character("Clorinde", 5, { en: "Clorinde", "zh-CN": "克洛琳德" }, [
    "Fontemer Unihorn",
    "Vajrada Amethyst",
    "Everamber",
    "Justice",
    "Transoceanic Pearl",
    "Lumitoile",
  ]),
  Collei: character("Collei", 4, { en: "Collei", "zh-CN": "柯莱" }, [
    "Majestic Hooked Beak",
    "Nagadus Emerald",
    "Tears of the Calamitous God",
    "Praxis",
    "Firm Arrowhead",
    "Rukkhashava Mushrooms",
  ]),
  Cyno: character("Cyno", 5, { en: "Cyno", "zh-CN": "塞诺" }, [
    "Thunderclap Fruitcore",
    "Vajrada Amethyst",
    "Mudra of the Malefic General",
    "Admonition",
    "Divining Scroll",
    "Scarab",
  ]),
  Dahlia: character("Dahlia", 4, { en: "Dahlia", "zh-CN": "塔利雅" }, [
    "Secret Source Airflow Accumulator",
    "Varunada Lazurite",
    "Eroded Scale-Feather",
    "Ballad",
    "Firm Arrowhead",
    "Calla Lily",
  ]),
  Dehya: character("Dehya", 5, { en: "Dehya", "zh-CN": "迪希雅" }, [
    "Light Guiding Tetrahedron",
    "Agnidus Agate",
    "Puppet Strings",
    "Praxis",
    "Faded Red Satin",
    "Sand Grease Pupa",
  ]),
  Diluc: character("Diluc", 5, { en: "Diluc", "zh-CN": "迪卢克" }, [
    "Everflame Seed",
    "Agnidus Agate",
    "Dvalin’s Plume",
    "Resistance",
    "Recruit’s Insignia",
    "Small Lamp Grass",
  ]),
  Diona: character("Diona", 4, { en: "Diona", "zh-CN": "迪奥娜" }, [
    "Hoarfrost Core",
    "Shivada Jade",
    "Shard of a Foul Legacy",
    "Freedom",
    "Firm Arrowhead",
    "Calla Lily",
  ]),
  Dori: character("Dori", 4, { en: "Dori", "zh-CN": "多莉" }, [
    "Thunderclap Fruitcore",
    "Vajrada Amethyst",
    "Bloodjade Branch",
    "Ingenuity",
    "Faded Red Satin",
    "Kalpalata Lotus",
  ]),
  Emilie: character("Emilie", 5, { en: "Emilie", "zh-CN": "艾梅莉埃" }, [
    "Fragment of a Golden Melody",
    "Nagadus Emerald",
    "Silken Feather",
    "Order",
    "Meshing Gear",
    "Lakelight Lily",
  ]),
  Escoffier: character("Escoffier", 5, { en: "Escoffier", "zh-CN": "爱可菲" }, [
    "Secret Source Airflow Accumulator",
    "Shivada Jade",
    "Eroded Horn",
    "Justice",
    "Meshing Gear",
    "Beryl Conch",
  ]),
  Eula: character("Eula", 5, { en: "Eula", "zh-CN": "优菈" }, [
    "Crystalline Bloom",
    "Shivada Jade",
    "Dragon Lord’s Crown",
    "Resistance",
    "Damaged Mask",
    "Dandelion Seed",
  ]),
  Faruzan: character("Faruzan", 4, { en: "Faruzan", "zh-CN": "珐露珊" }, [
    "Light Guiding Tetrahedron",
    "Vayuda Turquoise",
    "Puppet Strings",
    "Admonition",
    "Faded Red Satin",
    "Henna Berry",
  ]),
  Fischl: character("Fischl", 4, { en: "Fischl", "zh-CN": "菲谢尔" }, [
    "Lightning Prism",
    "Vajrada Amethyst",
    "Spirit Locket of Boreas",
    "Ballad",
    "Firm Arrowhead",
    "Small Lamp Grass",
  ]),
  Flins: character("Flins", 5, { en: "Flins", "zh-CN": "菲林斯" }),
  Freminet: character("Freminet", 4, { en: "Freminet", "zh-CN": "菲米尼" }, [
    "Artificed Spare Clockwork Component — Coppelius",
    "Shivada Jade",
    "Worldspan Fern",
    "Justice",
    "Transoceanic Pearl",
    "Romaritime Flower",
  ]),
  Furina: character("Furina", 5, { en: "Furina", "zh-CN": "芙宁娜" }, [
    "Water That Failed To Transcend",
    "Varunada Lazurite",
    "Lightless Mass",
    "Justice",
    "Whopperflower Nectar",
    "Lakelight Lily",
  ]),
  Gaming: character("Gaming", 4, { en: "Gaming", "zh-CN": "嘉明" }, [
    "Emperor’s Resolution",
    "Agnidus Agate",
    "Lightless Mass",
    "Prosperity",
    "Slime Condensate",
    "Starconch",
  ]),
  Ganyu: character("Ganyu", 5, { en: "Ganyu", "zh-CN": "甘雨" }, [
    "Hoarfrost Core",
    "Shivada Jade",
    "Shadow of the Warrior",
    "Diligence",
    "Whopperflower Nectar",
    "Qingxin",
  ]),
  Gorou: character("Gorou", 4, { en: "Gorou", "zh-CN": "五郎" }, [
    "Perpetual Heart",
    "Prithiva Topaz",
    "Molten Moment",
    "Light",
    "Spectral Husk",
    "Sango Pearl",
  ]),
  "Hu Tao": character("Hu Tao", 5, { en: "Hu Tao", "zh-CN": "胡桃" }, [
    "Juvenile Jade",
    "Agnidus Agate",
    "Shard of a Foul Legacy",
    "Diligence",
    "Whopperflower Nectar",
    "Silk Flower",
  ]),
  Iansan: character("Iansan", 4, { en: "Iansan", "zh-CN": "伊安珊" }, [
    "Ensnaring Gaze",
    "Vajrada Amethyst",
    "Denial and Judgment",
    "Contention",
    "Sentry’s Wooden Whistle",
    "Dracolite",
  ]),
  Ifa: character("Ifa", 4, { en: "Ifa", "zh-CN": "伊法" }, [
    "Sparkless Statue Core",
    "Vayuda Turquoise",
    "Ascended Sample: Rook",
    "Conflict",
    "Juvenile Fang",
    "Saurian Claw Succulent",
  ]),
  Ineffa: character("Ineffa", 5, { en: "Ineffa", "zh-CN": "伊涅芙" }, [
    "Secret Source Airflow Accumulator",
    "Vajrada Amethyst",
    "Eroded Sunfire",
    "Conflict",
    "Sentry’s Wooden Whistle",
    "Glowing Hornshroom",
  ]),
  Jean: character("Jean", 5, { en: "Jean", "zh-CN": "琴" }, [
    "Hurricane Seed",
    "Vayuda Turquoise",
    "Dvalin’s Plume",
    "Resistance",
    "Damaged Mask",
    "Dandelion Seed",
  ]),
  Kachina: character("Kachina", 4, { en: "Kachina", "zh-CN": "卡齐娜" }, [
    "Overripe Flamegranate",
    "Prithiva Topaz",
    "Fading Candle",
    "Conflict",
    "Sentry’s Wooden Whistle",
    "Quenepa Berry",
  ]),
  "Kaedehara Kazuha": character(
    "Kaedehara Kazuha",
    5,
    { en: "Kaedehara Kazuha", "zh-CN": "枫原万叶" },
    [
      "Marionette Core",
      "Vayuda Turquoise",
      "Gilded Scale",
      "Diligence",
      "Treasure Hoarder Insignia",
      "Sea Ganoderma",
    ]
  ),
  Kaeya: character("Kaeya", 4, { en: "Kaeya", "zh-CN": "凯亚" }, [
    "Hoarfrost Core",
    "Shivada Jade",
    "Spirit Locket of Boreas",
    "Ballad",
    "Treasure Hoarder Insignia",
    "Calla Lily",
  ]),
  "Kamisato Ayaka": character(
    "Kamisato Ayaka",
    5,
    { en: "Kamisato Ayaka", "zh-CN": "神里绫华" },
    [
      "Perpetual Heart",
      "Shivada Jade",
      "Bloodjade Branch",
      "Elegance",
      "Old Handguard",
      "Sakura Bloom",
    ]
  ),
  "Kamisato Ayato": character(
    "Kamisato Ayato",
    5,
    { en: "Kamisato Ayato", "zh-CN": "神里绫人" },
    [
      "Dew of Repudiation",
      "Varunada Lazurite",
      "Mudra of the Malefic General",
      "Elegance",
      "Old Handguard",
      "Sakura Bloom",
    ]
  ),
  Kaveh: character("Kaveh", 4, { en: "Kaveh", "zh-CN": "卡维" }, [
    "Quelled Creeper",
    "Nagadus Emerald",
    "Primordial Greenbloom",
    "Ingenuity",
    "Fungal Spores",
    "Mourning Flower",
  ]),
  Keqing: character("Keqing", 5, { en: "Keqing", "zh-CN": "刻晴" }, [
    "Lightning Prism",
    "Vajrada Amethyst",
    "Ring of Boreas",
    "Prosperity",
    "Whopperflower Nectar",
    "Cor Lapis",
  ]),
  Kinich: character("Kinich", 5, { en: "Kinich", "zh-CN": "基尼奇" }, [
    "Overripe Flamegranate",
    "Nagadus Emerald",
    "Denial and Judgment",
    "Kindling",
    "Juvenile Fang",
    "Saurian Claw Succulent",
  ]),
  Kirara: character("Kirara", 4, { en: "Kirara", "zh-CN": "绮良良" }, [
    "Evergloom Ring",
    "Nagadus Emerald",
    "Everamber",
    "Transience",
    "Spectral Husk",
    "Amakumo Fruit",
  ]),
  Klee: character("Klee", 5, { en: "Klee", "zh-CN": "可莉" }, [
    "Everflame Seed",
    "Agnidus Agate",
    "Ring of Boreas",
    "Freedom",
    "Divining Scroll",
    "Philanemo Mushroom",
  ]),
  "Kujou Sara": character(
    "Kujou Sara",
    4,
    { en: "Kujou Sara", "zh-CN": "九条裟罗" },
    [
      "Storm Beads",
      "Vajrada Amethyst",
      "Ashen Heart",
      "Elegance",
      "Damaged Mask",
      "Dendrobium",
    ]
  ),
  "Kuki Shinobu": character(
    "Kuki Shinobu",
    4,
    { en: "Kuki Shinobu", "zh-CN": "久岐忍" },
    [
      "Runic Fang",
      "Vajrada Amethyst",
      "Tears of the Calamitous God",
      "Elegance",
      "Spectral Husk",
      "Naku Weed",
    ]
  ),
  "Lan Yan": character("Lan Yan", 4, { en: "Lan Yan", "zh-CN": "蓝砚" }, [
    "Gold-Inscribed Secret Source Core",
    "Vayuda Turquoise",
    "Eroded Sunfire",
    "Diligence",
    "Whopperflower Nectar",
    "Clearwater Jade",
  ]),
  Lauma: character("Lauma", 5, { en: "Lauma", "zh-CN": "菈乌玛" }),
  Layla: character("Layla", 4, { en: "Layla", "zh-CN": "莱依拉" }, [
    "Perpetual Caliber",
    "Shivada Jade",
    "Mirror of Mushin",
    "Ingenuity",
    "Divining Scroll",
    "Nilotpala Lotus",
  ]),
  Lisa: character("Lisa", 4, { en: "Lisa", "zh-CN": "丽莎" }, [
    "Lightning Prism",
    "Vajrada Amethyst",
    "Dvalin’s Claw",
    "Ballad",
    "Slime Condensate",
    "Valberry",
  ]),
  Lynette: character("Lynette", 4, { en: "Lynette", "zh-CN": "琳妮特" }, [
    "Artificed Spare Clockwork Component — Coppelia",
    "Vayuda Turquoise",
    "Everamber",
    "Order",
    "Meshing Gear",
    "Lumidouce Bell",
  ]),
  Lyney: character("Lyney", 5, { en: "Lyney", "zh-CN": "林尼" }, [
    "Emperor’s Resolution",
    "Agnidus Agate",
    "Primordial Greenbloom",
    "Equity",
    "Recruit’s Insignia",
    "Rainbow Rose",
  ]),
  Mavuika: character("Mavuika", 5, { en: "Mavuika", "zh-CN": "玛薇卡" }, [
    "Gold-Inscribed Secret Source Core",
    "Agnidus Agate",
    "Eroded Horn",
    "Contention",
    "Sentry’s Wooden Whistle",
    "Withering Purpurbloom",
  ]),
  Mika: character("Mika", 4, { en: "Mika", "zh-CN": "米卡" }, [
    "Pseudo-Stamens",
    "Shivada Jade",
    "Mirror of Mushin",
    "Ballad",
    "Recruit’s Insignia",
    "Wolfhook",
  ]),
  Mona: character("Mona", 5, { en: "Mona", "zh-CN": "莫娜" }, [
    "Cleansing Heart",
    "Varunada Lazurite",
    "Ring of Boreas",
    "Resistance",
    "Whopperflower Nectar",
    "Philanemo Mushroom",
  ]),
  Mualani: character("Mualani", 5, { en: "Mualani", "zh-CN": "玛拉妮" }, [
    "Mark of the Binding Blessing",
    "Varunada Lazurite",
    "Lightless Mass",
    "Contention",
    "Sentry’s Wooden Whistle",
    "Sprayfeather Gill",
  ]),
  Nahida: character("Nahida", 5, { en: "Nahida", "zh-CN": "纳西妲" }, [
    "Quelled Creeper",
    "Nagadus Emerald",
    "Puppet Strings",
    "Ingenuity",
    "Fungal Spores",
    "Kalpalata Lotus",
  ]),
  Navia: character("Navia", 5, { en: "Navia", "zh-CN": "娜维娅" }, [
    "Artificed Spare Clockwork Component — Coppelius",
    "Prithiva Topaz",
    "Lightless Silk String",
    "Equity",
    "Transoceanic Pearl",
    "Spring of the First Dewdrop",
  ]),
  Neuvillette: character(
    "Neuvillette",
    5,
    { en: "Neuvillette", "zh-CN": "那维莱特" },
    [
      "Fontemer Unihorn",
      "Varunada Lazurite",
      "Everamber",
      "Equity",
      "Transoceanic Pearl",
      "Lumitoile",
    ]
  ),
  Nilou: character("Nilou", 5, { en: "Nilou", "zh-CN": "妮露" }, [
    "Perpetual Caliber",
    "Varunada Lazurite",
    "Tears of the Calamitous God",
    "Praxis",
    "Fungal Spores",
    "Padisarah",
  ]),
  Ningguang: character("Ningguang", 4, { en: "Ningguang", "zh-CN": "凝光" }, [
    "Basalt Pillar",
    "Prithiva Topaz",
    "Spirit Locket of Boreas",
    "Prosperity",
    "Recruit’s Insignia",
    "Glaze Lily",
  ]),
  Noelle: character("Noelle", 4, { en: "Noelle", "zh-CN": "诺艾尔" }, [
    "Basalt Pillar",
    "Prithiva Topaz",
    "Dvalin’s Claw",
    "Resistance",
    "Damaged Mask",
    "Valberry",
  ]),
  Ororon: character("Ororon", 4, { en: "Ororon", "zh-CN": "欧洛伦" }, [
    "Mark of the Binding Blessing",
    "Vajrada Amethyst",
    "Lightless Silk String",
    "Kindling",
    "Juvenile Fang",
    "Glowing Hornshroom",
  ]),
  Qiqi: character("Qiqi", 5, { en: "Qiqi", "zh-CN": "七七" }, [
    "Hoarfrost Core",
    "Shivada Jade",
    "Tail of Boreas",
    "Prosperity",
    "Divining Scroll",
    "Violetgrass",
  ]),
  "Raiden Shogun": character(
    "Raiden Shogun",
    5,
    { en: "Raiden Shogun", "zh-CN": "雷电将军" },
    [
      "Storm Beads",
      "Vajrada Amethyst",
      "Molten Moment",
      "Light",
      "Old Handguard",
      "Amakumo Fruit",
    ]
  ),
  Razor: character("Razor", 4, { en: "Razor", "zh-CN": "雷泽" }, [
    "Lightning Prism",
    "Vajrada Amethyst",
    "Dvalin’s Claw",
    "Resistance",
    "Damaged Mask",
    "Wolfhook",
  ]),
  Rosaria: character("Rosaria", 4, { en: "Rosaria", "zh-CN": "罗莎莉亚" }, [
    "Hoarfrost Core",
    "Shivada Jade",
    "Shadow of the Warrior",
    "Ballad",
    "Recruit’s Insignia",
    "Valberry",
  ]),
  "Sangonomiya Kokomi": character(
    "Sangonomiya Kokomi",
    5,
    { en: "Sangonomiya Kokomi", "zh-CN": "珊瑚宫心海" },
    [
      "Dew of Repudiation",
      "Varunada Lazurite",
      "Hellfire Butterfly",
      "Transience",
      "Spectral Husk",
      "Sango Pearl",
    ]
  ),
  Sayu: character("Sayu", 4, { en: "Sayu", "zh-CN": "早柚" }, [
    "Marionette Core",
    "Vayuda Turquoise",
    "Gilded Scale",
    "Light",
    "Whopperflower Nectar",
    "Crystal Marrow",
  ]),
  Sethos: character("Sethos", 4, { en: "Sethos", "zh-CN": "赛索斯" }, [
    "Cloudseam Scale",
    "Vajrada Amethyst",
    "Daka’s Bell",
    "Praxis",
    "Faded Red Satin",
    "Trishiraite",
  ]),
  Shenhe: character("Shenhe", 5, { en: "Shenhe", "zh-CN": "申鹤" }, [
    "Dragonheir’s False Fin",
    "Shivada Jade",
    "Hellfire Butterfly",
    "Prosperity",
    "Whopperflower Nectar",
    "Qingxin",
  ]),
  "Shikanoin Heizou": character(
    "Shikanoin Heizou",
    4,
    { en: "Shikanoin Heizou", "zh-CN": "鹿野院平藏" },
    [
      "Runic Fang",
      "Vayuda Turquoise",
      "The Meaning of Aeons",
      "Transience",
      "Treasure Hoarder Insignia",
      "Onikabuto",
    ]
  ),
  Sigewinne: character("Sigewinne", 5, { en: "Sigewinne", "zh-CN": "希格雯" }, [
    "Water That Failed To Transcend",
    "Varunada Lazurite",
    "Lightless Eye of the Maelstrom",
    "Equity",
    "Transoceanic Pearl",
    "Romaritime Flower",
  ]),
  Skirk: character("Skirk", 5, { en: "Skirk", "zh-CN": "丝柯克" }, [
    "Ensnaring Gaze",
    "Shivada Jade",
    "Ascended Sample: Knight",
    "Contention",
    "Meshing Gear",
    "Skysplit Gembloom",
  ]),
  Sucrose: character("Sucrose", 4, { en: "Sucrose", "zh-CN": "砂糖" }, [
    "Hurricane Seed",
    "Vayuda Turquoise",
    "Spirit Locket of Boreas",
    "Freedom",
    "Whopperflower Nectar",
    "Windwheel Aster",
  ]),
  Tartaglia: character(
    "Tartaglia",
    5,
    { en: "Tartaglia", "zh-CN": "达达利亚" },
    [
      "Cleansing Heart",
      "Varunada Lazurite",
      "Shard of a Foul Legacy",
      "Freedom",
      "Recruit’s Insignia",
      "Starconch",
    ]
  ),
  Thoma: character("Thoma", 4, { en: "Thoma", "zh-CN": "托马" }, [
    "Smoldering Pearl",
    "Agnidus Agate",
    "Hellfire Butterfly",
    "Transience",
    "Treasure Hoarder Insignia",
    "Fluorescent Fungus",
  ]),
  Tighnari: character("Tighnari", 5, { en: "Tighnari", "zh-CN": "提纳里" }, [
    "Majestic Hooked Beak",
    "Nagadus Emerald",
    "The Meaning of Aeons",
    "Admonition",
    "Fungal Spores",
    "Nilotpala Lotus",
  ]),
  Varesa: character("Varesa", 5, { en: "Varesa", "zh-CN": "瓦雷莎" }, [
    "Sparkless Statue Core",
    "Vajrada Amethyst",
    "Eroded Scale-Feather",
    "Conflict",
    "Juvenile Fang",
    "Skysplit Gembloom",
  ]),
  Venti: character("Venti", 5, { en: "Venti", "zh-CN": "温迪" }, [
    "Hurricane Seed",
    "Vayuda Turquoise",
    "Tail of Boreas",
    "Ballad",
    "Slime Condensate",
    "Cecilia",
  ]),
  Wanderer: character("Wanderer", 5, { en: "Wanderer", "zh-CN": "流浪者" }, [
    "Perpetual Caliber",
    "Vayuda Turquoise",
    "Daka’s Bell",
    "Praxis",
    "Old Handguard",
    "Rukkhashava Mushrooms",
  ]),
  Wriothesley: character(
    "Wriothesley",
    5,
    { en: "Wriothesley", "zh-CN": "莱欧斯利" },
    [
      "“Tourbillon Device”",
      "Shivada Jade",
      "Primordial Greenbloom",
      "Order",
      "Meshing Gear",
      "Subdetection Unit",
    ]
  ),
  Xiangling: character("Xiangling", 4, { en: "Xiangling", "zh-CN": "香菱" }, [
    "Everflame Seed",
    "Agnidus Agate",
    "Dvalin’s Claw",
    "Diligence",
    "Slime Condensate",
    "Jueyun Chili",
  ]),
  Xianyun: character("Xianyun", 5, { en: "Xianyun", "zh-CN": "闲云" }, [
    "Cloudseam Scale",
    "Vayuda Turquoise",
    "Lightless Eye of the Maelstrom",
    "Gold",
    "Divining Scroll",
    "Clearwater Jade",
  ]),
  Xiao: character("Xiao", 5, { en: "Xiao", "zh-CN": "魈" }, [
    "Juvenile Jade",
    "Vayuda Turquoise",
    "Shadow of the Warrior",
    "Prosperity",
    "Slime Condensate",
    "Qingxin",
  ]),
  Xilonen: character("Xilonen", 5, { en: "Xilonen", "zh-CN": "希诺宁" }, [
    "Gold-Inscribed Secret Source Core",
    "Prithiva Topaz",
    "Mirror of Mushin",
    "Kindling",
    "Sentry’s Wooden Whistle",
    "Brilliant Chrysanthemum",
  ]),
  Xingqiu: character("Xingqiu", 4, { en: "Xingqiu", "zh-CN": "行秋" }, [
    "Cleansing Heart",
    "Varunada Lazurite",
    "Tail of Boreas",
    "Gold",
    "Damaged Mask",
    "Silk Flower",
  ]),
  Xinyan: character("Xinyan", 4, { en: "Xinyan", "zh-CN": "辛焱" }, [
    "Everflame Seed",
    "Agnidus Agate",
    "Tusk of Monoceros Caeli",
    "Gold",
    "Treasure Hoarder Insignia",
    "Violetgrass",
  ]),
  "Yae Miko": character(
    "Yae Miko",
    5,
    { en: "Yae Miko", "zh-CN": "八重神子" },
    [
      "Dragonheir’s False Fin",
      "Vajrada Amethyst",
      "The Meaning of Aeons",
      "Light",
      "Old Handguard",
      "Sea Ganoderma",
    ]
  ),
  Yanfei: character("Yanfei", 4, { en: "Yanfei", "zh-CN": "烟绯" }, [
    "Juvenile Jade",
    "Agnidus Agate",
    "Bloodjade Branch",
    "Gold",
    "Treasure Hoarder Insignia",
    "Noctilucous Jade",
  ]),
  Yaoyao: character("Yaoyao", 4, { en: "Yaoyao", "zh-CN": "瑶瑶" }, [
    "Quelled Creeper",
    "Nagadus Emerald",
    "Daka’s Bell",
    "Diligence",
    "Slime Condensate",
    "Jueyun Chili",
  ]),
  Yelan: character("Yelan", 5, { en: "Yelan", "zh-CN": "夜兰" }, [
    "Runic Fang",
    "Varunada Lazurite",
    "Gilded Scale",
    "Prosperity",
    "Recruit’s Insignia",
    "Starconch",
  ]),
  Yoimiya: character("Yoimiya", 5, { en: "Yoimiya", "zh-CN": "宵宫" }, [
    "Smoldering Pearl",
    "Agnidus Agate",
    "Dragon Lord’s Crown",
    "Transience",
    "Divining Scroll",
    "Naku Weed",
  ]),
  "Yumemizuki Mizuki": character(
    "Yumemizuki Mizuki",
    5,
    { en: "Yumemizuki Mizuki", "zh-CN": "梦见月瑞希" },
    [
      "Talisman of the Enigmatic Land",
      "Vayuda Turquoise",
      "Fading Candle",
      "Transience",
      "Old Handguard",
      "Sea Ganoderma",
    ]
  ),
  "Yun Jin": character("Yun Jin", 4, { en: "Yun Jin", "zh-CN": "云堇" }, [
    "Riftborn Regalia",
    "Prithiva Topaz",
    "Ashen Heart",
    "Diligence",
    "Damaged Mask",
    "Glaze Lily",
  ]),
  Zhongli: character("Zhongli", 5, { en: "Zhongli", "zh-CN": "钟离" }, [
    "Basalt Pillar",
    "Prithiva Topaz",
    "Tusk of Monoceros Caeli",
    "Gold",
    "Slime Condensate",
    "Cor Lapis",
  ]),
};
