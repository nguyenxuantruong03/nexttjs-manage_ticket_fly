"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import BasicStep from "./step/basic.step";

import SpecificationStep from "./step/specification.step";

import FacilitiesStep from "./step/facilities.step";

import CabinsStep from "./step/cabins.step";

import ImagesStep from "./step/images.step";

import StatusStep from "./step/status.step";

import SeatMapStep from "./step/seat map.step";

import ScheduleStep from "./step/schedule.step";

import {
  useCreateFlyAircraft,
  useUpdateFlyAircraft,
} from "@/hooks/product-types/references/airline/aircraft";

import { FlyAircraft } from "@/types/product-types/references/airline/aircraft/aircraft.types";

import { FlyAircraftFormSchema } from "./schema/aircraft.schema";

import { FlyAirline } from "@/types/product-types/references/airline/airline.types";

import {
  flyAircraftFormConfig,
  FlyAircraftCreateInput,
  FlyAircraftUpdateInput,
} from "./config";
import { MediaCategory } from "@/types/common/catalog/media-category";
import { MediaAsset } from "@/types/common/catalog/media-asset";
import { BookingType } from "@/types/common/commerce/booking-type";

interface FlyAircraftFormProps {
  initialData?: FlyAircraft;

  airlineData: FlyAirline[];
  mediaCategoryData: MediaCategory[];
  mediaAssetData: MediaAsset[];
  bookingTypeData: BookingType[];
  redirect?: boolean;
}

export default function FlyAircraftForm({
  initialData,

  airlineData,
  mediaCategoryData,
  mediaAssetData,
  bookingTypeData,
  redirect = true,
}: FlyAircraftFormProps) {
  const createFlyAircraft = useCreateFlyAircraft();

  const updateFlyAircraft = useUpdateFlyAircraft();

  return (
    <EntityFormWizard<
      FlyAircraftFormSchema,
      FlyAircraft,
      FlyAircraftCreateInput,
      FlyAircraftUpdateInput
    >
      initialData={initialData}
      redirect={redirect}
      config={flyAircraftFormConfig}
      createMutation={createFlyAircraft}
      updateMutation={updateFlyAircraft}
    >
      <FormWizardStep index={0}>
        <BasicStep airlineData={airlineData} />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <SpecificationStep />
      </FormWizardStep>

      <FormWizardStep index={2}>
        <FacilitiesStep />
      </FormWizardStep>

      <FormWizardStep index={3}>
        <CabinsStep />
      </FormWizardStep>

      <FormWizardStep index={4}>
        <ImagesStep
          mediaCategoryData={mediaCategoryData}
          mediaAssetData={mediaAssetData}
          bookingTypeData={bookingTypeData}
        />
      </FormWizardStep>

      <FormWizardStep index={5}>
        <SeatMapStep />
      </FormWizardStep>

      <FormWizardStep index={6}>
        <StatusStep />
      </FormWizardStep>

      <FormWizardStep index={7}>
        <ScheduleStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
