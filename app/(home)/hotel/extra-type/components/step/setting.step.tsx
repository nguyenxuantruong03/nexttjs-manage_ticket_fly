"use client";

import FormSection from "@/components/form/FormSection";
import { FormCheckbox, FormInput } from "@/components/form/form-data";

import { ExtraTypeFormSchema } from "../form/schema";

export default function SettingsStep() {
  return (
    <FormSection title="Settings" description="Configure extra type settings">
      <div className="grid gap-6 md:grid-cols-2">
        <FormCheckbox<ExtraTypeFormSchema>
          name="active"
          label="Active"
          description="Enable this extra type for use."
        />

        <FormInput<ExtraTypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}
