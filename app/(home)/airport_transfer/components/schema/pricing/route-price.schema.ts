import { z } from "zod";


import { AirportTransferPriceBreakdownSchema } from "./breakdown.schema";
import { AirportTransferVehicleType } from "@/types/bookings/airport-transfer/enums";

export const AirportTransferRoutePriceSchema = z.object({
  routeId: z.string(),

  vehicleType: z.nativeEnum(AirportTransferVehicleType),

  basePrice: z.number(),

  originalPrice: z.number().optional(),

  breakdown: AirportTransferPriceBreakdownSchema.optional(),
});
