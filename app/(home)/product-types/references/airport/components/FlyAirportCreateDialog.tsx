"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";

import { AppForm } from "@/components/form/form-data";

import { FormInput } from "@/components/form/form-data";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
  EntityOption,
} from "@/components/entity-selector";

import { useAppForm } from "@/hooks/useAppForm";

import { useSubmit } from "@/hooks/useSubmit";



import { useCreateFlyAirport } from "@/hooks/product-types/references/airport";
import { flyAirportDefaultValues } from "./form/default-values";
import AddressCreateDialog from "@/app/(home)/location/address/components/AddressCreateDialog";
import { FlyAirportFormSchema, FlyAirportSchema } from "./form/schema";
import { FlyAirport } from "@/types/product-types/references/airport/airport.types";
import { Address } from "@/types/location/address";
import { Country } from "@/types/location/country/country";
import { City } from "@/types/location/city";
import { District } from "@/types/location/district";
import { Ward } from "@/types/location/ward";

interface FlyAirportCreateDialogProps extends EntityCreateDialogProps<FlyAirport> {
  addresses: Address[];
  countries: Country[];
  cities: City[];
  districts: District[];
  wards: Ward[];
}

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
  const dialogRefAirport = React.useRef<HTMLDivElement>(null);
  const submit = useSubmit();
  const createflyAirport = useCreateFlyAirport();

  const { form } = useAppForm<FlyAirportFormSchema>({
    schema: FlyAirportSchema,
    defaultValues: flyAirportDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...flyAirportDefaultValues,

      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const addressOptions: EntityOption<Address>[] = addresses.map((address) => ({
    value: address.id,
    label:
      address.name ?? `${address.street ?? ""} ${address.houseNumber ?? ""}`,
    description: address.city?.name,
    data: address,
  }));

  const onSubmit = (values: any) => {
    submit({
      mutation: createflyAirport.mutateAsync(values),
      success: "Airport created",
      onSuccess: (response) => {
        const result: EntityCreateResult<FlyAirport> = {
          value: response.id,
          label: response.name,
          data: response,
        };

        onCreated(result);

        form.reset();
        onOpenChange(false);
      },
    });
  };

  return (
    <EntityCreateDialog
      dialogRef={dialogRefAirport}
      open={open}
      onOpenChange={onOpenChange}
      title="Create Airport"
      description="Create a new airport"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createflyAirport.isPending}
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
            portalContainer={dialogRefAirport.current}
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

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              //   disabled={createflyAirport.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createflyAirport.isPending}>
              {createflyAirport.isPending ? "Creating..." : "Create Airport"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
