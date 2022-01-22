"use strict";

// characters

export const characters = {
  Albedo: {
    rarity: 5,
    name: { en: "Albedo", "zh-CN": "阿贝多" },
    materials: ["Prithiva Topaz", "Basalt Pillar", "Tusk of Monoceros Caeli", "Ballad", "Divining Scroll"],
  },
  Aloy: {
    rarity: 5,
    name: { en: "Aloy", "zh-CN": "埃洛伊" },
    materials: ["Shivada Jade", "Crystalline Bloom", "Molten Moment", "Freedom", "Spectral Husk"],
  },
  Amber: {
    rarity: 4,
    name: { en: "Amber", "zh-CN": "安柏" },
    materials: ["Agnidus Agate", "Everflame Seed", "Dvalin's Sigh", "Freedom", "Firm Arrowhead"],
  },
  "Arataki Itto": {
    rarity: 5,
    name: { en: "Arataki Itto", "zh-CN": "荒泷一斗" },
    materials: ["Prithiva Topaz", "Riftborn Regalia", "Ashen Heart", "Elegance", "Slime Condensate"],
  },
  Barbara: {
    rarity: 4,
    name: { en: "Barbara", "zh-CN": "芭芭拉" },
    materials: ["Varunada Lazurite", "Cleansing Heart", "Ring of Boreas", "Freedom", "Divining Scroll"],
  },
  Beidou: {
    rarity: 4,
    name: { en: "Beidou", "zh-CN": "北斗" },
    materials: ["Vajrada Amethyst", "Lightning Prism", "Dvalin's Sigh", "Gold", "Treasure Hoarder Insignia"],
  },
  Bennett: {
    rarity: 4,
    name: { en: "Bennett", "zh-CN": "班尼特" },
    materials: ["Agnidus Agate", "Everflame Seed", "Dvalin's Plume", "Resistance", "Treasure Hoarder Insignia"],
  },
  Chongyun: {
    rarity: 4,
    name: { en: "Chongyun", "zh-CN": "重云" },
    materials: ["Shivada Jade", "Hoarfrost Core", "Dvalin's Sigh", "Diligence", "Damaged Mask"],
  },
  Diluc: {
    rarity: 5,
    name: { en: "Diluc", "zh-CN": "迪卢克" },
    materials: ["Agnidus Agate", "Everflame Seed", "Dvalin's Plume", "Resistance", "Recruit's Insignia"],
  },
  Diona: {
    rarity: 4,
    name: { en: "Diona", "zh-CN": "迪奥娜" },
    materials: ["Shivada Jade", "Hoarfrost Core", "Shard of a Foul Legacy", "Freedom", "Firm Arrowhead"],
  },
  Eula: {
    rarity: 5,
    name: { en: "Eula", "zh-CN": "优菈" },
    materials: ["Shivada Jade", "Crystalline Bloom", "Dragon Lord's Crown", "Resistance", "Damaged Mask"],
  },
  Fischl: {
    rarity: 4,
    name: { en: "Fischl", "zh-CN": "菲谢尔" },
    materials: ["Vajrada Amethyst", "Lightning Prism", "Spirit Locket of Boreas", "Ballad", "Firm Arrowhead"],
  },
  Ganyu: {
    rarity: 5,
    name: { en: "Ganyu", "zh-CN": "甘雨" },
    materials: ["Shivada Jade", "Hoarfrost Core", "Shadow of the Warrior", "Diligence", "Whopperflower Nectar"],
  },
  Gorou: {
    rarity: 4,
    name: { en: "Gorou", "zh-CN": "五郎" },
    materials: ["Prithiva Topaz", "Perpetual Heart", "Molten Moment", "Light", "Spectral Husk"],
  },
  "Hu Tao": {
    rarity: 5,
    name: { en: "Hu Tao", "zh-CN": "胡桃" },
    materials: ["Agnidus Agate", "Juvenile Jade", "Shard of a Foul Legacy", "Diligence", "Whopperflower Nectar"],
  },
  Jean: {
    rarity: 5,
    name: { en: "Jean", "zh-CN": "琴" },
    materials: ["Vayuda Turquoise", "Hurricane Seed", "Dvalin's Plume", "Resistance", "Damaged Mask"],
  },
  "Kaedehara Kazuha": {
    rarity: 5,
    name: { en: "Kaedehara Kazuha", "zh-CN": "枫原万叶" },
    materials: ["Vayuda Turquoise", "Marionette Core", "Gilded Scale", "Diligence", "Treasure Hoarder Insignia"],
  },
  Kaeya: {
    rarity: 4,
    name: { en: "Kaeya", "zh-CN": "凯亚" },
    materials: ["Shivada Jade", "Hoarfrost Core", "Spirit Locket of Boreas", "Ballad", "Treasure Hoarder Insignia"],
  },
  "Kamisato Ayaka": {
    rarity: 5,
    name: { en: "Kamisato Ayaka", "zh-CN": "神里绫华" },
    materials: ["Shivada Jade", "Perpetual Heart", "Bloodjade Branch", "Elegance", "Old Handguard"],
  },
  Keqing: {
    rarity: 5,
    name: { en: "Keqing", "zh-CN": "刻晴" },
    materials: ["Vajrada Amethyst", "Lightning Prism", "Ring of Boreas", "Prosperity", "Whopperflower Nectar"],
  },
  Klee: {
    rarity: 5,
    name: { en: "Klee", "zh-CN": "可莉" },
    materials: ["Agnidus Agate", "Everflame Seed", "Ring of Boreas", "Freedom", "Divining Scroll"],
  },
  "Kujou Sara": {
    rarity: 4,
    name: { en: "Kujou Sara", "zh-CN": "九条裟罗" },
    materials: ["Vajrada Amethyst", "Storm Beads", "Ashen Heart", "Elegance", "Damaged Mask"],
  },
  Lisa: {
    rarity: 4,
    name: { en: "Lisa", "zh-CN": "丽莎" },
    materials: ["Vajrada Amethyst", "Lightning Prism", "Dvalin's Claw", "Ballad", "Slime Condensate"],
  },
  Mona: {
    rarity: 5,
    name: { en: "Mona", "zh-CN": "莫娜" },
    materials: ["Varunada Lazurite", "Cleansing Heart", "Ring of Boreas", "Resistance", "Whopperflower Nectar"],
  },
  Ningguang: {
    rarity: 4,
    name: { en: "Ningguang", "zh-CN": "凝光" },
    materials: ["Prithiva Topaz", "Basalt Pillar", "Spirit Locket of Boreas", "Prosperity", "Recruit's Insignia"],
  },
  Noelle: {
    rarity: 4,
    name: { en: "Noelle", "zh-CN": "诺艾尔" },
    materials: ["Prithiva Topaz", "Basalt Pillar", "Dvalin's Claw", "Resistance", "Damaged Mask"],
  },
  Qiqi: {
    rarity: 5,
    name: { en: "Qiqi", "zh-CN": "七七" },
    materials: ["Shivada Jade", "Hoarfrost Core", "Tail of Boreas", "Prosperity", "Divining Scroll"],
  },
  "Raiden Shogun": {
    rarity: 5,
    name: { en: "Raiden Shogun", "zh-CN": "雷电将军" },
    materials: ["Vajrada Amethyst", "Storm Beads", "Molten Moment", "Light", "Old Handguard"],
  },
  Razor: {
    rarity: 4,
    name: { en: "Razor", "zh-CN": "雷泽" },
    materials: ["Vajrada Amethyst", "Lightning Prism", "Dvalin's Claw", "Resistance", "Damaged Mask"],
  },
  Rosaria: {
    rarity: 4,
    name: { en: "Rosaria", "zh-CN": "罗莎莉亚" },
    materials: ["Shivada Jade", "Hoarfrost Core", "Shadow of the Warrior", "Ballad", "Recruit's Insignia"],
  },
  "Sangonomiya Kokomi": {
    rarity: 5,
    name: { en: "Sangonomiya Kokomi", "zh-CN": "珊瑚宫心海" },
    materials: ["Varunada Lazurite", "Dew of Repudiation", "Hellfire Butterfly", "Transience", "Spectral Husk"],
  },
  Sayu: {
    rarity: 4,
    name: { en: "Sayu", "zh-CN": "早柚" },
    materials: ["Vayuda Turquoise", "Marionette Core", "Gilded Scale", "Light", "Whopperflower Nectar"],
  },
  Shenhe: {
    rarity: 5,
    name: { en: "Shenhe", "zh-CN": "申鹤" },
    materials: ["Shivada Jade", "Dragonheir's False Fin", "Hellfire Butterfly", "Prosperity", "Whopperflower Nectar"],
  },
  Sucrose: {
    rarity: 4,
    name: { en: "Sucrose", "zh-CN": "砂糖" },
    materials: ["Vayuda Turquoise", "Hurricane Seed", "Spirit Locket of Boreas", "Freedom", "Whopperflower Nectar"],
  },
  Tartaglia: {
    rarity: 5,
    name: { en: "Tartaglia", "zh-CN": "达达利亚" },
    materials: ["Varunada Lazurite", "Cleansing Heart", "Shard of a Foul Legacy", "Freedom", "Recruit's Insignia"],
  },
  Thoma: {
    rarity: 4,
    name: { en: "Thoma", "zh-CN": "托马" },
    materials: ["Agnidus Agate", "Smoldering Pearl", "Hellfire Butterfly", "Transience", "Treasure Hoarder Insignia"],
  },
  Venti: {
    rarity: 5,
    name: { en: "Venti", "zh-CN": "温迪" },
    materials: ["Vayuda Turquoise", "Hurricane Seed", "Tail of Boreas", "Ballad", "Slime Condensate"],
  },
  Xiangling: {
    rarity: 4,
    name: { en: "Xiangling", "zh-CN": "香菱" },
    materials: ["Agnidus Agate", "Everflame Seed", "Dvalin's Claw", "Diligence", "Slime Condensate"],
  },
  Xiao: {
    rarity: 5,
    name: { en: "Xiao", "zh-CN": "魈" },
    materials: ["Vayuda Turquoise", "Juvenile Jade", "Shadow of the Warrior", "Prosperity", "Slime Condensate"],
  },
  Xingqiu: {
    rarity: 4,
    name: { en: "Xingqiu", "zh-CN": "行秋" },
    materials: ["Varunada Lazurite", "Cleansing Heart", "Tail of Boreas", "Gold", "Damaged Mask"],
  },
  Xinyan: {
    rarity: 4,
    name: { en: "Xinyan", "zh-CN": "辛焱" },
    materials: ["Agnidus Agate", "Everflame Seed", "Tusk of Monoceros Caeli", "Gold", "Treasure Hoarder Insignia"],
  },
  Yanfei: {
    rarity: 4,
    name: { en: "Yanfei", "zh-CN": "烟绯" },
    materials: ["Agnidus Agate", "Juvenile Jade", "Bloodjade Branch", "Gold", "Treasure Hoarder Insignia"],
  },
  Yoimiya: {
    rarity: 5,
    name: { en: "Yoimiya", "zh-CN": "宵宫" },
    materials: ["Agnidus Agate", "Smoldering Pearl", "Dragon Lord's Crown", "Transience", "Divining Scroll"],
  },
  "Yun Jin": {
    rarity: 4,
    name: { en: "Yun Jin", "zh-CN": "云堇" },
    materials: ["Prithiva Topaz", "Riftborn Regalia", "Ashen Heart", "Diligence", "Damaged Mask"],
  },
  Zhongli: {
    rarity: 5,
    name: { en: "Zhongli", "zh-CN": "钟离" },
    materials: ["Prithiva Topaz", "Basalt Pillar", "Tusk of Monoceros Caeli", "Gold", "Slime Condensate"],
  },
};

