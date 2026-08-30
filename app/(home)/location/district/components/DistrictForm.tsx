"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateDistrict,
  useUpdateDistrict,
} from "@/hooks/location/district";

import { District } from "@/types/location/district";

import { City } from "@/types/location/city";

import { Country } from "@/types/location/country/country";

import { BookingType } from "@/types/common/commerce/booking-type";

import { SearchTag } from "@/types/searchs/search/tag.types";

import { Timezone } from "@/types/location/timezone";

import { DistrictFormSchema } from "./form/schema";

import { districtFormConfig } from "./config";

import BasicStep from "./step/basic.step";

import LocationStep from "./step/location.step";

import MediaStep from "./step/media.step";

import SearchStep from "./step/search.step";

import StatusStep from "./step/status.step";

interface DistrictFormProps {
  initialData?: District;

  cityData: City[];

  countryData: Country[];

  bookingTypeData: BookingType[];

  searchTagData: SearchTag[];

  timezones: Timezone[];

  redirect?: boolean;
}

export default function DistrictForm({
  initialData,

  cityData,

  timezones,

  countryData,

  bookingTypeData,

  searchTagData,

  redirect = true,
}: DistrictFormProps) {
  const createDistrict = useCreateDistrict();

  const updateDistrict = useUpdateDistrict();

  return (
    <EntityFormWizard<DistrictFormSchema, District>
      initialData={initialData}
      redirect={redirect}
      config={districtFormConfig}
      createMutation={createDistrict}
      updateMutation={updateDistrict}
    >
      <FormWizardStep index={0}>
        <BasicStep
          timezones={timezones}
          searchTagData={searchTagData}
          bookingTypeData={bookingTypeData}
          cityData={cityData}
          countryData={countryData}
        />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <MediaStep />
      </FormWizardStep>

      <FormWizardStep index={2}>
        <LocationStep />
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
