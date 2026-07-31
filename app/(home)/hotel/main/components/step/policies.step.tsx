"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";
import { HotelSchemaForm } from "../schema/core/hotel.schema";
import {
  HotelPolicy,
  HotelPolicyType,
} from "@/types/bookings/hotel/policy.type";
import { EntityOption } from "@/components/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import PolicyCreateDialog from "../../../policy/components/PolicyCreateDialog";

interface PolicyStepProps {
  policyData: HotelPolicy[];
  policyTypeData: HotelPolicyType[];
}

export default function PoliciesStep({
  policyData,
  policyTypeData,
}: PolicyStepProps) {
  const policyOptions: EntityOption<HotelPolicy>[] = policyData.map(
    (policy) => ({
      value: policy.id,
      label: policy.name,
      description: policy.description ?? undefined,
      data: policy,
    }),
  );
  return (
    <>
      {/* ======================================================
          CHECK IN / CHECK OUT POLICY
      ====================================================== */}

      <FormSection
        title="Check-in Policy"
        description="Guest arrival and departure rules"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelSchemaForm>
            name="checkinPolicy.checkInFrom"
            label="Check-in From"
            placeholder="14:00"
          />

          <FormInput<HotelSchemaForm>
            name="checkinPolicy.checkInUntil"
            label="Check-in Until"
            placeholder="22:00"
          />

          <FormInput<HotelSchemaForm>
            name="checkinPolicy.checkOutUntil"
            label="Check-out Until"
            placeholder="12:00"
          />

          <FormInput<HotelSchemaForm>
            name="checkinPolicy.minimumAge"
            label="Minimum Guest Age"
            type="number"
            placeholder="18"
          />
        </div>
      </FormSection>

      {/* ======================================================
          HOTEL POLICIES
      ====================================================== */}

      <FormSection
        title="Hotel Policies"
        description="General hotel policy configuration"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<HotelSchemaForm, HotelPolicy>
            name="policies.0.policyId"
            label="Policy"
            placeholder="Search policy..."
            searchPlaceholder="Search policy..."
            emptyText="No policy found"
            createText="Create policy"
            options={policyOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <PolicyCreateDialog {...props} policyTypes={policyTypeData} />
            )}
          />
        </div>
      </FormSection>
    </>
  );
}
