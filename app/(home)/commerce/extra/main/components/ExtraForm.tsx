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

import { extraSteps } from "./step/steps";

import BasicStep from "./step/basic.step";

import BookingTypeStep from "./step/booking-type.step";

import ExtraStep from "./step/extra.step";

import PricingStep from "./step/pricing.step";

import StatusStep from "./step/status.step";

import { initExtraFormValues } from "./form/init-value";

import { extraDefaultValues } from "./form/default-values";

import { ExtraFormSchema, schema } from "./form/schema";

import { useCreateExtra, useUpdateExtra } from "@/hooks/commerce/extra";

import { Extra } from "@/types/common/commerce/extra/extra.type";

import { BookingType } from "@/types/common/commerce/booking-type";

import { Currency } from "@/types/location/currency";

import { ExtraType } from "@/types/common/commerce/extra/extra-type.type";

interface ExtraFormProps {
  initialData?: Extra;

  bookingTypeData: BookingType[];

  extraTypeData: ExtraType[];

  currencyData: Currency[];
}

export default function ExtraForm({
  initialData,
  bookingTypeData,
  extraTypeData,
  currencyData,
}: ExtraFormProps) {
  const submit = useSubmit();

  const { setDirty } = useFormPage();

  const createExtra = useCreateExtra();

  const updateExtra = useUpdateExtra();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<ExtraFormSchema>({
    schema,

    defaultValues: initialData
      ? initExtraFormValues(initialData)
      : extraDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,

    entity: DraftEntity.Extra,

    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = async (values: ExtraFormSchema) => {
    await submit({
      mutation: initialData
        ? updateExtra.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createExtra.mutateAsync(values),

      success: isUpdate ? "Extra updated" : "Extra created",

      redirect: "/commerce/extra",
    });

    clearDraft();

    form.reset(extraDefaultValues);
  };

  return (
    <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
      <FormWizard
        form={form}
        steps={extraSteps}
        loading={isSubmitting}
        unlockAll={!!initialData}
      >
        <FormWizardHeader steps={extraSteps} />

        <FormWizardContent>
          {/* 0 - Basic */}
          <FormWizardStep index={0}>
            <BasicStep />
          </FormWizardStep>

          {/* 1 - Booking Type */}
          <FormWizardStep index={1}>
            <BookingTypeStep bookingTypeData={bookingTypeData} />
          </FormWizardStep>

          {/* 2 - Extra Type */}
          <FormWizardStep index={2}>
            <ExtraStep
              bookingTypeData={bookingTypeData}
              extraTypeData={extraTypeData}
            />
          </FormWizardStep>

          {/* 3 - Pricing */}
          <FormWizardStep index={3}>
            <PricingStep currencyData={currencyData} />
          </FormWizardStep>

          {/* 4 - Status */}
          <FormWizardStep index={4}>
            <StatusStep />
          </FormWizardStep>
        </FormWizardContent>

        <FormWizardFooter form={form} onSubmit={onSubmit} />
      </FormWizard>
    </AppForm>
  );
}
