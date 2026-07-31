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

import { FacilitySchema, FacilityFormSchema } from "./form/schema";
import { facilityDefaultValues } from "./form/default-values";
import { initFacilityFormValues } from "./form/init-value";
import { facilitySteps } from "./step/steps";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  useCreateHotelFacility,
  useUpdateHotelFacility,
} from "@/hooks/hotel/hotel-facility";
import {
  FacilityCategory,
  HotelFacility,
} from "@/types/bookings/hotel/facilities.types";
import SettingsStep from "./step/setting.step";

interface FacilityFormProps {
  initialData?: HotelFacility;
  redirect?: boolean;
  hotelFacilityCategoryData: FacilityCategory[];
}

export default function FacilityForm({
  initialData,
  redirect = true,
  hotelFacilityCategoryData,
}: FacilityFormProps) {
  const redirectDefault = "hotel/facility";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const { setDirty } = useFormPage();

  const submit = useSubmit();

  const searchParams = useSearchParams();

  const createFacility = useCreateHotelFacility();
  const updateFacility = useUpdateHotelFacility();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<FacilityFormSchema>({
    schema: FacilitySchema,
    defaultValues: initialData
      ? initFacilityFormValues(initialData)
      : facilityDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.HotelFacility,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: FacilityFormSchema) => {
    submit({
      mutation: initialData
        ? updateFacility.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createFacility.mutateAsync(values),

      success: isUpdate ? "Facility updated" : "Facility created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(facilityDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(facilityDefaultValues);
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
          steps={facilitySteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={facilitySteps} />

          <FormWizardContent>
            <FormWizardStep index={0}>
              <BasicStep
                hotelFacilityCategoryData={hotelFacilityCategoryData}
              />
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
