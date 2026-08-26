"use client";

import FormSection from "@/components/form/FormSection";
import { FormCheckbox, FormInput } from "@/components/form/form-data";

import { DiningServiceTypeFormSchema } from "../form/schema";

export default function SettingsStep() {
  return (
    <FormSection
      title="Settings"
      description="Configure dining service type settings"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormCheckbox<DiningServiceTypeFormSchema>
          name="active"
          label="Active"
          description="Enable this dining service type for use."
        />

        <FormInput<DiningServiceTypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}
