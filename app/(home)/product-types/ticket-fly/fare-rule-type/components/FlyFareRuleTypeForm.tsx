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

import {
  FlyFareRuleTypeFormSchema,
  FlyFareRuleTypeSchema,
} from "./form/schema";

import { flyFareRuleTypeDefaultValues } from "./form/default-values";
import { initFlyFareRuleTypeFormValues } from "./form/init-value";
import { flyFareRuleTypeSteps } from "./step/steps";

import {
  useCreateFlyFareRuleType,
  useUpdateFlyFareRuleType,
} from "@/hooks/product-types/ticket-fly/fare-rule-type";
import { FlyFareRuleType } from "@/types/product-types/ticket-fly/pricing/fare-rule-type";


interface FlyFareRuleTypeFormProps {
  initialData?: FlyFareRuleType;
  redirect?: boolean;
}

export default function FlyFareRuleTypeForm({
  initialData,
  redirect = true,
}: FlyFareRuleTypeFormProps) {
  const redirectDefault = "/product-types/ticket-fly/fare-rule-type";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const searchParams = useSearchParams();

  const submit = useSubmit();

  const { setDirty } = useFormPage();

  const createFlyFareRuleType = useCreateFlyFareRuleType();

  const updateFlyFareRuleType = useUpdateFlyFareRuleType();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<FlyFareRuleTypeFormSchema>({
    schema: FlyFareRuleTypeSchema,

    defaultValues: initialData
      ? initFlyFareRuleTypeFormValues(initialData)
      : flyFareRuleTypeDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,

    entity: DraftEntity.FlyFareRuleType,

    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: FlyFareRuleTypeFormSchema) => {
    submit({
      mutation: initialData
        ? updateFlyFareRuleType.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createFlyFareRuleType.mutateAsync(values),

      success: isUpdate
        ? "Fly fare rule type updated"
        : "Fly fare rule type created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();

      form.reset(flyFareRuleTypeDefaultValues);

      resetWizardRef.current?.();

      return;
    }

    form.reset(flyFareRuleTypeDefaultValues);
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
          steps={flyFareRuleTypeSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={flyFareRuleTypeSteps} />

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
