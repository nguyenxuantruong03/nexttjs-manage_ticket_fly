import { RentalDurationType } from "../enums";
import { CarRentalTrip } from "./trip.types";

export interface CarRentalSchedule {
  id: string;

  tripId: string;
  trip?: CarRentalTrip;

  durationType: RentalDurationType;

  minimumHours?: number;

  minimumDays?: number;

  maximumDays?: number;

  pickupTime?: string;

  returnTime?: string;
}