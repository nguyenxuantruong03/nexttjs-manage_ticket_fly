// step/basic.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";

import { SearchTag } from "@/types/searchs/search/tag.types";
import { SEARCH_PRIORITY_OPTIONS } from "@/types/searchs/search-prioty-score";
import ServiceTypeCreateDialog from "@/app/(home)/catalog/service-type/components/ServiceTypeCreateDialog";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import BookingItemTypeCreateDialog from "@/app/(home)/commerce/booking-item-type/components/BookingItemTypeCreateDialog";
import ProviderBookingCreateDialog from "@/app/(home)/provider_booking/components/ProviderBookingCreateDialog";
import { EntityOption } from "@/components/form/entity-selector";
import { ServiceType } from "@/types/common/catalog/service-type.type";
import { BookingItemType } from "@/types/common/commerce/booking-item-type.type";
import { ProviderBooking } from "@/types/users/provider-bookings";
import { BookingType } from "@/types/common/commerce/booking-type";
import { Address } from "@/types/location/address";
import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";
import SearchTagCreateDialog from "@/app/(home)/search/tag/components/SearchTagCreateDialog";
import { BusFormSchema } from "../form/schema/core/bus.schema";

interface BasicStepProps {
  searchTagData: SearchTag[];
  serviceTypeData: ServiceType[];
  bookingItemTypeData: BookingItemType[];
  providerBookingData: ProviderBooking[];
  bookingTypeData: BookingType[];
  addressData: Address[];
}

export default function BasicStep({
  searchTagData,
  serviceTypeData,
  bookingItemTypeData,
  providerBookingData,
  bookingTypeData,
  addressData,
}: BasicStepProps) {
  const providerBookingOptions: EntityOption<ProviderBooking>[] =
    providerBookingData.map((providerBooking) => ({
      value: providerBooking.id,
      label: providerBooking.displayName,
      description: providerBooking.description ?? undefined,
      data: providerBooking,
    }));

  const bookingItemTypeOptions: EntityOption<BookingItemType>[] =
    bookingItemTypeData.map((bookingItemType) => ({
      value: bookingItemType.id,
      label: bookingItemType.name,
      description: bookingItemType.description ?? undefined,
      data: bookingItemType,
    }));

  const serviceTypeOptions: EntityOption<ServiceType>[] = serviceTypeData.map(
    (serviceType) => ({
      value: serviceType.id,
      label: serviceType.name,
      description: serviceType.description ?? undefined,
      data: serviceType,
    }),
  );

  const tagOptions: EntityOption<SearchTag>[] = searchTagData.map((tag) => ({
    value: tag.id,
    label: tag.name,
    data: tag,
  }));

  return (
    <>
      <FormSection
        title="Bus Information"
        description="General bus information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<BusFormSchema, ProviderBooking>
            name="providerBookingId"
            label="Provider Booking"
            placeholder="Search provider booking..."
            searchPlaceholder="Search provider booking..."
            emptyText="No provider booking found"
            createText="Create provider booking"
            options={providerBookingOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <ProviderBookingCreateDialog
                addresses={addressData}
                bookingTypes={bookingTypeData}
                {...props}
              />
            )}
          />

          <FormEntitySelector<BusFormSchema, BookingItemType>
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

          <FormEntitySelector<BusFormSchema, ServiceType>
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

          <FormInput<BusFormSchema> name="name" label="Bus Name" />

          <FormSelect<BusFormSchema>
            name="searchPriority"
            label="Search Priority"
            placeholder="Select search priority"
            options={SEARCH_PRIORITY_OPTIONS}
          />

          <FormSwitch<BusFormSchema> name="active" label="Active" />

          <FormSwitch<BusFormSchema> name="searchable" label="Searchable" />

          <FormSwitch<BusFormSchema> name="featured" label="Featured" />
        </div>
      </FormSection>

      <FormSection
        title="Search Metadata"
        description="SEO & search configuration"
      >
        <div className="grid gap-6">
          <FormEntityMultiSelector<BusFormSchema, SearchTag>
            name="tagIds"
            label="Tags"
            placeholder="Search tags..."
            searchPlaceholder="Search tags..."
            emptyText="No tags found"
            createText="Create tag"
            options={tagOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <SearchTagCreateDialog
                bookingTypeData={bookingTypeData}
                {...props}
              />
            )}
          />
        </div>
      </FormSection>
    </>
  );
}
