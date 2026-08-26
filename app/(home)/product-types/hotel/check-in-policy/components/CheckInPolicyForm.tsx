"use client";

import { useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "next/navigation";

import { AppForm } from "@/components/form/form-data";
import ConfirmRedirectDialog from "@/components/common/custom/confirm-redirect-dialog";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";
import { useSubmit } from "@/hooks/useSubmit";
import { useFormDraft } from "@/hooks/useFormDraft";
import { useFormPage } from "@/components/form/form-context";
import { useConfirmDialogStorage } from "@/hooks/localStorage/useConfirmDialogStorage";

import {
  HotelCheckInPolicySchema,
  HotelCheckInPolicySchemaForm,
} from "./form/schema";
import { hotelCheckInPolicyDefaultValues } from "./form/default-values";
import { initHotelCheckInPolicyFormValues } from "./form/init-value";
import { hotelCheckInPolicySteps } from "./step/steps";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  useCreateHotelCheckInPolicy,
  useUpdateHotelCheckInPolicy,
} from "@/hooks/product-types/hotel/hotel-check-in-policy";
import CheckOutStep from "./step/check-out.step";
import CheckInStep from "./step/check-in.step";
import BasicStep from "./step/basic.step";
import { HotelCheckInPolicy } from "@/types/product-types/hotel/hotel-check-in-policy.type";
import { Hotel } from "@/types/product-types/hotel/core/hotel.types";

interface HotelCheckInPolicyFormProps {
  initialData?: HotelCheckInPolicy;
  hotelData: Hotel[];
  redirect?: boolean;
}

export default function HotelCheckInPolicyForm({
  initialData,
  hotelData,
  redirect = true,
}: HotelCheckInPolicyFormProps) {
  const redirectDefault = "/hotel/check-in-policy";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const { setDirty } = useFormPage();

  const submit = useSubmit();

  const searchParams = useSearchParams();

  const createHotelCheckInPolicy = useCreateHotelCheckInPolicy();
  const updateHotelCheckInPolicy = useUpdateHotelCheckInPolicy();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<HotelCheckInPolicySchemaForm>({
    schema: HotelCheckInPolicySchema,
    defaultValues: initialData
      ? initHotelCheckInPolicyFormValues(initialData)
      : hotelCheckInPolicyDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.HotelCheckInPolicy,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: HotelCheckInPolicySchemaForm) => {
    submit({
      mutation: initialData
        ? updateHotelCheckInPolicy.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createHotelCheckInPolicy.mutateAsync(values),

      success: isUpdate ? "Check-in policy updated" : "Check-in policy created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(hotelCheckInPolicyDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(hotelCheckInPolicyDefaultValues);
  };

  return (
    <>
      <ConfirmRedirectDialog
        redirectDefault={redirectDefault}
        confirmDialog={confirmDialog}
        shouldShow={shouldShow}
        cancelDialog={cancelDialog}
      />

      <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
        <FormWizard
          form={form}
          steps={hotelCheckInPolicySteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={hotelCheckInPolicySteps} />

          <FormWizardContent>
            <FormWizardStep index={0}>
              <BasicStep hotelData={hotelData} />
            </FormWizardStep>

            <FormWizardStep index={1}>
              <CheckInStep />
            </FormWizardStep>

            <FormWizardStep index={2}>
              <CheckOutStep />
            </FormWizardStep>
          </FormWizardContent>

          <FormWizardFooter form={form} onSubmit={onSubmit} />
        </FormWizard>
      </AppForm>
    </>
  );
}
