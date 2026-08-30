import { Fly } from "@/types/product-types/ticket-fly/core/fly.types";

import { FlyFormSchema } from "../schema/core/fly.schema";

export function initFlyRouteValues(
  ticketFly: Fly,
): Pick<FlyFormSchema, "routes"> {
  return {
    routes:
      ticketFly.routes?.map((route) => ({
        departureAirportId: route.departureAirportId ?? "",
        arrivalAirportId: route.arrivalAirportId ?? "",
        routeTypeId: route.routeTypeId ?? "",
        distanceKm: route.distanceKm ?? 0,
        estimatedDuration: route.estimatedDuration ?? 0,
        directFlight: route.directFlight ?? true,

        segments:
          route.segments?.map((segment) => ({
            segmentOrder: segment.segmentOrder ?? 0,
            estimatedDuration: segment.estimatedDuration ?? 0,
            distanceKm: segment.distanceKm ?? 0,
          })) ?? [],

        trips:
          route.trips?.map((trip) => ({
            flightNumber: trip.flightNumber ?? "",
            departureTime: trip.departureTime ?? new Date(),
            arrivalTime: trip.arrivalTime ?? new Date(),
            durationMinutes: trip.durationMinutes ?? 0,
            status: trip.status,
            availableSeats: trip.availableSeats ?? 0,
            aircraftId: trip.aircraftId ?? "",
            scheduleId: trip.scheduleId ?? "",
          })) ?? [],
      })) ?? [],
  };
}