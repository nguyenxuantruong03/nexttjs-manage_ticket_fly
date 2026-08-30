"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreatePromotion,
  useUpdatePromotion,
} from "@/hooks/commerce/promotion";

import { BookingType } from "@/types/common/commerce/booking-type";

import { Promotion } from "@/types/common/commerce/promotion/promotion";

import { PromotionFormSchema } from "./form/schema";

import { promotionFormConfig } from "./config";

import BasicStep from "./step/basic.step";

import StatusStep from "./step/status.step";

import BookingTypeStep from "./step/booking-type.step";

import DateStep from "./step/date.step";

import UsageStep from "./step/usage.step";

interface PromotionFormProps {
  initialData?: Promotion;

  bookingTypeData: BookingType[];

  redirect?: boolean;
}

export default function PromotionForm({
  initialData,
  bookingTypeData,
  redirect = true,
}: PromotionFormProps) {
  const createPromotion = useCreatePromotion();

  const updatePromotion = useUpdatePromotion();

  return (
    <EntityFormWizard<PromotionFormSchema, Promotion>
      initialData={initialData}
      redirect={redirect}
      config={promotionFormConfig}
      createMutation={createPromotion}
      updateMutation={updatePromotion}
    >
      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <StatusStep />
      </FormWizardStep>

      <FormWizardStep index={2}>
        <BookingTypeStep bookingTypeData={bookingTypeData} />
      </FormWizardStep>

      <FormWizardStep index={3}>
        <DateStep />
      </FormWizardStep>

      <FormWizardStep index={4}>
        <UsageStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
