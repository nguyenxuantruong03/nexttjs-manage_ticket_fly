"use client";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

import { useCreateFlyDelayReason } from "@/hooks/product-types/ticket-fly/delay-reason";

import { FlyDelayReasonFormSchema, FlyDelayReasonSchema } from "./form/schema";

import { flyDelayReasonDefaultValues } from "./form/default-values";

import { FlyDelayReason } from "@/types/product-types/ticket-fly/fly-delay-reason";

// ======================================================
// PROPS
// ======================================================

interface FlyDelayReasonCreateDialogProps extends EntityCreateDialogProps<FlyDelayReason> {}

// ======================================================
// COMPONENT
// ======================================================

export default function FlyDelayReasonCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: FlyDelayReasonCreateDialogProps) {
  const createFlyDelayReason = useCreateFlyDelayReason();

  return (
    <EntityCreateFormDialog<FlyDelayReasonFormSchema, FlyDelayReason>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createFlyDelayReason}
      config={{
        schema: FlyDelayReasonSchema,
        defaultValues: flyDelayReasonDefaultValues,
        title: "Create Fly Delay Reason",
        description: "Create a new fly delay reason",
        success: "Fly delay reason created",
        submitText: "Create Delay Reason",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<FlyDelayReason> => ({
          value: response.id,
          label: response.name,
          data: response,
        }),
      }}
    >
      <div className="space-y-6">
        {/* BASIC */}

        <div className="grid gap-4 md:grid-cols-2">
          <FormInput<FlyDelayReasonFormSchema>
            name="name"
            label="Name"
            placeholder="Weather Delay"
          />

          <FormInput<FlyDelayReasonFormSchema>
            name="icon"
            label="Icon"
            placeholder="https://..."
          />

          <div className="md:col-span-2">
            <FormInput<FlyDelayReasonFormSchema>
              name="description"
              label="Description"
              placeholder="Describe delay reason"
            />
          </div>
        </div>

        {/* STATUS */}

        <div className="grid gap-4 md:grid-cols-2">
          <FormSwitch<FlyDelayReasonFormSchema> name="active" label="Active" />

          <FormInput<FlyDelayReasonFormSchema>
            name="sortOrder"
            label="Sort Order"
            type="number"
            placeholder="0"
          />
        </div>
      </div>
    </EntityCreateFormDialog>
  );
}
