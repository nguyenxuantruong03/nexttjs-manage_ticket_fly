import { FlyAirport } from "../../references/airport/airport.types";
import { FlyTrip } from "../trip/trip.types";

export interface FlyDiversion {
  id: string;

  tripId: string;
  trip?: FlyTrip;

  divertedAirportId: string;
  divertedAirport?: FlyAirport;

  reason?: string;
}