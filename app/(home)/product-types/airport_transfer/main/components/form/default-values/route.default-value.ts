// routes.ts
import { PriceCalculationType } from "@/types/common/enums";
import { AirportTransferTripStatus } from "@/types/product-types/airport-transfer/enums";

import { AirportTransferFormSchema } from "../schema/core/schema";

export const airportTransferRoutesDefaultValues = {
  routes: [
    {
      routeTypeId: "",
      departureAddressId: "",
      arrivalAddressId: "",
      distanceKm: 0,
      estimatedDuration: 0,
      active: true,

      stops: [
        {
          addressId: "",
          stopOrder: 1,
          estimatedArrival: 0,
          waitingMinutes: 0,
        },
      ],

      prices: [
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

      trips: [
        {
          routeId: "",
          scheduleId: null,
          departureTime: "",
          estimatedArrivalTime: "",
          totalSeats: 0,
          availableSeats: 0,
          status: AirportTransferTripStatus.SCHEDULED,
        },
      ],

      createdAt: "",
      updatedAt: "",
    },
  ],
} satisfies Pick<AirportTransferFormSchema, "routes">;
