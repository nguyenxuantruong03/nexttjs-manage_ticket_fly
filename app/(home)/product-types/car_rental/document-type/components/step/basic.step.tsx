"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { CarRentalDocumentTypeFormSchema } from "../form/schema";
import { FormIcon } from "@/components/form/form-data/FormIcon";

export default function BasicStep() {
  return (
    <FormSection
      title="Car Rental Document Type"
      description="Basic car rental document type information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<CarRentalDocumentTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Driver License"
        />

        <FormIcon<CarRentalDocumentTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="https://..."
        />

        <FormInput<CarRentalDocumentTypeFormSchema>
          name="description"
          label="Description"
          placeholder="Describe the document type"
        />
      </div>
    </FormSection>
  );
}