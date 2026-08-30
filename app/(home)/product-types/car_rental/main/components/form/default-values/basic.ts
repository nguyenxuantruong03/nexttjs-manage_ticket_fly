import { DriverOption } from "@/types/product-types/car_rental/enums";

import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

export const carRentalBasicDefaultValues = {
  driverOption: DriverOption.with_driver,

  serviceTypeId: "",

  bookingItemTypeId: "",

  name: "",

  tagIds: [],

  featured: false,

  searchable: true,

  searchPriority: 0,

  active: true,

  providerBookingId: "",
} satisfies Pick<
  CarRentalFormSchema,
  | "driverOption"
  | "serviceTypeId"
  | "bookingItemTypeId"
  | "name"
  | "tagIds"
  | "featured"
  | "searchable"
  | "searchPriority"
  | "active"
  | "providerBookingId"
>;
