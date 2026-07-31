import { z } from "zod";

// ======================================================
// BATHROOM TYPE
// ======================================================

export const bathroomTypeSchema = z.object({
  name: z.string(),

  description: z.string().nullable().optional(),

  icon: z.string().nullable().optional(),

  active: z.boolean().default(true),

  sortOrder: z.number().int().default(0),
});

// ======================================================
// ROOM VIEW
// ======================================================

export const roomViewSchema = z.object({
  name: z.string(),

  description: z.string().nullable().optional(),

  icon: z.string().nullable().optional(),

  active: z.boolean().default(true),

  sortOrder: z.number().int().default(0),
});

// ======================================================
// BED TYPE
// ======================================================

export const bedTypeSchema = z.object({
  name: z.string(),

  description: z.string().nullable().optional(),

  icon: z.string().nullable().optional(),

  active: z.boolean().default(true),

  sortOrder: z.number().int().default(0),
});

// ======================================================
// HOTEL ROOM TYPE BED TYPE
// ======================================================

export const hotelRoomTypeBedTypeSchema = z.object({
  // ======================================================
  // RELATION
  // ======================================================

  roomTypeId: z.string(),

  bedTypeId: z.string(),

  // ======================================================
  // BASIC
  // ======================================================

  quantity: z.number().int().min(1).default(1),
});

// ======================================================
// ROOM CATEGORY
// ======================================================

export const roomCategorySchema = z.object({
  name: z.string(),

  description: z.string().nullable().optional(),

  icon: z.string().nullable().optional(),

  active: z.boolean().default(true),

  sortOrder: z.number().int().default(0),
});

// ======================================================
// ROOM FACILITY
// ======================================================

export const roomFacilitySchema = z.object({
  // ======================================================
  // RELATION
  // ======================================================

  roomTypeId: z.string(),

  facilityId: z.string(),

  // ======================================================
  // BASIC
  // ======================================================

  quantity: z.number().int().min(0).nullable().optional(),

  note: z.string().nullable().optional(),
});

// ======================================================
// TYPES
// ======================================================

export type BathroomTypeSchema = z.infer<typeof bathroomTypeSchema>;

export type RoomViewSchema = z.infer<typeof roomViewSchema>;

export type BedTypeSchema = z.infer<typeof bedTypeSchema>;

export type HotelRoomTypeBedTypeSchema = z.infer<
  typeof hotelRoomTypeBedTypeSchema
>;

export type RoomCategorySchema = z.infer<typeof roomCategorySchema>;

export type RoomFacilitySchema = z.infer<typeof roomFacilitySchema>;
