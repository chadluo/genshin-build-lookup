"use strict";

// characters

export const characters = {
  Albedo: {
    name: { en: "Albedo", zh_CN: "阿贝多" },
    materials: ["Prithiva Topaz", "Basalt Pillar", "Tusk of Monoceros Caeli", "Ballad", "Divining Scroll"],
  },
  Aloy: {
    name: { en: "Aloy", zh_CN: "埃洛伊" },
    materials: ["Shivada Jade", "Crystalline Bloom", "Molten Moment", "Freedom", "Spectral Husk"],
  },
  Amber: {
    name: { en: "Amber", zh_CN: "安柏" },
    materials: ["Agnidus Agate", "Everflame Seed", "Dvalin's Sigh", "Freedom", "Firm Arrowhead"],
  },
  "Arataki Itto": {
    name: { en: "Arataki Itto", zh_CN: "荒泷一斗" },
    materials: ["Prithiva Topaz", "Riftborn Regalia", "Ashen Heart", "Elegance", "Slime Condensate"],
  },
  Barbara: {
    name: { en: "Barbara", zh_CN: "芭芭拉" },
    materials: ["Varunada Lazurite", "Cleansing Heart", "Ring of Boreas", "Freedom", "Divining Scroll"],
  },
  Beidou: {
    name: { en: "Beidou", zh_CN: "北斗" },
    materials: ["Vajrada Amethyst", "Lightning Prism", "Dvalin's Sigh", "Gold", "Treasure Hoarder Insignia"],
  },
  Bennett: {
    name: { en: "Bennett", zh_CN: "班尼特" },
    materials: ["Agnidus Agate", "Everflame Seed", "Dvalin's Plume", "Resistance", "Treasure Hoarder Insignia"],
  },
  Chongyun: {
    name: { en: "Chongyun", zh_CN: "重云" },
    materials: ["Shivada Jade", "Hoarfrost Core", "Dvalin's Sigh", "Diligence", "Damaged Mask"],
  },
  Diluc: {
    name: { en: "Diluc", zh_CN: "迪卢克" },
    materials: ["Agnidus Agate", "Everflame Seed", "Dvalin's Plume", "Resistance", "Recruit's Insignia"],
  },
  Diona: {
    name: { en: "Diona", zh_CN: "迪奥娜" },
    materials: ["Shivada Jade", "Hoarfrost Core", "Shard of a Foul Legacy", "Freedom", "Firm Arrowhead"],
  },
  Eula: {
    name: { en: "Eula", zh_CN: "优菈" },
    materials: ["Shivada Jade", "Crystalline Bloom", "Dragon Lord's Crown", "Resistance", "Damaged Mask"],
  },
  Fischl: {
    name: { en: "Fischl", zh_CN: "菲谢尔" },
    materials: ["Vajrada Amethyst", "Lightning Prism", "Spirit Locket of Boreas", "Ballad", "Firm Arrowhead"],
  },
  Ganyu: {
    name: { en: "Ganyu", zh_CN: "甘雨" },
    materials: ["Shivada Jade", "Hoarfrost Core", "Shadow of the Warrior", "Diligence", "Whopperflower Nectar"],
  },
  Gorou: {
    name: { en: "Gorou", zh_CN: "五郎" },
    materials: ["Prithiva Topaz", "Perpetual Heart", "Molten Moment", "Light", "Spectral Husk"],
  },
  "Hu Tao": {
    name: { en: "Hu Tao", zh_CN: "胡桃" },
    materials: ["Agnidus Agate", "Juvenile Jade", "Shard of a Foul Legacy", "Diligence", "Whopperflower Nectar"],
  },
  Jean: {
    name: { en: "Jean", zh_CN: "琴" },
    materials: ["Vayuda Turquoise", "Hurricane Seed", "Dvalin's Plume", "Resistance", "Damaged Mask"],
  },
  "Kaedehara Kazuha": {
    name: { en: "Kaedehara Kazuha", zh_CN: "枫原万叶" },
    materials: ["Vayuda Turquoise", "Marionette Core", "Gilded Scale", "Diligence", "Treasure Hoarder Insignia"],
  },
  Kaeya: {
    name: { en: "Kaeya", zh_CN: "凯亚" },
    materials: ["Shivada Jade", "Hoarfrost Core", "Spirit Locket of Boreas", "Ballad", "Treasure Hoarder Insignia"],
  },
  "Kamisato Ayaka": {
    name: { en: "Kamisato Ayaka", zh_CN: "神里绫华" },
    materials: ["Shivada Jade", "Perpetual Heart", "Bloodjade Branch", "Elegance", "Old Handguard"],
  },
  Keqing: {
    name: { en: "Keqing", zh_CN: "刻晴" },
    materials: ["Vajrada Amethyst", "Lightning Prism", "Ring of Boreas", "Prosperity", "Whopperflower Nectar"],
  },
  Klee: {
    name: { en: "Klee", zh_CN: "可莉" },
    materials: ["Agnidus Agate", "Everflame Seed", "Ring of Boreas", "Freedom", "Divining Scroll"],
  },
  "Kujou Sara": {
    name: { en: "Kujou Sara", zh_CN: "九条裟罗" },
    materials: ["Vajrada Amethyst", "Storm Beads", "Ashen Heart", "Elegance", "Damaged Mask"],
  },
  Lisa: {
    name: { en: "Lisa", zh_CN: "丽莎" },
    materials: ["Vajrada Amethyst", "Lightning Prism", "Dvalin's Claw", "Ballad", "Slime Condensate"],
  },
  Mona: {
    name: { en: "Mona", zh_CN: "莫娜" },
    materials: ["Varunada Lazurite", "Cleansing Heart", "Ring of Boreas", "Resistance", "Whopperflower Nectar"],
  },
  Ningguang: {
    name: { en: "Ningguang", zh_CN: "凝光" },
    materials: ["Prithiva Topaz", "Basalt Pillar", "Spirit Locket of Boreas", "Prosperity", "Recruit's Insignia"],
  },
  Noelle: {
    name: { en: "Noelle", zh_CN: "诺艾尔" },
    materials: ["Prithiva Topaz", "Basalt Pillar", "Dvalin's Claw", "Resistance", "Damaged Mask"],
  },
  Qiqi: {
    name: { en: "Qiqi", zh_CN: "七七" },
    materials: ["Shivada Jade", "Hoarfrost Core", "Tail of Boreas", "Prosperity", "Divining Scroll"],
  },
  "Raiden Shogun": {
    name: { en: "Raiden Shogun", zh_CN: "雷电将军" },
    materials: ["Vajrada Amethyst", "Storm Beads", "Molten Moment", "Light", "Old Handguard"],
  },
  Razor: {
    name: { en: "Razor", zh_CN: "雷泽" },
    materials: ["Vajrada Amethyst", "Lightning Prism", "Dvalin's Claw", "Resistance", "Damaged Mask"],
  },
  Rosaria: {
    name: { en: "Rosaria", zh_CN: "罗莎莉亚" },
    materials: ["Shivada Jade", "Hoarfrost Core", "Shadow of the Warrior", "Ballad", "Recruit's Insignia"],
  },
  "Sangonomiya Kokomi": {
    name: { en: "Sangonomiya Kokomi", zh_CN: "珊瑚宫心海" },
    materials: ["Varunada Lazurite", "Dew of Repudiation", "Hellfire Butterfly", "Transience", "Spectral Husk"],
  },
  Sayu: {
    name: { en: "Sayu", zh_CN: "早柚" },
    materials: ["Vayuda Turquoise", "Marionette Core", "Gilded Scale", "Light", "Whopperflower Nectar"],
  },
  Shenhe: {
    name: { en: "Shenhe", zh_CN: "申鹤" },
    materials: ["Shivada Jade", "Dragonheir's False Fin", "Hellfire Butterfly", "Prosperity", "Whopperflower Nectar"],
  },
  Sucrose: {
    name: { en: "Sucrose", zh_CN: "砂糖" },
    materials: ["Vayuda Turquoise", "Hurricane Seed", "Spirit Locket of Boreas", "Freedom", "Whopperflower Nectar"],
  },
  Tartaglia: {
    name: { en: "Tartaglia", zh_CN: "达达利亚" },
    materials: ["Varunada Lazurite", "Cleansing Heart", "Shard of a Foul Legacy", "Freedom", "Recruit's Insignia"],
  },
  Thoma: {
    name: { en: "Thoma", zh_CN: "托马" },
    materials: ["Agnidus Agate", "Smoldering Pearl", "Hellfire Butterfly", "Transience", "Treasure Hoarder Insignia"],
  },
  Venti: {
    name: { en: "Venti", zh_CN: "温迪" },
    materials: ["Vayuda Turquoise", "Hurricane Seed", "Tail of Boreas", "Ballad", "Slime Condensate"],
  },
  Xiangling: {
    name: { en: "Xiangling", zh_CN: "香菱" },
    materials: ["Agnidus Agate", "Everflame Seed", "Dvalin's Claw", "Diligence", "Slime Condensate"],
  },
  Xiao: {
    name: { en: "Xiao", zh_CN: "魈" },
    materials: ["Vayuda Turquoise", "Juvenile Jade", "Shadow of the Warrior", "Prosperity", "Slime Condensate"],
  },
  Xingqiu: {
    name: { en: "Xingqiu", zh_CN: "行秋" },
    materials: ["Varunada Lazurite", "Cleansing Heart", "Tail of Boreas", "Gold", "Damaged Mask"],
  },
  Xinyan: {
    name: { en: "Xinyan", zh_CN: "辛焱" },
    materials: ["Agnidus Agate", "Everflame Seed", "Tusk of Monoceros Caeli", "Gold", "Treasure Hoarder Insignia"],
  },
  Yanfei: {
    name: { en: "Yanfei", zh_CN: "烟绯" },
    materials: ["Agnidus Agate", "Juvenile Jade", "Bloodjade Branch", "Gold", "Treasure Hoarder Insignia"],
  },
  Yoimiya: {
    name: { en: "Yoimiya", zh_CN: "宵宫" },
    materials: ["Agnidus Agate", "Smoldering Pearl", "Dragon Lord's Crown", "Transience", "Divining Scroll"],
  },
  "Yun Jin": {
    name: { en: "Yun Jin", zh_CN: "云堇" },
    materials: ["Prithiva Topaz", "Riftborn Regalia", "Ashen Heart", "Diligence", "Damaged Mask"],
  },
  Zhongli: {
    name: { en: "Zhongli", zh_CN: "钟离" },
    materials: ["Prithiva Topaz", "Basalt Pillar", "Tusk of Monoceros Caeli", "Gold", "Slime Condensate"],
  },
};

