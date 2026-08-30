import { z } from "zod";

export const BusSeatSchema = z.object({
  // ======================================================
  // SEAT
  // ======================================================

  seatNumber: z.string(),

  typeId: z.string(),

  floor: z.number().nullable(),

  row: z.number().nullable(),

  column: z.number().nullable(),
});

export type BusSeatFormValues = z.infer<typeof BusSeatSchema>;
