"use client";

import FormSection from "@/components/form/FormSection";

import { FormSwitch } from "@/components/form/form-data";

import { BlacklistEntryFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection
      title="Status"
      description="Blacklist entry status configuration"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<BlacklistEntryFormSchema> name="isActive" label="Active" />
      </div>
    </FormSection>
  );
}
