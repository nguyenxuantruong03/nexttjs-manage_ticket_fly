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

import { FlyCrewDutyFormSchema, FlyCrewDutySchema } from "./form/schema";

import { flyCrewDutyDefaultValues } from "./form/default-values";
import { initFlyCrewDutyFormValues } from "./form/init-value";
import { flyCrewDutySteps } from "./step/steps";

import {
  useCreateFlyCrewDuty,
  useUpdateFlyCrewDuty,
} from "@/hooks/product-types/references/airline/crew/crew-duty";
import { FlyCrewDuty } from "@/types/product-types/references/airline/crew/crew-duty/fly-crew-duty";


interface FlyCrewDutyFormProps {
  initialData?: FlyCrewDuty;
  redirect?: boolean;
}

export default function FlyCrewDutyForm({
  initialData,
  redirect = true,
}: FlyCrewDutyFormProps) {
  const redirectDefault = "/product-types/ticket-fly/crew-duty";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const searchParams = useSearchParams();

  const submit = useSubmit();

  const { setDirty } = useFormPage();

  const createFlyCrewDuty = useCreateFlyCrewDuty();

  const updateFlyCrewDuty = useUpdateFlyCrewDuty();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<FlyCrewDutyFormSchema>({
    schema: FlyCrewDutySchema,

    defaultValues: initialData
      ? initFlyCrewDutyFormValues(initialData)
      : flyCrewDutyDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,

    entity: DraftEntity.FlyCrewDuty,

    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: FlyCrewDutyFormSchema) => {
    submit({
      mutation: initialData
        ? updateFlyCrewDuty.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createFlyCrewDuty.mutateAsync(values),

      success: isUpdate ? "Fly crew duty updated" : "Fly crew duty created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();

      form.reset(flyCrewDutyDefaultValues);

      resetWizardRef.current?.();

      return;
    }

    form.reset(flyCrewDutyDefaultValues);
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
          steps={flyCrewDutySteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={flyCrewDutySteps} />

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
