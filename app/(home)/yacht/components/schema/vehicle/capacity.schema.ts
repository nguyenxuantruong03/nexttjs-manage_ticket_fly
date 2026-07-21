// schema/vehicle/capacity.schema.ts

import { z } from "zod";

export const YachtCapacitySchema = z.object({
  vehicleId: z.string(),

  guestCapacity: z.number(),

  overnightCapacity: z.number().nullable().optional(),

  cabinCount: z.number().nullable().optional(),

  bathroomCount: z.number().nullable().optional(),

  crewCapacity: z.number().nullable().optional(),
});

export type YachtCapacityFormValues = z.infer<typeof YachtCapacitySchema>;
