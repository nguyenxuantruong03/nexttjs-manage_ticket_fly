import { FlyPassenger } from "./passenger.types";

export interface FlyPassengerDocument {
  id: string;

  passengerId: string;

  passenger?: FlyPassenger;

  passportNumber?: string;

  passportCountry?: string;

  expiryDate?: Date;

  nationalId?: string;
}