"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import { PriceRuleTypeFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection
      title="Status"
      description="Price rule type configuration"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<PriceRuleTypeFormSchema>
          name="active"
          label="Active"
        />

        <FormInput<PriceRuleTypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}