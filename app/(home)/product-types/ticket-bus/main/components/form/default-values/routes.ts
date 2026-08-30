import {
  BusBoardingStatus,
  BusSeatAvailabilityStatus,
  BusTripStatus,
} from "@/types/product-types/bus/enums";

import { BusFormSchema } from "../schema/core/bus.schema";

export const busRoutesDefaultValues = {
  routes: [
    {
      routeTypeId: "",
      departureAddressId: "",
      arrivalAddressId: "",
      distanceKm: null,
      estimatedDuration: null,
      code: null,

      boardingPoints: [
        {
          addressId: "",
          name: "",
          departureTime: "",
          order: 1,
        },
      ],

      dropoffPoints: [
        {
          addressId: "",
          name: "",
          arrivalTime: "",
          order: 1,
        },
      ],

      trips: [
        {
          vehicleId: "",
          routeId: "",
          departureTime: "",
          arrivalTime: "",
          status: BusTripStatus.ACTIVE,
          boardingStatus: BusBoardingStatus.BOARDED,

          stops: [
            {
              addressId: "",
              arrivalTime: "",
              departureTime: "",
              stopOrder: 1,
            },
          ],

          seatAvailability: [
            {
              seatId: "",
              status: BusSeatAvailabilityStatus.AVAILABLE,
              availableSeats: 0,
              soldSeats: 0,
              reservedSeats: 0,
              totalSeats: 0,
              currentPrice: 0,
            },
          ],

          price: {
            tripId: "",

            seatPrices: [
              {
                seatTypeId: "",
                price: 0,
                originalPrice: 0,
                taxes: 0,
                serviceFee: 0,
                bookingFee: 0,
                discount: 0,
                finalPrice: 0,
                availableSeats: 0,
              },
            ],
          },
        },
      ],
    },
  ],
} satisfies Pick<BusFormSchema, "routes">;