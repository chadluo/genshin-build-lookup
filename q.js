"use strict";

const characters = [
  {
    id: "Albedo",
    material_ascention: ["坚牢黄玉", "玄岩之塔", "塞西莉亚花", "绘卷"],
    material_talent: ["诗文", "绘卷", "吞天之鲸・只角"],
    name: {
      en: "Albedo",
      zh_CN: "阿贝多",
    },
  },
  {
    id: "Aloy",
    material_ascention: ["哀叙冰玉", "晶凝之华", "晶化骨髓", "浮游核"],
    material_talent: ["自由", "浮游核", "熔毁之刻"],
    name: {
      en: "Aloy",
      zh_CN: "埃洛伊",
    },
  },
  {
    id: "Amber",
    material_ascention: ["燃愿玛瑙", "常燃火种", "小灯草", "箭簇"],
    material_talent: ["自由", "箭簇", "东风的吐息"],
    name: {
      en: "Amber",
      zh_CN: "安柏",
    },
  },
  {
    id: "Arataki Itto",
    material_ascention: ["坚牢黄玉", "兽境王器", "鬼兜虫", "史莱姆"],
    material_talent: ["风雅", "史莱姆", "灰烬之心"],
    name: {
      en: "Arataki Itto",
      zh_CN: "荒泷一斗",
    },
  },
  {
    id: "Barbara",
    material_ascention: ["涤净青金", "净水之心", "慕风蘑菇", "绘卷"],
    material_talent: ["自由", "绘卷", "北风之环"],
    name: {
      en: "Barbara",
      zh_CN: "芭芭拉",
    },
  },
  {
    id: "Beidou",
    material_ascention: ["最胜紫晶", "雷光棱镜", "夜泊石", "鸦印"],
    material_talent: ["黄金", "鸦印", "东风的吐息"],
    name: {
      en: "Beidou",
      zh_CN: "北斗",
    },
  },
  {
    id: "Bennett",
    material_ascention: ["燃愿玛瑙", "常燃火种", "风车菊", "鸦印"],
    material_talent: ["抗争", "鸦印", "东风之翎"],
    name: {
      en: "Bennett",
      zh_CN: "班尼特",
    },
  },
  {
    id: "Chongyun",
    material_ascention: ["哀叙冰玉", "极寒之核", "石珀", "面具"],
    material_talent: ["勤劳", "面具", "东风的吐息"],
    name: {
      en: "Chongyun",
      zh_CN: "重云",
    },
  },
  {
    id: "Diluc",
    material_ascention: ["燃愿玛瑙", "常燃火种", "小灯草", "徽记"],
    material_talent: ["抗争", "徽记", "东风之翎"],
    name: {
      en: "Diluc",
      zh_CN: "迪卢克",
    },
  },
  {
    id: "Diona",
    material_ascention: ["哀叙冰玉", "极寒之核", "嘟嘟莲", "箭簇"],
    material_talent: ["自由", "箭簇", "魔王之刃・残片"],
    name: {
      en: "Diona",
      zh_CN: "迪奥娜",
    },
  },
  {
    id: "Eula",
    material_ascention: ["哀叙冰玉", "晶凝之华", "蒲公英籽", "面具"],
    material_talent: ["抗争", "面具", "龙王之冕"],
    name: {
      en: "Eula",
      zh_CN: "优菈",
    },
  },
  {
    id: "Fischl",
    material_ascention: ["最胜紫晶", "雷光棱镜", "小灯草", "箭簇"],
    material_talent: ["诗文", "箭簇", "北风的魂匣"],
    name: {
      en: "Fischl",
      zh_CN: "菲谢尔",
    },
  },
  {
    id: "Ganyu",
    material_ascention: ["哀叙冰玉", "极寒之核", "清心", "花蜜"],
    material_talent: ["勤劳", "花蜜", "武炼之魂・孤影"],
    name: {
      en: "Ganyu",
      zh_CN: "甘雨",
    },
  },
  {
    id: "Gorou",
    material_ascention: ["坚牢黄玉", "恒常机关之心", "珊瑚真珠", "浮游核"],
    material_talent: ["天光", "浮游核", "熔毁之刻"],
    name: {
      en: "Gorou",
      zh_CN: "五郎",
    },
  },
  {
    id: "Hu Tao",
    material_ascention: ["燃愿玛瑙", "未熟之玉", "霓裳花", "花蜜"],
    material_talent: ["勤劳", "花蜜", "魔王之刃・残片"],
    name: {
      en: "Hu Tao",
      zh_CN: "胡桃",
    },
  },
  {
    id: "Jean",
    material_ascention: ["自在松石", "飓风之种", "蒲公英籽", "面具"],
    material_talent: ["抗争", "面具", "东风之翎"],
    name: {
      en: "Jean",
      zh_CN: "琴",
    },
  },
  {
    id: "Kaedehara Kazuha",
    material_ascention: ["自在松石", "魔偶机心", "海灵芝", "鸦印"],
    material_talent: ["勤劳", "鸦印", "鎏金之鳞"],
    name: {
      en: "Kaedehara Kazuha",
      zh_CN: "枫原万叶",
    },
  },
  {
    id: "Kaeya",
    material_ascention: ["哀叙冰玉", "极寒之核", "嘟嘟莲", "鸦印"],
    material_talent: ["诗文", "鸦印", "北风的魂匣"],
    name: {
      en: "Kaeya",
      zh_CN: "凯亚",
    },
  },
  {
    id: "Kamisato Ayaka",
    material_ascention: ["哀叙冰玉", "恒常机关之心", "绯樱绣球", "刀镡"],
    material_talent: ["风雅", "刀镡", "血玉之枝"],
    name: {
      en: "Kamisato Ayaka",
      zh_CN: "神里绫华",
    },
  },
  {
    id: "Keqing",
    material_ascention: ["最胜紫晶", "雷光棱镜", "石珀", "花蜜"],
    material_talent: ["繁荣", "花蜜", "北风之环"],
    name: {
      en: "Keqing",
      zh_CN: "刻晴",
    },
  },
  {
    id: "Klee",
    material_ascention: ["燃愿玛瑙", "常燃火种", "慕风蘑菇", "绘卷"],
    material_talent: ["自由", "绘卷", "北风之环"],
    name: {
      en: "Klee",
      zh_CN: "可莉",
    },
  },
  {
    id: "Kujou Sara",
    material_ascention: ["最胜紫晶", "雷霆数珠", "血斛", "面具"],
    material_talent: ["风雅", "面具", "灰烬之心"],
    name: {
      en: "Kujou Sara",
      zh_CN: "九条裟罗",
    },
  },
  {
    id: "Lisa",
    material_ascention: ["最胜紫晶", "雷光棱镜", "落落莓", "史莱姆"],
    material_talent: ["诗文", "史莱姆", "东风之爪"],
    name: {
      en: "Lisa",
      zh_CN: "丽莎",
    },
  },
  {
    id: "Mona",
    material_ascention: ["涤净青金", "净水之心", "慕风蘑菇", "花蜜"],
    material_talent: ["抗争", "花蜜", "北风之环"],
    name: {
      en: "Mona",
      zh_CN: "莫娜",
    },
  },
  {
    id: "Ningguang",
    material_ascention: ["坚牢黄玉", "玄岩之塔", "琉璃百合", "徽记"],
    material_talent: ["繁荣", "徽记", "北风的魂匣"],
    name: {
      en: "Ningguang",
      zh_CN: "凝光",
    },
  },
  {
    id: "Noelle",
    material_ascention: ["坚牢黄玉", "玄岩之塔", "落落莓", "面具"],
    material_talent: ["抗争", "面具", "东风之爪"],
    name: {
      en: "Noelle",
      zh_CN: "诺艾尔",
    },
  },
  {
    id: "Qiqi",
    material_ascention: ["哀叙冰玉", "极寒之核", "琉璃袋", "绘卷"],
    material_talent: ["繁荣", "绘卷", "北风之尾"],
    name: {
      en: "Qiqi",
      zh_CN: "七七",
    },
  },
  {
    id: "Raiden Shogun",
    material_ascention: ["最胜紫晶", "雷霆数珠", "天云草实", "刀镡"],
    material_talent: ["天光", "刀镡", "熔毁之刻"],
    name: {
      en: "Raiden Shogun",
      zh_CN: "雷电将军",
    },
  },
  {
    id: "Razor",
    material_ascention: ["最胜紫晶", "雷光棱镜", "钩钩果", "面具"],
    material_talent: ["抗争", "面具", "东风之爪"],
    name: {
      en: "Razor",
      zh_CN: "雷泽",
    },
  },
  {
    id: "Rosaria",
    material_ascention: ["哀叙冰玉", "极寒之核", "落落莓", "徽记"],
    material_talent: ["诗文", "徽记", "武炼之魂・孤影"],
    name: {
      en: "Rosaria",
      zh_CN: "罗莎莉亚",
    },
  },
  {
    id: "Sangonomiya Kokomi",
    material_ascention: ["涤净青金", "排异之露", "珊瑚真珠", "浮游核"],
    material_talent: ["浮世", "浮游核", "狱火之蝶"],
    name: {
      en: "Sangonomiya Kokomi",
      zh_CN: "珊瑚宫心海",
    },
  },
  {
    id: "Sayu",
    material_ascention: ["自在松石", "魔偶机心", "晶化骨髓", "花蜜"],
    material_talent: ["天光", "花蜜", "鎏金之鳞"],
    name: {
      en: "Sayu",
      zh_CN: "早柚",
    },
  },
  {
    id: "Shenhe",
    material_ascention: ["哀叙冰玉", "龙嗣伪鳍", "清心", "花蜜"],
    material_talent: ["繁荣", "花蜜", "狱火之蝶"],
    name: {
      en: "Shenhe",
      zh_CN: "申鹤",
    },
  },
  {
    id: "Sucrose",
    material_ascention: ["自在松石", "飓风之种", "风车菊", "花蜜"],
    material_talent: ["自由", "花蜜", "北风的魂匣"],
    name: {
      en: "Sucrose",
      zh_CN: "砂糖",
    },
  },
  {
    id: "Tartaglia",
    material_ascention: ["涤净青金", "净水之心", "星螺", "徽记"],
    material_talent: ["自由", "徽记", "魔王之刃・残片"],
    name: {
      en: "Tartaglia",
      zh_CN: "达达利亚",
    },
  },
  {
    id: "Thoma",
    material_ascention: ["燃愿玛瑙", "阴燃之珠", "幽灯蕈", "鸦印"],
    material_talent: ["浮世", "鸦印", "狱火之蝶"],
    name: {
      en: "Thoma",
      zh_CN: "托马",
    },
  },
  {
    id: "Venti",
    material_ascention: ["自在松石", "飓风之种", "塞西莉亚花", "史莱姆"],
    material_talent: ["诗文", "史莱姆", "北风之尾"],
    name: {
      en: "Venti",
      zh_CN: "温迪",
    },
  },
  {
    id: "Xiangling",
    material_ascention: ["燃愿玛瑙", "常燃火种", "绝云椒椒", "史莱姆"],
    material_talent: ["勤劳", "史莱姆", "东风之爪"],
    name: {
      en: "Xiangling",
      zh_CN: "香菱",
    },
  },
  {
    id: "Xiao",
    material_ascention: ["自在松石", "未熟之玉", "清心", "史莱姆"],
    material_talent: ["繁荣", "史莱姆", "武炼之魂・孤影"],
    name: {
      en: "Xiao",
      zh_CN: "魈",
    },
  },
  {
    id: "Xingqiu",
    material_ascention: ["涤净青金", "净水之心", "霓裳花", "面具"],
    material_talent: ["黄金", "面具", "北风之尾"],
    name: {
      en: "Xingqiu",
      zh_CN: "行秋",
    },
  },
  {
    id: "Xinyan",
    material_ascention: ["燃愿玛瑙", "常燃火种", "琉璃袋", "鸦印"],
    material_talent: ["黄金", "鸦印", "吞天之鲸・只角"],
    name: {
      en: "Xinyan",
      zh_CN: "辛焱",
    },
  },
  {
    id: "Yanfei",
    material_ascention: ["燃愿玛瑙", "未熟之玉", "夜泊石", "鸦印"],
    material_talent: ["黄金", "鸦印", "血玉之枝"],
    name: {
      en: "Yanfei",
      zh_CN: "烟绯",
    },
  },
  {
    id: "Yoimiya",
    material_ascention: ["燃愿玛瑙", "阴燃之珠", "鸣草", "绘卷"],
    material_talent: ["浮世", "绘卷", "龙王之冕"],
    name: {
      en: "Yoimiya",
      zh_CN: "宵宫",
    },
  },
  {
    id: "Yun Jin",
    material_ascention: ["坚牢黄玉", "兽境王器", "琉璃百合", "面具"],
    material_talent: ["勤劳", "面具", "灰烬之心"],
    name: {
      en: "Yun Jin",
      zh_CN: "云堇",
    },
  },
  {
    id: "Zhongli",
    material_ascention: ["坚牢黄玉", "玄岩之塔", "石珀", "史莱姆"],
    material_talent: ["黄金", "史莱姆", "吞天之鲸・只角"],
    name: {
      en: "Zhongli",
      zh_CN: "钟离",
    },
  },
];

