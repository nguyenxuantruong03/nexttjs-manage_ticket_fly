import { CarRental } from "@/types/product-types/car_rental/core/car-rental.types";

import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

export function initCarRentalPoliciesValues(
  rental: CarRental,
): Pick<CarRentalFormSchema, "policies" | "requiredDocuments"> {
  return {
    policies:
      rental.policies?.map((policy) => ({
        policyId: policy.policyId ?? "",

        valueBoolean: policy.valueBoolean ?? false,

        valueNumber: policy.valueNumber ?? 0,

        valueText: policy.valueText ?? "",

        valueJson: policy.valueJson ?? undefined,

        active: policy.active ?? true,
      })) ?? [],

    requiredDocuments:
      rental.requiredDocuments?.map((doc) => ({
        documentTypeId: doc.documentTypeId ?? "",

        mandatory: doc.mandatory ?? true,

        note: doc.note ?? "",
      })) ?? [],
  };
}
