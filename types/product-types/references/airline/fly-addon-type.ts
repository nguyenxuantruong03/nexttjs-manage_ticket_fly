import { FlyAddon } from "./addon.types";

export interface FlyAddonType {
  id: string;

  name: string;
  slug: string;
  description?: string;
  icon?: string;
  sortOrder: number;
  active: boolean;

  addons?: FlyAddon[];

  createdAt: Date;
  updatedAt: Date;
}
