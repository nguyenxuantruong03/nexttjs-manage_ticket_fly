import { FieldPath } from "react-hook-form";

import { HotelCheckInPolicySchemaForm } from "../form/schema";

type HotelCheckInPolicyFieldPath = FieldPath<HotelCheckInPolicySchemaForm>;

export const hotelCheckInPolicyFieldGroups: Record<
  string,
  readonly HotelCheckInPolicyFieldPath[]
> = {
  basic: ["hotelId"],
  
  checkIn: ["checkInFrom", "checkInUntil"],

  checkOut: ["checkOutUntil", "minimumAge"],
};
