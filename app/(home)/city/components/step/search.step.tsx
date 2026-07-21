"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import { CityFormValues } from "../form/schema";

export default function SearchStep() {
  return (
    <FormSection
      title="Search Metadata"
      description="Search engine configuration"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<CityFormValues>
          name="priority"
          label="Priority"
          type="number"
        />

        <FormInput<CityFormValues>
          name="displayOrder"
          label="Display Order"
          type="number"
        />

        <FormInput<CityFormValues>
          name="popularityScore"
          label="Popularity Score"
          type="number"
        />

        <FormSwitch<CityFormValues> name="featured" label="Featured" />

        <FormSwitch<CityFormValues> name="popular" label="Popular" />

        <FormSwitch<CityFormValues> name="searchable" label="Searchable" />

        <FormInput<CityFormValues> name="aliases.0" label="Alias" />

        <FormInput<CityFormValues> name="keywords.0" label="Keyword" />

        <FormInput<CityFormValues> name="tags.0" label="Tag" />
      </div>
    </FormSection>
  );
}
