// schema/policies/policies.schema.ts

import { z } from "zod";

import { YachtBookingPolicySchema } from "./booking-policy.schema";
import { YachtCancellationPolicySchema } from "./cancellation-policy.schema";
import { YachtFlightSupportSchema } from "./flight-support.schema";
import { YachtLuggagePolicySchema } from "./luggage-policy.schema";
import { YachtMeetAndGreetSchema } from "./meet-and-greet.schema";
import { YachtPassengerRequirementSchema } from "./passenger-requirement.schema";
import { YachtWaitingPolicySchema } from "./waiting-policy.schema";

export const YachtPoliciesSchema = z.object({

  cancellation: YachtCancellationPolicySchema.nullable().optional(),

  passenger: YachtPassengerRequirementSchema.nullable().optional(),

  luggage: YachtLuggagePolicySchema.nullable().optional(),

  waiting: YachtWaitingPolicySchema.nullable().optional(),

  meetAndGreet: YachtMeetAndGreetSchema.nullable().optional(),

  flightSupport: YachtFlightSupportSchema.nullable().optional(),

  booking: YachtBookingPolicySchema.nullable().optional(),
});

export type YachtPoliciesFormValues = z.infer<typeof YachtPoliciesSchema>;
