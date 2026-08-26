"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import { ExtraFeeTypeFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection title="Status" description="Extra fee type configuration">
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<ExtraFeeTypeFormSchema> name="active" label="Active" />

        <FormInput<ExtraFeeTypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}
