import { Fly } from "@/types/product-types/ticket-fly/core/fly.types";

import { FlyFormSchema } from "../schema/core/fly.schema";

export function initFlyPriceValues(
  ticketFly: Fly,
): Pick<FlyFormSchema, "price"> {
  return {
    price: ticketFly.price
      ? {
          fromPrice: ticketFly.price.fromPrice ?? 0,
          toPrice: ticketFly.price.toPrice ?? 0,
          originalFromPrice: ticketFly.price.originalFromPrice ?? 0,
          originalToPrice: ticketFly.price.originalToPrice ?? 0,

          fares:
            ticketFly.price.fares?.map((fare) => ({
              priceId: fare.priceId ?? "",
              cabinClassId: fare.cabinClassId ?? "",
              name: fare.name ?? "",
              code: fare.code ?? "",
              refundable: fare.refundable ?? false,
              changeable: fare.changeable ?? false,
              priorityBoarding: fare.priorityBoarding ?? false,
              loungeAccess: fare.loungeAccess ?? false,
              seatSelectionIncluded:
                fare.seatSelectionIncluded ?? false,
              mealsIncluded: fare.mealsIncluded ?? false,
              wifiIncluded: fare.wifiIncluded ?? false,

              baggage: fare.baggage
                ? {
                    cabinWeightKg: fare.baggage.cabinWeightKg ?? 0,
                    checkedWeightKg: fare.baggage.checkedWeightKg ?? 0,
                    extraBaggageAllowed:
                      fare.baggage.extraBaggageAllowed ?? false,
                    extraBaggagePrice:
                      fare.baggage.extraBaggagePrice ?? 0,
                  }
                : undefined,

              taxes:
                fare.taxes?.map((tax) => ({
                  name: tax.name ?? "",
                  amount: tax.amount ?? 0,
                })) ?? [],

              breakdown: fare.breakdown
                ? {
                    baseFare: fare.breakdown.baseFare ?? 0,
                    taxes: fare.breakdown.taxes ?? 0,
                    airportFee: fare.breakdown.airportFee ?? 0,
                    fuelSurcharge:
                      fare.breakdown.fuelSurcharge ?? 0,
                    serviceFee: fare.breakdown.serviceFee ?? 0,
                    bookingFee: fare.breakdown.bookingFee ?? 0,

                    extraFees:
                      fare.breakdown.extraFees?.map((fee) => ({
                        extraFeeTypeId:
                          fee.extraFeeTypeId ?? "",
                        amount: fee.amount ?? 0,
                        calculationType: fee.calculationType,
                        active: fee.active ?? true,
                      })) ?? [],

                    discount: fare.breakdown.discount ?? 0,
                    finalPrice: fare.breakdown.finalPrice ?? 0,
                  }
                : undefined,

              rules:
                fare.rules?.map((rule) => ({
                  typeId: rule.typeId ?? "",
                  value: rule.value ?? "",
                })) ?? [],

              active: fare.active ?? true,
            })) ?? [],

          priceRules:
            ticketFly.price.priceRules?.map((rule) => ({
              name: rule.name ?? "",
              priceRuleTypeId: rule.priceRuleTypeId ?? "",
              percentage: rule.percentage ?? 0,
              amount: rule.amount ?? 0,
              couponCode: rule.couponCode ?? "",
              minimumSpend: rule.minimumSpend ?? 0,
              maximumDiscount: rule.maximumDiscount ?? 0,
              validFrom: rule.validFrom ?? undefined,
              validTo: rule.validTo ?? undefined,
              active: rule.active ?? true,
            })) ?? [],
        }
      : {
          fromPrice: 0,
          toPrice: 0,
          originalFromPrice: 0,
          originalToPrice: 0,
          fares: [],
          priceRules: [],
        },
  };
}