// step/basic.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch, FormSelect } from "@/components/form/form-data";

import { CarRentalFormSchema } from "../form/schema/core/car-rental.schema";
import FormMultiCombobox from "@/components/form/form-data/FormMultiCombobox";
import { SearchTag } from "@/types/searchs/search/tag.types";
import { DriverOption } from "@/types/product-types/car_rental/enums";
import { SEARCH_PRIORITY_OPTIONS } from "@/types/searchs/search-prioty-score";
import { ProviderBooking } from "@/types/users/provider-bookings";
import { EntityOption } from "@/components/form/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import ProviderBookingCreateDialog from "@/app/(home)/provider_booking/components/ProviderBookingCreateDialog";
import { BookingType } from "@/types/common/commerce/booking-type";
import { Address } from "@/types/location/address";
import { ServiceType } from "@/types/common/catalog/service-type.type";
import ServiceTypeCreateDialog from "@/app/(home)/catalog/service-type/components/ServiceTypeCreateDialog";
import { BookingItemType } from "@/types/common/commerce/booking-item-type.type";
import BookingItemTypeCreateDialog from "@/app/(home)/commerce/booking-item-type/components/BookingItemTypeCreateDialog";
import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";
import SearchTagCreateDialog from "@/app/(home)/search/tag/components/SearchTagCreateDialog";

interface BasicStepProps {
  searchTagData: SearchTag[];
  providerBookingData: ProviderBooking[];
  bookingTypeData: BookingType[];
  addressData: Address[];
  serviceTypeData: ServiceType[];
  bookingItemTypeData: BookingItemType[];
}

const driverOptionOptions = Object.values(DriverOption).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

export default function BasicStep({
  searchTagData,
  providerBookingData,
  bookingTypeData,
  addressData,
  serviceTypeData,
  bookingItemTypeData,
}: BasicStepProps) {
  const providerBookingOptions: EntityOption<ProviderBooking>[] =
    providerBookingData?.map((provider) => ({
      value: provider.id,
      label: provider.displayName ?? "",
      description: provider.email ?? undefined,
      data: provider,
    }));

  const serviceTypeOptions: EntityOption<ServiceType>[] = serviceTypeData.map(
    (serviceType) => ({
      value: serviceType.id,
      label: serviceType.name,
      description: serviceType.description ?? undefined,
      data: serviceType,
    }),
  );

  const bookingItemTypeOptions: EntityOption<BookingItemType>[] =
    bookingItemTypeData.map((bookingItemType) => ({
      value: bookingItemType.id,
      label: bookingItemType.name,
      description: bookingItemType.description ?? undefined,
      data: bookingItemType,
    }));

  const tagOptions: EntityOption<SearchTag>[] = searchTagData.map((tag) => ({
    value: tag.id,
    label: tag.name,
    data: tag,
  }));

  return (
    <>
      <FormSection title="Car Rental" description="General rental information">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<CarRentalFormSchema> name="name" label="Rental Name" />

          <FormSelect<CarRentalFormSchema>
            name="driverOption"
            label="Driver Option"
            options={driverOptionOptions}
          />

          <FormEntitySelector<CarRentalFormSchema, ServiceType>
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

          <FormEntitySelector<CarRentalFormSchema, BookingItemType>
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

          <FormEntitySelector<CarRentalFormSchema, ProviderBooking>
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
                bookingTypes={bookingTypeData}
                addresses={addressData}
                {...props}
              />
            )}
          />

          <FormSelect<CarRentalFormSchema>
            name="searchPriority"
            label="Search Priority"
            placeholder="Select search priority"
            options={SEARCH_PRIORITY_OPTIONS}
          />
        </div>
      </FormSection>

      <FormSection title="Search Metadata" description="Search">
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntityMultiSelector<CarRentalFormSchema, SearchTag>
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

      <FormSection
        title="Visibility"
        description="Rental availability and display settings"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<CarRentalFormSchema> name="active" label="Active" />

          <FormSwitch<CarRentalFormSchema> name="featured" label="Featured" />

          <FormSwitch<CarRentalFormSchema>
            name="searchable"
            label="Searchable"
          />
        </div>
      </FormSection>
    </>
  );
}
