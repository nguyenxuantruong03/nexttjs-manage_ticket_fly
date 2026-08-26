import { PriceCalculationType } from "@/types/common/enums";
import { AirportTransferPrice } from "./price.types";
import { PriceRuleType } from "@/types/common/commerce/price-rule-type.type";

export interface AirportTransferPriceRule {
  id: string;

  priceId: string;
  price: AirportTransferPrice;

  name: string;

  priceRuleTypeId: string;
  priceRuleType: PriceRuleType;

  adjustmentType: PriceCalculationType;

  value: number;

  minimumSpend: number | null;

  maximumDiscount: number | null;

  couponCode: string | null;

  validFrom: string | null;

  validTo: string | null;

  priority: number;

  combinable: boolean;

  active: boolean;

  createdAt: string;
  updatedAt: string;
}
