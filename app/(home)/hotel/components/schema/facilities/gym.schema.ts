import { z } from "zod";

export const HotelGymSchema = z.object({
  id: z.string().cuid(),

  facilitiesId: z.string().cuid(),

  available: z.boolean(),

  open24Hours: z.boolean().nullable().optional(),

  personalTrainer: z.boolean().nullable().optional(),
});
