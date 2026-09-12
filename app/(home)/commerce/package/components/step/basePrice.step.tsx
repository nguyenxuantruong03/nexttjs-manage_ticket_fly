"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { PackageFormSchema } from "../form/schema";

import { EntityOption } from "@/components/form/entity-selector";

import { Currency } from "@/types/location/currency";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import CurrencyCreateDialog from "@/app/(home)/location/currency/components/CurrencyCreateDialog";

interface BasePriceStepProps {
  currencyData: Currency[];
}

export default function BasePriceStep({ currencyData }: BasePriceStepProps) {
  const currencyEntityOptions: EntityOption<Currency>[] = currencyData.map(
    (currency) => ({
      value: currency.id,
      label: currency.name,
      description: `${currency.code}${currency.symbol ? ` (${currency.symbol})` : ""}`,
      data: currency,
    }),
  );

  return (
    <FormSection
      title="Base Price"
      description="Configure the base price and currency for this package"
    >
      <div className="grid gap-6 md:grid-cols-2">
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
          options={currencyEntityOptions}
          enableCreate
          renderCreateDialog={(props) => <CurrencyCreateDialog {...props} />}
        />
      </div>
    </FormSection>
  );
}
