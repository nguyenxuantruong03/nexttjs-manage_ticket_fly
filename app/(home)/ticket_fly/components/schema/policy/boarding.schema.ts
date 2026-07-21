import { z } from "zod";

export const FlyBoardingPolicySchema = z.object({
  boardingBeforeMinutes: z.number().optional(),

  gateCloseMinutes: z.number().optional(),

  onlineBoardingPass: z.boolean().optional(),

  printedBoardingPass: z.boolean().optional(),
});

export type FlyBoardingPolicyFormValues = z.infer<
  typeof FlyBoardingPolicySchema
>;
