"use client";

import FormSection from "@/components/form/FormSection";
import FormMultiCombobox from "@/components/form/form-data/FormMultiCombobox";

import { SearchTagFormSchema } from "../form/schema";

import { BookingType } from "@/types/common/commerce/booking-type";

type SearchTagStepProps = {
  bookingTypeData: BookingType[];
};

export default function SearchTagStep({ bookingTypeData }: SearchTagStepProps) {
  return (
    <FormSection
      title="Booking Types"
      description="Select all booking types associated with this search tag"
    >
      <FormMultiCombobox<SearchTagFormSchema>
        name="bookingTypeIds"
        label="Booking Types"
        placeholder="Select booking types..."
        searchPlaceholder="Search booking types..."
        options={bookingTypeData.map((bookingType) => ({
          label: bookingType.name,
          value: bookingType.id,
        }))}
      />
    </FormSection>
  );
}
