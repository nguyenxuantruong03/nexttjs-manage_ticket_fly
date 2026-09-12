"use client";

import FormSection from "@/components/form/FormSection";

import { FormSwitch } from "@/components/form/form-data";

import { WhitelistEntryFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection
      title="Status"
      description="Whitelist entry status configuration"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<WhitelistEntryFormSchema> name="isActive" label="Active" />
      </div>
    </FormSection>
  );
}
