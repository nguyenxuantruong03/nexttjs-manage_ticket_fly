"use client";

import FormSection from "@/components/form/FormSection";

import { FormSwitch } from "@/components/form/form-data";

import { RegulationCategoryFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection title="Status" description="Regulation category configuration">
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<RegulationCategoryFormSchema>
          name="isActive"
          label="Active"
        />
      </div>
    </FormSection>
  );
}
