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

import { RatePlanTypeSchema, RatePlanTypeFormSchema } from "./form/schema";
import { ratePlanTypeDefaultValues } from "./form/default-values";
import { initRatePlanTypeFormValues } from "./form/init-value";
import { ratePlanTypeSteps } from "./step/steps";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  useCreateHotelRatePlanType,
  useUpdateHotelRatePlanType,
} from "@/hooks/product-types/hotel/hotel-rate-plan-type";
import SettingsStep from "./step/setting.step";
import { HotelRatePlanType } from "@/types/product-types/hotel/pricing/rate-plan.types";


interface RatePlanTypeFormProps {
  initialData?: HotelRatePlanType;
  redirect?: boolean;
}

export default function RatePlanTypeForm({
  initialData,
  redirect = true,
}: RatePlanTypeFormProps) {
  const redirectDefault = "hotel/rate-plan-type";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const { setDirty } = useFormPage();

  const submit = useSubmit();

  const searchParams = useSearchParams();

  const createRatePlanType = useCreateHotelRatePlanType();
  const updateRatePlanType = useUpdateHotelRatePlanType();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<RatePlanTypeFormSchema>({
    schema: RatePlanTypeSchema,
    defaultValues: initialData
      ? initRatePlanTypeFormValues(initialData)
      : ratePlanTypeDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.HotelRatePlanType,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: RatePlanTypeFormSchema) => {
    submit({
      mutation: initialData
        ? updateRatePlanType.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createRatePlanType.mutateAsync(values),

      success: isUpdate ? "RatePlanType updated" : "RatePlanType created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(ratePlanTypeDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(ratePlanTypeDefaultValues);
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
          steps={ratePlanTypeSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={ratePlanTypeSteps} />

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
