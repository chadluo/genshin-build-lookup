const versions: { version: string; start: number; items: string[] }[] = [
  {
    version: "5.1",
    start: new Date("2024-10-09").getTime(),
    items: [
      "Xilonen",
      "Peak Patrol Song",
      "Sturdy Bone",
      "Mountain-Bracing Bolt",
      "Fruitful Hook",
    ],
  },
  {
    version: "5.2",
    start: new Date("2024-11-20").getTime(),
    items: [
      "Chasca",
      "Ororon",
      "Astral Vulture’s Crimson Plumage",
      "Flower-Wreathed Feathers",
      "Waveriding Whirl",
      "Calamity of Eshu",
    ],
  },
  {
    version: "5.3",
    start: new Date("2025-01-01").getTime(),
    items: [
      "Mavuika",
      "Citlali",
      "Lan Yan",
      "Starcaller’s Watch",
      "A Thousand Blazing Suns",
    ],
  },
  {
    version: "5.4",
    start: new Date("2025-02-12").getTime(),
    items: [
      "Yumemizuki Mizuki",
      "Sunny Morning Sleep-In",
      "Tamayuratei no Ohanashi",
    ],
  },
  {
    version: "5.5",
    start: new Date("2025-03-26").getTime(),
    items: ["Iansan", "Varessa", "Vivid Notions"],
  },
];

export function findRecents() {
  const now = new Date().getTime();
  const currentIndex = versions.findLastIndex((version) => version.start < now);

  if (currentIndex === -1) {
    return { current: [], upcoming: [] };
  }

  return {
    current: versions[currentIndex].items,
    upcoming:
      currentIndex > versions.length - 2
        ? []
        : versions[currentIndex + 1].items,
  };
}
