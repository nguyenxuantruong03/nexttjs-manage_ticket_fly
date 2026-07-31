import { z } from "zod";

import { FlyAddonType } from "@/types/bookings/ticket-fly/enums";

export const FlyPassengerAddonSchema = z.object({
  passengerId: z.string().min(1),

  addonId: z.string().min(1),

  quantity: z.number(),

  unitPrice: z.number(),

  totalPrice: z.number(),

  metadata: z.unknown().optional(),
});

export const FlyAddonSchema = z.object({
  name: z.string().min(1),

  description: z.string().optional(),

  type: z.nativeEnum(FlyAddonType),

  provider: z.string().optional(),

  image: z.string().optional(),

  amount: z.number(),

  active: z.boolean(),

  passengerAddons: z.array(FlyPassengerAddonSchema).optional(),
});

export type FlyPassengerAddonFormValues = z.infer<
  typeof FlyPassengerAddonSchema
>;

export type FlyAddonFormValues = z.infer<typeof FlyAddonSchema>;
