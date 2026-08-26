import { z } from "zod";

import { HotelRoomPriceSchema } from "./price.schema";

// ======================================================
// HOTEL RATE PLAN TYPE - MANAGE
// ======================================================

export const hotelRatePlanTypeSchema = z.object({
  name: z.string(),

  description: z.string().nullable().optional(),

  icon: z.string().nullable().optional(),

  active: z.boolean().default(true),

  sortOrder: z.number().int().default(0),
});

export type HotelRatePlanTypeInput = z.infer<typeof hotelRatePlanTypeSchema>;

// ======================================================
// MEAL PLAN - MANAGE
// ======================================================

export const mealPlanSchema = z.object({
  name: z.string(),

  description: z.string().nullable().optional(),

  icon: z.string().nullable().optional(),

  active: z.boolean().default(true),

  sortOrder: z.number().int().default(0),
});

export type MealPlanInput = z.infer<typeof mealPlanSchema>;

// ======================================================
// HOTEL RATE PLAN CANCELLATION - MANAGE
// ======================================================

export const hotelRatePlanCancellationSchema = z.object({
  freeCancellation: z.boolean().default(false),

  beforeHours: z.number().min(0).nullable().optional(),

  cancellationFee: z.number().min(0).nullable().optional(),
});

export type HotelRatePlanCancellationInput = z.infer<
  typeof hotelRatePlanCancellationSchema
>;

// ======================================================
// HOTEL RATE PLAN POLICY - MANAGE
// ======================================================

export const hotelRatePlanPolicySchema = z.object({
  policyId: z.string(),
});

export type HotelRatePlanPolicyInput = z.infer<
  typeof hotelRatePlanPolicySchema
>;

// ======================================================
// HOTEL RATE PLAN - MANAGE
// ======================================================

export const hotelRatePlanSchema = z.object({
  // ====================================================
  // INVENTORY
  // ====================================================

  inventoryId: z.string(),

  // ====================================================
  // BASIC
  // ====================================================

  name: z.string(),

  code: z.string().nullable().optional(),

  description: z.string().nullable().optional(),

  // ====================================================
  // RATE PLAN TYPE
  // ====================================================

  typeId: z.string().nullable().optional(),

  // ====================================================
  // MEAL PLAN
  // ====================================================

  mealPlanId: z.string().nullable().optional(),

  // ====================================================
  // POLICIES
  // ====================================================

  policies: z.array(hotelRatePlanPolicySchema).optional(),

  // ====================================================
  // REFUND
  // ====================================================

  refundable: z.boolean().default(true),

  // ====================================================
  // CANCELLATION
  // ====================================================

  cancellationPolicy: hotelRatePlanCancellationSchema.nullable().optional(),

  // ====================================================
  // PRICE
  // ====================================================

  price: HotelRoomPriceSchema.nullable().optional(),

  // ====================================================
  // STATUS
  // ====================================================

  active: z.boolean().default(true),
});

export type HotelRatePlanInput = z.infer<typeof hotelRatePlanSchema>;
