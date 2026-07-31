import { z } from "zod";

export const RoomTypeSchema = z.object({
  // ======================================================
  // RELATION
  // ======================================================

  categoryId: z.string().trim().nullable().optional(),

  bathroomTypeId: z.string().trim().nullable().optional(),

  viewId: z.string().trim().nullable().optional(),

  // ======================================================
  // BASIC
  // ======================================================

  code: z.string().trim().nullable().optional(),

  name: z.string().trim().min(1, "Name is required"),

  description: z.string().trim().nullable().optional(),

  // ======================================================
  // ROOM
  // ======================================================

  roomSize: z.coerce.number().positive().nullable().optional(),

  bedCount: z.coerce.number().int().min(0).nullable().optional(),

  bathroomCount: z.coerce.number().min(0).nullable().optional(),

  floor: z.coerce.number().int().nullable().optional(),

  // ======================================================
  // CAPACITY
  // ======================================================

  maxGuests: z.coerce.number().int().min(1).nullable().optional(),

  maxAdults: z.coerce.number().int().min(0).nullable().optional(),

  maxChildren: z.coerce.number().int().min(0).nullable().optional(),

  // ======================================================
  // FEATURES
  // ======================================================

  smokingAllowed: z.boolean().nullable().optional(),

  balcony: z.boolean().nullable().optional(),

  kitchen: z.boolean().nullable().optional(),

  accessible: z.boolean().nullable().optional(),

  active: z.boolean(),

  sortOrder: z.coerce.number().int().min(0),
});

export type RoomTypeFormSchema = z.infer<typeof RoomTypeSchema>;