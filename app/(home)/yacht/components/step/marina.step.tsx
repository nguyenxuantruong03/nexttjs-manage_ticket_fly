// step/marina.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";
import { YachtFormSchema } from "../schema/core/yacht.schema";
import { Address } from "@/types/bookings/location/address";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import AddressCreateDialog from "@/app/(home)/location/address/components/AddressCreateDialog";
import { EntityOption } from "@/components/entity-selector";
import { Country } from "@/types/bookings/location/country";
import { City } from "@/types/bookings/location/city";
import { District } from "@/types/bookings/location/district";
import { Ward } from "@/types/bookings/location/ward";

interface MarinaStepProps {
  addresses: Address[];
  countries: Country[];
  cities: City[];
  districts: District[];
  wards: Ward[];
}

export default function MarinaStep({
  addresses,
  countries,
  cities,
  districts,
  wards,
}: MarinaStepProps) {
  const addressOptions: EntityOption<Address>[] = addresses.map((address) => ({
    value: address.id,
    label:
      address.name ?? `${address.street ?? ""} ${address.houseNumber ?? ""}`,
    description: address.city?.name,
    data: address,
  }));
  return (
    <>
      {/* ======================================================
          MARINA INFORMATION
      ====================================================== */}

      <FormSection
        title="Marina Information"
        description="Yacht departure marina details"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormSchema>
            name="marina.0.name"
            label="Marina Name"
          />

          <FormEntitySelector<YachtFormSchema, Address>
            name="marina.0.addressId"
            label="Marina Address"
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

          <FormInput<YachtFormSchema> name="marina.0.city" label="City" />

          <FormInput<YachtFormSchema> name="marina.0.country" label="Country" />

          <FormInput<YachtFormSchema>
            name="marina.0.contactPhone"
            label="Contact Phone"
          />

          <FormInput<YachtFormSchema>
            name="marina.0.operatingHours"
            label="Operating Hours"
          />

          <FormInput<YachtFormSchema>
            name="marina.0.latitude"
            label="Latitude"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="marina.0.longitude"
            label="Longitude"
            type="number"
          />
        </div>
      </FormSection>

      {/* ======================================================
          MARINA FACILITIES
      ====================================================== */}

      <FormSection
        title="Marina Facilities"
        description="Available facilities at marina"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <FormSwitch<YachtFormSchema>
            name="marina.0.marinaFacilities.fuelStation"
            label="Fuel Station"
          />

          <FormSwitch<YachtFormSchema>
            name="marina.0.marinaFacilities.restaurant"
            label="Restaurant"
          />

          <FormSwitch<YachtFormSchema>
            name="marina.0.marinaFacilities.cafe"
            label="Cafe"
          />

          <FormSwitch<YachtFormSchema>
            name="marina.0.marinaFacilities.parking"
            label="Parking"
          />

          <FormSwitch<YachtFormSchema>
            name="marina.0.marinaFacilities.waitingLounge"
            label="Waiting Lounge"
          />

          <FormSwitch<YachtFormSchema>
            name="marina.0.marinaFacilities.toilet"
            label="Toilet"
          />

          <FormSwitch<YachtFormSchema>
            name="marina.0.marinaFacilities.shower"
            label="Shower"
          />

          <FormSwitch<YachtFormSchema>
            name="marina.0.marinaFacilities.drinkingWater"
            label="Drinking Water"
          />

          <FormSwitch<YachtFormSchema>
            name="marina.0.marinaFacilities.electricity"
            label="Electricity"
          />

          <FormSwitch<YachtFormSchema>
            name="marina.0.marinaFacilities.wifi"
            label="WiFi"
          />

          <FormSwitch<YachtFormSchema>
            name="marina.0.marinaFacilities.security"
            label="Security"
          />

          <FormSwitch<YachtFormSchema>
            name="marina.0.marinaFacilities.cctv"
            label="CCTV"
          />

          <FormSwitch<YachtFormSchema>
            name="marina.0.marinaFacilities.luggageStorage"
            label="Luggage Storage"
          />

          <FormSwitch<YachtFormSchema>
            name="marina.0.marinaFacilities.convenienceStore"
            label="Convenience Store"
          />

          <FormSwitch<YachtFormSchema>
            name="marina.0.marinaFacilities.atm"
            label="ATM"
          />

          <FormSwitch<YachtFormSchema>
            name="marina.0.marinaFacilities.customs"
            label="Customs"
          />

          <FormSwitch<YachtFormSchema>
            name="marina.0.marinaFacilities.immigration"
            label="Immigration"
          />
        </div>
      </FormSection>

      {/* ======================================================
          MARINA ROUTING INFORMATION
      ====================================================== */}

      <FormSection
        title="Marina Location"
        description="Geographical information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormSchema>
            name="marina.0.latitude"
            label="Latitude"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="marina.0.longitude"
            label="Longitude"
            type="number"
          />
        </div>
      </FormSection>
    </>
  );
}
