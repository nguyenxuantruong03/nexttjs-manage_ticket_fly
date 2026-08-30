import { Fly } from "@/types/product-types/ticket-fly/core/fly.types";

import { FlyFormSchema } from "../schema/core/fly.schema";

export function initFlyPolicyValues(
  ticketFly: Fly,
): Pick<FlyFormSchema, "policies"> {
  return {
    policies:
      ticketFly.policies?.map((policy) => ({
        policyId: policy.policyId ?? "",
        valueBoolean: policy.valueBoolean ?? undefined,
        valueNumber: policy.valueNumber ?? undefined,
        valueText: policy.valueText ?? undefined,
        valueJson: policy.valueJson ?? undefined,
        active: policy.active ?? true,
      })) ?? [],
  };
}
