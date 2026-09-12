"use client";

import { FormInput, FormSelect } from "@/components/form/form-data";
import { FormDatePicker } from "@/components/form/form-data/FormDatePicker";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/form/entity-selector";

import {
  LegalDocumentFormSchema,
  schema as LegalDocumentSchema,
} from "./form/schema";

import { legalDocumentDefaultValues } from "./form/default-values";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";
import { useCreateLegalDocument } from "@/hooks/commerce/compliance-legal/legal-document";
import { LegalDocument } from "@/types/common/commerce/compliance-legal.type";

// ======================================================
// PROPS
// ======================================================

interface LegalDocumentCreateDialogProps extends EntityCreateDialogProps<LegalDocument> {}

const STATUS_OPTIONS = [
  { value: "DRAFT", label: "Draft" },
  { value: "PENDING_SIGNATURE", label: "Pending Signature" },
  { value: "SIGNED", label: "Signed" },
  { value: "EXPIRED", label: "Expired" },
  { value: "TERMINATED", label: "Terminated" },
];

// ======================================================
// COMPONENT
// ======================================================

export default function LegalDocumentCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: LegalDocumentCreateDialogProps) {
  const createLegalDocument = useCreateLegalDocument();

  return (
    <EntityCreateFormDialog<
      LegalDocumentFormSchema,
      Partial<LegalDocument>,
      LegalDocument
    >
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createLegalDocument}
      config={{
        schema: LegalDocumentSchema,
        defaultValues: legalDocumentDefaultValues,
        title: "Create Legal Document",
        description: "Create a new legal document",
        success: "Legal document created",
        submitText: "Create Legal Document",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<LegalDocument> => ({
          value: response.id,
          label: response.title ?? "Legal Document",
          data: response,
        }),
      }}
    >
      {/* ======================================================
          BASIC
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<LegalDocumentFormSchema>
          name="title"
          label="Title"
          placeholder="Contract, Agreement..."
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
            placeholder="https://..."
          />
        </div>
      </div>

      {/* ======================================================
          STATUS
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
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
    </EntityCreateFormDialog>
  );
}
