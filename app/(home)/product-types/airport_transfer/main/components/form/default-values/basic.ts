import { AirportTransferFormSchema } from "../schema/core/schema";

export const airportTransferBasicDefaultValues = {
  providerBookingId: "",

  name: "",

  serviceTypeId: "",

  bookingItemTypeId: "",

  instantConfirmation: false,

  active: true,

  notice: {
    title: "",

    color: "",

    icon: "",

    priority: 0,

    active: true,

    description: "",
  },
} satisfies Pick<
  AirportTransferFormSchema,
  | "providerBookingId"
  | "name"
  | "serviceTypeId"
  | "bookingItemTypeId"
  | "instantConfirmation"
  | "active"
  | "notice"
>;
