"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import BasicStep from "./step/basic.step";

import BookingTypeStep from "./step/booking-type.step";

import StatusStep from "./step/status.step";

import { vehicleTypeFormConfig } from "./config";

import {
  useCreateVehicleType,
  useUpdateVehicleType,
} from "@/hooks/catalog/vehicle-type";

import { BookingType } from "@/types/common/commerce/booking-type";

import { VehicleType } from "@/types/common/catalog/vehicle-type.type";

import { VehicleTypeFormSchema } from "./form/schema";

interface VehicleTypeFormProps {
  initialData?: VehicleType;

  bookingTypeData: BookingType[];

  redirect?: boolean;
}

export default function VehicleTypeForm({
  initialData,
  bookingTypeData,
  redirect = true,
}: VehicleTypeFormProps) {
  const createVehicleType = useCreateVehicleType();

  const updateVehicleType = useUpdateVehicleType();

  return (
    <EntityFormWizard<VehicleTypeFormSchema, VehicleType>
      initialData={initialData}
      redirect={redirect}
      config={vehicleTypeFormConfig}
      createMutation={createVehicleType}
      updateMutation={updateVehicleType}
    >
      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <BookingTypeStep bookingTypeData={bookingTypeData} />
      </FormWizardStep>

      <FormWizardStep index={2}>
        <StatusStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
