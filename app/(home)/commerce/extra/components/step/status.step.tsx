"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import { ExtraFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection title="Status" description="Extra configuration">
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<ExtraFormSchema> name="active" label="Active" />

        <FormInput<ExtraFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}
