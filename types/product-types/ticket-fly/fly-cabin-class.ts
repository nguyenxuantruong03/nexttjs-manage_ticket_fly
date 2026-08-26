import { FlyCabin } from "../references/airline/aircraft/cabin.types";
import { FlyFare } from "./pricing/fare.types";
import { FlyCabinInventory } from "./trip/inventory.types";
import { FlyOverbookingRule } from "./trip/overbooking.types";

export interface FlyCabinClass {
  id: string;

  name: string;
  slug: string;
  description?: string;
  icon?: string;
  sortOrder: number;
  active: boolean;

  cabins?: FlyCabin[];
  fares?: FlyFare[];
  cabinInventories?: FlyCabinInventory[];
  overbookingRules?: FlyOverbookingRule[];

  createdAt: Date;
  updatedAt: Date;
}
