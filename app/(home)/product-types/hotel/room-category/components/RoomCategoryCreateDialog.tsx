"use client";

import { FormInput } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import { RoomCategoryFormSchema, RoomCategorySchema } from "./form/schema";

import { roomCategoryDefaultValues } from "./form/default-values";

import { RoomCategory } from "@/types/product-types/hotel/room/room.types";

import { useCreateHotelRoomCategory } from "@/hooks/product-types/hotel/hotel-room-category";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

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
  const createRoomCategory = useCreateHotelRoomCategory();

  return (
    <EntityCreateFormDialog<RoomCategoryFormSchema, RoomCategory>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createRoomCategory}
      config={{
        schema: RoomCategorySchema,
        defaultValues: roomCategoryDefaultValues,
        title: "Create Room Category",
        description: "Create a new room category",
        success: "Room category created",
        submitText: "Create Room Category",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<RoomCategory> => ({
          value: response.id,
          label: response.name ?? "Room Category",
          data: response,
        }),
      }}
    >
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
    </EntityCreateFormDialog>
  );
}
