// trip.ts
import { CarRental } from "@/types/product-types/car_rental/core/car-rental.types";

import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

export function initCarRentalTripValues(
  rental: CarRental,
): Pick<CarRentalFormSchema, "trip"> {
  if (!rental.trip) {
    return { trip: null };
  }

  return {
    trip: {
      rentalId: rental.trip.rentalId ?? "",

      locations:
        rental.trip.locations?.map((location) => ({
          tripId: location.tripId ?? "",
          addressId: location.addressId ?? "",
          type: location.type,
          name: location.name ?? "",
          available: location.available ?? true,
        })) ?? [],

      schedule: rental.trip.schedule
        ? {
            tripId: rental.trip.schedule.tripId ?? "",
            durationType: rental.trip.schedule.durationType,
            minimumHours: rental.trip.schedule.minimumHours ?? undefined,
            minimumDays: rental.trip.schedule.minimumDays ?? undefined,
            maximumDays: rental.trip.schedule.maximumDays ?? undefined,
            pickupTime: rental.trip.schedule.pickupTime ?? undefined,
            returnTime: rental.trip.schedule.returnTime ?? undefined,
          }
        : undefined,

      tripFee: rental.trip.tripFee
        ? {
            tripId: rental.trip.tripFee.tripId ?? "",
            airportFee: rental.trip.tripFee.airportFee ?? undefined,
            oneWayFee: rental.trip.tripFee.oneWayFee ?? undefined,
            deliveryFee: rental.trip.tripFee.deliveryFee ?? undefined,
            pickupFee: rental.trip.tripFee.pickupFee ?? undefined,
            dropoffFee: rental.trip.tripFee.dropoffFee ?? undefined,
          }
        : undefined,
    },
  };
}
