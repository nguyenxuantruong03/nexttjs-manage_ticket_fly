import { ExtraFeeType } from "@/types/common/commerce/extra-fee-type.type";
import { BusPriceBreakdown } from "./breakdown.types";
import { PriceCalculationType } from "@/types/common/enums";

export interface BusExtraFee {
  id: string;

  // ======================================================
  // RELATIONS
  // ======================================================

  extraFeeTypeId: string;
  extraFeeType: ExtraFeeType;

  breakdownId: string;
  breakdown: BusPriceBreakdown;

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
