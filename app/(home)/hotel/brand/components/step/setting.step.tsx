"use client";

import FormSection from "@/components/form/FormSection";
import { FormCheckbox } from "@/components/form/form-data";

import { BrandFormSchema } from "../form/schema";

export default function SettingsStep() {
  return (
    <FormSection title="Settings" description="Configure hotel brand settings">
      <div className="grid gap-6 md:grid-cols-2">
        <FormCheckbox<BrandFormSchema>
          name="active"
          label="Active"
          description="Enable this hotel brand for use."
        />
      </div>
    </FormSection>
  );
}
