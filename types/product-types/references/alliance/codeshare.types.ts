import { FlyTrip } from "../../ticket-fly/trip/trip.types";
import { FlyAirline } from "../airline/airline.types";

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
