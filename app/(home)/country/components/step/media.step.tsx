"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";
import { CountryFormSchema } from "../form/schema";


export default function MediaStep() {
  return (
    <FormSection title="Images" description="Country media">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<CountryFormSchema> name="flag" label="Flag URL" />

        <FormInput<CountryFormSchema> name="thumbnail" label="Thumbnail URL" />

        <FormInput<CountryFormSchema>
          name="coverImage"
          label="Cover Image URL"
        />
      </div>
    </FormSection>
  );
}
