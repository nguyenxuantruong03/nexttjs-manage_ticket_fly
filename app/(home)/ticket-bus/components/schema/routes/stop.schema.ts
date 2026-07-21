import { z } from "zod";

export const BusRouteStopSchema = z.object({
  addressId: z.string(),

  arrivalTime: z.date().nullable().optional(),

  departureTime: z.date().nullable().optional(),

  stopOrder: z.number(),
});

export type BusRouteStopFormValues = z.infer<typeof BusRouteStopSchema>;
