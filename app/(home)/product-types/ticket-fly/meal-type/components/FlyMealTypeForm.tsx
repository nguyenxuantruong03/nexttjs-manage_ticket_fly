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
import StatusStep from "./step/status.step";

import { useEffect, useMemo, useRef } from "react";
import { useFormPage } from "@/components/form/form-context";
import { useSearchParams } from "next/navigation";

import { useFormDraft } from "@/hooks/useFormDraft";
import { DraftEntity } from "@/components/daft/draft-config";

import ConfirmRedirectDialog from "@/components/common/custom/confirm-redirect-dialog";
import { useConfirmDialogStorage } from "@/hooks/localStorage/useConfirmDialogStorage";

import { FlyMealTypeFormSchema, FlyMealTypeSchema } from "./form/schema";

import { flyMealTypeDefaultValues } from "./form/default-values";
import { initFlyMealTypeFormValues } from "./form/init-value";
import { flyMealTypeSteps } from "./step/steps";

import {
  useCreateFlyMealType,
  useUpdateFlyMealType,
} from "@/hooks/product-types/ticket-fly/meal-type";

import { FlyMealType } from "@/types/product-types/ticket-fly/fly-meal-type";

interface FlyMealTypeFormProps {
  initialData?: FlyMealType;
  redirect?: boolean;
}

export default function FlyMealTypeForm({
  initialData,
  redirect = true,
}: FlyMealTypeFormProps) {
  const redirectDefault = "/product-types/ticket-fly/meal-type";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const searchParams = useSearchParams();

  const submit = useSubmit();

  const { setDirty } = useFormPage();

  const createFlyMealType = useCreateFlyMealType();

  const updateFlyMealType = useUpdateFlyMealType();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<FlyMealTypeFormSchema>({
    schema: FlyMealTypeSchema,

    defaultValues: initialData
      ? initFlyMealTypeFormValues(initialData)
      : flyMealTypeDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,

    entity: DraftEntity.FlyMealType,

    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: FlyMealTypeFormSchema) => {
    submit({
      mutation: initialData
        ? updateFlyMealType.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createFlyMealType.mutateAsync(values),

      success: isUpdate ? "Fly meal type updated" : "Fly meal type created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();

      form.reset(flyMealTypeDefaultValues);

      resetWizardRef.current?.();

      return;
    }

    form.reset(flyMealTypeDefaultValues);
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
          steps={flyMealTypeSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={flyMealTypeSteps} />

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
    </>
  );
}
