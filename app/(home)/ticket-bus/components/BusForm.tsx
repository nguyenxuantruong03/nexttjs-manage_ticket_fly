"use client";

import { AppForm } from "@/components/form/form-data";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";
import { useSubmit } from "@/hooks/useSubmit";

import { busDefaultValues } from "./form/default-values";
import { busSteps } from "./step/steps";

import { useCreateBus } from "@/hooks/bus";
import { BusFormValues, BusSchema } from "./schema/core/bus.schema";
import BasicStep from "./step/basic.step";
import RoutesStep from "./step/routes.step";
import VehiclesStep from "./step/vehicles.step";
import SeatsStep from "./step/seats.step";
import PricingStep from "./step/pricing.step";
import PoliciesStep from "./step/policies.step";
import ImagesStep from "./step/images.step";
import ScheduleStep from "./step/schedule.step";

export default function BusForm() {
  const submit = useSubmit();
  const createBus = useCreateBus();

  const { form } = useAppForm<BusFormValues>({
    schema: BusSchema,
    defaultValues: busDefaultValues,
  });

  const onSubmit = (values: any) =>
    submit({
      mutation: createBus.mutateAsync(values),
      success: "Bus created",
      redirect: "/bus",
    });

  return (
    <AppForm form={form} onSubmit={onSubmit}>
      <FormWizard steps={busSteps}>
        <FormWizardHeader steps={busSteps} />

        <FormWizardContent>
          <FormWizardStep index={0}>
            <BasicStep />
          </FormWizardStep>

          <FormWizardStep index={1}>
            <RoutesStep />
          </FormWizardStep>

          <FormWizardStep index={2}>
            <VehiclesStep />
          </FormWizardStep>

          <FormWizardStep index={3}>
            <SeatsStep />
          </FormWizardStep>

          <FormWizardStep index={4}>
            <PricingStep />
          </FormWizardStep>

          <FormWizardStep index={5}>
            <PoliciesStep />
          </FormWizardStep>

          <FormWizardStep index={6}>
            <ImagesStep />
          </FormWizardStep>

          <FormWizardStep index={7}>
            <ScheduleStep />
          </FormWizardStep>

        </FormWizardContent>

        <FormWizardFooter />
      </FormWizard>
    </AppForm>
  );
}
