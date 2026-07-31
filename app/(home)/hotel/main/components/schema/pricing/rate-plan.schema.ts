import { z } from "zod";
import { HotelRoomPriceSchema } from "./price.schema";
import { hotelInventoryLockSchema } from "../inventory/lock.schema";

// ======================================================
// HOTEL RATE PLAN TYPE
// ======================================================

export const hotelRatePlanTypeSchema = z.object({
  name: z.string(),

  description: z.string().nullable().optional(),

  icon: z.string().nullable().optional(),

  active: z.boolean().default(true),

  sortOrder: z.number().int().default(0),
});

// ======================================================
// MEAL PLAN
// ======================================================

export const mealPlanSchema = z.object({
  name: z.string(),

  description: z.string().nullable().optional(),

  icon: z.string().nullable().optional(),

  active: z.boolean().default(true),

  sortOrder: z.number().int().default(0),
});

// ======================================================
// HOTEL RATE PLAN CANCELLATION
// ======================================================

export const hotelRatePlanCancellationSchema = z.object({
  // ======================================================
  // RELATION
  // ======================================================

  ratePlanId: z.string(),

  // ======================================================
  // BASIC
  // ======================================================

  freeCancellation: z.boolean().default(false),

  beforeHours: z.number().int().nullable().optional(),

  cancellationFee: z.number().min(0).nullable().optional(),
});

// ======================================================
// HOTEL RATE PLAN POLICY
// ======================================================

export const hotelRatePlanPolicySchema = z.object({
  // ======================================================
  // RELATION
  // ======================================================

  ratePlanId: z.string(),

  policyId: z.string(),

  // ======================================================
  // RELATION OBJECT
  // ======================================================
});

// ======================================================
// HOTEL RATE PLAN
// ======================================================

export const hotelRatePlanSchema = z.object({
  // ======================================================
  // RELATION
  // ======================================================

  inventoryId: z.string(),

  typeId: z.string().nullable().optional(),

  mealPlanId: z.string().nullable().optional(),

  // ======================================================
  // BASIC
  // ======================================================

  name: z.string(),

  code: z.string().nullable().optional(),

  description: z.string().nullable().optional(),

  refundable: z.boolean().default(false),

  active: z.boolean().default(true),

   price: HotelRoomPriceSchema.nullable().optional(),
});

// ======================================================
// TYPES
// ======================================================

export type HotelRatePlanTypeSchema = z.infer<typeof hotelRatePlanTypeSchema>;

export type MealPlanSchema = z.infer<typeof mealPlanSchema>;

export type HotelRatePlanCancellationSchema = z.infer<
  typeof hotelRatePlanCancellationSchema
>;

export type HotelRatePlanPolicySchema = z.infer<
  typeof hotelRatePlanPolicySchema
>;

export type HotelRatePlanSchema = z.infer<typeof hotelRatePlanSchema>;
