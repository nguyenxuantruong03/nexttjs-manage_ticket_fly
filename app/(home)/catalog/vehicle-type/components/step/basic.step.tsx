"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormTextarea } from "@/components/form/form-data";

import { VehicleTypeFormSchema } from "../form/schema";
import { FormIcon } from "@/components/form/form-data/FormIcon";

export default function BasicStep() {
  return (
    <FormSection
      title="Vehicle Type"
      description="Basic vehicle type information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<VehicleTypeFormSchema>
          name="name"
          label="Name"
          placeholder="SUV"
        />

        <FormIcon<VehicleTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="car"
        />

        <div className="md:col-span-2">
          <FormTextarea<VehicleTypeFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the vehicle type..."
          />
        </div>
      </div>
    </FormSection>
  );
}