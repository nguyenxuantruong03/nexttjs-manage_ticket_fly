import { z } from "zod";

export const FlyDiversionSchema = z.object({
  divertedAirportId: z.string(),

  reason: z.string().optional(),
});

export type FlyDiversionFormValues = z.infer<typeof FlyDiversionSchema>;
