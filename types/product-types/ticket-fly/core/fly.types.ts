import { ProviderBooking } from "../../../users/provider-bookings";
import { SearchTag } from "../../../searchs/search/tag.types";
import { FlyFavorite } from "../favorite/favorite.types";
import { FlyPolicyMapper } from "../policies/policies.types";
import { FlyPrice } from "../pricing/price.types";
import { FlyRoute } from "../routes/route.types";
import { FlyPackageMapper } from "../fly-package-mapper.type";
import { FlyImage } from "./image.types";
import { FlyNotice } from "./notice.types";
import { ServiceType } from "@/types/common/catalog/service-type.type";
import { BookingItemType } from "@/types/common/commerce/booking-item-type.type";
import { FlyExtraMapper } from "../fly-extra-mapper.type";
import { FlyAirline } from "../../references/airline/airline.types";
import { FlySchedule } from "../../references/airline/schedule.types";

export interface Fly {
  id: string;

  // ======================================================
  // PROVIDER
  // ======================================================

  providerBookingId: string;
  providerBooking: ProviderBooking;

  // ======================================================
  // SERVICE
  // ======================================================

  serviceTypeId: string;
  serviceType: ServiceType;

  bookingItemTypeId: string;
  bookingItemType: BookingItemType;

  // ======================================================
  // AIRLINE
  // ======================================================

  airlineId: string;
  airline: FlyAirline;

  // ======================================================
  // RELATIONS
  // ======================================================

  flyExtraMapper: FlyExtraMapper[];
  flyPackageMapper: FlyPackageMapper[];
  routes: FlyRoute[];
  policies: FlyPolicyMapper[];

  price: FlyPrice | null;
  notice: FlyNotice | null;

  images: FlyImage[];
  favorites: FlyFavorite[];
  schedule: FlySchedule[];

  // ======================================================
  // STATUS
  // ======================================================

  active: boolean;

  // ======================================================
  // SEARCH
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