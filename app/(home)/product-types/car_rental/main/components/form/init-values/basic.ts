import { CarRental } from "@/types/product-types/car_rental/core/car-rental.types";

import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

export function initCarRentalBasicValues(
  rental: CarRental,
): Pick<
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
> {
  return {
    driverOption: rental.driverOption,

    serviceTypeId: rental.serviceTypeId ?? "",

    bookingItemTypeId: rental.bookingItemTypeId ?? "",

    name: rental.name ?? "",

    tagIds: rental.tagIds ?? [],

    featured: rental.featured ?? false,

    searchable: rental.searchable ?? true,

    searchPriority: rental.searchPriority ?? 0,

    active: rental.active ?? true,

    providerBookingId: rental.providerBookingId ?? "",
  };
}
