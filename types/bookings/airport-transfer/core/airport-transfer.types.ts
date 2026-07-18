import { AirportTransferBooking } from "../booking/booking.types";
import { AirportTransferServiceType } from "../enums";
import { AirportTransferFavorite } from "../favorite/favorite.types";
import { AirportTransferContactInformation } from "../flight/contact-information.types";
import { AirportTransferFlightSupport } from "../flight/flight-support.types";
import { AirportTransferLuggagePolicy } from "../flight/luggage-policy.types";
import { AirportTransferMeetAndGreet } from "../flight/meet-and-greet.types";
import { AirportTransferPassengerRequirement } from "../flight/passenger-requirement.types";
import { AirportTransferSpecialRequest } from "../flight/special-request.types";
import { AirportTransferWaitingPolicy } from "../flight/waiting-policy.types";
import { AirportTransferPrice } from "../pricing/price.types";
import { AirportTransferRatingSummary } from "../review/rating-summary.types";
import { AirportTransferReview } from "../review/review.types";
import { AirportTransferRoute } from "../routes/route.types";
import { AirportTransferSchedule } from "../routes/schedule.types";
import { AirportTransferAvailability } from "../trip/availability.types";
import { AirportTransferCapacity } from "../trip/capacity.types";
import { AirportTransferTrip } from "../trip/trip.types";
import { AirportTransferVehicle } from "../vehicle/vehicle.types";
import { AirportTransferNotice } from "./notice.types";

export interface AirportTransfer {
  id: string;

  providerBookingId: string;

  availability?: AirportTransferAvailability;
  capacity?: AirportTransferCapacity;

  routes: AirportTransferRoute[];
  trips: AirportTransferTrip[];
  vehicle: AirportTransferVehicle[];

  bookings: AirportTransferBooking[];

  flightSupport?: AirportTransferFlightSupport;
  meetAndGreet?: AirportTransferMeetAndGreet;
  waitingPolicy?: AirportTransferWaitingPolicy;
  luggagePolicy?: AirportTransferLuggagePolicy;
  passengerRequirement?: AirportTransferPassengerRequirement;
  contactInformation?: AirportTransferContactInformation;
  specialRequest?: AirportTransferSpecialRequest;

  price?: AirportTransferPrice;
  notice?: AirportTransferNotice;
  reviews: AirportTransferReview[];
  ratingSummary?: AirportTransferRatingSummary;
  favorites: AirportTransferFavorite[];
  schedules: AirportTransferSchedule[];
  active: boolean;
  serviceType: AirportTransferServiceType;
  instantConfirmation: boolean;

  name: string;
  slug: string;

  aliases: string[];
  keywords: string[];
  tags: string[];

  searchText?: string;

  featured: boolean;
  searchable: boolean;
  searchPriority: number;

  createdAt: string;
  updatedAt: string;
}
