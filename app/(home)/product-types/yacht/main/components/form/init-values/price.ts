import { Yacht } from "@/types/product-types/yacht/core/yacht.types";

import { YachtFormSchema } from "../schema/core/yacht.schema";

export function initYachtPriceValues(
  yacht: Yacht,
): Pick<YachtFormSchema, "price"> {
  return {
    price: yacht.price
      ? {
          pricingType: yacht.price.pricingType,

          basePrices:
            yacht.price.basePrices?.map((option) => ({
              name: option.name ?? "",
              duration: option.duration ?? null,
              durationType: option.durationType,
              minGuests: option.minGuests ?? null,
              maxGuests: option.maxGuests ?? null,
              originalPrice: option.originalPrice ?? null,
              includedItems: option.includedItems ?? [],
            })) ?? [],

          discounts:
            yacht.price.discounts?.map((rule) => ({
              priceId: rule.priceId ?? "",
              percentage: rule.percentage ?? null,
              amount: rule.amount ?? null,
              startDate: rule.startDate ?? null,
              endDate: rule.endDate ?? null,
              active: rule.active ?? true,
            })) ?? [],
        }
      : null,
  };
}
