"use client";

import * as React from "react";

import {
  AppForm,
  FormInput,
  FormTextarea,
  FormSwitch,
} from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import { MediaCategoryFormSchema, MediaCategorySchema } from "./form/schema";

import { mediaCategoryDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
import { useCreateHotelMediaCategory } from "@/hooks/hotel/hotel-media-category";
import { HotelMediaCategory } from "@/types/bookings/hotel/core/hotel-media.types";

// ======================================================
// PROPS
// ======================================================

interface MediaCategoryCreateDialogProps extends EntityCreateDialogProps<HotelMediaCategory> {}

// ======================================================
// COMPONENT
// ======================================================

export default function MediaCategoryCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: MediaCategoryCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createMediaCategory = useCreateHotelMediaCategory();

  const { form } = useAppForm<MediaCategoryFormSchema>({
    schema: MediaCategorySchema,
    defaultValues: mediaCategoryDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...mediaCategoryDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: MediaCategoryFormSchema) => {
    submit({
      mutation: createMediaCategory.mutateAsync(values),

      success: "Media Category created",

      onSuccess: (response) => {
        const result: EntityCreateResult<HotelMediaCategory> = {
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
      title="Create Media Category"
      description="Create a new media category"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createMediaCategory.isPending}
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<MediaCategoryFormSchema>
              name="name"
              label="Name"
              placeholder="Media category name"
            />

            <FormInput<MediaCategoryFormSchema>
              name="icon"
              label="Icon"
              placeholder="Icon"
            />

            <div className="md:col-span-2">
              <FormTextarea<MediaCategoryFormSchema>
                name="description"
                label="Description"
                placeholder="Description"
              />
            </div>

            <FormInput<MediaCategoryFormSchema>
              name="sortOrder"
              label="Sort Order"
              type="number"
              placeholder="0"
            />

            <FormSwitch<MediaCategoryFormSchema> name="active" label="Active" />
          </div>

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createMediaCategory.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createMediaCategory.isPending}>
              {createMediaCategory.isPending
                ? "Creating..."
                : "Create Media Category"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
