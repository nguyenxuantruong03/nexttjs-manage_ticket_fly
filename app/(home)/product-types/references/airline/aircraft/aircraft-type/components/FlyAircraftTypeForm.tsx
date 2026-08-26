"use client";

import { useEffect, useMemo, useRef } from "react";

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

import { useFormPage } from "@/components/form/form-context";
import { useSearchParams } from "next/navigation";

import { useFormDraft } from "@/hooks/useFormDraft";
import { DraftEntity } from "@/components/daft/draft-config";

import ConfirmRedirectDialog from "@/components/common/custom/confirm-redirect-dialog";
import { useConfirmDialogStorage } from "@/hooks/localStorage/useConfirmDialogStorage";

import {
  FlyAircraftTypeFormSchema,
  FlyAircraftTypeSchema,
} from "./form/schema";

import { flyAircraftTypeDefaultValues } from "./form/default-values";

import { initFlyAircraftTypeFormValues } from "./form/init-value";

import { flyAircraftTypeSteps } from "./step/steps";

import {
  useCreateFlyAircraftType,
  useUpdateFlyAircraftType,
} from "@/hooks/product-types/references/airline/aircraft/aircraft-type";
import { FlyAircraftType } from "@/types/product-types/references/airline/aircraft/aircraft-type.type";

interface FlyAircraftTypeFormProps {
  initialData?: FlyAircraftType;
  redirect?: boolean;
}

export default function FlyAircraftTypeForm({
  initialData,
  redirect = true,
}: FlyAircraftTypeFormProps) {
  const redirectDefault =
    "/product-types/references/airline/aircraft/aircraft-type";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const searchParams = useSearchParams();

  const submit = useSubmit();

  const { setDirty } = useFormPage();

  const createFlyAircraftType = useCreateFlyAircraftType();

  const updateFlyAircraftType = useUpdateFlyAircraftType();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<FlyAircraftTypeFormSchema>({
    schema: FlyAircraftTypeSchema,

    defaultValues: initialData
      ? initFlyAircraftTypeFormValues(initialData)
      : flyAircraftTypeDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.FlyAircraftType,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: FlyAircraftTypeFormSchema) => {
    submit({
      mutation: initialData
        ? updateFlyAircraftType.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createFlyAircraftType.mutateAsync(values),

      success: isUpdate
        ? "Fly aircraft type updated"
        : "Fly aircraft type created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();

      form.reset(flyAircraftTypeDefaultValues);

      resetWizardRef.current?.();

      return;
    }

    form.reset(flyAircraftTypeDefaultValues);
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
          steps={flyAircraftTypeSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={flyAircraftTypeSteps} />

          <FormWizardContent>
            {/* 0 - BASIC */}
            <FormWizardStep index={0}>
              <BasicStep />
            </FormWizardStep>

            {/* 1 - STATUS */}
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
