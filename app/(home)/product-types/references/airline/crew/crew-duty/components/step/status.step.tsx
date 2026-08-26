"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";

import { FlyCrewDutyFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection title="Status" description="Fly crew duty configuration">
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<FlyCrewDutyFormSchema> name="active" label="Active" />

        <FormInput<FlyCrewDutyFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}
