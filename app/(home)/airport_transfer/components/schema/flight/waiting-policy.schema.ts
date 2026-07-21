import { z } from "zod";

export const AirportTransferWaitingPolicySchema = z.object({
  freeWaitingMinutes: z.number().optional(),

  airportFreeWaitingMinutes: z.number().optional(),

  waitingFeePerHour: z.number().optional(),

  maximumWaitingMinutes: z.number().optional(),
});
