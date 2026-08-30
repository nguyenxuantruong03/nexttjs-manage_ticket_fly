import { z } from "zod";

export const BusRouteStopSchema = z.object({
  // ======================================================
  // LOCATION
  // ======================================================

  addressId: z.string(),

  // ======================================================
  // TIME
  // ======================================================

  arrivalTime: z.string().nullable().optional(),

  departureTime: z.string().nullable().optional(),

  // ======================================================
  // ORDER
  // ======================================================

  stopOrder: z.number(),
});

export type BusRouteStopFormValues = z.infer<
  typeof BusRouteStopSchema
>;