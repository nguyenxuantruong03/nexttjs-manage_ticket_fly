import { Bus } from "@/types/product-types/bus/core/bus.types";
import { BusFormSchema } from "../schema/core/bus.schema";

export function initBusPriceValues(
  ticketBus: Bus,
): Pick<BusFormSchema, "price"> {
  return {
    price:
      ticketBus.price?.map((price) => ({
        fromPrice: price.fromPrice ?? 0,
        toPrice: price.toPrice ?? 0,
        originalFromPrice: price.originalFromPrice ?? 0,
        originalToPrice: price.originalToPrice ?? 0,
        effectiveFrom: price.effectiveFrom ?? new Date(),
        effectiveTo: price.effectiveTo ?? new Date(),

        breakdown: price.breakdown
          ? {
              seatTypeId: price.breakdown.seatTypeId ?? "",

              basePrice: price.breakdown.basePrice ?? 0,

              originalPrice: price.breakdown.originalPrice ?? null,

              taxes: price.breakdown.taxes ?? 0,

              serviceFee: price.breakdown.serviceFee ?? 0,

              bookingFee: price.breakdown.bookingFee ?? 0,

              discount: price.breakdown.discount ?? 0,

              finalPrice: price.breakdown.finalPrice ?? 0,

              availableSeats: price.breakdown.availableSeats ?? 0,

              includedItems: price.breakdown.includedItems ?? [],

              extraFees:
                price.breakdown.extraFees?.map((fee) => ({
                  extraFeeTypeId: fee.extraFeeTypeId ?? "",

                  amount: fee.amount ?? 0,

                  calculationType: fee.calculationType,

                  active: fee.active ?? true,
                })) ?? [],
            }
          : {
              seatTypeId: "",

              basePrice: 0,

              originalPrice: null,

              taxes: 0,

              serviceFee: 0,

              bookingFee: 0,

              discount: 0,

              finalPrice: 0,

              availableSeats: 0,

              includedItems: [],

              extraFees: [],
            },

        priceRules:
          price.priceRules?.map((rule) => ({
            name: rule.name ?? "",
            priceRuleTypeId: rule.priceRuleTypeId ?? "",
            priority: rule.priority ?? 0,
            combinable: rule.combinable ?? false,
            percentage: rule.percentage ?? 0,
            amount: rule.amount ?? 0,
            minimumSpend: rule.minimumSpend ?? 0,
            maximumDiscount: rule.maximumDiscount ?? 0,
            couponCode: rule.couponCode ?? "",
            startDate: rule.startDate ?? "",
            endDate: rule.endDate ?? "",
            active: rule.active ?? true,
          })) ?? [],
      })) ?? [],
  };
}
