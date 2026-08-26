"use client";

import FormSection from "@/components/form/FormSection";

import { FormSwitch } from "@/components/form/form-data";

import { AddressFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection title="Status" description="Address visibility settings">
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<AddressFormSchema> name="verified" label="Verified" />
        <FormSwitch<AddressFormSchema> name="active" label="Active" />
      </div>
    </FormSection>
  );
}
