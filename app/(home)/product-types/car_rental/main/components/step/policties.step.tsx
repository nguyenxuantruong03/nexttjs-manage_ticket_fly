// step/policies.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";

import { CarRentalFormSchema } from "../form/schema/core/car-rental.schema";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import PolicyCreateDialog from "@/app/(home)/features/policy/main/components/PolicyCreateDialog";
import { Policy } from "@/types/common/features/policy/policy";
import { EntityOption } from "@/components/form/entity-selector";
import { PolicyType } from "@/types/common/features/policy/policy-type";
import { BookingType } from "@/types/common/commerce/booking-type";
interface PoliciesStep {
  policyData: Policy[];
  policyTypeData: PolicyType[];
  bookingTypeData: BookingType[];
}
export default function PoliciesStep({
  policyData,
  policyTypeData,
  bookingTypeData,
}: PoliciesStep) {
  const policyOptions: EntityOption<Policy>[] = policyData.map((policy) => ({
    value: policy.id,
    label: policy.name,
    description: policy.description ?? undefined,
    data: policy,
  }));
  return (
    <>
      <FormSection title="Policies" description="Rental rules and restrictions">
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<CarRentalFormSchema, Policy>
            name="policies.0.policyId"
            label="Policy"
            placeholder="Search policy..."
            searchPlaceholder="Search policy..."
            emptyText="No policy found"
            createText="Create policy"
            options={policyOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <PolicyCreateDialog
                bookingTypeData={bookingTypeData}
                policyTypeData={policyTypeData}
                {...props}
              />
            )}
          />

          <FormSwitch<CarRentalFormSchema>
            name="policies.0.valueBoolean"
            label="Value (Boolean)"
          />

          <FormInput<CarRentalFormSchema>
            name="policies.0.valueNumber"
            label="Value (Number)"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="policies.0.valueText"
            label="Value (Text)"
          />

          <FormInput<CarRentalFormSchema>
            name="policies.0.valueJson"
            label="Value (JSON)"
          />

          <FormSwitch<CarRentalFormSchema>
            name="policies.0.active"
            label="Active"
          />
        </div>
      </FormSection>
    </>
  );
}
