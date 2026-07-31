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

import {
  FacilityCategorySchema,
  FacilityCategoryFormSchema,
} from "./form/schema";
import { facilityCategoryDefaultValues } from "./form/default-values";
import { initFacilityCategoryFormValues } from "./form/init-value";
import { facilityCategorySteps } from "./step/steps";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  useCreateHotelFacilityCategory,
  useUpdateHotelFacilityCategory,
} from "@/hooks/hotel/hotel-facility-category";
import { FacilityCategory } from "@/types/bookings/hotel/facilities.types";
import SettingsStep from "./step/setting-step";

interface FacilityCategoryFormProps {
  initialData?: FacilityCategory;
  redirect?: boolean;
}

export default function FacilityCategoryForm({
  initialData,
  redirect = true,
}: FacilityCategoryFormProps) {
  const redirectDefault = "hotel/facility-category";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const { setDirty } = useFormPage();

  const submit = useSubmit();

  const searchParams = useSearchParams();

  const createFacilityCategory = useCreateHotelFacilityCategory();
  const updateFacilityCategory = useUpdateHotelFacilityCategory();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<FacilityCategoryFormSchema>({
    schema: FacilityCategorySchema,
    defaultValues: initialData
      ? initFacilityCategoryFormValues(initialData)
      : facilityCategoryDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.HotelFacilityCategory,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: FacilityCategoryFormSchema) => {
    submit({
      mutation: initialData
        ? updateFacilityCategory.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createFacilityCategory.mutateAsync(values),

      success: isUpdate
        ? "FacilityCategory updated"
        : "FacilityCategory created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(facilityCategoryDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(facilityCategoryDefaultValues);
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
          steps={facilityCategorySteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={facilityCategorySteps} />

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
