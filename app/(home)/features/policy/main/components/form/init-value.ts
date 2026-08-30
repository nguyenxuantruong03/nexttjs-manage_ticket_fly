import { PolicyFormSchema } from "./schema";

import { policyDefaultValues } from "./default-values";

import { Policy } from "@/types/common/features/policy/policy";

export function initPolicyFormValues(policy?: Policy): PolicyFormSchema {
  if (!policy) {
    return structuredClone(policyDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    name: policy.name ?? "",
    description: policy.description ?? null,
    icon: policy.icon ?? null,

    // ======================================================
    // POLICY TYPE
    // ======================================================

    typeId: policy.typeId ?? "",

    // ======================================================
    // BOOKING TYPE
    // ======================================================

    bookingTypeIds:
      policy.bookingTypes?.map((bookingType) => bookingType.id) ?? [],

    // ======================================================
    // STATUS
    // ======================================================

    active: policy.active ?? true,
    sortOrder: policy.sortOrder ?? 0,
  };
}
