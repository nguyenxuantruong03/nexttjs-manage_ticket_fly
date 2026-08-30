"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useCreateWard, useUpdateWard } from "@/hooks/location/ward";

import { Ward } from "@/types/location/ward";

import { District } from "@/types/location/district";

import { City } from "@/types/location/city";

import { BookingType } from "@/types/common/commerce/booking-type";

import { SearchTag } from "@/types/searchs/search/tag.types";

import { WardFormSchema } from "./form/schema";

import { wardFormConfig } from "./config";

import BasicStep from "./step/basic.step";

import LocationStep from "./step/location.step";

import MediaStep from "./step/media.step";

import SearchStep from "./step/search.step";

import StatusStep from "./step/status.step";

interface WardFormProps {
  initialData?: Ward;

  districtData: District[];

  cityData: City[];

  bookingTypeData: BookingType[];

  searchTagData: SearchTag[];

  redirect?: boolean;
}

export default function WardForm({
  initialData,

  districtData,

  cityData,

  bookingTypeData,

  searchTagData,

  redirect = true,
}: WardFormProps) {
  const createWard = useCreateWard();

  const updateWard = useUpdateWard();

  return (
    <EntityFormWizard<WardFormSchema, Ward>
      initialData={initialData}
      redirect={redirect}
      config={wardFormConfig}
      createMutation={createWard}
      updateMutation={updateWard}
    >
      <FormWizardStep index={0}>
        <BasicStep
          bookingTypeData={bookingTypeData}
          searchTagData={searchTagData}
          cityData={cityData}
          districtData={districtData}
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
