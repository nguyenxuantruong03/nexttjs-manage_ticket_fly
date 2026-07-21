import { z } from "zod";

export const BusSeatLayoutSchema = z.object({
  name: z.string(),

  seatRows: z.number(),

  seatColumns: z.number(),
});

export type BusSeatLayoutFormValues = z.infer<typeof BusSeatLayoutSchema>;
