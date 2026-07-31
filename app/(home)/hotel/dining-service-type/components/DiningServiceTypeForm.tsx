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

import BasicStep from "./step/basic.step";

import {
  DiningServiceTypeSchema,
  DiningServiceTypeFormSchema,
} from "./form/schema";
import { diningServiceTypeDefaultValues } from "./form/default-values";
import { initDiningServiceTypeFormValues } from "./form/init-value";
import { diningServiceTypeSteps } from "./step/steps";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  useCreateHotelDiningServiceType,
  useUpdateHotelDiningServiceType,
} from "@/hooks/hotel/hotel-dining-service-type";
import { DiningServiceType } from "@/types/bookings/hotel/service/dinner-option.type";
import SettingsStep from "./step/setting.step";

interface DiningServiceTypeFormProps {
  initialData?: DiningServiceType;
  redirect?: boolean;
}

export default function DiningServiceTypeForm({
  initialData,
  redirect = true,
}: DiningServiceTypeFormProps) {
  const redirectDefault = "hotel/dining-service-type";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const { setDirty } = useFormPage();

  const submit = useSubmit();

  const searchParams = useSearchParams();

  const createDiningServiceType = useCreateHotelDiningServiceType();
  const updateDiningServiceType = useUpdateHotelDiningServiceType();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<DiningServiceTypeFormSchema>({
    schema: DiningServiceTypeSchema,
    defaultValues: initialData
      ? initDiningServiceTypeFormValues(initialData)
      : diningServiceTypeDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.HotelDiningServiceType,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: DiningServiceTypeFormSchema) => {
    submit({
      mutation: initialData
        ? updateDiningServiceType.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createDiningServiceType.mutateAsync(values),

      success: isUpdate
        ? "DiningServiceType updated"
        : "DiningServiceType created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(diningServiceTypeDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(diningServiceTypeDefaultValues);
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
          steps={diningServiceTypeSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={diningServiceTypeSteps} />

          <FormWizardContent>
            <FormWizardStep index={0}>
              <BasicStep />
            </FormWizardStep>

            <FormWizardStep index={1}>
              <SettingsStep />
            </FormWizardStep>
          </FormWizardContent>

          <FormWizardFooter form={form} onSubmit={onSubmit} />
        </FormWizard>
      </AppForm>
    </>
  );
}
