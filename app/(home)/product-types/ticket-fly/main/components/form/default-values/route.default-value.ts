import { FlyTripStatus } from "@/types/product-types/ticket-fly/enums";
import { FlyFormSchema } from "../schema/core/fly.schema";

export const flyRouteDefaultValues = {
  // =========================
  // ROUTES
  // =========================

  routes: [
    {
      departureAirportId: "",
      arrivalAirportId: "",
      distanceKm: 0,
      estimatedDuration: 0,
      directFlight: true,
      routeTypeId: "",
      segments: [],

      trips: [
        {
          flightNumber: "",
          departureTime: new Date(),
          arrivalTime: new Date(),
          durationMinutes: 0,
          status: FlyTripStatus.boarding,
          availableSeats: 0,
          aircraftId: "",
          scheduleId: "",
        },
      ],
    },
  ],
} satisfies Pick<FlyFormSchema, "routes">;
