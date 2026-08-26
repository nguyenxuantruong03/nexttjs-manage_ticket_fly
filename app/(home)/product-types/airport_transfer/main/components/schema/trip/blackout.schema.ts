import { z } from "zod";

export const AirportTransferBlackoutDateSchema = z.object({

  // ======================================================
  // BLACKOUT INFO
  // ======================================================

  date: z.string(),

  reason: z.string().optional(),

});

export type AirportTransferBlackoutDateFormSchema =
  z.infer<typeof AirportTransferBlackoutDateSchema>;