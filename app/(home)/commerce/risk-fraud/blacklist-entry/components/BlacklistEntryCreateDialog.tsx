"use client";

import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/form/entity-selector";

import {
  BlacklistEntryFormSchema,
  schema as BlacklistEntrySchema,
} from "./form/schema";

import { blacklistEntryDefaultValues } from "./form/default-values";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";
import { BlacklistEntry } from "@/types/common/commerce/risk-fraud.type";
import { useCreateBlacklistEntry } from "@/hooks/commerce/risk-fraud/blacklist-entry";

// ======================================================
// PROPS
// ======================================================

interface BlacklistEntryCreateDialogProps extends EntityCreateDialogProps<BlacklistEntry> {}

// ======================================================
// COMPONENT
// ======================================================

const IDENTIFIER_TYPE_OPTIONS = [
  { value: "EMAIL", label: "Email" },
  { value: "PHONE", label: "Phone" },
  { value: "DEVICE_ID", label: "Device ID" },
  { value: "CARD_HASH", label: "Card Hash" },
  { value: "IP_ADDRESS", label: "IP Address" },
];

export default function BlacklistEntryCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: BlacklistEntryCreateDialogProps) {
  const createBlacklistEntry = useCreateBlacklistEntry();

  return (
    <EntityCreateFormDialog<
      BlacklistEntryFormSchema,
      Partial<BlacklistEntry>,
      BlacklistEntry
    >
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createBlacklistEntry}
      config={{
        schema: BlacklistEntrySchema,
        defaultValues: blacklistEntryDefaultValues,
        title: "Create Blacklist Entry",
        description: "Create a new blacklist entry",
        success: "Blacklist entry created",
        submitText: "Create Blacklist Entry",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<BlacklistEntry> => ({
          value: response.id,
          label: response.value ?? "Blacklist Entry",
          data: response,
        }),
      }}
    >
      {/* ======================================================
          BASIC
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
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

      {/* ======================================================
          STATUS
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormSwitch<BlacklistEntryFormSchema> name="isActive" label="Active" />
      </div>

      {/* ======================================================
          EXPIRATION
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<BlacklistEntryFormSchema>
          name="createdBy"
          label="Created By"
          placeholder="Enter creator ID"
        />

        <FormInput<BlacklistEntryFormSchema>
          name="expiresAt"
          label="Expires At"
          type="datetime-local"
        />
      </div>
    </EntityCreateFormDialog>
  );
}
