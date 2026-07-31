"use client";

import * as React from "react";

import { AppForm, FormInput } from "@/components/form/form-data";
import { Button } from "@/components/ui/button";

import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import {
  RoomMediaCategoryFormSchema,
  RoomMediaCategorySchema,
} from "./form/schema";
import { roomMediaCategoryDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
import { RoomMediaCategory } from "@/types/bookings/hotel/room/room-media.types";
import { useCreateHotelRoomMediaCategory } from "@/hooks/hotel/hotel-room-media-category";

// ======================================================
// PROPS
// ======================================================

interface RoomMediaCategoryCreateDialogProps extends EntityCreateDialogProps<RoomMediaCategory> {}

// ======================================================
// COMPONENT
// ======================================================

export default function RoomMediaCategoryCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: RoomMediaCategoryCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createRoomMediaCategory = useCreateHotelRoomMediaCategory();

  const { form } = useAppForm<RoomMediaCategoryFormSchema>({
    schema: RoomMediaCategorySchema,
    defaultValues: roomMediaCategoryDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...roomMediaCategoryDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: RoomMediaCategoryFormSchema) => {
    submit({
      mutation: createRoomMediaCategory.mutateAsync(values),

      success: "Room media category created",

      onSuccess: (response) => {
        const result: EntityCreateResult<RoomMediaCategory> = {
          value: response.id,
          label: response.name ?? "Room Media Category",
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
      title="Create Room Media Category"
      description="Create a new room media category"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createRoomMediaCategory.isPending}
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<RoomMediaCategoryFormSchema>
              name="name"
              label="Name"
              placeholder="Room media category name"
            />

            <FormInput<RoomMediaCategoryFormSchema>
              name="icon"
              label="Icon"
              placeholder="Icon"
            />

            <FormInput<RoomMediaCategoryFormSchema>
              name="description"
              label="Description"
              placeholder="Description"
            />

            <FormInput<RoomMediaCategoryFormSchema>
              name="sortOrder"
              label="Sort Order"
              type="number"
              placeholder="0"
            />
          </div>

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createRoomMediaCategory.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createRoomMediaCategory.isPending}>
              {createRoomMediaCategory.isPending
                ? "Creating..."
                : "Create Room Media Category"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
