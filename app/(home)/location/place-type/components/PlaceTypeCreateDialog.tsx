"use client";

import * as React from "react";

import {
  AppForm,
  FormInput,
  FormSwitch,
  FormTextarea,
} from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import { useCreatePlaceType } from "@/hooks/location/place/place-type";
import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import { PlaceTypeFormSchema, PlaceTypeSchema } from "./form/schema";

import { placeTypeDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
import { PlaceType } from "@/types/location/place/place-type.type";

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
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createPlaceType = useCreatePlaceType();

  const { form } = useAppForm<PlaceTypeFormSchema>({
    schema: PlaceTypeSchema,
    defaultValues: placeTypeDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...placeTypeDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: PlaceTypeFormSchema) => {
    submit({
      mutation: createPlaceType.mutateAsync(values),

      success: "Place type created",

      onSuccess: (response) => {
        const result: EntityCreateResult<PlaceType> = {
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

  return (
    <EntityCreateDialog
      dialogRef={dialogRef}
      open={open}
      onOpenChange={onOpenChange}
      title="Create Place Type"
      description="Create a new place type"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createPlaceType.isPending}
      >
        <div className="space-y-6">
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
            <FormInput<PlaceTypeFormSchema>
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

          {/* ====================================================== */}
          {/* ACTION */}
          {/* ====================================================== */}

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createPlaceType.isPending}
              onClick={() => {
                onOpenChange(false);
              }}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createPlaceType.isPending}>
              {createPlaceType.isPending ? "Creating..." : "Create Place Type"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
