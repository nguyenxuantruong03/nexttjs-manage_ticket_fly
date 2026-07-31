"use client";

import * as React from "react";

import { AppForm, FormCombobox, FormInput } from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import { City } from "@/types/bookings/location/city";
import { District } from "@/types/bookings/location/district";

import { useCreateDistrict } from "@/hooks/location/district";
import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import { DistrictFormSchema, DistrictSchema } from "./form/schema";

import { districtDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";

// ======================================================
// PROPS
// ======================================================

interface DistrictCreateDialogProps extends EntityCreateDialogProps<District> {
  cities: City[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function DistrictCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  cities,
}: DistrictCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createDistrict = useCreateDistrict();

  const { form } = useAppForm<DistrictFormSchema>({
    schema: DistrictSchema,
    defaultValues: districtDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...districtDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: DistrictFormSchema) => {
    submit({
      mutation: createDistrict.mutateAsync(values),

      success: "District created",

      onSuccess: (response) => {
        const result: EntityCreateResult<District> = {
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
      title="Create District"
      description="Create a new district"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createDistrict.isPending}
      >
        <div
          className="
          space-y-6
          "
        >
          {/* ====================================================== */}
          {/* BASIC */}
          {/* ====================================================== */}

          <div
            className="
            grid
            gap-4
            md:grid-cols-2
            "
          >
            <FormInput<DistrictFormSchema>
              name="name"
              label="District Name"
              placeholder="District name"
            />

            <FormInput<DistrictFormSchema>
              name="nativeName"
              label="Native Name"
              placeholder="Native name"
            />

            <FormInput<DistrictFormSchema>
              name="code"
              label="Code"
              placeholder="District code"
            />
            <FormCombobox<DistrictFormSchema>
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

            <FormInput<DistrictFormSchema>
              name="latitude"
              label="Latitude"
              type="number"
              placeholder="Latitude"
            />

            <FormInput<DistrictFormSchema>
              name="longitude"
              label="Longitude"
              type="number"
              placeholder="Longitude"
            />
          </div>

          {/* ====================================================== */}
          {/* ACTION */}
          {/* ====================================================== */}

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
              disabled={createDistrict.isPending}
              onClick={() => {
                onOpenChange(false);
              }}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createDistrict.isPending}>
              {createDistrict.isPending ? "Creating..." : "Create District"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
