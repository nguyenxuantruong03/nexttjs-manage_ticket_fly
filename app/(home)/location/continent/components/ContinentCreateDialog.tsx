"use client";

import { FormInput } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/form/entity-selector";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

import { useCreateContinent } from "@/hooks/location/country/continent";

import { ContinentFormSchema, ContinentSchema } from "./form/schema";

import { continentDefaultValues } from "./form/default-values";

import { Continent } from "@/types/location/country/continent.type";

// ======================================================
// PROPS
// ======================================================

interface ContinentCreateDialogProps extends EntityCreateDialogProps<Continent> {}

// ======================================================
// COMPONENT
// ======================================================

export default function ContinentCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: ContinentCreateDialogProps) {
  const createContinent = useCreateContinent();

  return (
    <EntityCreateFormDialog<ContinentFormSchema, Partial<Continent>, Continent>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createContinent}
      config={{
        schema: ContinentSchema,
        defaultValues: continentDefaultValues,
        title: "Create Continent",
        description: "Create a new continent",
        success: "Continent created",
        submitText: "Create Continent",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<Continent> => ({
          value: response.id,
          label: response.name,
          data: response,
        }),
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<ContinentFormSchema>
          name="name"
          label="Name"
          placeholder="Asia"
        />

        <FormInput<ContinentFormSchema>
          name="nativeName"
          label="Native Name"
          placeholder="Châu Á"
        />

        <FormInput<ContinentFormSchema>
          name="code"
          label="Code"
          placeholder="AS"
        />

        <FormInput<ContinentFormSchema>
          name="description"
          label="Description"
          placeholder="Continent description"
        />

        <FormInput<ContinentFormSchema>
          name="thumbnail"
          label="Thumbnail URL"
          placeholder="Thumbnail URL"
        />

        <FormInput<ContinentFormSchema>
          name="coverImage"
          label="Cover Image URL"
          placeholder="Cover image URL"
        />

        <FormInput<ContinentFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </EntityCreateFormDialog>
  );
}
