import * as I18n from "./i18n";

export type Region = "Mondstadt" | "Liyue" | "Inazuma" | "Sumeru";

export type ItemType = "character" | "weapon" | "weekly_boss" | "boss" | "enemy" | "talent_domain" | "weapon_domain";

export const TYPE_CHARACTER = "character";
export const TYPE_WEAPON = "weapon";
export const TYPE_WEEKLY_BOSS = "weekly_boss";
export const TYPE_BOSS = "boss";
export const TYPE_ENEMY = "enemy";
export const TYPE_TALENT_DOMAIN = "talent_domain";
export const TYPE_WEAPON_DOMAIN = "weapon_domain";

export interface WishObject {
  id: string;
  type: ItemType;
  rarity: number;
  name: I18n.I18nObject;
  materials?: string[];
}
