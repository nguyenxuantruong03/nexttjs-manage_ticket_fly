"use client";

import FormSection from "@/components/form/FormSection";

import { FlyAirportFormSchema } from "../schema/schema";

import { EntityOption } from "@/components/entity-selector";
import AddressCreateDialog from "@/app/(home)/location/address/components/AddressCreateDialog";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import { Address } from "@/types/location/address";
import { Country } from "@/types/location/country/country";
import { City } from "@/types/location/city";
import { District } from "@/types/location/district";
import { Ward } from "@/types/location/ward";

interface RelationStepProps {
  addresses: Address[];
  countries: Country[];
  cities: City[];
  districts: District[];
  wards: Ward[];
}

export default function RelationStep({
  addresses,
  countries,
  cities,
  districts,
  wards,
}: RelationStepProps) {
  const addressOptions: EntityOption<Address>[] = addresses.map((address) => ({
    value: address.id,
    label:
      address.name ?? `${address.street ?? ""} ${address.houseNumber ?? ""}`,
    description: address.city?.name,
    data: address,
  }));

  return (
    <FormSection title="Relations" description="Airport related information">
      <FormEntitySelector<FlyAirportFormSchema, Address>
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
    </FormSection>
  );
}
