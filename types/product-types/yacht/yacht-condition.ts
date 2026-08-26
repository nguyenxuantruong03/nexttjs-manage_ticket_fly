import { YachtVehicle } from "./vehicles/vehicle.types";

export interface YachtCondition {
  id: string;

  name: string;
  slug?: string;
  description?: string | null;
  sortOrder: number;
  active: boolean;

  vehicles?: YachtVehicle[];

  createdAt: Date;
  updatedAt: Date;
}
