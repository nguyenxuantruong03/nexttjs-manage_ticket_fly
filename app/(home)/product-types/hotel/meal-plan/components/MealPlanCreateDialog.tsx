"use client";

import {
  FormInput,
  FormTextarea,
  FormSwitch,
} from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/form/entity-selector";

import { MealPlanFormSchema, MealPlanSchema } from "./form/schema";

import { mealPlanDefaultValues } from "./form/default-values";

import { MealPlan } from "@/types/product-types/hotel/pricing/rate-plan.types";

import { useCreateHotelMealPlan } from "@/hooks/product-types/hotel/hotel-meal-plan";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";
import { FormIcon } from "@/components/form/form-data/FormIcon";

// ======================================================
// PROPS
// ======================================================

interface MealPlanCreateDialogProps extends EntityCreateDialogProps<MealPlan> {}

// ======================================================
// COMPONENT
// ======================================================

export default function MealPlanCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: MealPlanCreateDialogProps) {
  const createMealPlan = useCreateHotelMealPlan();

  return (
    <EntityCreateFormDialog<MealPlanFormSchema, Partial<MealPlan>, MealPlan>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createMealPlan}
      config={{
        schema: MealPlanSchema,
        defaultValues: mealPlanDefaultValues,
        title: "Create Meal Plan",
        description: "Create a new meal plan",
        success: "Meal Plan created",
        submitText: "Create Meal Plan",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<MealPlan> => ({
          value: response.id,
          label: response.name,
          data: response,
        }),
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<MealPlanFormSchema>
          name="name"
          label="Name"
          placeholder="Meal plan name"
        />

        <FormIcon<MealPlanFormSchema>
          name="icon"
          label="Icon"
          placeholder="Icon"
        />

        <div className="md:col-span-2">
          <FormTextarea<MealPlanFormSchema>
            name="description"
            label="Description"
            placeholder="Description"
          />
        </div>

        <FormInput<MealPlanFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />

        <FormSwitch<MealPlanFormSchema> name="active" label="Active" />
      </div>
    </EntityCreateFormDialog>
  );
}
