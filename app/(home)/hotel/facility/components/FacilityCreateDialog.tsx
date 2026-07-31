"use client";

import * as React from "react";

import {
  AppForm,
  FormInput,
  FormTextarea,
  FormSwitch,
  FormCombobox,
} from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import { FacilityFormSchema, FacilitySchema } from "./form/schema";

import { facilityDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
import {
  FacilityCategory,
  HotelFacility,
} from "@/types/bookings/hotel/facilities.types";
import { useCreateHotelFacility } from "@/hooks/hotel/hotel-facility";

// ======================================================
// PROPS
// ======================================================

interface FacilityCreateDialogProps extends EntityCreateDialogProps<HotelFacility> {
  categories: FacilityCategory[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function FacilityCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  categories,
}: FacilityCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createFacility = useCreateHotelFacility();

  const { form } = useAppForm<FacilityFormSchema>({
    schema: FacilitySchema,
    defaultValues: facilityDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...facilityDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: FacilityFormSchema) => {
    submit({
      mutation: createFacility.mutateAsync(values),

      success: "Facility created",

      onSuccess: (response) => {
        const result: EntityCreateResult<HotelFacility> = {
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
      title="Create Facility"
      description="Create a new facility"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createFacility.isPending}
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<FacilityFormSchema>
              name="name"
              label="Name"
              placeholder="Facility name"
            />

            <FormInput<FacilityFormSchema>
              name="icon"
              label="Icon"
              placeholder="Icon"
            />

            <div className="md:col-span-2">
              <FormTextarea<FacilityFormSchema>
                name="description"
                label="Description"
                placeholder="Description"
              />
            </div>

            <FormCombobox<FacilityFormSchema>
              portalContainer={dialogRef.current}
              name="categoryId"
              label="Category"
              placeholder="Select category"
              searchPlaceholder="Search category..."
              options={categories.map((category) => ({
                label: category.name,
                value: category.id,
              }))}
            />

            <FormInput<FacilityFormSchema>
              name="sortOrder"
              label="Sort Order"
              type="number"
              placeholder="0"
            />

            <FormSwitch<FacilityFormSchema> name="active" label="Active" />
          </div>

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createFacility.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createFacility.isPending}>
              {createFacility.isPending ? "Creating..." : "Create Facility"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
