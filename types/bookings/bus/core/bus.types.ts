// ======================================================
// Bus
// ======================================================

import { BusBooking } from "../booking/booking.types";
import { BusFavorite } from "../favorite/favorites.types";
import { BusPolicies } from "../policies/policy.types";
import { BusPrice } from "../pricing/price.types";
import { BusReview } from "../reviews/review.types";
import { BusRoute } from "../routes/route.types";
import { BusVehicle } from "../vehicle/vehicle.types";
import { BusImage } from "./images.types";

export interface Bus {
  id: string;

  providerBookingId: string;

  routes: BusRoute[];
  policies?: BusPolicies;
  vehicles?: BusVehicle[];
  reviews: BusReview[];
  images: BusImage[];
  favorites: BusFavorite[];
  price: BusPrice[];
  booking: BusBooking[];

  active: boolean;

  // Search Metadata
  name: string;

  featured: boolean;

  tagIds: string[];

  searchPriority: number;

  createdAt: string;

  updatedAt: string;
}
