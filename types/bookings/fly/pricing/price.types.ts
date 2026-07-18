import { Currency } from "@/types/common/enums";
import { FlyFare } from "./fare.types";
import { FlyPriceRule } from "./rule.types";
import { Fly } from "../core/fly.types";

export interface FlyPrice {
  id: string;

  flyId: string;

  fly?: Fly;

  currency: Currency;

  fromPrice: number;

  toPrice?: number;

  originalFromPrice?: number;

  originalToPrice?: number;

  fares?: FlyFare[];

  priceRules?: FlyPriceRule[];

  createdAt: Date;

  updatedAt: Date;
}
