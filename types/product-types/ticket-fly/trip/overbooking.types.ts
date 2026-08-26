import { FlyAirline } from "../../references/airline/airline.types";
import { FlyCabinClass } from "../fly-cabin-class";

export interface FlyOverbookingRule {
  id: string;

  airlineId: string;
  airline?: FlyAirline;

  cabinClassId: string;
  cabinClass?: FlyCabinClass;

  percentage: number;
}
