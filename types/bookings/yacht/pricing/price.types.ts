import { YachtPricingType } from "../enums";
import { YachtPriceFee } from "./price-fee.types";
import { YachtPriceOption } from "./price-option.types";
import { YachtPriceRule } from "./price-rule.types";

export interface YachtPrice {
  id: string;

  yachtId: string;

  pricingType: YachtPricingType;
  basePrices: YachtPriceOption[];
  fees: YachtPriceFee[];
  discounts: YachtPriceRule[];

  createdAt: Date;

  updatedAt: Date;
}
