"use client";

import FormSection from "@/components/form/FormSection";
import {
  FormCheckbox,
  FormInput,
} from "@/components/form/form-data";

import { PolicyTypeFormSchema } from "../form/schema";

export default function SettingsStep() {
  return (
    <FormSection
      title="Settings"
      description="Configure policy type settings"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormCheckbox<PolicyTypeFormSchema>
          name="active"
          label="Active"
          description="Enable this policy type for use."
        />

        <FormInput<PolicyTypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}