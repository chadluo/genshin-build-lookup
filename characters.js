const characters = {
  Albedo: {
    material_ascention: ["Prithiva Topaz", "Basalt Pillar", "Divining Scroll"],
    material_talent: ["Ballad", "Divining Scroll", "Tusk of Monoceros Caeli"],
    name: { en: "Albedo", zh_CN: "阿贝多" },
  },
  Aloy: {
    material_ascention: ["Shivada Jade", "Crystalline Bloom", "Spectral Husk"],
    material_talent: ["Freedom", "Spectral Husk", "Molten Moment"],
    name: { en: "Aloy", zh_CN: "埃洛伊" },
  },
  Amber: {
    material_ascention: ["Agnidus Agate", "Everflame Seed", "Firm Arrowhead"],
    material_talent: ["Freedom", "Firm Arrowhead", "Dvalin's Sigh"],
    name: { en: "Amber", zh_CN: "安柏" },
  },
  "Arataki Itto": {
    material_ascention: ["Prithiva Topaz", "Riftborn Regalia", "Slime Condensate"],
    material_talent: ["Elegance", "Slime Condensate", "Ashen Heart"],
    name: { en: "Arataki Itto", zh_CN: "荒泷一斗" },
  },
  Barbara: {
    material_ascention: ["Varunada Lazurite", "Cleansing Heart", "Divining Scroll"],
    material_talent: ["Freedom", "Divining Scroll", "Ring of Boreas"],
    name: { en: "Barbara", zh_CN: "芭芭拉" },
  },
  Beidou: {
    material_ascention: ["Vajrada Amethyst", "Lightning Prism", "Treasure Hoarder Insignia"],
    material_talent: ["Gold", "Treasure Hoarder Insignia", "Dvalin's Sigh"],
    name: { en: "Beidou", zh_CN: "北斗" },
  },
  Bennett: {
    material_ascention: ["Agnidus Agate", "Everflame Seed", "Treasure Hoarder Insignia"],
    material_talent: ["Resistance", "Treasure Hoarder Insignia", "Dvalin's Plume"],
    name: { en: "Bennett", zh_CN: "班尼特" },
  },
  Chongyun: {
    material_ascention: ["Shivada Jade", "Hoarfrost Core", "Damaged Mask"],
    material_talent: ["Diligence", "Damaged Mask", "Dvalin's Sigh"],
    name: { en: "Chongyun", zh_CN: "重云" },
  },
  Diluc: {
    material_ascention: ["Agnidus Agate", "Everflame Seed", "Recruit's Insignia"],
    material_talent: ["Resistance", "Recruit's Insignia", "Dvalin's Plume"],
    name: { en: "Diluc", zh_CN: "迪卢克" },
  },
  Diona: {
    material_ascention: ["Shivada Jade", "Hoarfrost Core", "Firm Arrowhead"],
    material_talent: ["Freedom", "Firm Arrowhead", "Shard of a Foul Legacy"],
    name: { en: "Diona", zh_CN: "迪奥娜" },
  },
  Eula: {
    material_ascention: ["Shivada Jade", "Crystalline Bloom", "Damaged Mask"],
    material_talent: ["Resistance", "Damaged Mask", "Dragon Lord's Crown"],
    name: { en: "Eula", zh_CN: "优菈" },
  },
  Fischl: {
    material_ascention: ["Vajrada Amethyst", "Lightning Prism", "Firm Arrowhead"],
    material_talent: ["Ballad", "Firm Arrowhead", "Spirit Locket of Boreas"],
    name: { en: "Fischl", zh_CN: "菲谢尔" },
  },
  Ganyu: {
    material_ascention: ["Shivada Jade", "Hoarfrost Core", "Whopperflower Nectar"],
    material_talent: ["Diligence", "Whopperflower Nectar", "Shadow of the Warrior"],
    name: { en: "Ganyu", zh_CN: "甘雨" },
  },
  Gorou: {
    material_ascention: ["Prithiva Topaz", "Perpetual Heart", "Spectral Husk"],
    material_talent: ["Light", "Spectral Husk", "Molten Moment"],
    name: { en: "Gorou", zh_CN: "五郎" },
  },
  "Hu Tao": {
    material_ascention: ["Agnidus Agate", "Juvenile Jade", "Whopperflower Nectar"],
    material_talent: ["Diligence", "Whopperflower Nectar", "Shard of a Foul Legacy"],
    name: { en: "Hu Tao", zh_CN: "胡桃" },
  },
  Jean: {
    material_ascention: ["Vayuda Turquoise", "Hurricane Seed", "Damaged Mask"],
    material_talent: ["Resistance", "Damaged Mask", "Dvalin's Plume"],
    name: { en: "Jean", zh_CN: "琴" },
  },
  "Kaedehara Kazuha": {
    material_ascention: ["Vayuda Turquoise", "Marionette Core", "Treasure Hoarder Insignia"],
    material_talent: ["Diligence", "Treasure Hoarder Insignia", "Gilded Scale"],
    name: { en: "Kaedehara Kazuha", zh_CN: "枫原万叶" },
  },
  Kaeya: {
    material_ascention: ["Shivada Jade", "Hoarfrost Core", "Treasure Hoarder Insignia"],
    material_talent: ["Ballad", "Treasure Hoarder Insignia", "Spirit Locket of Boreas"],
    name: { en: "Kaeya", zh_CN: "凯亚" },
  },
  "Kamisato Ayaka": {
    material_ascention: ["Shivada Jade", "Perpetual Heart", "Old Handguard"],
    material_talent: ["Elegance", "Old Handguard", "Bloodjade Branch"],
    name: { en: "Kamisato Ayaka", zh_CN: "神里绫华" },
  },
  Keqing: {
    material_ascention: ["Vajrada Amethyst", "Lightning Prism", "Whopperflower Nectar"],
    material_talent: ["Prosperity", "Whopperflower Nectar", "Ring of Boreas"],
    name: { en: "Keqing", zh_CN: "刻晴" },
  },
  Klee: {
    material_ascention: ["Agnidus Agate", "Everflame Seed", "Divining Scroll"],
    material_talent: ["Freedom", "Divining Scroll", "Ring of Boreas"],
    name: { en: "Klee", zh_CN: "可莉" },
  },
  "Kujou Sara": {
    material_ascention: ["Vajrada Amethyst", "Storm Beads", "Damaged Mask"],
    material_talent: ["Elegance", "Damaged Mask", "Ashen Heart"],
    name: { en: "Kujou Sara", zh_CN: "九条裟罗" },
  },
  Lisa: {
    material_ascention: ["Vajrada Amethyst", "Lightning Prism", "Slime Condensate"],
    material_talent: ["Ballad", "Slime Condensate", "Dvalin's Claw"],
    name: { en: "Lisa", zh_CN: "丽莎" },
  },
  Mona: {
    material_ascention: ["Varunada Lazurite", "Cleansing Heart", "Whopperflower Nectar"],
    material_talent: ["Resistance", "Whopperflower Nectar", "Ring of Boreas"],
    name: { en: "Mona", zh_CN: "莫娜" },
  },
  Ningguang: {
    material_ascention: ["Prithiva Topaz", "Basalt Pillar", "Recruit's Insignia"],
    material_talent: ["Prosperity", "Recruit's Insignia", "Spirit Locket of Boreas"],
    name: { en: "Ningguang", zh_CN: "凝光" },
  },
  Noelle: {
    material_ascention: ["Prithiva Topaz", "Basalt Pillar", "Damaged Mask"],
    material_talent: ["Resistance", "Damaged Mask", "Dvalin's Claw"],
    name: { en: "Noelle", zh_CN: "诺艾尔" },
  },
  Qiqi: {
    material_ascention: ["Shivada Jade", "Hoarfrost Core", "Divining Scroll"],
    material_talent: ["Prosperity", "Divining Scroll", "Tail of Boreas"],
    name: { en: "Qiqi", zh_CN: "七七" },
  },
  "Raiden Shogun": {
    material_ascention: ["Vajrada Amethyst", "Storm Beads", "Old Handguard"],
    material_talent: ["Light", "Old Handguard", "Molten Moment"],
    name: { en: "Raiden Shogun", zh_CN: "雷电将军" },
  },
  Razor: {
    material_ascention: ["Vajrada Amethyst", "Lightning Prism", "Damaged Mask"],
    material_talent: ["Resistance", "Damaged Mask", "Dvalin's Claw"],
    name: { en: "Razor", zh_CN: "雷泽" },
  },
  Rosaria: {
    material_ascention: ["Shivada Jade", "Hoarfrost Core", "Recruit's Insignia"],
    material_talent: ["Ballad", "Recruit's Insignia", "Shadow of the Warrior"],
    name: { en: "Rosaria", zh_CN: "罗莎莉亚" },
  },
  "Sangonomiya Kokomi": {
    material_ascention: ["Varunada Lazurite", "Dew of Repudiation", "Spectral Husk"],
    material_talent: ["Transience", "Spectral Husk", "Hellfire Butterfly"],
    name: { en: "Sangonomiya Kokomi", zh_CN: "珊瑚宫心海" },
  },
  Sayu: {
    material_ascention: ["Vayuda Turquoise", "Marionette Core", "Whopperflower Nectar"],
    material_talent: ["Light", "Whopperflower Nectar", "Gilded Scale"],
    name: { en: "Sayu", zh_CN: "早柚" },
  },
  Shenhe: {
    material_ascention: ["Shivada Jade", "Dragonheir's False Fin", "Whopperflower Nectar"],
    material_talent: ["Prosperity", "Whopperflower Nectar", "Hellfire Butterfly"],
    name: { en: "Shenhe", zh_CN: "申鹤" },
  },
  Sucrose: {
    material_ascention: ["Vayuda Turquoise", "Hurricane Seed", "Whopperflower Nectar"],
    material_talent: ["Freedom", "Whopperflower Nectar", "Spirit Locket of Boreas"],
    name: { en: "Sucrose", zh_CN: "砂糖" },
  },
  Tartaglia: {
    material_ascention: ["Varunada Lazurite", "Cleansing Heart", "Recruit's Insignia"],
    material_talent: ["Freedom", "Recruit's Insignia", "Shard of a Foul Legacy"],
    name: { en: "Tartaglia", zh_CN: "达达利亚" },
  },
  Thoma: {
    material_ascention: ["Agnidus Agate", "Smoldering Pearl", "Treasure Hoarder Insignia"],
    material_talent: ["Transience", "Treasure Hoarder Insignia", "Hellfire Butterfly"],
    name: { en: "Thoma", zh_CN: "托马" },
  },
  Venti: {
    material_ascention: ["Vayuda Turquoise", "Hurricane Seed", "Slime Condensate"],
    material_talent: ["Ballad", "Slime Condensate", "Tail of Boreas"],
    name: { en: "Venti", zh_CN: "温迪" },
  },
  Xiangling: {
    material_ascention: ["Agnidus Agate", "Everflame Seed", "Slime Condensate"],
    material_talent: ["Diligence", "Slime Condensate", "Dvalin's Claw"],
    name: { en: "Xiangling", zh_CN: "香菱" },
  },
  Xiao: {
    material_ascention: ["Vayuda Turquoise", "Juvenile Jade", "Slime Condensate"],
    material_talent: ["Prosperity", "Slime Condensate", "Shadow of the Warrior"],
    name: { en: "Xiao", zh_CN: "魈" },
  },
  Xingqiu: {
    material_ascention: ["Varunada Lazurite", "Cleansing Heart", "Damaged Mask"],
    material_talent: ["Gold", "Damaged Mask", "Tail of Boreas"],
    name: { en: "Xingqiu", zh_CN: "行秋" },
  },
  Xinyan: {
    material_ascention: ["Agnidus Agate", "Everflame Seed", "Treasure Hoarder Insignia"],
    material_talent: ["Gold", "Treasure Hoarder Insignia", "Tusk of Monoceros Caeli"],
    name: { en: "Xinyan", zh_CN: "辛焱" },
  },
  Yanfei: {
    material_ascention: ["Agnidus Agate", "Juvenile Jade", "Treasure Hoarder Insignia"],
    material_talent: ["Gold", "Treasure Hoarder Insignia", "Bloodjade Branch"],
    name: { en: "Yanfei", zh_CN: "烟绯" },
  },
  Yoimiya: {
    material_ascention: ["Agnidus Agate", "Smoldering Pearl", "Divining Scroll"],
    material_talent: ["Transience", "Divining Scroll", "Dragon Lord's Crown"],
    name: { en: "Yoimiya", zh_CN: "宵宫" },
  },
  "Yun Jin": {
    material_ascention: ["Prithiva Topaz", "Riftborn Regalia", "Damaged Mask"],
    material_talent: ["Diligence", "Damaged Mask", "Ashen Heart"],
    name: { en: "Yun Jin", zh_CN: "云堇" },
  },
  Zhongli: {
    material_ascention: ["Prithiva Topaz", "Basalt Pillar", "Slime Condensate"],
    material_talent: ["Gold", "Slime Condensate", "Tusk of Monoceros Caeli"],
    name: { en: "Zhongli", zh_CN: "钟离" },
  },
};

for (const [id, character] of Object.entries(characters)) {
  character.material_ascention = character.material_ascention.slice(3);
  character.material_talent = character.material_talent.slice(3);
}
console.log(characters);
