"use client";

import { AppForm } from "@/components/form/form-data";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";
import { useSubmit } from "@/hooks/useSubmit";

import { PlaceTypeSchema, PlaceTypeFormSchema } from "./form/schema";

import { placeTypeDefaultValues } from "./form/default-values";
import { placeTypeSteps } from "./step/steps";

import BasicStep from "./step/basic.step";
import MediaStep from "./step/media.step";
import DisplayStep from "./step/display.step";
import StatusStep from "./step/status.step";

import {
  useCreatePlaceType,
  useUpdatePlaceType,
} from "@/hooks/location/place/place-type";

import { useEffect, useMemo, useRef } from "react";

import { useFormPage } from "@/components/form/form-context";
import { useSearchParams } from "next/navigation";

import { useFormDraft } from "@/hooks/useFormDraft";
import { DraftEntity } from "@/components/daft/draft-config";

import { initPlaceTypeFormValues } from "./form/init-value";

import { useConfirmDialogStorage } from "@/hooks/localStorage/useConfirmDialogStorage";

import ConfirmRedirectDialog from "@/components/common/custom/confirm-redirect-dialog";
import { PlaceType } from "@/types/location/place/place-type.type";

interface PlaceTypeFormProps {
  initialData?: PlaceType;
  redirect?: boolean;
}

export default function PlaceTypeForm({
  initialData,
  redirect = true,
}: PlaceTypeFormProps) {
  const redirectDefault = "/location/place-type";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const submit = useSubmit();

  const { setDirty } = useFormPage();

  const createPlaceType = useCreatePlaceType();
  const updatePlaceType = useUpdatePlaceType();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<PlaceTypeFormSchema>({
    schema: PlaceTypeSchema,
    defaultValues: initialData
      ? initPlaceTypeFormValues(initialData)
      : placeTypeDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.PlaceType,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: PlaceTypeFormSchema) => {
    submit({
      mutation: initialData
        ? updatePlaceType.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createPlaceType.mutateAsync(values),

      success: isUpdate ? "Place type updated" : "Place type created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();

      form.reset(placeTypeDefaultValues);

      resetWizardRef.current?.();

      return;
    }

    form.reset(placeTypeDefaultValues);
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
          steps={placeTypeSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={placeTypeSteps} />

          <FormWizardContent>
            {/* 0 - Basic */}
            <FormWizardStep index={0}>
              <BasicStep />
            </FormWizardStep>

            {/* 1 - Media */}
            <FormWizardStep index={1}>
              <MediaStep />
            </FormWizardStep>

            {/* 2 - Display */}
            <FormWizardStep index={2}>
              <DisplayStep />
            </FormWizardStep>

            {/* 3 - Status */}
            <FormWizardStep index={3}>
              <StatusStep />
            </FormWizardStep>
          </FormWizardContent>

          <FormWizardFooter form={form} onSubmit={onSubmit} />
        </FormWizard>
      </AppForm>
    </>
  );
}
