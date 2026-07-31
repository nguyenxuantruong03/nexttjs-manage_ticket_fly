import { HotelPolicy } from "@/types/bookings/hotel/policy.type";
import { policyDefaultValues } from "./default-values";
import { PolicyFormSchema } from "./schema";

export function initPolicyFormValues(policy: HotelPolicy): PolicyFormSchema {
  if (!policy) {
    return structuredClone(policyDefaultValues);
  }

  return structuredClone(policy);
}
