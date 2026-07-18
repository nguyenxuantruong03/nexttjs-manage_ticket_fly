import { CarRental } from "../core/car-rental.types";
import { CarRentalTripFee } from "./trip-fee.types";
import { CarRentalLocation } from "./trip-location.types";
import { CarRentalSchedule } from "./trip-schedule.types";

export interface CarRentalTrip {
  id: string;

  rentalId: string;
  rental?: CarRental;

  locations: CarRentalLocation[];

  schedule?: CarRentalSchedule;

  tripFee?: CarRentalTripFee;
}