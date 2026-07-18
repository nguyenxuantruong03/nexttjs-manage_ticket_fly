import { BusPriceRuleType } from "../enums";

export interface BusPriceRule {
  id: string;

  priceId: string;

  name: string;

  type: BusPriceRuleType;

  priority: number;

  combinable: boolean;

  percentage?: number;

  amount?: number;

  minimumSpend?: number;

  maximumDiscount?: number;

  couponCode?: string;

  startDate?: string;

  endDate?: string;

  active: boolean;

  createdAt: string;

  updatedAt: string;
}
