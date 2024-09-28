const versions: { version: string; start: number; items: string[] }[] = [
  {
    version: "4.8",
    start: new Date(2024, 7 - 1, 16).getTime(),
    items: ["Emilie", "Lumidouce Elegy"],
  },
  {
    version: "5.0",
    start: new Date(2024, 8 - 1, 28).getTime(),
    items: [
      "Mualani",
      "Kinich",
      "Kachina",
      "Fang of the Mountain King",
      "Surf’s Up",
      "Flute of Ezpitzal",
      "Earth Shaker",
      "Footprint of the Rainbow",
      "Ring of Yaxche",
      "Chain Breaker",
      "Ash-Graven Drinking Horn",
    ],
  },
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
