"use client";

import FormSection from "@/components/form/FormSection";

import { ProviderBookingFormSchema } from "../form/schema";
import { BookingType } from "@/types/common/commerce/booking-type";
import BookingTypeCreateDialog from "@/app/(home)/commerce/booking-type/components/BookingTypeCreateDialog";
import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";
import { EntityOption } from "@/components/form/entity-selector";

type BookingTypeStepProps = {
  bookingTypeData: BookingType[];
};

export default function BookingTypeStep({
  bookingTypeData,
}: BookingTypeStepProps) {
  const bookingTypeOptions: EntityOption<BookingType>[] = bookingTypeData.map(
    (bookingType) => ({
      value: bookingType.id,
      label: bookingType.name,
      data: bookingType,
    }),
  );

  return (
    <FormSection
      title="Services"
      description="Select all services provided by this provider"
    >
      <FormEntityMultiSelector<ProviderBookingFormSchema, BookingType>
        name="bookingTypeIds"
        label="Booking Types"
        placeholder="Search booking types..."
        searchPlaceholder="Search booking types..."
        emptyText="No booking types found"
        createText="Create booking type"
        options={bookingTypeOptions}
        enableCreate
        renderCreateDialog={(props) => <BookingTypeCreateDialog {...props} />}
      />
    </FormSection>
  );
}
