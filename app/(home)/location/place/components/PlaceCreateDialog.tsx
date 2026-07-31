"use client";

import * as React from "react";

import {
  AppForm,
  FormCombobox,
  FormInput,
  FormSwitch,
  FormTextarea,
} from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import { Address } from "@/types/bookings/location/address";
import { Place, PlaceType } from "@/types/bookings/location/place";

import { useCreatePlace } from "@/hooks/location/place";
import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import { PlaceFormSchema, PlaceSchema } from "./form/schema";

import { placeDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
  EntityOption,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
import { SearchTag } from "@/types/bookings/search/tag.types";

// ======================================================
// PROPS
// ======================================================

interface PlaceCreateDialogProps extends EntityCreateDialogProps<Place> {
  addresses: Address[];
  tags: SearchTag[];
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
}: PlaceCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createPlace = useCreatePlace();

  const { form } = useAppForm<PlaceFormSchema>({
    schema: PlaceSchema,
    defaultValues: placeDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...placeDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: PlaceFormSchema) => {
    submit({
      mutation: createPlace.mutateAsync(values),

      success: "Place created",

      onSuccess: (response) => {
        const result: EntityCreateResult<Place> = {
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

  const addressOptions: EntityOption<Address>[] = addresses.map((address) => ({
    value: address.id,
    label:
      address.name ?? `${address.street ?? ""} ${address.houseNumber ?? ""}`,
    description: address.city?.name,
    data: address,
  }));

  return (
    <EntityCreateDialog
      dialogRef={dialogRef}
      open={open}
      onOpenChange={onOpenChange}
      title="Create Place"
      description="Create a new place"
    >
      <AppForm form={form} onSubmit={onSubmit} loading={createPlace.isPending}>
        <div className="space-y-6">
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

          <div
            className="
            grid
            gap-4
            md:grid-cols-2
            "
          >
            <FormCombobox<PlaceFormSchema>
              portalContainer={dialogRef.current}
              name="addressId"
              label="Address"
              placeholder="Select address"
              searchPlaceholder="Search address..."
              options={addressOptions}
            />

            <FormCombobox<PlaceFormSchema>
              portalContainer={dialogRef.current}
              name="type"
              label="Place Type"
              placeholder="Select place type"
              searchPlaceholder="Search place type..."
              options={Object.values(PlaceType).map((type) => ({
                label: type.replaceAll("_", " "),
                value: type,
              }))}
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
          {/* MEDIA */}
          {/* ====================================================== */}

          <div
            className="
            grid
            gap-4
            md:grid-cols-2
            "
          >
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

          <div
            className="
            grid
            gap-4
            md:grid-cols-2
            "
          >
            <FormInput<PlaceFormSchema>
              name="searchPriority"
              label="Search Priority"
              type="number"
              placeholder="0"
            />

            <div />
          </div>

          <div
            className="
            grid
            gap-4
            md:grid-cols-2
            "
          >
            <FormSwitch<PlaceFormSchema> name="featured" label="Featured" />

            <FormSwitch<PlaceFormSchema> name="searchable" label="Searchable" />
          </div>

          {/* ====================================================== */}
          {/* TAGS */}
          {/* ====================================================== */}

          <div className="grid gap-4">
            <FormCombobox<PlaceFormSchema>
              portalContainer={dialogRef.current}
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

          <div
            className="
            grid
            gap-4
            md:grid-cols-2
            "
          >
            <FormSwitch<PlaceFormSchema> name="verified" label="Verified" />

            <FormSwitch<PlaceFormSchema> name="active" label="Active" />
          </div>

          {/* ====================================================== */}
          {/* ACTION */}
          {/* ====================================================== */}

          <div
            className="
            flex
            justify-end
            gap-3
            "
          >
            <Button
              type="button"
              variant="outline"
              disabled={createPlace.isPending}
              onClick={() => {
                onOpenChange(false);
              }}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createPlace.isPending}>
              {createPlace.isPending ? "Creating..." : "Create Place"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
