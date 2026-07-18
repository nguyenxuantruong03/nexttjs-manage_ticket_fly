import { HotelBookingPolicy } from "./booking.types";
import { HotelCancellationPolicy } from "./cancellation.types";
import { HotelCheckInPolicy } from "./check-in.types";
import { HotelGuestPolicy } from "./guest.types";
import { HotelHouseRules } from "./house-rule.types";
import { HotelPaymentPolicy } from "./payment.types";

export interface HotelPolicies {
  id: string;

  ratePlanId: string;

  checkIn?: HotelCheckInPolicy | null;

  guest?: HotelGuestPolicy | null;

  payment?: HotelPaymentPolicy | null;

  cancellation?: HotelCancellationPolicy | null;

  booking?: HotelBookingPolicy | null;

  houseRules?: HotelHouseRules | null;
}
