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

import { extraTypeSteps } from "./step/steps";
import BasicStep from "./step/basic.step";
import StatusStep from "./step/status.step";

import { initExtraTypeFormValues } from "./form/init-value";
import { extraTypeDefaultValues } from "./form/default-values";
import { ExtraTypeFormSchema, schema } from "./form/schema";

import {
  useCreateExtraType,
  useUpdateExtraType,
} from "@/hooks/commerce/extra-type";
import { ExtraType } from "@/types/common/commerce/extra/extra-type.type";
import { BookingType } from "@/types/common/commerce/booking-type";
import BookingTypeStep from "./step/booking-type.step";

interface ExtraTypeFormProps {
  initialData?: ExtraType;
  bookingTypeData: BookingType[];
}

export default function ExtraTypeForm({
  initialData,
  bookingTypeData,
}: ExtraTypeFormProps) {
  const submit = useSubmit();
  const { setDirty } = useFormPage();

  const createExtraType = useCreateExtraType();
  const updateExtraType = useUpdateExtraType();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<ExtraTypeFormSchema>({
    schema,
    defaultValues: initialData
      ? initExtraTypeFormValues(initialData)
      : extraTypeDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.ExtraType,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = async (values: ExtraTypeFormSchema) => {
    await submit({
      mutation: initialData
        ? updateExtraType.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createExtraType.mutateAsync(values),

      success: isUpdate ? "Extra type updated" : "Extra type created",

      redirect: "/commerce/extra-type",
    });

    clearDraft();

    form.reset(extraTypeDefaultValues);
  };

  return (
    <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
      <FormWizard
        form={form}
        steps={extraTypeSteps}
        loading={isSubmitting}
        unlockAll={!!initialData}
      >
        <FormWizardHeader steps={extraTypeSteps} />

        <FormWizardContent>
          <FormWizardStep index={0}>
            <BasicStep />
          </FormWizardStep>

          <FormWizardStep index={1}>
            <BookingTypeStep bookingTypeData={bookingTypeData} />
          </FormWizardStep>

          <FormWizardStep index={2}>
            <StatusStep />
          </FormWizardStep>
        </FormWizardContent>

        <FormWizardFooter form={form} onSubmit={onSubmit} />
      </FormWizard>
    </AppForm>
  );
}
