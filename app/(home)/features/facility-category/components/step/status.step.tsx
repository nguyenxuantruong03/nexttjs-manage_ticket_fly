"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";
import { FacilityCategoryFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection title="Status" description="Facility category configuration">
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<FacilityCategoryFormSchema> name="active" label="Active" />

        <FormInput<FacilityCategoryFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}
