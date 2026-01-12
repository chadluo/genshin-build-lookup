const versions: { version: string; start: number; items: string[] }[] = [
  {
    version: "Luna III",
    start: new Date("2025-12-03").getTime(),
    items: [
      "Durin",
      "Jahoda",
      "The Daybreak Chronicles",
      "Athame Artis",
      "Rainbow Serpent’s Rain Bow",
    ],
  },
  {
    version: "Luna IV",
    start: new Date("2026-01-14").getTime(),
    items: [
      "Columbina",
      "Zibai",
      "Illuga",
      "Nocturne’s Curtain Call",
      "Lightbearing Moonshard",
    ],
  },
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
