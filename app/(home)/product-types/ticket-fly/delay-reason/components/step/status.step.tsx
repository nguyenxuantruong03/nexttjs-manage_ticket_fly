"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";

import { FlyDelayReasonFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection title="Status" description="Fly delay reason configuration">
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<FlyDelayReasonFormSchema> name="active" label="Active" />

        <FormInput<FlyDelayReasonFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}
