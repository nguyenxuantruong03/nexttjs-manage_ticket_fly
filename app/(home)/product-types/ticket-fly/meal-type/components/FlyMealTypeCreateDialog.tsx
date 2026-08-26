"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { AppForm, FormInput, FormSwitch } from "@/components/form/form-data";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import { useAppForm } from "@/hooks/useAppForm";
import { useSubmit } from "@/hooks/useSubmit";

import { useCreateFlyMealType } from "@/hooks/product-types/ticket-fly/meal-type";

import { FlyMealTypeFormSchema, FlyMealTypeSchema } from "./form/schema";

import { flyMealTypeDefaultValues } from "./form/default-values";

import { FlyMealType } from "@/types/product-types/ticket-fly/fly-meal-type";

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
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createFlyMealType = useCreateFlyMealType();

  const { form } = useAppForm<FlyMealTypeFormSchema>({
    schema: FlyMealTypeSchema,
    defaultValues: flyMealTypeDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...flyMealTypeDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: FlyMealTypeFormSchema) => {
    submit({
      mutation: createFlyMealType.mutateAsync(values),

      success: "Fly meal type created",

      onSuccess(response) {
        const result: EntityCreateResult<FlyMealType> = {
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
      title="Create Fly Meal Type"
      description="Create a new fly meal type"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createFlyMealType.isPending}
      >
        <div className="space-y-6">
          {/* BASIC */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<FlyMealTypeFormSchema>
              name="name"
              label="Name"
              placeholder="Vegetarian"
            />

            <FormInput<FlyMealTypeFormSchema>
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

          {/* ACTION */}

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createFlyMealType.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createFlyMealType.isPending}>
              {createFlyMealType.isPending ? "Creating..." : "Create Meal Type"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
