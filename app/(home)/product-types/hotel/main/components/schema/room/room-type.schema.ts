import { z } from "zod";

import { hotelRoomTypeBedTypeSchema, roomFacilitySchema } from "./room.schema";

import { roomMediaSchema } from "./room-media.schema";

// ======================================================
// HOTEL ROOM TYPE - MANAGE
// ======================================================

export const hotelRoomTypeSchema = z.object({
  // ====================================================
  // RELATION
  // ====================================================

  categoryId: z.string().nullable().optional(),

  bathroomTypeId: z.string().nullable().optional(),

  viewId: z.string().nullable().optional(),

  // ====================================================
  // BED TYPES
  // ====================================================

  bedTypes: z.array(hotelRoomTypeBedTypeSchema).default([]),

  // ====================================================
  // MEDIA
  // ====================================================

  medias: z.array(roomMediaSchema).default([]),

  // ====================================================
  // ROOM FACILITIES
  // ====================================================

  facilities: z.array(roomFacilitySchema).default([]),

  // ====================================================
  // BASIC
  // ====================================================

  code: z.string().nullable().optional(),

  name: z.string(),

  description: z.string().nullable().optional(),

  roomSize: z.number().min(0).nullable().optional(),

  bedCount: z.number().int().min(0).nullable().optional(),

  bathroomCount: z.number().int().min(0).nullable().optional(),

  floor: z.number().int().nullable().optional(),

  // ====================================================
  // GUEST CAPACITY
  // ====================================================

  maxGuests: z.number().int().min(0).nullable().optional(),

  maxAdults: z.number().int().min(0).nullable().optional(),

  maxChildren: z.number().int().min(0).nullable().optional(),

  // ====================================================
  // ROOM FEATURES
  // ====================================================

  smokingAllowed: z.boolean().nullable().optional(),

  balcony: z.boolean().nullable().optional(),

  kitchen: z.boolean().nullable().optional(),

  accessible: z.boolean().nullable().optional(),

  // ====================================================
  // STATUS
  // ====================================================

  active: z.boolean().default(true),

  sortOrder: z.number().int().default(0),
});

// ======================================================
// TYPE
// ======================================================

export type HotelRoomTypeInput = z.infer<typeof hotelRoomTypeSchema>;
