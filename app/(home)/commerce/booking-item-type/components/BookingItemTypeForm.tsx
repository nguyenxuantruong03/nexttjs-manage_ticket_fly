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

import BasicStep from "./step/basic.step";
import BookingTypeStep from "./step/booking-type.step";
import StatusStep from "./step/status.step";

import { initBookingItemTypeFormValues } from "./form/init-value";
import { bookingItemTypeDefaultValues } from "./form/default-values";
import { BookingItemTypeFormSchema, schema } from "./form/schema";

import {
  useCreateBookingItemType,
  useUpdateBookingItemType,
} from "@/hooks/commerce/booking-item-type";

import { BookingType } from "@/types/common/commerce/booking-type";
import { BookingItemType } from "@/types/common/commerce/booking-item-type.type";
import { bookingItemTypeSteps } from "./step/steps";

interface BookingItemTypeFormProps {
  initialData?: BookingItemType;
  bookingTypeData: BookingType[];
}

export default function BookingItemTypeForm({
  initialData,
  bookingTypeData,
}: BookingItemTypeFormProps) {
  const submit = useSubmit();

  const { setDirty } = useFormPage();

  const createBookingItemType = useCreateBookingItemType();
  const updateBookingItemType = useUpdateBookingItemType();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<BookingItemTypeFormSchema>({
    schema,
    defaultValues: initialData
      ? initBookingItemTypeFormValues(initialData)
      : bookingItemTypeDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.BookingItemType,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = async (values: BookingItemTypeFormSchema) => {
    await submit({
      mutation: initialData
        ? updateBookingItemType.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createBookingItemType.mutateAsync(values),

      success: isUpdate
        ? "Booking item type updated"
        : "Booking item type created",

      redirect: "/commerce/booking-item-type",
    });

    clearDraft();
    form.reset(bookingItemTypeDefaultValues);
  };

  return (
    <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
      <FormWizard
        form={form}
        steps={bookingItemTypeSteps}
        loading={isSubmitting}
        unlockAll={!!initialData}
      >
        <FormWizardHeader steps={bookingItemTypeSteps} />

        <FormWizardContent>
          {/* ======================================================
              STEP 0 - BASIC
          ====================================================== */}
          <FormWizardStep index={0}>
            <BasicStep />
          </FormWizardStep>

          {/* ======================================================
              STEP 1 - BOOKING TYPE
          ====================================================== */}
          <FormWizardStep index={1}>
            <BookingTypeStep bookingTypeData={bookingTypeData} />
          </FormWizardStep>

          {/* ======================================================
              STEP 2 - STATUS
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
