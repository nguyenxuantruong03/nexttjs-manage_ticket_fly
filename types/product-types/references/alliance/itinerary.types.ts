import { FlyBooking } from "../../ticket-fly/booking/booking.types";
import { FlyTrip } from "../../ticket-fly/trip/trip.types";

export interface FlyItinerary {
  id: string;

  bookingId: string;

  booking?: FlyBooking;

  segments?: FlyItinerarySegment[];
}

export interface FlyItinerarySegment {
  id: string;

  itineraryId: string;
  itinerary?: FlyItinerary;

  tripId: string;
  trip?: FlyTrip;

  order: number;
}
