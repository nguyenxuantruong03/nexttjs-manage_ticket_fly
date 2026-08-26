"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { BusSeatTypeFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Bus Seat Type"
      description="Basic bus seat type information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<BusSeatTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Standard Seat"
        />

        <FormInput<BusSeatTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="https://..."
        />

        <FormInput<BusSeatTypeFormSchema>
          name="description"
          label="Description"
          placeholder="Describe the bus seat type"
        />
      </div>
    </FormSection>
  );
}