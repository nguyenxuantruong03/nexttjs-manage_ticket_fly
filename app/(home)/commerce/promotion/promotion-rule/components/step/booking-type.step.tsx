"use client";

import FormSection from "@/components/form/FormSection";

import { PromotionRuleFormSchema } from "../form/schema";

import { BookingType } from "@/types/common/commerce/booking-type";

import { EntityOption } from "@/components/entity-selector";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import BookingTypeCreateDialog from "@/app/(home)/commerce/booking-type/components/BookingTypeCreateDialog";
import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";

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
      data: bookingType,
    }),
  );

  return (
    <FormSection
      title="Booking Type"
      description="Select the booking type for this promotion rule"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormEntityMultiSelector<PromotionRuleFormSchema, BookingType>
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
      </div>
    </FormSection>
  );
}
