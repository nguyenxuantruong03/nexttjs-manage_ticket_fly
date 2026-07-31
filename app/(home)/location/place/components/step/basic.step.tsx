"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { PlaceFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection title="Place" description="Basic place information">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<PlaceFormSchema>
          name="name"
          label="Place Name"
          placeholder="Notre Dame Cathedral"
        />

        <FormInput<PlaceFormSchema>
          name="nativeName"
          label="Native Name"
          placeholder="Nhà thờ Đức Bà"
        />

        <FormInput<PlaceFormSchema>
          name="subtitle"
          label="Subtitle"
          placeholder="Historic landmark in the city center"
        />

        <FormInput<PlaceFormSchema>
          name="shortDescription"
          label="Short Description"
          placeholder="Short place description"
        />

        <FormInput<PlaceFormSchema>
          name="description"
          label="Description"
          placeholder="Full place description"
        />
      </div>
    </FormSection>
  );
}
