"use client";

import FormSection from "@/components/form/FormSection";

import { FormSwitch } from "@/components/form/form-data";

import { WardFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection title="Status" description="Ward visibility settings">
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<WardFormSchema> name="verified" label="Verified" />
        <FormSwitch<WardFormSchema> name="active" label="Active" />
      </div>
    </FormSection>
  );
}
