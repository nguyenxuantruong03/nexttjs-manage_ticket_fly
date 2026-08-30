import { Bus } from "@/types/product-types/bus/core/bus.types";
import { BusFormSchema } from "../schema/core/bus.schema";

export function initBusPolicyValues(
  ticketBus: Bus,
): Pick<BusFormSchema, "policyMappers"> {
  return {
    policyMappers:
      ticketBus.policyMappers?.map((policy) => ({
        policyId: policy.policyId ?? "",
        valueBoolean: policy.valueBoolean ?? false,
        valueNumber: policy.valueNumber ?? 0,
        valueText: policy.valueText ?? "",
        valueJson: policy.valueJson ?? undefined,
        active: policy.active ?? true,
      })) ?? [],
  };
}
