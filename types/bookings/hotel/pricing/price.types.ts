import { Currency } from "@/types/common/enums";
import { HotelRoomPriceBreakdown } from "./price-breakdown.types";
import { HotelRoomPriceRule } from "./price-rule.types";

export interface HotelRoomPrice {
  id: string;

  ratePlanId: string;

  currency: Currency;

  originalPrice?: number | null;

  averageNightlyPrice?: number | null;

  taxesIncluded: boolean;

  payAtHotel: boolean;

  breakdown?: HotelRoomPriceBreakdown | null;

  rules: HotelRoomPriceRule[];
}
