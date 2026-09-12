import { Yacht } from "../core/yacht.types";
import { YachtPricingType } from "../enums";
import { YachtPriceBreakdown } from "./breakdown.type";

import { YachtPriceOption } from "./price-option.types";
import { YachtPriceRule } from "./price-rule.types";

export interface YachtPrice {
  id: string;

  yachtId: string;
  yacht?: Yacht;

  effectiveFrom?: Date;
  effectiveTo: Date;

  pricingType: YachtPricingType;

  basePrices: YachtPriceOption[];

  priceRules: YachtPriceRule[];

  breakdown?: YachtPriceBreakdown;

  createdAt: Date;
  updatedAt: Date;
}
