import { AirportTransferAdjustmentType, AirportTransferPriceRuleType } from "../enums";

export interface AirportTransferPriceRule {
  id: string;

  priceId: string;

  name: string;

  type: AirportTransferPriceRuleType;
  adjustmentType: AirportTransferAdjustmentType;

  value: number;

  minimumSpend?: number;

  maximumDiscount?: number;

  couponCode?: string;

  validFrom?: string;

  validTo?: string;

  priority: number;

  combinable: boolean;

  active: boolean;

  createdAt: string;

  updatedAt: string;
}
