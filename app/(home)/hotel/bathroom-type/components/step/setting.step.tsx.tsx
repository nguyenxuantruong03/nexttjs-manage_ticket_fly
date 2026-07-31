"use client";

import FormSection from "@/components/form/FormSection";
import { FormCheckbox, FormInput } from "@/components/form/form-data";

import { BathroomTypeFormSchema } from "../form/schema";

export default function SettingsStep() {
  return (
    <FormSection
      title="Settings"
      description="Configure bathroom type settings"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormCheckbox<BathroomTypeFormSchema>
          name="active"
          label="Active"
          description="Enable this bathroom type for use."
        />

        <FormInput<BathroomTypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}
