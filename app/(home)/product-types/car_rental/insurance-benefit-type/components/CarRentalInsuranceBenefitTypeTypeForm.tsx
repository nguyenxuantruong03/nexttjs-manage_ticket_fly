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
  CarRentalInsuranceBenefitTypeSchema,
  CarRentalInsuranceBenefitTypeFormSchema,
} from "./form/schema";
import { carRentalInsuranceBenefitTypeDefaultValues } from "./form/default-values";
import { initCarRentalInsuranceBenefitTypeFormValues } from "./form/init-value";
import { carRentalInsuranceBenefitTypeSteps } from "./step/steps";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  useCreateCarRentalInsuranceBenefitType,
  useUpdateCarRentalInsuranceBenefitType,
} from "@/hooks/product-types/car-rental/insurance-benefit-type";
import { InsuranceBenefitType } from "@/types/product-types/car_rental/insurance-type.type";

interface CarRentalInsuranceBenefitTypeFormProps {
  initialData?: InsuranceBenefitType;
  redirect?: boolean;
}

export default function CarRentalInsuranceBenefitTypeForm({
  initialData,
  redirect = true,
}: CarRentalInsuranceBenefitTypeFormProps) {
  const redirectDefault = "car-rental/insurance-benefit-type";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const { setDirty } = useFormPage();

  const submit = useSubmit();

  const searchParams = useSearchParams();

  const createCarRentalInsuranceBenefitType =
    useCreateCarRentalInsuranceBenefitType();

  const updateCarRentalInsuranceBenefitType =
    useUpdateCarRentalInsuranceBenefitType();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } =
    useAppForm<CarRentalInsuranceBenefitTypeFormSchema>({
      schema: CarRentalInsuranceBenefitTypeSchema,
      defaultValues: initialData
        ? initCarRentalInsuranceBenefitTypeFormValues(initialData)
        : carRentalInsuranceBenefitTypeDefaultValues,
    });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.CarRentalInsuranceBenefitType,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: CarRentalInsuranceBenefitTypeFormSchema) => {
    submit({
      mutation: initialData
        ? updateCarRentalInsuranceBenefitType.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createCarRentalInsuranceBenefitType.mutateAsync(values),

      success: isUpdate
        ? "Car rental insurance benefit type updated"
        : "Car rental insurance benefit type created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(carRentalInsuranceBenefitTypeDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(carRentalInsuranceBenefitTypeDefaultValues);
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
          steps={carRentalInsuranceBenefitTypeSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={carRentalInsuranceBenefitTypeSteps} />

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
