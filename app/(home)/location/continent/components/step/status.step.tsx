"use client";

import FormSection from "@/components/form/FormSection";

import { FormSwitch } from "@/components/form/form-data";

import { ContinentFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection title="Status" description="Continent visibility settings">
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<ContinentFormSchema> name="active" label="Active" />
      </div>
    </FormSection>
  );
}
