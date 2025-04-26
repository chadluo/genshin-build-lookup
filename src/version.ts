const versions: { version: string; start: number; items: string[] }[] = [
  {
    version: "5.5",
    start: new Date("2025-03-26").getTime(),
    items: ["Iansan", "Varesa", "Vivid Notions"],
  },
  {
    version: "5.6",
    start: new Date("2025-05-07").getTime(),
    items: ["Escoffier", "Ifa", "Sequence of Solitude", "Symphonist of Scents"],
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
