"use client";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import { useCreateFlyAddonType } from "@/hooks/product-types/references/airline/addon-type";

import { flyAddonTypeDefaultValues } from "./form/default-values";

import { FlyAddonType } from "@/types/product-types/references/airline/fly-addon-type";

import { FlyAddonTypeFormSchema, FlyAddonTypeSchema } from "./form/schema";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

// ======================================================
// PROPS
// ======================================================

interface FlyAddonTypeCreateDialogProps extends EntityCreateDialogProps<FlyAddonType> {}

// ======================================================
// COMPONENT
// ======================================================

export default function FlyAddonTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: FlyAddonTypeCreateDialogProps) {
  const createFlyAddonType = useCreateFlyAddonType();

  return (
    <EntityCreateFormDialog<FlyAddonTypeFormSchema, FlyAddonType>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createFlyAddonType}
      config={{
        schema: FlyAddonTypeSchema,
        defaultValues: flyAddonTypeDefaultValues,
        title: "Create Fly Addon Type",
        description: "Create a new fly addon type",
        success: "Fly addon type created",
        submitText: "Create Addon Type",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<FlyAddonType> => ({
          value: response.id,
          label: response.name,
          data: response,
        }),
      }}
    >
      <div className="space-y-6">
        {/* BASIC */}

        <div className="grid gap-4 md:grid-cols-2">
          <FormInput<FlyAddonTypeFormSchema>
            name="name"
            label="Name"
            placeholder="Extra Baggage"
          />

          <FormInput<FlyAddonTypeFormSchema>
            name="icon"
            label="Icon"
            placeholder="https://..."
          />

          <div className="md:col-span-2">
            <FormInput<FlyAddonTypeFormSchema>
              name="description"
              label="Description"
              placeholder="Describe addon type"
            />
          </div>
        </div>

        {/* STATUS */}

        <div className="grid gap-4 md:grid-cols-2">
          <FormSwitch<FlyAddonTypeFormSchema> name="active" label="Active" />

          <FormInput<FlyAddonTypeFormSchema>
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
