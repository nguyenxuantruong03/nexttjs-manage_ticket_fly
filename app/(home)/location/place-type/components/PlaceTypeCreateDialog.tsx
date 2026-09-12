"use client";

import {
  FormInput,
  FormSwitch,
  FormTextarea,
} from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/form/entity-selector";

import { useCreatePlaceType } from "@/hooks/location/place/place-type";

import { PlaceTypeFormSchema, PlaceTypeSchema } from "./form/schema";

import { placeTypeDefaultValues } from "./form/default-values";

import { PlaceType } from "@/types/location/place/place-type.type";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";
import { FormIcon } from "@/components/form/form-data/FormIcon";

// ======================================================
// PROPS
// ======================================================

interface PlaceTypeCreateDialogProps extends EntityCreateDialogProps<PlaceType> {}

// ======================================================
// COMPONENT
// ======================================================

export default function PlaceTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: PlaceTypeCreateDialogProps) {
  const createPlaceType = useCreatePlaceType();

  return (
    <EntityCreateFormDialog<PlaceTypeFormSchema, Partial<PlaceType>, PlaceType>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createPlaceType}
      config={{
        schema: PlaceTypeSchema,
        defaultValues: placeTypeDefaultValues,
        title: "Create Place Type",
        description: "Create a new place type",
        success: "Place type created",
        submitText: "Create Place Type",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<PlaceType> => ({
          value: response.id,
          label: response.name,
          data: response,
        }),
      }}
    >
      {/* ====================================================== */}
      {/* BASIC */}
      {/* ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<PlaceTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Tourist Attraction"
        />

        <FormInput<PlaceTypeFormSchema>
          name="nativeName"
          label="Native Name"
          placeholder="Điểm tham quan"
        />

        <FormInput<PlaceTypeFormSchema>
          name="code"
          label="Code"
          placeholder="TOURIST_ATTRACTION"
        />

        <div className="md:col-span-2">
          <FormTextarea<PlaceTypeFormSchema>
            name="description"
            label="Description"
            placeholder="Place type description"
          />
        </div>
      </div>

      {/* ====================================================== */}
      {/* MEDIA */}
      {/* ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormIcon<PlaceTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="Icon URL or icon name"
        />

        <FormInput<PlaceTypeFormSchema>
          name="thumbnail"
          label="Thumbnail"
          placeholder="Thumbnail URL"
        />
      </div>

      {/* ====================================================== */}
      {/* DISPLAY */}
      {/* ====================================================== */}

      <div className="grid gap-4">
        <FormInput<PlaceTypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>

      {/* ====================================================== */}
      {/* STATUS */}
      {/* ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormSwitch<PlaceTypeFormSchema> name="active" label="Active" />
      </div>
    </EntityCreateFormDialog>
  );
}
