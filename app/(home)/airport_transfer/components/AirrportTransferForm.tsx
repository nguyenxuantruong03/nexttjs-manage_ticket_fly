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
import { useCreateAirportTransfer } from "@/hooks/airport-transfer";
import BasicStep from "./step/basic.step";
import RouteStep from "./step/route.step";
import VehicleStep from "./step/vehicle.step";
import ServiceStep from "./step/service.step";
import PricingStep from "./step/pricing.step";
import TripStep from "./step/trip.step";
import {
  AirportTransferFormValues,
  AirportTransferSchema,
} from "./schema/core/schema";

export default function AirportTransferForm() {
  const submit = useSubmit();

  const createAirportTransfer = useCreateAirportTransfer();

  const { form, mode, isUpdate } = useAppForm<AirportTransferFormValues>({
    schema: AirportTransferSchema,

    defaultValues: airportTransferDefaultValues,
  });

  const onSubmit = (values: any) =>
    submit({
      mutation: createAirportTransfer.mutateAsync(values),
      success: "Airport Transfer created",
      redirect: "/airport-transfer",
    });

  return (
    <AppForm form={form} onSubmit={onSubmit}>
      <FormWizard steps={airportTransferSteps}>
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

        <FormWizardFooter />
      </FormWizard>
    </AppForm>
  );
}
