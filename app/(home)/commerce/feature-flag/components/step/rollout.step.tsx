"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { FeatureFlagFormSchema } from "../form/schema";

export default function RolloutStep() {
  return (
    <FormSection title="Rollout" description="Configure feature flag rollout">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<FeatureFlagFormSchema>
          name="rolloutPercent"
          label="Rollout Percent"
          type="number"
          placeholder="0"
        />

        <FormInput<FeatureFlagFormSchema>
          name="targetRegions"
          label="Target Regions"
          placeholder="VN, US, AU"
        />
      </div>
    </FormSection>
  );
}
