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

import { MealPlanSchema, MealPlanFormSchema } from "./form/schema";
import { mealPlanDefaultValues } from "./form/default-values";
import { initMealPlanFormValues } from "./form/init-value";
import { mealPlanSteps } from "./step/steps";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  useCreateHotelMealPlan,
  useUpdateHotelMealPlan,
} from "@/hooks/product-types/hotel/hotel-meal-plan";
import SettingsStep from "./step/setting.step";
import { MealPlan } from "@/types/product-types/hotel/pricing/rate-plan.types";


interface MealPlanFormProps {
  initialData?: MealPlan;
  redirect?: boolean;
}

export default function MealPlanForm({
  initialData,
  redirect = true,
}: MealPlanFormProps) {
  const redirectDefault = "hotel/meal-plan";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const { setDirty } = useFormPage();

  const submit = useSubmit();

  const searchParams = useSearchParams();

  const createMealPlan = useCreateHotelMealPlan();
  const updateMealPlan = useUpdateHotelMealPlan();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<MealPlanFormSchema>({
    schema: MealPlanSchema,
    defaultValues: initialData
      ? initMealPlanFormValues(initialData)
      : mealPlanDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.HotelMealPlan,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: MealPlanFormSchema) => {
    submit({
      mutation: initialData
        ? updateMealPlan.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createMealPlan.mutateAsync(values),

      success: isUpdate ? "MealPlan updated" : "MealPlan created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(mealPlanDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(mealPlanDefaultValues);
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
          steps={mealPlanSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={mealPlanSteps} />

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
