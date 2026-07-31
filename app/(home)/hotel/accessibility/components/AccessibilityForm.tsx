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
  AccessibilitySchema,
  AccessibilityFormSchema,
} from "./form/schema";
import { accessibilityDefaultValues } from "./form/default-values";
import { initAccessibilityFormValues } from "./form/init-value";
import { accessibilitySteps } from "./step/steps";

import { DraftEntity } from "@/components/daft/draft-config";

import { Accessibility } from "@/types/bookings/hotel/hotel-detail.type";

import {
  useCreateHotelAccessibility,
  useUpdateHotelAccessibility,
} from "@/hooks/hotel/hotel-accessibility";

interface AccessibilityFormProps {
  initialData?: Accessibility;
  redirect?: boolean;
}

export default function AccessibilityForm({
  initialData,
  redirect = true,
}: AccessibilityFormProps) {
  const redirectDefault = "hotel/accessibility";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const { setDirty } = useFormPage();

  const submit = useSubmit();

  const searchParams = useSearchParams();

  const createAccessibility = useCreateHotelAccessibility();
  const updateAccessibility = useUpdateHotelAccessibility();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<AccessibilityFormSchema>({
    schema: AccessibilitySchema,
    defaultValues: initialData
      ? initAccessibilityFormValues(initialData)
      : accessibilityDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.HotelAccessibility,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: AccessibilityFormSchema) => {
    submit({
      mutation: initialData
        ? updateAccessibility.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createAccessibility.mutateAsync(values),

      success: isUpdate
        ? "Accessibility updated"
        : "Accessibility created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(accessibilityDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(accessibilityDefaultValues);
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
          steps={accessibilitySteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={accessibilitySteps} />

          <FormWizardContent>
            <FormWizardStep index={0}>
              <BasicStep  />
            </FormWizardStep>
          </FormWizardContent>

          <FormWizardFooter form={form} onSubmit={onSubmit} />
        </FormWizard>
      </AppForm>
    </>
  );
}