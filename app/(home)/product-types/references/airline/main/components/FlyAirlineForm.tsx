"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateFlyAirline,
  useUpdateFlyAirline,
} from "@/hooks/product-types/references/airline";

import { FlyAirline } from "@/types/product-types/references/airline/airline.types";

import { FlyAirlineFormSchema } from "./schema/airline.schema";

import {
  FlyAirlineCreateInput,
  flyAirlineFormConfig,
  FlyAirlineUpdateInput,
} from "./config";

import BasicStep from "./step/basic.step";

import AddonStep from "./step/addon.step";

import StatusStep from "./step/status.step";

import ImagesStep from "./step/image.step";

import WifiPackageStep from "./step/wifipackage.step";

import InterlineStep from "./step/interline.step";

import {
  MarketingCodeshareStep,
  OperatingCodeshareStep,
} from "./step/codeshare.step";
import { MediaCategory } from "@/types/common/catalog/media-category";
import { MediaAsset } from "@/types/common/catalog/media-asset";
import { BookingType } from "@/types/common/commerce/booking-type";

interface FlyAirlineFormProps {
  initialData?: FlyAirline;
  mediaCategoryData: MediaCategory[];
  mediaAssetData: MediaAsset[];
  bookingTypeData: BookingType[];
  redirect?: boolean;
}

export default function FlyAirlineForm({
  initialData,
  mediaCategoryData,
  mediaAssetData,
  bookingTypeData,
  redirect = true,
}: FlyAirlineFormProps) {
  const createFlyAirline = useCreateFlyAirline();

  const updateFlyAirline = useUpdateFlyAirline();

  return (
    <EntityFormWizard<
      FlyAirlineFormSchema,
      FlyAirline,
      FlyAirlineCreateInput,
      FlyAirlineUpdateInput
    >
      initialData={initialData}
      redirect={redirect}
      config={flyAirlineFormConfig}
      createMutation={createFlyAirline}
      updateMutation={updateFlyAirline}
    >
      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <ImagesStep
          mediaCategoryData={mediaCategoryData}
          mediaAssetData={mediaAssetData}
          bookingTypeData={bookingTypeData}
        />
      </FormWizardStep>

      <FormWizardStep index={2}>
        <AddonStep />
      </FormWizardStep>

      <FormWizardStep index={3}>
        <WifiPackageStep />
      </FormWizardStep>

      <FormWizardStep index={4}>
        <InterlineStep />
      </FormWizardStep>

      <FormWizardStep index={5}>
        <MarketingCodeshareStep />
      </FormWizardStep>

      <FormWizardStep index={6}>
        <OperatingCodeshareStep />
      </FormWizardStep>

      <FormWizardStep index={7}>
        <StatusStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
