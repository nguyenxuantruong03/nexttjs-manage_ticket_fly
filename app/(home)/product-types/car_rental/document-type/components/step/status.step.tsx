"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import { CarRentalDocumentTypeFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection
      title="Status"
      description="Car rental document type configuration"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<CarRentalDocumentTypeFormSchema>
          name="active"
          label="Active"
        />

        <FormInput<CarRentalDocumentTypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}