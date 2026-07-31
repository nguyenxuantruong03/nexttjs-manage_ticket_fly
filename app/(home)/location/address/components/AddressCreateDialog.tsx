"use client";

import * as React from "react";
import { AppForm, FormCombobox } from "@/components/form/form-data";
import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/form/form-data";
import { Country } from "@/types/bookings/location/country";
import { City } from "@/types/bookings/location/city";
import { District } from "@/types/bookings/location/district";
import { Ward } from "@/types/bookings/location/ward";
import { Address } from "@/types/bookings/location/address";
import { useCreateAddress } from "@/hooks/location/address";
import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";
import { AddressFormSchema, AddressSchema } from "./form/schema";
import { addressDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
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
  const dialogRef = React.useRef<HTMLDivElement>(null);
  const submit = useSubmit();

  const createAddress = useCreateAddress();

  const { form, isUpdate } = useAppForm<AddressFormSchema>({
    schema: AddressSchema,

    defaultValues: addressDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...addressDefaultValues,

      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: AddressFormSchema) => {
    submit({
      mutation: createAddress.mutateAsync(values),

      success: "Address created",
      onSuccess: (response) => {
        const result: EntityCreateResult<Address> = {
          value: response.id,
          label: response.name ?? "Address",
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
      dialogRef={dialogRef}
      open={open}
      onOpenChange={onOpenChange}
      title="Create Address"
      description="Create a new location address"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createAddress.isPending}
      >
        <div
          className="
          space-y-6
          "
        >
          <div
            className="
            grid
            gap-4
            md:grid-cols-2
            "
          >
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

          <div
            className="
            grid
            gap-4
            md:grid-cols-2
            "
          >
            <FormCombobox<AddressFormSchema>
              portalContainer={dialogRef.current}
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
              portalContainer={dialogRef.current}
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
              portalContainer={dialogRef.current}
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
              portalContainer={dialogRef.current}
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

          <div
            className="
            flex
            justify-end
            gap-3
            "
          >
            <Button
              type="button"
              variant="outline"
              disabled={createAddress.isPending}
              onClick={() => {
                onOpenChange(false);
              }}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createAddress.isPending}>
              {createAddress.isPending ? "Creating..." : "Create Address"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
