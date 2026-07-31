"use client";

import FormSection from "@/components/form/FormSection";
import {
  FormCheckbox,
  FormInput,
} from "@/components/form/form-data";

import { RoomViewFormSchema } from "../form/schema";

export default function SettingsStep() {
  return (
    <FormSection
      title="Settings"
      description="Configure room view settings"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormCheckbox<RoomViewFormSchema>
          name="active"
          label="Active"
          description="Enable this room view for use."
        />

        <FormInput<RoomViewFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}