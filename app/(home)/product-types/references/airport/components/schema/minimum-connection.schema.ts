import { z } from "zod";

export const FlyMinimumConnectionTimeSchema = z.object({
  airportId: z.string(),
  domesticMinutes: z.number(),

  internationalMinutes: z.number(),
});

export type FlyMinimumConnectionTimeFormValues = z.infer<
  typeof FlyMinimumConnectionTimeSchema
>;
