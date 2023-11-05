const versions: { version: string; start: number; items: string[] }[] = [
  {
    version: "4.0",
    start: new Date(2023, 8 - 1, 16).getTime(),
    items: [
      "Lyney",
      "Lynette",
      "Freminet",
      "The First Great Magic",
      "Scion of the Blazing Sun",
      "Song of Stillness",
      "Sacrificial Jade",
      "Flowing Purity",
      "Talking Stick",
      "Tidal Shadow",
      "Ballard of the Fjords",
      "Rightful Reward",
      "Wolf-Fang",
      "Finale of the Deep",
    ],
  },
  {
    version: "4.1",
    start: new Date(2023, 9 - 1, 27).getTime(),
    items: [
      "Neuvillette",
      "Wriothesley",
      "Tome of the Eternal Flow",
      "Cashflow Supervision",
      "Range Gauge",
      "Ballad of the Boundless Blue",
      "Portable Power Saw",
      "Prospector’s Drill",
      "The Dockhand’s Assistant",
    ],
  },
  {
    version: "4.2",
    start: new Date(2023, 11 - 1, 8).getTime(),
    items: ["Charlotte", "Furina", "Splendor of Tranquil Waters"],
  },
];

export function findRecents() {
  const now = new Date().getTime();
  const currentIndex = versions.findLastIndex((version) => version.start < now);
  if (currentIndex === -1) {
    return { current: [], upcoming: [] };
  } else {
    return {
      current: versions[currentIndex].items,
      upcoming:
        currentIndex > versions.length - 2
          ? []
          : versions[currentIndex + 1].items,
    };
  }
}
