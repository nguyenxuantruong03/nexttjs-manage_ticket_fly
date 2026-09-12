"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { TaxRuleFormSchema } from "../form/schema";

export default function TaxStep() {
  return (
    <FormSection
      title="Tax"
      description="Configure the tax percentage for this tax rule"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<TaxRuleFormSchema>
          name="taxPercent"
          label="Tax Percent"
          type="number"
          placeholder="10.00"
        />
      </div>
    </FormSection>
  );
}
