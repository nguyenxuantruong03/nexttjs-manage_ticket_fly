"use client";

import FormSection from "@/components/form/FormSection";
import { FormCheckbox, FormInput } from "@/components/form/form-data";

import { BedTypeFormSchema } from "../form/schema";

export default function SettingsStep() {
  return (
    <FormSection title="Settings" description="Configure bed type settings">
      <div className="grid gap-6 md:grid-cols-2">
        <FormCheckbox<BedTypeFormSchema>
          name="active"
          label="Active"
          description="Enable this bed type for use."
        />

        <FormInput<BedTypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}
