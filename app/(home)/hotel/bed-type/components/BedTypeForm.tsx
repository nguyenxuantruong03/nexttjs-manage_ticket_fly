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

import { BedTypeSchema, BedTypeFormSchema } from "./form/schema";
import { bedTypeDefaultValues } from "./form/default-values";
import { initBedTypeFormValues } from "./form/init-value";
import { bedTypeSteps } from "./step/steps";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  useCreateHotelBedType,
  useUpdateHotelBedType,
} from "@/hooks/hotel/hotel-bed-type";
import { BedType } from "@/types/bookings/hotel/room/room.types";
import SettingsStep from "./step/setting.step";

interface BedTypeFormProps {
  initialData?: BedType;
  redirect?: boolean;
}

export default function BedTypeForm({
  initialData,
  redirect = true,
}: BedTypeFormProps) {
  const redirectDefault = "hotel/bed-type";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const { setDirty } = useFormPage();

  const submit = useSubmit();

  const searchParams = useSearchParams();

  const createBedType = useCreateHotelBedType();
  const updateBedType = useUpdateHotelBedType();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<BedTypeFormSchema>({
    schema: BedTypeSchema,
    defaultValues: initialData
      ? initBedTypeFormValues(initialData)
      : bedTypeDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.HotelBedType,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: BedTypeFormSchema) => {
    submit({
      mutation: initialData
        ? updateBedType.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createBedType.mutateAsync(values),

      success: isUpdate ? "BedType updated" : "BedType created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(bedTypeDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(bedTypeDefaultValues);
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
          steps={bedTypeSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={bedTypeSteps} />

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
