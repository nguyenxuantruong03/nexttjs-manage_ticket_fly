"use client";

import {
  FormInput,
  FormTextarea,
  FormSwitch,
} from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import { DiningMealTypeFormSchema, DiningMealTypeSchema } from "./form/schema";

import { diningMealTypeDefaultValues } from "./form/default-values";

import { useCreateHotelDiningMealType } from "@/hooks/product-types/hotel/hotel-dining-meal-type";

import { DiningMealType } from "@/types/product-types/hotel/service/dinner-option.type";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

// ======================================================
// PROPS
// ======================================================

interface DiningMealTypeCreateDialogProps extends EntityCreateDialogProps<DiningMealType> {}

// ======================================================
// COMPONENT
// ======================================================

export default function DiningMealTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: DiningMealTypeCreateDialogProps) {
  const createDiningMealType = useCreateHotelDiningMealType();

  return (
    <EntityCreateFormDialog<DiningMealTypeFormSchema, DiningMealType>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createDiningMealType}
      config={{
        schema: DiningMealTypeSchema,
        defaultValues: diningMealTypeDefaultValues,
        title: "Create Dining Meal Type",
        description: "Create a new dining meal type",
        success: "Dining Meal Type created",
        submitText: "Create Dining Meal Type",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<DiningMealType> => ({
          value: response.id,
          label: response.name,
          data: response,
        }),
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<DiningMealTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Dining meal type name"
        />

        <FormInput<DiningMealTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="Icon"
        />

        <div className="md:col-span-2">
          <FormTextarea<DiningMealTypeFormSchema>
            name="description"
            label="Description"
            placeholder="Description"
          />
        </div>

        <FormInput<DiningMealTypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />

        <FormSwitch<DiningMealTypeFormSchema> name="active" label="Active" />
      </div>
    </EntityCreateFormDialog>
  );
}
