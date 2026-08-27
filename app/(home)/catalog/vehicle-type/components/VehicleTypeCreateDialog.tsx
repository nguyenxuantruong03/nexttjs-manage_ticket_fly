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

import {
  VehicleTypeFormSchema,
  schema as VehicleTypeSchema,
} from "./form/schema";

import { vehicleTypeDefaultValues } from "./form/default-values";

import { BookingType } from "@/types/common/commerce/booking-type";
import { VehicleType } from "@/types/common/catalog/vehicle-type.type";
import { useCreateVehicleType } from "@/hooks/catalog/vehicle-type";
import BookingTypeCreateDialog from "@/app/(home)/commerce/booking-type/components/BookingTypeCreateDialog";
import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";

// ======================================================
// PROPS
// ======================================================

interface VehicleTypeCreateDialogProps extends EntityCreateDialogProps<VehicleType> {
  bookingTypeData: BookingType[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function VehicleTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  bookingTypeData,
}: VehicleTypeCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createVehicleType = useCreateVehicleType();

  const { form } = useAppForm<VehicleTypeFormSchema>({
    schema: VehicleTypeSchema,
    defaultValues: vehicleTypeDefaultValues,
  });

  // ======================================================
  // BOOKING TYPE OPTIONS
  // ======================================================

  const bookingTypeOptions: EntityOption<BookingType>[] = bookingTypeData.map(
    (bookingType) => ({
      value: bookingType.id,
      label: bookingType.name,
      data: bookingType,
    }),
  );

  // ======================================================
  // RESET
  // ======================================================

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...vehicleTypeDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  // ======================================================
  // SUBMIT
  // ======================================================

  const onSubmit = (values: VehicleTypeFormSchema) => {
    submit({
      mutation: createVehicleType.mutateAsync(values),

      success: "Vehicle type created",

      onSuccess: (response) => {
        const result: EntityCreateResult<VehicleType> = {
          value: response.id,
          label: response.name ?? "Vehicle Type",
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
      title="Create Vehicle Type"
      description="Create a new vehicle type"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createVehicleType.isPending}
      >
        <div className="space-y-6">
          {/* ======================================================
              BASIC
          ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<VehicleTypeFormSchema>
              name="name"
              label="Vehicle Type Name"
              placeholder="Enter vehicle type name"
            />

            <FormInput<VehicleTypeFormSchema>
              name="icon"
              label="Icon"
              placeholder="Enter vehicle type icon"
            />

            <div className="md:col-span-2">
              <FormTextarea<VehicleTypeFormSchema>
                name="description"
                label="Description"
                placeholder="Describe the vehicle type..."
              />
            </div>
          </div>

          {/* ======================================================
              BOOKING TYPE
          ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormEntityMultiSelector<VehicleTypeFormSchema, BookingType>
              name="bookingTypeIds"
              label="Booking Types"
              placeholder="Search booking types..."
              searchPlaceholder="Search booking types..."
              emptyText="No booking types found"
              createText="Create booking type"
              options={bookingTypeOptions}
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
            <FormSwitch<VehicleTypeFormSchema> name="active" label="Active" />

            <FormInput<VehicleTypeFormSchema>
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
              disabled={createVehicleType.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createVehicleType.isPending}>
              {createVehicleType.isPending
                ? "Creating..."
                : "Create Vehicle Type"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
