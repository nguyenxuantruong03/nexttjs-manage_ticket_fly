"use client";

import {
  FormInput,
  FormSelect,
  FormSwitch,
  FormTextarea,
} from "@/components/form/form-data";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
  EntityOption,
} from "@/components/form/entity-selector";

import { PackageFormSchema, schema as PackageSchema } from "./form/schema";

import { packageDefaultValues } from "./form/default-values";

import { useCreatePackage } from "@/hooks/commerce/package";

import { BookingType } from "@/types/common/commerce/booking-type";

import {
  Package,
  PackageDurationType,
} from "@/types/common/commerce/package/package.type";

import { Currency } from "@/types/location/currency";

import BookingTypeCreateDialog from "../../booking-type/components/BookingTypeCreateDialog";

import CurrencyCreateDialog from "@/app/(home)/location/currency/components/CurrencyCreateDialog";

import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

// ======================================================
// PROPS
// ======================================================

interface PackageCreateDialogProps extends EntityCreateDialogProps<Package> {
  bookingTypeData: BookingType[];
  currencyData: Currency[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function PackageCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  bookingTypeData,
  currencyData,
}: PackageCreateDialogProps) {
  const createPackage = useCreatePackage();

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
  // CURRENCY OPTIONS
  // ======================================================

  const currencyOptions: EntityOption<Currency>[] =
    currencyData?.map((currency) => ({
      value: currency.id,
      label: currency.name,
      description: `${currency.code}${
        currency.symbol ? ` (${currency.symbol})` : ""
      }`,
      data: currency,
    })) ?? [];

  // ======================================================
  // DURATION TYPE OPTIONS
  // ======================================================

  const durationTypeOptions = Object.values(PackageDurationType).map(
    (durationType) => ({
      label: durationType,
      value: durationType,
    }),
  );

  return (
    <EntityCreateFormDialog<PackageFormSchema, Partial<Package>, Package>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createPackage}
      config={{
        schema: PackageSchema,
        defaultValues: packageDefaultValues,
        title: "Create Package",
        description: "Create a new package",
        success: "Package created",
        submitText: "Create Package",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<Package> => ({
          value: response.id,
          label: response.name ?? "Package",
          data: response,
        }),
      }}
    >
      {/* ======================================================
          BASIC
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<PackageFormSchema>
          name="name"
          label="Name"
          placeholder="Enter package name"
        />

        <div className="md:col-span-2">
          <FormTextarea<PackageFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the package..."
          />
        </div>
      </div>

      {/* ======================================================
          BOOKING TYPE
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormEntityMultiSelector<PackageFormSchema, BookingType>
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
          DURATION
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<PackageFormSchema>
          name="duration"
          label="Duration"
          type="number"
          placeholder="1"
        />

        <FormSelect<PackageFormSchema>
          name="durationType"
          label="Duration Type"
          placeholder="Select duration type"
          options={durationTypeOptions}
        />
      </div>

      {/* ======================================================
          CAPACITY
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<PackageFormSchema>
          name="maxGuests"
          label="Max Guests"
          type="number"
          placeholder="10"
        />
      </div>

      {/* ======================================================
          BASE PRICE
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<PackageFormSchema>
          name="price"
          label="Price"
          type="number"
          placeholder="0"
        />

        <FormEntitySelector<PackageFormSchema, Currency>
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
          CONTENT
      ====================================================== */}

      <div className="grid gap-4">
        <FormInput<PackageFormSchema>
          name="includedItems"
          label="Included Items"
          placeholder="Breakfast, Airport transfer, Free WiFi"
        />
      </div>

      {/* ======================================================
          STATUS
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormSwitch<PackageFormSchema> name="active" label="Active" />

        <FormInput<PackageFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </EntityCreateFormDialog>
  );
}
