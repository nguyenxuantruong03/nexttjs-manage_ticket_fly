import { z } from "zod";

// ======================================================
// HOTEL EXTRA PRICE
// ======================================================

export const hotelExtraPriceSchema = z.object({
  extraId: z.string(),

  name: z.string().nullable().optional(),

  price: z.number(),

  active: z.boolean().default(true),
});

export type HotelExtraPriceSchema = z.infer<typeof hotelExtraPriceSchema>;

// ======================================================
// HOTEL EXTRA
// ======================================================

export const hotelExtraSchema = z.object({
  hotelId: z.string(),

  name: z.string().min(1),

  description: z.string().nullable().optional(),

  typeId: z.string().nullable().optional(),

  isMandatory: z.boolean().default(false),

  availableFor: z.string().nullable().optional(),

  maxQuantity: z.number().int().nullable().optional(),

  prices: z.array(hotelExtraPriceSchema).default([]),

  active: z.boolean().default(true),
});

export type HotelExtraSchema = z.infer<typeof hotelExtraSchema>;

// ======================================================
// EXTRA TYPE
// ======================================================

export const extraTypeSchema = z.object({
  name: z.string().min(1),

  description: z.string().nullable().optional(),

  icon: z.string().nullable().optional(),

  active: z.boolean().default(true),

  sortOrder: z.number().int().default(0),
});

export type ExtraTypeSchema = z.infer<typeof extraTypeSchema>;
