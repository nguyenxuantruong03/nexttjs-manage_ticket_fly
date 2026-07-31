"use client";

import FormSection from "@/components/form/FormSection";

import { FormCombobox, FormInput } from "@/components/form/form-data";
import { HotelSchemaForm } from "../schema/core/hotel.schema";
import { EntityOption } from "@/components/entity-selector";
import { ProviderBooking } from "@/types/bookings/provider-bookings";
import ProviderBookingCreateDialog from "@/app/(home)/provider_booking/components/ProviderBookingCreateDialog";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import { Address } from "@/types/bookings/location/address";
import { HotelType } from "@/types/bookings/hotel/core/hotel-information.types";
import TypeCreateDialog from "../../../type/components/TypeCreateDialog";
import AddressCreateDialog from "@/app/(home)/location/address/components/AddressCreateDialog";
import { Country } from "@/types/bookings/location/country";
import { Ward } from "@/types/bookings/location/ward";
import { City } from "@/types/bookings/location/city";
import { District } from "@/types/bookings/location/district";

interface InformationStepProps {
  providerBookingData: ProviderBooking[];
  addressData: Address[];
  hotelTypeData: HotelType[];
  countryData: Country[]
  cityData: City[]
  districtData: District[]
  wardData: Ward[]
}

export default function InformationStep({
  providerBookingData,
  addressData,
  hotelTypeData,
  countryData,
  cityData,
  districtData,
  wardData
}: InformationStepProps) {
  const providerBookingOptions: EntityOption<ProviderBooking>[] =
    providerBookingData?.map((provider) => ({
      value: provider.id,
      label: provider.displayName ?? "",
      description: provider.email ?? undefined,
      data: provider,
    }));

  const hotelTypeOptions: EntityOption<HotelType>[] = hotelTypeData.map(
    (type) => ({
      value: type.id,
      label: type.name,
      description: type.description ?? undefined,
      data: type,
    }),
  );

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
              <ProviderBookingCreateDialog addresses={addressData} {...props} />
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
          <FormEntitySelector<HotelSchemaForm, HotelType>
            name="information.hotelTypeId"
            label="Hotel Type"
            placeholder="Search hotel type..."
            searchPlaceholder="Search hotel type..."
            emptyText="No hotel type found"
            createText="Create hotel type"
            options={hotelTypeOptions}
            enableCreate
            renderCreateDialog={(props) => <TypeCreateDialog {...props} />}
          />

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
