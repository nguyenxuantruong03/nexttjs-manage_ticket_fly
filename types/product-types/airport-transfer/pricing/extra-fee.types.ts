import { PriceCalculationType } from "@/types/common/enums";
import { AirportTransferPriceBreakdown } from "./breakdown.types";
import { ExtraFeeType } from "@/types/common/commerce/extra-fee-type.type";

export interface AirportTransferExtraFee {
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
  breakdown: AirportTransferPriceBreakdown;

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
  // TIMESTAMPS
  // ======================================================

  createdAt: Date;
  updatedAt: Date;
}
