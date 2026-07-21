"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";
import { CurrencyFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection title="Currency" description="Basic currency information">
      <div className="grid gap-6 md:grid-cols-2">
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

        <FormInput<CurrencyFormSchema> name="symbol" label="Symbol" placeholder="$" />

        <FormInput<CurrencyFormSchema>
          name="symbolNative"
          label="Native Symbol"
          placeholder="$"
        />

        <FormInput<CurrencyFormSchema>
          name="name"
          label="Name"
          placeholder="United States Dollar"
        />

        <FormInput<CurrencyFormSchema>
          name="nativeName"
          label="Native Name"
          placeholder="US Dollar"
        />

        <FormInput<CurrencyFormSchema>
          name="decimalDigits"
          label="Decimal Digits"
          type="number"
        />

        <FormInput<CurrencyFormSchema> name="rounding" label="Rounding" type="number" />
      </div>
    </FormSection>
  );
}
