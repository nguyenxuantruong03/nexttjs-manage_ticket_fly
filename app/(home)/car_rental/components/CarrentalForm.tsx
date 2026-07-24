"use client";

import { AppForm } from "@/components/form/form-data";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";
import { useSubmit } from "@/hooks/useSubmit";

import { carRentalSteps } from "./step/steps";

import { useCreateCarRental, useUpdateCarRental } from "@/hooks/car-rental";
import {
  CarRentalFormSchema,
  CarRentalSchema,
} from "./schema/core/car-rental.schema";
import { defaultCarRentalValues } from "./form/default-values";
import BasicStep from "./step/basic.step";
import VehiclesStep from "./step/vehicles.step";
import ImagesStep from "./step/images.step";
import TripStep from "./step/trip.step";
import PricingStep from "./step/pricing.step";
import InsuranceStep from "./step/insurance.step";
import PoliciesStep from "./step/policies.step";
import OperationStep from "./step/operation.step";
import AvailabilityStep from "./step/availability.step";
import { useFormPage } from "@/components/form/form-context";
import { useEffect, useMemo } from "react";
import { useFormDraft } from "@/hooks/useFormDraft";
import { useSearchParams } from "next/navigation";
import { DraftEntity } from "@/components/daft/draft-config";
import { CarRental } from "@/types/bookings/car_rental/core/car-rental.types";
import { initCarRentalFormValues } from "./form/init-value";

interface CarRentalFormProps {
  initialData?: CarRental;
}

export default function CarRentalForm({ initialData }: CarRentalFormProps) {
  const submit = useSubmit();
  const { setDirty } = useFormPage();
  const createCarRental = useCreateCarRental();
  const updateCarRental = useUpdateCarRental();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, mode, isUpdate } = useAppForm<CarRentalFormSchema>({
    schema: CarRentalSchema,
    defaultValues: initialData
      ? initCarRentalFormValues(initialData)
      : defaultCarRentalValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.CarRental,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty]);

  const onSubmit = (values: any) => {
    submit({
      mutation: initialData
        ? updateCarRental.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createCarRental.mutateAsync(values),
      success: isUpdate ? "Car Rental updated" : "Car Rental created",
      redirect: "/car-rental",
    });

    clearDraft();

    form.reset(values);
  };

  return (
    <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
      <FormWizard
        form={form}
        steps={carRentalSteps}
        loading={isSubmitting}
        unlockAll={!!initialData}
      >
        <FormWizardHeader steps={carRentalSteps} />

        <FormWizardContent>
          {/* BASIC */}
          <FormWizardStep index={0}>
            <BasicStep />
          </FormWizardStep>

          {/* VEHICLES */}
          <FormWizardStep index={1}>
            <VehiclesStep />
          </FormWizardStep>

          {/* IMAGES */}
          <FormWizardStep index={2}>
            <ImagesStep />
          </FormWizardStep>

          {/* TRIP */}
          <FormWizardStep index={3}>
            <TripStep />
          </FormWizardStep>

          {/* PRICING */}
          <FormWizardStep index={4}>
            <PricingStep />
          </FormWizardStep>

          {/* INSURANCE */}
          <FormWizardStep index={5}>
            <InsuranceStep />
          </FormWizardStep>

          {/* POLICIES */}
          <FormWizardStep index={6}>
            <PoliciesStep />
          </FormWizardStep>

          {/* OPERATION */}
          <FormWizardStep index={7}>
            <OperationStep />
          </FormWizardStep>

          {/* AVAILABILITY */}
          <FormWizardStep index={8}>
            <AvailabilityStep />
          </FormWizardStep>
        </FormWizardContent>

        <FormWizardFooter form={form} onSubmit={onSubmit} />
      </FormWizard>
    </AppForm>
  );
}
