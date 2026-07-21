import { z } from "zod";

export const BusBoardingPolicySchema = z.object({

  checkInBeforeMinutes: z.number().optional(),

  boardingGateCloseMinutes: z.number().optional(),

  digitalTicketAccepted: z.boolean(),

  printedTicketRequired: z.boolean(),
});

export type BusBoardingPolicyFormValues = z.infer<
  typeof BusBoardingPolicySchema
>;
