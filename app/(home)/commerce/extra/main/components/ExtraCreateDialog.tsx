"use client";

import * as React from "react";

import {
  AppForm,
  FormInput,
  FormSwitch,
  FormTextarea,
} from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
  EntityOption,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";

import { useSubmit } from "@/hooks/useSubmit";

import { useAppForm } from "@/hooks/useAppForm";

import { ExtraFormSchema, schema as ExtraSchema } from "./form/schema";

import { extraDefaultValues } from "./form/default-values";

import { useCreateExtra } from "@/hooks/commerce/extra";

import { Extra } from "@/types/common/commerce/extra/extra.type";

import { BookingType } from "@/types/common/commerce/booking-type";

import { ExtraType } from "@/types/common/commerce/extra/extra-type.type";

import { Currency } from "@/types/location/currency";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import BookingTypeCreateDialog from "../../../booking-type/components/BookingTypeCreateDialog";

import ExtraTypeCreateDialog from "../../extra-type/components/ExtraTypeCreateDialog";

import CurrencyCreateDialog from "@/app/(home)/location/currency/components/CurrencyCreateDialog";
import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";

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
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createExtra = useCreateExtra();

  const { form } = useAppForm<ExtraFormSchema>({
    schema: ExtraSchema,
    defaultValues: extraDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...extraDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: ExtraFormSchema) => {
    submit({
      mutation: createExtra.mutateAsync(values),

      success: "Extra created",

      onSuccess: (response) => {
        const result: EntityCreateResult<Extra> = {
          value: response.id,
          label: response.name ?? "Extra",
          data: response,
        };

        onCreated(result);

        form.reset();

        onOpenChange(false);
      },
    });
  };

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
    <EntityCreateDialog
      dialogRef={dialogRef}
      open={open}
      onOpenChange={onOpenChange}
      title="Create Extra"
      description="Create a new extra"
    >
      <AppForm form={form} onSubmit={onSubmit} loading={createExtra.isPending}>
        <div className="space-y-6">
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

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Booking Type</h3>

              <p className="text-sm text-muted-foreground">
                Select the booking type for this extra
              </p>
            </div>

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
                renderCreateDialog={(props) => (
                  <BookingTypeCreateDialog {...props} />
                )}
              />
            </div>
          </div>

          {/* ======================================================
              EXTRA TYPE
          ====================================================== */}

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Extra Type</h3>

              <p className="text-sm text-muted-foreground">
                Select the extra type for this extra
              </p>
            </div>

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
          </div>

          {/* ======================================================
              PRICING
          ====================================================== */}

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Pricing</h3>

              <p className="text-sm text-muted-foreground">
                Configure the pricing for this extra
              </p>
            </div>

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
                renderCreateDialog={(props) => (
                  <CurrencyCreateDialog {...props} />
                )}
              />
            </div>
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

          {/* ======================================================
              ACTIONS
          ====================================================== */}

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createExtra.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createExtra.isPending}>
              {createExtra.isPending ? "Creating..." : "Create Extra"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
