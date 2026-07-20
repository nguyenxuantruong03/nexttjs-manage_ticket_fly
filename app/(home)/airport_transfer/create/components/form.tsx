"use client";

import FormWizard from "@/components/form/wizard/FormWizard";

import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";

import FormWizardContent from "@/components/form/wizard/FormWizardContent";

import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";


import { airportTransferSchema, AirportTransferFormValues } from "./schema";

import { airportTransferSteps } from "./steps";

import BasicStep from "./sections/basic.step";

import RouteStep from "./sections/route.step";

import VehicleStep from "./sections/vehicle.step";

import { AppForm } from "@/components/form/form-data";
import PricingSection from "./sections/pricing.step";
import ScheduleSection from "./sections/schedule.step";
import VehicleSection from "./sections/vehicle.step";
import { useAppForm } from "@/hooks/useAppForm";

export default function AirportTransferForm() {
  const { form } = useAppForm<AirportTransferFormValues>({
    schema: airportTransferSchema,

    defaultValues: {
      name: "",

      slug: "",

      providerBookingId: "",

      serviceType: "",

      active: true,

      featured: false,

      searchable: true,

      instantConfirmation: true,
    },
  });

  const onSubmit = (values: AirportTransferFormValues) => {
    console.log(values);
  };

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
            <PricingSection />
          </FormWizardStep>

          <FormWizardStep index={4}>
            <ScheduleSection />
          </FormWizardStep>

          <FormWizardStep index={5}>
            <VehicleSection />
          </FormWizardStep>
        </FormWizardContent>

        <FormWizardFooter />
      </FormWizard>
    </AppForm>
  );
}
