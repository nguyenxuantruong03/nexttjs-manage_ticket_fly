// step/availability.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { CarRentalFormSchema } from "../form/schema/core/car-rental.schema";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import AddressCreateDialog from "@/app/(home)/location/address/components/AddressCreateDialog";
import { EntityOption } from "@/components/form/entity-selector";
import { Address } from "@/types/location/address";
import { Country } from "@/types/location/country/country";
import { City } from "@/types/location/city";
import { District } from "@/types/location/district";
import { Ward } from "@/types/location/ward";

interface AvailabilityStepProps {
  addresses: Address[];
  countries: Country[];
  cities: City[];
  districts: District[];
  wards: Ward[];
}

export default function AvailabilityStep({
  addresses,
  countries,
  cities,
  districts,
  wards,
}: AvailabilityStepProps) {
  const addressOptions: EntityOption<Address>[] = addresses.map((address) => ({
    value: address.id,
    label:
      address.name ?? `${address.street ?? ""} ${address.houseNumber ?? ""}`,
    description: address.city?.name,
    data: address,
  }));

  return (
    <>
      <FormSection
        title="Vehicle Current Location"
        description="Current vehicle position"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<CarRentalFormSchema, Address>
            name="vehicle.0.locationCurrent.addressId"
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
        </div>
      </FormSection>
    </>
  );
}
