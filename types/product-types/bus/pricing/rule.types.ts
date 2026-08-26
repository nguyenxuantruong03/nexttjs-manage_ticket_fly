import { PriceRuleType } from "@/types/common/commerce/price-rule-type.type";

import { BusPrice } from "./price.types";

export interface BusPriceRule {
  id: string;

  priceId: string;
  price: BusPrice;

  priceRuleTypeId: string;
  priceRuleType: PriceRuleType;

  name: string;

  priority: number;

  combinable: boolean;

  percentage: number | null;

  amount: number | null;

  minimumSpend: number | null;

  maximumDiscount: number | null;

  couponCode: string | null;

  startDate: string | null;

  endDate: string | null;

  active: boolean;

  createdAt: string;

  updatedAt: string;
}