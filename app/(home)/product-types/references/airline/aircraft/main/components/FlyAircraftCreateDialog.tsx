"use client";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/form/entity-selector";

import { useCreateFlyAircraft } from "@/hooks/product-types/references/airline/aircraft";

import { flyAircraftDefaultValues } from "./form/default-values";

import { FlyAircraft } from "@/types/product-types/references/airline/aircraft/aircraft.types";

import {
  FlyAircraftFormSchema,
  FlyAircraftSchema,
} from "./schema/aircraft.schema";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

// ======================================================
// PROPS
// ======================================================

interface FlyAircraftCreateDialogProps extends EntityCreateDialogProps<FlyAircraft> {}

// ======================================================
// COMPONENT
// ======================================================

export default function FlyAircraftCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: FlyAircraftCreateDialogProps) {
  const createFlyAircraft = useCreateFlyAircraft();

  return (
    <EntityCreateFormDialog<
      FlyAircraftFormSchema,
      Partial<FlyAircraft>,
      FlyAircraft
    >
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createFlyAircraft}
      config={{
        schema: FlyAircraftSchema,

        defaultValues: flyAircraftDefaultValues,

        title: "Create Fly Aircraft",

        description: "Create a new fly aircraft",

        success: "Fly aircraft created",

        submitText: "Create Aircraft",

        submittingText: "Creating...",

        getResult: (response): EntityCreateResult<FlyAircraft> => ({
          value: response.id,

          label:
            response.model ||
            response.registrationNumber ||
            response.code ||
            response.manufacturer ||
            response.id,

          data: response,
        }),
      }}
    >
      <div className="space-y-6">
        {/* BASIC */}
        <div className="grid gap-4 md:grid-cols-2">
          <FormInput<FlyAircraftFormSchema>
            name="manufacturer"
            label="Manufacturer"
            placeholder="Airbus"
          />

          <FormInput<FlyAircraftFormSchema>
            name="model"
            label="Model"
            placeholder="A320-200"
          />

          <FormInput<FlyAircraftFormSchema>
            name="code"
            label="Code"
            placeholder="A320"
          />

          <FormInput<FlyAircraftFormSchema>
            name="registrationNumber"
            label="Registration Number"
            placeholder="VN-A123"
          />
        </div>

        {/* STATUS */}
        <div className="grid gap-4 md:grid-cols-2">
          <FormSwitch<FlyAircraftFormSchema> name="active" label="Active" />
        </div>
      </div>
    </EntityCreateFormDialog>
  );
}
