"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateBookingType,
  useUpdateBookingType,
} from "@/hooks/commerce/booking-type";

import { BookingType } from "@/types/common/commerce/booking-type";

import { BookingTypeFormSchema } from "./form/schema";

import { bookingTypeFormConfig } from "./config";

import BasicStep from "./step/basic.step";

import StatusStep from "./step/status.step";

interface BookingTypeFormProps {
  initialData?: BookingType;

  redirect?: boolean;
}

export default function BookingTypeForm({
  initialData,
  redirect = true,
}: BookingTypeFormProps) {
  const createBookingType = useCreateBookingType();

  const updateBookingType = useUpdateBookingType();

  return (
    <EntityFormWizard<BookingTypeFormSchema, BookingType>
      initialData={initialData}
      redirect={redirect}
      config={bookingTypeFormConfig}
      createMutation={createBookingType}
      updateMutation={updateBookingType}
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
