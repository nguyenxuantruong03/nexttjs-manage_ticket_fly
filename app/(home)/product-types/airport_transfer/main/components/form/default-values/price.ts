import { PriceCalculationType } from "@/types/common/enums";

import { AirportTransferFormSchema } from "../schema/core/schema";

export const airportTransferPriceDefaultValues = {
  fromPrice: 0,

  toPrice: undefined,

  originalFromPrice: undefined,

  originalToPrice: undefined,

  routePrices: [
    {
      routeId: "",

      vehicleTypeId: "",

      basePrice: 0,

      originalPrice: null,

      breakdown: {
        baseFare: 0,

        airportFee: 0,

        parkingFee: 0,

        tollFee: 0,

        serviceFee: 0,

        taxes: 0,

        discount: 0,

        totalPrice: 0,

        includedItems: [],

        extraFees: [
          {
            extraFeeTypeId: "",

            amount: 0,

            calculationType: PriceCalculationType.FIXED,

            active: true,
          },
        ],
      },
    },
  ],

  tripPrices: [
    {
      tripId: "",

      finalPrice: 0,

      originalPrice: 0,
    },
  ],

  rules: [
    {
      name: "",

      priceRuleTypeId: "",

      adjustmentType: PriceCalculationType.FIXED,

      value: 0,

      minimumSpend: 0,

      maximumDiscount: 0,

      couponCode: "",

      validFrom: "",

      validTo: "",

      priority: 0,

      combinable: false,

      active: true,
    },
  ],
} satisfies AirportTransferFormSchema["price"];
