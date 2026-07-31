import { z } from "zod";

// ======================================================
// ACCESSIBILITY
// ======================================================

export const accessibilitySchema = z.object({
  name: z.string(),

  description: z.string().nullable().optional(),
});

// ======================================================
// HOTEL ACCESSIBILITY
// ======================================================

export const hotelAccessibilitySchema = z.object({
  // ======================================================
  // RELATION
  // ======================================================

  hotelId: z.string(),

  accessibilityId: z.string(),
});

// ======================================================
// HOTEL BRAND
// ======================================================

export const hotelBrandSchema = z.object({
  name: z.string(),

  description: z.string().nullable().optional(),

  logo: z.string().nullable().optional(),

  active: z.boolean().default(true),
});

// ======================================================
// HOTEL AWARD
// ======================================================

export const hotelAwardSchema = z.object({
  // ======================================================
  // RELATION
  // ======================================================

  hotelId: z.string(),

  // ======================================================
  // BASIC
  // ======================================================

  name: z.string(),

  issuer: z.string().nullable().optional(),

  awardDate: z.date().nullable().optional(),

  year: z.number().int().nullable().optional(),

  description: z.string().nullable().optional(),

  awardUrl: z.string().url().nullable().optional(),

  active: z.boolean().default(true),
});

// ======================================================
// HOTEL AWARD MEDIA
// ======================================================

export const hotelAwardMediaSchema = z.object({
  // ======================================================
  // RELATION
  // ======================================================

  awardId: z.string(),

  mediaId: z.string(),

  // ======================================================
  // BASIC
  // ======================================================

  isPrimary: z.boolean().default(false),

  sortOrder: z.number().int().default(0),
});

// ======================================================
// HOTEL CONTACT
// ======================================================

export const hotelContactSchema = z.object({
  // ======================================================
  // RELATION
  // ======================================================

  hotelId: z.string(),

  // ======================================================
  // BASIC
  // ======================================================

  phone: z.string().nullable().optional(),

  email: z.string().email().nullable().optional(),

  website: z.string().url().nullable().optional(),
});

// ======================================================
// HOTEL DESCRIPTION
// ======================================================

export const hotelDescriptionSchema = z.object({
  // ======================================================
  // RELATION
  // ======================================================

  hotelId: z.string(),

  // ======================================================
  // BASIC
  // ======================================================

  title: z.string(),

  content: z.string(),

  sortOrder: z.number().int().default(0),
});

// ======================================================
// HOTEL STAR RATING
// ======================================================

export const hotelStarRatingSchema = z.object({
  name: z.string(),

  star: z.number().int().min(1),

  description: z.string().nullable().optional(),
});

// ======================================================
// HOTEL OPENING HOUR
// ======================================================

export const hotelOpeningHourSchema = z.object({
  // ======================================================
  // RELATION
  // ======================================================

  hotelId: z.string(),

  // ======================================================
  // BASIC
  // ======================================================

  service: z.string(),

  day: z.string(),

  openTime: z.string().nullable().optional(),

  closeTime: z.string().nullable().optional(),
});

// ======================================================
// SUSTAINABILITY
// ======================================================

export const sustainabilitySchema = z.object({
  name: z.string(),

  description: z.string().nullable().optional(),
});

// ======================================================
// HOTEL SUSTAINABILITY
// ======================================================

export const hotelSustainabilitySchema = z.object({
  // ======================================================
  // RELATION
  // ======================================================

  hotelId: z.string(),

  sustainabilityId: z.string(),
});

// ======================================================
// TYPES
// ======================================================

export type AccessibilitySchema = z.infer<typeof accessibilitySchema>;

export type HotelAccessibilitySchema = z.infer<typeof hotelAccessibilitySchema>;

export type HotelBrandSchema = z.infer<typeof hotelBrandSchema>;

export type HotelAwardSchema = z.infer<typeof hotelAwardSchema>;

export type HotelAwardMediaSchema = z.infer<typeof hotelAwardMediaSchema>;

export type HotelContactSchema = z.infer<typeof hotelContactSchema>;

export type HotelDescriptionSchema = z.infer<typeof hotelDescriptionSchema>;

export type HotelStarRatingSchema = z.infer<typeof hotelStarRatingSchema>;

export type HotelOpeningHourSchema = z.infer<typeof hotelOpeningHourSchema>;

export type SustainabilitySchema = z.infer<typeof sustainabilitySchema>;

export type HotelSustainabilitySchema = z.infer<
  typeof hotelSustainabilitySchema
>;
