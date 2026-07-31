"use client";

import FormSection from "@/components/form/FormSection";
import { FormCheckbox, FormInput } from "@/components/form/form-data";

import { RoomMediaCategoryFormSchema } from "../form/schema";

export default function SettingsStep() {
  return (
    <FormSection
      title="Settings"
      description="Configure room media category settings"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormCheckbox<RoomMediaCategoryFormSchema>
          name="active"
          label="Active"
          description="Enable this room media category for use."
        />

        <FormInput<RoomMediaCategoryFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}
