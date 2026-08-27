"use client";

import FormSection from "@/components/form/FormSection";

import { FormCheckbox } from "@/components/form/form-data";
import { FlyCrewFormSchema } from "../schema/crew.schema";

export default function StatusStep() {
  return (
    <FormSection
      title="Status"
      description="Manage the active status of this crew member"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormCheckbox<FlyCrewFormSchema> name="active" label="Active" />
      </div>
    </FormSection>
  );
}
