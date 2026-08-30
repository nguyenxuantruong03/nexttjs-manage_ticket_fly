import { PriceCalculationType } from "@/types/common/enums";

import { BusFormSchema } from "../schema/core/bus.schema";

export const busPriceDefaultValues = {
  price: [
    {
      fromPrice: 0,
      toPrice: 0,
      originalFromPrice: 0,
      originalToPrice: 0,
      effectiveFrom: "",
      effectiveTo: "",

      breakdowns: [
        {
          seatTypeId: "",
          basePrice: 0,
          originalPrice: 0,
          taxes: 0,
          serviceFee: 0,
          bookingFee: 0,
          discount: 0,
          finalPrice: 0,
          availableSeats: 0,
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
      ],

      rules: [
        {
          name: "",
          priceRuleTypeId: "",
          priority: 0,
          combinable: false,
          percentage: 0,
          amount: 0,
          minimumSpend: 0,
          maximumDiscount: 0,
          couponCode: "",
          startDate: "",
          endDate: "",
          active: true,
        },
      ],
    },
  ],
} satisfies Pick<BusFormSchema, "price">;
