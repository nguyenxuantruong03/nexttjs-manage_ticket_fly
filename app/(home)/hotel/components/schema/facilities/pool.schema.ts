import { z } from "zod";

export const HotelPoolSchema = z.object({
  id: z.string().cuid(),

  facilitiesId: z.string().cuid(),

  available: z.boolean(),

  indoor: z.boolean().nullable().optional(),

  outdoor: z.boolean().nullable().optional(),

  infinity: z.boolean().nullable().optional(),

  heated: z.boolean().nullable().optional(),

  kidsPool: z.boolean().nullable().optional(),
});
