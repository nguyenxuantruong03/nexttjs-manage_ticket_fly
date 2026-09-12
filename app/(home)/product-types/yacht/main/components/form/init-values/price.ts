import { Yacht } from "@/types/product-types/yacht/core/yacht.types";

import { YachtFormSchema } from "../schema/core/yacht.schema";

export function initYachtPriceValues(
  yacht: Yacht,
): Pick<YachtFormSchema, "price"> {
  return {
    price: yacht.price
      ? {
          pricingType: yacht.price.pricingType,

          effectiveFrom: yacht.price.effectiveFrom,
          effectiveTo: yacht.price.effectiveTo,

          breakdown: yacht.price.breakdown
            ? {
                basePrice: yacht.price.breakdown.basePrice ?? 0,
                originalPrice: yacht.price.breakdown.originalPrice ?? null,
                taxes: yacht.price.breakdown.taxes ?? 0,
                serviceFee: yacht.price.breakdown.serviceFee ?? 0,
                bookingFee: yacht.price.breakdown.bookingFee ?? 0,
                discount: yacht.price.breakdown.discount ?? 0,
                finalPrice: yacht.price.breakdown.finalPrice ?? 0,
                includedItems: yacht.price.breakdown.includedItems ?? [],

                extraFees:
                  yacht.price.breakdown.extraFees?.map((fee) => ({
                    extraFeeTypeId: fee.extraFeeTypeId ?? "",
                    amount: fee.amount ?? 0,
                    calculationType: fee.calculationType,
                    active: fee.active ?? true,
                  })) ?? [],
              }
            : undefined,

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

          priceRules:
            yacht.price.priceRules?.map((rule) => ({
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
