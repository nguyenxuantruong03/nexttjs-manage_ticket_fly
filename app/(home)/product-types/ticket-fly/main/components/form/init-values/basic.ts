import { Fly } from "@/types/product-types/ticket-fly/core/fly.types";
import { FlyFormSchema } from "../schema/core/fly.schema";

export function initFlyBasicValues(
  ticketFly: Fly,
): Pick<
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
> {
  return {
    name: ticketFly.name ?? "",
    active: ticketFly.active ?? true,
    providerBookingId: ticketFly.providerBookingId ?? "",
    serviceTypeId: ticketFly.serviceTypeId ?? "",
    bookingItemTypeId: ticketFly.bookingItemTypeId ?? "",
    airlineId: ticketFly.airlineId ?? "",
    tagIds: ticketFly.tagIds ?? [],
    featured: ticketFly.featured ?? false,
    searchable: ticketFly.searchable ?? true,
    searchPriority: ticketFly.searchPriority ?? 0,
  };
}
