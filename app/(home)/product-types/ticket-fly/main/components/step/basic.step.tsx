"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";
import { FlyFormSchema } from "../form/schema/core/fly.schema";
import { ProviderBooking } from "@/types/users/provider-bookings";
import { ServiceType } from "@/types/common/catalog/service-type.type";
import { BookingItemType } from "@/types/common/commerce/booking-item-type.type";
import { EntityOption } from "@/components/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import ProviderBookingCreateDialog from "@/app/(home)/provider_booking/components/ProviderBookingCreateDialog";
import ServiceTypeCreateDialog from "@/app/(home)/catalog/service-type/components/ServiceTypeCreateDialog";
import BookingItemTypeCreateDialog from "@/app/(home)/commerce/booking-item-type/components/BookingItemTypeCreateDialog";
import { BookingType } from "@/types/common/commerce/booking-type";
import { Address } from "@/types/location/address";

interface BasicStepProps {
  providerBookingData: ProviderBooking[];
  serviceTypeData: ServiceType[];
  bookingItemTypeData: BookingItemType[];
  bookingTypeData: BookingType[];
  addressData: Address[];
}

export default function BasicStep({
  providerBookingData,
  serviceTypeData,
  bookingItemTypeData,
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
  return (
    <FormSection
      title="Basic Information"
      description="Basic flight information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<FlyFormSchema> name="name" label="Flight Name" />
        <FormEntitySelector<FlyFormSchema, ProviderBooking>
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

        <FormEntitySelector<FlyFormSchema, ServiceType>
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

        <FormEntitySelector<FlyFormSchema, BookingItemType>
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
        <FormSwitch<FlyFormSchema> name="active" label="Active" />
      </div>
    </FormSection>
  );
}
