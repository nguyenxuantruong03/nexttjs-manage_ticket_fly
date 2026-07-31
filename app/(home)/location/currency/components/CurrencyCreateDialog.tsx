"use client";

import * as React from "react";

import { AppForm, FormInput, FormSwitch } from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import { Currency } from "@/types/bookings/location/currency";

import { useCreateCurrency } from "@/hooks/location/currency";
import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import { CurrencyFormSchema, schema as CurrencySchema } from "./form/schema";

import { currencyDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";

// ======================================================
// PROPS
// ======================================================

interface CurrencyCreateDialogProps extends EntityCreateDialogProps<Currency> {}

// ======================================================
// COMPONENT
// ======================================================

export default function CurrencyCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: CurrencyCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createCurrency = useCreateCurrency();

  const { form } = useAppForm<CurrencyFormSchema>({
    schema: CurrencySchema,
    defaultValues: currencyDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...currencyDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: CurrencyFormSchema) => {
    submit({
      mutation: createCurrency.mutateAsync(values),

      success: "Currency created",

      onSuccess: (response) => {
        const result: EntityCreateResult<Currency> = {
          value: response.id,
          label: response.name,
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
      title="Create Currency"
      description="Create a new currency"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createCurrency.isPending}
      >
        <div className="space-y-6">
          {/* ====================================================== */}
          {/* BASIC */}
          {/* ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<CurrencyFormSchema>
              name="name"
              label="Currency Name"
              placeholder="Currency name"
            />

            <FormInput<CurrencyFormSchema>
              name="nativeName"
              label="Native Name"
              placeholder="Native name"
            />

            <FormInput<CurrencyFormSchema>
              name="code"
              label="Currency Code"
              placeholder="USD"
            />

            <FormInput<CurrencyFormSchema>
              name="numericCode"
              label="Numeric Code"
              placeholder="840"
            />

            <FormInput<CurrencyFormSchema>
              name="symbol"
              label="Symbol"
              placeholder="$"
            />

            <FormInput<CurrencyFormSchema>
              name="symbolNative"
              label="Native Symbol"
              placeholder="$"
            />

            <FormInput<CurrencyFormSchema>
              name="decimalDigits"
              label="Decimal Digits"
              type="number"
              placeholder="2"
            />

            <FormInput<CurrencyFormSchema>
              name="rounding"
              label="Rounding"
              type="number"
              placeholder="0"
            />
          </div>
          {/* ====================================================== */}
          {/* DISPLAY */}
          {/* ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<CurrencyFormSchema>
              name="flagEmoji"
              label="Flag Emoji"
              placeholder="🇺🇸"
            />

            <FormInput<CurrencyFormSchema>
              name="locale"
              label="Locale"
              placeholder="en-US"
            />
          </div>

          {/* ====================================================== */}
          {/* STATUS */}
          {/* ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormSwitch<CurrencyFormSchema> name="active" label="Active" />

            <FormSwitch<CurrencyFormSchema>
              name="isDefault"
              label="Default Currency"
            />
          </div>

          {/* ====================================================== */}
          {/* ACTION */}
          {/* ====================================================== */}

          <div
            className="
            flex
            justify-end
            gap-3
            "
          >
            <Button
              type="button"
              variant="outline"
              disabled={createCurrency.isPending}
              onClick={() => {
                onOpenChange(false);
              }}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createCurrency.isPending}>
              {createCurrency.isPending ? "Creating..." : "Create Currency"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
