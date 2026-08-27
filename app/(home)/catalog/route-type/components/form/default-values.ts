import { RouteTypeFormSchema } from "./schema";

export const routeTypeDefaultValues: RouteTypeFormSchema = {
  // ======================================================
  // BASIC
  // ======================================================

  name: "",

  description: null,

  icon: null,

  // ======================================================
  // BOOKING TYPE
  // ======================================================

  bookingTypeIds: [],

  // ======================================================
  // STATUS
  // ======================================================

  active: true,

  sortOrder: 0,
};