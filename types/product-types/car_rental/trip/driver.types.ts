import { CarRental } from "../core/car-rental.types";
import { DriverStatus } from "../enums";

export interface CarRentalDriver {
  id: string;

  rentalId: string;
  rental: CarRental;

  name: string;
  phone: string | null;

  languages: string[];

  experienceYears: number | null;

  rating: number;
  status: DriverStatus;

  image: string | null;

  createdAt: string;
  updatedAt: string;
}