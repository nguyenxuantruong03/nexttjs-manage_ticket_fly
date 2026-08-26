"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { FlyAircraftFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Basic Information"
      description="Basic fly aircraft information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<FlyAircraftFormSchema>
          name="manufacturer"
          label="Manufacturer"
          placeholder="Airbus"
        />

        <FormInput<FlyAircraftFormSchema>
          name="model"
          label="Model"
          placeholder="A320-200"
        />

        <FormInput<FlyAircraftFormSchema>
          name="code"
          label="Code"
          placeholder="A320"
        />

        <FormInput<FlyAircraftFormSchema>
          name="registrationNumber"
          label="Registration Number"
          placeholder="VN-A123"
        />
      </div>
    </FormSection>
  );
}
