"use client";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/form/entity-selector";

import { useCreateFlyAircraftType } from "@/hooks/product-types/references/airline/aircraft/aircraft-type";

import {
  FlyAircraftTypeFormSchema,
  FlyAircraftTypeSchema,
} from "./form/schema";

import { flyAircraftTypeDefaultValues } from "./form/default-values";

import { FlyAircraftType } from "@/types/product-types/references/airline/aircraft/aircraft-type.type";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

// ======================================================
// PROPS
// ======================================================

interface FlyAircraftTypeCreateDialogProps extends EntityCreateDialogProps<FlyAircraftType> {}

// ======================================================
// COMPONENT
// ======================================================

export default function FlyAircraftTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: FlyAircraftTypeCreateDialogProps) {
  const createFlyAircraftType = useCreateFlyAircraftType();

  return (
    <EntityCreateFormDialog<FlyAircraftTypeFormSchema,Partial<FlyAircraftType>, FlyAircraftType>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createFlyAircraftType}
      config={{
        schema: FlyAircraftTypeSchema,
        defaultValues: flyAircraftTypeDefaultValues,
        title: "Create Fly Aircraft Type",
        description: "Create a new fly aircraft type",
        success: "Fly aircraft type created",
        submitText: "Create Aircraft Type",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<FlyAircraftType> => ({
          value: response.id,
          label:
            response.name ||
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
          <FormInput<FlyAircraftTypeFormSchema>
            name="name"
            label="Name"
            placeholder="Airbus A320"
          />

          <FormInput<FlyAircraftTypeFormSchema>
            name="code"
            label="Code"
            placeholder="A320"
          />

          <FormInput<FlyAircraftTypeFormSchema>
            name="manufacturer"
            label="Manufacturer"
            placeholder="Airbus"
          />

          <FormInput<FlyAircraftTypeFormSchema>
            name="description"
            label="Description"
            placeholder="Airbus A320 aircraft type"
          />
        </div>

        {/* STATUS */}
        <div className="grid gap-4 md:grid-cols-2">
          <FormSwitch<FlyAircraftTypeFormSchema> name="active" label="Active" />

          <FormInput<FlyAircraftTypeFormSchema>
            name="sortOrder"
            label="Sort Order"
            type="number"
            placeholder="0"
          />
        </div>
      </div>
    </EntityCreateFormDialog>
  );
}
