"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import { PolicyFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection title="Status" description="Policy configuration">
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<PolicyFormSchema> name="active" label="Active" />

        <FormInput<PolicyFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}
