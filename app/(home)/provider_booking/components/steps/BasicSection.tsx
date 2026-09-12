"use client";

import {
  FormCombobox,
  FormImageUpload,
  FormInput,
  FormTextarea,
} from "@/components/form/form-data";

import FormSection from "@/components/form/FormSection";
import { ProviderBookingFormSchema } from "../form/schema";
import { EntityOption } from "@/components/form/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import AddressCreateDialog from "@/app/(home)/location/address/components/AddressCreateDialog";
import { User } from "@/types/users/auth/users";
import { Address } from "@/types/location/address";
import { Country } from "@/types/location/country/country";
import { City } from "@/types/location/city";
import { District } from "@/types/location/district";
import { Ward } from "@/types/location/ward";

interface BasicSectionProps {
  userDatas: User[];
  addresses: Address[];
  countries: Country[];
  cities: City[];
  districts: District[];
  wards: Ward[];
}

export default function BasicSection({
  userDatas,
  addresses,
  countries,
  cities,
  districts,
  wards,
}: BasicSectionProps) {
  const addressOptions: EntityOption<Address>[] = addresses.map((address) => ({
    value: address.id,
    label:
      address.name ?? `${address.street ?? ""} ${address.houseNumber ?? ""}`,
    description: address.city?.name,
    data: address,
  }));
  return (
    <FormSection
      title="Basic Information"
      description="Basic provider information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormCombobox<ProviderBookingFormSchema>
          name="userId"
          label="Người dùng"
          placeholder="Search user..."
          searchPlaceholder="Search user..."
          emptyText="No user found"
          options={userDatas.map((user) => ({
            value: user.id,
            label: user.email,
          }))}
        />
        <FormInput<ProviderBookingFormSchema>
          name="displayName"
          label="Display Name"
          placeholder="Enter display name"
        />

        <FormInput<ProviderBookingFormSchema>
          name="officialName"
          label="Official Name"
          placeholder="Enter official business name"
        />

        <FormInput<ProviderBookingFormSchema>
          name="shortName"
          label="Short Name"
          placeholder="Enter short name"
        />

        <FormTextarea<ProviderBookingFormSchema>
          name="subtitle"
          label="Subtitle"
          placeholder="Enter a short subtitle"
        />

        <FormTextarea<ProviderBookingFormSchema>
          name="description"
          label="Description"
          placeholder="Enter provider description"
        />

        <FormImageUpload<ProviderBookingFormSchema> name="logo" label="Logo" />

        <FormImageUpload<ProviderBookingFormSchema>
          name="banner"
          label="Banner"
        />

        <FormEntitySelector<ProviderBookingFormSchema, Address>
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
      </div>
    </FormSection>
  );
}
