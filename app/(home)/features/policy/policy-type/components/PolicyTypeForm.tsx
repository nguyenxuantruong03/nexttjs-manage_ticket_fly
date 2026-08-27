"use client";

import { useEffect, useMemo } from "react";

import { useSearchParams } from "next/navigation";

import { AppForm } from "@/components/form/form-data";

import { useFormPage } from "@/components/form/form-context";

import { DraftEntity } from "@/components/daft/draft-config";

import FormWizard from "@/components/form/wizard/FormWizard";

import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";

import FormWizardContent from "@/components/form/wizard/FormWizardContent";

import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";

import { useSubmit } from "@/hooks/useSubmit";

import { useFormDraft } from "@/hooks/useFormDraft";

import { policyTypeSteps } from "./step/steps";

import BasicStep from "./step/basic.step";

import StatusStep from "./step/status.step";

import BookingTypeStep from "./step/booking-type.step";

import { initPolicyTypeFormValues } from "./form/init-value";

import { policyTypeDefaultValues } from "./form/default-values";

import { PolicyTypeFormSchema, schema } from "./form/schema";

import {
  useCreatePolicyType,
  useUpdatePolicyType,
} from "@/hooks/features/policy-type";

import { PolicyType } from "@/types/common/features/policy/policy-type";

import { BookingType } from "@/types/common/commerce/booking-type";

interface PolicyTypeFormProps {
  initialData?: PolicyType;

  bookingTypeData: BookingType[];
}

export default function PolicyTypeForm({
  initialData,
  bookingTypeData,
}: PolicyTypeFormProps) {
  const submit = useSubmit();

  const { setDirty } = useFormPage();

  const createPolicyType = useCreatePolicyType();

  const updatePolicyType = useUpdatePolicyType();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<PolicyTypeFormSchema>({
    schema,

    defaultValues: initialData
      ? initPolicyTypeFormValues(initialData)
      : policyTypeDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,

    entity: DraftEntity.PolicyType,

    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = async (values: PolicyTypeFormSchema) => {
    await submit({
      mutation: initialData
        ? updatePolicyType.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createPolicyType.mutateAsync(values),

      success: isUpdate
        ? "Policy type updated"
        : "Policy type created",

      redirect: "/features/policy-type",
    });

    clearDraft();

    form.reset(policyTypeDefaultValues);
  };

  return (
    <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
      <FormWizard
        form={form}
        steps={policyTypeSteps}
        loading={isSubmitting}
        unlockAll={!!initialData}
      >
        <FormWizardHeader steps={policyTypeSteps} />

        <FormWizardContent>
          <FormWizardStep index={0}>
            <BasicStep />
          </FormWizardStep>

          <FormWizardStep index={1}>
            <BookingTypeStep bookingTypeData={bookingTypeData} />
          </FormWizardStep>

          <FormWizardStep index={2}>
            <StatusStep />
          </FormWizardStep>
        </FormWizardContent>

        <FormWizardFooter form={form} onSubmit={onSubmit} />
      </FormWizard>
    </AppForm>
  );
}