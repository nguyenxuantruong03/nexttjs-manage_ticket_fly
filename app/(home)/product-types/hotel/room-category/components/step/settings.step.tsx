"use client";

import FormSection from "@/components/form/FormSection";
import { FormCheckbox, FormInput } from "@/components/form/form-data";

import { RoomCategoryFormSchema } from "../form/schema";

export default function SettingsStep() {
  return (
    <FormSection
      title="Settings"
      description="Configure room category settings"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormCheckbox<RoomCategoryFormSchema>
          name="active"
          label="Active"
          description="Enable this room category for use."
        />

        <FormInput<RoomCategoryFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}