// weapons

export const weapons = {
  "Polar Star": {
    name: { en: "Polar Star", zh_CN: "冬极白星" },
    materials: ["Mask of the Wicked Lieutenant", "Concealed Claw", "Spectral Husk"],
  },
  "Thundering Pulse": {
    name: { en: "Thundering Pulse", zh_CN: "飞雷之弦振" },
    materials: ["Narukami's Wisdom", "Dismal Prism", "Firm Arrowhead"],
  },
  "Elegy for the End": {
    name: { en: "Elegy for the End", zh_CN: "终末嗟叹之诗" },
    materials: ["Boreal Wolf's Milk Tooth", "Heavy Horn", "Recruit's Insignia"],
  },
  "Skyward Harp": {
    name: { en: "Skyward Harp", zh_CN: "天空之翼" },
    materials: ["Boreal Wolf's Milk Tooth", "Dead Ley Line Branch", "Firm Arrowhead"],
  },
  "Amos' Bow": {
    name: { en: "Amos' Bow", zh_CN: "阿莫斯之弓" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Slime Condensate"],
  },
  "Alley Hunter": {
    name: { en: "Alley Hunter", zh_CN: "暗巷猎手" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Slime Condensate"],
  },
  "The Viridescent Hunt": {
    name: { en: "The Viridescent Hunt", zh_CN: "苍翠猎弓" },
    materials: ["Tile of Decarabian's Tower", "Heavy Horn", "Firm Arrowhead"],
  },
  "The Stringless": {
    name: { en: "The Stringless", zh_CN: "绝弦" },
    materials: ["Tile of Decarabian's Tower", "Heavy Horn", "Firm Arrowhead"],
  },
  "Sacrificial Bow": {
    name: { en: "Sacrificial Bow", zh_CN: "祭礼弓" },
    materials: ["Boreal Wolf's Milk Tooth", "Dead Ley Line Branch", "Slime Condensate"],
  },
  Rust: {
    name: { en: "Rust", zh_CN: "弓藏" },
    materials: ["Luminous Sands from Guyun", "Hunter's Sacrificial Knife", "Damaged Mask"],
  },
  "Royal Bow": {
    name: { en: "Royal Bow", zh_CN: "宗室长弓" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Divining Scroll"],
  },
  Predator: {
    name: { en: "Predator", zh_CN: "掠食者" },
    materials: ["Narukami's Wisdom", "Dismal Prism", "Firm Arrowhead"],
  },
  "Prototype Crescent": {
    name: { en: "Prototype Crescent", zh_CN: "试作澹月" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Treasure Hoarder Insignia"],
  },
  "Mouun's Moon": {
    name: { en: "Mouun's Moon", zh_CN: "曚云之月" },
    materials: ["Narukami's Wisdom", "Dismal Prism", "Spectral Husk"],
  },
  "Mitternachts Waltz": {
    name: { en: "Mitternachts Waltz", zh_CN: "幽夜华尔兹" },
    materials: ["Tile of Decarabian's Tower", "Heavy Horn", "Treasure Hoarder Insignia"],
  },
  Hamayumi: {
    name: { en: "Hamayumi", zh_CN: "破魔之弓" },
    materials: ["Narukami's Wisdom", "Dismal Prism", "Firm Arrowhead"],
  },
  "Favonius Warbow": {
    name: { en: "Favonius Warbow", zh_CN: "西风猎弓" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Whopperflower Nectar"],
  },
  "Compound Bow": {
    name: { en: "Compound Bow", zh_CN: "钢轮弓" },
    materials: ["Grain of Aerosiderite", "Fragile Bone Shard", "Recruit's Insignia"],
  },
  "Blackcliff Warbow": {
    name: { en: "Blackcliff Warbow", zh_CN: "黑岩战弓" },
    materials: ["Luminous Sands from Guyun", "Hunter's Sacrificial Knife", "Whopperflower Nectar"],
  },
  "Windblume Ode": {
    name: { en: "Windblume Ode", zh_CN: "风花之颂" },
    materials: ["Fetters of the Dandelion Gladiator", "Dead Ley Line Branch", "Whopperflower Nectar"],
  },
  "Raven Bow": {
    name: { en: "Raven Bow", zh_CN: "鸦羽弓" },
    materials: ["Tile of Decarabian's Tower", "Heavy Horn", "Firm Arrowhead"],
  },
  "Recurve Bow": {
    name: { en: "Recurve Bow", zh_CN: "反曲弓" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Divining Scroll"],
  },
  Messenger: {
    name: { en: "Messenger", zh_CN: "信使" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Treasure Hoarder Insignia"],
  },
  "Sharpshooter's Oath": {
    name: { en: "Sharpshooter's Oath", zh_CN: "神射手之誓" },
    materials: ["Boreal Wolf's Milk Tooth", "Dead Ley Line Branch", "Slime Condensate"],
  },
  Slingshot: {
    name: { en: "Slingshot", zh_CN: "弹弓" },
    materials: ["Luminous Sands from Guyun", "Hunter's Sacrificial Knife", "Damaged Mask"],
  },
  "Lost Prayer to the Sacred Winds": {
    name: { en: "Lost Prayer to the Sacred Winds", zh_CN: "四风原典" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Slime Condensate"],
  },
  "Skyward Atlas": {
    name: { en: "Skyward Atlas", zh_CN: "天空之卷" },
    materials: ["Boreal Wolf's Milk Tooth", "Dead Ley Line Branch", "Firm Arrowhead"],
  },
  "Everlasting Moonglow": {
    name: { en: "Everlasting Moonglow", zh_CN: "不灭月华" },
    materials: ["Coral Branch of a Distant Sea", "Dismal Prism", "Spectral Husk"],
  },
  "Memory of Dust": {
    name: { en: "Memory of Dust", zh_CN: "尘世之锁" },
    materials: ["Grain of Aerosiderite", "Fragile Bone Shard", "Damaged Mask"],
  },
  "Wine and Song": {
    name: { en: "Wine and Song", zh_CN: "暗巷的酒与诗" },
    materials: ["Boreal Wolf's Milk Tooth", "Dead Ley Line Branch", "Treasure Hoarder Insignia"],
  },
  "The Widsith": {
    name: { en: "The Widsith", zh_CN: "流浪乐章" },
    materials: ["Boreal Wolf's Milk Tooth", "Dead Ley Line Branch", "Damaged Mask"],
  },
  "Solar Pearl": {
    name: { en: "Solar Pearl", zh_CN: "匣里日月" },
    materials: ["Luminous Sands from Guyun", "Hunter's Sacrificial Knife", "Whopperflower Nectar"],
  },
  "Sacrificial Fragments": {
    name: { en: "Sacrificial Fragments", zh_CN: "祭礼残章" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Treasure Hoarder Insignia"],
  },
  "Royal Grimoire": {
    name: { en: "Royal Grimoire", zh_CN: "宗室秘法录" },
    materials: ["Tile of Decarabian's Tower", "Heavy Horn", "Recruit's Insignia"],
  },
  "Prototype Amber": {
    name: { en: "Prototype Amber", zh_CN: "试作金珀" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Firm Arrowhead"],
  },
  "Mappa Mare": {
    name: { en: "Mappa Mare", zh_CN: "万国诸海图谱" },
    materials: ["Grain of Aerosiderite", "Fragile Bone Shard", "Slime Condensate"],
  },
  "Hakushin Ring": {
    name: { en: "Hakushin Ring", zh_CN: "白辰之环" },
    materials: ["Coral Branch of a Distant Sea", "Dismal Prism", "Divining Scroll"],
  },
  Frostbearer: {
    name: { en: "Frostbearer", zh_CN: "忍冬之果" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Whopperflower Nectar"],
  },
  "Favonius Codex": {
    name: { en: "Favonius Codex", zh_CN: "西风秘典" },
    materials: ["Tile of Decarabian's Tower", "Heavy Horn", "Divining Scroll"],
  },
  "Eye of Perception": {
    name: { en: "Eye of Perception", zh_CN: "昭心" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Damaged Mask"],
  },
  "Dodoco Tales": {
    name: { en: "Dodoco Tales", zh_CN: "嘟嘟可故事集" },
    materials: ["Boreal Wolf's Milk Tooth", "Dead Ley Line Branch", "Damaged Mask"],
  },
  "Blackcliff Agate": {
    name: { en: "Blackcliff Agate", zh_CN: "黑岩绯玉" },
    materials: ["Luminous Sands from Guyun", "Hunter's Sacrificial Knife", "Divining Scroll"],
  },
  "Magic Guide": {
    name: { en: "Magic Guide", zh_CN: "魔导绪论" },
    materials: ["Tile of Decarabian's Tower", "Heavy Horn", "Slime Condensate"],
  },
  "Otherworldly Story": {
    name: { en: "Otherworldly Story", zh_CN: "异世界行记" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Damaged Mask"],
  },
  "Emerald Orb": {
    name: { en: "Emerald Orb", zh_CN: "翡玉法球" },
    materials: ["Luminous Sands from Guyun", "Hunter's Sacrificial Knife", "Treasure Hoarder Insignia"],
  },
  "Thrilling Tales of Dragon Slayers": {
    name: { en: "Thrilling Tales of Dragon Slayers", zh_CN: "讨龙英杰谭" },
    materials: ["Boreal Wolf's Milk Tooth", "Dead Ley Line Branch", "Divining Scroll"],
  },
  "Twin Nephrite": {
    name: { en: "Twin Nephrite", zh_CN: "甲级宝珏" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Recruit's Insignia"],
  },
  "Wolf's Gravestone": {
    name: { en: "Wolf's Gravestone", zh_CN: "狼的末路" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Divining Scroll"],
  },
  "Skyward Pride": {
    name: { en: "Skyward Pride", zh_CN: "天空之傲" },
    materials: ["Boreal Wolf's Milk Tooth", "Dead Ley Line Branch", "Slime Condensate"],
  },
  "The Unforged": {
    name: { en: "The Unforged", zh_CN: "无工之剑" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Treasure Hoarder Insignia"],
  },
  "Song of Broken Pines": {
    name: { en: "Song of Broken Pines", zh_CN: "松籁响起之时" },
    materials: ["Tile of Decarabian's Tower", "Heavy Horn", "Damaged Mask"],
  },
  "Redhorn Stonethresher": {
    name: { en: "Redhorn Stonethresher", zh_CN: "赤角石溃杵" },
    materials: ["Narukami's Wisdom", "Concealed Claw", "Old Handguard"],
  },
  Akuoumaru: {
    name: { en: "Akuoumaru", zh_CN: "恶王丸" },
    materials: ["Coral Branch of a Distant Sea", "Concealed Claw", "Old Handguard"],
  },
  "Royal Greatsword": {
    name: { en: "Royal Greatsword", zh_CN: "宗室大剑" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Slime Condensate"],
  },
  Whiteblind: {
    name: { en: "Whiteblind", zh_CN: "白影剑" },
    materials: ["Luminous Sands from Guyun", "Hunter's Sacrificial Knife", "Treasure Hoarder Insignia"],
  },
  "The Bell": {
    name: { en: "The Bell", zh_CN: "钟剑" },
    materials: ["Tile of Decarabian's Tower", "Heavy Horn", "Whopperflower Nectar"],
  },
  "Snow-Tombed Starsilver": {
    name: { en: "Snow-Tombed Starsilver", zh_CN: "雪葬的星银" },
    materials: ["Tile of Decarabian's Tower", "Heavy Horn", "Slime Condensate"],
  },
  "Favonius Greatsword": {
    name: { en: "Favonius Greatsword", zh_CN: "西风大剑" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Recruit's Insignia"],
  },
  "Katsuragikiri Nagamasa": {
    name: { en: "Katsuragikiri Nagamasa", zh_CN: "桂木斩长正" },
    materials: ["Narukami's Wisdom", "Chaos Gear", "Old Handguard"],
  },
  "Sacrificial Greatsword": {
    name: { en: "Sacrificial Greatsword", zh_CN: "祭礼大剑" },
    materials: ["Boreal Wolf's Milk Tooth", "Dead Ley Line Branch", "Firm Arrowhead"],
  },
  "Serpent Spine": {
    name: { en: "Serpent Spine", zh_CN: "螭骨剑" },
    materials: ["Grain of Aerosiderite", "Fragile Bone Shard", "Whopperflower Nectar"],
  },
  "Blackcliff Slasher": {
    name: { en: "Blackcliff Slasher", zh_CN: "黑岩斩刀" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Recruit's Insignia"],
  },
  Rainslasher: {
    name: { en: "Rainslasher", zh_CN: "雨裁" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Divining Scroll"],
  },
  "Prototype Archaic": {
    name: { en: "Prototype Archaic", zh_CN: "试作古华" },
    materials: ["Grain of Aerosiderite", "Fragile Bone Shard", "Damaged Mask"],
  },
  "Luxurious Sea-Lord": {
    name: { en: "Luxurious Sea-Lord", zh_CN: "衔珠海皇" },
    materials: ["Grain of Aerosiderite", "Fragile Bone Shard", "Slime Condensate"],
  },
  "Lithic Blade": {
    name: { en: "Lithic Blade", zh_CN: "千岩古剑" },
    materials: ["Luminous Sands from Guyun", "Hunter's Sacrificial Knife", "Firm Arrowhead"],
  },
  Quartz: {
    name: { en: "Quartz", zh_CN: "飞天大御剑" },
    materials: ["Grain of Aerosiderite", "Fragile Bone Shard", "Treasure Hoarder Insignia"],
  },
  "Skyrider Greatsword": {
    name: { en: "Skyrider Greatsword", zh_CN: "以理服人" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Damaged Mask"],
  },
  "Debate Club": {
    name: { en: "Debate Club", zh_CN: "以理服人" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Damaged Mask"],
  },
  "Bloodtainted Greatsword": {
    name: { en: "Bloodtainted Greatsword", zh_CN: "沐浴龙血的剑" },
    materials: ["Boreal Wolf's Milk Tooth", "Dead Ley Line Branch", "Firm Arrowhead"],
  },
  "White Iron Greatsword": {
    name: { en: "White Iron Greatsword", zh_CN: "白铁大剑" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Slime Condensate"],
  },
  "Ferrous Shadow": {
    name: { en: "Ferrous Shadow", zh_CN: "铁影阔剑" },
    materials: ["Tile of Decarabian's Tower", "Heavy Horn", "Whopperflower Nectar"],
  },
  "Engulfing Lightning": {
    name: { en: "Engulfing Lightning", zh_CN: "薙草之稻光" },
    materials: ["Mask of the Wicked Lieutenant", "Chaos Gear", "Old Handguard"],
  },
  "Skyward Spine": {
    name: { en: "Skyward Spine", zh_CN: "天空之脊" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Divining Scroll"],
  },
  "Primordial Jade Winged-Spear": {
    name: { en: "Primordial Jade Winged-Spear", zh_CN: "和璞鸢" },
    materials: ["Luminous Sands from Guyun", "Hunter's Sacrificial Knife", "Recruit's Insignia"],
  },
  "Calamity Queller": {
    name: { en: "Calamity Queller", zh_CN: "息灾" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Whopperflower Nectar"],
  },
  "Staff of Homa": {
    name: { en: "Staff of Homa", zh_CN: "护摩之杖" },
    materials: ["Grain of Aerosiderite", "Dead Ley Line Branch", "Slime Condensate"],
  },
  "Vortex Vanquisher": {
    name: { en: "Vortex Vanquisher", zh_CN: "贯虹之槊" },
    materials: ["Grain of Aerosiderite", "Fragile Bone Shard", "Treasure Hoarder Insignia"],
  },
  "Prototype Starglitter": {
    name: { en: "Prototype Starglitter", zh_CN: "试作星镰" },
    materials: ["Grain of Aerosiderite", "Fragile Bone Shard", "Damaged Mask"],
  },
  "Lithic Spear": {
    name: { en: "Lithic Spear", zh_CN: "千岩长枪" },
    materials: ["Grain of Aerosiderite", "Fragile Bone Shard", "Firm Arrowhead"],
  },
  "Kitain Cross Spear": {
    name: { en: "Kitain Cross Spear", zh_CN: "喜多院十文字" },
    materials: ["Mask of the Wicked Lieutenant", "Chaos Gear", "Treasure Hoarder Insignia"],
  },
  '"The Catch"': {
    name: { en: '"The Catch"', zh_CN: "「渔获」" },
    materials: ["Mask of the Wicked Lieutenant", "Chaos Gear", "Spectral Husk"],
  },
  "Favonius Lance": {
    name: { en: "Favonius Lance", zh_CN: "西风长枪" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Slime Condensate"],
  },
  "Dragonspine Spear": {
    name: { en: "Dragonspine Spear", zh_CN: "龙脊长枪" },
    materials: ["Boreal Wolf's Milk Tooth", "Mist Grass Pollen", "Recruit's Insignia"],
  },
  "Dragon's Bane": {
    name: { en: "Dragon's Bane", zh_CN: "匣里灭辰" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Divining Scroll"],
  },
  Deathmatch: {
    name: { en: "Deathmatch", zh_CN: "决斗之枪" },
    materials: ["Boreal Wolf's Milk Tooth", "Dead Ley Line Branch", "Whopperflower Nectar"],
  },
  "Crescent Pike": {
    name: { en: "Crescent Pike", zh_CN: "流月针" },
    materials: ["Luminous Sands from Guyun", "Hunter's Sacrificial Knife", "Treasure Hoarder Insignia"],
  },
  "Blackcliff Pole": {
    name: { en: "Blackcliff Pole", zh_CN: "黑岩刺枪" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Recruit's Insignia"],
  },
  "Wavebreaker's Fin": {
    name: { en: "Wavebreaker's Fin", zh_CN: "断浪长鳍" },
    materials: ["Mask of the Wicked Lieutenant", "Concealed Claw", "Old Handguard"],
  },
  "Royal Spear": {
    name: { en: "Royal Spear", zh_CN: "宗室猎枪" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Recruit's Insignia"],
  },
  Halberd: {
    name: { en: "Halberd", zh_CN: "钺矛" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Whopperflower Nectar"],
  },
  "Black Tassel": {
    name: { en: "Black Tassel", zh_CN: "黑缨枪" },
    materials: ["Grain of Aerosiderite", "Fragile Bone Shard", "Firm Arrowhead"],
  },
  "White Tassel": {
    name: { en: "White Tassel", zh_CN: "白缨枪" },
    materials: ["Luminous Sands from Guyun", "Hunter's Sacrificial Knife", "Recruit's Insignia"],
  },
  "Mistsplitter Reforged": {
    name: { en: "Mistsplitter Reforged", zh_CN: "雾切之回光" },
    materials: ["Coral Branch of a Distant Sea", "Chaos Gear", "Old Handguard"],
  },
  "Aquila Favonia": {
    name: { en: "Aquila Favonia", zh_CN: "风鹰剑" },
    materials: ["Tile of Decarabian's Tower", "Heavy Horn", "Firm Arrowhead"],
  },
  "Summit Shaper": {
    name: { en: "Summit Shaper", zh_CN: "斫峰之刃" },
    materials: ["Luminous Sands from Guyun", "Hunter's Sacrificial Knife", "Damaged Mask"],
  },
  "Skyward Blade": {
    name: { en: "Skyward Blade", zh_CN: "天空之刃" },
    materials: ["Boreal Wolf's Milk Tooth", "Dead Ley Line Branch", "Slime Condensate"],
  },
  "Freedom-Sworn": {
    name: { en: "Freedom-Sworn", zh_CN: "苍古自由之誓" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Divining Scroll"],
  },
  "Primordial Jade Cutter": {
    name: { en: "Primordial Jade Cutter", zh_CN: "磐岩结绿" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Treasure Hoarder Insignia"],
  },
  "The Flute": {
    name: { en: "The Flute", zh_CN: "笛剑" },
    materials: ["Boreal Wolf's Milk Tooth", "Dead Ley Line Branch", "Slime Condensate"],
  },
  "The Black Sword": {
    name: { en: "The Black Sword", zh_CN: "黑剑" },
    materials: ["Boreal Wolf's Milk Tooth", "Dead Ley Line Branch", "Slime Condensate"],
  },
  "The Alley Flash": {
    name: { en: "The Alley Flash", zh_CN: "暗巷闪光" },
    materials: ["Tile of Decarabian's Tower", "Heavy Horn", "Divining Scroll"],
  },
  "Sword of Descension": {
    name: { en: "Sword of Descension", zh_CN: "降临之剑" },
    materials: ["Boreal Wolf's Milk Tooth", "Dead Ley Line Branch", "Treasure Hoarder Insignia"],
  },
  "Sacrificial Sword": {
    name: { en: "Sacrificial Sword", zh_CN: "祭礼剑" },
    materials: ["Fetters of the Dandelion Gladiator", "Chaos Device", "Divining Scroll"],
  },
  "Royal Longsword": {
    name: { en: "Royal Longsword", zh_CN: "宗室长剑" },
    materials: ["Tile of Decarabian's Tower", "Heavy Horn", "Damaged Mask"],
  },
  "Prototype Rancour": {
    name: { en: "Prototype Rancour", zh_CN: "试作斩岩" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Recruit's Insignia"],
  },
  "Amenoma Kageuchi": {
    name: { en: "Amenoma Kageuchi", zh_CN: "天目影打刀" },
    materials: ["Coral Branch of a Distant Sea", "Chaos Gear", "Old Handguard"],
  },
  "Lion's Roar": {
    name: { en: "Lion's Roar", zh_CN: "匣里龙吟" },
    materials: ["Luminous Sands from Guyun", "Hunter's Sacrificial Knife", "Treasure Hoarder Insignia"],
  },
  "Iron Sting": {
    name: { en: "Iron Sting", zh_CN: "铁蜂刺" },
    materials: ["Grain of Aerosiderite", "Fragile Bone Shard", "Whopperflower Nectar"],
  },
  "Festering Desire": {
    name: { en: "Festering Desire", zh_CN: "腐殖之剑" },
    materials: ["Fetters of the Dandelion Gladiator", "Heavy Horn", "Recruit's Insignia"],
  },
  "Favonius Sword": {
    name: { en: "Favonius Sword", zh_CN: "西风剑" },
    materials: ["Tile of Decarabian's Tower", "Heavy Horn", "Firm Arrowhead"],
  },
  "Cinnabar Spindle": {
    name: { en: "Cinnabar Spindle", zh_CN: "辰砂之纺锤" },
    materials: ["Tile of Decarabian's Tower", "Chaos Device", "Damaged Mask"],
  },
  "Blackcliff Longsword": {
    name: { en: "Blackcliff Longsword", zh_CN: "黑岩长剑" },
    materials: ["Luminous Sands from Guyun", "Hunter's Sacrificial Knife", "Firm Arrowhead"],
  },
  "Harbinger of Dawn": {
    name: { en: "Harbinger of Dawn", zh_CN: "黎明神剑" },
    materials: ["Boreal Wolf's Milk Tooth", "Dead Ley Line Branch", "Slime Condensate"],
  },
  "Fillet Blade": {
    name: { en: "Fillet Blade", zh_CN: "吃虎鱼刀" },
    materials: ["Mist Veiled Lead Elixir", "Mist Grass Pollen", "Treasure Hoarder Insignia"],
  },
  "Skyrider Sword": {
    name: { en: "Skyrider Sword", zh_CN: "飞天御剑" },
    materials: ["Grain of Aerosiderite", "Fragile Bone Shard", "Recruit's Insignia"],
  },
  "Dark Iron Sword": {
    name: { en: "Dark Iron Sword", zh_CN: "暗铁剑" },
    materials: ["Luminous Sands from Guyun", "Hunter's Sacrificial Knife", "Damaged Mask"],
  },
  "Cool Steel": {
    name: { en: "Cool Steel", zh_CN: "冷刃" },
    materials: ["Tile of Decarabian's Tower", "Heavy Horn", "Firm Arrowhead"],
  },
  "Traveler's Handy Sword": {
    name: { en: "Traveler's Handy Sword", zh_CN: "旅行剑" },
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
      zh_CN: ["史莱姆凝液", "史莱姆清", "史莱姆原浆"],
    },
  },
  "Damaged Mask": {
    name: { en: ["Damaged Mask", "Stained Mask", "Ominous Mask"], zh_CN: ["破损的面具", "污秽的面具", "不祥的面具"] },
  },
  "Divining Scroll": {
    name: {
      en: ["Divining Scroll", "Sealed Scroll", "Forbidden Curse Scroll"],
      zh_CN: ["导能绘卷", "封魔绘卷", "禁咒绘卷"],
    },
  },
  "Firm Arrowhead": {
    name: {
      en: ["Firm Arrowhead", "Sharp Arrowhead", "Weathered Arrowhead"],
      zh_CN: ["牢固的箭簇", "锐利的箭簇", "历战的箭簇"],
    },
  },
  "Heavy Horn": {
    name: {
      en: ["Heavy Horn", "Black Bronze Horn", "Black Crystal Horn"],
      zh_CN: ["沉重号角", "黑铜号角", "黑晶号角"],
    },
  },
  "Dead Ley Line Branch": {
    name: {
      en: ["Dead Ley Line Branch", "Dead Ley Line Leaves", "Ley Line Sprout"],
      zh_CN: ["地脉的旧枝", "地脉的枯叶", "地脉的新芽"],
    },
  },
  "Chaos Device": {
    name: { en: ["Chaos Device", "Chaos Circuit", "Chaos Core"], zh_CN: ["混沌装置", "混沌回路", "混沌炉心"] },
  },
  "Mist Grass Pollen": {
    name: { en: ["Mist Grass Pollen", "Mist Grass", "Mist Grass Wick"], zh_CN: ["雾虚花粉", "雾虚草囊", "雾虚灯芯"] },
  },
  "Hunter's Sacrificial Knife": {
    name: {
      en: ["Hunter's Sacrificial Knife", "Agent's Sacrificial Knife", "Inspector's Sacrificial Knife"],
      zh_CN: ["猎兵祭刀", "特工祭刀", "督察长祭刀"],
    },
  },
  "Recruit's Insignia": {
    name: {
      en: ["Recruit's Insignia", "Sergeant's Insignia", "Lieutenant's Insignia"],
      zh_CN: ["新兵的徽记", "士官的徽记", "尉官的徽记"],
    },
  },
  "Treasure Hoarder Insignia": {
    name: {
      en: ["Treasure Hoarder Insignia", "Silver Raven Insignia", "Golden Raven Insignia"],
      zh_CN: ["寻宝鸦印", "藏银鸦印", "攫金鸦印"],
    },
  },
  "Whopperflower Nectar": {
    name: {
      en: ["Whopperflower Nectar", "Shimmering Nectar", "Energy Nectar"],
      zh_CN: ["骗骗花蜜", "微光花蜜", "原素花蜜"],
    },
  },
  "Fragile Bone Shard": {
    name: {
      en: ["Fragile Bone Shard", "Sturdy Bone Shard", "Fossilized Bone Shard"],
      zh_CN: ["脆弱的骨片", "结实的骨片", "石化的骨片"],
    },
  },
  "Old Handguard": {
    name: {
      en: ["Old Handguard", "Kageuchi Handguard", "Famed Handguard"],
      zh_CN: ["破旧的刀镡", "影打刀镡", "名刀镡"],
    },
  },
  "Chaos Gear": {
    name: { en: ["Chaos Gear", "Chaos Axis", "Chaos Oculus"], zh_CN: ["混沌机关", "混沌枢纽", "混沌真眼"] },
  },
  "Dismal Prism": {
    name: { en: ["Dismal Prism", "Crystal Prism", "Polarizing Prism"], zh_CN: ["黯淡棱镜", "水晶棱镜", "偏光棱镜"] },
  },
  "Spectral Husk": {
    name: {
      en: ["Spectral Husk", "Spectral Heart", "Spectral Nucleus"],
      zh_CN: ["浮游干核", "浮游幽核", "浮游晶化核"],
    },
  },
  "Concealed Claw": {
    name: {
      en: ["Concealed Claw", "Concealed Unguis", "Concealed Talon"],
      zh_CN: ["隐兽指爪", "隐兽利爪", "隐兽鬼爪"],
    },
  },

  // character ascension
  "Brilliant Diamond": { name: { en: ["Brilliant Diamond"], zh_CN: ["璀璨原钻"] } },
  "Agnidus Agate": { name: { en: ["Agnidus Agate"], zh_CN: ["燃愿玛瑙"] } },
  "Varunada Lazurite": { name: { en: ["Varunada Lazurite"], zh_CN: ["涤净青金"] } },
  "Vajrada Amethyst": { name: { en: ["Vajrada Amethyst"], zh_CN: ["最胜紫晶"] } },
  "Vayuda Turquoise": { name: { en: ["Vayuda Turquoise"], zh_CN: ["自在松石"] } },
  "Shivada Jade": { name: { en: ["Shivada Jade"], zh_CN: ["哀叙冰玉"] } },
  "Prithiva Topaz": { name: { en: ["Prithiva Topaz"], zh_CN: ["坚牢黄玉"] } },
  "Hurricane Seed": { name: { en: ["Hurricane Seed"], zh_CN: ["飓风之种"] } },
  "Lightning Prism": { name: { en: ["Lightning Prism"], zh_CN: ["雷光棱镜"] } },
  "Basalt Pillar": { name: { en: ["Basalt Pillar"], zh_CN: ["玄岩之塔"] } },
  "Hoarfrost Core": { name: { en: ["Hoarfrost Core"], zh_CN: ["极寒之核"] } },
  "Everflame Seed": { name: { en: ["Everflame Seed"], zh_CN: ["常燃火种"] } },
  "Cleansing Heart": { name: { en: ["Cleansing Heart"], zh_CN: ["净水之心"] } },
  "Juvenile Jade": { name: { en: ["Juvenile Jade"], zh_CN: ["未熟之玉"] } },
  "Crystalline Bloom": { name: { en: ["Crystalline Bloom"], zh_CN: ["晶凝之华"] } },
  "Marionette Core": { name: { en: ["Marionette Core"], zh_CN: ["魔偶机心"] } },
  "Perpetual Heart": { name: { en: ["Perpetual Heart"], zh_CN: ["恒常机关之心"] } },
  "Smoldering Pearl": { name: { en: ["Smoldering Pearl"], zh_CN: ["阴燃之珠"] } },
  "Dew of Repudiation": { name: { en: ["Dew of Repudiation"], zh_CN: ["排异之露"] } },
  "Storm Beads": { name: { en: ["Storm Beads"], zh_CN: ["雷霆数珠"] } },
  "Riftborn Regalia": { name: { en: ["Riftborn Regalia"], zh_CN: ["兽境王器"] } },
  "Dragonheir's False Fin": { name: { en: ["Dragonheir's False Fin"], zh_CN: ["龙嗣伪鳍"] } },

  // character talents
  Freedom: { name: { en: ["Freedom"], zh_CN: ["自由"] } },
  Resistance: { name: { en: ["Resistance"], zh_CN: ["抗争"] } },
  Ballad: { name: { en: ["Ballad"], zh_CN: ["诗文"] } },
  Prosperity: { name: { en: ["Prosperity"], zh_CN: ["繁荣"] } },
  Diligence: { name: { en: ["Diligence"], zh_CN: ["勤劳"] } },
  Gold: { name: { en: ["Gold"], zh_CN: ["黄金"] } },
  Transience: { name: { en: ["Transience"], zh_CN: ["浮世"] } },
  Elegance: { name: { en: ["Elegance"], zh_CN: ["风雅"] } },
  Light: { name: { en: ["Light"], zh_CN: ["天光"] } },
  "Crown of Insight": { name: { en: ["Crown of Insight"], zh_CN: ["智识之冕"] } },
  "Dvalin's Plume": { name: { en: ["Dvalin's Plume"], zh_CN: ["东风之翎"] } },
  "Dvalin's Claw": { name: { en: ["Dvalin's Claw"], zh_CN: ["东风之爪"] } },
  "Dvalin's Sigh": { name: { en: ["Dvalin's Sigh"], zh_CN: ["东风的吐息"] } },
  "Tail of Boreas": { name: { en: ["Tail of Boreas"], zh_CN: ["北风之尾"] } },
  "Ring of Boreas": { name: { en: ["Ring of Boreas"], zh_CN: ["北风之环"] } },
  "Spirit Locket of Boreas": { name: { en: ["Spirit Locket of Boreas"], zh_CN: ["北风的魂匣"] } },
  "Tusk of Monoceros Caeli": { name: { en: ["Tusk of Monoceros Caeli"], zh_CN: ["吞天之鲸・只角"] } },
  "Shard of a Foul Legacy": { name: { en: ["Shard of a Foul Legacy"], zh_CN: ["魔王之刃・残片"] } },
  "Shadow of the Warrior": { name: { en: ["Shadow of the Warrior"], zh_CN: ["武炼之魂・孤影"] } },
  "Dragon Lord's Crown": { name: { en: ["Dragon Lord's Crown"], zh_CN: ["龙王之冕"] } },
  "Bloodjade Branch": { name: { en: ["Bloodjade Branch"], zh_CN: ["血玉之枝"] } },
  "Gilded Scale": { name: { en: ["Gilded Scale"], zh_CN: ["鎏金之鳞"] } },
  "Molten Moment": { name: { en: ["Molten Moment"], zh_CN: ["熔毁之刻"] } },
  "Hellfire Butterfly": { name: { en: ["Hellfire Butterfly"], zh_CN: ["狱火之蝶"] } },
  "Ashen Heart": { name: { en: ["Ashen Heart"], zh_CN: ["灰烬之心"] } },

  // weapons
  "Tile of Decarabian's Tower": {
    name: {
      en: [
        "Tile of Decarabian's Tower",
        "Debris of Decarabian's City",
        "Fragment of Decarabian's Epic",
        "Scattered Piece of Decarabian's Dream",
      ],
      zh_CN: ["高塔孤王的破瓦", "高塔孤王的残垣", "高塔孤王的断片", "高塔孤王的碎梦"],
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
      zh_CN: ["凛风奔狼的始龀", "凛风奔狼的裂齿", "凛风奔狼的断牙", "凛风奔狼的怀乡"],
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
      zh_CN: ["狮牙斗士的枷锁", "狮牙斗士的铁链", "狮牙斗士的镣铐", "狮牙斗士的理想"],
    },
  },
  "Luminous Sands from Guyun": {
    name: {
      en: ["Luminous Sands from Guyun", "Lustrous Stone from Guyun", "Relic from Guyun", "Divine Body from Guyun"],
      zh_CN: ["孤云寒林的光砂", "孤云寒林的辉岩", "孤云寒林的圣骸", "孤云寒林的神体"],
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
      zh_CN: ["雾海云间的铅丹", "雾海云间的汞丹", "雾海云间的金丹", "雾海云间的转还"],
    },
  },
  "Grain of Aerosiderite": {
    name: {
      en: ["Grain of Aerosiderite", "Piece of Aerosiderite", "Bit of Aerosiderite", "Chunk of Aerosiderite"],
      zh_CN: ["漆黑陨铁的一粒", "漆黑陨铁的一片", "漆黑陨铁的一角", "漆黑陨铁的一块"],
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
      zh_CN: ["远海夷地的瑚枝", "远海夷地的玉枝", "远海夷地的琼枝", "远海夷地的金枝"],
    },
  },
  "Narukami's Wisdom": {
    name: {
      en: ["Narukami's Wisdom", "Narukami's Joy", "Narukami's Affection", "Narukami's Valor"],
      zh_CN: ["鸣神御灵的明惠", "鸣神御灵的欢喜", "鸣神御灵的亲爱", "鸣神御灵的勇武"],
    },
  },
  "Mask of the Wicked Lieutenant": {
    name: {
      en: ["Mask of the Wicked Lieutenant", "Mask of the Tiger's Bite", "Mask of the One-Horned", "Mask of the Kijin"],
      zh_CN: ["今昔剧画之恶尉", "今昔剧画之虎啮", "今昔剧画之一角", "今昔剧画之鬼人"],
    },
  },
};

// enemies

export const domains = {
  "Cecilia Garden": {
    name: { en: "Cecilia Garden", zh_CN: "塞西莉亚苗圃" },
    materials_by_weekday: [
      "All",
      "Tile of Decarabian's Tower",
      "Boreal Wolf's Milk Tooth",
      "Fetters of the Dandelion Gladiator",
    ],
  },
  "Hidden Palace of Lianshan Formula": {
    name: { en: "Hidden Palace of Lianshan Formula", zh_CN: "震雷连山密宫" },
    materials_by_weekday: ["All", "Luminous Sands from Guyun", "Mist Veiled Lead Elixir", "Grain of Aerosiderite"],
  },
  "Court of Flowing Sand": {
    name: { en: "Court of Flowing Sand", zh_CN: "砂流之庭" },
    materials_by_weekday: [
      "All",
      "Coral Branch of a Distant Sea",
      "Narukami's Wisdom",
      "Mask of the Wicked Lieutenant",
    ],
  },
  "Forsaken Rift": {
    name: { en: "Forsaken Rift", zh_CN: "忘却之峡" },
    materials_by_weekday: ["All", "Freedom", "Resistance", "Ballad"],
  },
  "Taishan Mansion": {
    name: { en: "Taishan Mansion", zh_CN: "太山府" },
    materials_by_weekday: ["All", "Prosperity", "Diligence", "Gold"],
  },
  "Violet Court": {
    name: { en: "Violet Court", zh_CN: "菫色之庭" },
    materials_by_weekday: ["All", "Transience", "Elegance", "Light"],
  },
};

export const bosses = {
  "Anemo Hypostasis": {
    materials: ["Vayuda Turquoise", "Hurricane Seed"],
    name: { en: "Anemo Hypostasis", zh_CN: "无相之风" },
  },
  "Bathysmal Vishap Herd": {
    materials: ["Shivada Jade", "Vajrada Amethyst", "Dragonheir's False Fin"],
    name: { en: "Bathysmal Vishap Herd", zh_CN: "深海龙蜥" },
  },
  "Cryo Hypostasis": {
    materials: ["Shivada Jade", "Crystalline Bloom"],
    name: { en: "Cryo Hypostasis", zh_CN: "无相之冰" },
  },
  "Cryo Regisvine": {
    materials: ["Shivada Jade", "Hoarfrost Core"],
    name: { en: "Cryo Regisvine", zh_CN: "急冻树" },
  },
  "Electro Hypostasis": {
    materials: ["Vajrada Amethyst", "Lightning Prism"],
    name: { en: "Electro Hypostasis", zh_CN: "无相之雷" },
  },
  "Geo Hypostasis": {
    materials: ["Prithiva Topaz", "Basalt Pillar"],
    name: { en: "Geo Hypostasis", zh_CN: "无相之岩" },
  },
  "Golden Wolflord": {
    materials: ["Prithiva Topaz", "Riftborn Regalia"],
    name: { en: "Golden Wolflord", zh_CN: "黄金王兽" },
  },
  "Hydro Hypostasis": {
    materials: ["Varunada Lazurite", "Dew of Repudiation"],
    name: { en: "Hydro Hypostasis", zh_CN: "无相之水" },
  },
  "Maguu Kenki": {
    materials: ["Vayuda Turquoise", "Shivada Jade", "Marionette Core"],
    name: { en: "Maguu Kenki", zh_CN: "魔偶剑鬼" },
  },
  "Perpetual Mechanical Array": {
    materials: ["Prithiva Topaz", "Shivada Jade", "Perpetual Heart"],
    name: { en: "Perpetual Mechanical Array", zh_CN: "恒常机关阵列" },
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
    name: { en: "Primo Geovishap", zh_CN: "古岩龙蜥" },
  },
  "Pyro Hypostasis": {
    materials: ["Agnidus Agate", "Smoldering Pearl"],
    name: { en: "Pyro Hypostasis", zh_CN: "无相之火" },
  },
  "Pyro Regisvine": {
    materials: ["Agnidus Agate", "Everflame Seed"],
    name: { en: "Pyro Regisvine", zh_CN: "爆炎树" },
  },
  "Rhodeia of Loch": {
    materials: ["Varunada Lazurite", "Cleansing Heart"],
    name: { en: "Rhodeia of Loch", zh_CN: "纯水精灵" },
  },
  "Thunder Manifestation": {
    materials: ["Vajrada Amethyst", "Storm Beads"],
    name: { en: "Thunder Manifestation", zh_CN: "雷音权现" },
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
    name: { en: "Wolf of the North Challenge / Andrius", zh_CN: "北风的王狼 / 安德留斯" },
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
    name: { en: "Confront Stormterror / Dvalin", zh_CN: "深入风龙废墟 / 风魔龙・特瓦林" },
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
    name: { en: "Enter the Golden House / Childe", zh_CN: "进入「黄金屋」 / 公子" },
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
    name: { en: "Beneath the Dragon-Queller / Azhdaha", zh_CN: "「伏龙树」之底 / 若陀龙王" },
  },
  "Narukami Island: Tenshukaku": {
    materials: ["Shivada Jade", "Agnidus Agate", "Molten Moment", "Hellfire Butterfly", "Ashen Heart"],
    name: { en: "Narukami Island: Tenshukaku / La Signora", zh_CN: "鸣神岛・天守 / 女士" },
  },
};

export const i18n = {
  delimiter: { en: ", ", zh_CN: "，" },
  weekdays: {
    mon_thu: { en: "Mon, Thu, Sun", zh_CN: "一四日" },
    tue_fri: { en: "Tue, Fri, Sun", zh_CN: "二五日" },
    wed_sat: { en: "Wed, Sat, SUn", zh_CN: "三六日" },
  },
};
