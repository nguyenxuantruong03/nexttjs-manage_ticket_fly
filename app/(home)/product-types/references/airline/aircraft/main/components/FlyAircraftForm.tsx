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

import { FlyAircraftFormSchema, FlyAircraftSchema } from "./form/schema";

import { flyAircraftDefaultValues } from "./form/default-values";
import { initFlyAircraftFormValues } from "./form/init-value";
import { flyAircraftSteps } from "./step/steps";

import {
  useCreateFlyAircraft,
  useUpdateFlyAircraft,
} from "@/hooks/product-types/references/airline/aircraft";
import { FlyAircraft } from "@/types/product-types/references/airline/aircraft/aircraft.types";

interface FlyAircraftFormProps {
  initialData?: FlyAircraft;
  redirect?: boolean;
}

export default function FlyAircraftForm({
  initialData,
  redirect = true,
}: FlyAircraftFormProps) {
  const redirectDefault = "/product-types/references/airline/aircraft";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const searchParams = useSearchParams();

  const submit = useSubmit();

  const { setDirty } = useFormPage();

  const createFlyAircraft = useCreateFlyAircraft();
  const updateFlyAircraft = useUpdateFlyAircraft();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<FlyAircraftFormSchema>({
    schema: FlyAircraftSchema,

    defaultValues: initialData
      ? initFlyAircraftFormValues(initialData)
      : flyAircraftDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.FlyAircraft,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: FlyAircraftFormSchema) => {
    submit({
      mutation: initialData
        ? updateFlyAircraft.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createFlyAircraft.mutateAsync(values),

      success: isUpdate ? "Fly aircraft updated" : "Fly aircraft created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();

      form.reset(flyAircraftDefaultValues);

      resetWizardRef.current?.();

      return;
    }

    form.reset(flyAircraftDefaultValues);
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
          steps={flyAircraftSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={flyAircraftSteps} />

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
