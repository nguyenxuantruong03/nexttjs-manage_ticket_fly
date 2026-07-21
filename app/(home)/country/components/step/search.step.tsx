"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";
import { CountryFormValues } from "../form/schema";


export default function SearchStep() {
  return (
    <FormSection
      title="Search Metadata"
      description="Search engine configuration"
    >
      <div className="grid gap-6">
        <FormInput<CountryFormValues> name="aliases.0" label="Alias" />

        <FormInput<CountryFormValues> name="keywords.0" label="Keyword" />

        <FormInput<CountryFormValues>
          name="priority"
          label="Priority"
          type="number"
        />
      </div>
    </FormSection>
  );
}
