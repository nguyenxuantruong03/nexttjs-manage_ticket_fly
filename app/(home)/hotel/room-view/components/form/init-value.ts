import { RoomView } from "@/types/bookings/hotel/room/room.types";
import { roomViewDefaultValues } from "./default-values";
import { RoomViewFormSchema } from "./schema";

export function initRoomViewFormValues(
  roomView: RoomView,
): RoomViewFormSchema {
  if (!roomView) {
    return structuredClone(roomViewDefaultValues);
  }

  return structuredClone(roomView);
}
