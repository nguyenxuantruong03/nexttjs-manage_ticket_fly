"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { LegalDocumentFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Legal Document"
      description="Basic legal document information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<LegalDocumentFormSchema>
          name="title"
          label="Title"
          placeholder="Enter legal document title"
        />

        <FormInput<LegalDocumentFormSchema>
          name="merchantId"
          label="Merchant ID"
          placeholder="Enter merchant ID"
        />

        <div className="md:col-span-2">
          <FormInput<LegalDocumentFormSchema>
            name="fileUrl"
            label="File URL"
            placeholder="Enter contract file URL"
          />
        </div>
      </div>
    </FormSection>
  );
}
