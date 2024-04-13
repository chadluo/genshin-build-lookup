const versions: { version: string; start: number; items: string[] }[] = [
  {
    version: "4.3",
    start: new Date(2023, 12 - 1, 20).getTime(),
    items: [
      "Navia",
      "Chevreuse",
      "Verdict",
      "Ultimate Overlord’s Mega Magic Sword",
    ],
  },
  {
    version: "4.4",
    start: new Date(2024, 1 - 1, 31).getTime(),
    items: ["Gaming", "Xianyun", "Crane’s Echoing Call"],
  },
  {
    version: "4.5",
    start: new Date(2024, 3 - 1, 12).getTime(),
    items: ["Chiori", "Uraku Mitsugiri", "Dialogues of the Desert Sages"],
  },
  {
    version: "4.6",
    start: new Date(2024, 4 - 1, 24).getTime(),
    items: ["Arlecchino", "Crimson Moon’s Semblance"],
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
