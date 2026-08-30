import { z } from "zod";
import { hotelAvailabilityCalendarSchema } from "./calendar.schema";

// ======================================================
// HOTEL AVAILABILITY
// ======================================================

export const hotelAvailabilitySchema = z.object({
  // ======================================================
  // RELATION
  // ======================================================

  inventoryId: z.string(),

  // ======================================================
  // BASIC
  // ======================================================

  availableRooms: z.number().int(),

  lastUpdated: z.date().nullable().optional(),

  // ======================================================
  // RELATION OBJECT
  // ======================================================

  calendar: z.array(hotelAvailabilityCalendarSchema).optional(),
});

// ======================================================
// TYPE
// ======================================================

export type HotelAvailabilitySchema = z.infer<typeof hotelAvailabilitySchema>;
