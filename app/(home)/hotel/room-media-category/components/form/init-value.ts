import { RoomMediaCategory } from "@/types/bookings/hotel/room/room-media.types";
import { roomMediaCategoryDefaultValues } from "./default-values";
import { RoomMediaCategoryFormSchema } from "./schema";

export function initRoomMediaCategoryFormValues(
  roomMediaCategory: RoomMediaCategory,
): RoomMediaCategoryFormSchema {
  if (!roomMediaCategory) {
    return structuredClone(roomMediaCategoryDefaultValues);
  }

  return structuredClone(roomMediaCategory);
}
