"use client";

import * as React from "react";

import {
  AppForm,
  FormInput,
  FormTextarea,
  FormSwitch,
} from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import { MealPlanFormSchema, MealPlanSchema } from "./form/schema";

import { mealPlanDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
import { MealPlan } from "@/types/bookings/hotel/pricing/rate-plan.types";
import { useCreateHotelMealPlan } from "@/hooks/hotel/hotel-meal-plan";

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
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createMealPlan = useCreateHotelMealPlan();

  const { form } = useAppForm<MealPlanFormSchema>({
    schema: MealPlanSchema,
    defaultValues: mealPlanDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...mealPlanDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: MealPlanFormSchema) => {
    submit({
      mutation: createMealPlan.mutateAsync(values),

      success: "Meal Plan created",

      onSuccess: (response) => {
        const result: EntityCreateResult<MealPlan> = {
          value: response.id,
          label: response.name,
          data: response,
        };

        onCreated(result);

        form.reset();

        onOpenChange(false);
      },
    });
  };

  return (
    <EntityCreateDialog
      dialogRef={dialogRef}
      open={open}
      onOpenChange={onOpenChange}
      title="Create Meal Plan"
      description="Create a new meal plan"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createMealPlan.isPending}
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<MealPlanFormSchema>
              name="name"
              label="Name"
              placeholder="Meal plan name"
            />

            <FormInput<MealPlanFormSchema>
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

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createMealPlan.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createMealPlan.isPending}>
              {createMealPlan.isPending ? "Creating..." : "Create Meal Plan"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
