"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useCreateCity, useUpdateCity } from "@/hooks/location/city";

import { City } from "@/types/location/city";
import { Country } from "@/types/location/country/country";
import { SearchTag } from "@/types/searchs/search/tag.types";
import { Timezone } from "@/types/location/timezone";
import { Language } from "@/types/location/language";
import { Currency } from "@/types/location/currency";
import { BookingType } from "@/types/common/commerce/booking-type";
import { Continent } from "@/types/location/country/continent.type";

import { CityFormSchema } from "./form/schema";
import { cityFormConfig } from "./config";

import BasicStep from "./step/basic.step";
import LocationStep from "./step/location.step";
import MediaStep from "./step/media.step";
import SearchStep from "./step/search.step";
import TravelStep from "./step/travel.step";
import StatusStep from "./step/status.step";

interface CityFormProps {
  initialData?: City;

  countryData?: Country[];

  searchTagData: SearchTag[];

  timezoneData: Timezone[];

  languageData: Language[];

  currencyData: Currency[];

  bookingTypeData: BookingType[];

  continentData: Continent[];

  redirect?: boolean;
}

export default function CityForm({
  initialData,
  countryData,
  searchTagData,
  timezoneData,
  languageData,
  currencyData,
  bookingTypeData,
  continentData,
  redirect = true,
}: CityFormProps) {
  const createCity = useCreateCity();

  const updateCity = useUpdateCity();

  return (
    <EntityFormWizard<CityFormSchema, City>
      initialData={initialData}
      redirect={redirect}
      config={cityFormConfig}
      createMutation={createCity}
      updateMutation={updateCity}
    >
      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <LocationStep
          bookingTypeData={bookingTypeData}
          continentData={continentData}
          currencyData={currencyData}
          languageData={languageData}
          searchTagData={searchTagData}
          countryData={countryData}
          timezoneData={timezoneData}
        />
      </FormWizardStep>

      <FormWizardStep index={2}>
        <MediaStep />
      </FormWizardStep>

      <FormWizardStep index={3}>
        <SearchStep
          bookingTypeData={bookingTypeData}
          searchTagData={searchTagData}
        />
      </FormWizardStep>

      <FormWizardStep index={4}>
        <TravelStep />
      </FormWizardStep>

      <FormWizardStep index={5}>
        <StatusStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
