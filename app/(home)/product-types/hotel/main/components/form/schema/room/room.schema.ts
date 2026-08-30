import { z } from "zod";

// ======================================================
// BATHROOM TYPE - MANAGE
// ======================================================

export const bathroomTypeSchema = z.object({
  name: z.string(),

  description: z.string().nullable().optional(),

  icon: z.string().nullable().optional(),

  active: z.boolean().default(true),

  sortOrder: z.number().int().default(0),
});

// ======================================================
// ROOM VIEW - MANAGE
// ======================================================

export const roomViewSchema = z.object({
  name: z.string(),

  description: z.string().nullable().optional(),

  icon: z.string().nullable().optional(),

  active: z.boolean().default(true),

  sortOrder: z.number().int().default(0),
});

// ======================================================
// BED TYPE - MANAGE
// ======================================================

export const bedTypeSchema = z.object({
  name: z.string(),

  description: z.string().nullable().optional(),

  icon: z.string().nullable().optional(),

  active: z.boolean().default(true),

  sortOrder: z.number().int().default(0),
});

// ======================================================
// HOTEL ROOM TYPE BED TYPE - MANAGE
// ======================================================

export const hotelRoomTypeBedTypeSchema = z.object({
  bedTypeId: z.string(),

  quantity: z.number().int().min(1).default(1),
});

// ======================================================
// ROOM CATEGORY - MANAGE
// ======================================================

export const roomCategorySchema = z.object({
  name: z.string(),

  description: z.string().nullable().optional(),

  icon: z.string().nullable().optional(),

  active: z.boolean().default(true),

  sortOrder: z.number().int().default(0),
});

// ======================================================
// ROOM FACILITY - MANAGE
// ======================================================

export const roomFacilitySchema = z.object({
  facilityId: z.string(),

  quantity: z.number().min(0).nullable().optional(),

  note: z.string().nullable().optional(),
});

// ======================================================
// TYPES
// ======================================================

export type BathroomTypeInput = z.infer<typeof bathroomTypeSchema>;

export type RoomViewInput = z.infer<typeof roomViewSchema>;

export type BedTypeInput = z.infer<typeof bedTypeSchema>;

export type HotelRoomTypeBedTypeInput = z.infer<
  typeof hotelRoomTypeBedTypeSchema
>;

export type RoomCategoryInput = z.infer<typeof roomCategorySchema>;

export type RoomFacilityInput = z.infer<typeof roomFacilitySchema>;
