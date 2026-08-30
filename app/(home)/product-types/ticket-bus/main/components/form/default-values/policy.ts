import { BusFormSchema } from "../schema/core/bus.schema";

export const busPolicyDefaultValues = {
  policyMappers: [
    {
      policyId: "",
      valueBoolean: false,
      valueNumber: 0,
      valueText: "",
      valueJson: undefined,
      active: true,
    },
  ],
} satisfies Pick<BusFormSchema, "policyMappers">;
