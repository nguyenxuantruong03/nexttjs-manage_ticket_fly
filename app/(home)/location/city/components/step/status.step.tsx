"use client";

import FormSection from "@/components/form/FormSection";

import { FormSwitch, FormSelect } from "@/components/form/form-data";

import { CityFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection title="Status" description="City visibility settings">
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<CityFormSchema> name="verified" label="Verified" />
        <FormSwitch<CityFormSchema> name="active" label="Active" />
      </div>
    </FormSection>
  );
}
