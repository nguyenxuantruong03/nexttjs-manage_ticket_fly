import { z } from "zod";

import { HotelRoomSchema } from "./room.schema";

export const HotelRoomTypeSchema = z.object({
  id: z.string().cuid(),

  hotelId: z.string().cuid(),

  name: z.string().min(1),

  description: z.string().nullable().optional(),

  inventories: z.array(z.any()).default([]),

  bookingRooms: z.array(z.any()).default([]),

  rooms: z.array(HotelRoomSchema).default([]),

  active: z.boolean().default(true),

  sortOrder: z.number().int().default(0),

  createdAt: z.coerce.date(),

  updatedAt: z.coerce.date(),
});

export type HotelRoomTypeInput = z.infer<typeof HotelRoomTypeSchema>;
