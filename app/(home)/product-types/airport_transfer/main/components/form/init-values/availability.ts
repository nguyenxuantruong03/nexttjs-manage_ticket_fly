import { AirportTransfer } from "@/types/product-types/airport-transfer/core/airport-transfer.types";

import { AirportTransferFormSchema } from "../schema/core/schema";

export function initAirportTransferAvailabilityValues(
  airportTransfer: AirportTransfer,
): Pick<AirportTransferFormSchema, "availability">["availability"] {
  return {
    available: airportTransfer.availability?.available ?? true,

    calendars:
      airportTransfer.availability?.calendars?.map((calendar) => ({
        availabilityId: calendar.availabilityId ?? "",

        date: calendar.date ?? "",

        available: calendar.available ?? true,

        totalVehicles: calendar.totalVehicles ?? 0,

        remainingVehicles: calendar.remainingVehicles ?? 0,

        stopSell: calendar.stopSell ?? false,

        minimumNoticeMinutes: calendar.minimumNoticeMinutes ?? 0,
      })) ?? [],

    blackoutDates:
      airportTransfer.availability?.blackoutDates?.map((blackout) => ({
        date: blackout.date ?? "",

        reason: blackout.reason ?? "",
      })) ?? [],
  };
}
