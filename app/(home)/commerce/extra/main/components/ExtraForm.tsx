"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useCreateExtra, useUpdateExtra } from "@/hooks/commerce/extra";

import { Extra } from "@/types/common/commerce/extra/extra.type";

import { BookingType } from "@/types/common/commerce/booking-type";

import { ExtraType } from "@/types/common/commerce/extra/extra-type.type";

import { Currency } from "@/types/location/currency";

import { ExtraFormSchema } from "./form/schema";

import { ExtraCreateInput, extraFormConfig, ExtraUpdateInput } from "./config";

import BasicStep from "./step/basic.step";

import BookingTypeStep from "./step/booking-type.step";

import ExtraStep from "./step/extra.step";

import PricingStep from "./step/pricing.step";

import StatusStep from "./step/status.step";
import MediaStep from "./step/media.step";
import { MediaAsset } from "@/types/common/catalog/media-asset";

interface ExtraFormProps {
  initialData?: Extra;

  bookingTypeData: BookingType[];

  extraTypeData: ExtraType[];

  currencyData: Currency[];
  mediaAssetData: MediaAsset[];
  redirect?: boolean;
}

export default function ExtraForm({
  initialData,
  bookingTypeData,
  extraTypeData,
  currencyData,
  mediaAssetData,
  redirect = true,
}: ExtraFormProps) {
  const createExtra = useCreateExtra();

  const updateExtra = useUpdateExtra();

  return (
    <EntityFormWizard<
      ExtraFormSchema,
      Extra,
      ExtraCreateInput,
      ExtraUpdateInput
    >
      initialData={initialData}
      redirect={redirect}
      config={extraFormConfig}
      createMutation={createExtra}
      updateMutation={updateExtra}
    >
      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <BookingTypeStep bookingTypeData={bookingTypeData} />
      </FormWizardStep>

      <FormWizardStep index={2}>
        <ExtraStep
          bookingTypeData={bookingTypeData}
          extraTypeData={extraTypeData}
        />
      </FormWizardStep>

      <FormWizardStep index={3}>
        <PricingStep currencyData={currencyData} />
      </FormWizardStep>

      <FormWizardStep index={4}>
        <MediaStep
          mediaAssetData={mediaAssetData}
          bookingTypeData={bookingTypeData}
        />
      </FormWizardStep>

      <FormWizardStep index={5}>
        <StatusStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
