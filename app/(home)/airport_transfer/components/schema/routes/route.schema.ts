import { z } from "zod";


import { AirportTransferRouteStopSchema } from "./route-stop.schema";
import { AirportTransferRouteType } from "@/types/bookings/airport-transfer/enums";

export const AirportTransferRouteSchema = z.object({
  type: z.nativeEnum(AirportTransferRouteType),

  departureAddressId: z.string(),

  arrivalAddressId: z.string(),

  distanceKm: z.number().optional(),

  estimatedDuration: z.number().optional(),

  stops: z.array(AirportTransferRouteStopSchema),

  active: z.boolean().default(true),
});
