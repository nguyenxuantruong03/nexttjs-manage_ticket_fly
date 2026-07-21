import { z } from "zod";

export const HotelRoomImageSchema = z.object({
  id: z.string().cuid(),

  roomId: z.string().cuid(),

  thumbnail: z.string().url().nullable().optional(),

  cover: z.string().url().nullable().optional(),

  hero: z.string().url().nullable().optional(),

  rooms: z.array(z.string()).default([]),

  bedroom: z.array(z.string()).default([]),

  bathroom: z.array(z.string()).default([]),

  balcony: z.array(z.string()).default([]),

  livingRoom: z.array(z.string()).default([]),

  kitchen: z.array(z.string()).default([]),

  workspace: z.array(z.string()).default([]),

  view: z.array(z.string()).default([]),

  gallery: z.array(z.string()).default([]),
});

export type HotelRoomImageInput = z.infer<typeof HotelRoomImageSchema>;
