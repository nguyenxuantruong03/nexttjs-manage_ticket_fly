"use client";

import {
  FormInput,
  FormTextarea,
  FormSwitch,
} from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/form/entity-selector";

import { BathroomTypeFormSchema, BathroomTypeSchema } from "./form/schema";

import { bathroomTypeDefaultValues } from "./form/default-values";

import { useCreateHotelBathroomType } from "@/hooks/product-types/hotel/hotel-bathroom-type";

import { BathroomType } from "@/types/product-types/hotel/room/room.types";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";
import { FormIcon } from "@/components/form/form-data/FormIcon";

// ======================================================
// PROPS
// ======================================================

interface BathroomTypeCreateDialogProps extends EntityCreateDialogProps<BathroomType> {}

// ======================================================
// COMPONENT
// ======================================================

export default function BathroomTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: BathroomTypeCreateDialogProps) {
  const createBathroomType = useCreateHotelBathroomType();

  return (
    <EntityCreateFormDialog<
      BathroomTypeFormSchema,
      Partial<BathroomType>,
      BathroomType
    >
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createBathroomType}
      config={{
        schema: BathroomTypeSchema,
        defaultValues: bathroomTypeDefaultValues,
        title: "Create Bathroom Type",
        description: "Create a new bathroom type",
        success: "Bathroom Type created",
        submitText: "Create Bathroom Type",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<BathroomType> => ({
          value: response.id,
          label: response.name,
          data: response,
        }),
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<BathroomTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Bathroom type name"
        />

        <FormIcon<BathroomTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="Icon"
        />

        <div className="md:col-span-2">
          <FormTextarea<BathroomTypeFormSchema>
            name="description"
            label="Description"
            placeholder="Description"
          />
        </div>

        <FormInput<BathroomTypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />

        <FormSwitch<BathroomTypeFormSchema> name="active" label="Active" />
      </div>
    </EntityCreateFormDialog>
  );
}
