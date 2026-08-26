import { ProviderBooking } from "../../../users/provider-bookings";

import { SearchTag } from "../../../searchs/search/tag.types";

import { YachtBooking } from "../booking/booking.types";
import { YachtCrew } from "../crew/crew.types";
import { YachtFavorite } from "../favorite/favorite.types";
import { YachtMarina } from "../marina/marina.types";
import { YachtPolicyMapper } from "../policies/policies.types";
import { YachtPrice } from "../pricing/price.types";
import { YachtRatingSummary } from "../reviews/rating-summary.types";
import { YachtReview } from "../reviews/review.types";
import { YachtRoute } from "../routes/route.types";
import { YachtAvailability } from "../trips/availability.types";
import { YachtInventoryLock } from "../trips/inventory-lock.types";
import { YachtTrip } from "../trips/trip.types";
import { YachtVehicle } from "../vehicles/vehicle.types";
import { YachtImage } from "./image.types";
import { ServiceType } from "@/types/common/catalog/service-type.type";
import { BookingItemType } from "@/types/common/commerce/booking-item-type.type";
import { YachtNotice } from "./notice.tyoes";
import { YachtExtraMapper } from "../yacht-extra-mapper.type";
import { YachtPackageMapper } from "../yacht-package-mapper.type";

export interface Yacht {
  id: string;

  // ======================================================
  // PROVIDER
  // ======================================================

  providerBookingId: string;
  providerBooking: ProviderBooking;

  // ======================================================
  // SERVICE / BOOKING TYPE
  // ======================================================

  serviceTypeId: string;
  serviceType: ServiceType;

  bookingItemTypeId: string;
  bookingItemType: BookingItemType;

  // ======================================================
  // RELATIONS
  // ======================================================

  marina: YachtMarina[];
  yachtExtraMapper: YachtExtraMapper[];
  vehicle: YachtVehicle | null;
  yachtPackageMapper: YachtPackageMapper[];
  routes: YachtRoute[];

  availability: YachtAvailability | null;

  price: YachtPrice | null;

  policies: YachtPolicyMapper[];

  notice: YachtNotice | null;

  bookings: YachtBooking[];

  locks: YachtInventoryLock[];

  reviews: YachtReview[];

  image: YachtImage[];

  favorites: YachtFavorite[];

  ratingSummary: YachtRatingSummary | null;

  crew: YachtCrew[];

  // ======================================================
  // STATUS
  // ======================================================

  active: boolean;

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

  ratingAverage: number;

  reviewCount: number;

  bookingCount: number;

  favoriteCount: number;

  // ======================================================
  // TIMESTAMP
  // ======================================================

  createdAt: Date;

  updatedAt: Date;
}
