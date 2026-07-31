"use client";

import FormSection from "@/components/form/FormSection";
import {
  FormCheckbox,
  FormInput,
} from "@/components/form/form-data";

import { FacilityFormSchema } from "../form/schema";

export default function SettingsStep() {
  return (
    <FormSection
      title="Settings"
      description="Configure facility settings"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormCheckbox<FacilityFormSchema>
          name="active"
          label="Active"
          description="Enable this facility for use."
        />

        <FormInput<FacilityFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}