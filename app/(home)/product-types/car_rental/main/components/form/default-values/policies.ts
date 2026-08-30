import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

export const carRentalPoliciesDefaultValues = {
  policies: [
    {
      policyId: "",

      valueBoolean: false,

      valueNumber: 0,

      valueText: "",

      valueJson: undefined,

      active: true,
    },
  ],

  requiredDocuments: [
    {
      documentTypeId: "",

      mandatory: true,

      note: "",
    },
  ],
} satisfies Pick<CarRentalFormSchema, "policies" | "requiredDocuments">;
