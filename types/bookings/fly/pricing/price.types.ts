import { FlyFare } from "./fare.types";
import { FlyPriceRule } from "./rule.types";
import { Fly } from "../core/fly.types";

export interface FlyPrice {
  id: string;

  flyId: string;

  fly?: Fly;


  fromPrice: number;

  toPrice?: number;

  originalFromPrice?: number;

  originalToPrice?: number;

  fares?: FlyFare[];

  priceRules?: FlyPriceRule[];

  createdAt: Date;

  updatedAt: Date;
}
