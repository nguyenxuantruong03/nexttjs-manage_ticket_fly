"use client";

import { AppForm } from "@/components/form/form-data";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";
import { useSubmit } from "@/hooks/useSubmit";

import BasicStep from "./step/basic.step";
import LocationStep from "./step/status.step";

import { useEffect, useMemo, useRef } from "react";
import { useFormPage } from "@/components/form/form-context";
import { useSearchParams } from "next/navigation";
import { useFormDraft } from "@/hooks/useFormDraft";
import { DraftEntity } from "@/components/daft/draft-config";
import { Language } from "@/types/bookings/location/language";
import { LanguageFormSchema, LanguageSchema } from "./form/schema";
import { languageSteps } from "./step/steps";
import {
  useCreateLanguage,
  useUpdateLanguage,
} from "@/hooks/location/language";
import { initLanguageFormValues } from "./form/init-value";
import { languageDefaultValues } from "./form/default-values";
import { useConfirmDialogStorage } from "@/hooks/localStorage/useConfirmDialogStorage";
import ConfirmRedirectDialog from "@/components/common/custom/confirm-redirect-dialog";
interface LanguageFormProps {
  initialData?: Language;
  redirect?: boolean;
}

export default function LanguageForm({
  initialData,
  redirect = true,
}: LanguageFormProps) {
  const redirectDefault = "/language";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const submit = useSubmit();
  const { setDirty } = useFormPage();
  const createLanguage = useCreateLanguage();
  const updateLanguage = useUpdateLanguage();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, mode, isUpdate } = useAppForm<LanguageFormSchema>({
    schema: LanguageSchema,
    defaultValues: initialData
      ? initLanguageFormValues(initialData)
      : languageDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.Language,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty]);

  const onSubmit = (values: LanguageFormSchema) => {
    submit({
      mutation: initialData
        ? updateLanguage.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createLanguage.mutateAsync(values),
      success: isUpdate ? "Language updated" : "Language created",
      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(languageDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(languageDefaultValues);
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
          steps={languageSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={languageSteps} />

          <FormWizardContent>
            <FormWizardStep index={0}>
              <BasicStep />
            </FormWizardStep>

            <FormWizardStep index={1}>
              <LocationStep />
            </FormWizardStep>
          </FormWizardContent>

          <FormWizardFooter form={form} onSubmit={onSubmit} />
        </FormWizard>
      </AppForm>
    </>
  );
}
