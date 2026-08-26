"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";

import { FlySeatTypeFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection title="Status" description="Fly seat type configuration">
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<FlySeatTypeFormSchema> name="active" label="Active" />

        <FormInput<FlySeatTypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}
