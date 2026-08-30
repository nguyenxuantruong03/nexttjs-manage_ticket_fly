"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useCreateCountry, useUpdateCountry } from "@/hooks/location/country";

import { Country } from "@/types/location/country/country";

import { Currency } from "@/types/location/currency";

import { SearchTag } from "@/types/searchs/search/tag.types";

import { Timezone } from "@/types/location/timezone";

import { Language } from "@/types/location/language";

import { Continent } from "@/types/location/country/continent.type";

import { BookingType } from "@/types/common/commerce/booking-type";

import { CountryFormSchema } from "./form/schema";

import { countryFormConfig } from "./config";

import BasicStep from "./step/basic.step";

import LocationStep from "./step/location.step";

import MediaStep from "./step/media.step";

import SearchStep from "./step/search.step";

import StatusStep from "./step/status.step";

interface CountryFormProps {
  initialData?: Country;

  currencyData?: Currency[];

  searchTagData: SearchTag[];

  timezoneData: Timezone[];

  languageData: Language[];

  bookingTypeData: BookingType[];

  continentData: Continent[];

  redirect?: boolean;
}

export default function CountryForm({
  initialData,

  currencyData,

  searchTagData,

  timezoneData,

  languageData,

  bookingTypeData,

  continentData,

  redirect = true,
}: CountryFormProps) {
  const createCountry = useCreateCountry();

  const updateCountry = useUpdateCountry();

  return (
    <EntityFormWizard<CountryFormSchema, Country>
      initialData={initialData}
      redirect={redirect}
      config={countryFormConfig}
      createMutation={createCountry}
      updateMutation={updateCountry}
    >
      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <LocationStep
          currencyData={currencyData}
          timezoneData={timezoneData}
          languageData={languageData}
          continentData={continentData}
        />
      </FormWizardStep>

      <FormWizardStep index={2}>
        <MediaStep />
      </FormWizardStep>

      <FormWizardStep index={3}>
        <SearchStep
          searchTagData={searchTagData}
          bookingTypeData={bookingTypeData}
        />
      </FormWizardStep>

      <FormWizardStep index={4}>
        <StatusStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
