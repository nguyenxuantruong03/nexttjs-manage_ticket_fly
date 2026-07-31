import { HotelPolicyType } from "@/types/bookings/hotel/policy.type";
import { policyTypeDefaultValues } from "./default-values";
import { PolicyTypeFormSchema } from "./schema";

export function initPolicyTypeFormValues(
  policytype: HotelPolicyType,
): PolicyTypeFormSchema {
  if (!policytype) {
    return structuredClone(policyTypeDefaultValues);
  }

  return structuredClone(policytype);
}
