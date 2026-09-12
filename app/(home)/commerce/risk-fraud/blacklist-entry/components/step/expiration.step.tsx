"use client";

import FormSection from "@/components/form/FormSection";

import { FormDatePicker } from "@/components/form/form-data/FormDatePicker";

import { BlacklistEntryFormSchema } from "../form/schema";

export default function ExpirationStep() {
  return (
    <FormSection
      title="Expiration"
      description="Configure blacklist entry expiration"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormDatePicker<BlacklistEntryFormSchema>
          name="expiresAt"
          label="Expires At"
        />
      </div>
    </FormSection>
  );
}
