"use client";

import * as React from "react";

import { AppForm, FormInput, FormTextarea } from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";

import { HotelRoomType } from "@/types/product-types/hotel/room/room-type.types";
import { RoomTypeFormSchema } from "./form/schema";
import { useCreateHotelRoomType } from "@/hooks/product-types/hotel/hotel-room-type";
import { roomTypeDefaultValues } from "./form/default-values";
import { hotelRoomTypeSchema } from "../../main/components/schema/room/room-type.schema";

// ======================================================
// PROPS
// ======================================================

interface RoomTypeCreateDialogProps extends EntityCreateDialogProps<HotelRoomType> {}

// ======================================================
// COMPONENT
// ======================================================

export default function RoomTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: RoomTypeCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createRoomType = useCreateHotelRoomType();

  const { form } = useAppForm<RoomTypeFormSchema>({
    schema: hotelRoomTypeSchema,
    defaultValues: roomTypeDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...roomTypeDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: RoomTypeFormSchema) => {
    submit({
      mutation: createRoomType.mutateAsync(values),

      success: "Room type created",

      onSuccess: (response) => {
        const result: EntityCreateResult<HotelRoomType> = {
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
      title="Create Room Type"
      description="Create a new room type"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createRoomType.isPending}
      >
        <div className="space-y-6">
          <div className="grid gap-4">
            <FormInput<RoomTypeFormSchema>
              name="code"
              label="Code"
              placeholder="DLX-KING"
            />

            <FormInput<RoomTypeFormSchema>
              name="name"
              label="Name"
              placeholder="Deluxe King Room"
            />

            <FormTextarea<RoomTypeFormSchema>
              name="description"
              label="Description"
              placeholder="Room type description"
            />
          </div>

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createRoomType.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createRoomType.isPending}>
              {createRoomType.isPending ? "Creating..." : "Create Room Type"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
