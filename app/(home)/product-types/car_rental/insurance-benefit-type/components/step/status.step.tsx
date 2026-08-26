"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";

import { CarRentalInsuranceBenefitTypeFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection
      title="Status"
      description="Car rental insurance benefit type configuration"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<CarRentalInsuranceBenefitTypeFormSchema>
          name="active"
          label="Active"
        />

        <FormInput<CarRentalInsuranceBenefitTypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}