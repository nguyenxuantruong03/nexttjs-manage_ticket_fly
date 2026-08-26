import { ExtraFeeType } from "@/types/common/commerce/extra-fee-type.type";
import { CarRentalPriceBreakdown } from "./price-breakdown.types";
import { PriceCalculationType } from "@/types/common/enums";

export interface CarRentalExtraFee {
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
  breakdown: CarRentalPriceBreakdown;

  // ======================================================
  // FEE
  // ======================================================

  amount: number;

  calculationType: PriceCalculationType;

  active: boolean;

  // ======================================================
  // TIMESTAMPS
  // ======================================================

  createdAt: Date;

  updatedAt: Date;
}
