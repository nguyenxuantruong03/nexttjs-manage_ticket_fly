"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { FuelTypeFormSchema } from "../form/schema";
import { FormIcon } from "@/components/form/form-data/FormIcon";

export default function BasicStep() {
  return (
    <FormSection title="Fuel Type" description="Basic fuel type information">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<FuelTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Diesel"
        />

        <FormIcon<FuelTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="Select fuel icon"
        />
      </div>
    </FormSection>
  );
}
