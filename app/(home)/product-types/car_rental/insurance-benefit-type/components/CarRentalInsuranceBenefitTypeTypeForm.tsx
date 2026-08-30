"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateCarRentalInsuranceBenefitType,
  useUpdateCarRentalInsuranceBenefitType,
} from "@/hooks/product-types/car-rental/insurance-benefit-type";

import { InsuranceBenefitType } from "@/types/product-types/car_rental/insurance-type.type";

import { CarRentalInsuranceBenefitTypeFormSchema } from "./form/schema";

import { carRentalInsuranceBenefitTypeFormConfig } from "./config";

import BasicStep from "./step/basic.step";

import StatusStep from "./step/status.step";

interface CarRentalInsuranceBenefitTypeFormProps {
  initialData?: InsuranceBenefitType;

  redirect?: boolean;
}

export default function CarRentalInsuranceBenefitTypeForm({
  initialData,
  redirect = true,
}: CarRentalInsuranceBenefitTypeFormProps) {
  const createCarRentalInsuranceBenefitType =
    useCreateCarRentalInsuranceBenefitType();

  const updateCarRentalInsuranceBenefitType =
    useUpdateCarRentalInsuranceBenefitType();

  return (
    <EntityFormWizard<
      CarRentalInsuranceBenefitTypeFormSchema,
      InsuranceBenefitType
    >
      initialData={initialData}
      redirect={redirect}
      config={carRentalInsuranceBenefitTypeFormConfig}
      createMutation={createCarRentalInsuranceBenefitType}
      updateMutation={updateCarRentalInsuranceBenefitType}
    >
      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <StatusStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
