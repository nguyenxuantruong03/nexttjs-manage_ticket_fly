import { FlySeat } from "../references/airline/aircraft/cabin.types";

export interface FlySeatType {
  id: string;

  name: string;
  slug: string;
  description?: string;
  icon?: string;
  sortOrder: number;
  active: boolean;

  seats?: FlySeat[];

  createdAt: Date;
  updatedAt: Date;
}
