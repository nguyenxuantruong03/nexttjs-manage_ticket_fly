"use client";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/form/entity-selector";

import { useCreateFlyAirline } from "@/hooks/product-types/references/airline";

import { flyAirlineDefaultValues } from "./form/default-values";

import { FlyAirline } from "@/types/product-types/references/airline/airline.types";

import {
  FlyAirlineFormSchema,
  FlyAirlineSchema,
} from "./schema/airline.schema";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

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
  const createFlyAirline = useCreateFlyAirline();

  return (
    <EntityCreateFormDialog<
      FlyAirlineFormSchema,
      Partial<FlyAirline>,
      FlyAirline
    >
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createFlyAirline}
      config={{
        schema: FlyAirlineSchema,
        defaultValues: flyAirlineDefaultValues,
        title: "Create Fly Airline",
        description: "Create a new airline",
        success: "Airline created",
        submitText: "Create Airline",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<FlyAirline> => ({
          value: response.id,
          label: response.name,
          data: response,
        }),
      }}
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
      </div>
    </EntityCreateFormDialog>
  );
}
