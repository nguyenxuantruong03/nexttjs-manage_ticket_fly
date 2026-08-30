"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";
import { HotelSchemaForm } from "../form/schema/core/hotel.schema";
import { EntityOption } from "@/components/entity-selector";
import ProviderBookingCreateDialog from "@/app/(home)/provider_booking/components/ProviderBookingCreateDialog";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import AddressCreateDialog from "@/app/(home)/location/address/components/AddressCreateDialog";
import { ProviderBooking } from "@/types/users/provider-bookings";
import { Address } from "@/types/location/address";
import { Country } from "@/types/location/country/country";
import { City } from "@/types/location/city";
import { District } from "@/types/location/district";
import { Ward } from "@/types/location/ward";
import { BookingType } from "@/types/common/commerce/booking-type";

interface InformationStepProps {
  providerBookingData: ProviderBooking[];
  addressData: Address[];
  countryData: Country[];
  cityData: City[];
  districtData: District[];
  wardData: Ward[];
  bookingTypeData: BookingType[];
}

export default function InformationStep({
  providerBookingData,
  addressData,
  countryData,
  cityData,
  districtData,
  wardData,
  bookingTypeData,
}: InformationStepProps) {
  const providerBookingOptions: EntityOption<ProviderBooking>[] =
    providerBookingData?.map((provider) => ({
      value: provider.id,
      label: provider.displayName ?? "",
      description: provider.email ?? undefined,
      data: provider,
    }));

  const addressOptions: EntityOption<Address>[] = addressData.map(
    (address) => ({
      value: address.id,
      label:
        address.name ?? `${address.street ?? ""} ${address.houseNumber ?? ""}`,
      description: address.city?.name,
      data: address,
    }),
  );

  return (
    <>
      {/* ======================================================
          PROVIDER
      ====================================================== */}

      <FormSection
        title="Provider Information"
        description="External booking provider information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<HotelSchemaForm, ProviderBooking>
            name="information.providerBookingId"
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
        </div>
      </FormSection>

      {/* ======================================================
          PROPERTY INFORMATION
      ====================================================== */}

      <FormSection
        title="Property Information"
        description="Hotel type and building information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelSchemaForm>
            name="information.tower"
            label="Tower"
            placeholder="e.g. Tower A"
          />

          <FormInput<HotelSchemaForm>
            name="information.floor"
            label="Floor"
            type="number"
            placeholder="e.g. 10"
          />

          <FormInput<HotelSchemaForm>
            name="information.unitNumber"
            label="Unit Number"
            placeholder="e.g. 1005"
          />
        </div>
      </FormSection>

      {/* ======================================================
          ADDRESS
      ====================================================== */}

      <FormSection title="Address" description="Hotel address reference">
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<HotelSchemaForm, Address>
            name="information.addressId"
            label="Address"
            placeholder="Search address..."
            searchPlaceholder="Search address..."
            emptyText="No address found"
            createText="Create address"
            options={addressOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <AddressCreateDialog
                {...props}
                countries={countryData}
                cities={cityData}
                districts={districtData}
                wards={wardData}
              />
            )}
          />
        </div>
      </FormSection>
    </>
  );
}
