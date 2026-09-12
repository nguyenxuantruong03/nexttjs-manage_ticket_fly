"use client";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
  EntityOption,
} from "@/components/form/entity-selector";

import {
  ReasonCodeFormSchema,
  schema as ReasonCodeSchema,
} from "./form/schema";

import { reasonCodeDefaultValues } from "./form/default-values";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";
import {
  ReasonCode,
  ReasonContext,
} from "@/types/common/catalog/reason-code.type";
import { useCreateReasonCode } from "@/hooks/catalog/reason/reason-code";

// ======================================================
// PROPS
// ======================================================

interface ReasonCodeCreateDialogProps extends EntityCreateDialogProps<ReasonCode> {
  contextData: ReasonContext[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function ReasonCodeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  contextData,
}: ReasonCodeCreateDialogProps) {
  const createReasonCode = useCreateReasonCode();

  const contextOptions: EntityOption<ReasonContext>[] = contextData.map(
    (context) => ({
      value: context.id,
      label: context.name,
      data: context,
    }),
  );

  return (
    <EntityCreateFormDialog<
      ReasonCodeFormSchema,
      Partial<ReasonCode>,
      ReasonCode
    >
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createReasonCode}
      config={{
        schema: ReasonCodeSchema,
        defaultValues: reasonCodeDefaultValues,

        title: "Create Reason Code",
        description: "Create a new reason code",

        success: "Reason code created",

        submitText: "Create Reason Code",
        submittingText: "Creating...",

        getResult: (response): EntityCreateResult<ReasonCode> => ({
          value: response.id,
          label: response.title ?? "Reason Code",
          data: response,
        }),
      }}
    >
      {/* ======================================================
          BASIC
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<ReasonCodeFormSchema>
          name="code"
          label="Reason Code"
          placeholder="Enter reason code"
        />

        <FormInput<ReasonCodeFormSchema>
          name="title"
          label="Title"
          placeholder="Enter reason title"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-1">
        <FormInput<ReasonCodeFormSchema>
          name="description"
          label="Description"
          placeholder="Enter description"
        />
      </div>

      {/* ======================================================
          CONTEXT
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormEntitySelector<ReasonCodeFormSchema, ReasonContext>
          name="contextId"
          label="Context"
          placeholder="Search context..."
          searchPlaceholder="Search context..."
          emptyText="No context found"
          options={contextOptions}
        />
      </div>

      {/* ======================================================
          STATUS
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormSwitch<ReasonCodeFormSchema> name="isActive" label="Active" />

        <FormInput<ReasonCodeFormSchema>
          name="severity"
          label="Severity"
          type="number"
          placeholder="1"
        />
      </div>
    </EntityCreateFormDialog>
  );
}
