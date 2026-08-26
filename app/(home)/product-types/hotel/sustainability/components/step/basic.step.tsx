"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { SustainabilityFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Sustainability"
      description="Basic sustainability information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<SustainabilityFormSchema>
          name="name"
          label="Name"
          placeholder="Energy Efficient Lighting"
        />

        <FormInput<SustainabilityFormSchema>
          name="description"
          label="Description"
          placeholder="Uses LED lighting throughout the property to reduce energy consumption"
        />
      </div>
    </FormSection>
  );
}