const enemies = [
  {
    id: "Andrius",
    materials: ["哀叙冰玉", "坚牢黄玉", "燃愿玛瑙", "北风之环", "北风之尾", "北风的魂匣"],
    zh_CN: "北风狼",
  },
  {
    id: "Dvalin",
    materials: ["自在松石", "最胜紫晶", "涤净青金", "东风之翎", "东风之爪", "东风的吐息"],
    zh_CN: "风魔龙",
  },
  {
    id: "Childe",
    materials: ["涤净青金", "最胜紫晶", "哀叙冰玉", "吞天之鲸・只角", "魔王之刃・残片", "武炼之魂・孤影"],
    zh_CN: "公子",
  },
  {
    id: "Azhdaha",
    materials: ["燃愿玛瑙", "哀叙冰玉", "坚牢黄玉", "涤净青金", "最胜紫晶", "龙王之冕", "血玉之枝", "鎏金之鳞"],
    zh_CN: "若陀龙王",
  },
  {
    id: "La Signora",
    materials: ["哀叙冰玉", "燃愿玛瑙", "熔毁之刻", "狱火之蝶", "灰烬之心"],
    zh_CN: "女士",
  },
  {
    id: "Primo Geovishap",
    materials: ["坚牢黄玉", "哀叙冰玉", "燃愿玛瑙", "涤净青金", "最胜紫晶", "未熟之玉"],
    zh_CN: "古岩龙蜥",
  },
  {
    id: "Cryo Regisvine",
    materials: ["哀叙冰玉", "极寒之核"],
    zh_CN: "急冻树",
  },
  {
    id: "Perpetual Mechanical Array",
    materials: ["坚牢黄玉", "哀叙冰玉", "恒常机关之心"],
    zh_CN: "恒常机关阵列",
  },
  {
    id: "Cryo Hypostasis",
    materials: ["哀叙冰玉", "晶凝之华"],
    zh_CN: "无相之冰",
  },
  {
    id: "Geo Hypostasis",
    materials: ["坚牢黄玉", "玄岩之塔"],
    zh_CN: "无相之岩",
  },
  {
    id: "Hydro Hypostasis",
    materials: ["涤净青金", "排异之露"],
    zh_CN: "无相之水",
  },
  {
    id: "Pyro Hypostasis",
    materials: ["燃愿玛瑙", "阴燃之珠"],
    zh_CN: "无相之火",
  },
  {
    id: "Electro Hypostasis",
    materials: ["最胜紫晶", "雷光棱镜"],
    zh_CN: "无相之雷",
  },
  {
    id: "Anemo Hypostasis",
    materials: ["自在松石", "飓风之种"],
    zh_CN: "无相之风",
  },
  {
    id: "Bathysmal Vishap Herd",
    materials: ["哀叙冰玉", "最胜紫晶", "龙嗣伪鳍"],
    zh_CN: "深海龙蜥",
  },
  {
    id: "Pyro Regisvine",
    materials: ["燃愿玛瑙", "常燃火种"],
    zh_CN: "爆炎树",
  },
  {
    id: "Lochfolk",
    materials: ["涤净青金", "净水之心"],
    zh_CN: "纯水精灵",
  },
  {
    id: "Thunder Manifestation",
    materials: ["最胜紫晶", "雷霆数珠"],
    zh_CN: "雷音权现",
  },
  {
    id: "Maguu Kenki",
    materials: ["哀叙冰玉", "魔偶机心"],
    zh_CN: "魔偶剑鬼",
  },
  {
    id: "Golden Wolflord",
    materials: ["坚牢黄玉", "兽境王器"],
    zh_CN: "黄金王兽",
  },
];

