import { Yacht } from "@/types/product-types/yacht/core/yacht.types";

import { YachtFormSchema } from "../schema/core/yacht.schema";

export function initYachtPolicyValues(
  yacht: Yacht,
): Pick<YachtFormSchema, "policies"> {
  return {
    policies:
      yacht.policies?.map((policy) => ({
        policyId: policy.policyId ?? "",
        valueBoolean: policy.valueBoolean ?? null,
        valueNumber: policy.valueNumber ?? null,
        valueText: policy.valueText ?? null,
        valueJson: policy.valueJson ?? null,
        active: policy.active ?? true,
      })) ?? [],
  };
}
