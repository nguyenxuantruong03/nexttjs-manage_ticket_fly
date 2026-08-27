import { PolicyFormSchema } from "./schema";

import { policyDefaultValues } from "./default-values";

import { Policy } from "@/types/common/features/policy/policy";

export function initPolicyFormValues(
  policy?: Policy,
): PolicyFormSchema {
  if (!policy) {
    return structuredClone(policyDefaultValues);
  }

  return structuredClone(policy);
}