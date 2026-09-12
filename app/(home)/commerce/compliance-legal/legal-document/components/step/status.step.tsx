"use client";

import FormSection from "@/components/form/FormSection";

import { FormSelect } from "@/components/form/form-data";
import { FormDatePicker } from "@/components/form/form-data/FormDatePicker";

import { LegalDocumentFormSchema } from "../form/schema";

const STATUS_OPTIONS = [
  { value: "DRAFT", label: "Draft" },
  { value: "PENDING_SIGNATURE", label: "Pending Signature" },
  { value: "SIGNED", label: "Signed" },
  { value: "EXPIRED", label: "Expired" },
  { value: "TERMINATED", label: "Terminated" },
];

export default function StatusStep() {
  return (
    <FormSection
      title="Status"
      description="Legal document status configuration"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormSelect<LegalDocumentFormSchema>
          name="status"
          label="Status"
          options={STATUS_OPTIONS}
        />

        <FormDatePicker<LegalDocumentFormSchema>
          name="signedAt"
          label="Signed At"
        />

        <FormDatePicker<LegalDocumentFormSchema>
          name="expiresAt"
          label="Expires At"
        />
      </div>
    </FormSection>
  );
}
