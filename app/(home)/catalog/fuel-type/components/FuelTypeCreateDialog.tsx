"use client";

import * as React from "react";

import {
  AppForm,
  FormInput,
  FormSwitch,
  FormTextarea,
} from "@/components/form/form-data";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import { Button } from "@/components/ui/button";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
  EntityOption,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";

import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import { FuelTypeFormSchema, schema as FuelTypeSchema } from "./form/schema";

import { fuelTypeDefaultValues } from "./form/default-values";

import { BookingType } from "@/types/common/commerce/booking-type";

import { useCreateFuelType } from "@/hooks/catalog/fuel-type";

import BookingTypeCreateDialog from "@/app/(home)/commerce/booking-type/components/BookingTypeCreateDialog";
import { FuelType } from "@/types/common/catalog/fuel-type";

// ======================================================
// PROPS
// ======================================================

interface FuelTypeCreateDialogProps extends EntityCreateDialogProps<FuelType> {
  bookingTypeData: BookingType[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function FuelTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  bookingTypeData,
}: FuelTypeCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createFuelType = useCreateFuelType();

  const { form } = useAppForm<FuelTypeFormSchema>({
    schema: FuelTypeSchema,
    defaultValues: fuelTypeDefaultValues,
  });

  // ======================================================
  // BOOKING TYPE OPTIONS
  // ======================================================

  const bookingTypeEntityOptions: EntityOption<BookingType>[] =
    bookingTypeData.map((bookingType) => ({
      value: bookingType.id,
      label: bookingType.name,
      description: bookingType.description ?? undefined,
      data: bookingType,
    }));

  // ======================================================
  // RESET
  // ======================================================

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...fuelTypeDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  // ======================================================
  // SUBMIT
  // ======================================================

  const onSubmit = (values: FuelTypeFormSchema) => {
    submit({
      mutation: createFuelType.mutateAsync(values),

      success: "Fuel type created",

      onSuccess: (response) => {
        const result: EntityCreateResult<FuelType> = {
          value: response.id,
          label: response.name ?? "Fuel Type",
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
      title="Create Fuel Type"
      description="Create a new fuel type"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createFuelType.isPending}
      >
        <div className="space-y-6">
          {/* ======================================================
              BASIC
          ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<FuelTypeFormSchema>
              name="name"
              label="Fuel Type Name"
              placeholder="Enter fuel type name"
            />

            <FormInput<FuelTypeFormSchema>
              name="icon"
              label="Icon"
              placeholder="Enter fuel type icon"
            />
          </div>

          {/* ======================================================
              BOOKING TYPE
          ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormEntitySelector<FuelTypeFormSchema, BookingType>
              name="bookingTypeId"
              label="Booking Type"
              placeholder="Search booking type..."
              searchPlaceholder="Search booking type..."
              emptyText="No booking type found"
              createText="Create booking type"
              options={bookingTypeEntityOptions}
              enableCreate
              renderCreateDialog={(props) => (
                <BookingTypeCreateDialog {...props} />
              )}
            />
          </div>

          {/* ======================================================
              STATUS
          ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormSwitch<FuelTypeFormSchema> name="active" label="Active" />

            <FormInput<FuelTypeFormSchema>
              name="sortOrder"
              label="Sort Order"
              type="number"
              placeholder="0"
            />
          </div>

          {/* ======================================================
              ACTIONS
          ====================================================== */}

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createFuelType.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createFuelType.isPending}>
              {createFuelType.isPending ? "Creating..." : "Create Fuel Type"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
