const weapons = {
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
