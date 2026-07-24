"use client";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { airportTransferSteps } from "./step/steps";

import { AppForm } from "@/components/form/form-data";

import { useAppForm } from "@/hooks/useAppForm";
import { airportTransferDefaultValues } from "./form/default-values";

import { useSubmit } from "@/hooks/useSubmit";
import {
  useCreateAirportTransfer,
  useUpdateAirportTransfer,
} from "@/hooks/airport-transfer";
import BasicStep from "./step/basic.step";
import RouteStep from "./step/route.step";
import VehicleStep from "./step/vehicle.step";
import ServiceStep from "./step/service.step";
import PricingStep from "./step/pricing.step";
import TripStep from "./step/trip.step";
import {
  AirportTransferFormSchema,
  AirportTransferSchema,
} from "./schema/core/schema";
import { useFormPage } from "@/components/form/form-context";
import { useEffect, useMemo } from "react";
import { useFormDraft } from "@/hooks/useFormDraft";
import { useSearchParams } from "next/navigation";
import { DraftEntity } from "@/components/daft/draft-config";
import { AirportTransfer } from "@/types/bookings/airport-transfer/core/airport-transfer.types";
import { initAirportTransferFormValues } from "./form/init-value";

interface AirportTransferFormProps {
  initialData?: AirportTransfer;
}

export default function AirportTransferForm({
  initialData,
}: AirportTransferFormProps) {
  const submit = useSubmit();

  const createAirportTransfer = useCreateAirportTransfer();
  const updateAirportTransfer = useUpdateAirportTransfer();
  const { setDirty } = useFormPage();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, mode, isUpdate } = useAppForm<AirportTransferFormSchema>({
    schema: AirportTransferSchema,

    defaultValues: initialData
      ? initAirportTransferFormValues(initialData)
      : airportTransferDefaultValues,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty]);

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.AirportTransfer,
    draftId: currentDraftId,
  });

  const onSubmit = (values: any) => {
    submit({
      mutation: initialData
        ? updateAirportTransfer.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createAirportTransfer.mutateAsync(values),
      success: isUpdate ? "Airport Transfer updated" :"Airport Transfer created",
      redirect: "/airport-transfer",
    });

    clearDraft();

    form.reset(values);
  };

  return (
    <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
      <FormWizard
        form={form}
        steps={airportTransferSteps}
        loading={isSubmitting}
        unlockAll={!!initialData}
      >
        <FormWizardHeader steps={airportTransferSteps} />

        <FormWizardContent>
          <FormWizardStep index={0}>
            <BasicStep />
          </FormWizardStep>

          <FormWizardStep index={1}>
            <RouteStep />
          </FormWizardStep>

          <FormWizardStep index={2}>
            <VehicleStep />
          </FormWizardStep>

          <FormWizardStep index={3}>
            <PricingStep />
          </FormWizardStep>

          <FormWizardStep index={4}>
            <TripStep />
          </FormWizardStep>

          <FormWizardStep index={5}>
            <ServiceStep />
          </FormWizardStep>
        </FormWizardContent>

        <FormWizardFooter form={form} onSubmit={onSubmit} />
      </FormWizard>
    </AppForm>
  );
}
