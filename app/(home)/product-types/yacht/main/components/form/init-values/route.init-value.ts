import { Yacht } from "@/types/product-types/yacht/core/yacht.types";

import { YachtFormSchema } from "../schema/core/yacht.schema";

export function initYachtRouteValues(
  yacht: Yacht,
): Pick<YachtFormSchema, "routes"> {
  return {
    routes:
      yacht.routes?.map((route) => ({
        routeTypeId: route.routeTypeId ?? "",
        departureMarinaId: route.departureMarinaId ?? "",
        destinationMarinaId: route.destinationMarinaId ?? "",
        destinationName: route.destinationName ?? "",
        distanceNm: route.distanceNm ?? null,
        durationMinutes: route.durationMinutes ?? null,
        active: route.active ?? true,

        stops:
          route.stops?.map((stop) => ({
            routeId: stop.routeId ?? "",
            name: stop.name ?? "",
            addressId: stop.addressId ?? null,
            stopDurationMinutes: stop.stopDurationMinutes ?? null,
            order: stop.order ?? 0,
          })) ?? [],

        trip:
          route.trip?.map((trip) => ({
            routeId: trip.routeId ?? null,
            departureTime: trip.departureTime ?? new Date(),
            arrivalTime: trip.arrivalTime ?? new Date(),
            status: trip.status,
            maxGuests: trip.maxGuests ?? null,

            schedule: trip.schedule
              ? {
                  tripId: trip.schedule.tripId ?? "",
                  repeatType: trip.schedule.repeatType,
                  daysOfWeek: trip.schedule.daysOfWeek ?? [],
                  startDate: trip.schedule.startDate ?? null,
                  endDate: trip.schedule.endDate ?? null,
                  departureTime: trip.schedule.departureTime ?? null,
                }
              : null,

            price: trip.price
              ? {
                  tripId: trip.price.tripId ?? "",
                  amount: trip.price.amount ?? 0,
                  originalAmount: trip.price.originalAmount ?? null,
                  tax: trip.price.tax ?? 0,
                  serviceFee: trip.price.serviceFee ?? 0,
                  discount: trip.price.discount ?? 0,
                  finalAmount: trip.price.finalAmount ?? 0,
                }
              : null,
          })) ?? [],
      })) ?? [],
  };
}
