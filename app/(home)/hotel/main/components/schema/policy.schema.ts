import { z } from "zod";

// ======================================================
// HOTEL POLICY TYPE
// ======================================================

export const hotelPolicyTypeSchema = z.object({
  name: z.string(),

  description: z.string().nullable().optional(),

  icon: z.string().nullable().optional(),

  active: z.boolean().default(true),

  sortOrder: z.number().int().default(0),
});

// ======================================================
// HOTEL POLICY
// ======================================================

export const hotelPolicySchema = z.object({
  // ======================================================
  // RELATION
  // ======================================================

  typeId: z.string(),

  // ======================================================
  // BASIC
  // ======================================================

  name: z.string(),

  description: z.string(),
});

// ======================================================
// HOTEL POLICY MAPPER
// ======================================================

export const hotelPolicyMapperSchema = z.object({
  // ======================================================
  // RELATION
  // ======================================================

  hotelId: z.string(),

  policyId: z.string(),
});

// ======================================================
// HOTEL CHECK POLICY
// ======================================================

export const hotelCheckPolicySchema = z.object({

  // ======================================================
  // BASIC
  // ======================================================

  checkInFrom: z.string().nullable().optional(),

  checkInUntil: z.string().nullable().optional(),

  checkOutUntil: z.string().nullable().optional(),

  minimumAge: z.number().int().min(0).nullable().optional(),
});

// ======================================================
// TYPES
// ======================================================

export type HotelPolicyTypeSchema = z.infer<typeof hotelPolicyTypeSchema>;

export type HotelPolicySchema = z.infer<typeof hotelPolicySchema>;

export type HotelPolicyMapperSchema = z.infer<typeof hotelPolicyMapperSchema>;

export type HotelCheckPolicySchema = z.infer<typeof hotelCheckPolicySchema>;
