import { z } from "zod";

import { HotelAvailabilitySchema } from "./availability.schema";

import { HotelInventoryLockSchema } from "./lock.schema";

export const HotelInventorySchema = z.object({
  id: z.string().cuid(),

  hotelId: z.string().cuid(),

  roomTypeId: z.string().cuid(),

  availability: HotelAvailabilitySchema.nullable().optional(),

  ratePlans: z.array(z.any()).default([]),

  locks: z.array(HotelInventoryLockSchema).default([]),

  bookingRooms: z.array(z.any()).default([]),
});

export type HotelInventoryInput = z.infer<typeof HotelInventorySchema>;
