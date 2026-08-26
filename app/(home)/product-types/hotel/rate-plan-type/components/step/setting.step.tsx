"use client";

import FormSection from "@/components/form/FormSection";
import { FormCheckbox, FormInput } from "@/components/form/form-data";

import { RatePlanTypeFormSchema } from "../form/schema";

export default function SettingsStep() {
  return (
    <FormSection
      title="Settings"
      description="Configure rate plan type settings"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormCheckbox<RatePlanTypeFormSchema>
          name="active"
          label="Active"
          description="Enable this rate plan type for use."
        />

        <FormInput<RatePlanTypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}
