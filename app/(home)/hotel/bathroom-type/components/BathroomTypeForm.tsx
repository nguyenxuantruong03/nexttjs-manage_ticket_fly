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

import { BathroomTypeSchema, BathroomTypeFormSchema } from "./form/schema";
import { bathroomTypeDefaultValues } from "./form/default-values";
import { initBathroomTypeFormValues } from "./form/init-value";
import { bathroomTypeSteps } from "./step/steps";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  useCreateHotelBathroomType,
  useUpdateHotelBathroomType,
} from "@/hooks/hotel/hotel-bathroom-type";
import { BathroomType } from "@/types/bookings/hotel/room/room.types";
import SettingsStep from "./step/setting.step.tsx";

interface BathroomTypeFormProps {
  initialData?: BathroomType;
  redirect?: boolean;
}

export default function BathroomTypeForm({
  initialData,
  redirect = true,
}: BathroomTypeFormProps) {
  const redirectDefault = "hotel/bathroom-type";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const { setDirty } = useFormPage();

  const submit = useSubmit();

  const searchParams = useSearchParams();

  const createBathroomType = useCreateHotelBathroomType();
  const updateBathroomType = useUpdateHotelBathroomType();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<BathroomTypeFormSchema>({
    schema: BathroomTypeSchema,
    defaultValues: initialData
      ? initBathroomTypeFormValues(initialData)
      : bathroomTypeDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.HotelBathroomType,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: BathroomTypeFormSchema) => {
    submit({
      mutation: initialData
        ? updateBathroomType.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createBathroomType.mutateAsync(values),

      success: isUpdate ? "BathroomType updated" : "BathroomType created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(bathroomTypeDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(bathroomTypeDefaultValues);
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
          steps={bathroomTypeSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={bathroomTypeSteps} />

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
