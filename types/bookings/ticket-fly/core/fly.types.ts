import { ProviderBooking } from "../../provider-bookings";
import { FlyAirline } from "../airline/airline.types";
import { FlySchedule } from "../airline/schedule.types";
import { FlyFavorite } from "../favorite/favorite.types";
import { FlyPolicies } from "../policies/policies.types";
import { FlyPrice } from "../pricing/price.types";
import { FlyRoute } from "../routes/route.types";
import { FlyTrip } from "../trip/trip.types";
import { FlyImage } from "./image.types";
import { FlyNotice } from "./notice.types";

export interface TicketFly {
  id: string;

  providerBookingId: string;

  providerBooking?: ProviderBooking;

  airlineId: string;

  airline?: FlyAirline;
  routes?: FlyRoute[];
  trips?: FlyTrip[];
  policies?: FlyPolicies;
  price?: FlyPrice;
  notice?: FlyNotice;
  images?: FlyImage[];
  favorites?: FlyFavorite[];
  schedule?: FlySchedule[];

  active: boolean;

  name: string;

  tagIds: string[];

  featured: boolean;

  searchable: boolean;

  searchPriority: number;

  createdAt: Date;

  updatedAt: Date;
}
