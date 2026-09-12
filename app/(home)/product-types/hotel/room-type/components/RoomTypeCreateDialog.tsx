"use client";

import { FormInput, FormTextarea } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/form/entity-selector";

import { HotelRoomType } from "@/types/product-types/hotel/room/room-type.types";

import { RoomTypeFormSchema } from "./form/schema";

import { useCreateHotelRoomType } from "@/hooks/product-types/hotel/hotel-room-type";

import { roomTypeDefaultValues } from "./form/default-values";

import { hotelRoomTypeSchema } from "../../main/components/form/schema/room/room-type.schema";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

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
  const createRoomType = useCreateHotelRoomType();

  return (
    <EntityCreateFormDialog<
      RoomTypeFormSchema,
      Partial<HotelRoomType>,
      HotelRoomType
    >
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createRoomType}
      config={{
        schema: hotelRoomTypeSchema,
        defaultValues: roomTypeDefaultValues,
        title: "Create Room Type",
        description: "Create a new room type",
        success: "Room type created",
        submitText: "Create Room Type",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<HotelRoomType> => ({
          value: response.id,
          label: response.name,
          data: response,
        }),
      }}
    >
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
    </EntityCreateFormDialog>
  );
}
