import { z } from "zod";

// ======================================================
// DINING MEAL TYPE - MANAGE
// ======================================================

export const diningMealTypeSchema = z.object({
  name: z.string(),

  description: z.string().nullable().optional(),

  icon: z.string().nullable().optional(),

  active: z.boolean().default(true),

  sortOrder: z.number().int().default(0),
});

// ======================================================
// DINING SERVICE TYPE - MANAGE
// ======================================================

export const diningServiceTypeSchema = z.object({
  name: z.string(),

  description: z.string().nullable().optional(),

  icon: z.string().nullable().optional(),

  active: z.boolean().default(true),

  sortOrder: z.number().int().default(0),
});

// ======================================================
// HOTEL DINING PRICE - MANAGE
// ======================================================

export const hotelDiningPriceSchema = z.object({
  // ====================================================
  // BASIC
  // ====================================================

  name: z.string().nullable().optional(),

  price: z.number().min(0),

  currency: z.string().default("USD"),

  active: z.boolean().default(true),
});

// ======================================================
// HOTEL DINING OPTION - MANAGE
// ======================================================

export const hotelDiningOptionSchema = z.object({
  // ====================================================
  // RELATION
  // ====================================================

  mealTypeId: z.string().nullable().optional(),

  serviceTypeId: z.string().nullable().optional(),

  // ====================================================
  // BASIC
  // ====================================================

  name: z.string(),

  openingHours: z.string().nullable().optional(),

  capacity: z.number().int().min(0).nullable().optional(),

  description: z.string().nullable().optional(),

  location: z.string().nullable().optional(),

  dressCode: z.string().nullable().optional(),

  reservationRequired: z.boolean().nullable().optional(),

  // ====================================================
  // PRICES
  // ====================================================

  prices: z
    .array(hotelDiningPriceSchema)
    .default([]),

  // ====================================================
  // STATUS
  // ====================================================

  active: z.boolean().default(true),
});

// ======================================================
// TYPES
// ======================================================

export type DiningMealTypeInput = z.infer<
  typeof diningMealTypeSchema
>;

export type DiningServiceTypeInput = z.infer<
  typeof diningServiceTypeSchema
>;

export type HotelDiningPriceInput = z.infer<
  typeof hotelDiningPriceSchema
>;

export type HotelDiningOptionInput = z.infer<
  typeof hotelDiningOptionSchema
>;