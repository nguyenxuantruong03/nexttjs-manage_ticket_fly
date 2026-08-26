"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";
import { VehicleTypeFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection
      title="Status"
      description="Vehicle type configuration"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<VehicleTypeFormSchema>
          name="active"
          label="Active"
        />

        <FormInput<VehicleTypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}