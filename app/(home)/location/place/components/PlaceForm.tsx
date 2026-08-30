"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useCreatePlace, useUpdatePlace } from "@/hooks/location/place";

import { Place } from "@/types/location/place/place";

import { Address } from "@/types/location/address";

import { City } from "@/types/location/city";

import { Country } from "@/types/location/country/country";

import { District } from "@/types/location/district";

import { Ward } from "@/types/location/ward";

import { SearchTag } from "@/types/searchs/search/tag.types";

import { PlaceType } from "@/types/location/place/place-type.type";

import { BookingType } from "@/types/common/commerce/booking-type";

import { PlaceFormSchema } from "./form/schema";

import { placeFormConfig } from "./config";

import BasicStep from "./step/basic.step";

import LocationStep from "./step/location.step";

import CategoryStep from "./step/category.step";

import MediaStep from "./step/media.step";

import SearchStep from "./step/search.step";

import StatusStep from "./step/status.step";

interface PlaceFormProps {
  initialData?: Place;

  addresses: Address[];

  cities: City[];

  countries: Country[];

  districts: District[];

  wards: Ward[];

  placeTypeData: PlaceType[];

  searchTagData: SearchTag[];

  bookingTypeData: BookingType[];

  redirect?: boolean;
}

export default function PlaceForm({
  initialData,

  addresses,

  cities,

  countries,

  districts,

  wards,

  placeTypeData,

  searchTagData,

  bookingTypeData,

  redirect = true,
}: PlaceFormProps) {
  const createPlace = useCreatePlace();

  const updatePlace = useUpdatePlace();

  return (
    <EntityFormWizard<PlaceFormSchema, Place>
      initialData={initialData}
      redirect={redirect}
      config={placeFormConfig}
      createMutation={createPlace}
      updateMutation={updatePlace}
    >
      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <LocationStep
          addresses={addresses}
          cities={cities}
          countries={countries}
          districts={districts}
          wards={wards}
        />
      </FormWizardStep>

      <FormWizardStep index={2}>
        <CategoryStep placeTypeData={placeTypeData} />
      </FormWizardStep>

      <FormWizardStep index={3}>
        <MediaStep />
      </FormWizardStep>

      <FormWizardStep index={4}>
        <SearchStep
          bookingTypeData={bookingTypeData}
          searchTagData={searchTagData}
        />
      </FormWizardStep>

      <FormWizardStep index={5}>
        <StatusStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
