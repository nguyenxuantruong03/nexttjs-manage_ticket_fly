"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateExtraFeeType,
  useUpdateExtraFeeType,
} from "@/hooks/commerce/extra-fee-type";

import { BookingType } from "@/types/common/commerce/booking-type";

import { ExtraFeeType } from "@/types/common/commerce/extra-fee-type.type";

import { ExtraFeeTypeFormSchema } from "./form/schema";

import { extraFeeTypeFormConfig } from "./config";

import BasicStep from "./step/basic.step";

import BookingTypeStep from "./step/booking-type.step";

import StatusStep from "./step/status.step";

interface ExtraFeeTypeFormProps {
  initialData?: ExtraFeeType;

  bookingTypeData: BookingType[];

  redirect?: boolean;
}

export default function ExtraFeeTypeForm({
  initialData,
  bookingTypeData,
  redirect = true,
}: ExtraFeeTypeFormProps) {
  const createExtraFeeType = useCreateExtraFeeType();

  const updateExtraFeeType = useUpdateExtraFeeType();

  return (
    <EntityFormWizard<ExtraFeeTypeFormSchema, ExtraFeeType>
      initialData={initialData}
      redirect={redirect}
      config={extraFeeTypeFormConfig}
      createMutation={createExtraFeeType}
      updateMutation={updateExtraFeeType}
    >
      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <BookingTypeStep bookingTypeData={bookingTypeData} />
      </FormWizardStep>

      <FormWizardStep index={2}>
        <StatusStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
