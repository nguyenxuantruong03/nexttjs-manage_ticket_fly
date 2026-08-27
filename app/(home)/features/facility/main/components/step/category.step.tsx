"use client";

import FormSection from "@/components/form/FormSection";

import { FacilityFormSchema } from "../form/schema";
import { FacilityCategory } from "@/types/common/features/facility/facility-category";
import { BookingType } from "@/types/common/commerce/booking-type";
import { EntityOption } from "@/components/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import FacilityCategoryCreateDialog from "../../../facility-category/components/FacilityCategoryCreateDialog";
import BookingTypeCreateDialog from "@/app/(home)/commerce/booking-type/components/BookingTypeCreateDialog";
import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";

interface CategoryStepProps {
  facilityCategoryData: FacilityCategory[];
  bookingTypeData: BookingType[];
}

export default function CategoryStep({
  facilityCategoryData,
  bookingTypeData,
}: CategoryStepProps) {
  const categoryOptions: EntityOption<FacilityCategory>[] =
    facilityCategoryData?.map((category) => ({
      value: category.id,
      label: category.name,
      description: category.description ?? undefined,
      data: category,
    })) ?? [];

  const bookingTypeOptions: EntityOption<BookingType>[] = bookingTypeData.map(
    (bookingType) => ({
      value: bookingType.id,
      label: bookingType.name,
      data: bookingType,
    }),
  );

  return (
    <FormSection
      title="Category"
      description="Configure the facility category and booking type"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormEntitySelector<FacilityFormSchema, FacilityCategory>
          name="categoryId"
          label="Facility Category"
          placeholder="Search facility category..."
          searchPlaceholder="Search facility category..."
          emptyText="No facility category found"
          createText="Create facility category"
          options={categoryOptions}
          enableCreate
          renderCreateDialog={(props) => (
            <FacilityCategoryCreateDialog
              bookingTypeData={bookingTypeData}
              {...props}
            />
          )}
        />

        <FormEntityMultiSelector<FacilityFormSchema, BookingType>
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
