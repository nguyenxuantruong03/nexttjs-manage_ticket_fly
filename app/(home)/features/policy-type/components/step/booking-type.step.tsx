"use client";

import FormSection from "@/components/form/FormSection";

import { PolicyTypeFormSchema } from "../form/schema";

import { EntityOption } from "@/components/entity-selector";

import { BookingType } from "@/types/common/commerce/booking-type";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import BookingTypeCreateDialog from "@/app/(home)/commerce/booking-type/components/BookingTypeCreateDialog";

interface BookingTypeStepProps {
  bookingTypeData: BookingType[];
}

export default function BookingTypeStep({
  bookingTypeData,
}: BookingTypeStepProps) {
  const bookingTypeOptions: EntityOption<BookingType>[] = bookingTypeData.map(
    (bookingType) => ({
      value: bookingType.id,
      label: bookingType.name,
      description: bookingType.description ?? undefined,
      data: bookingType,
    }),
  );

  return (
    <FormSection
      title="Booking Type"
      description="Select the booking type for this policy type"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormEntitySelector<PolicyTypeFormSchema, BookingType>
          name="bookingTypeId"
          label="Booking Type"
          placeholder="Search booking type..."
          searchPlaceholder="Search booking type..."
          emptyText="No booking type found"
          createText="Create booking type"
          options={bookingTypeOptions}
          enableCreate
          renderCreateDialog={(props) => <BookingTypeCreateDialog {...props} />}
        />
      </div>
    </FormSection>
  );
}
