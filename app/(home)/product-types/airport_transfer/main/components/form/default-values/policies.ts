// policies.ts
import { AirportTransferFormSchema } from "../schema/core/schema";

export const airportTransferPoliciesDefaultValues = {
  policies: [
    {
      policyId: "",
      valueBoolean: false,
      valueNumber: null,
      valueText: "",
      valueJson: undefined,
      active: true,
    },
  ],
} satisfies Pick<AirportTransferFormSchema, "policies">;
