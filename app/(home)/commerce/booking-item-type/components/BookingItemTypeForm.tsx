"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import BasicStep from "./step/basic.step";

import BookingTypeStep from "./step/booking-type.step";

import StatusStep from "./step/status.step";

import { bookingItemTypeFormConfig } from "./config";

import {
  useCreateBookingItemType,
  useUpdateBookingItemType,
} from "@/hooks/commerce/booking-item-type";

import { BookingType } from "@/types/common/commerce/booking-type";

import { BookingItemType } from "@/types/common/commerce/booking-item-type.type";

import { BookingItemTypeFormSchema } from "./form/schema";

interface BookingItemTypeFormProps {
  initialData?: BookingItemType;

  bookingTypeData: BookingType[];

  redirect?: boolean;
}

export default function BookingItemTypeForm({
  initialData,
  bookingTypeData,
  redirect = true,
}: BookingItemTypeFormProps) {
  const createBookingItemType = useCreateBookingItemType();

  const updateBookingItemType = useUpdateBookingItemType();

  return (
    <EntityFormWizard<BookingItemTypeFormSchema, BookingItemType>
      initialData={initialData}
      redirect={redirect}
      config={bookingItemTypeFormConfig}
      createMutation={createBookingItemType}
      updateMutation={updateBookingItemType}
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
