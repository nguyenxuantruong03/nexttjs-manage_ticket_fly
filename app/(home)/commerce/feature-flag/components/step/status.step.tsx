"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import { FeatureFlagFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection title="Status" description="Feature flag status configuration">
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<FeatureFlagFormSchema> name="isEnabled" label="Enabled" />
      </div>
    </FormSection>
  );
}
