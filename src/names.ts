/**
 * Type, Id, Weekday
 */
export function formatId(...parts: any[]) {
  return parts
    .filter((p) => p)
    .map((p) => p.toString())
    .join("-")
    .replaceAll(" ", "-")
    .replaceAll(/[’“”]/g, "");
}
