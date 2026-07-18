import { CarRentalPriceRuleType } from "../enums";

export interface CarRentalPriceRule {
  id: string;

  priceId: string;

  type: CarRentalPriceRuleType;

  percentage?: number;

  amount?: number;

  startDate?: string;

  endDate?: string;
}