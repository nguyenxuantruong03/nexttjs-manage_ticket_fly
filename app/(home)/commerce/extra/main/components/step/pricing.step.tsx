"use client";

import FormSection from "@/components/form/FormSection";

import { EntityOption } from "@/components/form/entity-selector";

import { Currency } from "@/types/location/currency";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import { ExtraFormSchema } from "../form/schema";
import { FormInput } from "@/components/form/form-data";
import CurrencyCreateDialog from "@/app/(home)/location/currency/components/CurrencyCreateDialog";

interface PricingStepProps {
  currencyData: Currency[];
}

export default function PricingStep({ currencyData }: PricingStepProps) {
  const currencyEntityOptions: EntityOption<Currency>[] = currencyData.map(
    (currency) => ({
      value: currency.id,
      label: currency.code,
      description: currency.name ?? undefined,
      data: currency,
    }),
  );

  return (
    <FormSection
      title="Pricing"
      description="Configure the pricing for this extra"
    >
      <div className="grid gap-6 md:grid-cols-2">
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
          options={currencyEntityOptions}
          enableCreate
          renderCreateDialog={(props) => <CurrencyCreateDialog {...props} />}
        />
      </div>
    </FormSection>
  );
}
