import { HotelRoomPriceBreakdown } from "./price-breakdown.types";
import { HotelRoomPriceRule } from "./price-rule.types";
import { HotelRatePlan } from "./rate-plan.types";

export interface HotelRoomPrice {
  id: string;

  ratePlanId: string;
  ratePlan: HotelRatePlan;

  originalPrice: number | null;
  averageNightlyPrice: number | null;

  taxesIncluded: boolean;
  payAtHotel: boolean;

  effectiveFrom?: Date;
  effectiveTo?: Date;

  breakdown: HotelRoomPriceBreakdown | null;

  priceRules: HotelRoomPriceRule[];

  createdAt: Date;
  updatedAt: Date;
}
