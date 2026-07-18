import { YachtBookingPolicy } from "./booking-policy.types";
import { YachtCancellationPolicy } from "./cancellation-policy.types";
import { YachtFlightSupport } from "./flight-support.types";
import { YachtLuggagePolicy } from "./luggage-policy.types";
import { YachtMeetAndGreet } from "./meet-greet.types";
import { YachtPassengerRequirement } from "./passenger-requirement.types";
import { YachtWaitingPolicy } from "./waiting-policy.types";

export interface YachtPolicies {
  id: string;

  yachtId: string;

  cancellation?: YachtCancellationPolicy | null;
  passenger?: YachtPassengerRequirement | null;
  luggage?: YachtLuggagePolicy | null;
  waiting?: YachtWaitingPolicy | null;
  meetAndGreet?: YachtMeetAndGreet | null;
  flightSupport?: YachtFlightSupport | null;
  booking?: YachtBookingPolicy | null;

  createdAt: Date;

  updatedAt: Date;
}