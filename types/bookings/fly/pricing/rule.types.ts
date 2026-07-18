import { FlyFareRuleType, FlyPriceRuleType } from "../enums";
import { FlyFare } from "./fare.types";
import { FlyPrice } from "./price.types";

export interface FlyFareRule {
  id: string;

  fareId: string;

  fare?: FlyFare;

  type: FlyFareRuleType;

  value: string;

  createdAt: Date;
}

export interface FlyPriceRule {
  id: string;

  priceId: string;

  price?: FlyPrice;

  name: string;

  type: FlyPriceRuleType;

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