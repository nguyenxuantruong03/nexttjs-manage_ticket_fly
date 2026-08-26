"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { CarRentalInsuranceBenefitTypeFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Car Rental Insurance Benefit Type"
      description="Basic car rental insurance benefit type information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<CarRentalInsuranceBenefitTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Collision Damage Waiver"
        />

        <FormInput<CarRentalInsuranceBenefitTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="https://..."
        />

        <FormInput<CarRentalInsuranceBenefitTypeFormSchema>
          name="description"
          label="Description"
          placeholder="Describe the insurance benefit type"
        />
      </div>
    </FormSection>
  );
}