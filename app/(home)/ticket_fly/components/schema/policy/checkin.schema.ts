import { z } from "zod";

export const FlyCheckInPolicySchema = z.object({
  onlineCheckIn: z.boolean(),

  opensBeforeHours: z.number().optional(),

  closesBeforeMinutes: z.number().optional(),

  airportCheckIn: z.boolean(),

  mobileBoardingPass: z.boolean(),
});

export type FlyCheckInPolicyFormValues = z.infer<typeof FlyCheckInPolicySchema>;
