import { z } from "zod";

import { FlyFareBaggageSchema } from "./baggage.schema";
import { FlyFareTaxSchema } from "./tax.schema";
import { FlyFarePriceBreakdownSchema } from "./breakdown.schema";
import { FlyFareRuleSchema } from "./rule.schema";

import { FlyInventoryFareSchema } from "../trip/inventory.schema";

// ======================================================
// FARE
// ======================================================

export const FlyFareSchema = z.object({
  // ======================================================
  // RELATIONS
  // ======================================================

  priceId: z.string(),

  cabinClassId: z.string(),

  inventoryFares: z.array(FlyInventoryFareSchema).optional(),

  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().min(1),

  code: z.string().optional(),

  // ======================================================
  // BENEFITS
  // ======================================================

  refundable: z.boolean(),

  changeable: z.boolean(),

  priorityBoarding: z.boolean(),

  loungeAccess: z.boolean(),

  seatSelectionIncluded: z.boolean(),

  mealsIncluded: z.boolean(),

  wifiIncluded: z.boolean(),

  // ======================================================
  // BAGGAGE
  // ======================================================

  baggage: FlyFareBaggageSchema.optional(),

  // ======================================================
  // TAXES
  // ======================================================

  taxes: z.array(FlyFareTaxSchema).optional(),

  // ======================================================
  // PRICE BREAKDOWN
  // ======================================================

  breakdown: FlyFarePriceBreakdownSchema.optional(),

  // ======================================================
  // RULES
  // ======================================================

  rules: z.array(FlyFareRuleSchema).optional(),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean(),
});

export type FlyFareFormValues = z.infer<typeof FlyFareSchema>;