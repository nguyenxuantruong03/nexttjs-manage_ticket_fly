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

import { vehicleTypeSteps } from "./step/steps";
import BasicStep from "./step/basic.step";
import BookingTypeStep from "./step/booking-type.step";
import StatusStep from "./step/status.step";

import { initVehicleTypeFormValues } from "./form/init-value";
import { vehicleTypeDefaultValues } from "./form/default-values";
import { VehicleTypeFormSchema, schema } from "./form/schema";

import { BookingType } from "@/types/common/commerce/booking-type";
import { VehicleType } from "@/types/common/catalog/vehicle-type.type";
import {
  useCreateVehicleType,
  useUpdateVehicleType,
} from "@/hooks/catalog/vehicle-type";

interface VehicleTypeFormProps {
  initialData?: VehicleType;
  bookingTypeData: BookingType[];
}

export default function VehicleTypeForm({
  initialData,
  bookingTypeData,
}: VehicleTypeFormProps) {
  const submit = useSubmit();
  const { setDirty } = useFormPage();

  const createVehicleType = useCreateVehicleType();
  const updateVehicleType = useUpdateVehicleType();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<VehicleTypeFormSchema>({
    schema,
    defaultValues: initialData
      ? initVehicleTypeFormValues(initialData)
      : vehicleTypeDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.VehicleType,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = async (values: VehicleTypeFormSchema) => {
    await submit({
      mutation: initialData
        ? updateVehicleType.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createVehicleType.mutateAsync(values),

      success: isUpdate ? "Vehicle type updated" : "Vehicle type created",

      redirect: "/commerce/vehicle-type",
    });

    clearDraft();

    form.reset(vehicleTypeDefaultValues);
  };

  return (
    <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
      <FormWizard
        form={form}
        steps={vehicleTypeSteps}
        loading={isSubmitting}
        unlockAll={!!initialData}
      >
        <FormWizardHeader steps={vehicleTypeSteps} />

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
