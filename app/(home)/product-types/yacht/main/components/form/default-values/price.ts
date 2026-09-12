import { YachtPricingType } from "@/types/product-types/yacht/enums";

import { YachtFormSchema } from "../schema/core/yacht.schema";

export const yachtPriceDefaultValues = {
  // =========================
  // PRICING
  // =========================

  price: {
    effectiveFrom: new Date(),
    effectiveTo: new Date(),
    pricingType: YachtPricingType.custom,
    basePrices: [],
    priceRules: [],

    breakdown: {
      basePrice: 0,
      originalPrice: null,
      taxes: 0,
      serviceFee: 0,
      bookingFee: 0,
      discount: 0,
      finalPrice: 0,
      includedItems: [],
      extraFees: [],
    },
  },
} satisfies Pick<YachtFormSchema, "price">;
