"use client";

import FormSection from "@/components/form/FormSection";

import { FormSwitch } from "@/components/form/form-data";

import { PlaceTypeFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection
      title="Status"
      description="Place type visibility settings"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<PlaceTypeFormSchema>
          name="active"
          label="Active"
        />
      </div>
    </FormSection>
  );
}