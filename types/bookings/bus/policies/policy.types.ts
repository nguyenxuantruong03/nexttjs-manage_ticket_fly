import { BusBoardingPolicy } from "./boarding.types";
import { BusCancellationPolicy } from "./cancellation.types";
import { BusChildPolicy } from "./child.types";
import { BusLuggagePolicy } from "./luggage.types";
import { BusPassengerPolicy } from "./passenger.types";
import { BusTicketChangePolicy } from "./ticket-change.types";

export interface BusPolicies {
  id: string;

  busId: string;

  cancellation?: BusCancellationPolicy;

  luggage?: BusLuggagePolicy;

  child?: BusChildPolicy;

  boarding?: BusBoardingPolicy;

  change?: BusTicketChangePolicy;

  passenger?: BusPassengerPolicy;

  createdAt: string;

  updatedAt: string;
}