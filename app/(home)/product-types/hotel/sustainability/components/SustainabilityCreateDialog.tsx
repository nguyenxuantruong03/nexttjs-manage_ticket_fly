"use client";

import { FormInput } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/form/entity-selector";

import { SustainabilityFormSchema, SustainabilitySchema } from "./form/schema";

import { sustainabilityDefaultValues } from "./form/default-values";

import { Sustainability } from "@/types/product-types/hotel/hotel-detail";

import { useCreateHotelSustainability } from "@/hooks/product-types/hotel/hotel-sustainability";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

// ======================================================
// PROPS
// ======================================================

interface SustainabilityCreateDialogProps extends EntityCreateDialogProps<Sustainability> {}

// ======================================================
// COMPONENT
// ======================================================

export default function SustainabilityCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: SustainabilityCreateDialogProps) {
  const createSustainability = useCreateHotelSustainability();

  return (
    <EntityCreateFormDialog<
      SustainabilityFormSchema,
      Partial<Sustainability>,
      Sustainability
    >
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createSustainability}
      config={{
        schema: SustainabilitySchema,
        defaultValues: sustainabilityDefaultValues,
        title: "Create Sustainability",
        description: "Create a new sustainability",
        success: "Sustainability created",
        submitText: "Create Sustainability",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<Sustainability> => ({
          value: response.id,
          label: response.name,
          data: response,
        }),
      }}
    >
      <div className="grid gap-4">
        <FormInput<SustainabilityFormSchema>
          name="name"
          label="Name"
          placeholder="Sustainability name"
        />

        <FormInput<SustainabilityFormSchema>
          name="description"
          label="Description"
          placeholder="Description"
        />
      </div>
    </EntityCreateFormDialog>
  );
}
