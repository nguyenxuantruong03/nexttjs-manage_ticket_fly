import { z } from "zod";

// ======================================================
// PASSENGER ADDON
// ======================================================

export const FlyPassengerAddonSchema = z.object({
  // ======================================================
  // RELATIONS
  // ======================================================

  passengerId: z.string(),

  addonId: z.string(),

  // ======================================================
  // ADDON
  // ======================================================

  quantity: z.number(),

  unitPrice: z.number(),

  totalPrice: z.number(),

  metadata: z.unknown().nullable(),
});

export type FlyPassengerAddonFormValues = z.infer<
  typeof FlyPassengerAddonSchema
>;

// ======================================================
// ADDON
// ======================================================

export const FlyAddonSchema = z.object({
  // ======================================================
  // RELATIONS
  // ======================================================

  airlineId: z.string().nullable(),

  typeId: z.string(),

  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().min(1),

  description: z.string().nullable(),

  provider: z.string().nullable(),

  image: z.string().nullable(),

  amount: z.number(),

  active: z.boolean(),

  // ======================================================
  // PASSENGER ADDONS
  // ======================================================

  passengerAddons: z.array(FlyPassengerAddonSchema).optional(),
});

export type FlyAddonFormValues = z.infer<typeof FlyAddonSchema>;
