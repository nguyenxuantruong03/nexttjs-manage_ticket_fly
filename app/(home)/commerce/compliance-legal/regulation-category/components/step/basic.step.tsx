"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { RegulationCategoryFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Regulation Category"
      description="Basic regulation category information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<RegulationCategoryFormSchema>
          name="code"
          label="Code"
          placeholder="TAX"
        />

        <FormInput<RegulationCategoryFormSchema>
          name="name"
          label="Name"
          placeholder="Tax Regulation"
        />

        <FormInput<RegulationCategoryFormSchema>
          name="description"
          label="Description"
          placeholder="Tax-related regulations"
        />
      </div>
    </FormSection>
  );
}
