"use client";

import FormSection from "@/components/form/FormSection";

import {
  FormInput,
  FormSwitch,
  FormTextarea,
} from "@/components/form/form-data";

import { AirportTransferFormSchema } from "../schema/core/schema";
import { EntityOption } from "@/components/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import { ServiceType } from "@/types/common/catalog/service-type.type";
import ServiceTypeCreateDialog from "@/app/(home)/catalog/service-type/components/ServiceTypeCreateDialog";
import { BookingType } from "@/types/common/commerce/booking-type";
import { ProviderBooking } from "@/types/users/provider-bookings";
import { Address } from "@/types/location/address";
import ProviderBookingCreateDialog from "@/app/(home)/provider_booking/components/ProviderBookingCreateDialog";
import BookingItemTypeCreateDialog from "@/app/(home)/commerce/booking-item-type/components/BookingItemTypeCreateDialog";
import { BookingItemType } from "@/types/common/commerce/booking-item-type.type";

interface BasicStepProps {
  providerBookingData: ProviderBooking[];
  addressData: Address[];
  serviceTypeData: ServiceType[];
  bookingTypeData: BookingType[];
  bookingItemTypeData: BookingItemType[];
}

export default function BasicStep({
  serviceTypeData,
  bookingTypeData,
  providerBookingData,
  addressData,
  bookingItemTypeData,
}: BasicStepProps) {
  const serviceTypeOptions: EntityOption<ServiceType>[] = serviceTypeData.map(
    (type) => ({
      value: type.id,
      label: type.name,
      description: type.description ?? undefined,
      data: type,
    }),
  );

  const providerBookingOptions: EntityOption<ProviderBooking>[] =
    providerBookingData?.map((provider) => ({
      value: provider.id,
      label: provider.displayName ?? "",
      description: provider.email ?? undefined,
      data: provider,
    }));

  const bookingItemTypeOptions: EntityOption<BookingItemType>[] =
    bookingItemTypeData.map((type) => ({
      value: type.id,
      label: type.name,
      description: type.description ?? undefined,
      data: type,
    }));

  return (
    <>
      {/* Basic Information */}
      <FormSection
        title="Basic Information"
        description="General airport transfer information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<AirportTransferFormSchema, ProviderBooking>
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

          <FormInput<AirportTransferFormSchema>
            name="name"
            label="Name"
            placeholder="Enter transfer name"
          />

          <FormEntitySelector<AirportTransferFormSchema, BookingItemType>
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

          <FormEntitySelector<AirportTransferFormSchema, ServiceType>
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

          <FormSwitch<AirportTransferFormSchema>
            name="instantConfirmation"
            label="Instant Confirmation"
          />

          <FormSwitch<AirportTransferFormSchema> name="active" label="Active" />
        </div>
      </FormSection>

      {/* Notice */}
      <FormSection title="Notice" description="Customer notice information">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormSchema>
            name="notice.title"
            label="Title"
            placeholder="Enter notice title"
          />

          <FormInput<AirportTransferFormSchema>
            name="notice.color"
            label="Color"
            placeholder="e.g. blue, red, green"
          />

          <FormInput<AirportTransferFormSchema>
            name="notice.icon"
            label="Icon"
            placeholder="Enter icon name"
          />

          <FormInput<AirportTransferFormSchema>
            name="notice.priority"
            label="Priority"
            type="number"
            placeholder="Enter notice priority"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="notice.active"
            label="Active"
          />
        </div>

        <div className="mt-6">
          <FormTextarea<AirportTransferFormSchema>
            name="notice.description"
            label="Description"
            placeholder="Enter customer notice description"
          />
        </div>
      </FormSection>
    </>
  );
}