const talents = [
  { id: "Freedom", en: "Freedom", zh_CN: "自由", weekdays: "MT" },
  { id: "Resistance", en: "Resistance", zh_CN: "抗争", weekdays: "TF" },
  { id: "Ballad", en: "Ballad", zh_CN: "诗文", weekdays: "WS" },
  { id: "Prosperity", en: "Prosperity", zh_CN: "繁荣", weekdays: "MT" },
  { id: "Diligence", en: "Diligence", zh_CN: "勤劳", weekdays: "TF" },
  { id: "Gold", en: "Gold", zh_CN: "黄金", weekdays: "WS" },
  { id: "Transience", en: "Transience", zh_CN: "浮世", weekdays: "MT" },
  { id: "Elegance", en: "Elegance", zh_CN: "风雅", weekdays: "TF" },
  { id: "Light", en: "Light", zh_CN: "天光", weekdays: "WS" },
];

for (let c of characters) {
  const aes = new Set();
  c.material_ascention.forEach((m) => {
    enemies.forEach((e) => {
      if (e.materials.includes(m)) {
        aes.add(e.zh_CN);
      }
    });
  });
  const tes = new Set();
  c.material_talent.forEach((m) => {
    enemies.forEach((e) => {
      if (e.materials.includes(m)) {
        tes.add(e.zh_CN);
      }
    });
    talents.forEach((t) => {
      if (t.zh_CN === m) {
        tes.add(weekdays(t.weekdays));
      }
    });
  });
  console.log(c.name.zh_CN, "突破", Array.from(aes), "天赋", Array.from(tes));
}

function weekdays(weekday) {
  switch (weekday) {
    case "MT":
      return "一四";
    case "TF":
      return "二五";
    case "WS":
      return "三六";
  }
}

for (let e of enemies) {
  let cs = [];
  e.materials.forEach((m) => {
    characters.forEach((c) => {
      if (c.material_ascention.includes(m) || c.material_talent.includes(m)) {
        cs.push(c.name.zh_CN);
      }
    });
  });
  console.log(e.zh_CN, cs);
}

for (const wd of ["MT", "TF", "WS"]) {
  let ts = [];
  for (const t of talents) {
    if (t.weekdays === wd) {
      const cs = [];
      for (const c of characters) {
        if (c.material_talent.includes(t.zh_CN)) {
          cs.push(c.name.zh_CN);
        }
      }
      ts.push({ t: t.zh_CN, cs: cs });
    }
  }
  console.log(wd, ts);
}
