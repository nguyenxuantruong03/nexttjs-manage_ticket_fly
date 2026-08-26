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

import { extraFeeTypeSteps } from "./step/steps";

import BasicStep from "./step/basic.step";

import BookingTypeStep from "./step/booking-type.step";

import StatusStep from "./step/status.step";

import { initExtraFeeTypeFormValues } from "./form/init-value";

import { extraFeeTypeDefaultValues } from "./form/default-values";

import { ExtraFeeTypeFormSchema, schema } from "./form/schema";

import {
  useCreateExtraFeeType,
  useUpdateExtraFeeType,
} from "@/hooks/commerce/extra-fee-type";

import { BookingType } from "@/types/common/commerce/booking-type";

import { ExtraFeeType } from "@/types/common/commerce/extra-fee-type.type";

// ======================================================
// PROPS
// ======================================================

interface ExtraFeeTypeFormProps {
  initialData?: ExtraFeeType;

  bookingTypeData: BookingType[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function ExtraFeeTypeForm({
  initialData,
  bookingTypeData,
}: ExtraFeeTypeFormProps) {
  const submit = useSubmit();

  const { setDirty } = useFormPage();

  const createExtraFeeType = useCreateExtraFeeType();

  const updateExtraFeeType = useUpdateExtraFeeType();

  const searchParams = useSearchParams();

  // ======================================================
  // DRAFT
  // ======================================================

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  // ======================================================
  // FORM
  // ======================================================

  const { form, isUpdate } = useAppForm<ExtraFeeTypeFormSchema>({
    schema,

    defaultValues: initialData
      ? initExtraFeeTypeFormValues(initialData)
      : extraFeeTypeDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  // ======================================================
  // DRAFT
  // ======================================================

  const { clearDraft } = useFormDraft({
    form,

    entity: DraftEntity.ExtraFeeType,

    draftId: currentDraftId,
  });

  // ======================================================
  // DIRTY STATE
  // ======================================================

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  // ======================================================
  // SUBMIT
  // ======================================================

  const onSubmit = async (values: ExtraFeeTypeFormSchema) => {
    await submit({
      mutation: initialData
        ? updateExtraFeeType.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createExtraFeeType.mutateAsync(values),

      success: isUpdate ? "Extra fee type updated" : "Extra fee type created",

      redirect: "/commerce/extra-fee-type",
    });

    clearDraft();

    form.reset(extraFeeTypeDefaultValues);
  };

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
      <FormWizard
        form={form}
        steps={extraFeeTypeSteps}
        loading={isSubmitting}
        unlockAll={!!initialData}
      >
        <FormWizardHeader steps={extraFeeTypeSteps} />

        <FormWizardContent>
          {/* ======================================================
              STEP 1 - BASIC
          ====================================================== */}

          <FormWizardStep index={0}>
            <BasicStep />
          </FormWizardStep>

          {/* ======================================================
              STEP 2 - BOOKING TYPE
          ====================================================== */}

          <FormWizardStep index={1}>
            <BookingTypeStep bookingTypeData={bookingTypeData} />
          </FormWizardStep>

          {/* ======================================================
              STEP 3 - STATUS
          ====================================================== */}

          <FormWizardStep index={2}>
            <StatusStep />
          </FormWizardStep>
        </FormWizardContent>

        <FormWizardFooter form={form} onSubmit={onSubmit} />
      </FormWizard>
    </AppForm>
  );
}
