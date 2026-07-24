"use client";

import FormSection from "@/components/form/FormSection";

import { FormSwitch } from "@/components/form/form-data";
import { CountryFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection title="Status" description="Visibility settings">
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<CountryFormSchema> name="featured" label="Featured" />

        <FormSwitch<CountryFormSchema> name="searchable" label="Searchable" />

        <FormSwitch<CountryFormSchema> name="active" label="Active" />
      </div>
    </FormSection>
  );
}
