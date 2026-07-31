"use client";

import FormSection from "@/components/form/FormSection";
import { FormCheckbox, FormInput } from "@/components/form/form-data";

import { MediaCategoryFormSchema } from "../form/schema";

export default function SettingsStep() {
  return (
    <FormSection
      title="Settings"
      description="Configure media category settings"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<MediaCategoryFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />

        <FormCheckbox<MediaCategoryFormSchema>
          name="active"
          label="Active"
          description="Enable this media category for use."
        />
      </div>
    </FormSection>
  );
}
