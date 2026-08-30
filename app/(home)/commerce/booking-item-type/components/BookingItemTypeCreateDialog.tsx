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
  BookingItemTypeFormSchema,
  schema as BookingItemTypeSchema,
} from "./form/schema";

import { bookingItemTypeDefaultValues } from "./form/default-values";

import { useCreateBookingItemType } from "@/hooks/commerce/booking-item-type";

import { BookingType } from "@/types/common/commerce/booking-type";

import BookingTypeCreateDialog from "../../booking-type/components/BookingTypeCreateDialog";

import { BookingItemType } from "@/types/common/commerce/booking-item-type.type";

import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

// ======================================================
// PROPS
// ======================================================

interface BookingItemTypeCreateDialogProps
  extends EntityCreateDialogProps<BookingItemType> {
  bookingTypeData: BookingType[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function BookingItemTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  bookingTypeData,
}: BookingItemTypeCreateDialogProps) {
  const createBookingItemType = useCreateBookingItemType();

  const bookingTypeOptions: EntityOption<BookingType>[] =
    bookingTypeData.map((bookingType) => ({
      value: bookingType.id,
      label: bookingType.name,
      data: bookingType,
    }));

  return (
    <EntityCreateFormDialog<BookingItemTypeFormSchema, BookingItemType>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createBookingItemType}
      config={{
        schema: BookingItemTypeSchema,
        defaultValues: bookingItemTypeDefaultValues,
        title: "Create Booking Item Type",
        description: "Create a new booking item type",
        success: "Booking item type created",
        submitText: "Create Booking Item Type",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<BookingItemType> => ({
          value: response.id,
          label: response.name ?? "Booking Item Type",
          data: response,
        }),
      }}
    >
      {/* ======================================================
          BASIC
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<BookingItemTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Hotel, Room, Vehicle..."
        />

        <FormInput<BookingItemTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="hotel"
        />

        <div className="md:col-span-2">
          <FormTextarea<BookingItemTypeFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the booking item type..."
          />
        </div>
      </div>

      {/* ======================================================
          BOOKING TYPE
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormEntityMultiSelector<BookingItemTypeFormSchema, BookingType>
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
        <FormInput<BookingItemTypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />

        <FormSwitch<BookingItemTypeFormSchema>
          name="active"
          label="Active"
        />
      </div>
    </EntityCreateFormDialog>
  );
}