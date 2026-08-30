"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateCarRentalInsuranceType,
  useUpdateCarRentalInsuranceType,
} from "@/hooks/product-types/car-rental/insurance-type";

import { InsuranceType } from "@/types/product-types/car_rental/insurance-type.type";

import { CarRentalInsuranceTypeFormSchema } from "./form/schema";

import { carRentalInsuranceTypeFormConfig } from "./config";

import BasicStep from "./step/basic.step";

import StatusStep from "./step/status.step";

interface CarRentalInsuranceTypeFormProps {
  initialData?: InsuranceType;

  redirect?: boolean;
}

export default function CarRentalInsuranceTypeForm({
  initialData,
  redirect = true,
}: CarRentalInsuranceTypeFormProps) {
  const createCarRentalInsuranceType = useCreateCarRentalInsuranceType();

  const updateCarRentalInsuranceType = useUpdateCarRentalInsuranceType();

  return (
    <EntityFormWizard<CarRentalInsuranceTypeFormSchema, InsuranceType>
      initialData={initialData}
      redirect={redirect}
      config={carRentalInsuranceTypeFormConfig}
      createMutation={createCarRentalInsuranceType}
      updateMutation={updateCarRentalInsuranceType}
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
