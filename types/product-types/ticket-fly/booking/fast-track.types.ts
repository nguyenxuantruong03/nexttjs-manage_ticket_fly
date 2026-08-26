import { FlyPassenger } from "./passenger.types";

export interface FlyFastTrack {
  id: string;

  passengerId: string;
  passenger?: FlyPassenger;

  enabled: boolean;

  amount?: number;

}