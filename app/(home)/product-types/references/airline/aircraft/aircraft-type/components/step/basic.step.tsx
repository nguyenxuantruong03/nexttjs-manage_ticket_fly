"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { FlyAircraftTypeFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Basic Information"
      description="Basic fly aircraft type information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<FlyAircraftTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Airbus A320"
        />

        <FormInput<FlyAircraftTypeFormSchema>
          name="code"
          label="Code"
          placeholder="A320"
        />

        <FormInput<FlyAircraftTypeFormSchema>
          name="manufacturer"
          label="Manufacturer"
          placeholder="Airbus"
        />

        <FormInput<FlyAircraftTypeFormSchema>
          name="description"
          label="Description"
          placeholder="Airbus A320 aircraft type"
        />
      </div>
    </FormSection>
  );
}