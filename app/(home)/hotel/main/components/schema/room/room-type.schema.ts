import { z } from "zod";
import { hotelRoomTypeBedTypeSchema, roomFacilitySchema } from "./room.schema";
import { roomMediaSchema } from "./room-media.schema";

// ======================================================
// HOTEL ROOM TYPE
// ======================================================

export const hotelRoomTypeSchema = z.object({
  // ======================================================
  // RELATION
  // ======================================================
  hotelId: z.string(),

  categoryId: z.string().nullable().optional(),

  bathroomTypeId: z.string().nullable().optional(),

  viewId: z.string().nullable().optional(),

  // ======================================================
  // BED TYPES
  // ======================================================

  bedTypes: z.array(z.lazy(() => hotelRoomTypeBedTypeSchema)).default([]),

  medias: z.array(z.lazy(() => roomMediaSchema)).default([]),
  // ======================================================
  // ROOM FACILITIES
  // ======================================================

  facilities: z.array(z.lazy(() => roomFacilitySchema)).default([]),
  // ======================================================
  // BASIC
  // ======================================================

  code: z.string().nullable().optional(),

  name: z.string(),

  description: z.string().nullable().optional(),

  roomSize: z.number().min(0).nullable().optional(),

  bedCount: z.number().int().min(0).nullable().optional(),

  bathroomCount: z.number().min(0).nullable().optional(),

  floor: z.number().int().nullable().optional(),

  maxGuests: z.number().int().min(0).nullable().optional(),

  maxAdults: z.number().int().min(0).nullable().optional(),

  maxChildren: z.number().int().min(0).nullable().optional(),

  smokingAllowed: z.boolean().nullable().optional(),

  balcony: z.boolean().nullable().optional(),

  kitchen: z.boolean().nullable().optional(),

  accessible: z.boolean().nullable().optional(),

  active: z.boolean().default(true),

  sortOrder: z.number().int().default(0),
});

// ======================================================
// TYPES
// ======================================================

export type HotelRoomTypeSchema = z.infer<typeof hotelRoomTypeSchema>;
