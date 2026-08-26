"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormTextarea } from "@/components/form/form-data";

import { ServiceTypeFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Service Type"
      description="Basic service type information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<ServiceTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Airport Transfer"
        />

        <FormInput<ServiceTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="car"
        />

        <div className="md:col-span-2">
          <FormTextarea<ServiceTypeFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the service type..."
          />
        </div>
      </div>
    </FormSection>
  );
}