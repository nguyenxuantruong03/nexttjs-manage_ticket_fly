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

import { RoomCategorySchema, RoomCategoryFormSchema } from "./form/schema";
import { roomCategoryDefaultValues } from "./form/default-values";
import { initRoomCategoryFormValues } from "./form/init-value";
import { roomCategorySteps } from "./step/steps";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  useCreateHotelRoomCategory,
  useUpdateHotelRoomCategory,
} from "@/hooks/product-types/hotel/hotel-room-category";
import { RoomCategory } from "@/types/product-types/hotel/room/room.types";

import SettingsStep from "./step/settings.step";

interface RoomCategoryFormProps {
  initialData?: RoomCategory;
  redirect?: boolean;
}

export default function RoomCategoryForm({
  initialData,
  redirect = true,
}: RoomCategoryFormProps) {
  const redirectDefault = "hotel/room-category";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const { setDirty } = useFormPage();

  const submit = useSubmit();

  const searchParams = useSearchParams();

  const createRoomCategory = useCreateHotelRoomCategory();
  const updateRoomCategory = useUpdateHotelRoomCategory();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<RoomCategoryFormSchema>({
    schema: RoomCategorySchema,
    defaultValues: initialData
      ? initRoomCategoryFormValues(initialData)
      : roomCategoryDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.HotelRoomCategory,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: RoomCategoryFormSchema) => {
    submit({
      mutation: initialData
        ? updateRoomCategory.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createRoomCategory.mutateAsync(values),

      success: isUpdate ? "RoomCategory updated" : "RoomCategory created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(roomCategoryDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(roomCategoryDefaultValues);
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
          steps={roomCategorySteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={roomCategorySteps} />

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
