"use client";

import FormSection from "@/components/form/FormSection";

import { EntityOption } from "@/components/entity-selector";

import { BookingType } from "@/types/common/commerce/booking-type";

import { BookingItemTypeFormSchema } from "../form/schema";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import BookingTypeCreateDialog from "@/app/(home)/commerce/booking-type/components/BookingTypeCreateDialog";

interface BookingTypeStepProps {
  bookingTypeData: BookingType[];
}

export default function BookingTypeStep({
  bookingTypeData,
}: BookingTypeStepProps) {
  const bookingTypeEntityOptions: EntityOption<BookingType>[] =
    bookingTypeData.map((bookingType) => ({
      value: bookingType.id,
      label: bookingType.name,
      description: bookingType.description ?? undefined,
      data: bookingType,
    }));

  return (
    <FormSection
      title="Booking Type"
      description="Select the booking type for this booking item type"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormEntitySelector<
          BookingItemTypeFormSchema,
          BookingType
        >
          name="bookingTypeId"
          label="Booking Type"
          placeholder="Search booking type..."
          searchPlaceholder="Search booking type..."
          emptyText="No booking type found"
          createText="Create booking type"
          options={bookingTypeEntityOptions}
          enableCreate
          renderCreateDialog={(props) => (
            <BookingTypeCreateDialog {...props} />
          )}
        />
      </div>
    </FormSection>
  );
}