"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { TaxRuleFormSchema } from "../form/schema";

export default function CountryStep() {
  return (
    <FormSection
      title="Country"
      description="Configure the countries where this tax rule applies"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<TaxRuleFormSchema>
          name="countryId"
          label="Country IDs"
          placeholder="VN, ID, TH..."
        />
      </div>
    </FormSection>
  );
}