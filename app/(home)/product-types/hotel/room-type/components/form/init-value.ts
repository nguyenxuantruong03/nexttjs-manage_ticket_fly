import { HotelRoomType } from "@/types/product-types/hotel/room/room-type.types";

import { roomTypeDefaultValues } from "./default-values";

import { RoomTypeFormSchema } from "./schema";

export function initRoomTypeFormValues(
  roomType?: HotelRoomType,
): RoomTypeFormSchema {
  if (!roomType) {
    return structuredClone(roomTypeDefaultValues);
  }

  return {
    // ======================================================
    // RELATION
    // ======================================================

    categoryId: roomType.categoryId ?? null,
    bathroomTypeId: roomType.bathroomTypeId ?? null,
    viewId: roomType.viewId ?? null,

    // ======================================================
    // BASIC
    // ======================================================

    code: roomType.code ?? null,
    name: roomType.name ?? "",
    description: roomType.description ?? null,

    // ======================================================
    // ROOM
    // ======================================================

    roomSize: roomType.roomSize ?? null,
    bedCount: roomType.bedCount ?? null,
    bathroomCount: roomType.bathroomCount ?? null,
    floor: roomType.floor ?? null,

    // ======================================================
    // CAPACITY
    // ======================================================

    maxGuests: roomType.maxGuests ?? null,
    maxAdults: roomType.maxAdults ?? null,
    maxChildren: roomType.maxChildren ?? null,

    // ======================================================
    // FEATURES
    // ======================================================

    smokingAllowed: roomType.smokingAllowed ?? null,
    balcony: roomType.balcony ?? null,
    kitchen: roomType.kitchen ?? null,
    accessible: roomType.accessible ?? null,

    // ======================================================
    // STATUS
    // ======================================================

    active: roomType.active ?? true,
    sortOrder: roomType.sortOrder ?? 0,
  };
}
