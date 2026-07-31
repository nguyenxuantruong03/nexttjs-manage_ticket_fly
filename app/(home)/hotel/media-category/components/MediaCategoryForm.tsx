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

import { MediaCategorySchema, MediaCategoryFormSchema } from "./form/schema";
import { mediaCategoryDefaultValues } from "./form/default-values";
import { initMediaCategoryFormValues } from "./form/init-value";
import { mediaCategorySteps } from "./step/steps";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  useCreateHotelMediaCategory,
  useUpdateHotelMediaCategory,
} from "@/hooks/hotel/hotel-media-category";
import { HotelMediaCategory } from "@/types/bookings/hotel/core/hotel-media.types";
import SettingsStep from "./step/setting.step";

interface MediaCategoryFormProps {
  initialData?: HotelMediaCategory;
  redirect?: boolean;
}

export default function MediaCategoryForm({
  initialData,
  redirect = true,
}: MediaCategoryFormProps) {
  const redirectDefault = "hotel/media-category";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const { setDirty } = useFormPage();

  const submit = useSubmit();

  const searchParams = useSearchParams();

  const createMediaCategory = useCreateHotelMediaCategory();
  const updateMediaCategory = useUpdateHotelMediaCategory();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<MediaCategoryFormSchema>({
    schema: MediaCategorySchema,
    defaultValues: initialData
      ? initMediaCategoryFormValues(initialData)
      : mediaCategoryDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.HotelMediaCategory,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: MediaCategoryFormSchema) => {
    submit({
      mutation: initialData
        ? updateMediaCategory.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createMediaCategory.mutateAsync(values),

      success: isUpdate ? "MediaCategory updated" : "MediaCategory created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(mediaCategoryDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(mediaCategoryDefaultValues);
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
          steps={mediaCategorySteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={mediaCategorySteps} />

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
