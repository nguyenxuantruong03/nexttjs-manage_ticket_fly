"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { ContinentFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Continent"
      description="Basic continent information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<ContinentFormSchema>
          name="name"
          label="Continent Name"
          placeholder="Asia"
        />

        <FormInput<ContinentFormSchema>
          name="nativeName"
          label="Native Name"
          placeholder="Châu Á"
        />

        <FormInput<ContinentFormSchema>
          name="code"
          label="Continent Code"
          placeholder="AS"
        />

        <FormInput<ContinentFormSchema>
          name="description"
          label="Description"
          placeholder="Description of the continent"
        />
      </div>
    </FormSection>
  );
}