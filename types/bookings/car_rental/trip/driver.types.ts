import { CarRental } from "../core/car-rental.types";
import { DriverStatus } from "../enums";

export interface CarRentalDriver {
  id: string;

  rentalId: string;
  rental?: CarRental;

  name: string;

  phone?: string;

  languages: string[];

  experienceYears?: number;

  rating: number;

  status: DriverStatus;

  image?: string;

  createdAt: string;

  updatedAt: string;
}