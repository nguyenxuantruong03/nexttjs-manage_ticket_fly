"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";

import { BusSeatTypeFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection
      title="Status"
      description="Bus seat type configuration"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<BusSeatTypeFormSchema>
          name="active"
          label="Active"
        />

        <FormInput<BusSeatTypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}