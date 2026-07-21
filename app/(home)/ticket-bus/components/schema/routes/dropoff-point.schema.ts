import { z } from "zod";

export const BusDropoffPointSchema = z.object({
  addressId: z.string(),

  name: z.string().nullable().optional(),

  arrivalTime: z.string().nullable().optional(),

  order: z.number(),
});

export type BusDropoffPointFormValues = z.infer<typeof BusDropoffPointSchema>;
