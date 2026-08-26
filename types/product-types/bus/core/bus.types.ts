import { SearchTag } from "@/types/searchs/search/tag.types";

import { ProviderBooking } from "../../../users/provider-bookings";

import { BusBooking } from "../booking/booking.types";
import { BusFavorite } from "../favorite/favorites.types";
import { BusPolicyMapper } from "../policy-mapper";
import { BusPrice } from "../pricing/price.types";
import { BusReview } from "../reviews/review.types";
import { BusRoute } from "../routes/route.types";
import { BusVehicle } from "../vehicle/vehicle.types";
import { BusImage } from "./images.types";

import { BookingItemType } from "@/types/common/commerce/booking-item-type.type";
import { ServiceType } from "@/types/common/catalog/service-type.type";

import { BusExtraMapper } from "../bus-extra-mapper.type";
import { BusPackageMapper } from "../bus-package-mapper.type";

export interface Bus {
  // ======================================================
  // BASIC
  // ======================================================

  id: string;

  providerBookingId: string;
  providerBooking: ProviderBooking;

  bookingItemTypeId: string;
  bookingItemType: BookingItemType;

  serviceTypeId: string;
  serviceType: ServiceType;

  name: string;

  slug: string;

  // ======================================================
  // SEARCH METADATA
  // ======================================================

  aliases: string[];

  keywords: string[];

  tagIds: string[];
  tags: SearchTag[];

  searchText: string;

  searchable: boolean;

  featured: boolean;

  searchPriority: number;

  ratingAverage: number;

  reviewCount: number;

  bookingCount: number;

  favoriteCount: number;

  // ======================================================
  // STATUS
  // ======================================================

  active: boolean;

  // ======================================================
  // RELATIONS
  // ======================================================

  busExtraMapper: BusExtraMapper[];

  routes: BusRoute[];

  policyMappers: BusPolicyMapper[];

  vehicle: BusVehicle[];

  reviews: BusReview[];

  busPackageMapper: BusPackageMapper[];

  images: BusImage[];

  favorites: BusFavorite[];

  price: BusPrice[];

  booking: BusBooking[];

  // ======================================================
  // TIMESTAMPS
  // ======================================================

  createdAt: string;

  updatedAt: string;
}