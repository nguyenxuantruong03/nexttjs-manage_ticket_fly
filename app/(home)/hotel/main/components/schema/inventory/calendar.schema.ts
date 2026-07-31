import { z } from "zod";

// ======================================================
// HOTEL AVAILABILITY CALENDAR
// ======================================================

export const hotelAvailabilityCalendarSchema = z.object({
  // ======================================================
  // RELATION
  // ======================================================

  availabilityId: z.string().min(1, "Availability is required"),

  // ======================================================
  // BASIC
  // ======================================================

  date: z.date({
    required_error: "Date is required",
  }),

  totalRooms: z.number().int().min(0).nullable().optional(),

  remainingRooms: z
    .number({
      required_error: "Remaining rooms is required",
    })
    .int()
    .min(0),

  available: z.boolean().default(true),

  priceOverride: z.number().min(0).nullable().optional(),

  stopSell: z.boolean().default(false),

  closed: z.boolean().default(false),

  minimumStay: z.number().int().min(1).nullable().optional(),

  closedToArrival: z.boolean().default(false),

  closedToDeparture: z.boolean().default(false),

  note: z.string().nullable().optional(),

});


// ======================================================
// TYPES
// ======================================================

export type HotelAvailabilityCalendarFormSchema = z.infer<
  typeof hotelAvailabilityCalendarSchema
>;
