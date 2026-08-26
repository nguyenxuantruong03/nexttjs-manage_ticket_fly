"use client";

import { useEffect, useMemo } from "react";

import { useSearchParams } from "next/navigation";

import { AppForm } from "@/components/form/form-data";

import { useFormPage } from "@/components/form/form-context";

import { DraftEntity } from "@/components/daft/draft-config";

import FormWizard from "@/components/form/wizard/FormWizard";

import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";

import FormWizardContent from "@/components/form/wizard/FormWizardContent";

import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";

import { useSubmit } from "@/hooks/useSubmit";

import { useFormDraft } from "@/hooks/useFormDraft";

import { promotionRuleSteps } from "./step/steps";

import PromotionStep from "./step/promotion.step";

import BookingTypeStep from "./step/booking-type.step";

import DiscountStep from "./step/discount.step";

import AmountStep from "./step/amount.step";

import { initPromotionRuleFormValues } from "./form/init-value";

import { promotionRuleDefaultValues } from "./form/default-values";

import { PromotionRuleFormSchema, schema } from "./form/schema";

import {
  useCreatePromotionRule,
  useUpdatePromotionRule,
} from "@/hooks/commerce/promotion-rule";

import { PromotionRule } from "@/types/common/commerce/promotion/promotion-rule";

import { Promotion } from "@/types/common/commerce/promotion/promotion";

import { BookingType } from "@/types/common/commerce/booking-type";

interface PromotionRuleFormProps {
  initialData?: PromotionRule;

  promotionData: Promotion[];

  bookingTypeData: BookingType[];
}

export default function PromotionRuleForm({
  initialData,
  bookingTypeData,
  promotionData
}: PromotionRuleFormProps) {
  const submit = useSubmit();

  const { setDirty } = useFormPage();

  const createPromotionRule = useCreatePromotionRule();

  const updatePromotionRule = useUpdatePromotionRule();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<PromotionRuleFormSchema>({
    schema,

    defaultValues: initialData
      ? initPromotionRuleFormValues(initialData)
      : promotionRuleDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.PromotionRule,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = async (values: PromotionRuleFormSchema) => {
    await submit({
      mutation: initialData
        ? updatePromotionRule.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createPromotionRule.mutateAsync(values),

      success: isUpdate ? "Promotion rule updated" : "Promotion rule created",

      redirect: "/commerce/promotion-rule",
    });

    clearDraft();

    form.reset(promotionRuleDefaultValues);
  };

  return (
    <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
      <FormWizard
        form={form}
        steps={promotionRuleSteps}
        loading={isSubmitting}
        unlockAll={!!initialData}
      >
        <FormWizardHeader steps={promotionRuleSteps} />

        <FormWizardContent>
          {/* ======================================================
              PROMOTION
          ====================================================== */}

          <FormWizardStep index={0}>
            <PromotionStep
              bookingTypeData={bookingTypeData}
              promotionData={promotionData}
            />
          </FormWizardStep>

          {/* ======================================================
              BOOKING TYPE
          ====================================================== */}

          <FormWizardStep index={1}>
            <BookingTypeStep bookingTypeData={bookingTypeData} />
          </FormWizardStep>

          {/* ======================================================
              DISCOUNT
          ====================================================== */}

          <FormWizardStep index={2}>
            <DiscountStep />
          </FormWizardStep>

          {/* ======================================================
              AMOUNT
          ====================================================== */}

          <FormWizardStep index={3}>
            <AmountStep />
          </FormWizardStep>
        </FormWizardContent>

        <FormWizardFooter form={form} onSubmit={onSubmit} />
      </FormWizard>
    </AppForm>
  );
}
