import { z } from "zod";
import { FlyMealSchema } from "./fly-meal.schema";


// ======================================================
// MEAL TYPE
// ======================================================

export const FlyMealTypeSchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().min(1),

  description: z.string().optional(),

  icon: z.string().optional(),

  sortOrder: z.number().int().min(0),

  active: z.boolean(),

  // ======================================================
  // MEALS
  // ======================================================

  meals: z.array(FlyMealSchema).optional(),
});

export type FlyMealTypeFormValues = z.infer<typeof FlyMealTypeSchema>;
