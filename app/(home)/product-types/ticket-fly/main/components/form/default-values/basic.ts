import { FlyFormSchema } from "../schema/core/fly.schema";

export const flyBasicDefaultValues = {
  // =========================
  // BASIC
  // =========================

  name: "",
  active: true,
  providerBookingId: "",
  serviceTypeId: "",
  bookingItemTypeId: "",

  // =========================
  // AIRLINE
  // =========================

  airlineId: "",

  // =========================
  // SEO / SEARCH
  // =========================

  tagIds: [],
  featured: false,
  searchable: true,
  searchPriority: 0,
} satisfies Pick<
  FlyFormSchema,
  | "name"
  | "active"
  | "providerBookingId"
  | "serviceTypeId"
  | "bookingItemTypeId"
  | "airlineId"
  | "tagIds"
  | "featured"
  | "searchable"
  | "searchPriority"
>;
