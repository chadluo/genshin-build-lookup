import type { I18nObject } from "./i18n";

export const TYPE_CHARACTER = "character";
export const TYPE_WEAPON = "weapon";
export const TYPE_WEEKLY_BOSS = "weekly_boss";
export const TYPE_BOSS = "boss";
export const TYPE_ENEMY = "enemy";
export const TYPE_TALENT_DOMAIN = "talent_domain";
export const TYPE_WEAPON_DOMAIN = "weapon_domain";

export type ItemType =
  | typeof TYPE_CHARACTER
  | typeof TYPE_WEAPON
  | typeof TYPE_WEEKLY_BOSS
  | typeof TYPE_BOSS
  | typeof TYPE_ENEMY
  | typeof TYPE_TALENT_DOMAIN
  | typeof TYPE_WEAPON_DOMAIN;

export type BaseItem = {
  id: string;
  itemType: ItemType;
  name: I18nObject;
};
