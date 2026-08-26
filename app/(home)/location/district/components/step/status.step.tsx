"use client";

import FormSection from "@/components/form/FormSection";

import { FormSwitch } from "@/components/form/form-data";

import { DistrictFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection title="Status" description="District visibility settings">
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<DistrictFormSchema> name="verified" label="Verified" />
        <FormSwitch<DistrictFormSchema> name="active" label="Active" />
      </div>
    </FormSection>
  );
}
