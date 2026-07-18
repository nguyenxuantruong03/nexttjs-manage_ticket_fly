import { FlyTrip } from "../trip/trip.types";


export interface FlyConnection {
  id: string;

  firstTripId: string;

  firstTrip?: FlyTrip;

  secondTripId: string;

  secondTrip?: FlyTrip;

  layoverMinutes: number;

  airportChange: boolean;

  baggageTransfer?: FlyBaggageTransfer[];

  terminalChange: boolean;
}



export interface FlyBaggageTransfer {
  id: string;

  connectionId: string;

  connection?: FlyConnection;

  automaticTransfer: boolean;

  customsRequired: boolean;

  collectAgain: boolean;
}