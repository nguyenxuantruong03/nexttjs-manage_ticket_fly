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

import { RoomTypeSchema, RoomTypeFormSchema } from "./form/schema";
import { roomTypeDefaultValues } from "./form/default-values";
import { initRoomTypeFormValues } from "./form/init-value";
import { roomTypeSteps } from "./step/steps";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  useCreateHotelRoomType,
  useUpdateHotelRoomType,
} from "@/hooks/product-types/hotel/hotel-room-type";
import { HotelRoomType } from "@/types/product-types/hotel/room/room-type.types";
import RelationStep from "./step/relation.step";
import CapacityStep from "./step/capacity.step";
import FeaturesStep from "./step/feature.step";
import RoomStep from "./step/room.step";
import BasicStep from "./step/basic.step";
import { BathroomType, RoomCategory, RoomView } from "@/types/product-types/hotel/room/room.types";


interface RoomTypeFormProps {
  initialData?: HotelRoomType;
  roomCategoryData: RoomCategory[];
  bathroomTypeData: BathroomType[];
  roomViewData: RoomView[];
  redirect?: boolean;
}

export default function RoomTypeForm({
  initialData,
  roomCategoryData,
  bathroomTypeData,
  roomViewData,
  redirect = true,
}: RoomTypeFormProps) {
  const redirectDefault = "hotel/room-type";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const { setDirty } = useFormPage();

  const submit = useSubmit();

  const searchParams = useSearchParams();

  const createRoomType = useCreateHotelRoomType();
  const updateRoomType = useUpdateHotelRoomType();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<RoomTypeFormSchema>({
    schema: RoomTypeSchema,
    defaultValues: initialData
      ? initRoomTypeFormValues(initialData)
      : roomTypeDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.HotelRoomType,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: RoomTypeFormSchema) => {
    submit({
      mutation: initialData
        ? updateRoomType.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createRoomType.mutateAsync(values),

      success: isUpdate ? "RoomType updated" : "RoomType created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(roomTypeDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(roomTypeDefaultValues);
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
          steps={roomTypeSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={roomTypeSteps} />

          <FormWizardContent>
            <FormWizardStep index={0}>
              <RelationStep
                roomViewData={roomViewData}
                bathroomTypeData={bathroomTypeData}
                roomCategoryData={roomCategoryData}
              />
            </FormWizardStep>
            <FormWizardStep index={1}>
              <BasicStep />
            </FormWizardStep>
            <FormWizardStep index={2}>
              <RoomStep />
            </FormWizardStep>
            <FormWizardStep index={3}>
              <CapacityStep />
            </FormWizardStep>
            <FormWizardStep index={4}>
              <FeaturesStep />
            </FormWizardStep>
          </FormWizardContent>

          <FormWizardFooter form={form} onSubmit={onSubmit} />
        </FormWizard>
      </AppForm>
    </>
  );
}
