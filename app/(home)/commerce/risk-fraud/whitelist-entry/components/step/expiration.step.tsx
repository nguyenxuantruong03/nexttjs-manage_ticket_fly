"use client";

import FormSection from "@/components/form/FormSection";

import { FormDatePicker } from "@/components/form/form-data/FormDatePicker";

import { WhitelistEntryFormSchema } from "../form/schema";

export default function ExpirationStep() {
  return (
    <FormSection
      title="Expiration"
      description="Configure whitelist entry expiration"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormDatePicker<WhitelistEntryFormSchema>
          name="expiresAt"
          label="Expires At"
        />
      </div>
    </FormSection>
  );
}