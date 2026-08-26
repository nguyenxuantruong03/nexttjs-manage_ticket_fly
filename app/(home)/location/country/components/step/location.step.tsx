"use client";

import FormSection from "@/components/form/FormSection";

import { CountryFormSchema } from "../form/schema";
import LanguageCreateDialog from "../../../language/components/LanguageCreateDialog";
import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";
import TimezoneCreateDialog from "../../../timezone/components/TimezoneCreateDialog";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import CurrencyCreateDialog from "../../../currency/components/CurrencyCreateDialog";
import { EntityOption } from "@/components/entity-selector";
import { Currency } from "@/types/location/currency";
import { Language } from "@/types/location/language";
import { Timezone } from "@/types/location/timezone";
import ContinentCreateDialog from "../../../continent/components/ContinentCreateDialog";
import { Continent } from "@/types/location/country/continent.type";

interface LocationStepProps {
  currencyData?: Currency[];
  languageData: Language[];
  timezoneData: Timezone[];
  continentData: Continent[];
}
export default function LocationStep({
  currencyData,
  languageData,
  timezoneData,
  continentData,
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

  const continentOptions: EntityOption<Continent>[] =
    continentData?.map((continent) => ({
      value: continent.id,
      label: continent.name,
      description: continent.code ?? undefined,
      data: continent,
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

        <FormEntitySelector<CountryFormSchema, Continent>
          name="continentId"
          label="Continent"
          placeholder="Search continent..."
          searchPlaceholder="Search continent..."
          emptyText="No continent found"
          createText="Create continent"
          options={continentOptions}
          enableCreate
          renderCreateDialog={(props) => <ContinentCreateDialog {...props} />}
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
