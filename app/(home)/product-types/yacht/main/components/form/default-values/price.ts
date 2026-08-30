import { YachtPricingType } from "@/types/product-types/yacht/enums";

import { YachtFormSchema } from "../schema/core/yacht.schema";

export const yachtPriceDefaultValues = {
  // =========================
  // PRICING
  // =========================

  price: {
    pricingType: YachtPricingType.custom,
    basePrices: [],
    discounts: [],
  },
} satisfies Pick<YachtFormSchema, "price">;
