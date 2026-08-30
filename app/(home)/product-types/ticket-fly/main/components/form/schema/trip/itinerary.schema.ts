import { z } from "zod";

// ======================================================
// ITINERARY SEGMENT
// ======================================================

export const FlyItinerarySegmentSchema = z.object({
  tripId: z.string(),

  order: z.number(),
});

export type FlyItinerarySegmentFormValues = z.infer<
  typeof FlyItinerarySegmentSchema
>;

// ======================================================
// ITINERARY
// ======================================================

export const FlyItinerarySchema = z.object({
  bookingId: z.string(),

  segments: z.array(FlyItinerarySegmentSchema).optional(),
});

export type FlyItineraryFormValues = z.infer<typeof FlyItinerarySchema>;
