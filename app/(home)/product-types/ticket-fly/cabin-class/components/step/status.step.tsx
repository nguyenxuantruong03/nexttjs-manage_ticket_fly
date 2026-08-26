"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";

import { FlyCabinClassFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection title="Status" description="Fly cabin class configuration">
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<FlyCabinClassFormSchema> name="active" label="Active" />

        <FormInput<FlyCabinClassFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}
