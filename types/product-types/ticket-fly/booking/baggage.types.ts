import { FlyPassenger } from "./passenger.types";

export interface FlyExtraBaggage {
  id: string;

  passengerId: string;
  passenger?: FlyPassenger;

  weightKg: number;

  amount: number;

}