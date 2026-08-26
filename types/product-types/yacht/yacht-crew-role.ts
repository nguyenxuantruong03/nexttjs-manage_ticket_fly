import { YachtCrew } from "./crew/crew.types";

export interface YachtCrewRole {
  id: string;

  name: string;
  slug?: string;
  description?: string | null;
  icon?: string | null;
  sortOrder: number;
  active: boolean;

  crews?: YachtCrew[];

  createdAt: Date;
  updatedAt: Date;
}
