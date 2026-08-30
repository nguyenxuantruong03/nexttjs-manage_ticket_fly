import { RoomView } from "@/types/product-types/hotel/room/room.types";

import { roomViewDefaultValues } from "./default-values";

import { RoomViewFormSchema } from "./schema";

export function initRoomViewFormValues(
  roomView?: RoomView,
): RoomViewFormSchema {
  if (!roomView) {
    return structuredClone(roomViewDefaultValues);
  }

  return {
    name: roomView.name ?? "",
    description: roomView.description ?? null,
    icon: roomView.icon ?? null,
    active: roomView.active ?? true,
    sortOrder: roomView.sortOrder ?? 0,
  };
}
