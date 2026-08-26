import { ExtraFeeType } from "@/types/common/commerce/extra-fee-type.type";
import { YachtPriceBreakdown } from "./breakdown.type";
import { PriceCalculationType } from "@/types/common/enums";

export interface YachtExtraFee {
  id: string;

  extraFeeTypeId: string;
  extraFeeType: ExtraFeeType;

  breakdownId: string;
  breakdown: YachtPriceBreakdown;

  amount: number;

  calculationType: PriceCalculationType;

  active: boolean;

  createdAt: Date;
  updatedAt: Date;
}
