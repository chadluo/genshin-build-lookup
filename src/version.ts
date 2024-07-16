const versions: { version: string; start: number; items: string[] }[] = [
  {
    version: "4.6",
    start: new Date(2024, 4 - 1, 24).getTime(),
    items: ["Arlecchino", "Crimson Moon’s Semblance"],
  },
  {
    version: "4.7",
    start: new Date(2024, 6 - 1, 5).getTime(),
    items: [
      "Clorinde",
      "Sigewinne",
      "Sethos",
      "Absolution",
      "Silvershower Heartstrings",
      "Cloudforged",
    ],
  },
  {
    version: "4.8",
    start: new Date(2024, 7 - 1, 16).getTime(),
    items: ["Emilie", "Lumidouce Elegy"],
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
