"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import { TaxRuleFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection
      title="Status"
      description="Tax rule configuration"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<TaxRuleFormSchema>
          name="isActive"
          label="Active"
        />

        <FormInput<TaxRuleFormSchema>
          name="taxPercent"
          label="Tax Percent"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}