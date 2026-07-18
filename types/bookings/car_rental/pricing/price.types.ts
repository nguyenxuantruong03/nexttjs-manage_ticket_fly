import { Currency } from "@/types/common/enums";
import { RentalDurationType } from "../enums";
import { CarRentalPriceBreakdown } from "./price-breakdown.types";
import { CarRentalPriceRule } from "./price-rule.types";

export interface CarRentalPrice {
  id: string;

  vehicleId: string;

  // =====================
  // VALID TIME
  // =====================

  startDate?: string;

  endDate?: string;

  // =====================
  // PRICE TYPE
  // =====================

  pricingType: RentalDurationType;

  // =====================
  // PRICE
  // =====================

  currency: Currency;

  pricePerHour?: number;

  pricePerDay?: number;

  pricePerWeek?: number;

  pricePerMonth?: number;

  originalPrice?: number;

  // =====================
  // RULE
  // =====================

  minimumDays?: number;

  maximumDays?: number;

  // =====================
  // EXTRA
  // =====================

  breakdown?: CarRentalPriceBreakdown;

  priceRules: CarRentalPriceRule[];

  createdAt: string;

  updatedAt: string;
}
