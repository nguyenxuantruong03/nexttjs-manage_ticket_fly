import { RoomCategory } from "@/types/product-types/hotel/room/room.types";
import { roomCategoryDefaultValues } from "./default-values";
import { RoomCategoryFormSchema } from "./schema";

export function initRoomCategoryFormValues(
  roomCategory: RoomCategory,
): RoomCategoryFormSchema {
  if (!roomCategory) {
    return structuredClone(roomCategoryDefaultValues);
  }

  return structuredClone(roomCategory);
}
