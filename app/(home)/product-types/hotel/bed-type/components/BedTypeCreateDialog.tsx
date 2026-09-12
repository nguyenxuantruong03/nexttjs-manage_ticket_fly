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

import { BedTypeFormSchema, BedTypeSchema } from "./form/schema";

import { bedTypeDefaultValues } from "./form/default-values";

import { useCreateHotelBedType } from "@/hooks/product-types/hotel/hotel-bed-type";

import { BedType } from "@/types/product-types/hotel/room/room.types";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";
import { FormIcon } from "@/components/form/form-data/FormIcon";

// ======================================================
// PROPS
// ======================================================

interface BedTypeCreateDialogProps extends EntityCreateDialogProps<BedType> {}

// ======================================================
// COMPONENT
// ======================================================

export default function BedTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: BedTypeCreateDialogProps) {
  const createBedType = useCreateHotelBedType();

  return (
    <EntityCreateFormDialog<BedTypeFormSchema, Partial<BedType>, BedType>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createBedType}
      config={{
        schema: BedTypeSchema,
        defaultValues: bedTypeDefaultValues,
        title: "Create Bed Type",
        description: "Create a new bed type",
        success: "Bed Type created",
        submitText: "Create Bed Type",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<BedType> => ({
          value: response.id,
          label: response.name,
          data: response,
        }),
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<BedTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Bed type name"
        />

        <FormIcon<BedTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="Icon"
        />

        <div className="md:col-span-2">
          <FormTextarea<BedTypeFormSchema>
            name="description"
            label="Description"
            placeholder="Description"
          />
        </div>

        <FormInput<BedTypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />

        <FormSwitch<BedTypeFormSchema> name="active" label="Active" />
      </div>
    </EntityCreateFormDialog>
  );
}
