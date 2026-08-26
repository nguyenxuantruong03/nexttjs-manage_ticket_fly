import { z } from "zod";

export const AirportTransferRouteStopSchema = z.object({
  // ======================================================
  // ADDRESS
  // ======================================================

  addressId: z.string().min(1),

  // ======================================================
  // STOP INFO
  // ======================================================

  stopOrder: z.number(),

  estimatedArrival: z.number().optional(),

  waitingMinutes: z.number().optional(),
});

export type AirportTransferRouteStopFormSchema = z.infer<
  typeof AirportTransferRouteStopSchema
>;