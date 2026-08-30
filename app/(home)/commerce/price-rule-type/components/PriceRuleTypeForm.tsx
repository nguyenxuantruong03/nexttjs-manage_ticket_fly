"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreatePriceRuleType,
  useUpdatePriceRuleType,
} from "@/hooks/commerce/price-rule-type";

import { BookingType } from "@/types/common/commerce/booking-type";

import { PriceRuleType } from "@/types/common/commerce/price-rule-type.type";

import { PriceRuleTypeFormSchema } from "./form/schema";

import { priceRuleTypeFormConfig } from "./config";

import BasicStep from "./step/basic.step";

import BookingTypeStep from "./step/booking-type.step";

import StatusStep from "./step/status.step";

interface PriceRuleTypeFormProps {
  initialData?: PriceRuleType;

  bookingTypeData: BookingType[];

  redirect?: boolean;
}

export default function PriceRuleTypeForm({
  initialData,
  bookingTypeData,
  redirect = true,
}: PriceRuleTypeFormProps) {
  const createPriceRuleType = useCreatePriceRuleType();

  const updatePriceRuleType = useUpdatePriceRuleType();

  return (
    <EntityFormWizard<PriceRuleTypeFormSchema, PriceRuleType>
      initialData={initialData}
      redirect={redirect}
      config={priceRuleTypeFormConfig}
      createMutation={createPriceRuleType}
      updateMutation={updatePriceRuleType}
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
