import { HotelRoomType } from "@/types/bookings/hotel/room/room-type.types";
import { roomTypeDefaultValues } from "./default-values";
import { RoomTypeFormSchema } from "./schema";

export function initRoomTypeFormValues(
  roomType: HotelRoomType,
): RoomTypeFormSchema {
  if (!roomType) {
    return structuredClone(roomTypeDefaultValues);
  }

  return structuredClone(roomType);
}
