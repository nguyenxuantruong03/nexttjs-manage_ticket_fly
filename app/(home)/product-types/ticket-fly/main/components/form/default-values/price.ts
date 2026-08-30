import { FlyFormSchema } from "../schema/core/fly.schema";

export const flyPriceDefaultValues = {
  // =========================
  // PRICING
  // =========================

  price: {
    fromPrice: 0,
    toPrice: 0,
    originalFromPrice: 0,
    originalToPrice: 0,
    fares: [],
    priceRules: [],
  },
} satisfies Pick<FlyFormSchema, "price">;
