import { z } from "zod";

export const HotelHouseRulesSchema = z.object({
  policiesId: z.string().cuid(),

  quietHoursStart: z.string().nullable().optional(),

  quietHoursEnd: z.string().nullable().optional(),

  partiesAllowed: z.boolean().nullable().optional(),

  visitorsAllowed: z.boolean().nullable().optional(),

  alcoholAllowed: z.boolean().nullable().optional(),
});

export type HotelHouseRulesInput = z.infer<typeof HotelHouseRulesSchema>;
