"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { CarRentalInsuranceTypeFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Car Rental Insurance Type"
      description="Basic car rental insurance type information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<CarRentalInsuranceTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Full Coverage"
        />

        <FormInput<CarRentalInsuranceTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="https://..."
        />

        <FormInput<CarRentalInsuranceTypeFormSchema>
          name="description"
          label="Description"
          placeholder="Describe the insurance type"
        />
      </div>
    </FormSection>
  );
}