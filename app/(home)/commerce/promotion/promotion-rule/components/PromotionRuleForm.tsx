"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreatePromotionRule,
  useUpdatePromotionRule,
} from "@/hooks/commerce/promotion-rule";

import { PromotionRule } from "@/types/common/commerce/promotion/promotion-rule";

import { Promotion } from "@/types/common/commerce/promotion/promotion";

import { BookingType } from "@/types/common/commerce/booking-type";

import { PromotionRuleFormSchema } from "./form/schema";

import { promotionRuleFormConfig } from "./config";

import PromotionStep from "./step/promotion.step";

import BookingTypeStep from "./step/booking-type.step";

import DiscountStep from "./step/discount.step";

import AmountStep from "./step/amount.step";

interface PromotionRuleFormProps {
  initialData?: PromotionRule;

  promotionData: Promotion[];

  bookingTypeData: BookingType[];

  redirect?: boolean;
}

export default function PromotionRuleForm({
  initialData,
  bookingTypeData,
  promotionData,
  redirect = true,
}: PromotionRuleFormProps) {
  const createPromotionRule = useCreatePromotionRule();

  const updatePromotionRule = useUpdatePromotionRule();

  return (
    <EntityFormWizard<PromotionRuleFormSchema, PromotionRule>
      initialData={initialData}
      redirect={redirect}
      config={promotionRuleFormConfig}
      createMutation={createPromotionRule}
      updateMutation={updatePromotionRule}
    >
      <FormWizardStep index={0}>
        <PromotionStep
          bookingTypeData={bookingTypeData}
          promotionData={promotionData}
        />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <BookingTypeStep bookingTypeData={bookingTypeData} />
      </FormWizardStep>

      <FormWizardStep index={2}>
        <DiscountStep />
      </FormWizardStep>

      <FormWizardStep index={3}>
        <AmountStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
