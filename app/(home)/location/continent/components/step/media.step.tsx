"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { ContinentFormSchema } from "../form/schema";

export default function MediaStep() {
  return (
    <FormSection
      title="Media"
      description="Continent images"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<ContinentFormSchema>
          name="thumbnail"
          label="Thumbnail URL"
        />

        <FormInput<ContinentFormSchema>
          name="coverImage"
          label="Cover Image URL"
        />
      </div>
    </FormSection>
  );
}