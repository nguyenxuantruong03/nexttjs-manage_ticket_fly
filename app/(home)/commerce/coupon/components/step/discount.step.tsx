"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSelect } from "@/components/form/form-data";

import { CouponFormSchema } from "../form/schema";
import { DiscountType } from "@/types/common/commerce/promotion/promotion";
import { BookingType } from "@/types/common/commerce/booking-type";
import { EntityOption } from "@/components/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import BookingTypeCreateDialog from "../../../booking-type/components/BookingTypeCreateDialog";

interface DiscountStepProps {
  bookingTypeData: BookingType[];
}

export default function DiscountStep({ bookingTypeData }: DiscountStepProps) {
  const bookingTypeOptions: EntityOption<BookingType>[] =
    bookingTypeData?.map((type) => ({
      value: type.id,
      label: type.name,
      description: type.description ?? undefined,
      data: type,
    })) ?? [];

  return (
    <FormSection title="Discount" description="Configure the coupon discount">
      <div className="grid gap-6 md:grid-cols-2">
        <FormSelect<CouponFormSchema>
          name="discountType"
          label="Discount Type"
          options={[
            {
              label: "Percentage",
              value: DiscountType.percentage,
            },
            {
              label: "Fixed Amount",
              value: DiscountType.fixed_amount,
            },
          ]}
        />

        <FormEntitySelector<CouponFormSchema, BookingType>
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

        <FormInput<CouponFormSchema>
          name="value"
          label="Value"
          type="number"
          placeholder="0"
        />

        <FormInput<CouponFormSchema>
          name="maxDiscount"
          label="Max Discount"
          type="number"
          placeholder="0"
        />

        <FormInput<CouponFormSchema>
          name="minimumAmount"
          label="Minimum Amount"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}
