"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateExtraType,
  useUpdateExtraType,
} from "@/hooks/commerce/extra-type";

import { ExtraType } from "@/types/common/commerce/extra/extra-type.type";

import { BookingType } from "@/types/common/commerce/booking-type";

import { ExtraTypeFormSchema } from "./form/schema";

import { extraTypeFormConfig } from "./config";

import BasicStep from "./step/basic.step";

import StatusStep from "./step/status.step";

import BookingTypeStep from "./step/booking-type.step";

interface ExtraTypeFormProps {
  initialData?: ExtraType;

  bookingTypeData: BookingType[];

  redirect?: boolean;
}

export default function ExtraTypeForm({
  initialData,
  bookingTypeData,
  redirect = true,
}: ExtraTypeFormProps) {
  const createExtraType = useCreateExtraType();

  const updateExtraType = useUpdateExtraType();

  return (
    <EntityFormWizard<ExtraTypeFormSchema, ExtraType>
      initialData={initialData}
      redirect={redirect}
      config={extraTypeFormConfig}
      createMutation={createExtraType}
      updateMutation={updateExtraType}
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
