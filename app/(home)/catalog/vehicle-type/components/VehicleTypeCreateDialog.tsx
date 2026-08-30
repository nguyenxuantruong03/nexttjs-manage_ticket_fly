"use client";

import {
  FormInput,
  FormSwitch,
  FormTextarea,
} from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
  EntityOption,
} from "@/components/entity-selector";

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

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

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
  const createVehicleType = useCreateVehicleType();

  const bookingTypeOptions: EntityOption<BookingType>[] = bookingTypeData.map(
    (bookingType) => ({
      value: bookingType.id,
      label: bookingType.name,
      data: bookingType,
    }),
  );

  return (
    <EntityCreateFormDialog<VehicleTypeFormSchema, VehicleType>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createVehicleType}
      config={{
        schema: VehicleTypeSchema,
        defaultValues: vehicleTypeDefaultValues,
        title: "Create Vehicle Type",
        description: "Create a new vehicle type",
        success: "Vehicle type created",
        submitText: "Create Vehicle Type",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<VehicleType> => ({
          value: response.id,
          label: response.name ?? "Vehicle Type",
          data: response,
        }),
      }}
    >
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
          renderCreateDialog={(props) => <BookingTypeCreateDialog {...props} />}
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
    </EntityCreateFormDialog>
  );
}
