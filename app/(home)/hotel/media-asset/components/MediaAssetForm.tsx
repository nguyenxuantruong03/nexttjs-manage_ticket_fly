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

import { MediaAssetSchema, MediaAssetFormSchema } from "./form/schema";
import { mediaAssetDefaultValues } from "./form/default-values";
import { initMediaAssetFormValues } from "./form/init-value";
import { mediaAssetSteps } from "./step/steps";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  useCreateHotelMediaAsset,
  useUpdateHotelMediaAsset,
} from "@/hooks/hotel/hotel-media-asset";
import StorageStep from "./step/storage.step";
import FileInfoStep from "./step/fileInfo.step";
import VideoStep from "./step/video.step";
import MetadataStep from "./step/metadata.step";
import { MediaAsset } from "@/types/bookings/hotel/media.type";

interface MediaAssetFormProps {
  initialData?: MediaAsset;
  redirect?: boolean;
}

export default function MediaAssetForm({
  initialData,
  redirect = true,
}: MediaAssetFormProps) {
  const redirectDefault = "hotel/media-asset";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const { setDirty } = useFormPage();

  const submit = useSubmit();

  const searchParams = useSearchParams();

  const createMediaAsset = useCreateHotelMediaAsset();
  const updateMediaAsset = useUpdateHotelMediaAsset();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<MediaAssetFormSchema>({
    schema: MediaAssetSchema,
    defaultValues: initialData
      ? initMediaAssetFormValues(initialData)
      : mediaAssetDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.HotelMediaAsset,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: MediaAssetFormSchema) => {
    submit({
      mutation: initialData
        ? updateMediaAsset.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createMediaAsset.mutateAsync(values),

      success: isUpdate ? "MediaAsset updated" : "MediaAsset created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(mediaAssetDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(mediaAssetDefaultValues);
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
          steps={mediaAssetSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={mediaAssetSteps} />

          <FormWizardContent>
            <FormWizardStep index={0}>
              <StorageStep />
            </FormWizardStep>
            <FormWizardStep index={1}>
              <FileInfoStep />
            </FormWizardStep>
            <FormWizardStep index={2}>
              <VideoStep />
            </FormWizardStep>
            <FormWizardStep index={3}>
              <MetadataStep />
            </FormWizardStep>
          </FormWizardContent>

          <FormWizardFooter form={form} onSubmit={onSubmit} />
        </FormWizard>
      </AppForm>
    </>
  );
}
