"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import { CityFormSchema } from "../form/schema";

export default function SearchStep() {
  return (
    <FormSection
      title="Search Metadata"
      description="Search engine configuration"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<CityFormSchema>
          name="priority"
          label="Priority"
          type="number"
        />

        <FormInput<CityFormSchema>
          name="displayOrder"
          label="Display Order"
          type="number"
        />

        <FormInput<CityFormSchema>
          name="popularityScore"
          label="Popularity Score"
          type="number"
        />

        <FormSwitch<CityFormSchema> name="featured" label="Featured" />

        <FormSwitch<CityFormSchema> name="popular" label="Popular" />

        <FormSwitch<CityFormSchema> name="searchable" label="Searchable" />

        <FormInput<CityFormSchema> name="aliases.0" label="Alias" />

        <FormInput<CityFormSchema> name="keywords.0" label="Keyword" />

        <FormInput<CityFormSchema> name="tags.0" label="Tag" />
      </div>
    </FormSection>
  );
}
