"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateCarRentalDocumentType,
  useUpdateCarRentalDocumentType,
} from "@/hooks/product-types/car-rental/document-type";

import { CarRentalDocumentType } from "@/types/product-types/car_rental/policies/required-documents.types";

import { CarRentalDocumentTypeFormSchema } from "./form/schema";

import { carRentalDocumentTypeFormConfig } from "./config";

import BasicStep from "./step/basic.step";

import StatusStep from "./step/status.step";

interface CarRentalDocumentTypeFormProps {
  initialData?: CarRentalDocumentType;

  redirect?: boolean;
}

export default function CarRentalDocumentTypeForm({
  initialData,
  redirect = true,
}: CarRentalDocumentTypeFormProps) {
  const createCarRentalDocumentType = useCreateCarRentalDocumentType();

  const updateCarRentalDocumentType = useUpdateCarRentalDocumentType();

  return (
    <EntityFormWizard<CarRentalDocumentTypeFormSchema, CarRentalDocumentType>
      initialData={initialData}
      redirect={redirect}
      config={carRentalDocumentTypeFormConfig}
      createMutation={createCarRentalDocumentType}
      updateMutation={updateCarRentalDocumentType}
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
