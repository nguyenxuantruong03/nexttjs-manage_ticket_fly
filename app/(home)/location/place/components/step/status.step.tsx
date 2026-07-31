"use client";

import FormSection from "@/components/form/FormSection";

import { FormSwitch } from "@/components/form/form-data";

import { PlaceFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection title="Status" description="Place visibility settings">
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<PlaceFormSchema> name="verified" label="Verified" />

        <FormSwitch<PlaceFormSchema> name="active" label="Active" />
      </div>
    </FormSection>
  );
}
