import { YachtFormSchema } from "../schema/core/yacht.schema";

export const yachtBasicDefaultValues = {
  // =========================
  // CORE
  // =========================

  providerBookingId: "",
  serviceTypeId: "",
  bookingItemTypeId: "",
  marina: [],
  name: "",
  tagIds: [],
  active: true,
  featured: false,
  searchable: true,
  searchPriority: 0,
} satisfies Pick<
  YachtFormSchema,
  | "providerBookingId"
  | "serviceTypeId"
  | "bookingItemTypeId"
  | "marina"
  | "name"
  | "tagIds"
  | "active"
  | "featured"
  | "searchable"
  | "searchPriority"
>;
