"use client";

import FormSection from "@/components/form/FormSection";

import {
  FormInput,
  FormSwitch,
  FormTextarea,
} from "@/components/form/form-data";
import { AirportTransferFormSchema } from "../schema/core/schema";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import { Policy } from "@/types/common/features/policy/policy";
import { EntityOption } from "@/components/entity-selector";
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
      {/* Policies */}
      <FormSection title="Policies" description="Policy configuration">
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<AirportTransferFormSchema, Policy>
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

          <FormInput<AirportTransferFormSchema>
            name="policies.0.valueNumber"
            label="Value (Number)"
            type="number"
            placeholder="Enter numeric value"
          />

          <FormInput<AirportTransferFormSchema>
            name="policies.0.valueText"
            label="Value (Text)"
            placeholder="Enter text value"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="policies.0.valueBoolean"
            label="Value (Boolean)"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="policies.0.active"
            label="Active"
          />
        </div>

        <div className="mt-6">
          <FormTextarea<AirportTransferFormSchema>
            name="policies.0.valueJson"
            label="Value (JSON)"
            placeholder="Enter JSON value"
          />
        </div>
      </FormSection>
    </>
  );
}
