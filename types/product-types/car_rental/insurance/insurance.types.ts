import { CarRentalBookingInsurance } from "../booking/booking-insurance";
import { CarRental } from "../core/car-rental.types";
import { InsuranceType } from "../insurance-type.type";
import { CarRentalInsuranceBenefit } from "./insurance-benefit.types";

export interface CarRentalInsurance {
  id: string;

  // ======================================================
  // RELATION
  // ======================================================

  rentalId: string;
  rental: CarRental;

  // ======================================================
  // BASIC
  // ======================================================

  typeId: string | null;
  type: InsuranceType | null;

  name: string;

  description: string | null;

  // ======================================================
  // PRICE
  // ======================================================

  pricePerDay: number | null;

  fixedPrice: number | null;

  // ======================================================
  // BENEFITS
  // ======================================================

  benefits: CarRentalInsuranceBenefit[];

  bookings: CarRentalBookingInsurance[];

  active: boolean;

  createdAt: string;

  updatedAt: string;
}
