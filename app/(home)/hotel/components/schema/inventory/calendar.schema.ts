import { z } from "zod";

export const HotelAvailabilityCalendarSchema = z.object({
  id: z.string().cuid(),

  availabilityId: z.string().cuid(),

  date: z.coerce.date(),

  available: z.boolean().default(true),

  remainingRooms: z.number().int().min(0).nullable().optional(),

  priceOverride: z.number().min(0).nullable().optional(),

  stopSell: z.boolean().nullable().optional(),

  minimumStay: z.number().int().min(1).nullable().optional(),

  closedToArrival: z.boolean().nullable().optional(),

  closedToDeparture: z.boolean().nullable().optional(),
});

export type HotelAvailabilityCalendarInput = z.infer<
  typeof HotelAvailabilityCalendarSchema
>;
