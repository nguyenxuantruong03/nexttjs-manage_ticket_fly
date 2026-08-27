import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import { EntityOption } from "@/components/entity-selector";

import { YachtFormSchema } from "../schema/core/yacht.schema";
import { Policy } from "@/types/common/features/policy/policy";
import PolicyCreateDialog from "@/app/(home)/features/policy/main/components/PolicyCreateDialog";
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
        description="Booking and passenger policies"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<YachtFormSchema, Policy>
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
                policyTypeData={policyTypeData}
                bookingTypeData={bookingTypeData}
                {...props}
              />
            )}
          />

          <FormSwitch<YachtFormSchema>
            name="policies.0.valueBoolean"
            label="Boolean Value"
          />

          <FormInput<YachtFormSchema>
            name="policies.0.valueNumber"
            label="Number Value"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="policies.0.valueText"
            label="Text Value"
          />

          <FormInput<YachtFormSchema>
            name="policies.0.valueJson"
            label="JSON Value"
          />

          <FormSwitch<YachtFormSchema>
            name="policies.0.active"
            label="Active"
          />
        </div>
      </FormSection>
    </>
  );
}
