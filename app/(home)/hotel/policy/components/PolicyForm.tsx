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

import { PolicySchema, PolicyFormSchema } from "./form/schema";
import { policyDefaultValues } from "./form/default-values";
import { initPolicyFormValues } from "./form/init-value";
import { policySteps } from "./step/steps";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  useCreateHotelPolicy,
  useUpdateHotelPolicy,
} from "@/hooks/hotel/hotel-policy";
import { HotelPolicy } from "@/types/bookings/hotel/policy.type";
import { HotelPolicyType } from "@/types/bookings/hotel/policy.type";

interface PolicyFormProps {
  initialData?: HotelPolicy;
  redirect?: boolean;
  policyTypeData: HotelPolicyType[]
}

export default function PolicyForm({
  initialData,
  redirect = true,
  policyTypeData
}: PolicyFormProps) {
  const redirectDefault = "hotel/policy";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const { setDirty } = useFormPage();

  const submit = useSubmit();

  const searchParams = useSearchParams();

  const createPolicy = useCreateHotelPolicy();
  const updatePolicy = useUpdateHotelPolicy();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<PolicyFormSchema>({
    schema: PolicySchema,
    defaultValues: initialData
      ? initPolicyFormValues(initialData)
      : policyDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.HotelPolicy,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: PolicyFormSchema) => {
    submit({
      mutation: initialData
        ? updatePolicy.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createPolicy.mutateAsync(values),

      success: isUpdate ? "Policy updated" : "Policy created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(policyDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(policyDefaultValues);
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
          steps={policySteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={policySteps} />

          <FormWizardContent>
            <FormWizardStep index={0}>
              <BasicStep policyTypeData={policyTypeData}/>
            </FormWizardStep>
          </FormWizardContent>

          <FormWizardFooter form={form} onSubmit={onSubmit} />
        </FormWizard>
      </AppForm>
    </>
  );
}
