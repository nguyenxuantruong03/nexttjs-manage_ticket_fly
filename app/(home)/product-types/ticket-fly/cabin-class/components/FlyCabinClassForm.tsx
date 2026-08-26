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

import { FlyCabinClassFormSchema, FlyCabinClassSchema } from "./form/schema";

import { flyCabinClassDefaultValues } from "./form/default-values";
import { initFlyCabinClassFormValues } from "./form/init-value";
import { flyCabinClassSteps } from "./step/steps";

import {
  useCreateFlyCabinClass,
  useUpdateFlyCabinClass,
} from "@/hooks/product-types/ticket-fly/cabin-class";

import { FlyCabinClass } from "@/types/product-types/ticket-fly/fly-cabin-class";

interface FlyCabinClassFormProps {
  initialData?: FlyCabinClass;
  redirect?: boolean;
}

export default function FlyCabinClassForm({
  initialData,
  redirect = true,
}: FlyCabinClassFormProps) {
  const redirectDefault = "/product-types/ticket-fly/cabin-class";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const searchParams = useSearchParams();

  const submit = useSubmit();

  const { setDirty } = useFormPage();

  const createFlyCabinClass = useCreateFlyCabinClass();

  const updateFlyCabinClass = useUpdateFlyCabinClass();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<FlyCabinClassFormSchema>({
    schema: FlyCabinClassSchema,

    defaultValues: initialData
      ? initFlyCabinClassFormValues(initialData)
      : flyCabinClassDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,

    entity: DraftEntity.FlyCabinClass,

    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: FlyCabinClassFormSchema) => {
    submit({
      mutation: initialData
        ? updateFlyCabinClass.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createFlyCabinClass.mutateAsync(values),

      success: isUpdate ? "Fly cabin class updated" : "Fly cabin class created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();

      form.reset(flyCabinClassDefaultValues);

      resetWizardRef.current?.();

      return;
    }

    form.reset(flyCabinClassDefaultValues);
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
          steps={flyCabinClassSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={flyCabinClassSteps} />

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
