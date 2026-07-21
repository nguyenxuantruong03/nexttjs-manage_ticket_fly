import { z } from "zod";

export const FlyPassengerAddonSchema = z.object({
  quantity: z.number(),

  unitPrice: z.number(),

  totalPrice: z.number(),

  metadata: z.record(z.string(), z.unknown()).optional(),
});

export type FlyPassengerAddonFormValues = z.infer<
  typeof FlyPassengerAddonSchema
>;
