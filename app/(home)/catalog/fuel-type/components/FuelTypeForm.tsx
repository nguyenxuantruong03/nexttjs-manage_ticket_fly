"use client";

import { useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";

import { AppForm } from "@/components/form/form-data";
import { useFormPage } from "@/components/form/form-context";
import { DraftEntity } from "@/components/daft/draft-config";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";
import { useSubmit } from "@/hooks/useSubmit";
import { useFormDraft } from "@/hooks/useFormDraft";

import { fuelTypeSteps } from "./step/steps";
import BasicStep from "./step/basic.step";
import BookingTypeStep from "./step/booking-type.step";
import StatusStep from "./step/status.step";

import { initFuelTypeFormValues } from "./form/init-value";
import { fuelTypeDefaultValues } from "./form/default-values";
import { FuelTypeFormSchema, schema } from "./form/schema";

import { BookingType } from "@/types/common/commerce/booking-type";

import {
  useCreateFuelType,
  useUpdateFuelType,
} from "@/hooks/catalog/fuel-type";
import { FuelType } from "@/types/common/catalog/fuel-type";

interface FuelTypeFormProps {
  initialData?: FuelType;
  bookingTypeData: BookingType[];
}

export default function FuelTypeForm({
  initialData,
  bookingTypeData,
}: FuelTypeFormProps) {
  const submit = useSubmit();
  const { setDirty } = useFormPage();

  const createFuelType = useCreateFuelType();
  const updateFuelType = useUpdateFuelType();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<FuelTypeFormSchema>({
    schema,
    defaultValues: initialData
      ? initFuelTypeFormValues(initialData)
      : fuelTypeDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.FuelType,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = async (values: FuelTypeFormSchema) => {
    await submit({
      mutation: initialData
        ? updateFuelType.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createFuelType.mutateAsync(values),

      success: isUpdate ? "Fuel type updated" : "Fuel type created",

      redirect: "/catalog/fuel-type",
    });

    clearDraft();

    form.reset(fuelTypeDefaultValues);
  };

  return (
    <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
      <FormWizard
        form={form}
        steps={fuelTypeSteps}
        loading={isSubmitting}
        unlockAll={!!initialData}
      >
        <FormWizardHeader steps={fuelTypeSteps} />

        <FormWizardContent>
          <FormWizardStep index={0}>
            <BasicStep />
          </FormWizardStep>

          <FormWizardStep index={1}>
            <BookingTypeStep bookingTypeData={bookingTypeData} />
          </FormWizardStep>

          <FormWizardStep index={2}>
            <StatusStep />
          </FormWizardStep>
        </FormWizardContent>

        <FormWizardFooter form={form} onSubmit={onSubmit} />
      </FormWizard>
    </AppForm>
  );
}
