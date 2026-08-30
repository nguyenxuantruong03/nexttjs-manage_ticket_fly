import { HotelSchemaForm } from "../schema/core/hotel.schema";

export const hotelPolicyDefaultValues = {
  policies: [
    {
      policyId: "",

      valueBoolean: false,

      valueNumber: undefined,

      valueText: "",

      valueJson: undefined,

      active: true,
    },
  ],

  checkinPolicy: {
    checkInFrom: "",

    checkInUntil: "",

    checkOutUntil: "",

    minimumAge: undefined,
  },
} satisfies Pick<HotelSchemaForm, "policies" | "checkinPolicy">;
