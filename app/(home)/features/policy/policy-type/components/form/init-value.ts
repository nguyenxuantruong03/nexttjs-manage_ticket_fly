import { PolicyTypeFormSchema } from "./schema";

import { policyTypeDefaultValues } from "./default-values";

import { PolicyType } from "@/types/common/features/policy/policy-type";

export function initPolicyTypeFormValues(
  policyType?: PolicyType,
): PolicyTypeFormSchema {
  if (!policyType) {
    return structuredClone(policyTypeDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    name: policyType.name ?? "",
    description: policyType.description ?? null,
    icon: policyType.icon ?? null,

    bookingTypeIds:
      policyType.bookingTypes?.map((bookingType) => bookingType.id) ?? [],

    // ======================================================
    // STATUS
    // ======================================================

    active: policyType.active ?? true,
    sortOrder: policyType.sortOrder ?? 0,
  };
}
