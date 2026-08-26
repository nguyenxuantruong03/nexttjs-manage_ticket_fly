"use client";

import FormSection from "@/components/form/FormSection";

import FormMultiCombobox from "@/components/form/form-data/FormMultiCombobox";

import { ProviderBookingFormSchema } from "../form/schema";
import { BookingType } from "@/types/common/commerce/booking-type";

type BookingTypeStepProps = {
  bookingTypeData: BookingType[];
};

export default function BookingTypeStep({
  bookingTypeData,
}: BookingTypeStepProps) {
  return (
    <FormSection
      title="Services"
      description="Select all services provided by this provider"
    >
      <FormMultiCombobox<ProviderBookingFormSchema>
        name="bookingTypeIds"
        label="Services"
        placeholder="Select services..."
        searchPlaceholder="Search services..."
        options={bookingTypeData.map((bookingType) => ({
          label: bookingType.name,
          value: bookingType.id,
        }))}
      />
    </FormSection>
  );
}
