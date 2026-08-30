import { BusFormSchema } from "../schema/core/bus.schema";

export const busBasicDefaultValues = {
  providerBookingId: "",
  bookingItemTypeId: "",
  serviceTypeId: "",
  name: "",
  searchPriority: 0,
  active: true,
  searchable: true,
  featured: false,
  tagIds: [],
} satisfies Pick<
  BusFormSchema,
  | "providerBookingId"
  | "bookingItemTypeId"
  | "serviceTypeId"
  | "name"
  | "searchPriority"
  | "active"
  | "searchable"
  | "featured"
  | "tagIds"
>;