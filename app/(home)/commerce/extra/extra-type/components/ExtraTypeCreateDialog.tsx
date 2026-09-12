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
} from "@/components/form/entity-selector";

import { ExtraTypeFormSchema, schema as ExtraTypeSchema } from "./form/schema";

import { extraTypeDefaultValues } from "./form/default-values";

import { useCreateExtraType } from "@/hooks/commerce/extra-type";

import { ExtraType } from "@/types/common/commerce/extra/extra-type.type";

import BookingTypeCreateDialog from "../../../booking-type/components/BookingTypeCreateDialog";

import { BookingType } from "@/types/common/commerce/booking-type";

import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";
import { FormIcon } from "@/components/form/form-data/FormIcon";

// ======================================================
// PROPS
// ======================================================

interface ExtraTypeCreateDialogProps extends EntityCreateDialogProps<ExtraType> {
  bookingTypeData: BookingType[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function ExtraTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  bookingTypeData,
}: ExtraTypeCreateDialogProps) {
  const createExtraType = useCreateExtraType();

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

  return (
    <EntityCreateFormDialog<ExtraTypeFormSchema, Partial<ExtraType>, ExtraType>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createExtraType}
      config={{
        schema: ExtraTypeSchema,
        defaultValues: extraTypeDefaultValues,
        title: "Create Extra Type",
        description: "Create a new extra type",
        success: "Extra type created",
        submitText: "Create Extra Type",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<ExtraType> => ({
          value: response.id,
          label: response.name ?? "Extra Type",
          data: response,
        }),
      }}
    >
      {/* ======================================================
          BASIC
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<ExtraTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Enter extra type name"
        />

        <FormIcon<ExtraTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="https://..."
        />

        <div className="md:col-span-2">
          <FormTextarea<ExtraTypeFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the extra type..."
          />
        </div>
      </div>

      {/* ======================================================
          BOOKING TYPE
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormEntityMultiSelector<ExtraTypeFormSchema, BookingType>
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
        <FormSwitch<ExtraTypeFormSchema> name="active" label="Active" />

        <FormInput<ExtraTypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </EntityCreateFormDialog>
  );
}
