import { FlyAircraft } from "./aircraft.types";

export interface FlyAircraftSpecification {
  id: string;

  aircraftId: string;
  aircraft?: FlyAircraft;

  maxRangeKm?: number;

  cruiseSpeed?: number;

  maxPassengers?: number;

  engineType?: string;

  engineCount?: number;

  wingspan?: number;

  length?: number;

  height?: number;

  firstFlightYear?: number;
}
