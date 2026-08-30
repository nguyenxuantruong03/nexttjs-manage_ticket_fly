"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useCreateExtra, useUpdateExtra } from "@/hooks/commerce/extra";

import { Extra } from "@/types/common/commerce/extra/extra.type";

import { BookingType } from "@/types/common/commerce/booking-type";

import { ExtraType } from "@/types/common/commerce/extra/extra-type.type";

import { Currency } from "@/types/location/currency";

import { ExtraFormSchema } from "./form/schema";

import { extraFormConfig } from "./config";

import BasicStep from "./step/basic.step";

import BookingTypeStep from "./step/booking-type.step";

import ExtraStep from "./step/extra.step";

import PricingStep from "./step/pricing.step";

import StatusStep from "./step/status.step";

interface ExtraFormProps {
  initialData?: Extra;

  bookingTypeData: BookingType[];

  extraTypeData: ExtraType[];

  currencyData: Currency[];

  redirect?: boolean;
}

export default function ExtraForm({
  initialData,
  bookingTypeData,
  extraTypeData,
  currencyData,
  redirect = true,
}: ExtraFormProps) {
  const createExtra = useCreateExtra();

  const updateExtra = useUpdateExtra();

  return (
    <EntityFormWizard<ExtraFormSchema, Extra>
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
        <StatusStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
