import { z } from "zod";

import { FlyBaggagePolicySchema } from "./baggage.schema";
import { FlyBoardingPolicySchema } from "./boarding.schema";
import { FlyCancellationPolicySchema } from "./cancellation.schema";
import { FlyChangePolicySchema } from "./change.schema";
import { FlyCheckInPolicySchema } from "./checkin.schema";
import { FlyPassengerPolicySchema } from "./passenger.schema";
import { FlyTransitPolicySchema } from "./transit.schema";
import { FlyVisaPolicySchema } from "./visa.schema";

export const FlyPoliciesSchema = z.object({
  cancellation: FlyCancellationPolicySchema.optional(),

  change: FlyChangePolicySchema.optional(),

  baggage: FlyBaggagePolicySchema.optional(),

  boarding: FlyBoardingPolicySchema.optional(),

  passenger: FlyPassengerPolicySchema.optional(),

  checkIn: FlyCheckInPolicySchema.optional(),

  transit: FlyTransitPolicySchema.optional(),

  visa: FlyVisaPolicySchema.optional(),
});

export type FlyPoliciesFormValues = z.infer<typeof FlyPoliciesSchema>;
