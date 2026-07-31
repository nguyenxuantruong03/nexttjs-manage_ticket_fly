"use client";

import * as React from "react";

import { AppForm, FormInput } from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import { MediaAssetFormSchema, MediaAssetSchema } from "./form/schema";

import { mediaAssetDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
import { MediaAsset } from "@/types/bookings/hotel/media.type";
import { useCreateHotelMediaAsset } from "@/hooks/hotel/hotel-media-asset";

// ======================================================
// PROPS
// ======================================================

interface MediaAssetCreateDialogProps extends EntityCreateDialogProps<MediaAsset> {}

// ======================================================
// COMPONENT
// ======================================================

export default function MediaAssetCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: MediaAssetCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createMediaAsset = useCreateHotelMediaAsset();

  const { form } = useAppForm<MediaAssetFormSchema>({
    schema: MediaAssetSchema,
    defaultValues: mediaAssetDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...mediaAssetDefaultValues,
      url: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: MediaAssetFormSchema) => {
    submit({
      mutation: createMediaAsset.mutateAsync(values),

      success: "Media Asset created",

      onSuccess: (response) => {
        const result: EntityCreateResult<MediaAsset> = {
          value: response.id,
          label: response.url,
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
      title="Create Media Asset"
      description="Create a new media asset"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createMediaAsset.isPending}
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<MediaAssetFormSchema>
              name="url"
              label="URL"
              placeholder="https://..."
            />

            <FormInput<MediaAssetFormSchema>
              name="thumbnailUrl"
              label="Thumbnail URL"
              placeholder="https://..."
            />

            <FormInput<MediaAssetFormSchema>
              name="path"
              label="Storage Path"
              placeholder="/uploads/image.jpg"
            />

            <FormInput<MediaAssetFormSchema>
              name="type"
              label="Media Type"
              placeholder="IMAGE"
            />

            <FormInput<MediaAssetFormSchema>
              name="mimeType"
              label="Mime Type"
              placeholder="image/jpeg"
            />

            <FormInput<MediaAssetFormSchema>
              name="size"
              label="Size (bytes)"
              type="number"
              placeholder="0"
            />

            <FormInput<MediaAssetFormSchema>
              name="width"
              label="Width"
              type="number"
              placeholder="1920"
            />

            <FormInput<MediaAssetFormSchema>
              name="height"
              label="Height"
              type="number"
              placeholder="1080"
            />

            <FormInput<MediaAssetFormSchema>
              name="duration"
              label="Duration (seconds)"
              type="number"
              placeholder="0"
            />

            <FormInput<MediaAssetFormSchema>
              name="alt"
              label="Alt Text"
              placeholder="Alternative text"
            />

            <div className="md:col-span-2">
              <FormInput<MediaAssetFormSchema>
                name="caption"
                label="Caption"
                placeholder="Caption"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createMediaAsset.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createMediaAsset.isPending}>
              {createMediaAsset.isPending
                ? "Creating..."
                : "Create Media Asset"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
