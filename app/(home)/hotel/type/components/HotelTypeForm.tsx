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

import { TypeSchema, TypeFormSchema } from "./form/schema";
import { typeDefaultValues } from "./form/default-values";
import { initTypeFormValues } from "./form/init-value";
import { typeSteps } from "./step/steps";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  useCreateHotelType,
  useUpdateHotelType,
} from "@/hooks/hotel/hotel-type";
import { HotelType } from "@/types/bookings/hotel/core/hotel-information.types";
import SettingsStep from "./step/setting.step";

interface TypeFormProps {
  initialData?: HotelType;
  redirect?: boolean;
}

export default function TypeForm({
  initialData,
  redirect = true,
}: TypeFormProps) {
  const redirectDefault = "hotel/type";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const { setDirty } = useFormPage();

  const submit = useSubmit();

  const searchParams = useSearchParams();

  const createType = useCreateHotelType();
  const updateType = useUpdateHotelType();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<TypeFormSchema>({
    schema: TypeSchema,
    defaultValues: initialData
      ? initTypeFormValues(initialData)
      : typeDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.HotelType,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: TypeFormSchema) => {
    submit({
      mutation: initialData
        ? updateType.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createType.mutateAsync(values),

      success: isUpdate ? "Type updated" : "Type created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(typeDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(typeDefaultValues);
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
          steps={typeSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={typeSteps} />

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
