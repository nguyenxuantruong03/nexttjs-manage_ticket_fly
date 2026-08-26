import { WeekDay } from "../../../common/enums";
import { CarRental } from "../core/car-rental.types";

export interface CarRentalBusinessHour {
  id: string;

  rentalId: string;
  rental: CarRental;

  day: WeekDay;

  openTime: string;
  closeTime: string;

  closed: boolean;

  createdAt: string;
}