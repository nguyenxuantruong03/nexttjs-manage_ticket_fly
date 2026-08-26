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

import { FlyDelayReasonFormSchema, FlyDelayReasonSchema } from "./form/schema";

import { flyDelayReasonDefaultValues } from "./form/default-values";
import { initFlyDelayReasonFormValues } from "./form/init-value";
import { flyDelayReasonSteps } from "./step/steps";

import {
  useCreateFlyDelayReason,
  useUpdateFlyDelayReason,
} from "@/hooks/product-types/ticket-fly/delay-reason";

import { FlyDelayReason } from "@/types/product-types/ticket-fly/fly-delay-reason";

interface FlyDelayReasonFormProps {
  initialData?: FlyDelayReason;
  redirect?: boolean;
}

export default function FlyDelayReasonForm({
  initialData,
  redirect = true,
}: FlyDelayReasonFormProps) {
  const redirectDefault = "/product-types/ticket-fly/delay-reason";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const searchParams = useSearchParams();

  const submit = useSubmit();

  const { setDirty } = useFormPage();

  const createFlyDelayReason = useCreateFlyDelayReason();

  const updateFlyDelayReason = useUpdateFlyDelayReason();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<FlyDelayReasonFormSchema>({
    schema: FlyDelayReasonSchema,

    defaultValues: initialData
      ? initFlyDelayReasonFormValues(initialData)
      : flyDelayReasonDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,

    entity: DraftEntity.FlyDelayReason,

    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: FlyDelayReasonFormSchema) => {
    submit({
      mutation: initialData
        ? updateFlyDelayReason.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createFlyDelayReason.mutateAsync(values),

      success: isUpdate
        ? "Fly delay reason updated"
        : "Fly delay reason created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();

      form.reset(flyDelayReasonDefaultValues);

      resetWizardRef.current?.();

      return;
    }

    form.reset(flyDelayReasonDefaultValues);
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
          steps={flyDelayReasonSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={flyDelayReasonSteps} />

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
