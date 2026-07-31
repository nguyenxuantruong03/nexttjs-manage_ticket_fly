"use client";

import FormSection from "@/components/form/FormSection";

import {
  FormCombobox,
  FormInput,
  FormSelect,
} from "@/components/form/form-data";
import { CountryFormSchema } from "../form/schema";
import { Continent } from "@/types/bookings/location/city";
import { Currency } from "@/types/bookings/location/currency";
import FormMultiCombobox from "@/components/form/form-data/FormMultiCombobox";
import { Language } from "@/types/bookings/location/language";
import { Timezone } from "@/types/bookings/location/timezone";
import LanguageCreateDialog from "../../../language/components/LanguageCreateDialog";
import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";
import TimezoneCreateDialog from "../../../timezone/components/TimezoneCreateDialog";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import CurrencyCreateDialog from "../../../currency/components/CurrencyCreateDialog";
import { EntityOption } from "@/components/entity-selector";

interface LocationStepProps {
  currencyData?: Currency[];
  languageData: Language[];
  timezoneData: Timezone[];
}

const continentOptions = Object.values(Continent).map((value) => ({
  label: value.replaceAll("_", " "),
  value,
}));

export default function LocationStep({
  currencyData,
  languageData,
  timezoneData,
}: LocationStepProps) {
  const currencyOptions: EntityOption<Currency>[] =
    currencyData?.map((currency) => ({
      value: currency.id,
      label: `${currency.flagEmoji} ${currency.name} (${currency.code}) ${currency.symbol}`,
      description: currency.code,
      data: currency,
    })) ?? [];

  const timezoneOptions: EntityOption<Timezone>[] =
    timezoneData?.map((timezone) => ({
      value: timezone.id,
      label: `${timezone.displayName} (${timezone.name})`,
      description: timezone.name,
      data: timezone,
    })) ?? [];

  const languageOptions: EntityOption<Language>[] =
    languageData?.map((language) => ({
      value: language.id,
      label: language.name,
      description: language.code ?? undefined,
      data: language,
    })) ?? [];

  return (
    <FormSection title="Location" description="Geographical information">
      <div className="grid gap-6 md:grid-cols-2">
        <FormEntitySelector<CountryFormSchema, Currency>
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

        <FormSelect<CountryFormSchema>
          name="continent"
          label="Continent"
          options={continentOptions}
        />

        <FormEntitySelector<CountryFormSchema, Timezone>
          name="timezoneId"
          label="Timezone"
          placeholder="Search timezone..."
          searchPlaceholder="Search timezone..."
          emptyText="No timezone found"
          createText="Create timezone"
          options={timezoneOptions}
          enableCreate
          renderCreateDialog={(props) => <TimezoneCreateDialog {...props} />}
        />

        <FormEntityMultiSelector<CountryFormSchema, Language>
          name="languageIds"
          label="Languages"
          placeholder="Search language..."
          searchPlaceholder="Search language..."
          emptyText="No language found"
          createText="Create language"
          options={languageOptions}
          enableCreate
          renderCreateDialog={(props) => <LanguageCreateDialog {...props} />}
        />
      </div>
    </FormSection>
  );
}
