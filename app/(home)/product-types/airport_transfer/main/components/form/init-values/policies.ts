import { AirportTransfer } from "@/types/product-types/airport-transfer/core/airport-transfer.types";

import { AirportTransferFormSchema } from "../schema/core/schema";

// policies.ts
export function initAirportTransferPoliciesValues(
  airportTransfer: AirportTransfer,
): Pick<AirportTransferFormSchema, "policies"> {
  return {
    policies:
      airportTransfer.policies?.map((policy) => ({
        policyId: policy.policyId ?? "",
        valueBoolean: policy.valueBoolean ?? false,
        valueNumber: policy.valueNumber ?? null,
        valueText: policy.valueText ?? "",
        valueJson: policy.valueJson ?? undefined,
        active: policy.active ?? true,
      })) ?? [],
  };
}
