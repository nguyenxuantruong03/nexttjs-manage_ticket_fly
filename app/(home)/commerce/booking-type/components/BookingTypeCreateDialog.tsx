"use client";

import {
  FormInput,
  FormSwitch,
  FormTextarea,
} from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/form/entity-selector";

import {
  BookingTypeFormSchema,
  schema as BookingTypeSchema,
} from "./form/schema";

import { bookingTypeDefaultValues } from "./form/default-values";

import { useCreateBookingType } from "@/hooks/commerce/booking-type";

import { BookingType } from "@/types/common/commerce/booking-type";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

// ======================================================
// PROPS
// ======================================================

interface BookingTypeCreateDialogProps extends EntityCreateDialogProps<BookingType> {}

// ======================================================
// COMPONENT
// ======================================================

export default function BookingTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: BookingTypeCreateDialogProps) {
  const createBookingType = useCreateBookingType();

  return (
    <EntityCreateFormDialog<
      BookingTypeFormSchema,
      Partial<BookingType>,
      BookingType
    >
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createBookingType}
      config={{
        schema: BookingTypeSchema,
        defaultValues: bookingTypeDefaultValues,
        title: "Create Booking Type",
        description: "Create a new booking type",
        success: "Booking type created",
        submitText: "Create Booking Type",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<BookingType> => ({
          value: response.id,
          label: response.name ?? "Booking Type",
          data: response,
        }),
      }}
    >
      {/* ======================================================
          BASIC
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<BookingTypeFormSchema>
          name="code"
          label="Code"
          placeholder="Enter booking type code"
        />

        <FormInput<BookingTypeFormSchema>
          name="name"
          label="Booking Type Name"
          placeholder="Enter booking type name"
        />

        <div className="md:col-span-2">
          <FormTextarea<BookingTypeFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the booking type..."
          />
        </div>
      </div>

      {/* ======================================================
          STATUS
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormSwitch<BookingTypeFormSchema> name="active" label="Active" />

        <FormInput<BookingTypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </EntityCreateFormDialog>
  );
}
