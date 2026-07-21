import { AirportTransferTripStatus } from "@/types/bookings/airport-transfer/enums";
import { z } from "zod";
import { AirportTransferVehicleAssignmentSchema } from "./assignment.schema";

export const AirportTransferTripSchema = z.object({
  routeId: z.string(),

  scheduleId: z.string().optional(),

  departureTime: z.string(),

  estimatedArrivalTime: z.string(),

  totalSeats: z.number(),

  availableSeats: z.number(),

  status: z.nativeEnum(AirportTransferTripStatus),

  vehicleAssignment: z.array(AirportTransferVehicleAssignmentSchema),
});
