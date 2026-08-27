"use client";

import * as React from "react";

import {
  AppForm,
  FormInput,
  FormSelect,
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
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createPackage = useCreatePackage();

  const { form } = useAppForm<PackageFormSchema>({
    schema: PackageSchema,
    defaultValues: packageDefaultValues,
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

  // ======================================================
  // RESET
  // ======================================================

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...packageDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  // ======================================================
  // SUBMIT
  // ======================================================

  const onSubmit = (values: PackageFormSchema) => {
    submit({
      mutation: createPackage.mutateAsync(values),

      success: "Package created",

      onSuccess: (response) => {
        const result: EntityCreateResult<Package> = {
          value: response.id,
          label: response.name ?? "Package",
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
      title="Create Package"
      description="Create a new package"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createPackage.isPending}
      >
        <div className="space-y-6">
          {/* ======================================================
              BASIC
          ====================================================== */}

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Basic</h3>

              <p className="text-sm text-muted-foreground">
                Basic package information
              </p>
            </div>

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
          </div>

          {/* ======================================================
              BOOKING TYPE
          ====================================================== */}

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Booking Type</h3>

              <p className="text-sm text-muted-foreground">
                Select the booking type for this package
              </p>
            </div>

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
                renderCreateDialog={(props) => (
                  <BookingTypeCreateDialog {...props} />
                )}
              />
            </div>
          </div>

          {/* ======================================================
              DURATION
          ====================================================== */}

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Duration</h3>

              <p className="text-sm text-muted-foreground">
                Configure the duration of this package
              </p>
            </div>

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
          </div>

          {/* ======================================================
              CAPACITY
          ====================================================== */}

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Capacity</h3>

              <p className="text-sm text-muted-foreground">
                Configure the maximum number of guests for this package
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <FormInput<PackageFormSchema>
                name="maxGuests"
                label="Max Guests"
                type="number"
                placeholder="10"
              />
            </div>
          </div>

          {/* ======================================================
              BASE PRICE
          ====================================================== */}

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Base Price</h3>

              <p className="text-sm text-muted-foreground">
                Configure the base price and currency for this package
              </p>
            </div>

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
                renderCreateDialog={(props) => (
                  <CurrencyCreateDialog {...props} />
                )}
              />
            </div>
          </div>

          {/* ======================================================
              CONTENT
          ====================================================== */}

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Content</h3>

              <p className="text-sm text-muted-foreground">
                Configure the items included in this package
              </p>
            </div>

            <div className="grid gap-4">
              <FormInput<PackageFormSchema>
                name="includedItems"
                label="Included Items"
                placeholder="Breakfast, Airport transfer, Free WiFi"
              />
            </div>
          </div>

          {/* ======================================================
              STATUS
          ====================================================== */}

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Status</h3>

              <p className="text-sm text-muted-foreground">
                Package status configuration
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <FormSwitch<PackageFormSchema> name="active" label="Active" />

              <FormInput<PackageFormSchema>
                name="sortOrder"
                label="Sort Order"
                type="number"
                placeholder="0"
              />
            </div>
          </div>

          {/* ======================================================
              ACTIONS
          ====================================================== */}

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createPackage.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createPackage.isPending}>
              {createPackage.isPending ? "Creating..." : "Create Package"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
