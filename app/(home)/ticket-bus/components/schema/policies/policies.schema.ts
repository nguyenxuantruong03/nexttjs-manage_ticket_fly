import { z } from "zod";

import { BusBoardingPolicySchema } from "./boarding.schema";
import { BusCancellationPolicySchema } from "./cancellation.schema";
import { BusChildPolicySchema } from "./child.schema";
import { BusLuggagePolicySchema } from "./luggage.schema";
import { BusPassengerPolicySchema } from "./passenger.schema";
import { BusTicketChangePolicySchema } from "./ticket-change.schema";

export const BusPoliciesSchema = z.object({

  cancellation: BusCancellationPolicySchema.optional(),

  luggage: BusLuggagePolicySchema.optional(),

  child: BusChildPolicySchema.optional(),

  boarding: BusBoardingPolicySchema.optional(),

  change: BusTicketChangePolicySchema.optional(),

  passenger: BusPassengerPolicySchema.optional(),
});

export type BusPoliciesFormValues = z.infer<typeof BusPoliciesSchema>;
