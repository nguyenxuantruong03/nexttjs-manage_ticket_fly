"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { RegulationFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection title="Regulation" description="Basic regulation information">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<RegulationFormSchema>
          name="code"
          label="Code"
          placeholder="TERMS_OF_SERVICE"
        />

        <FormInput<RegulationFormSchema>
          name="version"
          label="Version"
          type="number"
          placeholder="1"
        />

        <FormInput<RegulationFormSchema>
          name="title"
          label="Title"
          placeholder="Terms of Service"
        />

        <FormInput<RegulationFormSchema>
          name="content"
          label="Content"
          placeholder="Enter regulation content"
        />
      </div>
    </FormSection>
  );
}
