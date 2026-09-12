"use client";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/form/entity-selector";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

import { useCreateFlyMealType } from "@/hooks/product-types/ticket-fly/meal-type";

import { FlyMealTypeFormSchema, FlyMealTypeSchema } from "./form/schema";

import { flyMealTypeDefaultValues } from "./form/default-values";

import { FlyMealType } from "@/types/product-types/ticket-fly/fly-meal-type";
import { FormIcon } from "@/components/form/form-data/FormIcon";

// ======================================================
// PROPS
// ======================================================

interface FlyMealTypeCreateDialogProps extends EntityCreateDialogProps<FlyMealType> {}

// ======================================================
// COMPONENT
// ======================================================

export default function FlyMealTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: FlyMealTypeCreateDialogProps) {
  const createFlyMealType = useCreateFlyMealType();

  return (
    <EntityCreateFormDialog<
      FlyMealTypeFormSchema,
      Partial<FlyMealType>,
      FlyMealType
    >
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createFlyMealType}
      config={{
        schema: FlyMealTypeSchema,
        defaultValues: flyMealTypeDefaultValues,
        title: "Create Fly Meal Type",
        description: "Create a new fly meal type",
        success: "Fly meal type created",
        submitText: "Create Meal Type",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<FlyMealType> => ({
          value: response.id,
          label: response.name,
          data: response,
        }),
      }}
    >
      <div className="space-y-6">
        {/* BASIC */}
        <div className="grid gap-4 md:grid-cols-2">
          <FormInput<FlyMealTypeFormSchema>
            name="name"
            label="Name"
            placeholder="Vegetarian"
          />

          <FormIcon<FlyMealTypeFormSchema>
            name="icon"
            label="Icon"
            placeholder="https://..."
          />

          <div className="md:col-span-2">
            <FormInput<FlyMealTypeFormSchema>
              name="description"
              label="Description"
              placeholder="Describe meal type"
            />
          </div>
        </div>

        {/* STATUS */}
        <div className="grid gap-4 md:grid-cols-2">
          <FormSwitch<FlyMealTypeFormSchema> name="active" label="Active" />

          <FormInput<FlyMealTypeFormSchema>
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
