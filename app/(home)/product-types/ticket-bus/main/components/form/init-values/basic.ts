import { Bus } from "@/types/product-types/bus/core/bus.types";
import { BusFormSchema } from "../schema/core/bus.schema";

export function initBusBasicValues(
  ticketBus: Bus,
): Pick<
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
> {
  return {
    providerBookingId: ticketBus.providerBookingId ?? "",
    bookingItemTypeId: ticketBus.bookingItemTypeId ?? "",
    serviceTypeId: ticketBus.serviceTypeId ?? "",
    name: ticketBus.name ?? "",
    searchPriority: ticketBus.searchPriority ?? 0,
    active: ticketBus.active ?? true,
    searchable: ticketBus.searchable ?? true,
    featured: ticketBus.featured ?? false,
    tagIds: ticketBus.tagIds ?? [],
  };
}
