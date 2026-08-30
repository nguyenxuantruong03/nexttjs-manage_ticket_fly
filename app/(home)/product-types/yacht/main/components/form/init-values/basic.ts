import { Yacht } from "@/types/product-types/yacht/core/yacht.types";

import { YachtFormSchema } from "../schema/core/yacht.schema";

export function initYachtBasicValues(
  yacht: Yacht,
): Pick<
  YachtFormSchema,
  | "providerBookingId"
  | "serviceTypeId"
  | "bookingItemTypeId"
  | "name"
  | "tagIds"
  | "active"
  | "featured"
  | "searchable"
  | "searchPriority"
  | "marina"
> {
  return {
    providerBookingId: yacht.providerBookingId ?? "",
    serviceTypeId: yacht.serviceTypeId ?? "",
    bookingItemTypeId: yacht.bookingItemTypeId ?? "",
    name: yacht.name ?? "",
    tagIds: yacht.tagIds ?? [],
    active: yacht.active ?? true,
    featured: yacht.featured ?? false,
    searchable: yacht.searchable ?? true,
    searchPriority: yacht.searchPriority ?? 0,

    marina:
      yacht.marina?.map((marina) => ({
        name: marina.name ?? "",
        addressId: marina.addressId ?? "",
        latitude: marina.latitude ?? null,
        longitude: marina.longitude ?? null,
        contactPhone: marina.contactPhone ?? null,
        operatingHours: marina.operatingHours ?? null,
        departureRoutes: marina.departureRoutes ?? [],
        destinationRoutes: marina.destinationRoutes ?? [],
        marinaFacilities:
          marina.marinaFacilities?.map((facility) => ({
            facilityId: facility.facilityId ?? "",
            active: facility.active ?? true,
          })) ?? [],
      })) ?? [],
  };
}
