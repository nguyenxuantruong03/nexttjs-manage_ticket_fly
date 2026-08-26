import { AirportTransferTripStatus } from "@/types/product-types/airport-transfer/enums";
import { z } from "zod";


export const AirportTransferTripSchema = z.object({
  // ======================================================
  // ROUTE
  // ======================================================

  routeId: z.string().min(1),

  // ======================================================
  // SCHEDULE
  // ======================================================

  scheduleId: z.string().min(1).nullable(),

  // ======================================================
  // TRIP INFORMATION
  // ======================================================

  departureTime: z.string(),

  estimatedArrivalTime: z.string(),

  totalSeats: z.number(),

  availableSeats: z.number(),

  // ======================================================
  // STATUS
  // ======================================================

  status: z.nativeEnum(AirportTransferTripStatus),

});

export type AirportTransferTripFormSchema =
  z.infer<typeof AirportTransferTripSchema>;