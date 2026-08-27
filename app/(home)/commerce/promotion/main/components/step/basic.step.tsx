"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormTextarea } from "@/components/form/form-data";

import { PromotionFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Promotion"
      description="Basic promotion information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<PromotionFormSchema>
          name="code"
          label="Code"
          placeholder="SUMMER2026"
        />

        <FormInput<PromotionFormSchema>
          name="name"
          label="Name"
          placeholder="Summer Promotion"
        />

        <div className="md:col-span-2">
          <FormTextarea<PromotionFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the promotion..."
          />
        </div>
      </div>
    </FormSection>
  );
}