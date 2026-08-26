import { PriceRuleType } from "@/types/common/commerce/price-rule-type.type";
import { CarRentalPrice } from "./price.types";

export interface CarRentalPriceRule {
  id: string;

  priceId: string;
  price: CarRentalPrice;

  priceRuleTypeId: string;
  priceRuleType: PriceRuleType;

  percentage: number | null;
  amount: number | null;

  startDate: string | null;
  endDate: string | null;
}