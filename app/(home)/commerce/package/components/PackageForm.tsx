"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useCreatePackage, useUpdatePackage } from "@/hooks/commerce/package";

import { BookingType } from "@/types/common/commerce/booking-type";

import { Package } from "@/types/common/commerce/package/package.type";

import { Currency } from "@/types/location/currency";

import { PackageFormSchema } from "./form/schema";

import {
  PackageCreateInput,
  packageFormConfig,
  PackageUpdateInput,
} from "./config";

import BasicStep from "./step/basic.step";

import BookingTypeStep from "./step/booking-type.step";

import DurationStep from "./step/duration.step";

import CapacityStep from "./step/capacity.step";

import BasePriceStep from "./step/basePrice.step";

import ContentStep from "./step/content.step";

import StatusStep from "./step/status.step";
import MediaStep from "./step/media.step";
import { MediaAsset } from "@/types/common/catalog/media-asset";

interface PackageFormProps {
  initialData?: Package;

  bookingTypeData: BookingType[];

  currencyData: Currency[];
  mediaAssetData: MediaAsset[];
  redirect?: boolean;
}

export default function PackageForm({
  initialData,
  bookingTypeData,
  currencyData,
  mediaAssetData,
  redirect = true,
}: PackageFormProps) {
  const createPackage = useCreatePackage();

  const updatePackage = useUpdatePackage();

  return (
    <EntityFormWizard<
      PackageFormSchema,
      Package,
      PackageCreateInput,
      PackageUpdateInput
    >
      initialData={initialData}
      redirect={redirect}
      config={packageFormConfig}
      createMutation={createPackage}
      updateMutation={updatePackage}
    >
      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <BookingTypeStep bookingTypeData={bookingTypeData} />
      </FormWizardStep>

      <FormWizardStep index={2}>
        <DurationStep />
      </FormWizardStep>

      <FormWizardStep index={3}>
        <CapacityStep />
      </FormWizardStep>

      <FormWizardStep index={4}>
        <BasePriceStep currencyData={currencyData} />
      </FormWizardStep>

      <FormWizardStep index={5}>
        <ContentStep />
      </FormWizardStep>

      <FormWizardStep index={6}>
        <MediaStep
          mediaAssetData={mediaAssetData}
          bookingTypeData={bookingTypeData}
        />
      </FormWizardStep>

      <FormWizardStep index={7}>
        <StatusStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
