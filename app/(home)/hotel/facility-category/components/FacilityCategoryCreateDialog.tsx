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

import {
  FacilityCategoryFormSchema,
  FacilityCategorySchema,
} from "./form/schema";

import { facilityCategoryDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
import { FacilityCategory } from "@/types/bookings/hotel/facilities.types";
import { useCreateHotelFacilityCategory } from "@/hooks/hotel/hotel-facility-category";

// ======================================================
// PROPS
// ======================================================

interface FacilityCategoryCreateDialogProps extends EntityCreateDialogProps<FacilityCategory> {}

// ======================================================
// COMPONENT
// ======================================================

export default function FacilityCategoryCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: FacilityCategoryCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createFacilityCategory = useCreateHotelFacilityCategory();

  const { form } = useAppForm<FacilityCategoryFormSchema>({
    schema: FacilityCategorySchema,
    defaultValues: facilityCategoryDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...facilityCategoryDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: FacilityCategoryFormSchema) => {
    submit({
      mutation: createFacilityCategory.mutateAsync(values),

      success: "Facility Category created",

      onSuccess: (response) => {
        const result: EntityCreateResult<FacilityCategory> = {
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
      title="Create Facility Category"
      description="Create a new facility category"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createFacilityCategory.isPending}
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<FacilityCategoryFormSchema>
              name="name"
              label="Name"
              placeholder="Facility category name"
            />

            <FormInput<FacilityCategoryFormSchema>
              name="icon"
              label="Icon"
              placeholder="Icon"
            />

            <div className="md:col-span-2">
              <FormTextarea<FacilityCategoryFormSchema>
                name="description"
                label="Description"
                placeholder="Description"
              />
            </div>

            <FormInput<FacilityCategoryFormSchema>
              name="sortOrder"
              label="Sort Order"
              type="number"
              placeholder="0"
            />

            <FormSwitch<FacilityCategoryFormSchema>
              name="active"
              label="Active"
            />
          </div>

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createFacilityCategory.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createFacilityCategory.isPending}>
              {createFacilityCategory.isPending
                ? "Creating..."
                : "Create Facility Category"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
