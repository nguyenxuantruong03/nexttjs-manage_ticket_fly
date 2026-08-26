import { ExtraFeeType } from "@/types/common/commerce/extra-fee-type.type";
import { HotelRoomPriceBreakdown } from "./price-breakdown.types";
import { PriceCalculationType } from "@/types/common/enums";

export interface HotelExtraFee {
  id: string;

  // ======================================================
  // EXTRA FEE TYPE
  // ======================================================

  extraFeeTypeId: string;
  extraFeeType: ExtraFeeType;

  // ======================================================
  // BREAKDOWN
  // ======================================================

  breakdownId: string;
  breakdown: HotelRoomPriceBreakdown;

  // ======================================================
  // PRICE
  // ======================================================

  amount: number;

  calculationType: PriceCalculationType;

  // ======================================================
  // STATUS
  // ======================================================

  active: boolean;

  // ======================================================
  // TIMESTAMP
  // ======================================================

  createdAt: Date;
  updatedAt: Date;
}
