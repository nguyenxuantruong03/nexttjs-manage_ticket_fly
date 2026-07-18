import { Currency } from "@/types/common/enums";
import { CarRentalBookingInsurance } from "./booking-insurance.types";
import { CarRentalInsuranceBenefit } from "./insurance-benefit.types";
import { CarRentalInsuranceType } from "../enums";

export interface CarRentalInsurance {
  id: string;

  // Relation
  rentalId: string;

  // Basic
  type: CarRentalInsuranceType;

  name: string;

  description?: string;

  // Price
  pricePerDay?: number;

  fixedPrice?: number;

  currency: Currency;

  // Benefits
  benefits: CarRentalInsuranceBenefit[];

  bookings: CarRentalBookingInsurance[];

  active: boolean;

  createdAt: string;

  updatedAt: string;
}
