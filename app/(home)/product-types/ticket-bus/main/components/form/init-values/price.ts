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
        effectiveFrom: price.effectiveFrom ?? "",
        effectiveTo: price.effectiveTo ?? "",

        breakdowns:
          price.breakdowns?.map((breakdown) => ({
            seatTypeId: breakdown.seatTypeId ?? "",
            basePrice: breakdown.basePrice ?? 0,
            originalPrice: breakdown.originalPrice ?? 0,
            taxes: breakdown.taxes ?? 0,
            serviceFee: breakdown.serviceFee ?? 0,
            bookingFee: breakdown.bookingFee ?? 0,
            discount: breakdown.discount ?? 0,
            finalPrice: breakdown.finalPrice ?? 0,
            availableSeats: breakdown.availableSeats ?? 0,
            includedItems: breakdown.includedItems ?? [],

            extraFees:
              breakdown.extraFees?.map((fee) => ({
                extraFeeTypeId: fee.extraFeeTypeId ?? "",
                amount: fee.amount ?? 0,
                calculationType: fee.calculationType,
                active: fee.active ?? true,
              })) ?? [],
          })) ?? [],

        rules:
          price.rules?.map((rule) => ({
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