// weapons

export const weapons = {
  "Polar Star": {
    rarity: 5,
    category: "bow",
    name: { en: "Polar Star", "zh-CN": "冬极白星" },
    materials: ["Mask of the Wicked Lieutenant", "Concealed Claw", "Spectral Husk"],
  },
  "Thundering Pulse": {
    rarity: 5,
    category: "bow",
    name: { en: "Thundering Pulse", "zh-CN": "飞雷之弦振" },
    materials: ["Narukami's Wisdom", "Dismal Prism", "Firm Arrowhead"],
  },
  "Elegy for the End": {
    rarity: 5,
    category: "bow",
    name: { en: "Elegy for the End", "zh-CN": "终末嗟叹之诗" },
    materials: ["Boreal Wolf's Milk Tooth", "Heavy Horn", "Recruit's Insignia"],
  },
  "Skyward Harp": {
    rarity: 5,
    category: "bow",
    name: { en: "Skyward Harp", "zh-CN": "天空之翼" },
    materials: ["Boreal Wolf's Milk Tooth", "Dead Ley Line Branch", "Firm Arrowhead"],
  },
  "Amos’ Bow": {
    rarity: 5,
    category: "bow",
    name: { en: "Amos' Bow", "zh-CN": "阿莫斯之弓" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Slime Condensate"],
  },
  "Alley Hunter": {
    rarity: 4,
    category: "bow",
    name: { en: "Alley Hunter", "zh-CN": "暗巷猎手" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Slime Condensate"],
  },
  "The Viridescent Hunt": {
    rarity: 4,
    category: "bow",
    name: { en: "The Viridescent Hunt", "zh-CN": "苍翠猎弓" },
    materials: ["Tile of Decarabian's Tower", "Heavy Horn", "Firm Arrowhead"],
  },
  "The Stringless": {
    rarity: 4,
    category: "bow",
    name: { en: "The Stringless", "zh-CN": "绝弦" },
    materials: ["Tile of Decarabian's Tower", "Heavy Horn", "Firm Arrowhead"],
  },
  "Sacrificial Bow": {
    rarity: 4,
    category: "bow",
    name: { en: "Sacrificial Bow", "zh-CN": "祭礼弓" },
    materials: ["Boreal Wolf's Milk Tooth", "Dead Ley Line Branch", "Slime Condensate"],
  },
  Rust: {
    rarity: 4,
    category: "bow",
    name: { en: "Rust", "zh-CN": "弓藏" },
    materials: ["Luminous Sands from Guyun", "Hunter's Sacrificial Knife", "Damaged Mask"],
  },
  "Royal Bow": {
    rarity: 4,
    category: "bow",
    name: { en: "Royal Bow", "zh-CN": "宗室长弓" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Divining Scroll"],
  },
  Predator: {
    rarity: 4,
    category: "bow",
    name: { en: "Predator", "zh-CN": "掠食者" },
    materials: ["Narukami's Wisdom", "Dismal Prism", "Firm Arrowhead"],
  },
  "Prototype Crescent": {
    rarity: 4,
    category: "bow",
    name: { en: "Prototype Crescent", "zh-CN": "试作澹月" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Treasure Hoarder Insignia"],
  },
  "Mouun’s Moon": {
    rarity: 4,
    category: "bow",
    name: { en: "Mouun’s Moon", "zh-CN": "曚云之月" },
    materials: ["Narukami's Wisdom", "Dismal Prism", "Spectral Husk"],
  },
  "Mitternachts Waltz": {
    rarity: 4,
    category: "bow",
    name: { en: "Mitternachts Waltz", "zh-CN": "幽夜华尔兹" },
    materials: ["Tile of Decarabian's Tower", "Heavy Horn", "Treasure Hoarder Insignia"],
  },
  Hamayumi: {
    rarity: 4,
    category: "bow",
    name: { en: "Hamayumi", "zh-CN": "破魔之弓" },
    materials: ["Narukami's Wisdom", "Dismal Prism", "Firm Arrowhead"],
  },
  "Favonius Warbow": {
    rarity: 4,
    category: "bow",
    name: { en: "Favonius Warbow", "zh-CN": "西风猎弓" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Whopperflower Nectar"],
  },
  "Compound Bow": {
    rarity: 4,
    category: "bow",
    name: { en: "Compound Bow", "zh-CN": "钢轮弓" },
    materials: ["Grain of Aerosiderite", "Fragile Bone Shard", "Recruit's Insignia"],
  },
  "Blackcliff Warbow": {
    rarity: 4,
    category: "bow",
    name: { en: "Blackcliff Warbow", "zh-CN": "黑岩战弓" },
    materials: ["Luminous Sands from Guyun", "Hunter's Sacrificial Knife", "Whopperflower Nectar"],
  },
  "Windblume Ode": {
    rarity: 4,
    category: "bow",
    name: { en: "Windblume Ode", "zh-CN": "风花之颂" },
    materials: ["Fetters of the Dandelion Gladiator", "Dead Ley Line Branch", "Whopperflower Nectar"],
  },
  "Raven Bow": {
    rarity: 3,
    category: "bow",
    name: { en: "Raven Bow", "zh-CN": "鸦羽弓" },
    materials: ["Tile of Decarabian's Tower", "Heavy Horn", "Firm Arrowhead"],
  },
  "Recurve Bow": {
    rarity: 3,
    category: "bow",
    name: { en: "Recurve Bow", "zh-CN": "反曲弓" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Divining Scroll"],
  },
  Messenger: {
    rarity: 3,
    category: "bow",
    name: { en: "Messenger", "zh-CN": "信使" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Treasure Hoarder Insignia"],
  },
  "Sharpshooter’s Oath": {
    rarity: 3,
    category: "bow",
    name: { en: "Sharpshooter's Oath", "zh-CN": "神射手之誓" },
    materials: ["Boreal Wolf's Milk Tooth", "Dead Ley Line Branch", "Slime Condensate"],
  },
  Slingshot: {
    rarity: 3,
    category: "bow",
    name: { en: "Slingshot", "zh-CN": "弹弓" },
    materials: ["Luminous Sands from Guyun", "Hunter's Sacrificial Knife", "Damaged Mask"],
  },
  "Lost Prayer to the Sacred Winds": {
    rarity: 5,
    category: "catalyst",
    name: { en: "Lost Prayer to the Sacred Winds", "zh-CN": "四风原典" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Slime Condensate"],
  },
  "Skyward Atlas": {
    rarity: 5,
    category: "catalyst",
    name: { en: "Skyward Atlas", "zh-CN": "天空之卷" },
    materials: ["Boreal Wolf's Milk Tooth", "Dead Ley Line Branch", "Firm Arrowhead"],
  },
  "Everlasting Moonglow": {
    rarity: 5,
    category: "catalyst",
    name: { en: "Everlasting Moonglow", "zh-CN": "不灭月华" },
    materials: ["Coral Branch of a Distant Sea", "Dismal Prism", "Spectral Husk"],
  },
  "Memory of Dust": {
    rarity: 5,
    category: "catalyst",
    name: { en: "Memory of Dust", "zh-CN": "尘世之锁" },
    materials: ["Grain of Aerosiderite", "Fragile Bone Shard", "Damaged Mask"],
  },
  "Wine and Song": {
    rarity: 4,
    category: "catalyst",
    name: { en: "Wine and Song", "zh-CN": "暗巷的酒与诗" },
    materials: ["Boreal Wolf's Milk Tooth", "Dead Ley Line Branch", "Treasure Hoarder Insignia"],
  },
  "The Widsith": {
    rarity: 4,
    category: "catalyst",
    name: { en: "The Widsith", "zh-CN": "流浪乐章" },
    materials: ["Boreal Wolf's Milk Tooth", "Dead Ley Line Branch", "Damaged Mask"],
  },
  "Solar Pearl": {
    rarity: 4,
    category: "catalyst",
    name: { en: "Solar Pearl", "zh-CN": "匣里日月" },
    materials: ["Luminous Sands from Guyun", "Hunter's Sacrificial Knife", "Whopperflower Nectar"],
  },
  "Sacrificial Fragments": {
    rarity: 4,
    category: "catalyst",
    name: { en: "Sacrificial Fragments", "zh-CN": "祭礼残章" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Treasure Hoarder Insignia"],
  },
  "Royal Grimoire": {
    rarity: 4,
    category: "catalyst",
    name: { en: "Royal Grimoire", "zh-CN": "宗室秘法录" },
    materials: ["Tile of Decarabian's Tower", "Heavy Horn", "Recruit's Insignia"],
  },
  "Prototype Amber": {
    rarity: 4,
    category: "catalyst",
    name: { en: "Prototype Amber", "zh-CN": "试作金珀" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Firm Arrowhead"],
  },
  "Mappa Mare": {
    rarity: 4,
    category: "catalyst",
    name: { en: "Mappa Mare", "zh-CN": "万国诸海图谱" },
    materials: ["Grain of Aerosiderite", "Fragile Bone Shard", "Slime Condensate"],
  },
  "Hakushin Ring": {
    rarity: 4,
    category: "catalyst",
    name: { en: "Hakushin Ring", "zh-CN": "白辰之环" },
    materials: ["Coral Branch of a Distant Sea", "Dismal Prism", "Divining Scroll"],
  },
  Frostbearer: {
    rarity: 4,
    category: "catalyst",
    name: { en: "Frostbearer", "zh-CN": "忍冬之果" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Whopperflower Nectar"],
  },
  "Favonius Codex": {
    rarity: 4,
    category: "catalyst",
    name: { en: "Favonius Codex", "zh-CN": "西风秘典" },
    materials: ["Tile of Decarabian's Tower", "Heavy Horn", "Divining Scroll"],
  },
  "Eye of Perception": {
    rarity: 4,
    category: "catalyst",
    name: { en: "Eye of Perception", "zh-CN": "昭心" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Damaged Mask"],
  },
  "Dodoco Tales": {
    rarity: 4,
    category: "catalyst",
    name: { en: "Dodoco Tales", "zh-CN": "嘟嘟可故事集" },
    materials: ["Boreal Wolf's Milk Tooth", "Dead Ley Line Branch", "Damaged Mask"],
  },
  "Blackcliff Agate": {
    rarity: 4,
    category: "catalyst",
    name: { en: "Blackcliff Agate", "zh-CN": "黑岩绯玉" },
    materials: ["Luminous Sands from Guyun", "Hunter's Sacrificial Knife", "Divining Scroll"],
  },
  "Magic Guide": {
    rarity: 3,
    category: "catalyst",
    name: { en: "Magic Guide", "zh-CN": "魔导绪论" },
    materials: ["Tile of Decarabian's Tower", "Heavy Horn", "Slime Condensate"],
  },
  "Otherworldly Story": {
    rarity: 3,
    category: "catalyst",
    name: { en: "Otherworldly Story", "zh-CN": "异世界行记" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Damaged Mask"],
  },
  "Emerald Orb": {
    rarity: 3,
    category: "catalyst",
    name: { en: "Emerald Orb", "zh-CN": "翡玉法球" },
    materials: ["Luminous Sands from Guyun", "Hunter's Sacrificial Knife", "Treasure Hoarder Insignia"],
  },
  "Thrilling Tales of Dragon Slayers": {
    rarity: 3,
    category: "catalyst",
    name: { en: "Thrilling Tales of Dragon Slayers", "zh-CN": "讨龙英杰谭" },
    materials: ["Boreal Wolf's Milk Tooth", "Dead Ley Line Branch", "Divining Scroll"],
  },
  "Twin Nephrite": {
    rarity: 3,
    category: "catalyst",
    name: { en: "Twin Nephrite", "zh-CN": "甲级宝珏" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Recruit's Insignia"],
  },
  "Wolf’s Gravestone": {
    rarity: 5,
    category: "claymore",
    name: { en: "Wolf's Gravestone", "zh-CN": "狼的末路" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Divining Scroll"],
  },
  "Skyward Pride": {
    rarity: 5,
    category: "claymore",
    name: { en: "Skyward Pride", "zh-CN": "天空之傲" },
    materials: ["Boreal Wolf's Milk Tooth", "Dead Ley Line Branch", "Slime Condensate"],
  },
  "The Unforged": {
    rarity: 5,
    category: "claymore",
    name: { en: "The Unforged", "zh-CN": "无工之剑" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Treasure Hoarder Insignia"],
  },
  "Song of Broken Pines": {
    rarity: 5,
    category: "claymore",
    name: { en: "Song of Broken Pines", "zh-CN": "松籁响起之时" },
    materials: ["Tile of Decarabian's Tower", "Heavy Horn", "Damaged Mask"],
  },
  "Redhorn Stonethresher": {
    rarity: 5,
    category: "claymore",
    name: { en: "Redhorn Stonethresher", "zh-CN": "赤角石溃杵" },
    materials: ["Narukami's Wisdom", "Concealed Claw", "Old Handguard"],
  },
  Akuoumaru: {
    rarity: 4,
    category: "claymore",
    name: { en: "Akuoumaru", "zh-CN": "恶王丸" },
    materials: ["Coral Branch of a Distant Sea", "Concealed Claw", "Old Handguard"],
  },
  "Royal Greatsword": {
    rarity: 4,
    category: "claymore",
    name: { en: "Royal Greatsword", "zh-CN": "宗室大剑" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Slime Condensate"],
  },
  Whiteblind: {
    rarity: 4,
    category: "claymore",
    name: { en: "Whiteblind", "zh-CN": "白影剑" },
    materials: ["Luminous Sands from Guyun", "Hunter's Sacrificial Knife", "Treasure Hoarder Insignia"],
  },
  "The Bell": {
    rarity: 4,
    category: "claymore",
    name: { en: "The Bell", "zh-CN": "钟剑" },
    materials: ["Tile of Decarabian's Tower", "Heavy Horn", "Whopperflower Nectar"],
  },
  "Snow-Tombed Starsilver": {
    rarity: 4,
    category: "claymore",
    name: { en: "Snow-Tombed Starsilver", "zh-CN": "雪葬的星银" },
    materials: ["Tile of Decarabian's Tower", "Heavy Horn", "Slime Condensate"],
  },
  "Favonius Greatsword": {
    rarity: 4,
    category: "claymore",
    name: { en: "Favonius Greatsword", "zh-CN": "西风大剑" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Recruit's Insignia"],
  },
  "Katsuragikiri Nagamasa": {
    rarity: 4,
    category: "claymore",
    name: { en: "Katsuragikiri Nagamasa", "zh-CN": "桂木斩长正" },
    materials: ["Narukami's Wisdom", "Chaos Gear", "Old Handguard"],
  },
  "Sacrificial Greatsword": {
    rarity: 4,
    category: "claymore",
    name: { en: "Sacrificial Greatsword", "zh-CN": "祭礼大剑" },
    materials: ["Boreal Wolf's Milk Tooth", "Dead Ley Line Branch", "Firm Arrowhead"],
  },
  "Serpent Spine": {
    rarity: 4,
    category: "claymore",
    name: { en: "Serpent Spine", "zh-CN": "螭骨剑" },
    materials: ["Grain of Aerosiderite", "Fragile Bone Shard", "Whopperflower Nectar"],
  },
  "Blackcliff Slasher": {
    rarity: 4,
    category: "claymore",
    name: { en: "Blackcliff Slasher", "zh-CN": "黑岩斩刀" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Recruit's Insignia"],
  },
  Rainslasher: {
    rarity: 4,
    category: "claymore",
    name: { en: "Rainslasher", "zh-CN": "雨裁" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Divining Scroll"],
  },
  "Prototype Archaic": {
    rarity: 4,
    category: "claymore",
    name: { en: "Prototype Archaic", "zh-CN": "试作古华" },
    materials: ["Grain of Aerosiderite", "Fragile Bone Shard", "Damaged Mask"],
  },
  "Luxurious Sea-Lord": {
    rarity: 4,
    category: "claymore",
    name: { en: "Luxurious Sea-Lord", "zh-CN": "衔珠海皇" },
    materials: ["Grain of Aerosiderite", "Fragile Bone Shard", "Slime Condensate"],
  },
  "Lithic Blade": {
    rarity: 4,
    category: "claymore",
    name: { en: "Lithic Blade", "zh-CN": "千岩古剑" },
    materials: ["Luminous Sands from Guyun", "Hunter's Sacrificial Knife", "Firm Arrowhead"],
  },
  "Skyrider Greatsword": {
    rarity: 3,
    category: "claymore",
    name: { en: "Skyrider Greatsword", "zh-CN": "飞天大御剑" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Damaged Mask"],
  },
  "Debate Club": {
    rarity: 3,
    category: "claymore",
    name: { en: "Debate Club", "zh-CN": "以理服人" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Damaged Mask"],
  },
  "Bloodtainted Greatsword": {
    rarity: 3,
    category: "claymore",
    name: { en: "Bloodtainted Greatsword", "zh-CN": "沐浴龙血的剑" },
    materials: ["Boreal Wolf's Milk Tooth", "Dead Ley Line Branch", "Firm Arrowhead"],
  },
  "White Iron Greatsword": {
    rarity: 3,
    category: "claymore",
    name: { en: "White Iron Greatsword", "zh-CN": "白铁大剑" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Slime Condensate"],
  },
  "Ferrous Shadow": {
    rarity: 3,
    category: "claymore",
    name: { en: "Ferrous Shadow", "zh-CN": "铁影阔剑" },
    materials: ["Tile of Decarabian's Tower", "Heavy Horn", "Whopperflower Nectar"],
  },
  "Engulfing Lightning": {
    rarity: 5,
    category: "polearm",
    name: { en: "Engulfing Lightning", "zh-CN": "薙草之稻光" },
    materials: ["Mask of the Wicked Lieutenant", "Chaos Gear", "Old Handguard"],
  },
  "Skyward Spine": {
    rarity: 5,
    category: "polearm",
    name: { en: "Skyward Spine", "zh-CN": "天空之脊" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Divining Scroll"],
  },
  "Primordial Jade Winged-Spear": {
    rarity: 5,
    category: "polearm",
    name: { en: "Primordial Jade Winged-Spear", "zh-CN": "和璞鸢" },
    materials: ["Luminous Sands from Guyun", "Hunter's Sacrificial Knife", "Recruit's Insignia"],
  },
  "Calamity Queller": {
    rarity: 5,
    category: "polearm",
    name: { en: "Calamity Queller", "zh-CN": "息灾" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Whopperflower Nectar"],
  },
  "Staff of Homa": {
    rarity: 5,
    category: "polearm",
    name: { en: "Staff of Homa", "zh-CN": "护摩之杖" },
    materials: ["Grain of Aerosiderite", "Dead Ley Line Branch", "Slime Condensate"],
  },
  "Vortex Vanquisher": {
    rarity: 5,
    category: "polearm",
    name: { en: "Vortex Vanquisher", "zh-CN": "贯虹之槊" },
    materials: ["Grain of Aerosiderite", "Fragile Bone Shard", "Treasure Hoarder Insignia"],
  },
  "Prototype Starglitter": {
    rarity: 4,
    category: "polearm",
    name: { en: "Prototype Starglitter", "zh-CN": "试作星镰" },
    materials: ["Grain of Aerosiderite", "Fragile Bone Shard", "Damaged Mask"],
  },
  "Lithic Spear": {
    rarity: 4,
    category: "polearm",
    name: { en: "Lithic Spear", "zh-CN": "千岩长枪" },
    materials: ["Grain of Aerosiderite", "Fragile Bone Shard", "Firm Arrowhead"],
  },
  "Kitain Cross Spear": {
    rarity: 4,
    category: "polearm",
    name: { en: "Kitain Cross Spear", "zh-CN": "喜多院十文字" },
    materials: ["Mask of the Wicked Lieutenant", "Chaos Gear", "Treasure Hoarder Insignia"],
  },
  "“The Catch”": {
    rarity: 4,
    category: "polearm",
    name: { en: "“The Catch”", "zh-CN": "「渔获」" },
    materials: ["Mask of the Wicked Lieutenant", "Chaos Gear", "Spectral Husk"],
  },
  "Favonius Lance": {
    rarity: 4,
    category: "polearm",
    name: { en: "Favonius Lance", "zh-CN": "西风长枪" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Slime Condensate"],
  },
  "Dragonspine Spear": {
    rarity: 4,
    category: "polearm",
    name: { en: "Dragonspine Spear", "zh-CN": "龙脊长枪" },
    materials: ["Boreal Wolf's Milk Tooth", "Mist Grass Pollen", "Recruit's Insignia"],
  },
  "Dragon’s Bane": {
    rarity: 4,
    category: "polearm",
    name: { en: "Dragon's Bane", "zh-CN": "匣里灭辰" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Divining Scroll"],
  },
  Deathmatch: {
    rarity: 4,
    category: "polearm",
    name: { en: "Deathmatch", "zh-CN": "决斗之枪" },
    materials: ["Boreal Wolf's Milk Tooth", "Dead Ley Line Branch", "Whopperflower Nectar"],
  },
  "Crescent Pike": {
    rarity: 4,
    category: "polearm",
    name: { en: "Crescent Pike", "zh-CN": "流月针" },
    materials: ["Luminous Sands from Guyun", "Hunter's Sacrificial Knife", "Treasure Hoarder Insignia"],
  },
  "Blackcliff Pole": {
    rarity: 4,
    category: "polearm",
    name: { en: "Blackcliff Pole", "zh-CN": "黑岩刺枪" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Recruit's Insignia"],
  },
  "Wavebreaker’s Fin": {
    rarity: 4,
    category: "polearm",
    name: { en: "Wavebreaker's Fin", "zh-CN": "断浪长鳍" },
    materials: ["Mask of the Wicked Lieutenant", "Concealed Claw", "Old Handguard"],
  },
  "Royal Spear": {
    rarity: 4,
    category: "polearm",
    name: { en: "Royal Spear", "zh-CN": "宗室猎枪" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Recruit's Insignia"],
  },
  Halberd: {
    rarity: 3,
    category: "polearm",
    name: { en: "Halberd", "zh-CN": "钺矛" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Whopperflower Nectar"],
  },
  "Black Tassel": {
    rarity: 3,
    category: "polearm",
    name: { en: "Black Tassel", "zh-CN": "黑缨枪" },
    materials: ["Grain of Aerosiderite", "Fragile Bone Shard", "Firm Arrowhead"],
  },
  "White Tassel": {
    rarity: 3,
    category: "polearm",
    name: { en: "White Tassel", "zh-CN": "白缨枪" },
    materials: ["Luminous Sands from Guyun", "Hunter's Sacrificial Knife", "Recruit's Insignia"],
  },
  "Mistsplitter Reforged": {
    rarity: 5,
    category: "sword",
    name: { en: "Mistsplitter Reforged", "zh-CN": "雾切之回光" },
    materials: ["Coral Branch of a Distant Sea", "Chaos Gear", "Old Handguard"],
  },
  "Aquila Favonia": {
    rarity: 5,
    category: "sword",
    name: { en: "Aquila Favonia", "zh-CN": "风鹰剑" },
    materials: ["Tile of Decarabian's Tower", "Heavy Horn", "Firm Arrowhead"],
  },
  "Summit Shaper": {
    rarity: 5,
    category: "sword",
    name: { en: "Summit Shaper", "zh-CN": "斫峰之刃" },
    materials: ["Luminous Sands from Guyun", "Hunter's Sacrificial Knife", "Damaged Mask"],
  },
  "Skyward Blade": {
    rarity: 5,
    category: "sword",
    name: { en: "Skyward Blade", "zh-CN": "天空之刃" },
    materials: ["Boreal Wolf's Milk Tooth", "Dead Ley Line Branch", "Slime Condensate"],
  },
  "Freedom-Sworn": {
    rarity: 5,
    category: "sword",
    name: { en: "Freedom-Sworn", "zh-CN": "苍古自由之誓" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Divining Scroll"],
  },
  "Primordial Jade Cutter": {
    rarity: 5,
    category: "sword",
    name: { en: "Primordial Jade Cutter", "zh-CN": "磐岩结绿" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Treasure Hoarder Insignia"],
  },
  "The Flute": {
    rarity: 4,
    category: "sword",
    name: { en: "The Flute", "zh-CN": "笛剑" },
    materials: ["Boreal Wolf's Milk Tooth", "Dead Ley Line Branch", "Slime Condensate"],
  },
  "The Black Sword": {
    rarity: 4,
    category: "sword",
    name: { en: "The Black Sword", "zh-CN": "黑剑" },
    materials: ["Boreal Wolf's Milk Tooth", "Dead Ley Line Branch", "Slime Condensate"],
  },
  "The Alley Flash": {
    rarity: 4,
    category: "sword",
    name: { en: "The Alley Flash", "zh-CN": "暗巷闪光" },
    materials: ["Tile of Decarabian's Tower", "Heavy Horn", "Divining Scroll"],
  },
  "Sword of Descension": {
    rarity: 4,
    category: "sword",
    name: { en: "Sword of Descension", "zh-CN": "降临之剑" },
    materials: ["Boreal Wolf's Milk Tooth", "Dead Ley Line Branch", "Treasure Hoarder Insignia"],
  },
  "Sacrificial Sword": {
    rarity: 4,
    category: "sword",
    name: { en: "Sacrificial Sword", "zh-CN": "祭礼剑" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Divining Scroll"],
  },
  "Royal Longsword": {
    rarity: 4,
    category: "sword",
    name: { en: "Royal Longsword", "zh-CN": "宗室长剑" },
    materials: ["Tile of Decarabian's Tower", "Heavy Horn", "Damaged Mask"],
  },
  "Prototype Rancour": {
    rarity: 4,
    category: "sword",
    name: { en: "Prototype Rancour", "zh-CN": "试作斩岩" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Recruit's Insignia"],
  },
  "Amenoma Kageuchi": {
    rarity: 4,
    category: "sword",
    name: { en: "Amenoma Kageuchi", "zh-CN": "天目影打刀" },
    materials: ["Coral Branch of a Distant Sea", "Chaos Gear", "Old Handguard"],
  },
  "Lion’s Roar": {
    rarity: 4,
    category: "sword",
    name: { en: "Lion's Roar", "zh-CN": "匣里龙吟" },
    materials: ["Luminous Sands from Guyun", "Hunter's Sacrificial Knife", "Treasure Hoarder Insignia"],
  },
  "Iron Sting": {
    rarity: 4,
    category: "sword",
    name: { en: "Iron Sting", "zh-CN": "铁蜂刺" },
    materials: ["Grain of Aerosiderite", "Fragile Bone Shard", "Whopperflower Nectar"],
  },
  "Festering Desire": {
    rarity: 4,
    category: "sword",
    name: { en: "Festering Desire", "zh-CN": "腐殖之剑" },
    materials: ["Fetters of the Dandelion Gladiator", "Heavy Horn", "Recruit's Insignia"],
  },
  "Favonius Sword": {
    rarity: 4,
    category: "sword",
    name: { en: "Favonius Sword", "zh-CN": "西风剑" },
    materials: ["Tile of Decarabian's Tower", "Heavy Horn", "Firm Arrowhead"],
  },
  "Cinnabar Spindle": {
    rarity: 4,
    category: "sword",
    name: { en: "Cinnabar Spindle", "zh-CN": "辰砂之纺锤" },
    materials: ["Tile of Decarabian's Tower", "Chaos Device", "Damaged Mask"],
  },
  "Blackcliff Longsword": {
    rarity: 4,
    category: "sword",
    name: { en: "Blackcliff Longsword", "zh-CN": "黑岩长剑" },
    materials: ["Luminous Sands from Guyun", "Hunter's Sacrificial Knife", "Firm Arrowhead"],
  },
  "Harbinger of Dawn": {
    rarity: 3,
    category: "sword",
    name: { en: "Harbinger of Dawn", "zh-CN": "黎明神剑" },
    materials: ["Boreal Wolf's Milk Tooth", "Dead Ley Line Branch", "Slime Condensate"],
  },
  "Fillet Blade": {
    rarity: 3,
    category: "sword",
    name: { en: "Fillet Blade", "zh-CN": "吃虎鱼刀" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Treasure Hoarder Insignia"],
  },
  "Skyrider Sword": {
    rarity: 3,
    category: "sword",
    name: { en: "Skyrider Sword", "zh-CN": "飞天御剑" },
    materials: ["Grain of Aerosiderite", "Fragile Bone Shard", "Recruit's Insignia"],
  },
  "Dark Iron Sword": {
    rarity: 3,
    category: "sword",
    name: { en: "Dark Iron Sword", "zh-CN": "暗铁剑" },
    materials: ["Luminous Sands from Guyun", "Hunter's Sacrificial Knife", "Damaged Mask"],
  },
  "Cool Steel": {
    rarity: 3,
    category: "sword",
    name: { en: "Cool Steel", "zh-CN": "冷刃" },
    materials: ["Tile of Decarabian's Tower", "Heavy Horn", "Firm Arrowhead"],
  },
  "Traveler’s Handy Sword": {
    rarity: 3,
    category: "sword",
    name: { en: "Traveler's Handy Sword", "zh-CN": "旅行剑" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Divining Scroll"],
  },
};

// materials

/**
 * id: base level of each type
 * name: all levels
 */
export const materials = {
  // common
  "Slime Condensate": {
    name: {
      en: ["Slime Condensate", "Slime Secretions", "Slime Concentrate"],
      "zh-CN": ["史莱姆凝液", "史莱姆清", "史莱姆原浆"],
    },
  },
  "Damaged Mask": {
    name: { en: ["Damaged Mask", "Stained Mask", "Ominous Mask"], "zh-CN": ["破损的面具", "污秽的面具", "不祥的面具"] },
  },
  "Divining Scroll": {
    name: {
      en: ["Divining Scroll", "Sealed Scroll", "Forbidden Curse Scroll"],
      "zh-CN": ["导能绘卷", "封魔绘卷", "禁咒绘卷"],
    },
  },
  "Firm Arrowhead": {
    name: {
      en: ["Firm Arrowhead", "Sharp Arrowhead", "Weathered Arrowhead"],
      "zh-CN": ["牢固的箭簇", "锐利的箭簇", "历战的箭簇"],
    },
  },
  "Heavy Horn": {
    name: {
      en: ["Heavy Horn", "Black Bronze Horn", "Black Crystal Horn"],
      "zh-CN": ["沉重号角", "黑铜号角", "黑晶号角"],
    },
  },
  "Dead Ley Line Branch": {
    name: {
      en: ["Dead Ley Line Branch", "Dead Ley Line Leaves", "Ley Line Sprout"],
      "zh-CN": ["地脉的旧枝", "地脉的枯叶", "地脉的新芽"],
    },
  },
  "Chaos Device": {
    name: { en: ["Chaos Device", "Chaos Circuit", "Chaos Core"], "zh-CN": ["混沌装置", "混沌回路", "混沌炉心"] },
  },
  "Mist Grass Pollen": {
    name: { en: ["Mist Grass Pollen", "Mist Grass", "Mist Grass Wick"], "zh-CN": ["雾虚花粉", "雾虚草囊", "雾虚灯芯"] },
  },
  "Hunter's Sacrificial Knife": {
    name: {
      en: ["Hunter's Sacrificial Knife", "Agent's Sacrificial Knife", "Inspector's Sacrificial Knife"],
      "zh-CN": ["猎兵祭刀", "特工祭刀", "督察长祭刀"],
    },
  },
  "Recruit's Insignia": {
    name: {
      en: ["Recruit's Insignia", "Sergeant's Insignia", "Lieutenant's Insignia"],
      "zh-CN": ["新兵的徽记", "士官的徽记", "尉官的徽记"],
    },
  },
  "Treasure Hoarder Insignia": {
    name: {
      en: ["Treasure Hoarder Insignia", "Silver Raven Insignia", "Golden Raven Insignia"],
      "zh-CN": ["寻宝鸦印", "藏银鸦印", "攫金鸦印"],
    },
  },
  "Whopperflower Nectar": {
    name: {
      en: ["Whopperflower Nectar", "Shimmering Nectar", "Energy Nectar"],
      "zh-CN": ["骗骗花蜜", "微光花蜜", "原素花蜜"],
    },
  },
  "Fragile Bone Shard": {
    name: {
      en: ["Fragile Bone Shard", "Sturdy Bone Shard", "Fossilized Bone Shard"],
      "zh-CN": ["脆弱的骨片", "结实的骨片", "石化的骨片"],
    },
  },
  "Old Handguard": {
    name: {
      en: ["Old Handguard", "Kageuchi Handguard", "Famed Handguard"],
      "zh-CN": ["破旧的刀镡", "影打刀镡", "名刀镡"],
    },
  },
  "Chaos Gear": {
    name: { en: ["Chaos Gear", "Chaos Axis", "Chaos Oculus"], "zh-CN": ["混沌机关", "混沌枢纽", "混沌真眼"] },
  },
  "Dismal Prism": {
    name: { en: ["Dismal Prism", "Crystal Prism", "Polarizing Prism"], "zh-CN": ["黯淡棱镜", "水晶棱镜", "偏光棱镜"] },
  },
  "Spectral Husk": {
    name: {
      en: ["Spectral Husk", "Spectral Heart", "Spectral Nucleus"],
      "zh-CN": ["浮游干核", "浮游幽核", "浮游晶化核"],
    },
  },
  "Concealed Claw": {
    name: {
      en: ["Concealed Claw", "Concealed Unguis", "Concealed Talon"],
      "zh-CN": ["隐兽指爪", "隐兽利爪", "隐兽鬼爪"],
    },
  },

  // character ascension
  "Brilliant Diamond": { name: { en: ["Brilliant Diamond"], "zh-CN": ["璀璨原钻"] } },
  "Agnidus Agate": { name: { en: ["Agnidus Agate"], "zh-CN": ["燃愿玛瑙"] } },
  "Varunada Lazurite": { name: { en: ["Varunada Lazurite"], "zh-CN": ["涤净青金"] } },
  "Vajrada Amethyst": { name: { en: ["Vajrada Amethyst"], "zh-CN": ["最胜紫晶"] } },
  "Vayuda Turquoise": { name: { en: ["Vayuda Turquoise"], "zh-CN": ["自在松石"] } },
  "Shivada Jade": { name: { en: ["Shivada Jade"], "zh-CN": ["哀叙冰玉"] } },
  "Prithiva Topaz": { name: { en: ["Prithiva Topaz"], "zh-CN": ["坚牢黄玉"] } },
  "Hurricane Seed": { name: { en: ["Hurricane Seed"], "zh-CN": ["飓风之种"] } },
  "Lightning Prism": { name: { en: ["Lightning Prism"], "zh-CN": ["雷光棱镜"] } },
  "Basalt Pillar": { name: { en: ["Basalt Pillar"], "zh-CN": ["玄岩之塔"] } },
  "Hoarfrost Core": { name: { en: ["Hoarfrost Core"], "zh-CN": ["极寒之核"] } },
  "Everflame Seed": { name: { en: ["Everflame Seed"], "zh-CN": ["常燃火种"] } },
  "Cleansing Heart": { name: { en: ["Cleansing Heart"], "zh-CN": ["净水之心"] } },
  "Juvenile Jade": { name: { en: ["Juvenile Jade"], "zh-CN": ["未熟之玉"] } },
  "Crystalline Bloom": { name: { en: ["Crystalline Bloom"], "zh-CN": ["晶凝之华"] } },
  "Marionette Core": { name: { en: ["Marionette Core"], "zh-CN": ["魔偶机心"] } },
  "Perpetual Heart": { name: { en: ["Perpetual Heart"], "zh-CN": ["恒常机关之心"] } },
  "Smoldering Pearl": { name: { en: ["Smoldering Pearl"], "zh-CN": ["阴燃之珠"] } },
  "Dew of Repudiation": { name: { en: ["Dew of Repudiation"], "zh-CN": ["排异之露"] } },
  "Storm Beads": { name: { en: ["Storm Beads"], "zh-CN": ["雷霆数珠"] } },
  "Riftborn Regalia": { name: { en: ["Riftborn Regalia"], "zh-CN": ["兽境王器"] } },
  "Dragonheir's False Fin": { name: { en: ["Dragonheir's False Fin"], "zh-CN": ["龙嗣伪鳍"] } },

  // character talents
  Freedom: { name: { en: ["Freedom"], "zh-CN": ["自由"] } },
  Resistance: { name: { en: ["Resistance"], "zh-CN": ["抗争"] } },
  Ballad: { name: { en: ["Ballad"], "zh-CN": ["诗文"] } },
  Prosperity: { name: { en: ["Prosperity"], "zh-CN": ["繁荣"] } },
  Diligence: { name: { en: ["Diligence"], "zh-CN": ["勤劳"] } },
  Gold: { name: { en: ["Gold"], "zh-CN": ["黄金"] } },
  Transience: { name: { en: ["Transience"], "zh-CN": ["浮世"] } },
  Elegance: { name: { en: ["Elegance"], "zh-CN": ["风雅"] } },
  Light: { name: { en: ["Light"], "zh-CN": ["天光"] } },
  "Crown of Insight": { name: { en: ["Crown of Insight"], "zh-CN": ["智识之冕"] } },
  "Dvalin's Plume": { name: { en: ["Dvalin's Plume"], "zh-CN": ["东风之翎"] } },
  "Dvalin's Claw": { name: { en: ["Dvalin's Claw"], "zh-CN": ["东风之爪"] } },
  "Dvalin's Sigh": { name: { en: ["Dvalin's Sigh"], "zh-CN": ["东风的吐息"] } },
  "Tail of Boreas": { name: { en: ["Tail of Boreas"], "zh-CN": ["北风之尾"] } },
  "Ring of Boreas": { name: { en: ["Ring of Boreas"], "zh-CN": ["北风之环"] } },
  "Spirit Locket of Boreas": { name: { en: ["Spirit Locket of Boreas"], "zh-CN": ["北风的魂匣"] } },
  "Tusk of Monoceros Caeli": { name: { en: ["Tusk of Monoceros Caeli"], "zh-CN": ["吞天之鲸・只角"] } },
  "Shard of a Foul Legacy": { name: { en: ["Shard of a Foul Legacy"], "zh-CN": ["魔王之刃・残片"] } },
  "Shadow of the Warrior": { name: { en: ["Shadow of the Warrior"], "zh-CN": ["武炼之魂・孤影"] } },
  "Dragon Lord's Crown": { name: { en: ["Dragon Lord's Crown"], "zh-CN": ["龙王之冕"] } },
  "Bloodjade Branch": { name: { en: ["Bloodjade Branch"], "zh-CN": ["血玉之枝"] } },
  "Gilded Scale": { name: { en: ["Gilded Scale"], "zh-CN": ["鎏金之鳞"] } },
  "Molten Moment": { name: { en: ["Molten Moment"], "zh-CN": ["熔毁之刻"] } },
  "Hellfire Butterfly": { name: { en: ["Hellfire Butterfly"], "zh-CN": ["狱火之蝶"] } },
  "Ashen Heart": { name: { en: ["Ashen Heart"], "zh-CN": ["灰烬之心"] } },

  // weapons
  "Tile of Decarabian's Tower": {
    name: {
      en: [
        "Tile of Decarabian's Tower",
        "Debris of Decarabian's City",
        "Fragment of Decarabian's Epic",
        "Scattered Piece of Decarabian's Dream",
      ],
      "zh-CN": ["高塔孤王的破瓦", "高塔孤王的残垣", "高塔孤王的断片", "高塔孤王的碎梦"],
    },
  },
  "Boreal Wolf's Milk Tooth": {
    name: {
      en: [
        "Boreal Wolf's Milk Tooth",
        "Boreal Wolf's Cracked Tooth",
        "Boreal Wolf's Broken Fang",
        "Boreal Wolf's Nostalgia",
      ],
      "zh-CN": ["凛风奔狼的始龀", "凛风奔狼的裂齿", "凛风奔狼的断牙", "凛风奔狼的怀乡"],
    },
  },
  "Fetters of the Dandelion Gladiator": {
    name: {
      en: [
        "Fetters of the Dandelion Gladiator",
        "Chains of the Dandelion Gladiator",
        "Shackles of the Dandelion Gladiator",
        "Dream of the Dandelion Gladiator",
      ],
      "zh-CN": ["狮牙斗士的枷锁", "狮牙斗士的铁链", "狮牙斗士的镣铐", "狮牙斗士的理想"],
    },
  },
  "Luminous Sands from Guyun": {
    name: {
      en: ["Luminous Sands from Guyun", "Lustrous Stone from Guyun", "Relic from Guyun", "Divine Body from Guyun"],
      "zh-CN": ["孤云寒林的光砂", "孤云寒林的辉岩", "孤云寒林的圣骸", "孤云寒林的神体"],
    },
  },
  "Mist Veiled Lead Elixir": {
    name: {
      en: [
        "Mist Veiled Lead Elixir",
        "Mist Veiled Mercury Elixir",
        "Mist Veiled Gold Elixir",
        "Mist Veiled Primo Elixir",
      ],
      "zh-CN": ["雾海云间的铅丹", "雾海云间的汞丹", "雾海云间的金丹", "雾海云间的转还"],
    },
  },
  "Grain of Aerosiderite": {
    name: {
      en: ["Grain of Aerosiderite", "Piece of Aerosiderite", "Bit of Aerosiderite", "Chunk of Aerosiderite"],
      "zh-CN": ["漆黑陨铁的一粒", "漆黑陨铁的一片", "漆黑陨铁的一角", "漆黑陨铁的一块"],
    },
  },
  "Coral Branch of a Distant Sea": {
    name: {
      en: [
        "Coral Branch of a Distant Sea",
        "Jeweled Branch of a Distant Sea",
        "Jade Branch of a Distant Sea",
        "Golden Branch of a Distant Sea",
      ],
      "zh-CN": ["远海夷地的瑚枝", "远海夷地的玉枝", "远海夷地的琼枝", "远海夷地的金枝"],
    },
  },
  "Narukami's Wisdom": {
    name: {
      en: ["Narukami's Wisdom", "Narukami's Joy", "Narukami's Affection", "Narukami's Valor"],
      "zh-CN": ["鸣神御灵的明惠", "鸣神御灵的欢喜", "鸣神御灵的亲爱", "鸣神御灵的勇武"],
    },
  },
  "Mask of the Wicked Lieutenant": {
    name: {
      en: ["Mask of the Wicked Lieutenant", "Mask of the Tiger's Bite", "Mask of the One-Horned", "Mask of the Kijin"],
      "zh-CN": ["今昔剧画之恶尉", "今昔剧画之虎啮", "今昔剧画之一角", "今昔剧画之鬼人"],
    },
  },
};

// enemies

export const enemy_ids = {
  weekly_bosses: [
    "Confront Stormterror",
    "Enter the Golden House",
    "Narukami Island: Tenshukaku",
    "Beneath the Dragon-Queller",
    "Wolf of the North Challenge",
  ],
  bosses: [
    "Electro Hypostasis",
    "Anemo Hypostasis",
    "Cryo Regisvine",
    "Geo Hypostasis",
    "Rhodeia of Loch",
    "Pyro Regisvine",
    "Primo Geovishap",
    "Cryo Hypostasis",
    "Maguu Kenki",
    "Pyro Hypostasis",
    "Perpetual Mechanical Array",
    "Hydro Hypostasis",
    "Thunder Manifestation",
    "Golden Wolflord",
    "Bathysmal Vishap Herd",
  ],
  talent_domains: ["Forsaken Rift", "Taishan Mansion", "Violet Court"],
  weapon_domains: ["Cecilia Garden", "Hidden Palace of Lianshan Formula", "Court of Flowing Sand"],
};

export const domains = {
  "Cecilia Garden": {
    name: { en: "Cecilia Garden", "zh-CN": "塞西莉亚苗圃" },
    type: "weapon_domain",
    materials_by_weekday: [
      "All",
      "Tile of Decarabian's Tower",
      "Boreal Wolf's Milk Tooth",
      "Fetters of the Dandelion Gladiator",
    ],
  },
  "Hidden Palace of Lianshan Formula": {
    name: { en: "Hidden Palace of Lianshan Formula", "zh-CN": "震雷连山密宫" },
    type: "weapon_domain",
    materials_by_weekday: ["All", "Luminous Sands from Guyun", "Mist Veiled Lead Elixir", "Grain of Aerosiderite"],
  },
  "Court of Flowing Sand": {
    name: { en: "Court of Flowing Sand", "zh-CN": "砂流之庭" },
    type: "weapon_domain",
    materials_by_weekday: [
      "All",
      "Coral Branch of a Distant Sea",
      "Narukami's Wisdom",
      "Mask of the Wicked Lieutenant",
    ],
  },
  "Forsaken Rift": {
    name: { en: "Forsaken Rift", "zh-CN": "忘却之峡" },
    type: "talent_domain",
    materials_by_weekday: ["All", "Freedom", "Resistance", "Ballad"],
  },
  "Taishan Mansion": {
    name: { en: "Taishan Mansion", "zh-CN": "太山府" },
    type: "talent_domain",
    materials_by_weekday: ["All", "Prosperity", "Diligence", "Gold"],
  },
  "Violet Court": {
    name: { en: "Violet Court", "zh-CN": "菫色之庭" },
    type: "talent_domain",
    materials_by_weekday: ["All", "Transience", "Elegance", "Light"],
  },
};

export const bosses = {
  "Anemo Hypostasis": {
    materials: ["Vayuda Turquoise", "Hurricane Seed"],
    type: "boss",
    name: { en: "Anemo Hypostasis", "zh-CN": "无相之风" },
  },
  "Bathysmal Vishap Herd": {
    materials: ["Shivada Jade", "Vajrada Amethyst", "Dragonheir's False Fin"],
    type: "boss",
    name: { en: "Bathysmal Vishap Herd", "zh-CN": "深海龙蜥" },
  },
  "Cryo Hypostasis": {
    materials: ["Shivada Jade", "Crystalline Bloom"],
    type: "boss",
    name: { en: "Cryo Hypostasis", "zh-CN": "无相之冰" },
  },
  "Cryo Regisvine": {
    materials: ["Shivada Jade", "Hoarfrost Core"],
    type: "boss",
    name: { en: "Cryo Regisvine", "zh-CN": "急冻树" },
  },
  "Electro Hypostasis": {
    materials: ["Vajrada Amethyst", "Lightning Prism"],
    type: "boss",
    name: { en: "Electro Hypostasis", "zh-CN": "无相之雷" },
  },
  "Geo Hypostasis": {
    materials: ["Prithiva Topaz", "Basalt Pillar"],
    type: "boss",
    name: { en: "Geo Hypostasis", "zh-CN": "无相之岩" },
  },
  "Golden Wolflord": {
    materials: ["Prithiva Topaz", "Riftborn Regalia"],
    type: "boss",
    name: { en: "Golden Wolflord", "zh-CN": "黄金王兽" },
  },
  "Hydro Hypostasis": {
    materials: ["Varunada Lazurite", "Dew of Repudiation"],
    type: "boss",
    name: { en: "Hydro Hypostasis", "zh-CN": "无相之水" },
  },
  "Maguu Kenki": {
    materials: ["Vayuda Turquoise", "Shivada Jade", "Marionette Core"],
    type: "boss",
    name: { en: "Maguu Kenki", "zh-CN": "魔偶剑鬼" },
  },
  "Perpetual Mechanical Array": {
    materials: ["Prithiva Topaz", "Shivada Jade", "Perpetual Heart"],
    type: "boss",
    name: { en: "Perpetual Mechanical Array", "zh-CN": "恒常机关阵列" },
  },
  "Primo Geovishap": {
    materials: [
      "Prithiva Topaz",
      "Shivada Jade",
      "Agnidus Agate",
      "Varunada Lazurite",
      "Vajrada Amethyst",
      "Juvenile Jade",
    ],
    type: "boss",
    name: { en: "Primo Geovishap", "zh-CN": "古岩龙蜥" },
  },
  "Pyro Hypostasis": {
    materials: ["Agnidus Agate", "Smoldering Pearl"],
    type: "boss",
    name: { en: "Pyro Hypostasis", "zh-CN": "无相之火" },
  },
  "Pyro Regisvine": {
    materials: ["Agnidus Agate", "Everflame Seed"],
    type: "boss",
    name: { en: "Pyro Regisvine", "zh-CN": "爆炎树" },
  },
  "Rhodeia of Loch": {
    materials: ["Varunada Lazurite", "Cleansing Heart"],
    type: "boss",
    name: { en: "Rhodeia of Loch", "zh-CN": "纯水精灵" },
  },
  "Thunder Manifestation": {
    materials: ["Vajrada Amethyst", "Storm Beads"],
    type: "boss",
    name: { en: "Thunder Manifestation", "zh-CN": "雷音权现" },
  },

  // weekly bosses
  "Wolf of the North Challenge": {
    materials: [
      "Shivada Jade",
      "Agnidus Agate",
      "Prithiva Topaz",
      "Tail of Boreas",
      "Ring of Boreas",
      "Spirit Locket of Boreas",
    ],
    type: "weekly_boss",
    name: { en: "Wolf of the North Challenge / Andrius", "zh-CN": "北风的王狼 / 安德留斯" },
  },
  "Confront Stormterror": {
    materials: [
      "Vayuda Turquoise",
      "Vajrada Amethyst",
      "Varunada Lazurite",
      "Dvalin's Plume",
      "Dvalin's Claw",
      "Dvalin's Sigh",
    ],
    type: "weekly_boss",
    name: { en: "Confront Stormterror / Dvalin", "zh-CN": "深入风龙废墟 / 风魔龙・特瓦林" },
  },
  "Enter the Golden House": {
    materials: [
      "Varunada Lazurite",
      "Vajrada Amethyst",
      "Shivada Jade",
      "Tusk of Monoceros Caeli",
      "Shard of a Foul Legacy",
      "Shadow of the Warrior",
    ],
    type: "weekly_boss",
    name: { en: "Enter the Golden House / Childe", "zh-CN": "进入「黄金屋」 / 公子" },
  },
  "Beneath the Dragon-Queller": {
    materials: [
      "Agnidus Agate",
      "Shivada Jade",
      "Prithiva Topaz",
      "Varunada Lazurite",
      "Vajrada Amethyst",
      "Dragon Lord's Crown",
      "Bloodjade Branch",
      "Gilded Scale",
    ],
    type: "weekly_boss",
    name: { en: "Beneath the Dragon-Queller / Azhdaha", "zh-CN": "「伏龙树」之底 / 若陀龙王" },
  },
  "Narukami Island: Tenshukaku": {
    materials: ["Shivada Jade", "Agnidus Agate", "Molten Moment", "Hellfire Butterfly", "Ashen Heart"],
    type: "weekly_boss",
    name: { en: "Narukami Island: Tenshukaku / La Signora", "zh-CN": "鸣神岛・天守 / 女士" },
  },
};

export const i18n = {
  supported_languages: { en: "English", "zh-CN": "简体中文" },
  delimiter: { en: " · ", "zh-CN": "・" },
  weekdays: {
    mon_thu: { en: "Mon, Thu, Sun", "zh-CN": "一四日" },
    tue_fri: { en: "Tue, Fri, Sun", "zh-CN": "二五日" },
    wed_sat: { en: "Wed, Sat, Sun", "zh-CN": "三六日" },
  },
  rarity: {
    en: "Rarity",
    "zh-CN": "稀有度",
  },
  character: {
    en: "Characters",
    "zh-CN": "角色",
  },
  weapon: {
    en: "Weapons",
    "zh-CN": "武器",
  },
  enemies_domains: {
    en: "Enemies & Domains",
    "zh-CN": "秘境讨伐",
  },
  weekly_boss: {
    en: "Weekly Bosses",
    "zh-CN": "周本",
  },
  boss: {
    en: "Bosses",
    "zh-CN": "首领",
  },
  talent_domain: {
    en: "Talent Domains",
    "zh-CN": "天赋本",
  },
  weapon_domain: {
    en: "Weapon Domains",
    "zh-CN": "武器本",
  },
  type: {
    en: "Type",
    "zh-CN": "类型",
  },
};
