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

import { policySteps } from "./step/steps";

import BasicStep from "./step/basic.step";

import PolicyTypeStep from "./step/policy-type.step";

import BookingTypeStep from "./step/booking-type.step";

import StatusStep from "./step/status.step";

import { initPolicyFormValues } from "./form/init-value";

import { policyDefaultValues } from "./form/default-values";

import { PolicyFormSchema, schema } from "./form/schema";

import {
  useCreatePolicy,
  useUpdatePolicy,
} from "@/hooks/features/policy";

import { Policy } from "@/types/common/features/policy/policy";

import { BookingType } from "@/types/common/commerce/booking-type";

import { PolicyType } from "@/types/common/features/policy/policy-type";

interface PolicyFormProps {
  initialData?: Policy;

  bookingTypeData: BookingType[];

  policyTypeData: PolicyType[];
}

export default function PolicyForm({
  initialData,
  bookingTypeData,
  policyTypeData,
}: PolicyFormProps) {
  const submit = useSubmit();

  const { setDirty } = useFormPage();

  const createPolicy = useCreatePolicy();

  const updatePolicy = useUpdatePolicy();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<PolicyFormSchema>({
    schema,

    defaultValues: initialData
      ? initPolicyFormValues(initialData)
      : policyDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,

    entity: DraftEntity.Policy,

    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = async (values: PolicyFormSchema) => {
    await submit({
      mutation: initialData
        ? updatePolicy.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createPolicy.mutateAsync(values),

      success: isUpdate
        ? "Policy updated"
        : "Policy created",

      redirect: "/features/policy",
    });

    clearDraft();

    form.reset(policyDefaultValues);
  };

  return (
    <AppForm
      form={form}
      onSubmit={onSubmit}
      loading={isSubmitting}
    >
      <FormWizard
        form={form}
        steps={policySteps}
        loading={isSubmitting}
        unlockAll={!!initialData}
      >
        <FormWizardHeader steps={policySteps} />

        <FormWizardContent>
          {/* ======================================================
              STEP 1 - BASIC
          ====================================================== */}

          <FormWizardStep index={0}>
            <BasicStep />
          </FormWizardStep>

          {/* ======================================================
              STEP 2 - POLICY TYPE
          ====================================================== */}

          <FormWizardStep index={1}>
            <PolicyTypeStep
              policyTypeData={policyTypeData}
              bookingTypeData={bookingTypeData}
            />
          </FormWizardStep>

          {/* ======================================================
              STEP 3 - BOOKING TYPE
          ====================================================== */}

          <FormWizardStep index={2}>
            <BookingTypeStep
              bookingTypeData={bookingTypeData}
            />
          </FormWizardStep>

          {/* ======================================================
              STEP 4 - STATUS
          ====================================================== */}

          <FormWizardStep index={3}>
            <StatusStep />
          </FormWizardStep>
        </FormWizardContent>

        <FormWizardFooter
          form={form}
          onSubmit={onSubmit}
        />
      </FormWizard>
    </AppForm>
  );
}