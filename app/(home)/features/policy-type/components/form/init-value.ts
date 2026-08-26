import { PolicyTypeFormSchema } from "./schema";

import { policyTypeDefaultValues } from "./default-values";

import { PolicyType } from "@/types/common/features/policy/policy-type";

export function initPolicyTypeFormValues(
  policyType?: PolicyType,
): PolicyTypeFormSchema {
  if (!policyType) {
    return structuredClone(policyTypeDefaultValues);
  }

  return structuredClone(policyType);
}
