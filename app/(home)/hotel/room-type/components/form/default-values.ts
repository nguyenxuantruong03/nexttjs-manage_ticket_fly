import { RoomTypeFormSchema } from "./schema";

export const roomTypeDefaultValues: RoomTypeFormSchema = {
  // ======================================================
  // RELATION
  // ======================================================

  categoryId: null,

  bathroomTypeId: null,

  viewId: null,

  // ======================================================
  // BASIC
  // ======================================================

  code: "",

  name: "",

  description: "",

  // ======================================================
  // ROOM
  // ======================================================

  roomSize: null,

  bedCount: null,

  bathroomCount: null,

  floor: null,

  // ======================================================
  // CAPACITY
  // ======================================================

  maxGuests: null,

  maxAdults: null,

  maxChildren: null,

  // ======================================================
  // FEATURES
  // ======================================================

  smokingAllowed: false,

  balcony: false,

  kitchen: false,

  accessible: false,

  active: true,

  sortOrder: 0,
};