"use client";

import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";

import { FormDatePicker } from "@/components/form/form-data/FormDatePicker";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/form/entity-selector";

import {
  WhitelistEntryFormSchema,
  schema as WhitelistEntrySchema,
} from "./form/schema";

import { whitelistEntryDefaultValues } from "./form/default-values";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";
import { WhitelistEntry } from "@/types/common/commerce/risk-fraud.type";
import { useCreateWhitelistEntry } from "@/hooks/commerce/risk-fraud/whitelist-entry";

// ======================================================
// OPTIONS
// ======================================================

const IDENTIFIER_TYPE_OPTIONS = [
  { value: "EMAIL", label: "Email" },
  { value: "PHONE", label: "Phone" },
  { value: "DEVICE_ID", label: "Device ID" },
  { value: "CARD_HASH", label: "Card Hash" },
  { value: "IP_ADDRESS", label: "IP Address" },
];

// ======================================================
// PROPS
// ======================================================

interface WhitelistEntryCreateDialogProps extends EntityCreateDialogProps<WhitelistEntry> {}

// ======================================================
// COMPONENT
// ======================================================

export default function WhitelistEntryCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: WhitelistEntryCreateDialogProps) {
  const createWhitelistEntry = useCreateWhitelistEntry();

  return (
    <EntityCreateFormDialog<
      WhitelistEntryFormSchema,
      Partial<WhitelistEntry>,
      WhitelistEntry
    >
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createWhitelistEntry}
      config={{
        schema: WhitelistEntrySchema,
        defaultValues: whitelistEntryDefaultValues,
        title: "Create Whitelist Entry",
        description: "Create a new whitelist entry",
        success: "Whitelist entry created",
        submitText: "Create Whitelist Entry",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<WhitelistEntry> => ({
          value: response.id,
          label: response.value ?? "Whitelist Entry",
          data: response,
        }),
      }}
    >
      {/* ======================================================
          BASIC
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormSelect<WhitelistEntryFormSchema>
          name="type"
          label="Identifier Type"
          options={IDENTIFIER_TYPE_OPTIONS}
        />

        <FormInput<WhitelistEntryFormSchema>
          name="value"
          label="Value"
          placeholder="Enter identifier value"
        />

        <FormInput<WhitelistEntryFormSchema>
          name="note"
          label="Note"
          placeholder="Enter note"
        />
      </div>

      {/* ======================================================
          EXPIRATION
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormDatePicker<WhitelistEntryFormSchema>
          name="expiresAt"
          label="Expires At"
        />
      </div>

      {/* ======================================================
          STATUS
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormSwitch<WhitelistEntryFormSchema> name="isActive" label="Active" />
      </div>
    </EntityCreateFormDialog>
  );
}
