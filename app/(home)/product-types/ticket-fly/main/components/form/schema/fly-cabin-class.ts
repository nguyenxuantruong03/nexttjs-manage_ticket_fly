import { z } from "zod";


import { FlyFareSchema } from "./pricing/fare.schema";

import { FlyCabinInventorySchema } from "./trip/inventory.schema";

import { FlyOverbookingRuleSchema } from "./trip/overbooking.schema";
import { FlyCabinSchema } from "@/app/(home)/product-types/references/airline/aircraft/main/components/schema/cabin.schema";

// ======================================================
// CABIN CLASS
// ======================================================

export const FlyCabinClassSchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().min(1),

  description: z.string().optional(),

  icon: z.string().optional(),

  sortOrder: z.number().int().min(0),

  active: z.boolean(),

  // ======================================================
  // CABINS
  // ======================================================

  cabins: z.array(FlyCabinSchema).optional(),

  // ======================================================
  // FARES
  // ======================================================

  fares: z.array(FlyFareSchema).optional(),

  // ======================================================
  // CABIN INVENTORIES
  // ======================================================

  cabinInventories: z.array(FlyCabinInventorySchema).optional(),

  // ======================================================
  // OVERBOOKING RULES
  // ======================================================

  overbookingRules: z.array(FlyOverbookingRuleSchema).optional(),
});

export type FlyCabinClassFormValues = z.infer<typeof FlyCabinClassSchema>;
