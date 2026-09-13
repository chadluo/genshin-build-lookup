const versions: { version: string; start: number; items: string[] }[] = [
  {
    version: "7.0",
    start: new Date('2026-08-12').getTime(),
    items: ["Odette", "Alyosha", "Whitelake Frostfeather", "Exaiphanes Blade", "Emberwell", "Covenant of Frost and Snow", "Blade of Atonement", "Echoes of the Heart", "Song of the Vigil", "Heretic’s Molten Blade", "Jade Vista", "Forged by the Golden Melody", "Clash of Kings", "Frostbreath"]
  },
  {
    version: "7.1", start: new Date('2026-09-23').getTime(),
    items: ["Vesna", "Vodyanitsa", "Hymn of the Maelstrom", "Beyond the Chrysalis", "Breezeborne Refrain", "Winter’s Heavy Heart", "New Bough", "Silver Light"]
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
