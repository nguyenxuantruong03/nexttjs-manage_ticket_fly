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

import { priceRuleTypeSteps } from "./step/steps";

import BasicStep from "./step/basic.step";
import BookingTypeStep from "./step/booking-type.step";
import StatusStep from "./step/status.step";

import { initPriceRuleTypeFormValues } from "./form/init-value";
import { priceRuleTypeDefaultValues } from "./form/default-values";
import { PriceRuleTypeFormSchema, schema } from "./form/schema";

import {
  useCreatePriceRuleType,
  useUpdatePriceRuleType,
} from "@/hooks/commerce/price-rule-type";

import { BookingType } from "@/types/common/commerce/booking-type";
import { PriceRuleType } from "@/types/common/commerce/price-rule-type.type";

// ======================================================
// PROPS
// ======================================================

interface PriceRuleTypeFormProps {
  initialData?: PriceRuleType;
  bookingTypeData: BookingType[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function PriceRuleTypeForm({
  initialData,
  bookingTypeData,
}: PriceRuleTypeFormProps) {
  const submit = useSubmit();

  const { setDirty } = useFormPage();

  const createPriceRuleType = useCreatePriceRuleType();

  const updatePriceRuleType = useUpdatePriceRuleType();

  const searchParams = useSearchParams();

  // ======================================================
  // DRAFT
  // ======================================================

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  // ======================================================
  // FORM
  // ======================================================

  const { form, isUpdate } = useAppForm<PriceRuleTypeFormSchema>({
    schema,

    defaultValues: initialData
      ? initPriceRuleTypeFormValues(initialData)
      : priceRuleTypeDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  // ======================================================
  // DRAFT
  // ======================================================

  const { clearDraft } = useFormDraft({
    form,

    entity: DraftEntity.PriceRuleType,

    draftId: currentDraftId,
  });

  // ======================================================
  // DIRTY STATE
  // ======================================================

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  // ======================================================
  // SUBMIT
  // ======================================================

  const onSubmit = async (values: PriceRuleTypeFormSchema) => {
    await submit({
      mutation: initialData
        ? updatePriceRuleType.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createPriceRuleType.mutateAsync(values),

      success: isUpdate ? "Price rule type updated" : "Price rule type created",

      redirect: "/commerce/price-rule-type",
    });

    clearDraft();

    form.reset(priceRuleTypeDefaultValues);
  };

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
      <FormWizard
        form={form}
        steps={priceRuleTypeSteps}
        loading={isSubmitting}
        unlockAll={!!initialData}
      >
        <FormWizardHeader steps={priceRuleTypeSteps} />

        <FormWizardContent>
          {/* ======================================================
              STEP 1 - BASIC
          ====================================================== */}

          <FormWizardStep index={0}>
            <BasicStep />
          </FormWizardStep>

          {/* ======================================================
              STEP 2 - BOOKING TYPE
          ====================================================== */}

          <FormWizardStep index={1}>
            <BookingTypeStep bookingTypeData={bookingTypeData} />
          </FormWizardStep>

          {/* ======================================================
              STEP 3 - STATUS
          ====================================================== */}

          <FormWizardStep index={2}>
            <StatusStep />
          </FormWizardStep>
        </FormWizardContent>

        <FormWizardFooter form={form} onSubmit={onSubmit} />
      </FormWizard>
    </AppForm>
  );
}
