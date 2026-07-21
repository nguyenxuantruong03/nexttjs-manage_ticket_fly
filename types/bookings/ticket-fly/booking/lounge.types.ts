import { FlyPassenger } from "./passenger.types";
import { FlyAirport } from "../airport/airport.types";

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