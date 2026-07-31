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

import { ExtraTypeSchema, ExtraTypeFormSchema } from "./form/schema";
import { extraTypeDefaultValues } from "./form/default-values";
import { initExtraTypeFormValues } from "./form/init-value";
import { extraTypeSteps } from "./step/steps";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  useCreateHotelExtraType,
  useUpdateHotelExtraType,
} from "@/hooks/hotel/hotel-extra-type";
import { ExtraType } from "@/types/bookings/hotel/service/extra.type";
import SettingsStep from "./step/setting.step";

interface ExtraTypeFormProps {
  initialData?: ExtraType;
  redirect?: boolean;
}

export default function ExtraTypeForm({
  initialData,
  redirect = true,
}: ExtraTypeFormProps) {
  const redirectDefault = "hotel/extra-type";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const { setDirty } = useFormPage();

  const submit = useSubmit();

  const searchParams = useSearchParams();

  const createExtraType = useCreateHotelExtraType();
  const updateExtraType = useUpdateHotelExtraType();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<ExtraTypeFormSchema>({
    schema: ExtraTypeSchema,
    defaultValues: initialData
      ? initExtraTypeFormValues(initialData)
      : extraTypeDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.HotelExtraType,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: ExtraTypeFormSchema) => {
    submit({
      mutation: initialData
        ? updateExtraType.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createExtraType.mutateAsync(values),

      success: isUpdate ? "ExtraType updated" : "ExtraType created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(extraTypeDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(extraTypeDefaultValues);
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
          steps={extraTypeSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={extraTypeSteps} />

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
