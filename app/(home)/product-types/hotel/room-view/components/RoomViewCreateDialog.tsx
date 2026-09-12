"use client";

import { FormInput } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/form/entity-selector";

import { RoomViewFormSchema, RoomViewSchema } from "./form/schema";

import { roomViewDefaultValues } from "./form/default-values";

import { RoomView } from "@/types/product-types/hotel/room/room.types";

import { useCreateHotelRoomView } from "@/hooks/product-types/hotel/hotel-room-view";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";
import { FormIcon } from "@/components/form/form-data/FormIcon";

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
  const createRoomView = useCreateHotelRoomView();

  return (
    <EntityCreateFormDialog<RoomViewFormSchema, Partial<RoomView>, RoomView>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createRoomView}
      config={{
        schema: RoomViewSchema,
        defaultValues: roomViewDefaultValues,
        title: "Create Room View",
        description: "Create a new room view",
        success: "Room view created",
        submitText: "Create Room View",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<RoomView> => ({
          value: response.id,
          label: response.name ?? "Room View",
          data: response,
        }),
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<RoomViewFormSchema>
          name="name"
          label="Name"
          placeholder="Room view name"
        />

        <FormIcon<RoomViewFormSchema>
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
    </EntityCreateFormDialog>
  );
}
