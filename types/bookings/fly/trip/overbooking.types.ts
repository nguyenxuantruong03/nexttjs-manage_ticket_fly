import { FlyAirline } from "../airline/airline.types";
import { FlyCabinClass } from "../enums";

export interface FlyOverbookingRule {
  id: string;

  airlineId: string;

  airline?: FlyAirline;

  cabinClass: FlyCabinClass;

  percentage: number;
}