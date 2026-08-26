// step/basic.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";

import { HotelSchemaForm } from "../schema/core/hotel.schema";
import { EntityOption } from "@/components/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import { HotelStatus } from "@/types/product-types/hotel/enum/enums";
import { SEARCH_PRIORITY_OPTIONS } from "@/types/searchs/search-prioty-score";
import { ServiceType } from "@/types/common/catalog/service-type.type";
import { BookingItemType } from "@/types/common/commerce/booking-item-type.type";
import ServiceTypeCreateDialog from "@/app/(home)/catalog/service-type/components/ServiceTypeCreateDialog";
import BookingItemTypeCreateDialog from "@/app/(home)/commerce/booking-item-type/components/BookingItemTypeCreateDialog";
import { BookingType } from "@/types/common/commerce/booking-type";

const statusOptions = Object.values(HotelStatus).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

interface BasicStepProps {
  serviceTypeData: ServiceType[];
  bookingItemTypeData: BookingItemType[];
  bookingTypeData: BookingType[];
}

export default function BasicStep({
  serviceTypeData,
  bookingItemTypeData,
  bookingTypeData,
}: BasicStepProps) {
  const serviceTypeOptions: EntityOption<ServiceType>[] = serviceTypeData.map(
    (type) => ({
      value: type.id,
      label: type.name,
      description: type.description ?? undefined,
      data: type,
    }),
  );

  const bookingItemTypeOptions: EntityOption<BookingItemType>[] =
    bookingItemTypeData.map((type) => ({
      value: type.id,
      label: type.name,
      data: type,
    }));

  return (
    <>
      {/* ======================================================
          BASIC INFORMATION
      ====================================================== */}

      <FormSection
        title="Basic Information"
        description="General hotel information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelSchemaForm>
            name="name"
            label="Hotel Name"
            placeholder="Hotel name"
          />

          <FormSelect<HotelSchemaForm>
            name="status"
            label="Status"
            options={statusOptions}
          />

          <FormEntitySelector<HotelSchemaForm, ServiceType>
            name="serviceTypeId"
            label="Service Type"
            placeholder="Search service type..."
            searchPlaceholder="Search service type..."
            emptyText="No service type found"
            createText="Create service type"
            options={serviceTypeOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <ServiceTypeCreateDialog
                bookingTypeData={bookingTypeData}
                {...props}
              />
            )}
          />

          <FormEntitySelector<HotelSchemaForm, BookingItemType>
            name="bookingItemTypeId"
            label="Booking Item Type"
            placeholder="Search booking item type..."
            searchPlaceholder="Search booking item type..."
            emptyText="No booking item type found"
            createText="Create booking item type"
            options={bookingItemTypeOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <BookingItemTypeCreateDialog
                bookingTypeData={bookingTypeData}
                {...props}
              />
            )}
          />

          <FormSelect<HotelSchemaForm>
            name="searchPriority"
            label="Search Priority"
            placeholder="Select priority"
            options={SEARCH_PRIORITY_OPTIONS}
          />
        </div>
      </FormSection>

      {/* ======================================================
          VISIBILITY
      ====================================================== */}

      <FormSection title="Visibility" description="Control hotel visibility">
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<HotelSchemaForm>
            name="featured"
            label="Featured"
            description="Show hotel as featured"
          />

          <FormSwitch<HotelSchemaForm>
            name="searchable"
            label="Searchable"
            description="Allow hotel in search"
          />
        </div>
      </FormSection>
    </>
  );
}
