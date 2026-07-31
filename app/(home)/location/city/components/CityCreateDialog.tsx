"use client";

import * as React from "react";

import { AppForm, FormCombobox, FormInput } from "@/components/form/form-data";
import { Button } from "@/components/ui/button";

import { Country } from "@/types/bookings/location/country";
import { City } from "@/types/bookings/location/city";

import { useCreateCity } from "@/hooks/location/city";

import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import { CityFormSchema, CitySchema } from "./form/schema";
import { cityDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";

// ======================================================
// PROPS
// ======================================================

interface CityCreateDialogProps extends EntityCreateDialogProps<City> {
  countries: Country[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function CityCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  countries,
}: CityCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createCity = useCreateCity();

  const { form } = useAppForm<CityFormSchema>({
    schema: CitySchema,
    defaultValues: cityDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...cityDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: CityFormSchema) => {
    submit({
      mutation: createCity.mutateAsync(values),

      success: "City created",

      onSuccess: (response) => {
        const result: EntityCreateResult<City> = {
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
      dialogRef={dialogRef}
      open={open}
      onOpenChange={onOpenChange}
      title="Create City"
      description="Create a new city"
    >
      <AppForm form={form} onSubmit={onSubmit} loading={createCity.isPending}>
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<CityFormSchema>
              name="name"
              label="Name"
              placeholder="City name"
            />

            <FormInput<CityFormSchema>
              name="nativeName"
              label="Native Name"
              placeholder="Native name"
            />

            <FormInput<CityFormSchema>
              name="code"
              label="Code"
              placeholder="City code"
            />

            <FormInput<CityFormSchema>
              name="iataCode"
              label="IATA Code"
              placeholder="IATA code"
            />

            <FormCombobox<CityFormSchema>
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

            <FormInput<CityFormSchema>
              name="administrativeArea"
              label="Administrative Area"
              placeholder="Administrative area"
            />

            <FormInput<CityFormSchema>
              name="region"
              label="Region"
              placeholder="Region"
            />
          </div>

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createCity.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createCity.isPending}>
              {createCity.isPending ? "Creating..." : "Create City"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
