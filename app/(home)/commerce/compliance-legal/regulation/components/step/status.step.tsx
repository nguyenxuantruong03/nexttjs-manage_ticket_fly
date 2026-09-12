"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import { RegulationFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection title="Status" description="Regulation configuration">
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<RegulationFormSchema> name="isActive" label="Active" />

        <FormInput<RegulationFormSchema>
          name="version"
          label="Version"
          type="number"
          placeholder="1"
        />
      </div>
    </FormSection>
  );
}
