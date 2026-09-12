"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { FeatureFlagFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Feature Flag"
      description="Basic feature flag information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<FeatureFlagFormSchema>
          name="key"
          label="Key"
          placeholder="Enter feature flag key"
        />

        <FormInput<FeatureFlagFormSchema>
          name="description"
          label="Description"
          placeholder="Enter feature flag description"
        />
      </div>
    </FormSection>
  );
}
