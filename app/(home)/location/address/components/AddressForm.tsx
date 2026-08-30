"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useCreateAddress, useUpdateAddress } from "@/hooks/location/address";

import { Address } from "@/types/location/address";

import { City } from "@/types/location/city";

import { District } from "@/types/location/district";

import { Ward } from "@/types/location/ward";

import { Country } from "@/types/location/country/country";

import { Timezone } from "@/types/location/timezone";

import { Currency } from "@/types/location/currency";

import { SearchTag } from "@/types/searchs/search/tag.types";

import { Language } from "@/types/location/language";

import { BookingType } from "@/types/common/commerce/booking-type";

import { Continent } from "@/types/location/country/continent.type";

import { AddressFormSchema } from "./form/schema";

import { addressFormConfig } from "./config";

import BasicStep from "./step/basic.step";

import LocationStep from "./step/location.step";

import MediaStep from "./step/media.step";

import StatusStep from "./step/status.step";

interface AddressFormProps {
  initialData?: Address;

  cityData: City[];

  districtData: District[];

  wardData: Ward[];

  countryData: Country[];

  timezoneData: Timezone[];

  currencyData: Currency[];

  searchTags: SearchTag[];

  languageData: Language[];

  bookingTypeData: BookingType[];

  continentsData: Continent[];

  redirect?: boolean;
}

export default function AddressForm({
  initialData,
  cityData,
  districtData,
  wardData,
  countryData,
  currencyData,
  timezoneData,
  searchTags,
  languageData,
  bookingTypeData,
  continentsData,
  redirect = true,
}: AddressFormProps) {
  const createAddress = useCreateAddress();

  const updateAddress = useUpdateAddress();

  return (
    <EntityFormWizard<AddressFormSchema, Address>
      initialData={initialData}
      redirect={redirect}
      config={addressFormConfig}
      createMutation={createAddress}
      updateMutation={updateAddress}
    >
      <FormWizardStep index={0}>
        <BasicStep
          cityData={cityData}
          districtData={districtData}
          wardData={wardData}
          bookingTypeData={bookingTypeData}
          searchTagData={searchTags}
        />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <LocationStep
          currencyData={currencyData}
          languageData={languageData}
          timezoneData={timezoneData}
          searchTags={searchTags}
          cityData={cityData}
          countryData={countryData}
          bookingTypeData={bookingTypeData}
          continentsData={continentsData}
        />
      </FormWizardStep>

      <FormWizardStep index={2}>
        <MediaStep />
      </FormWizardStep>

      <FormWizardStep index={3}>
        <StatusStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
