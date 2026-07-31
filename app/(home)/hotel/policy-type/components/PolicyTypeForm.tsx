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

import { PolicyTypeSchema, PolicyTypeFormSchema } from "./form/schema";
import { policyTypeDefaultValues } from "./form/default-values";
import { initPolicyTypeFormValues } from "./form/init-value";
import { policyTypeSteps } from "./step/steps";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  useCreateHotelPolicyType,
  useUpdateHotelPolicyType,
} from "@/hooks/hotel/hotel-policy-type";
import SettingsStep from "./step/setting.step";
import { HotelPolicyType } from "@/types/bookings/hotel/policy.type";

interface PolicyTypeFormProps {
  initialData?: HotelPolicyType;
  redirect?: boolean;
}

export default function PolicyTypeForm({
  initialData,
  redirect = true,
}: PolicyTypeFormProps) {
  const redirectDefault = "hotel/policy-type";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const { setDirty } = useFormPage();

  const submit = useSubmit();

  const searchParams = useSearchParams();

  const createPolicyType = useCreateHotelPolicyType();
  const updatePolicyType = useUpdateHotelPolicyType();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<PolicyTypeFormSchema>({
    schema: PolicyTypeSchema,
    defaultValues: initialData
      ? initPolicyTypeFormValues(initialData)
      : policyTypeDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.HotelPolicyType,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: PolicyTypeFormSchema) => {
    submit({
      mutation: initialData
        ? updatePolicyType.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createPolicyType.mutateAsync(values),

      success: isUpdate ? "PolicyType updated" : "PolicyType created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(policyTypeDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(policyTypeDefaultValues);
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
          steps={policyTypeSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={policyTypeSteps} />

          <FormWizardContent>
            <FormWizardStep index={0}>
              <BasicStep />
            </FormWizardStep>
            <FormWizardStep index={1}>
              <SettingsStep />
            </FormWizardStep>
          </FormWizardContent>

          <FormWizardFooter form={form} onSubmit={onSubmit} />
        </FormWizard>
      </AppForm>
    </>
  );
}
