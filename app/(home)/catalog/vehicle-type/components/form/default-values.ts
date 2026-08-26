import { VehicleTypeFormSchema } from "./schema";

export const vehicleTypeDefaultValues: VehicleTypeFormSchema = {
  // ======================================================
  // BASIC
  // ======================================================

  name: "",

  description: null,

  icon: null,

  // ======================================================
  // BOOKING TYPE
  // ======================================================

  bookingTypeId: "",

  // ======================================================
  // STATUS
  // ======================================================

  active: true,

  sortOrder: 0,
};
