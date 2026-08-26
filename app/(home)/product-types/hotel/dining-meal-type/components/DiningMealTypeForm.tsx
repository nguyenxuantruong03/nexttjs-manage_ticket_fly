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

import { DiningMealTypeSchema, DiningMealTypeFormSchema } from "./form/schema";
import { diningMealTypeDefaultValues } from "./form/default-values";
import { initDiningMealTypeFormValues } from "./form/init-value";
import { diningMealTypeSteps } from "./step/steps";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  useCreateHotelDiningMealType,
  useUpdateHotelDiningMealType,
} from "@/hooks/product-types/hotel/hotel-dining-meal-type";
import SettingsStep from "./step/setting.step";
import { DiningMealType } from "@/types/product-types/hotel/service/dinner-option.type";

interface DiningMealTypeFormProps {
  initialData?: DiningMealType;
  redirect?: boolean;
}

export default function DiningMealTypeForm({
  initialData,
  redirect = true,
}: DiningMealTypeFormProps) {
  const redirectDefault = "hotel/dining-meal-type";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const { setDirty } = useFormPage();

  const submit = useSubmit();

  const searchParams = useSearchParams();

  const createDiningMealType = useCreateHotelDiningMealType();
  const updateDiningMealType = useUpdateHotelDiningMealType();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<DiningMealTypeFormSchema>({
    schema: DiningMealTypeSchema,
    defaultValues: initialData
      ? initDiningMealTypeFormValues(initialData)
      : diningMealTypeDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.HotelDiningMealType,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: DiningMealTypeFormSchema) => {
    submit({
      mutation: initialData
        ? updateDiningMealType.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createDiningMealType.mutateAsync(values),

      success: isUpdate ? "DiningMealType updated" : "DiningMealType created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(diningMealTypeDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(diningMealTypeDefaultValues);
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
          steps={diningMealTypeSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={diningMealTypeSteps} />

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
