"use client";

import {
  FormCombobox,
  FormInput,
  FormSwitch,
  FormTextarea,
} from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
  EntityOption,
} from "@/components/form/entity-selector";

import { useCreatePlace } from "@/hooks/location/place";

import { PlaceFormSchema, PlaceSchema } from "./form/schema";

import { placeDefaultValues } from "./form/default-values";

import { Address } from "@/types/location/address";

import { SearchTag } from "@/types/searchs/search/tag.types";

import { Place } from "@/types/location/place/place";

import { PlaceType } from "@/types/location/place/place-type.type";

import PlaceTypeCreateDialog from "../../place-type/components/PlaceTypeCreateDialog";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

// ======================================================
// PROPS
// ======================================================

interface PlaceCreateDialogProps extends EntityCreateDialogProps<Place> {
  addresses: Address[];

  tags: SearchTag[];

  placeTypeData: PlaceType[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function PlaceCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  addresses,
  tags,
  placeTypeData,
}: PlaceCreateDialogProps) {
  const createPlace = useCreatePlace();

  // ======================================================
  // ADDRESS OPTIONS
  // ======================================================

  const addressOptions: EntityOption<Address>[] = addresses.map((address) => ({
    value: address.id,
    label:
      address.name ??
      `${address.street ?? ""} ${address.houseNumber ?? ""}`.trim(),
    description: address.city?.name,
    data: address,
  }));

  // ======================================================
  // PLACE TYPE OPTIONS
  // ======================================================

  const placeTypeOptions: EntityOption<PlaceType>[] =
    placeTypeData?.map((placeType) => ({
      value: placeType.id,
      label: placeType.name,
      description: placeType.code ?? undefined,
      data: placeType,
    })) ?? [];

  return (
    <EntityCreateFormDialog<PlaceFormSchema, Partial<Place>, Place>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createPlace}
      config={{
        schema: PlaceSchema,
        defaultValues: placeDefaultValues,
        title: "Create Place",
        description: "Create a new place",
        success: "Place created",
        submitText: "Create Place",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<Place> => ({
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
        <FormInput<PlaceFormSchema>
          name="name"
          label="Place Name"
          placeholder="Place name"
        />

        <FormInput<PlaceFormSchema>
          name="nativeName"
          label="Native Name"
          placeholder="Native name"
        />

        <FormInput<PlaceFormSchema>
          name="subtitle"
          label="Subtitle"
          placeholder="Subtitle"
        />

        <FormTextarea<PlaceFormSchema>
          name="shortDescription"
          label="Short Description"
          placeholder="Short description"
        />

        <div className="md:col-span-2">
          <FormTextarea<PlaceFormSchema>
            name="description"
            label="Description"
            placeholder="Description"
          />
        </div>
      </div>

      {/* ====================================================== */}
      {/* LOCATION */}
      {/* ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormCombobox<PlaceFormSchema>
          name="addressId"
          label="Address"
          placeholder="Select address"
          searchPlaceholder="Search address..."
          options={addressOptions}
        />

        <FormInput<PlaceFormSchema>
          name="latitude"
          label="Latitude"
          type="number"
          placeholder="Latitude"
        />

        <FormInput<PlaceFormSchema>
          name="longitude"
          label="Longitude"
          type="number"
          placeholder="Longitude"
        />
      </div>

      {/* ====================================================== */}
      {/* CATEGORY */}
      {/* ====================================================== */}

      <div className="grid gap-4">
        <FormEntitySelector<PlaceFormSchema, PlaceType>
          name="placeTypeId"
          label="Place Type"
          placeholder="Search place type..."
          searchPlaceholder="Search place type..."
          emptyText="No place type found"
          createText="Create place type"
          options={placeTypeOptions}
          enableCreate
          renderCreateDialog={(props) => <PlaceTypeCreateDialog {...props} />}
        />
      </div>

      {/* ====================================================== */}
      {/* MEDIA */}
      {/* ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<PlaceFormSchema>
          name="thumbnail"
          label="Thumbnail"
          placeholder="Thumbnail URL"
        />

        <FormInput<PlaceFormSchema>
          name="coverImage"
          label="Cover Image"
          placeholder="Cover image URL"
        />
      </div>

      <div className="grid gap-4">
        <FormInput<PlaceFormSchema>
          name="images"
          label="Images"
          placeholder="Image URLs"
          description="Enter image URLs separated by commas."
        />
      </div>

      {/* ====================================================== */}
      {/* SEARCH / FEATURE */}
      {/* ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<PlaceFormSchema>
          name="searchPriority"
          label="Search Priority"
          type="number"
          placeholder="0"
        />

        <div />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <FormSwitch<PlaceFormSchema> name="featured" label="Featured" />

        <FormSwitch<PlaceFormSchema> name="searchable" label="Searchable" />
      </div>

      {/* ====================================================== */}
      {/* TAGS */}
      {/* ====================================================== */}

      <div className="grid gap-4">
        <FormCombobox<PlaceFormSchema>
          name="tagIds"
          label="Tags"
          placeholder="Select tags"
          searchPlaceholder="Search tags..."
          options={tags.map((tag) => ({
            label: tag.name,
            value: tag.id,
          }))}
        />
      </div>

      {/* ====================================================== */}
      {/* STATUS */}
      {/* ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormSwitch<PlaceFormSchema> name="verified" label="Verified" />

        <FormSwitch<PlaceFormSchema> name="active" label="Active" />
      </div>
    </EntityCreateFormDialog>
  );
}
