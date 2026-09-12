"use client";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
  EntityOption,
} from "@/components/form/entity-selector";

import { FuelTypeFormSchema, schema as FuelTypeSchema } from "./form/schema";

import { fuelTypeDefaultValues } from "./form/default-values";

import { BookingType } from "@/types/common/commerce/booking-type";

import { useCreateFuelType } from "@/hooks/catalog/fuel-type";

import BookingTypeCreateDialog from "@/app/(home)/commerce/booking-type/components/BookingTypeCreateDialog";

import { FuelType } from "@/types/common/catalog/fuel-type";

import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";
import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";
import { FormIcon } from "@/components/form/form-data/FormIcon";

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
  const createFuelType = useCreateFuelType();

  const bookingTypeOptions: EntityOption<BookingType>[] = bookingTypeData.map(
    (bookingType) => ({
      value: bookingType.id,
      label: bookingType.name,
      data: bookingType,
    }),
  );

  return (
    <EntityCreateFormDialog<FuelTypeFormSchema, Partial<FuelType>, FuelType>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createFuelType}
      config={{
        schema: FuelTypeSchema,
        defaultValues: fuelTypeDefaultValues,

        title: "Create Fuel Type",
        description: "Create a new fuel type",

        success: "Fuel type created",

        submitText: "Create Fuel Type",
        submittingText: "Creating...",

        getResult: (response): EntityCreateResult<FuelType> => ({
          value: response.id,
          label: response.name ?? "Fuel Type",
          data: response,
        }),
      }}
    >
      {/* ======================================================
          BASIC
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<FuelTypeFormSchema>
          name="name"
          label="Fuel Type Name"
          placeholder="Enter fuel type name"
        />

        <FormIcon<FuelTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="Enter fuel type icon"
        />
      </div>

      {/* ======================================================
          BOOKING TYPE
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormEntityMultiSelector<FuelTypeFormSchema, BookingType>
          name="bookingTypeIds"
          label="Booking Types"
          placeholder="Search booking types..."
          searchPlaceholder="Search booking types..."
          emptyText="No booking types found"
          createText="Create booking type"
          options={bookingTypeOptions}
          enableCreate
          renderCreateDialog={(props) => <BookingTypeCreateDialog {...props} />}
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
    </EntityCreateFormDialog>
  );
}
