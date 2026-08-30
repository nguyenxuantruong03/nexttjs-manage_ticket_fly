"use client";

import {
  FormInput,
  FormSwitch,
  FormTextarea,
} from "@/components/form/form-data";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
  EntityOption,
} from "@/components/entity-selector";

import { ExtraFormSchema, schema as ExtraSchema } from "./form/schema";

import { extraDefaultValues } from "./form/default-values";

import { useCreateExtra } from "@/hooks/commerce/extra";

import { Extra } from "@/types/common/commerce/extra/extra.type";

import { BookingType } from "@/types/common/commerce/booking-type";

import { ExtraType } from "@/types/common/commerce/extra/extra-type.type";

import { Currency } from "@/types/location/currency";

import BookingTypeCreateDialog from "../../../booking-type/components/BookingTypeCreateDialog";

import ExtraTypeCreateDialog from "../../extra-type/components/ExtraTypeCreateDialog";

import CurrencyCreateDialog from "@/app/(home)/location/currency/components/CurrencyCreateDialog";

import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

// ======================================================
// PROPS
// ======================================================

interface ExtraCreateDialogProps extends EntityCreateDialogProps<Extra> {
  bookingTypeData: BookingType[];
  extraTypeData: ExtraType[];
  currencyData: Currency[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function ExtraCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  bookingTypeData,
  extraTypeData,
  currencyData,
}: ExtraCreateDialogProps) {
  const createExtra = useCreateExtra();

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
  // EXTRA TYPE OPTIONS
  // ======================================================

  const extraTypeOptions: EntityOption<ExtraType>[] =
    extraTypeData?.map((extraType) => ({
      value: extraType.id,
      label: extraType.name,
      description: extraType.description ?? undefined,
      data: extraType,
    })) ?? [];

  // ======================================================
  // CURRENCY OPTIONS
  // ======================================================

  const currencyOptions: EntityOption<Currency>[] =
    currencyData?.map((currency) => ({
      value: currency.id,
      label: currency.code,
      description: currency.name ?? undefined,
      data: currency,
    })) ?? [];

  return (
    <EntityCreateFormDialog<ExtraFormSchema, Extra>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createExtra}
      config={{
        schema: ExtraSchema,
        defaultValues: extraDefaultValues,
        title: "Create Extra",
        description: "Create a new extra",
        success: "Extra created",
        submitText: "Create Extra",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<Extra> => ({
          value: response.id,
          label: response.name ?? "Extra",
          data: response,
        }),
      }}
    >
      {/* ======================================================
          BASIC
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<ExtraFormSchema>
          name="name"
          label="Name"
          placeholder="Enter extra name"
        />

        <FormInput<ExtraFormSchema>
          name="icon"
          label="Icon"
          placeholder="https://..."
        />

        <div className="md:col-span-2">
          <FormTextarea<ExtraFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the extra..."
          />
        </div>
      </div>

      {/* ======================================================
          BOOKING TYPE
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormEntityMultiSelector<ExtraFormSchema, BookingType>
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
          EXTRA TYPE
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormEntitySelector<ExtraFormSchema, ExtraType>
          name="typeId"
          label="Extra Type"
          placeholder="Search extra type..."
          searchPlaceholder="Search extra type..."
          emptyText="No extra type found"
          createText="Create extra type"
          options={extraTypeOptions}
          enableCreate
          renderCreateDialog={(props) => (
            <ExtraTypeCreateDialog
              {...props}
              bookingTypeData={bookingTypeData}
            />
          )}
        />
      </div>

      {/* ======================================================
          PRICING
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<ExtraFormSchema>
          name="price"
          label="Price"
          type="number"
          placeholder="0"
        />

        <FormEntitySelector<ExtraFormSchema, Currency>
          name="currencyId"
          label="Currency"
          placeholder="Search currency..."
          searchPlaceholder="Search currency..."
          emptyText="No currency found"
          createText="Create currency"
          options={currencyOptions}
          enableCreate
          renderCreateDialog={(props) => <CurrencyCreateDialog {...props} />}
        />
      </div>

      {/* ======================================================
          STATUS
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormSwitch<ExtraFormSchema> name="active" label="Active" />

        <FormInput<ExtraFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </EntityCreateFormDialog>
  );
}
