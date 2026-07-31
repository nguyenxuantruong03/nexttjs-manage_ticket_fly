"use client";

import FormSection from "@/components/form/FormSection";
import { FormCheckbox, FormInput } from "@/components/form/form-data";

import { FacilityCategoryFormSchema } from "../form/schema";

export default function SettingsStep() {
  return (
    <FormSection
      title="Settings"
      description="Configure facility category settings"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormCheckbox<FacilityCategoryFormSchema>
          name="active"
          label="Active"
          description="Enable this facility category."
        />

        <FormInput<FacilityCategoryFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}
