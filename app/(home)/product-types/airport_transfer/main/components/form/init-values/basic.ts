import { AirportTransfer } from "@/types/product-types/airport-transfer/core/airport-transfer.types";

import { AirportTransferFormSchema } from "../schema/core/schema";

export function initAirportTransferBasicValues(
  airportTransfer: AirportTransfer,
): Pick<
  AirportTransferFormSchema,
  | "providerBookingId"
  | "name"
  | "serviceTypeId"
  | "bookingItemTypeId"
  | "instantConfirmation"
  | "active"
  | "notice"
> {
  return {
    providerBookingId: airportTransfer.providerBookingId ?? "",

    name: airportTransfer.name ?? "",

    serviceTypeId: airportTransfer.serviceTypeId ?? "",

    bookingItemTypeId: airportTransfer.bookingItemTypeId ?? "",

    instantConfirmation: airportTransfer.instantConfirmation ?? false,

    active: airportTransfer.active ?? true,

    notice: {
      title: airportTransfer.notice?.title ?? "",

      color: airportTransfer.notice?.color ?? "",

      icon: airportTransfer.notice?.icon ?? "",

      priority: airportTransfer.notice?.priority ?? 0,

      active: airportTransfer.notice?.active ?? true,

      description: airportTransfer.notice?.description ?? "",
    },
  };
}
