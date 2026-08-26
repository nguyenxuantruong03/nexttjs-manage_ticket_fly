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

import { promotionSteps } from "./step/steps";
import BasicStep from "./step/basic.step";
import StatusStep from "./step/status.step";
import BookingTypeStep from "./step/booking-type.step";
import DateStep from "./step/date.step";
import UsageStep from "./step/usage.step";

import { initPromotionFormValues } from "./form/init-value";
import { promotionDefaultValues } from "./form/default-values";
import { PromotionFormSchema, schema } from "./form/schema";

import {
  useCreatePromotion,
  useUpdatePromotion,
} from "@/hooks/commerce/promotion";

import { Promotion } from "@/types/common/commerce/promotion/promotion";
import { BookingType } from "@/types/common/commerce/booking-type";

interface PromotionFormProps {
  initialData?: Promotion;
  bookingTypeData: BookingType[];
}

export default function PromotionForm({
  initialData,
  bookingTypeData,
}: PromotionFormProps) {
  const submit = useSubmit();
  const { setDirty } = useFormPage();

  const createPromotion = useCreatePromotion();
  const updatePromotion = useUpdatePromotion();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<PromotionFormSchema>({
    schema,
    defaultValues: initialData
      ? initPromotionFormValues(initialData)
      : promotionDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.Promotion,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = async (values: PromotionFormSchema) => {
    await submit({
      mutation: initialData
        ? updatePromotion.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createPromotion.mutateAsync(values),

      success: isUpdate ? "Promotion updated" : "Promotion created",

      redirect: "/commerce/promotion",
    });

    clearDraft();

    form.reset(promotionDefaultValues);
  };

  return (
    <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
      <FormWizard
        form={form}
        steps={promotionSteps}
        loading={isSubmitting}
        unlockAll={!!initialData}
      >
        <FormWizardHeader steps={promotionSteps} />

        <FormWizardContent>
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
        </FormWizardContent>

        <FormWizardFooter form={form} onSubmit={onSubmit} />
      </FormWizard>
    </AppForm>
  );
}
