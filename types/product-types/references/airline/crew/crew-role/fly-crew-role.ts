import { FlyCrew } from "../crew.types";

export interface FlyCrewRole {
  id: string;

  name: string;
  slug: string;
  description?: string;
  icon?: string;
  sortOrder: number;
  active: boolean;

  crews?: FlyCrew[];

  createdAt: Date;
  updatedAt: Date;
}
