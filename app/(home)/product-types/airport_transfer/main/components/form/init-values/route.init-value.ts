import { AirportTransfer } from "@/types/product-types/airport-transfer/core/airport-transfer.types";

import { AirportTransferFormSchema } from "../schema/core/schema";

export function initAirportTransferRoutesValues(
  airportTransfer: AirportTransfer,
): Pick<AirportTransferFormSchema, "routes"> {
  return {
    routes:
      airportTransfer.routes?.map((route) => ({
        routeTypeId: route.routeTypeId ?? "",

        departureAddressId: route.departureAddressId ?? "",

        arrivalAddressId: route.arrivalAddressId ?? "",

        distanceKm: route.distanceKm ?? 0,

        estimatedDuration: route.estimatedDuration ?? 0,

        active: route.active ?? true,

        stops:
          route.stops?.map((stop) => ({
            addressId: stop.addressId ?? "",

            stopOrder: stop.stopOrder ?? 1,

            estimatedArrival: stop.estimatedArrival ?? 0,

            waitingMinutes: stop.waitingMinutes ?? 0,
          })) ?? [],

        prices:
          route.prices?.map((price) => ({
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

        trips:
          route.trips?.map((trip) => ({
            routeId: trip.routeId ?? "",

            scheduleId: trip.scheduleId ?? null,

            departureTime: trip.departureTime ?? "",

            estimatedArrivalTime: trip.estimatedArrivalTime ?? "",

            totalSeats: trip.totalSeats ?? 0,

            availableSeats: trip.availableSeats ?? 0,

            status: trip.status,
          })) ?? [],

        createdAt: route.createdAt ?? "",

        updatedAt: route.updatedAt ?? "",
      })) ?? [],
  };
}
