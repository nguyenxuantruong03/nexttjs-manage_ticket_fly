"use client";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/form/entity-selector";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

import { useCreateFlySeatType } from "@/hooks/product-types/ticket-fly/seat-type";

import { FlySeatTypeFormSchema, FlySeatTypeSchema } from "./form/schema";

import { flySeatTypeDefaultValues } from "./form/default-values";

import { FlySeatType } from "@/types/product-types/ticket-fly/fly-seat-type";
import { FormIcon } from "@/components/form/form-data/FormIcon";

// ======================================================
// PROPS
// ======================================================

interface FlySeatTypeCreateDialogProps extends EntityCreateDialogProps<FlySeatType> {}

// ======================================================
// COMPONENT
// ======================================================

export default function FlySeatTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: FlySeatTypeCreateDialogProps) {
  const createFlySeatType = useCreateFlySeatType();

  return (
    <EntityCreateFormDialog<
      FlySeatTypeFormSchema,
      Partial<FlySeatType>,
      FlySeatType
    >
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createFlySeatType}
      config={{
        schema: FlySeatTypeSchema,
        defaultValues: flySeatTypeDefaultValues,
        title: "Create Fly Seat Type",
        description: "Create a new fly seat type",
        success: "Fly seat type created",
        submitText: "Create Seat Type",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<FlySeatType> => ({
          value: response.id,
          label: response.name,
          data: response,
        }),
      }}
    >
      <div className="space-y-6">
        {/* BASIC */}
        <div className="grid gap-4 md:grid-cols-2">
          <FormInput<FlySeatTypeFormSchema>
            name="name"
            label="Name"
            placeholder="Economy"
          />

          <FormIcon<FlySeatTypeFormSchema>
            name="icon"
            label="Icon"
            placeholder="https://..."
          />

          <div className="md:col-span-2">
            <FormInput<FlySeatTypeFormSchema>
              name="description"
              label="Description"
              placeholder="Describe seat type"
            />
          </div>
        </div>

        {/* STATUS */}
        <div className="grid gap-4 md:grid-cols-2">
          <FormSwitch<FlySeatTypeFormSchema> name="active" label="Active" />

          <FormInput<FlySeatTypeFormSchema>
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
