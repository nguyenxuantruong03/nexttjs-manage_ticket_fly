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
import StatusStep from "./step/status.step";

import { BusSeatTypeSchema, BusSeatTypeFormSchema } from "./form/schema";

import { busSeatTypeDefaultValues } from "./form/default-values";
import { initBusSeatTypeFormValues } from "./form/init-value";
import { busSeatTypeSteps } from "./step/steps";

import { DraftEntity } from "@/components/daft/draft-config";
import { BusSeatType } from "@/types/product-types/bus/bus-seat-type";
import {
  useCreateBusSeatType,
  useUpdateBusSeatType,
} from "@/hooks/product-types/bus/seat-type";

interface BusSeatTypeFormProps {
  initialData?: BusSeatType;
  redirect?: boolean;
}

export default function BusSeatTypeForm({
  initialData,
  redirect = true,
}: BusSeatTypeFormProps) {
  const redirectDefault = "/product-types/bus/seat-type";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const { setDirty } = useFormPage();

  const submit = useSubmit();

  const searchParams = useSearchParams();

  const createBusSeatType = useCreateBusSeatType();

  const updateBusSeatType = useUpdateBusSeatType();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<BusSeatTypeFormSchema>({
    schema: BusSeatTypeSchema,
    defaultValues: initialData
      ? initBusSeatTypeFormValues(initialData)
      : busSeatTypeDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.BusSeatType,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: BusSeatTypeFormSchema) => {
    submit({
      mutation: initialData
        ? updateBusSeatType.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createBusSeatType.mutateAsync(values),

      success: isUpdate ? "Bus seat type updated" : "Bus seat type created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(busSeatTypeDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(busSeatTypeDefaultValues);
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
          steps={busSeatTypeSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={busSeatTypeSteps} />

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
