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
  RoomMediaCategorySchema,
  RoomMediaCategoryFormSchema,
} from "./form/schema";
import { roomMediaCategoryDefaultValues } from "./form/default-values";
import { initRoomMediaCategoryFormValues } from "./form/init-value";
import { roomMediaCategorySteps } from "./step/steps";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  useCreateHotelRoomMediaCategory,
  useUpdateHotelRoomMediaCategory,
} from "@/hooks/hotel/hotel-room-media-category";
import { RoomMediaCategory } from "@/types/bookings/hotel/room/room-media.types";
import SettingsStep from "./step/setting.step";

interface RoomMediaCategoryFormProps {
  initialData?: RoomMediaCategory;
  redirect?: boolean;
}

export default function RoomMediaCategoryForm({
  initialData,
  redirect = true,
}: RoomMediaCategoryFormProps) {
  const redirectDefault = "hotel/room-media-category";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const { setDirty } = useFormPage();

  const submit = useSubmit();

  const searchParams = useSearchParams();

  const createRoomMediaCategory = useCreateHotelRoomMediaCategory();
  const updateRoomMediaCategory = useUpdateHotelRoomMediaCategory();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<RoomMediaCategoryFormSchema>({
    schema: RoomMediaCategorySchema,
    defaultValues: initialData
      ? initRoomMediaCategoryFormValues(initialData)
      : roomMediaCategoryDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.HotelRoomMediaCategory,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: RoomMediaCategoryFormSchema) => {
    submit({
      mutation: initialData
        ? updateRoomMediaCategory.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createRoomMediaCategory.mutateAsync(values),

      success: isUpdate
        ? "RoomMediaCategory updated"
        : "RoomMediaCategory created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(roomMediaCategoryDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(roomMediaCategoryDefaultValues);
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
          steps={roomMediaCategorySteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={roomMediaCategorySteps} />

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
