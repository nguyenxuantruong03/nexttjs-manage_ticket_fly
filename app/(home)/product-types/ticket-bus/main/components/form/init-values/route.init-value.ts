import { Bus } from "@/types/product-types/bus/core/bus.types";
import { BusFormSchema } from "../schema/core/bus.schema";

export function initBusRoutesValues(
  ticketBus: Bus,
): Pick<BusFormSchema, "routes"> {
  return {
    routes:
      ticketBus.routes?.map((route) => ({
        routeTypeId: route.routeTypeId ?? "",
        departureAddressId: route.departureAddressId ?? "",
        arrivalAddressId: route.arrivalAddressId ?? "",
        distanceKm: route.distanceKm ?? null,
        estimatedDuration: route.estimatedDuration ?? null,
        code: route.code ?? null,

        boardingPoints:
          route.boardingPoints?.map((point) => ({
            addressId: point.addressId ?? "",
            name: point.name ?? "",
            departureTime: point.departureTime ?? "",
            order: point.order ?? 1,
          })) ?? [],

        dropoffPoints:
          route.dropoffPoints?.map((point) => ({
            addressId: point.addressId ?? "",
            name: point.name ?? "",
            arrivalTime: point.arrivalTime ?? "",
            order: point.order ?? 1,
          })) ?? [],

        trips:
          route.trips?.map((trip) => ({
            vehicleId: trip.vehicleId ?? "",
            routeId: trip.routeId ?? "",
            departureTime: trip.departureTime ?? "",
            arrivalTime: trip.arrivalTime ?? "",
            status: trip.status,
            boardingStatus: trip.boardingStatus,

            stops:
              trip.stops?.map((stop) => ({
                addressId: stop.addressId ?? "",
                arrivalTime: stop.arrivalTime ?? "",
                departureTime: stop.departureTime ?? "",
                stopOrder: stop.stopOrder ?? 1,
              })) ?? [],

            seatAvailability:
              trip.seatAvailability?.map((seat) => ({
                seatId: seat.seatId ?? "",
                status: seat.status,
                availableSeats: seat.availableSeats ?? 0,
                soldSeats: seat.soldSeats ?? 0,
                reservedSeats: seat.reservedSeats ?? 0,
                totalSeats: seat.totalSeats ?? 0,
                currentPrice: seat.currentPrice ?? 0,
              })) ?? [],

            price: trip.price
              ? {
                  tripId: trip.price.tripId ?? "",

                  seatPrices:
                    trip.price.seatPrices?.map((seatPrice) => ({
                      seatTypeId: seatPrice.seatTypeId ?? "",
                      price: seatPrice.price ?? 0,
                      originalPrice: seatPrice.originalPrice ?? 0,
                      taxes: seatPrice.taxes ?? 0,
                      serviceFee: seatPrice.serviceFee ?? 0,
                      bookingFee: seatPrice.bookingFee ?? 0,
                      discount: seatPrice.discount ?? 0,
                      finalPrice: seatPrice.finalPrice ?? 0,
                      availableSeats: seatPrice.availableSeats ?? 0,
                    })) ?? [],
                }
              : null,
          })) ?? [],
      })) ?? [],
  };
}
