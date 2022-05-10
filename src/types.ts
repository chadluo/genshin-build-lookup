declare module "types";

export type ItemType = "character" | "weapon" | "weekly_boss" | "boss" | "talent_domain" | "weapon_domain";

export type SupportedLanguages = "en" | "zh-CN";
export type I18nObject = { [lang in SupportedLanguages]: string[] };

export interface WishObject {
  id: string;
  type: ItemType;
  rarity: number;
  name: I18nObject;
  materials: string[];
}

export interface Character extends WishObject {}
export interface Weapon extends WishObject {
  category: WeaponCategory;
}
export enum WeaponCategory {
  BOW,
  CATALYST,
  CLAYMORE,
  POLEARM,
  SWORD,
}

export type Region = "Mondstadt" | "Liyue" | "Inazuma";
