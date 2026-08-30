import { AirportTransfer } from "@/types/product-types/airport-transfer/core/airport-transfer.types";

import { AirportTransferFormSchema } from "../schema/core/schema";

export function initAirportTransferPriceValues(
  airportTransfer: AirportTransfer,
): Pick<AirportTransferFormSchema, "price">["price"] {
  return {
    fromPrice: airportTransfer.price?.fromPrice ?? 0,

    toPrice: airportTransfer.price?.toPrice ?? undefined,

    originalFromPrice: airportTransfer.price?.originalFromPrice ?? undefined,

    originalToPrice: airportTransfer.price?.originalToPrice ?? undefined,

    routePrices:
      airportTransfer.price?.routePrices?.map((price) => ({
        routeId: price.routeId ?? "",

        vehicleTypeId: price.vehicleTypeId ?? "",

        basePrice: price.basePrice ?? 0,

        originalPrice: price.originalPrice ?? null,

        breakdown: {
          baseFare: price.breakdown?.baseFare ?? 0,

          airportFee: price.breakdown?.airportFee ?? 0,

          parkingFee: price.breakdown?.parkingFee ?? 0,

          tollFee: price.breakdown?.tollFee ?? 0,

          serviceFee: price.breakdown?.serviceFee ?? 0,

          taxes: price.breakdown?.taxes ?? 0,

          discount: price.breakdown?.discount ?? 0,

          totalPrice: price.breakdown?.totalPrice ?? 0,

          includedItems: price.breakdown?.includedItems ?? [],

          extraFees:
            price.breakdown?.extraFees?.map((fee) => ({
              extraFeeTypeId: fee.extraFeeTypeId ?? "",

              amount: fee.amount ?? 0,

              calculationType: fee.calculationType,

              active: fee.active ?? true,
            })) ?? [],
        },
      })) ?? [],

    tripPrices:
      airportTransfer.price?.tripPrices?.map((tripPrice) => ({
        tripId: tripPrice.tripId ?? "",

        finalPrice: tripPrice.finalPrice ?? 0,

        originalPrice: tripPrice.originalPrice ?? 0,
      })) ?? [],

    rules:
      airportTransfer.price?.rules?.map((rule) => ({
        name: rule.name ?? "",

        priceRuleTypeId: rule.priceRuleTypeId ?? "",

        adjustmentType: rule.adjustmentType,

        value: rule.value ?? 0,

        minimumSpend: rule.minimumSpend ?? 0,

        maximumDiscount: rule.maximumDiscount ?? 0,

        couponCode: rule.couponCode ?? "",

        validFrom: rule.validFrom ?? "",

        validTo: rule.validTo ?? "",

        priority: rule.priority ?? 0,

        combinable: rule.combinable ?? false,

        active: rule.active ?? true,
      })) ?? [],
  };
}
