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

import { FlySeatTypeFormSchema, FlySeatTypeSchema } from "./form/schema";

import { flySeatTypeDefaultValues } from "./form/default-values";
import { initFlySeatTypeFormValues } from "./form/init-value";
import { flySeatTypeSteps } from "./step/steps";

import {
  useCreateFlySeatType,
  useUpdateFlySeatType,
} from "@/hooks/product-types/ticket-fly/seat-type";

import { FlySeatType } from "@/types/product-types/ticket-fly/fly-seat-type";

interface FlySeatTypeFormProps {
  initialData?: FlySeatType;
  redirect?: boolean;
}

export default function FlySeatTypeForm({
  initialData,
  redirect = true,
}: FlySeatTypeFormProps) {
  const redirectDefault = "/product-types/ticket-fly/seat-type";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const searchParams = useSearchParams();

  const submit = useSubmit();

  const { setDirty } = useFormPage();

  const createFlySeatType = useCreateFlySeatType();

  const updateFlySeatType = useUpdateFlySeatType();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<FlySeatTypeFormSchema>({
    schema: FlySeatTypeSchema,

    defaultValues: initialData
      ? initFlySeatTypeFormValues(initialData)
      : flySeatTypeDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,

    entity: DraftEntity.FlySeatType,

    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: FlySeatTypeFormSchema) => {
    submit({
      mutation: initialData
        ? updateFlySeatType.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createFlySeatType.mutateAsync(values),

      success: isUpdate
        ? "Fly seat type updated"
        : "Fly seat type created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();

      form.reset(flySeatTypeDefaultValues);

      resetWizardRef.current?.();

      return;
    }

    form.reset(flySeatTypeDefaultValues);
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
          steps={flySeatTypeSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={flySeatTypeSteps} />

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