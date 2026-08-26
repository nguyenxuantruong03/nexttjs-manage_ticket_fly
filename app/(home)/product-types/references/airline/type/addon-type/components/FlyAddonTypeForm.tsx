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

import { FlyAddonTypeFormSchema, FlyAddonTypeSchema } from "./form/schema";

import { flyAddonTypeDefaultValues } from "./form/default-values";
import { initFlyAddonTypeFormValues } from "./form/init-value";
import { flyAddonTypeSteps } from "./step/steps";

import {
  useCreateFlyAddonType,
  useUpdateFlyAddonType,
} from "@/hooks/product-types/references/airline/addon-type";
import { FlyAddonType } from "@/types/product-types/references/airline/fly-addon-type";

interface FlyAddonTypeFormProps {
  initialData?: FlyAddonType;
  redirect?: boolean;
}

export default function FlyAddonTypeForm({
  initialData,
  redirect = true,
}: FlyAddonTypeFormProps) {
  const redirectDefault = "/product-types/ticket-fly/addon-type";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const searchParams = useSearchParams();

  const submit = useSubmit();

  const { setDirty } = useFormPage();

  const createFlyAddonType = useCreateFlyAddonType();

  const updateFlyAddonType = useUpdateFlyAddonType();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<FlyAddonTypeFormSchema>({
    schema: FlyAddonTypeSchema,

    defaultValues: initialData
      ? initFlyAddonTypeFormValues(initialData)
      : flyAddonTypeDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.FlyAddonType,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: FlyAddonTypeFormSchema) => {
    submit({
      mutation: initialData
        ? updateFlyAddonType.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createFlyAddonType.mutateAsync(values),

      success: isUpdate ? "Fly addon type updated" : "Fly addon type created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();

      form.reset(flyAddonTypeDefaultValues);

      resetWizardRef.current?.();

      return;
    }

    form.reset(flyAddonTypeDefaultValues);
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
          steps={flyAddonTypeSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={flyAddonTypeSteps} />

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
