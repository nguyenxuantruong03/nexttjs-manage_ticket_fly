import { AirportTransferFormSchema } from "../schema/core/schema";

export const airportTransferAvailabilityDefaultValues = {
  available: true,

  calendars: [
    {
      availabilityId: "",

      date: "",

      available: true,

      totalVehicles: 0,

      remainingVehicles: 0,

      stopSell: false,

      minimumNoticeMinutes: 0,
    },
  ],

  blackoutDates: [
    {
      date: "",

      reason: "",
    },
  ],
} satisfies NonNullable<
  Pick<AirportTransferFormSchema, "availability">["availability"]
>;
