import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import { EntityOption } from "@/components/form/entity-selector";

import { Address } from "@/types/location/address";

import { YachtFormSchema } from "../form/schema/core/yacht.schema";

import AddressCreateDialog from "@/app/(home)/location/address/components/AddressCreateDialog";
import { Country } from "@/types/location/country/country";
import { City } from "@/types/location/city";
import { District } from "@/types/location/district";
import { Ward } from "@/types/location/ward";
import { Facility } from "@/types/common/features/facility/facility";
import FacilityCreateDialog from "@/app/(home)/features/facility/main/components/FacilityCreateDialog";
import { FacilityCategory } from "@/types/common/features/facility/facility-category";
import { BookingType } from "@/types/common/commerce/booking-type";

interface MarinaStepProps {
  addresses: Address[];
  countries: Country[];
  cities: City[];
  districts: District[];
  wards: Ward[];
  facilityData: Facility[];
  facilityCategoryData: FacilityCategory[];
  bookingTypeData: BookingType[];
}

export default function MarinaStep({
  addresses,
  countries,
  cities,
  districts,
  wards,
  facilityData,
  facilityCategoryData,
  bookingTypeData,
}: MarinaStepProps) {
  const addressOptions: EntityOption<Address>[] = addresses.map((address) => ({
    value: address.id,
    label:
      address.name ?? `${address.street ?? ""} ${address.houseNumber ?? ""}`,
    description: address.city?.name,
    data: address,
  }));

  const facilityOptions: EntityOption<Facility>[] = facilityData.map(
    (facility) => ({
      value: facility.id,
      label: facility.name,
      description: facility.description ?? undefined,
      data: facility,
    }),
  );

  return (
    <>
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

      <FormSection
        title="Marina Facilities"
        description="Available facilities at marina"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<YachtFormSchema, Facility>
            name="marina.0.marinaFacilities.0.facilityId"
            label="Facility"
            placeholder="Search facility..."
            searchPlaceholder="Search facility..."
            emptyText="No facility found"
            createText="Create facility"
            options={facilityOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <FacilityCreateDialog
                facilityCategoryData={facilityCategoryData}
                bookingTypeData={bookingTypeData}
                {...props}
              />
            )}
          />

          <FormSwitch<YachtFormSchema>
            name="marina.0.marinaFacilities.0.active"
            label="Active"
          />
        </div>
      </FormSection>
    </>
  );
}
