// step/hotel-policy-mapper.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch, FormTextarea } from "@/components/form/form-data";
import { HotelSchemaForm } from "../schema/core/hotel.schema";
import { EntityOption } from "@/components/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import { Policy } from "@/types/common/features/policy/policy";
import PolicyCreateDialog from "@/app/(home)/features/policy/components/PolicyCreateDialog";
import { BookingType } from "@/types/common/commerce/booking-type";
import { PolicyType } from "@/types/common/features/policy/policy-type";

interface HotelPolicyMapperStepProps {
  policyData: Policy[];
  policyTypeData: PolicyType[]
  bookingTypeData: BookingType[]
}

export default function HotelPolicyMapperStep({
  policyData,
  policyTypeData,
  bookingTypeData
}: HotelPolicyMapperStepProps) {
  const policyOptions: EntityOption<Policy>[] = policyData.map((policy) => ({
    value: policy.id,
    label: policy.name,
    data: policy,
  }));

  return (
    <>
      {/* ======================================================
          HOTEL POLICIES
      ====================================================== */}

      <FormSection
        title="Hotel Policies"
        description="Generic hotel-level policy assignments"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<HotelSchemaForm, Policy>
            name="policies.0.policyId"
            label="Policy"
            placeholder="Search policy..."
            searchPlaceholder="Search policy..."
            emptyText="No policy found"
            createText="Create policy"
            options={policyOptions}
            enableCreate
            renderCreateDialog={(props) => <PolicyCreateDialog
              policyTypeData={policyTypeData} bookingTypeData={bookingTypeData}
              {...props} />}
          />

          <FormSwitch<HotelSchemaForm> name="policies.0.active" label="Active" />
        </div>

        <div className="grid gap-6 md:grid-cols-3 mt-6">
          <FormSwitch<HotelSchemaForm>
            name="policies.0.valueBoolean"
            label="Value (Boolean)"
          />

          <FormInput<HotelSchemaForm>
            name="policies.0.valueNumber"
            label="Value (Number)"
            type="number"
          />

          <FormInput<HotelSchemaForm>
            name="policies.0.valueText"
            label="Value (Text)"
          />
        </div>

        <div className="grid gap-6 mt-6">
          <FormTextarea<HotelSchemaForm>
            name="policies.0.valueJson"
            label="Value (JSON)"
            placeholder="{ }"
          />
        </div>
      </FormSection>
    </>
  );
}