import { z } from "zod";

export const BusSeatLayoutSchema = z.object({
  // ======================================================
  // LAYOUT
  // ======================================================

  name: z.string(),

  seatRows: z.number(),

  seatColumns: z.number(),
});

export type BusSeatLayoutFormValues = z.infer<typeof BusSeatLayoutSchema>;
