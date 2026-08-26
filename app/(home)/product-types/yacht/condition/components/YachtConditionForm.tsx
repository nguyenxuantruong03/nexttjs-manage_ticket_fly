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

import {
  YachtConditionSchema,
  YachtConditionFormSchema,
} from "./form/schema";
import { yachtConditionDefaultValues } from "./form/default-values";
import { initYachtConditionFormValues } from "./form/init-value";
import { yachtConditionSteps } from "./step/steps";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  useCreateYachtCondition,
  useUpdateYachtCondition,
} from "@/hooks/product-types/yacht/condition";
import { YachtCondition } from "@/types/product-types/yacht/yacht-condition";

interface YachtConditionFormProps {
  initialData?: YachtCondition;
  redirect?: boolean;
}

export default function YachtConditionForm({
  initialData,
  redirect = true,
}: YachtConditionFormProps) {
  const redirectDefault = "yacht/condition";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const { setDirty } = useFormPage();

  const submit = useSubmit();

  const searchParams = useSearchParams();

  const createYachtCondition = useCreateYachtCondition();

  const updateYachtCondition = useUpdateYachtCondition();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } =
    useAppForm<YachtConditionFormSchema>({
      schema: YachtConditionSchema,
      defaultValues: initialData
        ? initYachtConditionFormValues(initialData)
        : yachtConditionDefaultValues,
    });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.YachtCondition,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: YachtConditionFormSchema) => {
    submit({
      mutation: initialData
        ? updateYachtCondition.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createYachtCondition.mutateAsync(values),

      success: isUpdate
        ? "Yacht condition updated"
        : "Yacht condition created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(yachtConditionDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(yachtConditionDefaultValues);
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
          steps={yachtConditionSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={yachtConditionSteps} />

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