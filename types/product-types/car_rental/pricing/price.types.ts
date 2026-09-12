import { RentalDurationType } from "../enums";
import { CarRentalVehicle } from "../vehicle/vehicle.types";
import { CarRentalPriceBreakdown } from "./price-breakdown.types";
import { CarRentalPriceRule } from "./price-rule.types";

export interface CarRentalPrice {
  id: string;

  vehicleId: string;
  vehicle: CarRentalVehicle;

  // =====================
  // VALID TIME
  // =====================

  effectiveFrom?: Date | null;
  effectiveTo?: Date | null;

  // =====================
  // PRICE TYPE
  // =====================

  pricingType: RentalDurationType;

  // =====================
  // PRICE
  // =====================

  pricePerHour: number | null;
  pricePerDay: number | null;
  pricePerWeek: number | null;
  pricePerMonth: number | null;


    // =====================
  // ORIGIN PRICE
  // =====================

  originalPricePerHour: number | null;
  originalPricePerDay: number | null;
  originalPricePerWeek: number | null;
  originalPricePerMonth: number | null;

  // =====================
  // RULE
  // =====================

  minimumDays: number | null;
  maximumDays: number | null;

  // =====================
  // EXTRA
  // =====================

  breakdown: CarRentalPriceBreakdown | null;
  priceRules: CarRentalPriceRule[];

  createdAt: string;
  updatedAt: string;
}
