"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { PackageFormSchema } from "../form/schema";

export default function CapacityStep() {
  return (
    <FormSection
      title="Capacity"
      description="Configure the maximum number of guests for this package"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<PackageFormSchema>
          name="maxGuests"
          label="Max Guests"
          type="number"
          placeholder="10"
        />
      </div>
    </FormSection>
  );
}
