"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateFuelType,
  useUpdateFuelType,
} from "@/hooks/catalog/fuel-type";

import { BookingType } from "@/types/common/commerce/booking-type";

import { FuelType } from "@/types/common/catalog/fuel-type";

import { FuelTypeFormSchema } from "./form/schema";

import BasicStep from "./step/basic.step";

import BookingTypeStep from "./step/booking-type.step";

import StatusStep from "./step/status.step";
import { fuelTypeFormConfig } from "./config";

// ======================================================
// PROPS
// ======================================================

interface FuelTypeFormProps {
  initialData?: FuelType;

  bookingTypeData: BookingType[];

  redirect?: boolean;
}

// ======================================================
// COMPONENT
// ======================================================

export default function FuelTypeForm({
  initialData,

  bookingTypeData,

  redirect = true,
}: FuelTypeFormProps) {
  // ======================================================
  // MUTATIONS
  // ======================================================

  const createFuelType = useCreateFuelType();

  const updateFuelType = useUpdateFuelType();

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <EntityFormWizard<FuelTypeFormSchema, FuelType>
      initialData={initialData}
      redirect={redirect}
      config={fuelTypeFormConfig}
      createMutation={createFuelType}
      updateMutation={updateFuelType}
    >
      {/* ======================================================
          STEP 0 - BASIC
      ====================================================== */}

      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      {/* ======================================================
          STEP 1 - BOOKING TYPE
      ====================================================== */}

      <FormWizardStep index={1}>
        <BookingTypeStep bookingTypeData={bookingTypeData} />
      </FormWizardStep>

      {/* ======================================================
          STEP 2 - STATUS
      ====================================================== */}

      <FormWizardStep index={2}>
        <StatusStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
