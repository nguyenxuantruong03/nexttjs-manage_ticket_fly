import { PriceRuleType } from "@/types/common/commerce/price-rule-type.type";
import { FlyFareRuleType } from "./fare-rule-type";
import { FlyFare } from "./fare.types";
import { FlyPrice } from "./price.types";

export interface FlyFareRule {
  id: string;

  fareId: string;
  fare?: FlyFare;

  typeId: string;
  type?: FlyFareRuleType;

  value: string;

  createdAt: Date;
}

export interface FlyPriceRule {
  id: string;

  priceId: string;
  price?: FlyPrice;

  name: string;

  priceRuleTypeId: string;
  priceRuleType?: PriceRuleType;

  percentage?: number;

  amount?: number;

  couponCode?: string;

  minimumSpend?: number;

  maximumDiscount?: number;

  validFrom?: Date;

  validTo?: Date;

  active: boolean;

  createdAt: Date;
  updatedAt: Date;
}
