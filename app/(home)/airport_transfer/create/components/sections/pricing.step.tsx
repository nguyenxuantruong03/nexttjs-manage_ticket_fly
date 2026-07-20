"use client";

import { FieldValues } from "react-hook-form";

import { FormInput, FormSelect } from "@/components/form/form-data";
import FormSection from "@/components/form/FormSection";

export default function PricingSection<T extends FieldValues>() {
  return (
    <FormSection title="Pricing" description="Transfer price">
      <div className="grid md:grid-cols-2 gap-6">
        

        <FormInput name="price.fromPrice" />

        <FormInput name="price.toPrice" />

        <FormInput name="price.originalFromPrice" />

        <FormInput name="price.originalToPrice" />
      </div>
    </FormSection>
  );
}
