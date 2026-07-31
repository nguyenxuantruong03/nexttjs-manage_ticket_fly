"use client";

import FormSection from "@/components/form/FormSection";
import { FormCombobox, FormInput } from "@/components/form/form-data";

import { PolicyFormSchema } from "../form/schema";
import { HotelPolicyType } from "@/types/bookings/hotel/policy.type";

interface BasicStepProps {
  policyTypeData: HotelPolicyType[];
}

export default function BasicStep({ policyTypeData }: BasicStepProps) {
  return (
    <FormSection title="Policy" description="Basic policy information">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<PolicyFormSchema>
          name="name"
          label="Name"
          placeholder="No Smoking"
        />

        <FormCombobox<PolicyFormSchema>
          name="typeId"
          label="Policy Type"
          placeholder="Select policy type"
          searchPlaceholder="Search policy type..."
          options={
            policyTypeData?.map((type) => ({
              label: type.name,
              value: type.id,
            })) ?? []
          }
        />

        <div className="md:col-span-2">
          <FormInput<PolicyFormSchema>
            name="description"
            label="Description"
            placeholder="Smoking is not permitted in guest rooms."
          />
        </div>
      </div>
    </FormSection>
  );
}
