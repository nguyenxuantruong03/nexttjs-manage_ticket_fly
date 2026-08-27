import { z } from "zod";


// ======================================================
// SEAT
// ======================================================

export const FlySeatSchema = z.object({
  // ======================================================
  // RELATIONS
  // ======================================================

  cabinId: z.string().optional(),

  typeId: z.string(),

  // ======================================================
  // SEAT
  // ======================================================

  seatNumber: z.string(),

  row: z.number().nullable(),

  column: z.string().nullable(),

  // ======================================================
  // FEATURES
  // ======================================================

  extraLegroom: z.boolean(),

  emergencyExit: z.boolean(),

  nearWindow: z.boolean().nullable(),

  nearAisle: z.boolean().nullable(),

  nearWing: z.boolean().nullable(),

  available: z.boolean(),
});

export type FlySeatFormValues = z.infer<typeof FlySeatSchema>;

// ======================================================
// CABIN
// ======================================================

export const FlyCabinSchema = z.object({
  // ======================================================
  // RELATIONS
  // ======================================================

  aircraftId: z.string().optional(),

  cabinClassId: z.string(),

  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().nullable(),

  rows: z.number().nullable(),

  totalSeats: z.number(),

  // ======================================================
  // SEATS
  // ======================================================

  seats: z.array(FlySeatSchema),
});

export type FlyCabinFormValues = z.infer<typeof FlyCabinSchema>;
