import { z } from "zod";

import { FlyFareBaggageSchema } from "./baggage.schema";

import { FlyFareTaxSchema } from "./tax.schema";

import { FlyFarePriceBreakdownSchema } from "./breakdown.schema";

import { FlyFareRuleSchema } from "./rule.schema";
import { FlyCabinClass } from "@/types/bookings/ticket-fly/enums";

export const FlyFareSchema = z.object({
  name: z.string(),

  cabinClass: z.nativeEnum(FlyCabinClass),

  code: z.string().optional(),

  refundable: z.boolean(),

  changeable: z.boolean(),

  priorityBoarding: z.boolean(),

  loungeAccess: z.boolean(),

  seatSelectionIncluded: z.boolean(),

  mealsIncluded: z.boolean(),

  wifiIncluded: z.boolean(),

  baggage: FlyFareBaggageSchema.optional(),

  taxes: z.array(FlyFareTaxSchema).optional(),

  breakdown: FlyFarePriceBreakdownSchema.optional(),

  rules: z.array(FlyFareRuleSchema).optional(),

  active: z.boolean(),
});

export type FlyFareFormValues = z.infer<typeof FlyFareSchema>;
