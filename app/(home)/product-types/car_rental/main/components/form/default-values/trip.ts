import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

import {
  RentalDurationType,
  RentalLocationType,
} from "@/types/product-types/car_rental/enums";

export const carRentalTripDefaultValues = {
  trip: {
    rentalId: "",

    locations: [
      {
        tripId: "",
        addressId: "",
        type: RentalLocationType.PICKUP,
        name: "",
        available: true,
      },
      {
        tripId: "",
        addressId: "",
        type: RentalLocationType.DROPOFF,
        name: "",
        available: true,
      },
    ],

    schedule: {
      tripId: "",
      durationType: RentalDurationType.daily,
      minimumHours: undefined,
      minimumDays: undefined,
      maximumDays: undefined,
      pickupTime: undefined,
      returnTime: undefined,
    },

    tripFee: {
      tripId: "",
      airportFee: undefined,
      oneWayFee: undefined,
      deliveryFee: undefined,
      pickupFee: undefined,
      dropoffFee: undefined,
    },
  },
} satisfies Pick<CarRentalFormSchema, "trip">;
