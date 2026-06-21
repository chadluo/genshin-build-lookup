const versions: { version: string; start: number; items: string[] }[] = [
  {
    version: "Luna VII",
    start: new Date('2026-05-20').getTime(),
    items: ["Nicole", "Lohen", "Prune", "Angelos’ Heptades", "Disaster and Remorse"]
  }
  , {
    version: "Luna VIII",
    start: new Date('2026-07-01').getTime(),
    items: ["Sandrone", "A Teaspoon of Transcendence"]
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
