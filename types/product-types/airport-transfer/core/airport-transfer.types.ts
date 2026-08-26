import { ProviderBooking } from "../../../users/provider-bookings";

import { AirportTransferPolicyMapper } from "../airport-transfer-policy-mapper";
import { AirportTransferBooking } from "../booking/booking.types";
import { AirportTransferFavorite } from "../favorite/favorite.types";
import { AirportTransferContactInformation } from "../flight/contact-information.types";
import { AirportTransferPrice } from "../pricing/price.types";
import { AirportTransferRatingSummary } from "../review/rating-summary.types";
import { AirportTransferReview } from "../review/review.types";
import { AirportTransferRoute } from "../routes/route.types";
import { AirportTransferSchedule } from "../routes/schedule.types";
import { AirportTransferAvailability } from "../trip/availability.types";
import { AirportTransferCapacity } from "../trip/capacity.types";
import { AirportTransferVehicle } from "../vehicle/vehicle.types";
import { AirportTransferNotice } from "./notice.types";
import { AirportTransferPackageMapper } from "../airportTransfer-package-mapper.type";
import { AirportTransferExtraMapper } from "../airportTransfer-extra-mapper.type";
import { BookingItemType } from "@/types/common/commerce/booking-item-type.type";
import { ServiceType } from "@/types/common/catalog/service-type.type";
import { SearchTag } from "@/types/searchs/search/tag.types";

export interface AirportTransfer {
  id: string;

  // ======================================================
  // PROVIDER
  // ======================================================

  providerBookingId: string;

  providerBooking: ProviderBooking;

  // ======================================================
  // AVAILABILITY / CAPACITY
  // ======================================================

  availability: AirportTransferAvailability | null;

  capacity: AirportTransferCapacity | null;

  // ======================================================
  // ROUTES / TRIPS / VEHICLES
  // ======================================================

  routes: AirportTransferRoute[];

  vehicle: AirportTransferVehicle[];

  // ======================================================
  // BOOKINGS
  // ======================================================

  bookings: AirportTransferBooking[];

  // ======================================================
  // POLICIES / CONTACT
  // ======================================================

  policies: AirportTransferPolicyMapper[];

  contactInformation: AirportTransferContactInformation | null;

  // ======================================================
  // PRICING
  // ======================================================

  price: AirportTransferPrice | null;

  notice: AirportTransferNotice | null;

  // ======================================================
  // REVIEWS
  // ======================================================

  reviews: AirportTransferReview[];

  ratingSummary: AirportTransferRatingSummary | null;

  favorites: AirportTransferFavorite[];

  // ======================================================
  // SCHEDULES
  // ======================================================

  schedules: AirportTransferSchedule[];

  // ======================================================
  // STATUS
  // ======================================================

  active: boolean;

  instantConfirmation: boolean;

  // ======================================================
  // PACKAGE
  // ======================================================

  airportTransferPackageMapper: AirportTransferPackageMapper[];

  // ======================================================
  // BOOKING ITEM TYPE
  // ======================================================

  bookingItemTypeId: string;

  bookingItemType: BookingItemType;

  // ======================================================
  // SERVICE TYPE
  // ======================================================

  serviceTypeId: string;

  serviceType: ServiceType;

  // ======================================================
  // SEARCH METADATA
  // ======================================================

  name: string;

  slug: string;

  aliases: string[];

  keywords: string[];

  tagIds: string[];
  tags: SearchTag[];

  searchText: string;

  featured: boolean;

  searchable: boolean;

  searchPriority: number;

  // ======================================================
  // STATISTICS
  // ======================================================

  ratingAverage: number;

  reviewCount: number;

  bookingCount: number;

  favoriteCount: number;

  // ======================================================
  // EXTRA
  // ======================================================

  airportTransferExtraMapper: AirportTransferExtraMapper[];

  // ======================================================
  // TIMESTAMPS
  // ======================================================

  createdAt: string;

  updatedAt: string;
}