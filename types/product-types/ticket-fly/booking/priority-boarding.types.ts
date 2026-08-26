import { FlyPassenger } from "./passenger.types";

export interface FlyPriorityBoarding {
  id: string;

  passengerId: string;
  passenger?: FlyPassenger;

  enabled: boolean;

  amount?: number;

}