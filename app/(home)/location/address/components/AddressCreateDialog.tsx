"use client";

import {
  FormCombobox,
  FormInput,
  FormSwitch,
} from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/form/entity-selector";

import { useCreateAddress } from "@/hooks/location/address";

import { AddressFormSchema, AddressSchema } from "./form/schema";

import { addressDefaultValues } from "./form/default-values";

import { Address } from "@/types/location/address";

import { Country } from "@/types/location/country/country";

import { City } from "@/types/location/city";

import { District } from "@/types/location/district";

import { Ward } from "@/types/location/ward";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

// ======================================================
// PROPS
// ======================================================

interface AddressCreateDialogProps extends EntityCreateDialogProps<Address> {
  countries: Country[];
  cities: City[];
  districts: District[];
  wards: Ward[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function AddressCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  countries,
  cities,
  districts,
  wards,
}: AddressCreateDialogProps) {
  const createAddress = useCreateAddress();

  return (
    <EntityCreateFormDialog<AddressFormSchema, Partial<Address>, Address>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createAddress}
      config={{
        schema: AddressSchema,
        defaultValues: addressDefaultValues,
        title: "Create Address",
        description: "Create a new location address",
        success: "Address created",
        submitText: "Create Address",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<Address> => ({
          value: response.id,
          label: response.name ?? "Address",
          data: response,
        }),
      }}
    >
      {/* ======================================================
          BASIC
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<AddressFormSchema>
          name="name"
          label="Name"
          placeholder="Address name"
        />

        <FormInput<AddressFormSchema>
          name="houseNumber"
          label="House Number"
          placeholder="House number"
        />

        <FormInput<AddressFormSchema>
          name="street"
          label="Street"
          placeholder="Street"
        />

        <FormInput<AddressFormSchema>
          name="postcode"
          label="Postcode"
          placeholder="Postcode"
        />
      </div>

      {/* ======================================================
          LOCATION
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormCombobox<AddressFormSchema>
          name="countryId"
          label="Country"
          placeholder="Select country"
          searchPlaceholder="Search country..."
          options={countries.map((country) => ({
            label: country.name,
            value: country.id,
          }))}
        />

        <FormCombobox<AddressFormSchema>
          name="cityId"
          label="City"
          placeholder="Select city"
          searchPlaceholder="Search city..."
          options={cities.map((city) => ({
            label: city.name,
            value: city.id,
          }))}
        />

        <FormCombobox<AddressFormSchema>
          name="districtId"
          label="District"
          placeholder="Select district"
          searchPlaceholder="Search district..."
          options={districts.map((district) => ({
            label: district.name,
            value: district.id,
          }))}
        />

        <FormCombobox<AddressFormSchema>
          name="wardId"
          label="Ward"
          placeholder="Select ward"
          searchPlaceholder="Search ward..."
          options={wards.map((ward) => ({
            label: ward.name,
            value: ward.id,
          }))}
        />
      </div>

      {/* ======================================================
          MEDIA
      ====================================================== */}

      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<AddressFormSchema> name="thumbnail" label="Thumbnail URL" />

        <FormInput<AddressFormSchema>
          name="coverImage"
          label="Cover Image URL"
        />

        <FormInput<AddressFormSchema>
          name="bannerImage"
          label="Banner Image URL"
        />

        <FormInput<AddressFormSchema> name="video" label="Video URL" />

        <FormInput<AddressFormSchema> name="images.0" label="Image URL" />
      </div>

      {/* ======================================================
          STATUS
      ====================================================== */}

      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<AddressFormSchema> name="verified" label="Verified" />

        <FormSwitch<AddressFormSchema> name="active" label="Active" />
      </div>
    </EntityCreateFormDialog>
  );
}
