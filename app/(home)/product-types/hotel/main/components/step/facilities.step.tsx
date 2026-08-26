// step/facilities.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { HotelSchemaForm } from "../schema/core/hotel.schema";
import { EntityOption } from "@/components/entity-selector";
import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";
import { Facility } from "@/types/common/features/facility/facility";
import FacilityCreateDialog from "@/app/(home)/features/facility/components/FacilityCreateDialog";
import { FacilityCategory } from "@/types/common/features/facility/facility-category";
import { BookingType } from "@/types/common/commerce/booking-type";

interface FacilitiesStepProps {
  facilityData: Facility[];
  facilityCategoryData: FacilityCategory[]
  bookingTypeData: BookingType[]
}

export default function FacilitiesStep({ facilityData,bookingTypeData,facilityCategoryData }: FacilitiesStepProps) {
  const facilityOptions: EntityOption<Facility>[] = facilityData.map(
    (facility) => ({
      value: facility.id,
      label: facility.name,
      description: facility.description ?? undefined,
      data: facility,
    }),
  );

  return (
    <>
      {/* ======================================================
          HOTEL FACILITIES
      ====================================================== */}

      <FormSection
        title="Facilities"
        description="Hotel-level amenities & services"
      >
        <FormEntityMultiSelector<HotelSchemaForm, Facility>
          name="facilities.0.facilityId"
          label="Facilities"
          placeholder="Search facilities..."
          searchPlaceholder="Search facilities..."
          emptyText="No facility found"
          createText="Create facility"
          options={facilityOptions}
          enableCreate
          renderCreateDialog={(props) => (
            <FacilityCreateDialog
              bookingTypeData={bookingTypeData}
              facilityCategoryData={facilityCategoryData}
              {...props}
            />
          )}
        />
      </FormSection>
    </>
  );
}
