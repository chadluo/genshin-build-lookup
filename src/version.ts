const versions: { version: string; start: number; items: string[] }[] = [
  {
    version: "Luna V",
    start: new Date("2026-02-25").getTime(),
    items: ["Varka", "Gest of the Mighty Wolf"]
  }, {
    version: "Luna VI",
    start: new Date('2026-04-08').getTime(),
    items: ["Linnea", "Golden Frostbound Oath"]
  }, {
    version: "Luna VII",
    start: new Date('2026-05-20').getTime(),
    items: ["Nicole", "Lohen", "Prune", "Angelos’ Heptade", "Disaster and Remorse"]
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
