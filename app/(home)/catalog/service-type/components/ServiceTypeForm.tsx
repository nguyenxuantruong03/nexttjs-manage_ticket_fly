"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import BasicStep from "./step/basic.step";

import BookingTypeStep from "./step/booking-type.step";

import StatusStep from "./step/status.step";

import { serviceTypeFormConfig } from "./config";

import {
  useCreateServiceType,
  useUpdateServiceType,
} from "@/hooks/catalog/service-type";

import { BookingType } from "@/types/common/commerce/booking-type";

import { ServiceType } from "@/types/common/catalog/service-type.type";

import { ServiceTypeFormSchema } from "./form/schema";

interface ServiceTypeFormProps {
  initialData?: ServiceType;

  bookingTypeData: BookingType[];

  redirect?: boolean;
}

export default function ServiceTypeForm({
  initialData,
  bookingTypeData,
  redirect = true,
}: ServiceTypeFormProps) {
  const createServiceType = useCreateServiceType();

  const updateServiceType = useUpdateServiceType();

  return (
    <EntityFormWizard<ServiceTypeFormSchema, ServiceType>
      initialData={initialData}
      redirect={redirect}
      config={serviceTypeFormConfig}
      createMutation={createServiceType}
      updateMutation={updateServiceType}
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
