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

import { DiningMealTypeFormSchema, DiningMealTypeSchema } from "./form/schema";

import { diningMealTypeDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
import { useCreateHotelDiningMealType } from "@/hooks/product-types/hotel/hotel-dining-meal-type";
import { DiningMealType } from "@/types/product-types/hotel/service/dinner-option.type";

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
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createDiningMealType = useCreateHotelDiningMealType();

  const { form } = useAppForm<DiningMealTypeFormSchema>({
    schema: DiningMealTypeSchema,
    defaultValues: diningMealTypeDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...diningMealTypeDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: DiningMealTypeFormSchema) => {
    submit({
      mutation: createDiningMealType.mutateAsync(values),

      success: "Dining Meal Type created",

      onSuccess: (response) => {
        const result: EntityCreateResult<DiningMealType> = {
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
      title="Create Dining Meal Type"
      description="Create a new dining meal type"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createDiningMealType.isPending}
      >
        <div className="space-y-6">
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

            <FormSwitch<DiningMealTypeFormSchema>
              name="active"
              label="Active"
            />
          </div>

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createDiningMealType.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createDiningMealType.isPending}>
              {createDiningMealType.isPending
                ? "Creating..."
                : "Create Dining Meal Type"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
