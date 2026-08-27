import { FlyAddonSchema } from "@/app/(home)/product-types/references/airline/main/components/schema/addon.schema";
import { z } from "zod";

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

export type FlyAddonTypeFormSchema = z.infer<typeof FlyAddonTypeSchema>;
