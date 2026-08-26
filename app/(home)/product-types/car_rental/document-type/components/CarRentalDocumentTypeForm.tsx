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
import StatusStep from "./step/status.step";

import {
  CarRentalDocumentTypeSchema,
  CarRentalDocumentTypeFormSchema,
} from "./form/schema";

import { carRentalDocumentTypeDefaultValues } from "./form/default-values";
import { initCarRentalDocumentTypeFormValues } from "./form/init-value";
import { carRentalDocumentTypeSteps } from "./step/steps";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  useCreateCarRentalDocumentType,
  useUpdateCarRentalDocumentType,
} from "@/hooks/product-types/car-rental/document-type";
import { CarRentalDocumentType } from "@/types/product-types/car_rental/policies/required-documents.types";

interface CarRentalDocumentTypeFormProps {
  initialData?: CarRentalDocumentType;
  redirect?: boolean;
}

export default function CarRentalDocumentTypeForm({
  initialData,
  redirect = true,
}: CarRentalDocumentTypeFormProps) {
  const redirectDefault = "car-rental/document-type";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const { setDirty } = useFormPage();
  const submit = useSubmit();
  const searchParams = useSearchParams();

  const createCarRentalDocumentType = useCreateCarRentalDocumentType();

  const updateCarRentalDocumentType = useUpdateCarRentalDocumentType();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<CarRentalDocumentTypeFormSchema>({
    schema: CarRentalDocumentTypeSchema,
    defaultValues: initialData
      ? initCarRentalDocumentTypeFormValues(initialData)
      : carRentalDocumentTypeDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.CarRentalDocumentType,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: CarRentalDocumentTypeFormSchema) => {
    submit({
      mutation: initialData
        ? updateCarRentalDocumentType.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createCarRentalDocumentType.mutateAsync(values),

      success: isUpdate
        ? "Car rental document type updated"
        : "Car rental document type created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(carRentalDocumentTypeDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(carRentalDocumentTypeDefaultValues);
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
          steps={carRentalDocumentTypeSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={carRentalDocumentTypeSteps} />

          <FormWizardContent>
            <FormWizardStep index={0}>
              <BasicStep />
            </FormWizardStep>

            <FormWizardStep index={1}>
              <StatusStep />
            </FormWizardStep>
          </FormWizardContent>

          <FormWizardFooter form={form} onSubmit={onSubmit} />
        </FormWizard>
      </AppForm>
    </>
  );
}
