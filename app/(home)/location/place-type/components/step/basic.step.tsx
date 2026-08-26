"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { PlaceTypeFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Place Type"
      description="Basic place type information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<PlaceTypeFormSchema>
          name="name"
          label="Place Type Name"
          placeholder="Landmark"
        />

        <FormInput<PlaceTypeFormSchema>
          name="nativeName"
          label="Native Name"
          placeholder="Địa danh"
        />

        <FormInput<PlaceTypeFormSchema>
          name="code"
          label="Code"
          placeholder="LANDMARK"
        />

        <FormInput<PlaceTypeFormSchema>
          name="description"
          label="Description"
          placeholder="A notable place or landmark"
        />
      </div>
    </FormSection>
  );
}