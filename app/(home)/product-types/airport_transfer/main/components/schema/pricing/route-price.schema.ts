import { z } from "zod";

import { AirportTransferPriceBreakdownSchema } from "./breakdown.schema";

export const AirportTransferRoutePriceSchema = z.object({
  // ======================================================
  // ROUTE
  // ======================================================

  routeId: z.string().min(1),

  // ======================================================
  // VEHICLE TYPE
  // ======================================================

  vehicleTypeId: z.string().min(1),

  // ======================================================
  // PRICE
  // ======================================================

  basePrice: z.number(),

  originalPrice: z.number().nullable(),

  // ======================================================
  // BREAKDOWN
  // ======================================================

  breakdown: AirportTransferPriceBreakdownSchema.nullable(),
});

export type AirportTransferRoutePriceFormSchema = z.infer<
  typeof AirportTransferRoutePriceSchema
>;