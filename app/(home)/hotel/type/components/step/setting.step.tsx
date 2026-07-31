"use client";

import FormSection from "@/components/form/FormSection";
import { FormCheckbox, FormInput } from "@/components/form/form-data";

import { TypeFormSchema } from "../form/schema";

export default function SettingsStep() {
  return (
    <FormSection title="Settings" description="Configure hotel type settings">
      <div className="grid gap-6 md:grid-cols-2">
        <FormCheckbox<TypeFormSchema>
          name="active"
          label="Active"
          description="Enable this hotel type for use."
        />

        <FormInput<TypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}
