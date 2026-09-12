"use client";

import FormSection from "@/components/form/FormSection";

import { PolicyFormSchema } from "../form/schema";

import { EntityOption } from "@/components/form/entity-selector";

import { PolicyType } from "@/types/common/features/policy/policy-type";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import PolicyTypeCreateDialog from "@/app/(home)/features/policy/policy-type/components/PolicyTypeCreateDialog";
import { BookingType } from "@/types/common/commerce/booking-type";

interface PolicyTypeStepProps {
  policyTypeData: PolicyType[];
  bookingTypeData: BookingType[];
}

export default function PolicyTypeStep({
  policyTypeData,
  bookingTypeData,
}: PolicyTypeStepProps) {
  const policyTypeOptions: EntityOption<PolicyType>[] = policyTypeData.map(
    (policyType) => ({
      value: policyType.id,
      label: policyType.name,
      description: policyType.description ?? undefined,
      data: policyType,
    }),
  );

  return (
    <FormSection
      title="Policy Type"
      description="Select the policy type for this policy"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormEntitySelector<PolicyFormSchema, PolicyType>
          name="typeId"
          label="Policy Type"
          placeholder="Search policy type..."
          searchPlaceholder="Search policy type..."
          emptyText="No policy type found"
          createText="Create policy type"
          options={policyTypeOptions}
          enableCreate
          renderCreateDialog={(props) => (
            <PolicyTypeCreateDialog
              bookingTypeData={bookingTypeData}
              {...props}
            />
          )}
        />
      </div>
    </FormSection>
  );
}
