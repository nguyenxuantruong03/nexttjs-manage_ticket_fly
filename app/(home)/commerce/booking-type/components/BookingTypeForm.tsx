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

import { bookingTypeSteps } from "./step/steps";
import BasicStep from "./step/basic.step";
import StatusStep from "./step/status.step";

import { initBookingTypeFormValues } from "./form/init-value";
import { bookingTypeDefaultValues } from "./form/default-values";
import { BookingTypeFormSchema, schema } from "./form/schema";

import {
  useCreateBookingType,
  useUpdateBookingType,
} from "@/hooks/commerce/booking-type";
import { BookingType } from "@/types/common/commerce/booking-type";


interface BookingTypeFormProps {
  initialData?: BookingType;
}

export default function BookingTypeForm({
  initialData,
}: BookingTypeFormProps) {
  const submit = useSubmit();
  const { setDirty } = useFormPage();

  const createBookingType = useCreateBookingType();
  const updateBookingType = useUpdateBookingType();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<BookingTypeFormSchema>({
    schema,
    defaultValues: initialData
      ? initBookingTypeFormValues(initialData)
      : bookingTypeDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.BookingType,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = async (values: BookingTypeFormSchema) => {
    await submit({
      mutation: initialData
        ? updateBookingType.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createBookingType.mutateAsync(values),

      success: isUpdate
        ? "Booking type updated"
        : "Booking type created",

      redirect: "/features/booking-type",
    });

    clearDraft();

    form.reset(bookingTypeDefaultValues);
  };

  return (
    <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
      <FormWizard
        form={form}
        steps={bookingTypeSteps}
        loading={isSubmitting}
        unlockAll={!!initialData}
      >
        <FormWizardHeader steps={bookingTypeSteps} />

        <FormWizardContent>
          <FormWizardStep index={0}>
            <BasicStep />
          </FormWizardStep>

          <FormWizardStep index={1}>
            <StatusStep />
          </FormWizardStep>
        </FormWizardContent>

        <FormWizardFooter form={form} onSubmit={onSubmit} />
      </FormWizard>
    </AppForm>
  );
}