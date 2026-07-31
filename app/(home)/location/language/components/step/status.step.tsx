"use client";

import FormSection from "@/components/form/FormSection";
import { FormCheckbox } from "@/components/form/form-data";

import { LanguageFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection title="Status" description="Language status settings">
      <div className="grid gap-6 md:grid-cols-2">
        <FormCheckbox<LanguageFormSchema> name="active" label="Active" />

        <FormCheckbox<LanguageFormSchema>
          name="default"
          label="Default Language"
        />
      </div>
    </FormSection>
  );
}
