"use client";

import FormSection from "@/components/form/FormSection";

import { FormSwitch } from "@/components/form/form-data";
import { CountryFormValues } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection title="Status" description="Visibility settings">
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<CountryFormValues> name="featured" label="Featured" />

        <FormSwitch<CountryFormValues> name="searchable" label="Searchable" />

        <FormSwitch<CountryFormValues> name="active" label="Active" />
      </div>
    </FormSection>
  );
}
