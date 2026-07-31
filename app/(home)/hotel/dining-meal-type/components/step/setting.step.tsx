"use client";

import FormSection from "@/components/form/FormSection";
import { FormCheckbox, FormInput } from "@/components/form/form-data";

import { DiningMealTypeFormSchema } from "../form/schema";

export default function SettingsStep() {
  return (
    <FormSection
      title="Settings"
      description="Configure dining meal type settings"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormCheckbox<DiningMealTypeFormSchema>
          name="active"
          label="Active"
          description="Enable this dining meal type for use."
        />

        <FormInput<DiningMealTypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}
