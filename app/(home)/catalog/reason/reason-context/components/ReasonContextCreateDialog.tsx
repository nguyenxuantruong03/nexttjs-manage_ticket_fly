"use client";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
  EntityOption,
} from "@/components/form/entity-selector";

import {
  ReasonContextFormSchema,
  schema as ReasonContextSchema,
} from "./form/schema";

import { reasonContextDefaultValues } from "./form/default-values";

import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";
import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";
import { ReasonContext } from "@/types/common/catalog/reason-code.type";
import { useCreateReasonContext } from "@/hooks/catalog/reason/reason-context";

// ======================================================
// PROPS
// ======================================================

interface ReasonContextCreateDialogProps extends EntityCreateDialogProps<ReasonContext> {}

// ======================================================
// COMPONENT
// ======================================================

export default function ReasonContextCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: ReasonContextCreateDialogProps) {
  const createReasonContext = useCreateReasonContext();

  return (
    <EntityCreateFormDialog<
      ReasonContextFormSchema,
      Partial<ReasonContext>,
      ReasonContext
    >
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createReasonContext}
      config={{
        schema: ReasonContextSchema,
        defaultValues: reasonContextDefaultValues,

        title: "Create Reason Context",
        description: "Create a new reason context",

        success: "Reason context created",

        submitText: "Create Reason Context",
        submittingText: "Creating...",

        getResult: (response): EntityCreateResult<ReasonContext> => ({
          value: response.id,
          label: response.name ?? "Reason Context",
          data: response,
        }),
      }}
    >
      {/* ======================================================
          BASIC
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<ReasonContextFormSchema>
          name="code"
          label="Reason Context Code"
          placeholder="Enter reason context code"
        />

        <FormInput<ReasonContextFormSchema>
          name="name"
          label="Reason Context Name"
          placeholder="Enter reason context name"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<ReasonContextFormSchema>
          name="description"
          label="Description"
          placeholder="Enter description"
        />
      </div>

      {/* ======================================================
          STATUS
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormSwitch<ReasonContextFormSchema> name="isActive" label="Active" />
      </div>
    </EntityCreateFormDialog>
  );
}
