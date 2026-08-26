"use client";

import FormSection from "@/components/form/FormSection";

import {
  FormInput,
  FormTextarea,
} from "@/components/form/form-data";

import { PriceRuleTypeFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Price Rule Type"
      description="Basic price rule type information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<PriceRuleTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Standard Pricing"
        />

        <FormInput<PriceRuleTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="tag"
        />

        <div className="md:col-span-2">
          <FormTextarea<PriceRuleTypeFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the price rule type..."
          />
        </div>
      </div>
    </FormSection>
  );
}