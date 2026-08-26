import { z } from "zod";

export const AirportTransferAvailabilityCalendarSchema = z.object({

  // ======================================================
  // AVAILABILITY
  // ======================================================

  availabilityId: z.string().min(1),

  // ======================================================
  // CALENDAR
  // ======================================================

  date: z.string(),

  available: z.boolean(),

  // ======================================================
  // VEHICLES
  // ======================================================

  totalVehicles: z.number(),

  remainingVehicles: z.number(),

  // ======================================================
  // STOP SELL
  // ======================================================

  stopSell: z.boolean(),

  // ======================================================
  // MINIMUM NOTICE
  // ======================================================

  minimumNoticeMinutes: z.number().optional(),

});

export type AirportTransferAvailabilityCalendarFormSchema =
  z.infer<typeof AirportTransferAvailabilityCalendarSchema>;