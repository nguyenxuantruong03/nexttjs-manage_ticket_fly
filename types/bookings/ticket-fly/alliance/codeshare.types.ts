import { FlyAirline } from "../airline/airline.types";
import { FlyTrip } from "../trip/trip.types";

export interface FlyCodeshare {
  id: string;

  tripId: string;

  trip?: FlyTrip;

  marketingAirlineId: string;

  marketingAirline?: FlyAirline;

  marketingFlightNumber: string;

  operatingAirlineId: string;

  operatingAirline?: FlyAirline;

  operatingFlightNumber: string;

  createdAt: Date;
}
