const versions: { version: string; start: number; items: string[] }[] = [
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
  {
    version: "Luna II",
    start: new Date("2025-10-22").getTime(),
    items: [
      "Nefer",
      "Reliquary of Truth",
      "Sacrificer’s Staff",
      "Dawning Frost",
    ],
  }, {
    version: "Luna III", start: new Date("2025-12-03").getTime(),
    items: [
      "Durin", "Jahoda", "The Daybreak Chronicles", "Athame Artis",
      "Rainbow Serpent’s Rain Bow"
    ]
  }
];

export function findRecents() {
  const now = Date.now();
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
