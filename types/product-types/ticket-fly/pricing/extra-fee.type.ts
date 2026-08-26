import { ExtraFeeType } from "@/types/common/commerce/extra-fee-type.type";
import { FlyFarePriceBreakdown } from "./breakdown.types";
import { PriceCalculationType } from "@/types/common/enums";

export interface FlyExtraFee {
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
  breakdown: FlyFarePriceBreakdown;

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
