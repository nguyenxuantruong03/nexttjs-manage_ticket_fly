import { AirportTransferFormSchema } from "../schema/core/schema";

export const airportTransferCapacityDefaultValues = {
  maxTripsPerDay: 0,

  maxVehiclesPerDay: 0,

  overbookingAllowed: false,
} satisfies NonNullable<
  Pick<AirportTransferFormSchema, "capacity">["capacity"]
>;
