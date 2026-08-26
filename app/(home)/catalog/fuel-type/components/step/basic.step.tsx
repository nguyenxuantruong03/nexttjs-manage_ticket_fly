"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { FuelTypeFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Fuel Type"
      description="Basic fuel type information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<FuelTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Diesel"
        />

        <FormInput<FuelTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="fuel"
        />
      </div>
    </FormSection>
  );
}