"use client";

import * as React from "react";

import { AppForm, FormInput } from "@/components/form/form-data";
import { Button } from "@/components/ui/button";

import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import { RoomViewFormSchema, RoomViewSchema } from "./form/schema";
import { roomViewDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
import { RoomView } from "@/types/product-types/hotel/room/room.types";
import { useCreateHotelRoomView } from "@/hooks/product-types/hotel/hotel-room-view";

// ======================================================
// PROPS
// ======================================================

interface RoomViewCreateDialogProps extends EntityCreateDialogProps<RoomView> {}

// ======================================================
// COMPONENT
// ======================================================

export default function RoomViewCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: RoomViewCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createRoomView = useCreateHotelRoomView();

  const { form } = useAppForm<RoomViewFormSchema>({
    schema: RoomViewSchema,
    defaultValues: roomViewDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...roomViewDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: RoomViewFormSchema) => {
    submit({
      mutation: createRoomView.mutateAsync(values),

      success: "Room view created",

      onSuccess: (response) => {
        const result: EntityCreateResult<RoomView> = {
          value: response.id,
          label: response.name ?? "Room View",
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
      title="Create Room View"
      description="Create a new room view"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createRoomView.isPending}
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<RoomViewFormSchema>
              name="name"
              label="Name"
              placeholder="Room view name"
            />

            <FormInput<RoomViewFormSchema>
              name="icon"
              label="Icon"
              placeholder="Icon"
            />

            <FormInput<RoomViewFormSchema>
              name="description"
              label="Description"
              placeholder="Description"
            />

            <FormInput<RoomViewFormSchema>
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
              disabled={createRoomView.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createRoomView.isPending}>
              {createRoomView.isPending ? "Creating..." : "Create Room View"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
