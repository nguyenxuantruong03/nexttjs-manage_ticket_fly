"use client";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import { useCreateCurrency } from "@/hooks/location/currency";

import { CurrencyFormSchema, schema as CurrencySchema } from "./form/schema";

import { currencyDefaultValues } from "./form/default-values";

import { Currency } from "@/types/location/currency";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

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
  const createCurrency = useCreateCurrency();

  return (
    <EntityCreateFormDialog<CurrencyFormSchema, Currency>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createCurrency}
      config={{
        schema: CurrencySchema,
        defaultValues: currencyDefaultValues,
        title: "Create Currency",
        description: "Create a new currency",
        success: "Currency created",
        submitText: "Create Currency",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<Currency> => ({
          value: response.id,
          label: response.name,
          data: response,
        }),
      }}
    >
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
      {/* MEDIA */}
      {/* ====================================================== */}

      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<CurrencyFormSchema> name="thumbnail" label="Thumbnail URL" />

        <FormInput<CurrencyFormSchema>
          name="coverImage"
          label="Cover Image URL"
        />

        <FormInput<CurrencyFormSchema>
          name="bannerImage"
          label="Banner Image URL"
        />

        <FormInput<CurrencyFormSchema> name="video" label="Video URL" />

        <FormInput<CurrencyFormSchema> name="images.0" label="Image URL" />
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
    </EntityCreateFormDialog>
  );
}
