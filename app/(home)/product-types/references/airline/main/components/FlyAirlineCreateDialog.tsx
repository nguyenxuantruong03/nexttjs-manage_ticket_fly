"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";

import { AppForm, FormInput, FormSwitch } from "@/components/form/form-data";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import { useAppForm } from "@/hooks/useAppForm";

import { useSubmit } from "@/hooks/useSubmit";

import { useCreateFlyAirline } from "@/hooks/product-types/references/airline";

import { flyAirlineDefaultValues } from "./form/default-values";

import { FlyAirline } from "@/types/product-types/references/airline/airline.types";
import { FlyAirlineFormSchema, FlyAirlineSchema } from "./schema/airline.schema";

// ======================================================
// PROPS
// ======================================================

interface FlyAirlineCreateDialogProps extends EntityCreateDialogProps<FlyAirline> {}

// ======================================================
// COMPONENT
// ======================================================

export default function FlyAirlineCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: FlyAirlineCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createFlyAirline = useCreateFlyAirline();

  const { form } = useAppForm<FlyAirlineFormSchema>({
    schema: FlyAirlineSchema,
    defaultValues: flyAirlineDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...flyAirlineDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: any) => {
    submit({
      mutation: createFlyAirline.mutateAsync(values),

      success: "Airline created",

      onSuccess(response) {
        const result: EntityCreateResult<FlyAirline> = {
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
      title="Create Fly Airline"
      description="Create a new airline"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createFlyAirline.isPending}
      >
        <div className="space-y-6">
          {/* ====================================================== */}
          {/* BASIC */}
          {/* ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<FlyAirlineFormSchema>
              name="name"
              label="Name"
              placeholder="Vietnam Airlines"
            />

            <FormInput<FlyAirlineFormSchema>
              name="legalName"
              label="Legal Name"
              placeholder="Vietnam Airlines JSC"
            />

            <FormInput<FlyAirlineFormSchema>
              name="iataCode"
              label="IATA Code"
              placeholder="VN"
            />

            <FormInput<FlyAirlineFormSchema>
              name="icaoCode"
              label="ICAO Code"
              placeholder="HVN"
            />

            <FormInput<FlyAirlineFormSchema>
              name="callsign"
              label="Callsign"
              placeholder="VIETNAM AIRLINES"
            />

            <FormInput<FlyAirlineFormSchema>
              name="country"
              label="Country"
              placeholder="Vietnam"
            />

            <FormInput<FlyAirlineFormSchema>
              name="website"
              label="Website"
              placeholder="https://www.example.com"
            />

            <FormInput<FlyAirlineFormSchema>
              name="hotline"
              label="Hotline"
              placeholder="+84 24 3832 0320"
            />

            <FormInput<FlyAirlineFormSchema>
              name="email"
              label="Email"
              type="email"
              placeholder="contact@example.com"
            />

            <FormInput<FlyAirlineFormSchema>
              name="logo"
              label="Logo"
              placeholder="https://..."
            />

            <FormInput<FlyAirlineFormSchema>
              name="banner"
              label="Banner"
              placeholder="https://..."
            />

            <div className="md:col-span-2">
              <FormInput<FlyAirlineFormSchema>
                name="description"
                label="Description"
                placeholder="Describe the airline"
              />
            </div>
          </div>

          {/* ====================================================== */}
          {/* STATUS */}
          {/* ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormSwitch<FlyAirlineFormSchema> name="active" label="Active" />
          </div>

          {/* ====================================================== */}
          {/* ACTION */}
          {/* ====================================================== */}

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createFlyAirline.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createFlyAirline.isPending}>
              {createFlyAirline.isPending ? "Creating..." : "Create Airline"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
