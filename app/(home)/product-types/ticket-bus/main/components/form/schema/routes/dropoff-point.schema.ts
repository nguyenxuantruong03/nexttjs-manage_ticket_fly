import { z } from "zod";

export const BusDropoffPointSchema = z.object({
  // ======================================================
  // LOCATION
  // ======================================================

  addressId: z.string(),

  name: z.string().nullable().optional(),

  // ======================================================
  // ARRIVAL
  // ======================================================

  arrivalTime: z.string().nullable().optional(),

  order: z.number(),
});

export type BusDropoffPointFormValues = z.infer<typeof BusDropoffPointSchema>;
