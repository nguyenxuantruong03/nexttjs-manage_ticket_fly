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
  ExtraFeeTypeFormSchema,
  schema as ExtraFeeTypeSchema,
} from "./form/schema";

import { extraFeeTypeDefaultValues } from "./form/default-values";

import { useCreateExtraFeeType } from "@/hooks/commerce/extra-fee-type";

import { BookingType } from "@/types/common/commerce/booking-type";

import BookingTypeCreateDialog from "../../../booking-type/components/BookingTypeCreateDialog";

import { ExtraFeeType } from "@/types/common/commerce/extra-fee-type.type";

import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

// ======================================================
// PROPS
// ======================================================

interface ExtraFeeTypeCreateDialogProps extends EntityCreateDialogProps<ExtraFeeType> {
  bookingTypeData: BookingType[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function ExtraFeeTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  bookingTypeData,
}: ExtraFeeTypeCreateDialogProps) {
  const createExtraFeeType = useCreateExtraFeeType();

  const bookingTypeOptions: EntityOption<BookingType>[] = bookingTypeData.map(
    (bookingType) => ({
      value: bookingType.id,
      label: bookingType.name,
      data: bookingType,
    }),
  );

  return (
    <EntityCreateFormDialog<ExtraFeeTypeFormSchema, ExtraFeeType>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createExtraFeeType}
      config={{
        schema: ExtraFeeTypeSchema,
        defaultValues: extraFeeTypeDefaultValues,
        title: "Create Extra Fee Type",
        description: "Create a new extra fee type",
        success: "Extra fee type created",
        submitText: "Create Extra Fee Type",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<ExtraFeeType> => ({
          value: response.id,
          label: response.name ?? "Extra Fee Type",
          data: response,
        }),
      }}
    >
      {/* ======================================================
          BASIC
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<ExtraFeeTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Enter extra fee type name"
        />

        <FormInput<ExtraFeeTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="Enter extra fee type icon"
        />

        <div className="md:col-span-2">
          <FormTextarea<ExtraFeeTypeFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the extra fee type..."
          />
        </div>
      </div>

      {/* ======================================================
          BOOKING TYPE
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormEntityMultiSelector<ExtraFeeTypeFormSchema, BookingType>
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
        <FormSwitch<ExtraFeeTypeFormSchema> name="active" label="Active" />

        <FormInput<ExtraFeeTypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </EntityCreateFormDialog>
  );
}
