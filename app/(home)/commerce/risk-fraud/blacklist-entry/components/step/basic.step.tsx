"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSelect } from "@/components/form/form-data";

import { BlacklistEntryFormSchema } from "../form/schema";

const IDENTIFIER_TYPE_OPTIONS = [
  { value: "EMAIL", label: "Email" },
  { value: "PHONE", label: "Phone" },
  { value: "DEVICE_ID", label: "Device ID" },
  { value: "CARD_HASH", label: "Card Hash" },
  { value: "IP_ADDRESS", label: "IP Address" },
];

export default function BasicStep() {
  return (
    <FormSection
      title="Blacklist Entry"
      description="Basic blacklist entry information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormSelect<BlacklistEntryFormSchema>
          name="type"
          label="Identifier Type"
          options={IDENTIFIER_TYPE_OPTIONS}
        />

        <FormInput<BlacklistEntryFormSchema>
          name="value"
          label="Value"
          placeholder="Enter identifier value"
        />

        <FormInput<BlacklistEntryFormSchema>
          name="reasonCodeId"
          label="Reason Code ID"
          placeholder="Enter reason code ID"
        />
      </div>
    </FormSection>
  );
}
