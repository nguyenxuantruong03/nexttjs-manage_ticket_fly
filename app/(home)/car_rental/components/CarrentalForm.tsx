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

import { useCreateCarRental } from "@/hooks/car-rental";
import {
  CarRentalFormValues,
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

export default function CarRentalForm() {
  const submit = useSubmit();

  const createCarRental = useCreateCarRental();

  const { form, mode, isUpdate } = useAppForm<CarRentalFormValues>({
    schema: CarRentalSchema,
    defaultValues: defaultCarRentalValues,
  });

  const onSubmit = (values: any) =>
    submit({
      mutation: createCarRental.mutateAsync(values),
      success: "Car Rental created",
      redirect: "/car-rental",
    });

  return (
    <AppForm form={form} onSubmit={onSubmit}>
      <FormWizard steps={carRentalSteps}>
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

        <FormWizardFooter />
      </FormWizard>
    </AppForm>
  );
}
