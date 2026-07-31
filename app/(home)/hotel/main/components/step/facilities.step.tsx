// step/facilities.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { HotelSchemaForm } from "../schema/core/hotel.schema";
import {
  FacilityCategory,
  HotelFacility,
} from "@/types/bookings/hotel/facilities.types";
import { EntityOption } from "@/components/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import FacilityCreateDialog from "../../../facility/components/FacilityCreateDialog";

interface FacilitiesStepProps {
  facilityData: HotelFacility[];
  facilityCategoryData: FacilityCategory[];
}

export default function FacilitiesStep({
  facilityData,
  facilityCategoryData,
}: FacilitiesStepProps) {
  const facilityOptions: EntityOption<HotelFacility>[] = facilityData.map(
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
        title="Hotel Facilities"
        description="Amenities and services available at the hotel"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<HotelSchemaForm, HotelFacility>
            name="facilities.0.facilityId"
            label="Facility"
            placeholder="Search facility..."
            searchPlaceholder="Search facility..."
            emptyText="No facility found"
            createText="Create facility"
            options={facilityOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <FacilityCreateDialog
                {...props}
                categories={facilityCategoryData}
              />
            )}
          />
        </div>
      </FormSection>
    </>
  );
}
