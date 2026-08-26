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
  CarRentalInsuranceTypeSchema,
  CarRentalInsuranceTypeFormSchema,
} from "./form/schema";
import { carRentalInsuranceTypeDefaultValues } from "./form/default-values";
import { initCarRentalInsuranceTypeFormValues } from "./form/init-value";
import { carRentalInsuranceTypeSteps } from "./step/steps";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  useCreateCarRentalInsuranceType,
  useUpdateCarRentalInsuranceType,
} from "@/hooks/product-types/car-rental/insurance-type";
import { InsuranceType } from "@/types/product-types/car_rental/insurance-type.type";

interface CarRentalInsuranceTypeFormProps {
  initialData?: InsuranceType;
  redirect?: boolean;
}

export default function CarRentalInsuranceTypeForm({
  initialData,
  redirect = true,
}: CarRentalInsuranceTypeFormProps) {
  const redirectDefault = "car-rental/insurance-type";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const { setDirty } = useFormPage();

  const submit = useSubmit();

  const searchParams = useSearchParams();

  const createCarRentalInsuranceType = useCreateCarRentalInsuranceType();

  const updateCarRentalInsuranceType = useUpdateCarRentalInsuranceType();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<CarRentalInsuranceTypeFormSchema>({
    schema: CarRentalInsuranceTypeSchema,
    defaultValues: initialData
      ? initCarRentalInsuranceTypeFormValues(initialData)
      : carRentalInsuranceTypeDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.CarRentalInsuranceType,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: CarRentalInsuranceTypeFormSchema) => {
    submit({
      mutation: initialData
        ? updateCarRentalInsuranceType.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createCarRentalInsuranceType.mutateAsync(values),

      success: isUpdate
        ? "Car rental insurance type updated"
        : "Car rental insurance type created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(carRentalInsuranceTypeDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(carRentalInsuranceTypeDefaultValues);
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
          steps={carRentalInsuranceTypeSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={carRentalInsuranceTypeSteps} />

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
