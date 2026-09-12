"use client";

import { FormInput } from "@/components/form/form-data";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
  EntityOption,
} from "@/components/form/entity-selector";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

import { useCreateFlyAirport } from "@/hooks/product-types/references/airport";

import { flyAirportDefaultValues } from "./form/default-values";

import AddressCreateDialog from "@/app/(home)/location/address/components/AddressCreateDialog";

import { FlyAirportFormSchema, FlyAirportSchema } from "./schema/schema";

import { FlyAirport } from "@/types/product-types/references/airport/airport.types";

import { Address } from "@/types/location/address";

import { Country } from "@/types/location/country/country";

import { City } from "@/types/location/city";

import { District } from "@/types/location/district";

import { Ward } from "@/types/location/ward";

// ======================================================
// PROPS
// ======================================================

interface FlyAirportCreateDialogProps extends EntityCreateDialogProps<FlyAirport> {
  addresses: Address[];

  countries: Country[];

  cities: City[];

  districts: District[];

  wards: Ward[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function FlyAirportCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  addresses,
  countries,
  cities,
  districts,
  wards,
  onCreated,
}: FlyAirportCreateDialogProps) {
  const createFlyAirport = useCreateFlyAirport();

  // ======================================================
  // OPTIONS
  // ======================================================

  const addressOptions: EntityOption<Address>[] = addresses.map((address) => ({
    value: address.id,
    label:
      address.name ?? `${address.street ?? ""} ${address.houseNumber ?? ""}`,
    description: address.city?.name,
    data: address,
  }));

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <EntityCreateFormDialog<
      FlyAirportFormSchema,
      Partial<FlyAirport>,
      FlyAirport
    >
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createFlyAirport}
      config={{
        schema: FlyAirportSchema,
        defaultValues: flyAirportDefaultValues,
        title: "Create Airport",
        description: "Create a new airport",
        success: "Airport created",
        submitText: "Create Airport",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<FlyAirport> => ({
          value: response.id,
          label: response.name,
          data: response,
        }),
      }}
    >
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <FormInput<FlyAirportFormSchema>
            name="name"
            label="Airport Name"
            placeholder="Tan Son Nhat Airport"
          />

          <FormInput<FlyAirportFormSchema>
            name="code"
            label="Airport Code"
            placeholder="VVTS"
          />

          <FormInput<FlyAirportFormSchema>
            name="iataCode"
            label="IATA"
            placeholder="SGN"
          />

          <FormInput<FlyAirportFormSchema>
            name="icaoCode"
            label="ICAO"
            placeholder="VVTS"
          />

          <FormInput<FlyAirportFormSchema>
            name="terminalCount"
            label="Terminal Count"
            type="number"
          />

          <FormInput<FlyAirportFormSchema>
            name="lat"
            label="Latitude"
            type="number"
          />

          <FormInput<FlyAirportFormSchema>
            name="lng"
            label="Longitude"
            type="number"
          />
        </div>

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
      </div>
    </EntityCreateFormDialog>
  );
}
