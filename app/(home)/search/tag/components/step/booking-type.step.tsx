"use client";

import FormSection from "@/components/form/FormSection";
import { SearchTagFormSchema } from "../form/schema";

import { BookingType } from "@/types/common/commerce/booking-type";
import { EntityOption } from "@/components/entity-selector";
import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";
import BookingTypeCreateDialog from "@/app/(home)/commerce/booking-type/components/BookingTypeCreateDialog";

type SearchTagStepProps = {
  bookingTypeData: BookingType[];
};

export default function SearchTagStep({ bookingTypeData }: SearchTagStepProps) {
  const bookingTypeOptions: EntityOption<BookingType>[] = bookingTypeData.map(
    (bookingType) => ({
      value: bookingType.id,
      label: bookingType.name,
      data: bookingType,
    }),
  );

  return (
    <FormSection
      title="Booking Types"
      description="Select all booking types associated with this search tag"
    >
      <FormEntityMultiSelector<SearchTagFormSchema, BookingType>
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
