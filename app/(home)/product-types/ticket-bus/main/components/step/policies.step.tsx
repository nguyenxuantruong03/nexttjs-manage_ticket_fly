// step/policies.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";

import { BusFormSchema } from "../schema/core/bus.schema";
import { Policy } from "@/types/common/features/policy/policy";
import { EntityOption } from "@/components/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import PolicyCreateDialog from "@/app/(home)/features/policy/components/PolicyCreateDialog";
import { PolicyType } from "@/types/common/features/policy/policy-type";
import { BookingType } from "@/types/common/commerce/booking-type";

interface PoliciesStepProps {
  policyData: Policy[];
  policyTypeData: PolicyType[];
  bookingTypeData: BookingType[];
}

export default function PoliciesStep({
  policyData,
  policyTypeData,
  bookingTypeData,
}: PoliciesStepProps) {
  const policyOptions: EntityOption<Policy>[] = policyData.map((policy) => ({
    value: policy.id,
    label: policy.name,
    description: policy.description ?? undefined,
    data: policy,
  }));

  return (
    <>
      <FormSection
        title="Policies"
        description="Passenger & ticket policies for this bus"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<BusFormSchema, Policy>
            name="policyMappers.0.policyId"
            label="Policy"
            placeholder="Search policy..."
            searchPlaceholder="Search policy..."
            emptyText="No policy found"
            createText="Create policy"
            options={policyOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <PolicyCreateDialog
                policyTypeData={policyTypeData}
                bookingTypeData={bookingTypeData}
                {...props}
              />
            )}
          />

          <FormInput<BusFormSchema>
            name="policyMappers.0.valueText"
            label="Value (Text)"
          />

          <FormInput<BusFormSchema>
            name="policyMappers.0.valueNumber"
            label="Value (Number)"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="policyMappers.0.valueJson"
            label="Value (JSON)"
          />

          <FormSwitch<BusFormSchema>
            name="policyMappers.0.valueBoolean"
            label="Value (Boolean)"
          />

          <FormSwitch<BusFormSchema>
            name="policyMappers.0.active"
            label="Active"
          />
        </div>
      </FormSection>
    </>
  );
}
