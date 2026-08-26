import { FlyAirport } from "../../references/airport/airport.types";
import { FlyPassenger } from "./passenger.types";

export interface FlyLounge {
  id: string;

  airportId: string;
  airport?: FlyAirport;

  name: string;

  description?: string;

  image?: string;

  price?: number;

  passengers?: FlyPassengerLounge[];

}

// ======================================================
// PASSENGER LOUNGE
// ======================================================

export interface FlyPassengerLounge {
  id: string;

  passengerId: string;
  passenger?: FlyPassenger;

  loungeId: string;
  lounge?: FlyLounge;

  amount?: number;

}