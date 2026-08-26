import { z } from "zod";

import { FlyAddonSchema } from "./airline/addon.schema";

// ======================================================
// ADDON TYPE
// ======================================================

export const FlyAddonTypeSchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().min(1),

  description: z.string().optional(),

  icon: z.string().optional(),

  sortOrder: z.number().int().min(0),

  active: z.boolean(),

  // ======================================================
  // ADDONS
  // ======================================================

  addons: z.array(FlyAddonSchema).optional(),
});

export type FlyAddonTypeFormValues = z.infer<
  typeof FlyAddonTypeSchema
>;