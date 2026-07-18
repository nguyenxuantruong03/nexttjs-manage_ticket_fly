import { FlyAirport } from "../airport/airport.types";

export interface FlyMinimumConnectionTime {
  id: string;

  airportId: string;

  airport?: FlyAirport;

  domesticMinutes: number;

  internationalMinutes: number;
}