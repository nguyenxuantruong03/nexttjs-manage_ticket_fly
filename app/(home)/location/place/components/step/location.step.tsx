"use client";

import FormSection from "@/components/form/FormSection";

import { FormCombobox, FormInput } from "@/components/form/form-data";

import { PlaceFormSchema } from "../form/schema";
import { Address } from "@/types/bookings/location/address";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import AddressCreateDialog from "../../../address/components/AddressCreateDialog";
import { EntityOption } from "@/components/entity-selector";
import { Country } from "@/types/bookings/location/country";
import { City } from "@/types/bookings/location/city";
import { District } from "@/types/bookings/location/district";
import { Ward } from "@/types/bookings/location/ward";

interface LocationStepProps {
  addresses: Address[];
  countries: Country[];
  cities: City[];
  districts: District[];
  wards: Ward[];
}

export default function LocationStep({
  addresses,
  countries,
  cities,
  districts,
  wards,
}: LocationStepProps) {
  const addressOptions: EntityOption<Address>[] = addresses.map((address) => ({
    value: address.id,
    label:
      address.name ?? `${address.street ?? ""} ${address.houseNumber ?? ""}`,
    description: address.city?.name,
    data: address,
  }));
  return (
    <FormSection
      title="Location"
      description="Place address and geographic information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormEntitySelector<PlaceFormSchema, Address>
          name="addressId"
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
              countries={countries}
              cities={cities}
              districts={districts}
              wards={wards}
            />
          )}
        />

        <FormInput<PlaceFormSchema>
          name="latitude"
          label="Latitude"
          type="number"
        />

        <FormInput<PlaceFormSchema>
          name="longitude"
          label="Longitude"
          type="number"
        />
      </div>
    </FormSection>
  );
}
