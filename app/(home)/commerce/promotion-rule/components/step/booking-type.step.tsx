"use client";

import FormSection from "@/components/form/FormSection";

import { PromotionRuleFormSchema } from "../form/schema";

import { BookingType } from "@/types/common/commerce/booking-type";

import { EntityOption } from "@/components/entity-selector";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import BookingTypeCreateDialog from "../../../booking-type/components/BookingTypeCreateDialog";

interface BookingTypeStepProps {
  bookingTypeData: BookingType[];
}

export default function BookingTypeStep({
  bookingTypeData,
}: BookingTypeStepProps) {
  const bookingTypeOptions: EntityOption<BookingType>[] =
    bookingTypeData?.map((type) => ({
      value: type.id,
      label: type.name,
      description: type.description ?? undefined,
      data: type,
    })) ?? [];

  return (
    <FormSection
      title="Booking Type"
      description="Select the booking type for this promotion rule"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormEntitySelector<PromotionRuleFormSchema, BookingType>
          name="bookingTypeId"
          label="Booking Type"
          placeholder="Search booking type..."
          searchPlaceholder="Search booking type..."
          emptyText="No booking type found"
          createText="Create booking type"
          options={bookingTypeOptions}
          enableCreate
          renderCreateDialog={(props) => (
            <BookingTypeCreateDialog {...props} />
          )}
        />
      </div>
    </FormSection>
  );
}