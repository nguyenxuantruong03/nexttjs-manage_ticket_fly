"use client";

import * as React from "react";

import { AppForm, FormInput } from "@/components/form/form-data";
import { Button } from "@/components/ui/button";

import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import { RoomCategoryFormSchema, RoomCategorySchema } from "./form/schema";
import { roomCategoryDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
import { RoomCategory } from "@/types/product-types/hotel/room/room.types";

import { useCreateHotelRoomCategory } from "@/hooks/product-types/hotel/hotel-room-category";

// ======================================================
// PROPS
// ======================================================

interface RoomCategoryCreateDialogProps extends EntityCreateDialogProps<RoomCategory> {}

// ======================================================
// COMPONENT
// ======================================================

export default function RoomCategoryCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: RoomCategoryCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createRoomCategory = useCreateHotelRoomCategory();

  const { form } = useAppForm<RoomCategoryFormSchema>({
    schema: RoomCategorySchema,
    defaultValues: roomCategoryDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...roomCategoryDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: RoomCategoryFormSchema) => {
    submit({
      mutation: createRoomCategory.mutateAsync(values),

      success: "Room category created",

      onSuccess: (response) => {
        const result: EntityCreateResult<RoomCategory> = {
          value: response.id,
          label: response.name ?? "Room Category",
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
      title="Create Room Category"
      description="Create a new room category"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createRoomCategory.isPending}
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<RoomCategoryFormSchema>
              name="name"
              label="Name"
              placeholder="Room category name"
            />

            <FormInput<RoomCategoryFormSchema>
              name="icon"
              label="Icon"
              placeholder="Icon"
            />

            <FormInput<RoomCategoryFormSchema>
              name="description"
              label="Description"
              placeholder="Description"
            />

            <FormInput<RoomCategoryFormSchema>
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
              disabled={createRoomCategory.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createRoomCategory.isPending}>
              {createRoomCategory.isPending
                ? "Creating..."
                : "Create Room Category"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
