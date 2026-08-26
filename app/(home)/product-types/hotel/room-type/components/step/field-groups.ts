import { FieldPath } from "react-hook-form";

import { RoomTypeFormSchema } from "../form/schema";

type HotelRoomTypeFieldPath = FieldPath<RoomTypeFormSchema>;

export const roomTypeFieldGroups: Record<
  string,
  readonly HotelRoomTypeFieldPath[]
> = {
  // ======================================================
  // RELATION
  // ======================================================

  relation: [
    "categoryId",
    "bathroomTypeId",
    "viewId",
  ],

  // ======================================================
  // BASIC
  // ======================================================

  basic: [
    "code",
    "name",
    "description",
  ],

  // ======================================================
  // ROOM
  // ======================================================

  room: [
    "roomSize",
    "bedCount",
    "bathroomCount",
    "floor",
  ],

  // ======================================================
  // CAPACITY
  // ======================================================

  capacity: [
    "maxGuests",
    "maxAdults",
    "maxChildren",
  ],

  // ======================================================
  // FEATURES
  // ======================================================

  features: [
    "smokingAllowed",
    "balcony",
    "kitchen",
    "accessible",
    "active",
    "sortOrder",
  ],
};