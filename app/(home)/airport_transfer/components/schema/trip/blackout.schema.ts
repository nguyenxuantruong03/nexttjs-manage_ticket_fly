import { z } from "zod";

export const AirportTransferBlackoutDateSchema = z.object({
  date: z.string(),

  reason: z.string().optional(),
});
