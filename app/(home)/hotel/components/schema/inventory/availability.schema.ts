import { z } from "zod";

import { HotelAvailabilityCalendarSchema } from "./calendar.schema";

export const HotelAvailabilitySchema = z.object({
  id: z.string().cuid(),

  inventoryId: z.string().cuid(),

  isAvailable: z.boolean().default(true),

  availableRooms: z.number().int().min(0).nullable().optional(),

  lastUpdated: z.coerce.date().nullable().optional(),

  calendar: z.array(HotelAvailabilityCalendarSchema).default([]),
});

export type HotelAvailabilityInput = z.infer<typeof HotelAvailabilitySchema>;
