import { z } from "zod";

// ======================================================
// ACCESSIBILITY - MANAGE
// ======================================================

export const accessibilitySchema = z.object({
  name: z.string(),

  description: z.string().nullable().optional(),
});

// ======================================================
// HOTEL ACCESSIBILITY - MANAGE
// ======================================================

export const hotelAccessibilitySchema = z.object({
  accessibilityId: z.string(),
});

// ======================================================
// HOTEL BRAND - MANAGE
// ======================================================

export const hotelBrandSchema = z.object({
  name: z.string(),

  description: z.string().nullable().optional(),

  logo: z.string().nullable().optional(),

  active: z.boolean().default(true),
});

// ======================================================
// HOTEL AWARD MEDIA - MANAGE
// ======================================================

export const hotelAwardMediaSchema = z.object({
  mediaId: z.string(),

  isPrimary: z.boolean().default(false),

  sortOrder: z.number().int().default(0),
});

// ======================================================
// HOTEL AWARD - MANAGE
// ======================================================

export const hotelAwardSchema = z.object({
  name: z.string(),

  issuer: z.string().nullable().optional(),

  awardDate: z.coerce.date().nullable().optional(),

  year: z.number().int().nullable().optional(),

  description: z.string().nullable().optional(),

  awardUrl: z.string().nullable().optional(),

  medias: z.array(hotelAwardMediaSchema).optional(),

  active: z.boolean().default(true),
});

// ======================================================
// HOTEL CONTACT - MANAGE
// ======================================================

export const hotelContactSchema = z.object({
  phone: z.string().trim().nullable().optional(),

  email: z.string().trim().email().nullable().optional(),

  website: z.string().trim().nullable().optional(),
});

// ======================================================
// HOTEL DESCRIPTION - MANAGE
// ======================================================

export const hotelDescriptionSchema = z.object({
  title: z.string(),

  content: z.string(),

  sortOrder: z.number().int().default(0),
});

// ======================================================
// HOTEL STAR RATING - MANAGE
// ======================================================

export const hotelStarRatingSchema = z.object({
  name: z.string(),

  star: z.number().int().min(0),

  description: z.string().nullable().optional(),
});

// ======================================================
// HOTEL OPENING HOUR - MANAGE
// ======================================================

export const hotelOpeningHourSchema = z.object({
  service: z.string(),

  day: z.string(),

  openTime: z.string().trim().nullable().optional(),

  closeTime: z.string().trim().nullable().optional(),
});

// ======================================================
// SUSTAINABILITY - MANAGE
// ======================================================

export const sustainabilitySchema = z.object({
  name: z.string(),

  description: z.string().nullable().optional(),
});

// ======================================================
// HOTEL SUSTAINABILITY - MANAGE
// ======================================================

export const hotelSustainabilitySchema = z.object({
  sustainabilityId: z.string(),
});

// ======================================================
// TYPES
// ======================================================

export type AccessibilityInput = z.infer<typeof accessibilitySchema>;

export type HotelAccessibilityInput = z.infer<typeof hotelAccessibilitySchema>;

export type HotelBrandInput = z.infer<typeof hotelBrandSchema>;

export type HotelAwardInput = z.infer<typeof hotelAwardSchema>;

export type HotelAwardMediaInput = z.infer<typeof hotelAwardMediaSchema>;

export type HotelContactInput = z.infer<typeof hotelContactSchema>;

export type HotelDescriptionInput = z.infer<typeof hotelDescriptionSchema>;

export type HotelStarRatingInput = z.infer<typeof hotelStarRatingSchema>;

export type HotelOpeningHourInput = z.infer<typeof hotelOpeningHourSchema>;

export type SustainabilityInput = z.infer<typeof sustainabilitySchema>;

export type HotelSustainabilityInput = z.infer<
  typeof hotelSustainabilitySchema
>;
