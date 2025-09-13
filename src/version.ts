const versions: { version: string; start: number; items: string[] }[] = [
  {
    version: "5.8",
    start: new Date("2025-07-30").getTime(),
    items: ["Ineffa", "Fractured Halo", "Flame-Forged Insight"],
  },
  {
    version: "Luna I",
    start: new Date("2025-09-10").getTime(),
    items: [
      "Aino",
      "Flins",
      "Lauma",
      "Nightweaver’s Looking Glass",
      "Bloodsoaked Ruins",
      "Snare Hook",
      "Etherlight Spindlelute",
      "Blackmarrow Lantern",
      "Master Key",
      "Prospector’s Shovel",
      "Serenity’s Call",
      "Moonweaver’s Dawn",
    ],
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
